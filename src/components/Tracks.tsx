'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Bot, Cloud, LayoutDashboard, Layers, Shield, Trophy } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';
import TextReveal from './animations/TextReveal';

const tracks = [
  {
    title: 'Frontend & UI',
    icon: LayoutDashboard,
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    desc: 'Create beautiful, accessible, and high-performance interfaces that deliver exceptional user experiences.',
    badge: 'Popular',
    award: 'Best Frontend Project',
    examples: ['Portfolio Builder', 'Design System'],
    featured: false,
    iconAnim: { scale: [1, 1.1, 1], transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }
  },
  {
    title: 'Full Stack Development',
    icon: Layers,
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    desc: 'Build complete web applications with scalable backends, clean architecture, and seamless user flows.',
    badge: 'Intermediate',
    award: 'Best Full Stack Project',
    examples: ['Hospital Management', 'Event Platform'],
    featured: false,
    iconAnim: { y: [0, -5, 0], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }
  },
  {
    title: 'AI & Machine Learning',
    icon: Bot,
    tags: ['Python', 'LLMs', 'Agents', 'RAG'],
    desc: 'Develop intelligent applications powered by LLMs, automation, agents, computer vision, or predictive models.',
    badge: 'Advanced',
    award: 'Best AI Innovation',
    examples: ['Resume Analyzer', 'AI Study Assistant'],
    featured: true,
    iconAnim: { opacity: [1, 0.5, 1], scale: [1, 1.05, 1], transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' } }
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    tags: ['OAuth', 'JWT', 'Encryption', 'Threat Modeling'],
    desc: 'Design secure systems, authentication flows, privacy-first applications, and resilient infrastructure.',
    badge: 'Advanced',
    award: 'Best Security Solution',
    examples: ['Password Manager', 'Secure File Vault'],
    featured: false,
    iconAnim: { rotateY: [0, 15, -15, 0], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    desc: 'Deploy scalable cloud-native applications using containers, CI/CD, serverless platforms, and observability tools.',
    badge: 'Advanced',
    award: 'Best Cloud Architecture',
    examples: ['Kubernetes Dashboard', 'CI/CD Pipeline'],
    featured: false,
    iconAnim: { x: [0, 5, -5, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }
  },
];

const stats = [
  { value: 5, suffix: '', label: 'Innovation Tracks' },
  { value: 10, prefix: '₹', suffix: 'K', label: 'Prize Pool' },
  { value: 1, suffix: ' Month', label: 'Build Cycle' },
  { value: 100, suffix: '%', label: 'Online' },
  { value: 0, suffix: ' National', label: 'Participation' }, // "National" isn't a number but we can just show "National Participation" without a counter, or 100% National. I'll handle strings.
];

function AnimatedStat({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  if (stat.label === 'Participation') {
    return (
      <div ref={ref} className="flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="font-black text-white text-2xl sm:text-3xl neon-text">
          National
        </motion.div>
        <div className="mt-2 code-font text-[10px] sm:text-xs uppercase tracking-widest text-[#bdbdbd]">{stat.label}</div>
      </div>
    );
  }
  
  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <div className="font-black text-white text-2xl sm:text-3xl neon-text flex items-center">
        {stat.prefix}
        <motion.span initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
          {stat.value}
        </motion.span>
        {stat.suffix}
      </div>
      <div className="mt-2 code-font text-[10px] sm:text-xs uppercase tracking-widest text-[#bdbdbd]">{stat.label}</div>
    </div>
  );
}

function TrackCard({ track, index }: { track: typeof tracks[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
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
      className={`premium-card group relative flex flex-col overflow-hidden transition-all duration-300 transform-gpu bg-[#111111] ${track.featured ? 'lg:col-span-2 min-h-[480px] !border-[#ff1e1e]/30' : 'min-h-[440px]'}`}
    >
      {/* 3D background gradient spotlight */}
      <motion.div 
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([xPos, yPos]) => `radial-gradient(500px circle at ${(xPos as number) * 100 + 50}% ${(yPos as number) * 100 + 50}%, rgba(255, 30, 30, 0.12), transparent 50%)`
          )
        }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
      />

      {/* Featured Red Radial Gradient */}
      {track.featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/10 to-transparent pointer-events-none" />
      )}
      
      <div className="relative z-10 flex h-full flex-col p-8 sm:p-10 pointer-events-none">
        
        {/* Header: Icon & Badge */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="flex items-center gap-6">
            <div 
              className={`flex items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_10px_30px_rgba(255,30,30,0.1)] group-hover:border-[#ff1e1e]/50 group-hover:text-[#ff1e1e] group-hover:shadow-[0_20px_40px_rgba(255,30,30,0.3)] group-hover:rotate-6 transition-all duration-300 ${track.featured ? 'h-20 w-20' : 'h-16 w-16'}`}
            >
              <track.icon size={track.featured ? 36 : 32} />
            </div>
            <div className="code-font text-2xl text-[#bdbdbd]/30 font-black group-hover:text-[#ff1e1e]/40 transition-colors duration-300">
              0{index + 1}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1e1e] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1e1e]"></span>
            </span>
            <span className="code-font text-[10px] uppercase tracking-widest text-white border border-white/10 rounded-full px-3 py-1 bg-[#151515]">
              {track.badge}
            </span>
          </div>
        </div>
        
        <h3 className={`font-bold text-white group-hover:text-[#ff1e1e] transition-colors duration-300 ${track.featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{track.title}</h3>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#bdbdbd] group-hover:text-white transition-colors duration-300">
          {track.desc}
        </p>

        {/* Example Projects */}
        <div 
          className="mt-6 flex flex-col gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="text-xs uppercase tracking-widest text-[#bdbdbd] code-font mb-1">Ideas to build</div>
          <ul className="flex flex-wrap gap-2">
            {track.examples.map(ex => (
              <li key={ex} className="text-sm text-white bg-[#222] border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1e1e]/70" />
                {ex}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tags */}
        <div className="mt-auto pt-8 flex flex-wrap gap-2">
          {track.tags.map((tag) => (
            <span 
              key={tag} 
              className="code-font rounded-full border border-white/5 bg-[#151515] px-4 py-1.5 text-xs text-[#bdbdbd]/80 group-hover:border-[#ff1e1e]/30 group-hover:text-white transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Awards Footer */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#ff1e1e]/10 bg-gradient-to-t from-[#ff1e1e]/10 to-transparent flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Trophy size={16} className="text-[#ff1e1e]" />
          <span className="text-sm font-semibold text-white tracking-wide">{track.award}</span>
        </div>

      </div>
    </motion.article>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="section-shell overflow-hidden bg-[#050505] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />
      
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,30,30,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,30,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"
        animate={{ y: [0, -80], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Radial Red Glow behind heading */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff1e1e]/15 blur-[150px] rounded-[100%] pointer-events-none mix-blend-screen" />

      {/* Floating Red Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#ff1e1e]/30 rounded-full blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, (Math.random() - 0.5) * 60, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      <ScrollReveal stagger className="section-inner relative z-10">
        <ScrollRevealItem className="mb-12 max-w-4xl">
          <div className="eyebrow">Choose your build lane</div>
          <h2 className="section-title">
            <TextReveal text="Tracks With Real" delay={0.1} as="span" className="inline-block mr-2" />
            <TextReveal text="Gravity" delay={0.2} as="span" className="text-[#ff1e1e] inline-block" />
          </h2>
          <p className="section-subtitle mt-6 max-w-3xl">
            Choose the track that matches your passion. Whether you're building AI applications, cloud infrastructure, secure systems, or polished user experiences, every track is judged independently and rewards creativity, technical excellence, and real-world impact.
          </p>
        </ScrollRevealItem>

        {/* Stats Strip */}
        <ScrollRevealItem className="mb-16">
          <div className="premium-card p-6 sm:p-8 relative overflow-hidden border-[#ff1e1e]/20 bg-[#0a0a0a]/80 backdrop-blur-xl">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10 divide-x divide-white/5">
              {stats.map((stat, i) => (
                <div key={stat.label} className={i === 0 ? 'border-l-0' : ''}>
                  <AnimatedStat stat={stat} />
                </div>
              ))}
            </div>
          </div>
        </ScrollRevealItem>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-[2000px]">
          {tracks.map((track, index) => (
            <ScrollRevealItem key={track.title} className={track.featured ? 'lg:col-span-2' : ''}>
              <TrackCard track={track} index={index} />
            </ScrollRevealItem>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
