'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="relative mb-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-[#ff1e1e]/30"
            />
            <h1 className="text-4xl font-black uppercase tracking-widest text-white neon-text">
              Omnikon
            </h1>
          </div>

          <div className="w-64">
            <div className="flex justify-between text-xs font-bold text-white code-font mb-2 tracking-widest uppercase text-[#bdbdbd]">
              <span>Initializing</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            <div className="h-1 w-full bg-[#151515] overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-[#ff1e1e] shadow-[0_0_10px_#ff1e1e]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'linear', duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
