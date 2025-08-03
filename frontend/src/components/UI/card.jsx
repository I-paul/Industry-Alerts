import React from 'react';
import { motion } from 'framer-motion';

const variantClasses = {
  primary: 'bg-[var(--card-bg)] text-[var(--text-tertiary)] hover:bg-[var(--card-bg-2)] hover:text-white border-2 border-[var(--brand-accent)]',
};

function Card({ children, variant = 'primary', ...props }) {
  return (
    <motion.div
      className={`px-2 py-4 my-6 mx-8 flex items-center rounded transition-colors duration-200 focus:outline-none ${variantClasses[variant]}`}
      {...props}
      whileHover={{y:-10}}
      transition={{duration:0.5, type:"spring", stiffness:300}}
    >
      {children}
    </motion.div>
  );
}

export default Card;