'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Accelerate loading to finish under 1.5 seconds
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 200); // reduced from 500
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 15; // increased step sizes
      }, );
    }, 80); // reduced interval from 150 to 80

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05, // subtle scale out
            filter: 'blur(10px)' // cinematic blur exit
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // cinematic easing
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505]"
        >
          <div className="relative mb-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-8 rounded-full border-2 border-dashed border-[#ff1e1e]/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-12 rounded-full border border-dotted border-[#ff1e1e]/10"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-widest text-white neon-text glow-pulse">
                Omnikon
              </h1>
            </motion.div>
          </div>

          <div className="w-64 sm:w-80 relative">
            <div className="flex justify-between text-[10px] sm:text-xs font-bold text-white code-font mb-3 tracking-widest uppercase text-[#bdbdbd]">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="opacity-70"
              >
                Initializing Subsystems
              </motion.span>
              <span className="text-[#ff1e1e]">{Math.min(progress, 100)}%</span>
            </div>
            <div className="h-[2px] w-full bg-[#151515] overflow-hidden rounded-full relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#ff1e1e] shadow-[0_0_15px_#ff1e1e]"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
