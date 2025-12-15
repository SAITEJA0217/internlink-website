import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Award, Users, Globe } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const timeline = [
    { year: '2025', event: 'Idea Born :  19-10-2025', description: 'InternLink started with a vision to simplify internships for students.' },
    { year: '2025', event: 'Prototype Built : 09-11-2025 ', description: 'Developed the first task-based internship system for testing.' },
    { year: '2025', event: 'Early Access : 12-12-2025', description: 'Invited initial students to test InternLink’s workflow.' },
    { year: '2025', event: 'Official Launch', description: 'InternLink launches publicly on 17 December 2025.' }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '100+', label: 'Early Users' },
    { icon: <Award className="w-8 h-8" />, value: '7', label: 'Internship Domains' },
    { icon: <Globe className="w-8 h-8" />, value: '100%', label: 'Beginner-Friendly' },
    { icon: <Target className="w-8 h-8" />, value: ' Goal', label: 'Simplify Internships' }
  ];

  return (
    <div className="py-20 min-h-screen">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"
            >
              <span className="text-[#00E0FF] font-medium">Our Story</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent mb-6">
              About InternLink
            </h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Making internships simple, accessible, and student-friendly.
            </p>
          </div>
        </AnimatedSection>

        {/* STORY SECTION */}
        <AnimatedSection delay={0.1}>
          <section className="mb-20">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <div className="max-w-3xl mx-auto text-center">
                <Lightbulb className="w-16 h-16 text-[#00E0FF] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">The InternLink Story</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  InternLink was born from a simple truth: internships are too complicated for beginners.
                  Long registrations, dashboards, unclear steps — everything feels built for professionals.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  We created InternLink to remove all that friction. Students simply choose a domain,
                  complete structured tasks, and earn a verified certificate. No logins. No confusion. Just real learning.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* MISSION + VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <AnimatedSection delay={0.2}>
            <Card className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-4 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                To simplify internships for every student by offering a clear,
                task-based workflow that builds real skills and confidence — without complexity.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Card className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-4 rounded-xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                To become the most trusted internship platform for students in India — a place where skill-building
                comes before experience, and opportunities are accessible to all.
              </p>
            </Card>
          </AnimatedSection>
        </section>

        {/* PROBLEM WE SOLVE */}
        <AnimatedSection delay={0.4}>
          <section className="mb-20">
            <SectionTitle center subtitle="The challenge we're solving">
              What Problem We Solve
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Too Many Steps',
                  description: 'Most platforms require dashboards, logins, and complex onboarding that overwhelm beginners.'
                },
                {
                  title: 'No Clear Tasks',
                  description: 'Students struggle because they don’t know what is expected after applying for an internship.'
                },
                {
                  title: 'Beginner Struggle',
                  description: 'Freshers get rejected due to lack of experience — InternLink gives them a real starting point.'
                }
              ].map((problem, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card>
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-white/60">{problem.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* WHY DIFFERENT */}
        <AnimatedSection delay={0.5}>
          <section className="mb-20">
            <SectionTitle center subtitle="What sets us apart from others">
              Why InternLink is Different
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: 'Task-Based Internships',
                  description: 'Students complete real tasks instead of waiting for interviews.',
                  icon: <Award className="w-6 h-6" />
                },
                {
                  title: 'No Login Needed',
                  description: 'A simple Google Form workflow makes the entire process beginner-friendly.',
                  icon: <Target className="w-6 h-6" />
                },
                {
                  title: 'Transparent & Simple',
                  description: 'No dashboards. No confusing steps. Everything is clear and structured.',
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  title: 'Built for Students',
                  description: 'Every part of InternLink is designed around student comfort and clarity.',
                  icon: <Users className="w-6 h-6" />
                }
              ].map((difference, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-3 rounded-xl">
                        {difference.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{difference.title}</h3>
                        <p className="text-white/60">{difference.description}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* TIMELINE */}
        <AnimatedSection delay={0.6}>
          <section className="mb-20">
            <SectionTitle center subtitle="Our journey so far">
              Our Timeline
            </SectionTitle>

            <div className="mt-12 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <div className="flex gap-8 mb-12 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.year}
                      </div>
                      {index !== timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-[#6C63FF] to-[#00E0FF] mt-4" />
                      )}
                    </div>
                    <Card className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.event}</h3>
                      <p className="text-white/60">{item.description}</p>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* IMPACT */}
        <AnimatedSection delay={0.7}>
          <section>
            <SectionTitle center subtitle="Numbers that represent our progress">
              Our Impact
            </SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card className="text-center">
                    <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-4 rounded-xl w-fit mx-auto mb-4 text-white">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/60">{stat.label}</div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

      </Container>
    </div>
  );
};

export default About;
