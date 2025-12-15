import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle = ({ children, subtitle, center = false }: SectionTitleProps) => {
  return (
    <div className={center ? 'text-center' : ''}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] bg-clip-text text-transparent mb-4"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
