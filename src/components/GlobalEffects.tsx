'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function GlobalEffects() {
  const { scrollYProgress } = useScroll();
  
  // Opacity of the background grid based on scroll (fades slightly as you go down)
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.03]);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[9998] h-[2px] origin-left bg-[#ff1e1e] pointer-events-none shadow-[0_0_15px_rgba(255,30,30,0.5)]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
        {/* Soft Animated Noise Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Breathing ambient radial gradient */}
        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#ff1e1e] blur-[120px] mix-blend-screen pointer-events-none"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#ff1e1e] blur-[150px] mix-blend-screen pointer-events-none"
        />

        {/* Existing Grid with animated opacity */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:96px_96px]" 
          style={{ opacity: gridOpacity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_42%)]" />
      </div>
    </>
  );
}
