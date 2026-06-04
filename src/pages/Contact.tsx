import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 1. Save contact message to Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });
      
      // 2. Open email client with pre-filled content
      const subject = encodeURIComponent(`InternLink Support Request from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:internlink.in@gmail.com?subject=${subject}&body=${body}`;

      alert('Thank you for reaching out! Your message has been saved, and your mail client has been opened to send the email.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      // Fallback if firestore/network fails
      const subject = encodeURIComponent(`InternLink Support Request from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:internlink.in@gmail.com?subject=${subject}&body=${body}`;
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-[#00E0FF]" />,
      title: 'Email Support',
      value: 'internlink.in@gmail.com',
      description: 'We reply within 24 hours'
    },
    {
      icon: <Phone className="w-5 h-5 text-[#6C63FF]" />,
      title: 'Phone & WhatsApp',
      value: '+91 7671044167',
      description: 'Mon - Sun, 10 AM – 7 PM'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      title: 'Peer Community',
      value: 'Join WhatsApp Group',
      description: 'Ask questions & share tasks',
      link: 'https://chat.whatsapp.com/FVbd3GSpoWi8raYgK55CX2'
    }
  ];

  return (
    <div className="py-24 min-h-screen mesh-bg">
      <Container>
        
        {/* HEADER */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full"
            >
              <span className="text-[#00E0FF] text-xs font-semibold uppercase tracking-wider">Get In Touch</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Contact <span className="bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent">Support</span>
            </h1>

            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
              Have questions about certificates, task criteria, or payment status? Our team is here to assist.
            </p>
          </div>
        </AnimatedSection>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <Card className="glass-panel glass-panel-hover text-center p-8 h-full transition-all duration-300 group-hover:border-emerald-500/30">
                    <div className="bg-white/[0.03] border border-white/[0.08] p-3.5 rounded-2xl w-fit mx-auto mb-5 text-white">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{info.title}</h3>
                    <p className="text-emerald-400 font-semibold mb-1 group-hover:underline text-sm md:text-base">{info.value}</p>
                    <p className="text-white/40 text-xs">{info.description}</p>
                  </Card>
                </a>
              ) : (
                <Card className="glass-panel text-center p-8 h-full">
                  <div className="bg-white/[0.03] border border-white/[0.08] p-3.5 rounded-2xl w-fit mx-auto mb-5 text-white">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{info.title}</h3>
                  <p className="text-[#00E0FF] font-semibold mb-1 text-sm md:text-base">{info.value}</p>
                  <p className="text-white/40 text-xs">{info.description}</p>
                </Card>
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* FORM */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <Card className="glass-panel p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
              
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">
                Send Us a Message
              </h2>

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
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-5 py-4 text-white 
                      placeholder-transparent focus:outline-none focus:border-[#00E0FF]/50 
                      focus:ring-2 focus:ring-[#00E0FF]/10 transition-all text-sm"
                    placeholder="Your Name"
                    id="contact-name"
                  />

                  <label
                    htmlFor="contact-name"
                    className={`absolute left-5 transition-all duration-255 pointer-events-none ${
                      focused === 'name' || formData.name
                        ? '-top-2 text-xs bg-[#08080C] px-2 text-[#00E0FF] font-semibold'
                        : 'top-4 text-sm text-white/45'
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
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-5 py-4 text-white 
                      placeholder-transparent focus:outline-none focus:border-[#00E0FF]/50 
                      focus:ring-2 focus:ring-[#00E0FF]/10 transition-all text-sm"
                    placeholder="Your Email"
                    id="contact-email"
                  />

                  <label
                    htmlFor="contact-email"
                    className={`absolute left-5 transition-all duration-255 pointer-events-none ${
                      focused === 'email' || formData.email
                        ? '-top-2 text-xs bg-[#08080C] px-2 text-[#00E0FF] font-semibold'
                        : 'top-4 text-sm text-white/45'
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
                    rows={5}
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-5 py-4 text-white 
                      placeholder-transparent focus:outline-none focus:border-[#00E0FF]/50 
                      focus:ring-2 focus:ring-[#00E0FF]/10 transition-all text-sm resize-none"
                    placeholder="Your Message"
                    id="contact-message"
                  />

                  <label
                    htmlFor="contact-message"
                    className={`absolute left-5 transition-all duration-255 pointer-events-none ${
                      focused === 'message' || formData.message
                        ? '-top-2 text-xs bg-[#08080C] px-2 text-[#00E0FF] font-semibold'
                        : 'top-4 text-sm text-white/45'
                    }`}
                  >
                    Your Message
                  </label>
                </div>

                <Button type="submit" className="w-full flex items-center justify-center gap-2 py-4">
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>
        </AnimatedSection>

        {/* SUPPORT INFO */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20 max-w-xl mx-auto text-center">
            <div className="bg-[#08080C]/30 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-emerald-500/10 p-3 rounded-full flex-shrink-0 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold text-base mb-1 flex items-center gap-1.5">
                  Secure Peer System
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  All requests are filtered securely. Expect friendly, reliable assistance within our scheduled operating windows.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </Container>
    </div>
  );
};

export default Contact;
