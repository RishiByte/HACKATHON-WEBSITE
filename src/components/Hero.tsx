'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin, Sparkles } from 'lucide-react';

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
    <div className="grid w-full grid-cols-4 gap-2 sm:gap-3">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="premium-card px-3 py-4 text-center">
          <div className="code-font text-2xl font-bold text-white sm:text-4xl">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="code-font mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-text-secondary sm:text-xs">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

const stats = [
  { label: 'Hours of building', value: '48' },
  { label: 'Prize pool', value: '₹10K' },
  { label: 'Hackers expected', value: '500+' },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <motion.div
          className="absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-neon-red/20 blur-[90px]"
          animate={{ scale: [1, 1.18, 1], opacity: [0.34, 0.58, 0.34] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-accent-cyan/15 blur-[100px]"
          animate={{ y: [0, 26, 0], opacity: [0.28, 0.5, 0.28] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-70 [mask-image:radial-gradient(circle_at_50%_28%,black,transparent_72%)]" />
      </div>

      <div className="section-inner grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="eyebrow">National Hackathon 2026</div>
          <h1 className="mt-6 max-w-5xl text-[clamp(3.4rem,10vw,7.8rem)] font-black uppercase leading-[0.86] text-white">
            Omnikon
            <span className="block bg-gradient-to-r from-accent-gold via-neon-red-light to-accent-cyan bg-clip-text text-transparent">
              Hackathon
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-text-secondary sm:text-2xl">
            A polished 48-hour build arena for web, full stack, AI, cloud, and security teams ready to ship projects with real-world impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-text-secondary sm:text-base">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <CalendarDays size={18} className="text-accent-gold" />
              Aug 15 - Sep 5, 2026
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <MapPin size={18} className="text-accent-cyan" />
              Online on Unstop
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#register" className="magnetic-button primary-button">
              Register now <ArrowRight size={18} />
            </a>
            <a href="/rulebook" className="magnetic-button secondary-button">
              View rulebook
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-white/14 pl-4">
                <div className="code-font text-2xl font-bold text-white sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm leading-4 text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.14, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div className="absolute -inset-10 rounded-full bg-[conic-gradient(from_180deg,var(--neon-red),var(--accent-cyan),var(--accent-gold),var(--neon-red))] opacity-20 blur-3xl" />
          <div className="premium-card p-5 sm:p-6">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-white/12 bg-black">
              <Image
                src="/HackathonLogo.png"
                alt="Omnikon National Hackathon"
                fill
                priority
                sizes="(max-width: 640px) 330px, 418px"
                className="object-contain p-6"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent,rgba(0,0,0,0.5))]" />
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <div>
                <div className="eyebrow text-[0.68rem]">Registration closes</div>
                <div className="mt-1 text-2xl font-bold text-white">August 15</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/12 bg-white/7 text-accent-gold">
                <Sparkles size={24} />
              </div>
            </div>
            <div className="mt-5">
              <Countdown />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
