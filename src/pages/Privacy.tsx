import { motion } from "framer-motion";
import Container from "../components/Container";
import AnimatedSection from "../components/AnimatedSection";
import Card from "../components/Card";
import { Shield, Eye, Lock } from "lucide-react";

const Privacy = () => {
  return (
    <div className="py-24 min-h-screen mesh-bg">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full"
            >
              <Shield className="w-4 h-4 text-[#00E0FF]" />
              <span className="text-[#00E0FF] text-xs font-semibold uppercase tracking-wider">Compliance</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            
            <p className="text-white/40 text-sm">
              Last updated: June 2026
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={0.1}>
            <Card className="glass-panel p-8 md:p-10 space-y-8 text-white/70 text-sm md:text-base leading-relaxed">
              
              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#00E0FF]" />
                  1. Information We Collect
                </h2>
                <p>
                  When you apply for a task-based internship on InternLink, we collect your full name, email address, and desired internship domain. This information is saved securely in our database to facilitate evaluation and issue verified certificates.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#6C63FF]" />
                  2. How We Use Your Data
                </h2>
                <p className="mb-3">
                  We use your personal data to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Process your enrollment and create your internship record.</li>
                  <li>Deliver instructions, guided tasks, and feedback directly to your inbox.</li>
                  <li>Verify and authenticate certificates if requested by employers or recruiters.</li>
                  <li>Provide updates about internship deadlines and program changes.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  3. Secure Integrations & Payments
                </h2>
                <p>
                  Your payment data is processed securely through Razorpay APIs. InternLink does not store credit card, UPI, or debit card credentials on our servers. Email confirmations are sent securely using verified EmailJS protocols.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  4. Third-Party Sharing
                </h2>
                <p>
                  InternLink does not sell, trade, or distribute student contact databases to recruiters or marketing firms. Your information is strictly used for the execution and verification of your task program.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  5. Contact Us
                </h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at: <a href="mailto:internlink.in@gmail.com" className="text-[#00E0FF] hover:underline font-semibold">internlink.in@gmail.com</a>.
                </p>
              </div>

            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;
