'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TerminalTypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
}

export default function TerminalTypewriter({ text, delay = 0, speed = 30 }: TerminalTypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <div className="relative inline-block font-mono">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-4 bg-[#ff1e1e] ml-1 align-middle"
      />
    </div>
  );
}
