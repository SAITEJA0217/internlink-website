import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import emailjs from "@emailjs/browser";

const RAZORPAY_LINK = "https://rzp.io/rzp/internlink-apply";

const Apply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Save application to Firestore
      await addDoc(collection(db, "applications"), {
        name,
        email,
        domain,
        status: "applied",
        paymentStatus: "pending",
        createdAt: serverTimestamp(),
      });

      // 2️⃣ Send confirmation email
      await emailjs.send(
        "service_fc1onif",
        "template_779a5bp",
        { name, email, domain },
        "PzFMCuiDHrsJylufK"
      );

      // 3️⃣ Save email for payment success page
      localStorage.setItem("internlink_email", email);

      // 4️⃣ Redirect to Razorpay
      window.location.href = RAZORPAY_LINK;

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: "420px", padding: "24px", background: "#0f172a", borderRadius: "16px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "16px", color: "#fff" }}>
          Apply for Internship
        </h2>

        <form onSubmit={handleApply} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select value={domain} onChange={(e) => setDomain(e.target.value)} required>
            <option value="">Select Domain</option>
            <option value="Web Development">Web Development</option>
            <option value="AIML">AIML</option>
            <option value="Data Science">Data Science</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Mobile Application Development">Mobile Application Development</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "10px",
              padding: "12px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            {loading ? "Processing..." : "Apply & Continue to Payment →"}
          </button>

          <p style={{ fontSize: "12px", textAlign: "center", color: "#94a3b8" }}>
            🔒 Secure payment powered by Razorpay
          </p>
        </form>
      </div>
    </div>
  );
};

export default Apply;
