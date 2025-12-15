import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    alert('Thank you for reaching out! Our team will get back to you shortly.');

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // UPDATED → real InternLink support info
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'internlink.in@gmail.com',
      description: 'We reply within 24 hours'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone (WhatsApp)',
      value: '+91 7671044167',
      description: 'Available from 10 AM – 7 PM'
    }
  ];

  return (
    <div className="py-20 min-h-screen">
      <Container>
        
        {/* HEADER */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"
            >
              <span className="text-[#00E0FF] font-medium">Get In Touch</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>

            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Have questions about InternLink?  
              Reach out to us anytime — we're here to help.
            </p>
          </div>
        </AnimatedSection>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <Card className="text-center">
                <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-4 rounded-xl w-fit mx-auto mb-4 text-white">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-[#00E0FF] font-semibold mb-1">{info.value}</p>
                <p className="text-white/60 text-sm">{info.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* FORM */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white 
                      placeholder-transparent focus:outline-none focus:border-[#00E0FF]/50 
                      focus:ring-2 focus:ring-[#00E0FF]/20 transition-all peer"
                    placeholder="Your Name"
                  />

                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focused === 'name' || formData.name
                        ? '-top-2 text-xs bg-[#0B0B0F] px-2 text-[#00E0FF]'
                        : 'top-4 text-base text-white/60'
                    }`}
                  >
                    Your Name
                  </label>
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white 
                      placeholder-transparent focus:outline-none focus:border-[#00E0FF]/50 
                      focus:ring-2 focus:ring-[#00E0FF]/20 transition-all peer"
                    placeholder="Your Email"
                  />

                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focused === 'email' || formData.email
                        ? '-top-2 text-xs bg-[#0B0B0F] px-2 text-[#00E0FF]'
                        : 'top-4 text-base text-white/60'
                    }`}
                  >
                    Your Email
                  </label>
                </div>

                {/* MESSAGE */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white 
                      placeholder-transparent focus:outline-none focus:border-[#00E0FF]/50 
                      focus:ring-2 focus:ring-[#00E0FF]/20 transition-all resize-none peer"
                    placeholder="Your Message"
                  />

                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focused === 'message' || formData.message
                        ? '-top-2 text-xs bg-[#0B0B0F] px-2 text-[#00E0FF]'
                        : 'top-4 text-base text-white/60'
                    }`}
                  >
                    Your Message
                  </label>
                </div>

                <Button type="submit" className="w-full flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </AnimatedSection>

        {/* SUPPORT INFO */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">Need Quick Help?</h3>

              <p className="text-white/70 mb-4">
                You can reach us via WhatsApp or Email.  
                We respond within 48 hours on average.
              </p>

              <p className="text-[#00E0FF] font-semibold">
                Support Hours: 10 AM – 7 PM (All Days)
              </p>
            </div>
          </div>
        </AnimatedSection>

      </Container>
    </div>
  );
};

export default Contact;
