'use client';

import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

const motionComponents = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span,
  p: motion.p,
};

export default function GlitchText({ text, className = '', as = 'span' }: GlitchTextProps) {
  const MotionComponent = motionComponents[as];

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={className}
    >
      {text}
    </MotionComponent>
  );
}
