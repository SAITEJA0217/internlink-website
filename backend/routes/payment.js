import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import { getSupabase } from "../supabaseClient.js";

const router = express.Router();

/* ============================
   CREATE ORDER (SERVER PRICE)
============================ */
router.post("/create-order", async (req, res) => {
  const { internshipId } = req.body;

  try {
    const supabase = getSupabase();

    // 1️⃣ Fetch internship price from DB
    const { data: internship, error } = await supabase
      .from("internships")
      .select("price")
      .eq("id", internshipId)
      .single();

    if (error || !internship) {
      return res.status(400).json({ error: "Invalid internship" });
    }

    // 2️⃣ Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // 3️⃣ Create order
    const order = await razorpay.orders.create({
      amount: internship.price * 100, // ₹ → paise
      currency: "INR",
      receipt: `internlink_${internshipId}`,
    });

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

/* ============================
   VERIFY PAYMENT + STORE
============================ */
router.post("/verify", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    internshipId,
  } = req.body;

  try {
    // 1️⃣ Verify Razorpay signature
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false });
    }

    const supabase = getSupabase();

    // 2️⃣ Fetch amount again from DB (never trust frontend)
    const { data: internship, error: priceError } = await supabase
      .from("internships")
      .select("price")
      .eq("id", internshipId)
      .single();

    if (priceError || !internship) {
      return res.status(400).json({ success: false });
    }

    // 3️⃣ Store payment
    const { error } = await supabase.from("payments").insert({
      internship_id: internshipId,
      payment_id: razorpay_payment_id,
      razorpay_order_id,
      amount: internship.price,
      status: "success",
    });

    if (error) {
      console.error("Supabase Insert Error:", error);
      return res.status(500).json({ success: false });
    }

    res.json({
      success: true,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Verify Error:", error);
    res.status(500).json({ success: false });
  }
});

/* ============================
   VALIDATE PAYMENT (LOCK PAGE)
============================ */
router.get("/validate/:paymentId", async (req, res) => {
  const { paymentId } = req.params;

  try {
    const supabase = getSupabase();

    const { data, error } = await supabase
      .from("payments")
      .select("id")
      .eq("payment_id", paymentId)
      .eq("status", "success")
      .single();

    if (error || !data) {
      return res.status(401).json({ valid: false });
    }

    res.json({ valid: true });
  } catch (error) {
    console.error("Validate Error:", error);
    res.status(500).json({ valid: false });
  }
});

export default router;
