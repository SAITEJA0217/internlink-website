import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Search, Award, Calendar, Bookmark, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import Container from "../components/Container";
import logoImg from "../assets/logo.jpg";

interface CertificateData {
  status: "valid" | "invalid";
  id?: string;
  name?: string;
  domain?: string;
  date?: string;
  url?: string;
}

const Verify: React.FC = () => {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState<CertificateData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL =
    "https://script.google.com/macros/s/AKfycbyXC8bCsjBA5wU6-RuQPUbse7WzZXHRG3GBW0d2CvmXQfAY6FXQA9ghye97V_ggYv3Ocw/exec";

  const handleVerify = async (idOverride?: string) => {
    const idToVerify = idOverride || certificateId;

    setResult(null);
    setError("");

    if (!idToVerify.trim()) {
      setError("Please enter a Certificate ID");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get<CertificateData>(
        `${API_URL}?id=${idToVerify.trim()}`
      );

      if (response.data.status === "valid") {
        setResult(response.data);
      } else {
        setError("Invalid Certificate ID. Please check the spelling and try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Server connection failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = params.get("id");

    if (idFromUrl) {
      setCertificateId(idFromUrl);
      handleVerify(idFromUrl);
    }
  }, []);

  return (
    <div className="py-24 min-h-screen mesh-bg flex items-center justify-center px-6">

      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#6C63FF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[250px] bg-[#00E0FF]/5 rounded-full blur-[90px] pointer-events-none" />

      <Container className="max-w-xl relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full"
          >
            <img src={logoImg} alt="InternLink Logo" className="w-3.5 h-3.5 object-contain invert brightness-[1.35]" />
            <span className="text-[#00E0FF] text-xs font-semibold uppercase tracking-wider">Security Hub</span>
          </motion.div>

          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            Certificate Verification
          </h1>

          <p className="text-white/50 text-sm max-w-sm mx-auto">
            Instantly authenticate and verify InternLink internship certificates.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-[#08080C]/60 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/[0.01] to-transparent pointer-events-none" />

          <div className="flex flex-col gap-5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                placeholder="Enter Certificate ID (e.g. IL12DM0000)"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[#00E0FF]/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[#00E0FF]/15 transition-all text-sm font-mono tracking-wide"
              />
            </div>

            <button
              onClick={() => handleVerify()}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6C63FF]/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying Record...
                </>
              ) : (
                "Verify Certificate"
              )}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 flex items-start gap-3 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-xs"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-0.5">Verification Failed</h4>
                  <p className="text-white/60">{error}</p>
                </div>
              </motion.div>
            )}

            {result?.status === "valid" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="mt-8 border border-[#22c55e]/20 bg-[#22c55e]/[0.02] rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/[0.03] to-transparent pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-5 gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 border border-white/20 shadow-md">
                      <img src={logoImg} alt="InternLink Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-emerald-400 font-bold text-sm tracking-tight">
                        ✓ Certificate Verified
                      </h3>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-mono">
                        Authentic InternLink Record
                      </p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-4">

                  {/* Name field */}
                  <div className="flex gap-4 items-start">
                    <Award className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-white/45 uppercase tracking-wider block">Name</span>
                      <span className="text-white font-bold text-sm">{result.name}</span>
                    </div>
                  </div>

                  {/* Domain field */}
                  <div className="flex gap-4 items-start">
                    <Bookmark className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-white/45 uppercase tracking-wider block">Internship Domain</span>
                      <span className="text-white font-bold text-sm">{result.domain}</span>
                    </div>
                  </div>

                  {/* Date field */}
                  <div className="flex gap-4 items-start">
                    <Calendar className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-white/45 uppercase tracking-wider block"> Certificate Issue Date</span>
                      <span className="text-white font-bold text-sm">{result.date}</span>
                    </div>
                  </div>
                </div>

                {result.url && (
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full flex items-center justify-center gap-2 py-3 border border-white/[0.08] hover:border-emerald-500/30 text-white/80 hover:text-white text-xs font-semibold rounded-xl bg-white/[0.01] hover:bg-[#22c55e]/5 transition-all"
                  >
                    <span>View PDF Document</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </Container>
    </div>
  );
};

export default Verify;
