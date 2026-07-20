'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

import { timelinePhases as phases } from '@/lib/timeline-data';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-24 px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden" ref={containerRef}>
      <ScrollReveal className="max-w-7xl mx-auto w-full mb-20">
        <div className="text-center">
          <h2 className="neon-text text-5xl md:text-6xl text-text-primary mb-6">MISSION PROGRESS</h2>
          <div className="w-24 h-1 bg-neon-red mx-auto shadow-[0_0_15px_var(--neon-red)]" />
        </div>
      </ScrollReveal>

      <div className="w-full max-w-5xl mx-auto relative">
        {/* Background subtle line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-glass-border -translate-x-1/2 z-0" />
        
        {/* Animated red line */}
        <motion.div 
          style={{ height: lineHeight }} 
          className="absolute left-6 lg:left-1/2 top-0 w-[2px] bg-neon-red shadow-[0_0_10px_var(--neon-red)] -translate-x-1/2 z-0 origin-top" 
        />

        <div className="flex flex-col gap-12 lg:gap-16 relative">
          {phases.map((phase, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={phase.id} 
                className={`relative z-10 flex items-center justify-between w-full flex-row ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                
                {/* Empty Spacer for Desktop */}
                <div className="hidden lg:block w-5/12" />

                {/* Node */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black border-4 border-neon-red shadow-[0_0_15px_var(--neon-red)] flex items-center justify-center group cursor-pointer"
                >
                  <span className="code-font text-neon-red font-bold text-lg">{phase.id}</span>
                  <div className="absolute inset-0 rounded-full border border-neon-red opacity-0 group-hover:animate-ping" />
                </motion.div>
                
                {/* Content */}
                <div className={`w-full pl-24 lg:pl-0 lg:w-5/12 flex ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className={`text-left ${isLeft ? 'lg:text-right' : 'lg:text-left'} glass neon-border p-6 rounded-lg transition-colors duration-300 w-full lg:max-w-md hover:border-neon-red hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]`}
                  >
                    <div className="code-font text-neon-red text-sm mb-2 opacity-70">PHASE {phase.id} • {phase.date}</div>
                    <h3 className="text-2xl text-text-primary mb-3 font-bold">{phase.title}</h3>
                    <p className="text-text-secondary text-base font-light">{phase.desc}</p>
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
