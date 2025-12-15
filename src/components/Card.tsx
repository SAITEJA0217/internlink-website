import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ${
        hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-[#6C63FF]/20' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
