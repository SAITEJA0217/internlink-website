import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, User, Mail, Briefcase, ShieldCheck } from "lucide-react";
import Container from "../components/Container";

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

  const benefits = [
    "Practical task-based evaluation criteria",
    "Self-paced learning (complete within 4-6 weeks)",
    "Shareable verified credential certificate",
    "Real project code for your GitHub & resume",
    "Peer support via Discord & WhatsApp groups"
  ];

  return (
    <div className="py-24 min-h-screen mesh-bg flex items-center justify-center px-6">
      
      {/* Background ambient light */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#6C63FF]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-[#00E0FF]/5 rounded-full blur-[80px] pointer-events-none" />

      <Container className="max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT VALUE PROP COL */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#00E0FF] animate-pulse" />
              <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">Redefining Internships</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Start Your <br />
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent">Internship Program</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-md"
            >
              Our process is optimized for speed and learning. Complete curated tasks to prove your skills and earn your verification certificate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT FORM COL */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#08080C]/60 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.01] to-transparent pointer-events-none" />
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  Application Form
                </h2>
                <p className="text-white/40 text-xs mb-8">
                  Enter your details below to register and secure your track.
                </p>

                <form onSubmit={handleApply} className="space-y-5">
                  
                  {/* Name Input */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[#00E0FF]/50 rounded-xl pl-11 pr-4 py-4 text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[#00E0FF]/15 transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[#00E0FF]/50 rounded-xl pl-11 pr-4 py-4 text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[#00E0FF]/15 transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Domain Select */}
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                    <select
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      required
                      className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[#00E0FF]/50 rounded-xl pl-11 pr-4 py-4 text-white/80 focus:text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[#00E0FF]/15 transition-all text-sm font-medium appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#08080C] text-white/40">Select Internship Domain</option>
                      <option value="Web Development" className="bg-[#08080C] text-white">Web Development</option>
                      <option value="Data Science" className="bg-[#08080C] text-white">Data Science</option>
                      <option value="AI / Machine Learning" className="bg-[#08080C] text-white">AI / Machine Learning</option>
                      <option value="Digital Marketing" className="bg-[#08080C] text-white">Digital Marketing</option>
                      <option value="UI/UX Design" className="bg-[#08080C] text-white">UI/UX Design</option>
                      <option value="Mobile App Development" className="bg-[#08080C] text-white">Mobile App Development</option>
                      <option value="Human Resources (HR)" className="bg-[#08080C] text-white">Human Resources (HR)</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                      ▼
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full py-4 bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-[#6C63FF]/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    <span>{loading ? "Processing Order..." : "Apply & Continue to Payment"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-center gap-2 text-[11px] text-white/35 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Secure payment processing via Razorpay</span>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Apply;
