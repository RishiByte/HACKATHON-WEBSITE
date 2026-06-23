'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LayoutDashboard, Server, Layers, Bot } from 'lucide-react';
import React from 'react';

const tracks = [
  {
    title: 'Frontend Arena',
    icon: LayoutDashboard,
    tags: ['React', 'Next.js', 'UI/UX'],
    desc: 'Craft pixel-perfect, highly animated, and performant user interfaces.'
  },
  {
    title: 'Backend Forge',
    icon: Server,
    tags: ['Node.js', 'APIs', 'Databases'],
    desc: 'Architect robust APIs and scalable database systems.'
  },
  {
    title: 'Full Stack Battlefield',
    icon: Layers,
    tags: ['E2E Apps', 'Auth', 'Deployments'],
    desc: 'Build complete applications from the database to the browser.'
  },
  {
    title: 'AI & Automation Zone',
    icon: Bot,
    tags: ['LLMs', 'Agents', 'Workflows'],
    desc: 'Integrate artificial intelligence to solve complex problems autonomously.'
  }
];

function TrackCard({ track, index }: { track: typeof tracks[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
    <motion.div 
      whileInView={{ opacity: [0, 1], y: [50, 0] }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          height: '100%',
          cursor: 'pointer'
        }}
        className="glass neon-border devil-horn-card"
        whileHover={{ scale: 1.05 }}
      >
        <div style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', transform: "translateZ(30px)" }}>
          <div style={{ 
            width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(255,0,0,0.1)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
            border: '1px solid var(--neon-red)', boxShadow: '0 0 15px var(--neon-red-light)'
          }}>
            <track.icon size={30} color="var(--neon-red)" />
          </div>
          <h3 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{track.title}</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, fontSize: '1.1rem' }}>{track.desc}</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {track.tags.map(tag => (
              <span key={tag} className="code-font" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--neon-red)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" style={{ padding: '100px 2rem', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div 
          whileInView={{ opacity: [0, 1], y: [30, 0] }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="neon-text" style={{ fontSize: '3.5rem', color: 'var(--text-primary)' }}>THE TRACKS</h2>
          <div style={{ width: '100px', height: '4px', background: 'var(--neon-red)', margin: '1rem auto', boxShadow: '0 0 15px var(--neon-red)' }} />
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Choose your battlefield and claim victory.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {tracks.map((track, i) => (
            <TrackCard key={track.title} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
