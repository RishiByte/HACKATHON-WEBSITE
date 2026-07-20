'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function ButtonTextReveal({ children, className = '' }: { children: ReactNode, className?: string }) {
  // We'll wrap the button text in a group and apply sliding animation on hover
  return (
    <span className={`relative inline-flex flex-col overflow-hidden group/text ${className}`}>
      <motion.span 
        className="transition-transform duration-300 group-hover:-translate-y-full"
      >
        {children}
      </motion.span>
      <motion.span 
        className="absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#ff1e1e]"
      >
        {children}
      </motion.span>
      {/* Tiny underline grows from left to right */}
      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff1e1e] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </span>
  );
}
