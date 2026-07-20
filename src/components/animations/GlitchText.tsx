'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export default function GlitchText({ text, className = "", as: Component = "span" }: GlitchTextProps) {
  const MotionComponent = motion(Component as any);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Base Text */}
      <MotionComponent
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
      >
        {text}
      </MotionComponent>

      {/* Glitch Overlay */}
      <MotionComponent
        className="absolute top-0 left-0 w-full h-full z-20 text-neon-red opacity-0 hover:opacity-100 hover:animate-pulse pointer-events-none mix-blend-screen"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0, 0.8, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, times: [0, 0.1, 0.2, 0.4, 1] }}
        style={{
          textShadow: '0 0 15px rgba(255,0,0,0.8)',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%, 0 55%, 100% 55%, 100% 100%, 0 100%)',
        }}
      >
        {text}
      </MotionComponent>
      
      {/* Second Glitch Layer */}
      <MotionComponent
        className="absolute top-0 left-[2px] w-full h-full z-20 text-blue-500 opacity-0 pointer-events-none mix-blend-screen"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.8, 0, 0.5, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6, times: [0, 0.15, 0.3, 0.45, 1] }}
        style={{
          clipPath: 'polygon(0 20%, 100% 20%, 100% 35%, 0 35%, 0 75%, 100% 75%, 100% 90%, 0 90%)',
        }}
      >
        {text}
      </MotionComponent>
    </div>
  );
}
