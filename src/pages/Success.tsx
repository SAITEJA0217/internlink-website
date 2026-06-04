import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 min-h-screen mesh-bg flex items-center justify-center px-6">
      <div className="bg-[#08080C]/65 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-10 shadow-2xl max-w-md w-full text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.01] to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center py-4"
        >
          {/* Confetti success check */}
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Payment Verified 🎉</h1>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
            Welcome to InternLink. Your enrollment is officially active. Join your peer group below.
          </p>

          <a
            href="https://chat.whatsapp.com/FVbd3GSpoWi8raYgK55CX2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] text-black hover:bg-[#20ba56] text-sm font-bold rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#25D366]/20 mb-4"
          >
            <MessageSquare className="w-4 h-4 text-black fill-black" />
            Join WhatsApp Group
          </a>

          <p className="text-[11px] text-white/35 font-mono mb-8">
            Group Link: chat.whatsapp.com/FVbd3GSpo...
          </p>

          <div className="w-full border-t border-white/[0.05] pt-6 flex flex-col gap-2">
            <button
              onClick={() => navigate("/")}
              className="text-xs font-semibold text-white/50 hover:text-white transition-colors flex items-center justify-center gap-1.5 py-2"
            >
              <Home className="w-3.5 h-3.5" />
              Return to Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
