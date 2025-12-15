import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Target, Zap, Shield, CheckCircle, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const navigate = useNavigate();

  // UPDATED FEATURES — now realistic for InternLink
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Task-Based Internships',
      description: 'Learn by completing real guided tasks designed for beginners.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Choose Your Domain',
      description: 'Pick from 7 internship domains including Web Dev, AI/ML, UI/UX & more.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast & Simple Flow',
      description: 'No logins, no dashboards — just one clean Google Form process.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Beginner-Friendly',
      description: 'Designed for students with zero prior experience.'
    }
  ];

  // UPDATED CATEGORIES — now realistic
  const categories = [
    { name: 'Web Development', count: 'Includes 5–10 tasks' },
    { name: 'AI / Machine Learning', count: 'Includes 5–10 tasks' },
    { name: 'Data Science', count: 'Includes 5–10 tasks' },
    { name: 'UI/UX Design', count: 'Includes 5–10 tasks' },
    { name: 'Mobile App Development', count: 'Includes 5–10 tasks' },
    { name: 'Digital Marketing', count: 'Includes 5–10 tasks' }
  ];

  // UPDATED BENEFITS — real InternLink benefits
  const benefits = [
    { title: 'Learn by Doing', description: 'Every domain includes task-based learning that builds real skills.' },
    { title: 'Build Your Resume', description: 'Get internship experience you can showcase in placements.' },
    { title: 'Certificate Provided', description: 'Receive a verified Internship Certificate after task submission.' },
    { title: 'No Interviews Needed', description: 'Skip the long approval process — start learning immediately.' }
  ];

  // UPDATED STEPS — accurate InternLink process
  const steps = [
    { number: '01', title: 'Choose Domain', description: 'Pick the internship category you want to learn.' },
    { number: '02', title: 'Fill Application', description: 'Submit the Google Form with your details.' },
    { number: '03', title: 'Complete Tasks', description: 'Receive structured tasks and finish them at your own pace.' },
    { number: '04', title: 'Get Certified', description: 'Submit work → get a verified internship certificate.' }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 via-transparent to-[#00E0FF]/10 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6C63FF]/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E0FF]/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"
            >
              <span className="text-[#00E0FF] font-medium">Your Future Starts Here</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Internships
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent">
                Made Simple.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto"
            >
              Choose a domain → complete tasks → earn your internship certificate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button onClick={() => navigate('/internships')}>Explore Internships</Button>
              <Button variant="outline" onClick={() => navigate('/about')}>About InternLink</Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* WHY INTERNLINK */}
      <AnimatedSection>
        <section className="py-20 relative">
          <Container>
            <SectionTitle center subtitle="Everything you need to begin your journey">
              Why InternLink
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card>
                    <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-4 rounded-xl w-fit mb-4 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      {/* CATEGORIES */}
      <AnimatedSection>
        <section className="py-20 relative">
          <Container>
            <SectionTitle center subtitle="Choose your domain">
              Featured Categories
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {categories.map((category, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-[#00E0FF]/50 transition-all"
                    onClick={() => navigate('/internships')}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-[#00E0FF]">{category.count}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      {/* BENEFITS */}
      <AnimatedSection>
        <section className="py-20 relative">
          <Container>
            <SectionTitle center subtitle="Designed for students">
              Key Benefits
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-3 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-white/60">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      {/* HOW INTERNLINK WORKS */}
      <AnimatedSection>
        <section className="py-20 relative">
          <Container>
            <SectionTitle center subtitle="A simple step-by-step process">
              How InternLink Works
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {steps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card hover={false} className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20 relative">
          <Container>
            <div className="bg-gradient-to-br from-[#6C63FF]/20 to-[#00E0FF]/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
              <TrendingUp className="w-16 h-16 text-[#00E0FF] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Begin?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Start your internship journey with simple tasks and real skill-building.
              </p>
              <Button onClick={() => navigate('/internships')}>
                Explore Internships Now
              </Button>
            </div>
          </Container>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;
