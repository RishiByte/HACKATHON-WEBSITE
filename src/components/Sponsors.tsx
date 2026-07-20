'use client';

import { motion } from 'framer-motion';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const communityPartners = [
  'Google', 'Microsoft', 'GitHub', 'Vercel', 'Stripe', 'Supabase', 'Figma'
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 relative overflow-hidden bg-black/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <ScrollReveal stagger className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <ScrollRevealItem className="text-center mb-16">
          <h2 className="neon-text text-5xl md:text-6xl text-text-primary mb-6">OUR ALLIES</h2>
          <div className="w-24 h-1 bg-neon-red mx-auto shadow-[0_0_15px_var(--neon-red)]" />
        </ScrollRevealItem>

        {/* Title Sponsor */}
        <ScrollRevealItem className="flex flex-col items-center justify-center mb-24">
          <div className="text-neon-red code-font mb-4 tracking-[0.2em] uppercase text-sm font-bold opacity-80">
            [ TITLE SPONSOR ]
          </div>
          <div className="group relative flex flex-col items-center justify-center w-full max-w-md h-[200px] rounded-2xl glass cursor-pointer overflow-hidden border-2 border-neon-red/50 hover:border-neon-red transition-all duration-500 shadow-[0_0_30px_rgba(255,0,0,0.1)] hover:shadow-[0_0_50px_rgba(255,0,0,0.3)] hover:-translate-y-2">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(90deg,transparent_0%,rgba(255,0,0,0.1)_50%,transparent_100%)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <div className="text-4xl md:text-5xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10 mb-2">
              UPLEARN
            </div>
            <div className="text-text-secondary code-font text-sm uppercase tracking-widest z-10">
              from Unstop
            </div>
          </div>
        </ScrollRevealItem>

        {/* Community Partners */}
        <ScrollRevealItem>
          <div className="text-center mb-10">
            <h3 className="text-2xl text-text-secondary tracking-[0.2em] uppercase font-light">Community Partners</h3>
          </div>
          <div className="relative flex w-screen overflow-hidden py-4 -ml-6 lg:-ml-0 lg:w-full">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              className="flex gap-8 md:gap-12 w-max"
            >
              {[...communityPartners, ...communityPartners].map((sponsor, i) => (
                <div
                  key={i}
                  className="group relative flex items-center justify-center min-w-[200px] md:min-w-[250px] h-[100px] rounded-xl glass cursor-pointer overflow-hidden border border-glass-border hover:border-white/50 transition-colors duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="code-font text-2xl font-bold text-gray-500 group-hover:text-white transition-all duration-300 z-10">
                    {sponsor}
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
