import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="relative bg-[#08080C] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-gradient-to-t from-[#6C63FF]/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND BLOCK */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center p-3 border border-white/20 shadow-lg animate-float">
                <img
                  src={logoImg}
                  alt="InternLink Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-4xl font-black bg-gradient-to-r from-white via-white/95 to-white/70 bg-clip-text text-transparent tracking-tight">
                Intern<span className="bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent">Link</span>
              </span>
            </div>

            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Discover opportunities. Learn. Grow. Build your future with curated, task-based internships crafted for ambitious students starting their tech careers.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/50 hover:text-[#00E0FF] transition-colors text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-white/50 hover:text-[#00E0FF] transition-colors text-sm font-medium">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/50 hover:text-[#00E0FF] transition-colors text-sm font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/50 hover:text-[#00E0FF] transition-colors text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL + SOCIAL */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Legal & Connect</h3>

            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/privacy" className="text-white/50 hover:text-[#00E0FF] transition-colors text-sm font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/50 hover:text-[#00E0FF] transition-colors text-sm font-medium">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/internlink_official/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-white/[0.04] hover:bg-gradient-to-br hover:from-[#6C63FF] hover:to-[#00E0FF] border border-white/[0.08] hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://www.linkedin.com/company/internlink-official"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-white/[0.04] hover:bg-gradient-to-br hover:from-[#6C63FF] hover:to-[#00E0FF] border border-white/[0.08] hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} InternLink. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built for ambitious student developers.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
