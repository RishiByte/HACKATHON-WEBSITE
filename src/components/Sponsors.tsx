'use client';

import { motion } from 'framer-motion';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const partners = ['Unstop', 'Upstox', 'GitHub', 'Vercel', 'AWS', 'Supabase', 'Figma'];

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
          <div className="relative overflow-hidden py-10">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent" />
            
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
              className="flex w-max gap-8"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner}-${index}`} 
                  className="premium-card flex h-32 min-w-[240px] items-center justify-center px-10 group transition-all duration-500 hover:border-[#ff1e1e]/50 hover:shadow-[0_0_30px_rgba(255,30,30,0.15)]"
                >
                  <span className="text-3xl font-black text-[#bdbdbd] grayscale group-hover:grayscale-0 group-hover:text-white transition-all duration-500 filter opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {partner}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollRevealItem>
      </ScrollReveal>
    </section>
  );
}
