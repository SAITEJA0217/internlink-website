import { Sparkles, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0B0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* BRAND BLOCK */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] p-2 rounded-xl">
                <Sparkles className="w-5 h-5 text-white" />
              </div>

              <span className="text-xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent">
                InternLink
              </span>
            </div>

            <p className="text-white/60 text-sm max-w-md">
              Discover opportunities. Learn. Grow. Build your future with curated internships crafted for ambitious students.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-[#00E0FF] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-white/60 hover:text-[#00E0FF] transition-colors text-sm">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-[#00E0FF] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-[#00E0FF] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL + SOCIAL */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Connect</h3>

            <ul className="space-y-2 mb-4">
              <li>
                <Link to="/privacy" className="text-white/60 hover:text-[#00E0FF] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/60 hover:text-[#00E0FF] transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/internlink_official/"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#6C63FF] hover:to-[#00E0FF] rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.linkedin.com/company/internlink-official"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#6C63FF] hover:to-[#00E0FF] rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} InternLink. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
