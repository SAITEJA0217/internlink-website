import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Sparkles, ArrowRight, ShieldCheck, Code, Rocket, Users,
  Check, AlertCircle, Sparkle, Globe
} from 'lucide-react';
import Container from '../components/Container';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';

// Custom Animated Counter Component
const AnimatedCounter = ({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    let timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const brokenHiringRef = useRef<HTMLDivElement>(null);

  const scrollToHiring = () => {
    brokenHiringRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsAppCommunity = () => {
    window.open('https://chat.whatsapp.com/FVbd3GSpoWi8raYgK55CX2', '_blank');
  };

  // Contribution grid data for heatmap mockup
  const contributionGrid = Array.from({ length: 28 }, (_, i) => {
    const levels = ['bg-white/5', 'bg-[#00E0FF]/20', 'bg-[#6C63FF]/40', 'bg-[#00E0FF]/60', 'bg-[#6C63FF]/80'];
    // seed random distribution based on index to keep consistent
    const idx = (i * 7 + 3) % levels.length;
    return levels[idx];
  });

  return (
    <div className="relative overflow-hidden mesh-bg min-h-screen">

      {/* Background ambient glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#6C63FF]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#00E0FF]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO TEXT */}
            <div className="lg:col-span-6 text-left max-w-2xl space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/20 backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-[#00E0FF] animate-pulse" />
                <span className="text-[#00E0FF] text-xs font-bold uppercase tracking-wider font-mono">
                  Proof beats promises.
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.08] text-white tracking-tight"
              >
                The future of opportunity should be{' '}
                <span className="bg-gradient-to-r from-[#00E0FF] via-[#8B84FF] to-[#00E0FF] bg-clip-text text-transparent">
                  earned through ability.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light"
              >
                Millions of talented students never get the chance to prove what they can do. InternLink helps people demonstrate skills through real projects, meaningful work, and visible proof of capability.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/internships')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] hover:shadow-lg hover:shadow-[#6C63FF]/30 font-bold rounded-xl text-white transition-all duration-300"
                >
                  Start Building
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToHiring}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-[#00E0FF]/50 rounded-xl font-bold text-white hover:bg-white/5 transition-all duration-300"
                >
                  See How It Works
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.06]"
              >
                {[
                  'Real Projects',
                  'Proof of Work',
                  'Industry Skills',
                  'Career Ready'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/50 text-xs font-semibold">
                    <Check className="w-4 h-4 text-[#00E0FF]" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* HERO VISUAL: INTERACTIVE PROOF-OF-WORK DASHBOARD */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto max-w-[540px] p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 via-white/[0.01] to-white/[0.04] shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
              >
                {/* Visual Glass Wrapper */}
                <div className="relative bg-[#090910]/90 backdrop-blur-2xl p-6 sm:p-8 rounded-[23px] space-y-6">

                  {/* Top Bar Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#00E0FF] p-[1px] flex items-center justify-center text-white font-bold text-xs tracking-wide">
                        S
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-tight">Saiteja</h4>
                        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 filter drop-shadow-[0_0_2px_rgba(52,211,153,0.4)]" />
                          Verified
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest bg-white/[0.03] border border-white/[0.08] px-2.5 py-1 rounded-full">

                    </span>
                  </div>

                  {/* Main Grid: Projects + Growth heatmap */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Left Column: Completed Tasks */}
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-wider font-mono">Verified Projects</h5>

                      {[
                        { title: 'E-Commerce Engine', desc: 'React, Node, Postgres', level: 'Completed' },
                        { title: 'API Gateway Proxy', desc: 'TS, Express, Redis', level: 'Completed' },
                        { title: 'Analytics Pipeline', desc: 'Python, Pandas, Docker', level: 'Completed' }
                      ].map((project, idx) => (
                        <div key={idx} className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold text-white tracking-tight">{project.title}</p>
                            <p className="text-[10px] text-white/40">{project.desc}</p>
                          </div>
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
                            {project.level}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Right Column: Heatmap and verification graph */}
                    <div className="space-y-4 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-wider font-mono">Proof Heatmap</h5>
                        <div className="grid grid-cols-7 gap-1">
                          {contributionGrid.map((bgClass, idx) => (
                            <div key={idx} className={`w-full aspect-square rounded-sm ${bgClass}`} />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-white/[0.04]">
                        <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-wider font-mono">Verified Skills</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {['React', 'TypeScript', 'NodeJS', 'Express', 'SQL'].map((skill, idx) => (
                            <span key={idx} className="text-[9px] bg-[#00E0FF]/10 text-[#00E0FF] border border-[#00E0FF]/25 px-2 py-0.5 rounded-md font-mono">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Skills Growth Graph */}
                  <div className="border-t border-white/[0.06] pt-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-2">
                      <span>PROJECT DENSITY INDEX</span>
                      <span className="text-[#00E0FF] font-semibold">GROWTH TRACK: +182%</span>
                    </div>
                    <div className="w-full bg-[#05050A] rounded-xl p-2 border border-white/[0.04]">
                      <svg className="w-full h-16 text-cyan-400" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <motion.path
                          d="M0 28 C10 28, 20 20, 30 18 C40 16, 50 8, 60 10 C70 12, 80 2, 90 4 C95 5, 100 1, 100 1"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="2.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6C63FF" />
                            <stop offset="100%" stopColor="#00E0FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>
        </Container>
      </section>

      {/* ================= SECTION 2: WHY TRADITIONAL HIRING IS BROKEN ================= */}
      <div ref={brokenHiringRef} className="scroll-mt-32">
        <AnimatedSection>
          <section className="py-24 border-y border-white/[0.05] relative bg-[#05050A]/40 backdrop-blur-3xl">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                <span className="text-red-500/80 text-xs font-bold uppercase tracking-widest font-mono block">The Bottleneck</span>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  Why Traditional Hiring Is Broken
                </h2>
                <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto font-light">
                  Credentials, connections, and automated filters exclude brilliant builders. We are resetting the equation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Experience Catch-22',
                    desc: 'Need experience to get hired. Need a job to get experience. A circular loop that blocks entry-level talent.',
                    icon: <AlertCircle className="w-6 h-6 text-red-400" />
                  },
                  {
                    title: 'Invisible Talent',
                    desc: 'Skills remain unseen because opportunities are limited. Brilliant builders are hidden behind credentials.',
                    icon: <Users className="w-6 h-6 text-amber-400" />
                  },
                  {
                    title: 'Resume Dependency',
                    desc: 'Resumes often fail to reflect actual ability. Simple formatting scanner scripts reject candidates before review.',
                    icon: <Code className="w-6 h-6 text-[#6C63FF]" />
                  },
                  {
                    title: 'Opportunity Gap',
                    desc: 'Talent exists everywhere. Opportunity doesn\'t. Zip codes and college names decide access rather than work.',
                    icon: <Globe className="w-6 h-6 text-emerald-400" />
                  }
                ].map((item, i) => (
                  <Card key={i} className="glass-panel hover:border-white/10 flex flex-col justify-between h-full p-7 transition-all duration-300">
                    <div>
                      <div className="w-12 h-12 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </AnimatedSection>
      </div>

      {/* ================= SECTION 3: MISSION SECTION ================= */}
      <AnimatedSection>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00E0FF]/10 to-[#6C63FF]/10 rounded-full blur-[140px] pointer-events-none" />

          <Container className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-6">
            <span className="text-[#00E0FF] text-xs font-bold uppercase tracking-widest font-mono block">The Imperative</span>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Talent is universal. <br />
              Opportunity is not.
            </h2>

            <p className="text-white/60 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto pt-4">
              We're building the bridge between them. Through proof-of-work, projects, and skill validation.
            </p>
          </Container>
        </section>
      </AnimatedSection>

      {/* ================= SECTION 4: HOW IT WORKS ================= */}
      <section className="py-24 border-t border-white/[0.04]">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-20 space-y-4">
              <span className="text-[#6C63FF] text-xs font-bold uppercase tracking-widest font-mono block">Progression Flow</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Build → Verify → Grow
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mt-16 relative">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#6C63FF]/20 via-[#00E0FF]/20 to-transparent -z-10" />

            {[
              {
                step: '01',
                title: 'Build Real Projects',
                desc: 'Download structured engineering challenges and build actual working applications at your own pace.',
                icon: <Code className="w-5 h-5 text-[#6C63FF]" />
              },
              {
                step: '02',
                title: 'Verify Your Skills',
                desc: 'Submit your deliverables. Our system validates your code, locking in cryptographic digital evidence.',
                icon: <ShieldCheck className="w-5 h-5 text-[#00E0FF]" />
              },
              {
                step: '03',
                title: 'Unlock Opportunities',
                desc: 'Instantly display your project accomplishments and share your verified portfolio with top recruiters.',
                icon: <Rocket className="w-5 h-5 text-emerald-400" />
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={0.15 * idx}>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left group space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#08080C] border border-white/[0.08] group-hover:border-[#00E0FF]/40 text-[#00E0FF] group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#6C63FF] group-hover:to-[#00E0FF] font-mono font-bold text-base flex items-center justify-center transition-all duration-300 shadow-xl">
                    {item.step}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 justify-center lg:justify-start">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= SECTION 5: SOCIAL PROOF ================= */}
      <AnimatedSection>
        <section className="py-20 border-y border-white/[0.05] relative bg-[#05050A]/40 backdrop-blur-3xl">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: 100, suffix: '+', label: 'Early Builders' },
                { value: 7, suffix: ' Domains', label: 'Engineering Domains' },
                { value: 250, suffix: '+', label: 'Growing Community' },
                { value: 450, suffix: '+', label: 'Projects Completed' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/40 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      {/* ================= SECTION 6: FOUNDER VISION SECTION ================= */}
      <AnimatedSection>
        <section className="py-24 relative overflow-hidden">
          <Container>
            <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-b from-[#0B0B16] via-[#05050A] to-[#08080C] border border-white/[0.05] p-8 md:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Blur glows */}
              <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-[#6C63FF]/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Message Left */}
                <div className="lg:col-span-8 space-y-6 text-left">
                  <div className="w-fit inline-flex items-center gap-2 px-3 py-1 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full">
                    <Sparkle className="w-3 h-3 text-[#00E0FF]" />
                    <span className="text-[10px] font-bold text-[#00E0FF] uppercase tracking-wider font-mono">Founder Vision</span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-normal leading-relaxed tracking-tight font-serif italic text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    "Some of the world's best talent never gets the chance to prove it."
                  </h3>

                  <p className="text-white/60 text-base leading-relaxed max-w-2xl font-light">
                    InternLink wasn't built to be another list of internships. It was built to solve a human bottleneck: making talent discoverable by the work they create. We believe every builder deserves an open stage.
                  </p>
                </div>

                {/* Founder Right */}
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right">
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#00E0FF] flex items-center justify-center text-white font-extrabold text-sm">
                      KSR
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">Karka Saiteja Reddy</h4>
                      <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider">
                        Founder & Lead Architect
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </section>
      </AnimatedSection>

      {/* ================= SECTION 7: FINAL CTA ================= */}
      <AnimatedSection>
        <section className="py-24 relative overflow-hidden px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-r from-[#6C63FF]/10 to-[#00E0FF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          <Container>
            <div className="bg-[#08080C]/60 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent pointer-events-none" />

              <Rocket className="w-12 h-12 text-[#00E0FF] mx-auto mb-6 animate-float" />

              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Ready to prove what you're capable of?
              </h2>

              <p className="text-white/60 max-w-xl mx-auto mb-8 text-base md:text-lg leading-relaxed font-light">
                Your next opportunity should be based on what you can do, not what your resume says.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/internships')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Start Building Today
                <ArrowRight className="w-4 h-4 text-black" />
              </motion.button>
            </div>
          </Container>
        </section>
      </AnimatedSection>

      {/* WHATSAPP FLOATING BUTTON */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsAppCommunity}
          className="bg-[#25D366] p-3.5 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center"
          aria-label="Join InternLink Community"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.088-2.885-6.952-1.862-1.863-4.33-2.888-6.956-2.889-5.442 0-9.87 4.37-9.875 9.8-.002 1.782.485 3.524 1.411 5.074l-.99 3.61 3.733-.967zm12.385-6.602c-.328-.162-1.937-.945-2.235-1.053-.298-.108-.517-.162-.734.162-.218.324-.844 1.053-1.034 1.27-.19.216-.379.243-.706.081-.328-.162-1.383-.504-2.634-1.61-.973-.859-1.63-1.923-1.821-2.247-.19-.324-.02-.5-.184-.66-.147-.146-.328-.379-.492-.568-.164-.189-.219-.324-.328-.54-.109-.217-.055-.406-.027-.568.027-.162.218-.541.328-.757.109-.216.164-.378.245-.54.082-.162.041-.324-.014-.486-.055-.162-.517-1.226-.708-1.68-.186-.447-.372-.387-.517-.394-.133-.007-.287-.008-.442-.008-.155 0-.409.058-.622.285-.213.227-.811.785-.811 1.916 0 1.13.834 2.222.949 2.376.115.153 1.64 2.479 3.972 3.472.554.237 1.002.388 1.341.493.559.176 1.066.151 1.467.092.447-.066 1.937-.784 2.209-1.503.272-.718.272-1.334.19-1.467-.082-.132-.298-.213-.626-.375z" />
          </svg>
        </motion.button>
      </motion.div>

    </div>
  );
};

export default Home;
