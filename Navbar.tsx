import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Internships', path: '/internships' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
    , { name: 'Verification', path: '/verification' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl px-6 py-4">

          {/* LOGO + DESKTOP MENU */}
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                IL
              </div>

              <span className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent">
                InternLink
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="relative group">
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-[#00E0FF]'
                        : 'text-white/80 group-hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>

                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00E0FF]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-white/20"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-[#6C63FF]/20 to-[#00E0FF]/20 text-[#00E0FF]'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
