import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }: ButtonProps) => {
  const baseClasses = "px-8 py-3 rounded-xl font-medium transition-all duration-300";

  const variantClasses = {
    primary: "bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] text-white hover:shadow-lg hover:shadow-[#6C63FF]/50 hover:scale-105",
    outline: "border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#00E0FF] hover:shadow-lg hover:shadow-[#00E0FF]/30"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
