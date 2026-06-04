import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Linkedin, Sparkles, ShieldCheck, ArrowRight, CheckCircle2,
  XCircle, Globe, Code, Award, Rocket
} from 'lucide-react';
import Container from '../components/Container';
import AnimatedSection from '../components/AnimatedSection';

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

const About = () => {
  const missionRef = useRef<HTMLDivElement>(null);

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const timeline = [
    {
      year: 'Aug-2025',
      title: 'Foundation',
      desc: 'Establishing the proof-of-work baseline and launching task-based evaluations.'
    },
    {
      year: ' Oct-2025',
      title: 'National Expansion',
      desc: 'Bringing frictionless opportunity to campuses across the country.'
    },
    {
      year: 'Dec -2025',
      title: 'Global Talent Network',
      desc: 'Connecting certified student developers with top international organizations.'
    },
    {
      year: 'May 2036',
      title: 'Skills-Based Opportunity Ecosystem',
      desc: 'A fully decentralized ecosystem where projects are the universal currency.'
    }
  ];

  return (
    <div className="py-20 min-h-screen mesh-bg relative overflow-hidden">

      {/* Background Decorative Ambient Lights (Apple/Linear Style) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-[#6C63FF]/10 via-[#00E0FF]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] rounded-full bg-[#00E0FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] rounded-full bg-[#6C63FF]/5 blur-[140px] pointer-events-none" />

      <Container>

        {/* ================= SECTION 1: HERO ================= */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative z-10 py-12 md:py-20">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full shadow-[0_0_20px_rgba(108,99,255,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-[#00E0FF] animate-pulse" />
            <span className="text-xs font-bold text-[#00E0FF] uppercase tracking-widest font-mono">The New Paradigm</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] max-w-5xl mx-auto mb-10 text-center"
          >
            The future of opportunity should be{' '}
            <span className="bg-gradient-to-r from-[#00E0FF] via-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent bg-size-200 animate-pulse-slow">
              earned through ability,
            </span>{' '}
            not unlocked through privilege.
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-light"
          >
            Millions of talented students never receive the chance to prove what they can do. We are building a system where work speaks louder than resumes.
          </motion.p>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={scrollToMission}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-white/90 font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            Discover Our Mission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </section>

        {/* ================= SECTION 2: THE PROBLEM ================= */}
        <div ref={missionRef} className="scroll-mt-32">
          <AnimatedSection>
            <section className="relative py-24 border-y border-white/[0.05] mb-24 overflow-hidden rounded-[2rem] bg-[#05050A]/40 backdrop-blur-md px-8 md:px-16">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-red-500/5 blur-[80px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                  <span className="text-red-500/80 text-xs font-bold uppercase tracking-widest font-mono block mb-4">The Friction</span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    Talent is everywhere. <br />
                    <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">Opportunity isn't.</span>
                  </h2>
                </div>

                <div className="lg:col-span-7 space-y-6 text-white/60 text-lg md:text-xl font-light leading-relaxed">
                  <p>
                    Every year, students spend thousands of hours learning skills, building projects, and preparing for careers.
                  </p>
                  <p className="font-semibold text-white/90">
                    Yet most opportunities are still filtered through credentials, connections, and experience requirements.
                  </p>
                  <p>
                    The result is a generation of capable people waiting for a chance to prove themselves.
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </div>

        {/* ================= SECTION 3: WHY WE EXIST ================= */}
        <AnimatedSection>
          <section className="py-20 mb-24 relative">
            <div className="text-center mb-16">
              <span className="text-[#00E0FF] text-xs font-bold uppercase tracking-widest font-mono block mb-4">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                We didn't build another internship platform.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'A Proof-of-Work Ecosystem',
                  desc: 'Where capability becomes visible. No arbitrary resumes or automated screening checklists. Just pure execution.',
                  icon: <Code className="w-6 h-6 text-[#00E0FF]" />
                },
                {
                  title: 'Where Projects Become Evidence',
                  desc: 'We transform task deliverables into active, verified digital credentials that recruiters can instantly check.',
                  icon: <Award className="w-6 h-6 text-[#6C63FF]" />
                },
                {
                  title: 'Where Learning Becomes Opportunity',
                  desc: 'By providing free, open-access curriculum tasks, we give any student a direct pipeline to build and learn.',
                  icon: <Rocket className="w-6 h-6 text-emerald-400" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden transition-all duration-300 group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent pointer-events-none" />
                  <div className="bg-white/[0.04] border border-white/[0.08] p-3 rounded-2xl w-fit mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00E0FF] transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-white/60 text-lg font-serif italic">
                "Because the best talent should not remain invisible."
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* ================= SECTION 4: OUR MISSION ================= */}
        <AnimatedSection>
          <section className="py-20 mb-24 border-b border-white/[0.05]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#00E0FF] text-xs font-bold uppercase tracking-widest font-mono block">The Mandate</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Replacing gatekeeping with opportunity.
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  Our mission is to create a world where every student can demonstrate capability through real work.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-[#08080C]/40 border border-white/[0.08] rounded-3xl p-8 space-y-6 relative overflow-hidden backdrop-blur-xl">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#6C63FF]/10 rounded-full blur-2xl" />
                  {[
                    { label: 'Not through perfect resumes.', positive: false },
                    { label: 'Not through endless applications.', positive: false },
                    { label: 'Not through arbitrary filters.', positive: false },
                    { label: 'But through meaningful contributions.', positive: true }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      {item.positive ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 filter drop-shadow-[0_0_4px_rgba(52,211,153,0.4)]" />
                      ) : (
                        <XCircle className="w-6 h-6 text-white/30" />
                      )}
                      <span className={`text-base font-semibold ${item.positive ? 'text-white' : 'text-white/40'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ================= SECTION 5: OUR VISION ================= */}
        <AnimatedSection>
          <section className="py-20 mb-24 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B0B16] via-[#05050A] to-[#08080C] border border-white/[0.05] p-8 md:p-16">
            <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#00E0FF]/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <span className="text-[#6C63FF] text-xs font-bold uppercase tracking-widest font-mono block">The Horizon</span>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                  A future where skills become the universal currency.
                </h2>

                <div className="space-y-6 text-white/60 text-lg leading-relaxed max-w-xl font-light">
                  <p>
                    We envision a future where talent is measured by what people can create, solve, and contribute.
                  </p>
                  <p>
                    A future where opportunity becomes accessible to anyone willing to learn and build.
                  </p>
                </div>
              </div>

              {/* Dynamic Visual Element (Stripe/Notion style representation) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  {/* Glowing Orbit Rings */}
                  <div className="absolute inset-0 rounded-full border border-white/5 animate-spin pointer-events-none" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-4 rounded-full border border-white/10 border-dashed animate-spin pointer-events-none" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#6C63FF]/20 to-[#00E0FF]/20 blur-xl animate-pulse" />

                  {/* Core Symbol */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#00E0FF] p-[2px] shadow-[0_0_40px_rgba(0,224,255,0.3)]">
                    <div className="w-full h-full rounded-full bg-[#08080C] flex items-center justify-center text-white">
                      <Globe className="w-10 h-10 text-[#00E0FF]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ================= SECTION 6: IMPACT ================= */}
        <AnimatedSection>
          <section className="py-20 mb-24 relative overflow-hidden">
            <div className="text-center mb-16">
              <span className="text-[#00E0FF] text-xs font-bold uppercase tracking-widest font-mono block mb-4">Impact in Numbers</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Our Proof of Capability
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: 200, suffix: '+', label: 'Students Empowered' },
                { value: 450, suffix: '+', label: 'Projects Completed' },
                { value: 250, suffix: '+', label: 'Community' },
                { value: 25, suffix: '+', label: 'Career Journeys Started' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#05050A]/40 backdrop-blur-xl border border-white/[0.06] rounded-3xl p-8 text-center transition-all duration-300 hover:border-white/[0.12]"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/40 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* ================= SECTION 7: FOUNDER MESSAGE ================= */}
        <AnimatedSection>
          <section className="relative py-20 px-8 md:px-12 lg:px-16 rounded-[2.5rem] bg-gradient-to-b from-[#0B0B16] via-[#05050A] to-[#08080C] border border-white/[0.05] shadow-[0_30px_100px_rgba(0,0,0,0.8)] mb-24 overflow-hidden group/section">

            {/* Cinematic Lighting & Blur Orbs */}
            <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00E0FF]/15 to-transparent blur-[140px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#6C63FF]/15 to-transparent blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

              {/* Left Column: Visionary Message */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
                <div className="w-fit inline-flex items-center gap-2 px-3 py-1 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full shadow-[0_0_15px_rgba(108,99,255,0.1)]">
                  <Sparkles className="w-3.5 h-3.5 text-[#00E0FF] animate-pulse" />
                  <span className="text-[10px] font-bold text-[#00E0FF] uppercase tracking-widest font-mono">Why I Started This</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.25] tracking-tight font-serif italic text-white bg-gradient-to-r from-white via-white to-white/70 bg-clip-text">
                    "Some of the world's most talented people never get the opportunity to prove they are talented."
                  </h2>
                </div>

                <div className="space-y-5 text-white/60 text-base md:text-lg leading-relaxed font-sans max-w-2xl font-light">
                  <p>
                    I built InternLink because I watched brilliant student developers get filtered out by automated resume scanners before they ever wrote a single line of code. They had the drive, the curiosity, and the capability — but they lacked the "experience" to get the experience.
                  </p>
                  <p className="font-semibold text-white/95">
                    Traditional hiring is broken. It optimizes for credential status and resume keywords rather than direct evidence of capability. We wanted to build a platform that completely flips the equation.
                  </p>
                  <p>
                    Our goal is simple: to make ability the only gatekeeper. If you can build, solve, and create value, you deserve to be seen. No credentials required.
                  </p>
                </div>
              </div>

              {/* Right Column: Premium Glassmorphism Profile Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-md relative p-[1px] rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/12 via-white/[0.01] to-white/[0.04] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_30px_70px_-10px_rgba(0,224,255,0.15)] group transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00E0FF]/25 via-transparent to-[#6C63FF]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] pointer-events-none" />

                  <div className="relative bg-[#090910]/85 backdrop-blur-3xl p-8 rounded-[31px] flex flex-col items-center text-center overflow-hidden">
                    <div className="absolute -inset-y-12 -left-1/2 w-12 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent rotate-[35deg] group-hover:translate-x-[400px] transition-transform duration-1000 pointer-events-none" />

                    <div className="relative mb-6">
                      <div className="absolute inset-0 -m-2.5 rounded-full bg-gradient-to-r from-[#00E0FF] via-[#6C63FF] to-[#00E0FF] animate-spin pointer-events-none opacity-40 blur-[2px]" style={{ animationDuration: '8s' }} />
                      <div className="absolute inset-0 -m-1.5 rounded-full bg-gradient-to-r from-[#00E0FF] via-[#6C63FF] to-[#00E0FF] animate-spin pointer-events-none opacity-80" style={{ animationDuration: '8s' }} />

                      <div className="absolute inset-0 -m-[4px] rounded-full bg-[#08080C] pointer-events-none" />

                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#0c0c16] to-[#121225] border border-white/10 flex items-center justify-center text-white font-extrabold text-3xl tracking-wide shadow-inner">
                        <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">KSR</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-1 justify-center relative">
                      <h3 className="text-2xl font-bold text-white tracking-tight">Karka Saiteja Reddy</h3>
                      <ShieldCheck className="w-5.5 h-5.5 text-[#00E0FF] filter drop-shadow-[0_0_6px_rgba(0,224,255,0.7)] animate-pulse" />
                    </div>

                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">
                      Founder & Lead Architect
                    </p>

                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

                    <p className="text-white/70 text-sm leading-relaxed mb-8 italic max-w-xs font-serif relative px-6">
                      <span className="absolute left-1 top-0 text-white/20 text-4xl font-serif">“</span>
                      Committed to delivering open, self-paced project guides for developers nationwide.
                      <span className="absolute right-1 bottom-0 text-white/20 text-4xl font-serif translate-y-3">”</span>
                    </p>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://www.linkedin.com/in/saiteja-reddy-karka/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#6C63FF]/20 to-[#00E0FF]/20 hover:from-[#6C63FF]/30 hover:to-[#00E0FF]/30 border border-[#00E0FF]/30 hover:border-[#00E0FF]/60 rounded-xl text-sm font-semibold text-white tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,224,255,0.08)] hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]"
                    >
                      <Linkedin className="w-4.5 h-4.5 text-[#00E0FF]" />
                      Connect on LinkedIn
                    </motion.a>
                  </div>
                </motion.div>
              </div>

            </div>
          </section>
        </AnimatedSection>

        {/* ================= SECTION 8: FUTURE ROADMAP ================= */}
        <AnimatedSection>
          <section className="py-20 mb-12">
            <div className="text-center mb-16">
              <span className="text-[#00E0FF] text-xs font-bold uppercase tracking-widest font-mono block mb-4">Evolution</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                The Journey Ahead
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto pl-8 border-l border-white/[0.08] space-y-16">
              {timeline.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Marker */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#00E0FF] shadow-[0_0_15px_rgba(0,224,255,0.8)] border-4 border-[#08080C] group-hover:scale-125 transition-transform duration-300" />

                  <div className="space-y-2">
                    <span className="text-xs font-bold font-mono text-[#00E0FF] bg-[#00E0FF]/10 border border-[#00E0FF]/20 px-3 py-1 rounded-full w-fit block">
                      {step.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#00E0FF] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-base max-w-2xl leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

      </Container>
    </div>
  );
};

export default About;
