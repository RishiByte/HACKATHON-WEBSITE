'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollReveal({ children, className = "", stagger = false }: ScrollRevealProps) {
  if (stagger) {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={slideUpVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div variants={slideUpVariant} className={className}>
      {children}
    </motion.div>
  );
}
