'use client';

import { motion } from 'framer-motion';
import { Bot, Cloud, LayoutDashboard, Layers, Shield } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const tracks = [
  {
    title: 'Frontend Craft',
    icon: LayoutDashboard,
    tags: ['React', 'Next.js', 'Design Systems'],
    desc: 'Create polished interfaces with strong usability, clean motion, and production-ready component thinking.',
  },
  {
    title: 'Full Stack Products',
    icon: Layers,
    tags: ['Auth', 'APIs', 'Databases'],
    desc: 'Build complete web products with reliable backends, thoughtful flows, and deployable architecture.',
  },
  {
    title: 'AI Workflows',
    icon: Bot,
    tags: ['LLMs', 'Agents', 'Automation'],
    desc: 'Use intelligent systems to reduce friction, make better decisions, or unlock new user experiences.',
  },
  {
    title: 'Security Systems',
    icon: Shield,
    tags: ['Auth', 'Threat Modeling', 'Privacy'],
    desc: 'Design resilient systems that protect users, data, and trust from day one.',
  },
  {
    title: 'Cloud Infrastructure',
    icon: Cloud,
    tags: ['Docker', 'Serverless', 'Scale'],
    desc: 'Ship dependable cloud-native experiences with observability, performance, and deployment discipline.',
  },
];

function TrackCard({ track, index }: { track: typeof tracks[0]; index: number }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 26, rotateX: 10 },
        show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, delay: index * 0.1 } },
      }}
      whileHover={{ y: -10, rotateX: -5, rotateY: 5 }}
      style={{ perspective: 1000 }}
      className="premium-card group h-full p-8 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-[#ff1e1e]/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_20px_50px_rgba(255,30,30,0.1)] group-hover:border-[#ff1e1e]/50 group-hover:text-[#ff1e1e] transition-all duration-300">
            <track.icon size={32} />
          </div>
          <div className="code-font text-xl text-[#bdbdbd]/40 font-black group-hover:text-[#ff1e1e]/40 transition-colors">0{index + 1}</div>
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-[#ff1e1e] transition-colors">{track.title}</h3>
        <p className="mt-4 flex-1 text-lg leading-7 text-[#bdbdbd]">{track.desc}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {track.tags.map((tag) => (
            <span key={tag} className="code-font rounded-full border border-white/10 bg-[#151515] px-4 py-1.5 text-xs text-[#bdbdbd] group-hover:border-[#ff1e1e]/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Animated glowing border effect on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ff1e1e]/30 transition-all duration-500 pointer-events-none" />
    </motion.article>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="section-shell overflow-hidden bg-[#0a0a0a]">
      <ScrollReveal stagger className="section-inner">
        <ScrollRevealItem className="mb-16 max-w-4xl">
          <div className="eyebrow">Choose your build lane</div>
          <h2 className="section-title">
            Tracks With Real <span className="text-[#ff1e1e]">Gravity</span>
          </h2>
          <p className="section-subtitle">
            Pick a direction, then make it undeniable. Every track rewards clean execution, thoughtful UX, and a working demo.
          </p>
        </ScrollRevealItem>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
