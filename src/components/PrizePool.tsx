'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';
import { useRef } from 'react';

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

function PrizeCard({ prize, index }: { prize: typeof prizes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`premium-card relative p-8 group overflow-hidden transition-shadow duration-500 transform-gpu ${prize.featured ? 'lg:-mt-10 lg:min-h-[460px] border-[#ff1e1e]/40' : 'lg:min-h-[400px]'}`}
    >
      {/* 3D mouse tracking glow */}
      <motion.div 
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([xPos, yPos]) => `radial-gradient(400px circle at ${(xPos as number) * 100 + 50}% ${(yPos as number) * 100 + 50}%, ${prize.accent}20, transparent 50%)`
          )
        }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen" 
      />

      {/* Animated Shine Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-[sheen_1.5s_ease-in-out_infinite]" />
      
      <div
        className="absolute inset-x-0 top-0 h-44 opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${prize.accent}, transparent 70%)` }}
      />
      
      <div className="relative z-10 flex h-full flex-col items-center text-center pointer-events-none">
        <div className="mb-6 flex flex-col items-center gap-4">
          <motion.div 
            className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_15px_35px_rgba(0,0,0,0.5)] group-hover:border-white/30 transition-all duration-500" 
            style={{ color: prize.accent }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <prize.icon size={36} />
          </motion.div>
          <div className="code-font text-xs uppercase tracking-[0.2em] text-[#bdbdbd]">{prize.place}</div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-2 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300">{prize.title}</h3>
        <div className="code-font mt-2 text-5xl font-black neon-text transition-colors duration-300 group-hover:text-white" style={{ color: prize.accent }}>
          {prize.amount}
        </div>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/50 transition-colors duration-300" />

        <ul className="mt-auto grid gap-4 w-full text-left">
          {prize.perks.map((perk, i) => (
            <motion.li 
              key={perk} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + (i * 0.1) }}
              className="flex items-center gap-3 text-[#bdbdbd] group-hover:text-white transition-colors duration-300 font-medium"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: prize.accent, boxShadow: `0 0 10px ${prize.accent}` }} />
              {perk}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

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

        <div className="grid items-end gap-6 lg:grid-cols-3 perspective-[2000px]">
          {prizes.map((prize, index) => (
            <ScrollRevealItem key={prize.title}>
              <PrizeCard prize={prize} index={index} />
            </ScrollRevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
