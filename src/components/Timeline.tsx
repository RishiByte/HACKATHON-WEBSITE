'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timelinePhases as phases } from '@/lib/timeline-data';

export default function Timeline() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 65%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="timeline" ref={containerRef} className="section-shell">
      <div className="section-inner">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="eyebrow justify-center">Program timeline</div>
          <h2 className="section-title">From Registration To Results</h2>
          <p className="section-subtitle">
            A crisp sequence built for momentum: register, shape the idea, submit proof, present clearly, then ship.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-white/12 md:left-1/2" />
          <motion.div className="absolute left-4 top-0 w-px origin-top bg-gradient-to-b from-accent-cyan via-accent-gold to-neon-red md:left-1/2" style={{ height: lineHeight }} />

          <div className="grid gap-7">
            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className={`relative grid md:grid-cols-2 ${isLeft ? '' : 'md:[&>div]:col-start-2'}`}
                >
                  <div className={`pl-12 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="premium-card p-5">
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <span className="code-font text-sm uppercase tracking-[0.16em] text-accent-cyan">{phase.date}</span>
                        <span className="code-font text-xs text-text-muted">Phase {phase.id}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      <p className="mt-3 text-lg leading-7 text-text-secondary">{phase.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-7 h-4 w-4 -translate-x-1/2 rounded-full border border-white/30 bg-bg-primary shadow-[0_0_0_6px_rgba(255,255,255,0.05)] md:left-1/2">
                    <div className="absolute inset-1 rounded-full bg-accent-gold shadow-[0_0_18px_var(--accent-gold)]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
