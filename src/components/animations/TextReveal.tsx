'use client';

import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  splitBy?: 'words' | 'letters';
  delay?: number;
}

export default function TextReveal({
  text,
  className = '',
  as = 'div',
  splitBy = 'words',
  delay = 0
}: TextRevealProps) {
  const words = text.split(' ');
  const letters = text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: splitBy === 'letters' ? 0.03 : 0.08, delayChildren: delay * i },
    }),
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Component = motion[as] as any;

  return (
    <Component
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-wrap ${className}`}
    >
      {splitBy === 'words' ? (
        words.map((word, index) => (
          <motion.span
            variants={item}
            key={index}
            className="inline-block mr-[0.25em] whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))
      ) : (
        letters.map((letter, index) => (
          <motion.span
            variants={item}
            key={index}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))
      )}
    </Component>
  );
}
