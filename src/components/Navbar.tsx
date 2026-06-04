import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Internships', path: '/internships' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Verification', path: '/verification' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#08080C]/40 backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] px-6 py-3 transition-all duration-300">

          {/* LOGO + DESKTOP MENU */}
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 border border-white/20 shadow-md">
                <img
                  src={logoImg}
                  alt="InternLink Logo"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-3xl font-black bg-gradient-to-r from-white via-white/95 to-white/70 bg-clip-text text-transparent tracking-tight">
                Intern<span className="bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent">Link</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="relative group py-1">
                  <span
                    className={`text-sm font-medium transition-colors duration-350 ${
                      isActive(link.path)
                        ? 'text-[#00E0FF]'
                        : 'text-white/75 group-hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>

                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1 right-1 h-0.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00E0FF]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/internships"
                className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-[#00E0FF] hover:text-black text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 pt-3 border-t border-white/[0.08]"
            >
              <div className="flex flex-col gap-1 pb-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 px-4 rounded-xl transition-all duration-300 text-sm font-medium ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-[#6C63FF]/15 to-[#00E0FF]/15 text-[#00E0FF] border-l-2 border-[#00E0FF]'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Link
                  to="/internships"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 block text-center py-3 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] text-white text-sm font-semibold shadow-lg hover:shadow-[#6C63FF]/20"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
