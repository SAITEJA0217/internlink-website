import { useEffect, useState } from "react";
import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Loader2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PaymentSuccess = () => {
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");
  const navigate = useNavigate();

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

        for (const docSnap of snapshot.docs) {
          await updateDoc(docSnap.ref, {
            paymentStatus: "paid",
            paymentConfirmedAt: new Date(),
          });
        }

        // Clean up
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
    <div className="py-24 min-h-screen mesh-bg flex items-center justify-center px-6">
      <div className="bg-[#08080C]/65 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-10 shadow-2xl max-w-md w-full text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.01] to-transparent pointer-events-none" />

        {status === "loading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center py-6"
          >
            <Loader2 className="w-12 h-12 text-[#00E0FF] animate-spin mb-6" />
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Confirming Payment</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Please wait while we automatically sync your application status with our secure database.
            </p>
          </motion.div>
        )}

        {status === "done" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Enrollment Complete!</h1>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your payment has been verified. Welcome to InternLink.
            </p>
            
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 mb-8 text-left w-full text-xs text-white/50 space-y-2">
              <p>⚡ <strong>What happens next?</strong></p>
              <p>1. Check your email for your unique Student ID and internship kit.</p>
              <p>2. Complete the tasks self-paced according to the provided guide.</p>
              <p>3. Submit your work before the deadline to receive certification.</p>
            </div>

            <Button onClick={() => navigate("/")} className="w-full flex items-center justify-center gap-2">
              <span>Go to Home Page</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-4"
          >
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Verification Pending</h1>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We could not automatically match your payment with a registered email.
            </p>
            <p className="text-white/40 text-xs leading-relaxed mb-8">
              Don't worry — your payment is secure. Please reach out to our support team with your receipt details to activate your account manually.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <Button onClick={() => navigate("/contact")} className="w-full">
                Contact Support
              </Button>
              <button
                onClick={() => navigate("/")}
                className="text-xs text-white/45 hover:text-white transition-colors py-2"
              >
                Return Home
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
