'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';

const targetDate = new Date('2026-08-15T23:59:59+05:30');

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const difference = Math.max(targetDate.getTime() - Date.now(), 0);
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid w-full grid-cols-4 gap-2 sm:gap-4 mt-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="premium-card p-4 text-center group cursor-default">
          <div className="code-font text-3xl font-bold text-white group-hover:text-[#ff1e1e] transition-colors duration-300">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="code-font mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-[#bdbdbd]">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

const stats = [
  { label: 'Colleges', value: '50+' },
  { label: 'Prize pool', value: '₹10K' },
  { label: 'Participants', value: '500+' },
  { label: 'Tracks', value: '4' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 bg-[#050505]">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-[#ff1e1e]/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[10%] bottom-[10%] h-80 w-80 rounded-full bg-[#ff1e1e]/10 blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,30,30,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,30,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-inner relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="eyebrow mb-6">
          National Tech Hackathon 2026
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-[clamp(3.5rem,8vw,6.5rem)] font-black uppercase leading-[0.9] text-white tracking-tight mb-8">
          <span className="block mb-2 text-[#bdbdbd]">Build The</span>
          <span className="block text-[#ff1e1e] neon-text">Impossible</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="max-w-2xl text-xl leading-relaxed text-[#bdbdbd] mb-10">
          Turn a weekend of coding into a product that matters. If you&apos;re a builder, designer, or creator with ideas, this is your arena.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#bdbdbd] mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff1e1e]/20 bg-[#151515] px-5 py-2.5 shadow-[0_0_15px_rgba(255,30,30,0.1)]">
            <CalendarDays size={18} className="text-[#ff1e1e]" />
            Aug 15 - Sep 5, 2026
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff1e1e]/20 bg-[#151515] px-5 py-2.5 shadow-[0_0_15px_rgba(255,30,30,0.1)]">
            <MapPin size={18} className="text-[#ff1e1e]" />
            Online on Unstop
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-16">
          <a href="#register" className="magnetic-button primary-button w-full sm:w-auto min-w-[200px]">
            Register Now <ArrowRight size={18} />
          </a>
          <a href="/rulebook" className="magnetic-button secondary-button w-full sm:w-auto min-w-[200px]">
            View Rulebook
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl border-t border-[#ff1e1e]/20 pt-10 mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={stat.label} className={`border-[#ff1e1e]/10 ${idx !== 0 ? 'border-l pl-6' : ''}`}>
              <div className="code-font text-3xl font-bold text-white neon-text">{stat.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-[#bdbdbd]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-2xl mt-12">
          <Countdown />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#bdbdbd] code-font">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#ff1e1e] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
