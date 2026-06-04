import { motion } from "framer-motion";
import Container from "../components/Container";
import AnimatedSection from "../components/AnimatedSection";
import Card from "../components/Card";
import { FileText, Award, AlertTriangle, ShieldCheck } from "lucide-react";

const Terms = () => {
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
              <FileText className="w-4 h-4 text-[#00E0FF]" />
              <span className="text-[#00E0FF] text-xs font-semibold uppercase tracking-wider">Policies</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Terms & Conditions
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
                  <ShieldCheck className="w-5 h-5 text-[#00E0FF]" />
                  1. Acceptance of Terms
                </h2>
                <p>
                  By enrolling in any task-based internship track on InternLink, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#6C63FF]" />
                  2. Certification & Evaluation
                </h2>
                <p>
                  Certificates are issued only to students who submit all required tasks within the specified timelines. The tasks must meet the minimum guidelines provided in the evaluation PDF. Submitting plagiarized, incomplete, or unrelated work will result in rejection without certificate issuance.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  3. Fees & Refund Policy
                </h2>
                <p>
                  An administrative fee is charged upon application to cover processing, database management, cloud hosting, and certificate generation. 
                  <strong className="text-white"> Since educational resources and task checklists are provided instantly upon completion of payment, all fees paid are non-refundable.</strong>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  4. Intellectual Property
                </h2>
                <p>
                  The task guides, templates, and materials provided by InternLink are protected by copyright. They are for individual, educational use only and may not be resold or redistributed under any circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  5. Contact Us
                </h2>
                <p>
                  For clarification regarding certification policies, please email: <a href="mailto:internlink.in@gmail.com" className="text-[#00E0FF] hover:underline font-semibold">internlink.in@gmail.com</a>.
                </p>
              </div>

            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
