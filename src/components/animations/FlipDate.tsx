'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface FlipDateProps {
  dateStr: string; // e.g. "APR 15"
  delay?: number;
}

export default function FlipDate({ dateStr, delay = 0 }: FlipDateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const chars = dateStr.split('');
  
  return (
    <div ref={ref} className="flex gap-1">
      {chars.map((char, idx) => (
        <FlipChar 
          key={idx} 
          targetChar={char} 
          delay={delay + idx * 0.1} 
          startAnim={isInView} 
        />
      ))}
    </div>
  );
}

function FlipChar({ targetChar, delay, startAnim }: { targetChar: string, delay: number, startAnim: boolean }) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const [displayChar, setDisplayChar] = useState(targetChar);
  
  useEffect(() => {
    if (!startAnim || targetChar === ' ' || targetChar === ',') return;
    
    let iterations = 0;
    const maxIterations = 10;
    const interval = setInterval(() => {
      if (iterations >= maxIterations) {
        setDisplayChar(targetChar);
        clearInterval(interval);
      } else {
        setDisplayChar(characters[Math.floor(Math.random() * characters.length)]);
        iterations++;
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [startAnim, targetChar]);

  if (targetChar === ' ') return <span className="w-2" />;

  return (
    <div className="relative inline-flex flex-col items-center justify-center bg-[#111] border border-white/10 rounded overflow-hidden min-w-[2ch] px-1 py-1 shadow-inner text-white font-mono font-bold leading-none">
      {/* Top half shading */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-black/20 border-b border-black/40 z-10" />
      <motion.span 
        key={displayChar}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.05 }}
        className="relative z-0"
      >
        {displayChar}
      </motion.span>
    </div>
  );
}
