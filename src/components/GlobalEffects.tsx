'use client';

import { motion, useScroll } from 'framer-motion';

export default function GlobalEffects() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[9998] h-[3px] origin-left bg-gradient-to-r from-accent-cyan via-accent-gold to-neon-red pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:96px_96px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_42%)]" />
      </div>
    </>
  );
}
