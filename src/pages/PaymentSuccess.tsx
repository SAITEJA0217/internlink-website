import { useEffect, useState } from "react";
import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const PaymentSuccess = () => {
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    const markPaymentAsPaid = async () => {
      try {
        const email = localStorage.getItem("internlink_email");

        if (!email) {
          setStatus("error");
          return;
        }

        const q = query(
          collection(db, "applications"),
          where("email", "==", email)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          setStatus("error");
          return;
        }

        snapshot.forEach(async (docSnap) => {
          await updateDoc(docSnap.ref, {
            paymentStatus: "paid",
            paymentConfirmedAt: new Date(),
          });
        });

        // Optional: clean up
        localStorage.removeItem("internlink_email");

        setStatus("done");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    markPaymentAsPaid();
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#020617",
      color: "#fff"
    }}>
      <div style={{
        maxWidth: "420px",
        width: "100%",
        padding: "32px",
        borderRadius: "16px",
        background: "#0f172a",
        textAlign: "center"
      }}>
        {status === "loading" && (
          <>
            <h2>Processing Payment...</h2>
            <p style={{ color: "#94a3b8", marginTop: "10px" }}>
              Please wait while we confirm your payment.
            </p>
          </>
        )}

        {status === "done" && (
          <>
            <h1 style={{ color: "#22c55e" }}>✅ Payment Successful</h1>
            <p style={{ marginTop: "12px", color: "#cbd5f5" }}>
              Your internship enrollment is confirmed.
            </p>
            <p style={{ fontSize: "14px", marginTop: "10px", color: "#94a3b8" }}>
              📩 Tasks, PDFs & next steps will be sent to your email.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h1 style={{ color: "#ef4444" }}>⚠️ Verification Pending</h1>
            <p style={{ marginTop: "12px", color: "#cbd5f5" }}>
              We could not automatically verify your payment.
            </p>
            <p style={{ fontSize: "14px", marginTop: "10px", color: "#94a3b8" }}>
              Please contact InternLink support with your payment details.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
