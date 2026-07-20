'use client';

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Bot, Cloud, LayoutDashboard, Layers, Shield } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';
import { useRef } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className="premium-card group h-full p-8 relative overflow-hidden transition-all duration-300 transform-gpu"
    >
      {/* 3D background gradient */}
      <motion.div 
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([xPos, yPos]) => `radial-gradient(400px circle at ${(xPos as number) * 100 + 50}% ${(yPos as number) * 100 + 50}%, rgba(255, 30, 30, 0.1), transparent 50%)`
          )
        }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
      />
      
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-[#ff1e1e]/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10 flex h-full flex-col pointer-events-none">
        <div className="mb-8 flex items-start justify-between gap-4">
          <motion.div 
            className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_10px_30px_rgba(255,30,30,0.1)] group-hover:border-[#ff1e1e]/50 group-hover:text-[#ff1e1e] group-hover:shadow-[0_20px_40px_rgba(255,30,30,0.3)] transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <track.icon size={32} />
          </motion.div>
          <div className="code-font text-xl text-[#bdbdbd]/40 font-black group-hover:text-[#ff1e1e]/40 transition-colors duration-500">
            <motion.span
              initial={{ y: 0 }}
              whileInView={{ y: [0, -5, 0] }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="inline-block"
            >
              0{index + 1}
            </motion.span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-[#ff1e1e] transition-colors duration-300">{track.title}</h3>
        <p className="mt-4 flex-1 text-lg leading-7 text-[#bdbdbd] group-hover:text-white transition-colors duration-300">{track.desc}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {track.tags.map((tag, i) => (
            <motion.span 
              key={tag} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="code-font rounded-full border border-white/10 bg-[#151515] px-4 py-1.5 text-xs text-[#bdbdbd] group-hover:border-[#ff1e1e]/30 group-hover:text-white transition-colors"
            >
              {tag}
            </motion.span>
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-[2000px]">
          {tracks.map((track, index) => (
            <ScrollRevealItem key={track.title} className="h-full">
              <TrackCard track={track} index={index} />
            </ScrollRevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
