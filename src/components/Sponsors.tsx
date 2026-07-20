'use client';

import { motion } from 'framer-motion';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-shell overflow-hidden bg-[#050505]">
      <ScrollReveal stagger className="section-inner">
        <ScrollRevealItem className="mx-auto mb-16 max-w-3xl text-center">
          <div className="eyebrow justify-center">Sponsors and partners</div>
          <h2 className="section-title">
            Backed By <span className="text-[#ff1e1e]">Giants</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Our incredible partners make this event possible, providing tools, resources, and career opportunities.
          </p>
        </ScrollRevealItem>

        <ScrollRevealItem>
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent" />
            
            <div className="premium-card py-12 px-6 flex flex-col sm:flex-row items-center justify-center gap-16 text-center overflow-hidden relative group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-[#ff1e1e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              <div className="relative z-10 text-4xl font-bold tracking-widest text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300">
                unstop
              </div>
              <div className="relative z-10 text-4xl font-black text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300">
                uplearn <span className="text-lg font-normal text-[#bdbdbd] tracking-widest">BY UPSTOX</span>
              </div>
            </div>
          </div>
        </ScrollRevealItem>
      </ScrollReveal>
    </section>
  );
}
