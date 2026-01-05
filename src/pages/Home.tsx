import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Rocket,
  Target,
  Zap,
  Shield,
  TrendingUp,
  MessageCircle
} from 'lucide-react';

import Button from '../components/Button';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const navigate = useNavigate();

  const openWhatsAppCommunity = () => {
    window.open(
      'https://chat.whatsapp.com/FVbd3GSpoWi8raYgK55CX2',
      '_blank'
    );
  };

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

  return (
    <div className="relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 via-transparent to-[#00E0FF]/10 pointer-events-none" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-white">Internships</span><br />
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent">
                Made Simple.
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-10">
              Choose a domain → complete tasks → earn your internship certificate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/internships')}>Explore Internships</Button>
              <Button variant="outline" onClick={() => navigate('/about')}>About InternLink</Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* WHY INTERNLINK */}
      <AnimatedSection>
        <section className="py-20">
          <Container>
            <SectionTitle center subtitle="Everything you need to begin">
              Why InternLink
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {features.map((feature, i) => (
                <Card key={i}>
                  <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-4 rounded-xl w-fit mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20">
          <Container>
            <div className="bg-gradient-to-br from-[#6C63FF]/20 to-[#00E0FF]/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
              <TrendingUp className="w-16 h-16 text-[#00E0FF] mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Begin?
              </h2>
              <Button onClick={() => navigate('/internships')}>
                Explore Internships Now
              </Button>
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsAppCommunity}
          className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all"
          aria-label="Join InternLink Community"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.button>
      </motion.div>

    </div>
  );
};

export default Home;
