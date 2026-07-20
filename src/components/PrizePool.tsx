'use client';

import { motion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

export const prizes = [
  {
    title: 'Champion',
    place: '1st Place',
    icon: Trophy,
    amount: '₹5,000',
    accent: 'var(--accent-gold)',
    perks: ['Winner showcase', 'Certificate', 'Top mentor feedback'],
    featured: true,
  },
  {
    title: 'Runner Up',
    place: '2nd Place',
    icon: Medal,
    amount: '₹3,000',
    accent: 'var(--accent-cyan)',
    perks: ['Certificate', 'Project spotlight', 'Judge notes'],
  },
  {
    title: 'Finalist',
    place: '3rd Place',
    icon: Award,
    amount: '₹2,000',
    accent: 'var(--neon-red-light)',
    perks: ['Certificate', 'Community feature', 'Demo feedback'],
  },
];

export default function PrizePool() {
  return (
    <section id="prizes" className="section-shell overflow-hidden">
      <ScrollReveal stagger className="section-inner">
        <ScrollRevealItem className="mx-auto mb-16 max-w-3xl text-center">
          <div className="eyebrow justify-center">Prize pool</div>
          <h2 className="section-title">Rewards For Teams That Ship</h2>
          <p className="section-subtitle">
            Cash awards, recognition, and useful feedback for the strongest products across the Omnikon build arena.
          </p>
        </ScrollRevealItem>

        <div className="grid items-end gap-5 lg:grid-cols-3">
          {prizes.map((prize) => (
            <ScrollRevealItem key={prize.title}>
              <motion.article
                whileHover={{ y: -8 }}
                className={`premium-card p-6 ${prize.featured ? 'lg:-mt-8 lg:min-h-[440px]' : 'lg:min-h-[400px]'}`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-44 opacity-30 blur-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${prize.accent}, transparent 70%)` }}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="code-font text-sm uppercase tracking-[0.16em] text-text-muted">{prize.place}</div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/12 bg-white/7" style={{ color: prize.accent }}>
                      <prize.icon size={28} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white">{prize.title}</h3>
                  <div className="code-font mt-5 text-5xl font-black" style={{ color: prize.accent }}>
                    {prize.amount}
                  </div>

                  <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                  <ul className="mt-auto grid gap-3">
                    {prize.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-3 text-lg text-text-secondary">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: prize.accent, boxShadow: `0 0 12px ${prize.accent}` }} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </ScrollRevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
