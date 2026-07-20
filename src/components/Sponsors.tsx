'use client';

import { motion } from 'framer-motion';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const partners = ['Google', 'Microsoft', 'GitHub', 'Vercel', 'Stripe', 'Supabase', 'Figma'];

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-shell overflow-hidden">
      <ScrollReveal stagger className="section-inner">
        <ScrollRevealItem className="mx-auto mb-14 max-w-3xl text-center">
          <div className="eyebrow justify-center">Sponsors and partners</div>
          <h2 className="section-title">Backed By Builder Ecosystems</h2>
          <p className="section-subtitle">
            A sponsor layout that leaves room for real logos while still looking credible during the hackathon launch.
          </p>
        </ScrollRevealItem>

        <ScrollRevealItem>
          <div className="premium-card mx-auto mb-12 flex min-h-52 max-w-3xl flex-col items-center justify-center p-8 text-center">
            <div className="code-font text-xs uppercase tracking-[0.22em] text-accent-cyan">Title sponsor</div>
            <div className="mt-4 text-5xl font-black uppercase text-white sm:text-7xl">UpLearn</div>
            <div className="mt-3 text-lg text-text-secondary">from Unstop</div>
          </div>
        </ScrollRevealItem>

        <ScrollRevealItem>
          <div className="relative overflow-hidden py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-primary to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-primary to-transparent" />
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
              className="flex w-max gap-4"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner}-${index}`} className="premium-card flex h-24 min-w-[190px] items-center justify-center px-8">
                  <span className="text-2xl font-bold text-text-secondary transition-colors hover:text-white">{partner}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollRevealItem>
      </ScrollReveal>
    </section>
  );
}
