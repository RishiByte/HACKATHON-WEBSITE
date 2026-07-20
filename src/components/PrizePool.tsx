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
    accent: '#ffffff', // Using white for 1st place in red/black theme
    perks: ['Winner showcase', 'Certificate', 'Top mentor feedback'],
    featured: true,
  },
  {
    title: 'Runner Up',
    place: '2nd Place',
    icon: Medal,
    amount: '₹3,000',
    accent: '#bdbdbd', // Silver/Grey
    perks: ['Certificate', 'Project spotlight', 'Judge notes'],
  },
  {
    title: 'Finalist',
    place: '3rd Place',
    icon: Award,
    amount: '₹2,000',
    accent: '#ff1e1e', // Red for 3rd/Accent
    perks: ['Certificate', 'Community feature', 'Demo feedback'],
  },
];

export default function PrizePool() {
  return (
    <section id="prizes" className="section-shell overflow-hidden bg-[#080808]">
      <ScrollReveal stagger className="section-inner">
        <ScrollRevealItem className="mx-auto mb-20 max-w-3xl text-center">
          <div className="eyebrow justify-center">Prize pool</div>
          <h2 className="section-title">
            Rewards For <span className="text-[#ff1e1e]">Champions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Cash awards, recognition, and useful feedback for the strongest products across the Omnikon build arena.
          </p>
        </ScrollRevealItem>

        <div className="grid items-end gap-6 lg:grid-cols-3">
          {prizes.map((prize) => (
            <ScrollRevealItem key={prize.title}>
              <motion.article
                whileHover={{ y: -12, scale: 1.02 }}
                className={`premium-card relative p-8 group ${prize.featured ? 'lg:-mt-10 lg:min-h-[460px] border-[#ff1e1e]/40' : 'lg:min-h-[400px]'}`}
              >
                {/* Animated Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:animate-[sheen_1.5s_ease-in-out_infinite]" />
                
                <div
                  className="absolute inset-x-0 top-0 h-44 opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${prize.accent}, transparent 70%)` }}
                />
                
                <div className="relative z-10 flex h-full flex-col items-center text-center">
                  <div className="mb-6 flex flex-col items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_15px_35px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500" style={{ color: prize.accent }}>
                      <prize.icon size={36} />
                    </div>
                    <div className="code-font text-xs uppercase tracking-[0.2em] text-[#bdbdbd]">{prize.place}</div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{prize.title}</h3>
                  <div className="code-font mt-2 text-5xl font-black neon-text transition-colors duration-300 group-hover:text-white" style={{ color: prize.accent }}>
                    {prize.amount}
                  </div>

                  <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#ff1e1e]/30 to-transparent" />

                  <ul className="mt-auto grid gap-3 w-full text-left">
                    {prize.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-3 text-[#bdbdbd]">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: prize.accent, boxShadow: `0 0 10px ${prize.accent}` }} />
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
