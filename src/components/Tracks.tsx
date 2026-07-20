'use client';

import { motion } from 'framer-motion';
import { Bot, Cloud, LayoutDashboard, Layers, Shield } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const tracks = [
  {
    title: 'Frontend Craft',
    icon: LayoutDashboard,
    accent: 'from-accent-cyan/24 to-neon-red/16',
    tags: ['React', 'Next.js', 'Design Systems'],
    desc: 'Create polished interfaces with strong usability, clean motion, and production-ready component thinking.',
  },
  {
    title: 'Full Stack Products',
    icon: Layers,
    accent: 'from-accent-gold/24 to-neon-red/16',
    tags: ['Auth', 'APIs', 'Databases'],
    desc: 'Build complete web products with reliable backends, thoughtful flows, and deployable architecture.',
  },
  {
    title: 'AI Workflows',
    icon: Bot,
    accent: 'from-accent-cyan/24 to-accent-gold/16',
    tags: ['LLMs', 'Agents', 'Automation'],
    desc: 'Use intelligent systems to reduce friction, make better decisions, or unlock new user experiences.',
  },
  {
    title: 'Security Systems',
    icon: Shield,
    accent: 'from-neon-red/24 to-accent-cyan/12',
    tags: ['Auth', 'Threat Modeling', 'Privacy'],
    desc: 'Design resilient systems that protect users, data, and trust from day one.',
  },
  {
    title: 'Cloud Infrastructure',
    icon: Cloud,
    accent: 'from-accent-gold/20 to-accent-cyan/14',
    tags: ['Docker', 'Serverless', 'Scale'],
    desc: 'Ship dependable cloud-native experiences with observability, performance, and deployment discipline.',
  },
];

function TrackCard({ track, index }: { track: typeof tracks[0]; index: number }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.04 } },
      }}
      whileHover={{ y: -8 }}
      className="premium-card group h-full p-6"
    >
      <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${track.accent} opacity-80 blur-2xl transition-opacity group-hover:opacity-100`} />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/12 bg-white/7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <track.icon size={28} />
          </div>
          <div className="code-font text-sm text-text-muted">0{index + 1}</div>
        </div>
        <h3 className="text-2xl font-bold text-white">{track.title}</h3>
        <p className="mt-4 flex-1 text-lg leading-7 text-text-secondary">{track.desc}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {track.tags.map((tag) => (
            <span key={tag} className="code-font rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-text-secondary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="section-shell overflow-hidden">
      <ScrollReveal stagger className="section-inner">
        <ScrollRevealItem className="mb-14 max-w-3xl">
          <div className="eyebrow">Choose your build lane</div>
          <h2 className="section-title">Tracks With Real Product Gravity</h2>
          <p className="section-subtitle">
            Pick a direction, then make it undeniable. Every track rewards clean execution, thoughtful UX, and a working demo.
          </p>
        </ScrollRevealItem>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <ScrollRevealItem key={track.title}>
              <TrackCard track={track} index={index} />
            </ScrollRevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
