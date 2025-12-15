import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { Internship } from '../data/internships';
import Button from './Button';

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard = ({ internship }: InternshipCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#6C63FF]/20"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">
            {internship.title}
          </h3>
        </div>
      </div>

      <p className="text-white/70 text-sm mb-4 line-clamp-2">
        {internship.description}
      </p>

      <div className="flex items-center gap-4 mb-4 text-white/60 text-sm">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>Self-paced</span>
        </div>

        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>InternLink</span>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => window.open(internship.applyUrl, '_blank')}
      >
        Apply Now
      </Button>
    </motion.div>
  );
};

export default InternshipCard;
