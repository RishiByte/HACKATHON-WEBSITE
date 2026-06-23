'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const floatingIcons = [
  { label: '</>', x: -300, y: -200, pathX: [0, -60, 40, 0], pathY: [0, 80, -50, 0], rot: [0, 10, -5, 0], dur: 15 },
  { label: 'React', x: 350, y: -150, pathX: [0, 70, -30, 0], pathY: [0, -60, 40, 0], rot: [0, -10, 5, 0], dur: 18 },
  { label: 'Node', x: -350, y: 200, pathX: [0, 50, -80, 0], pathY: [0, 40, -60, 0], rot: [0, 5, -10, 0], dur: 20 },
  { label: 'API', x: 250, y: 250, pathX: [0, -50, 60, 0], pathY: [0, 70, -30, 0], rot: [0, -5, 10, 0], dur: 14 },
  { label: 'GitHub', x: 0, y: -280, pathX: [0, 60, -40, 0], pathY: [0, -30, 80, 0], rot: [0, 15, -15, 0], dur: 16 },
  { label: 'DB', x: 250, y: 60, pathX: [0, -80, 50, 0], pathY: [0, -50, 60, 0], rot: [0, -10, 5, 0], dur: 19 },
];

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem' }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="code-font neon-text" style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
            {value.toString().padStart(2, '0')}
          </div>
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--neon-red)' }}>
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '100px',
      paddingBottom: '50px'
    }}>
      
      {/* Floating Icons */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          animate={{
            x: icon.pathX,
            y: icon.pathY,
            rotate: icon.rot
          }}
          transition={{
            duration: icon.dur,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="code-font glass"
          style={{
            position: 'absolute',
            left: `calc(50% + ${icon.x}px)`,
            top: `calc(50% + ${icon.y}px)`,
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            fontWeight: 'bold',
            zIndex: 5,
            padding: '0.6rem 1.2rem',
            borderRadius: '4px',
            border: '1px solid var(--neon-red)',
            boxShadow: '0 0 15px rgba(255, 0, 0, 0.4), inset 0 0 10px rgba(255, 0, 0, 0.1)',
            pointerEvents: 'none',
            letterSpacing: '2px',
            textShadow: '0 0 5px var(--text-primary)'
          }}
        >
          {icon.label}
        </motion.div>
      ))}

      {/* Logo & Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '220px', height: '220px', marginBottom: '2rem' }}>
          <motion.div 
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, var(--neon-red) 0%, transparent 70%)',
              filter: 'blur(30px)',
              zIndex: 1
            }} 
          />
          <motion.img 
            src="/LogoDemonDie.jpeg" 
            alt="DemonDie Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--neon-red)', position: 'relative', zIndex: 11, boxShadow: '0 0 30px var(--neon-red)' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.h1 
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.8 }}
          className="neon-text"
          style={{ fontSize: '5.5rem', textAlign: 'center', margin: '0 0 1rem 0', lineHeight: 1.1, color: 'var(--text-primary)' }}
        >
          CODE. THINK.<br/>CONQUER.
        </motion.h1>
        
        <motion.p 
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '700px', letterSpacing: '2px', marginTop: '1rem' }}
        >
          The ultimate Web Dev & Full Stack Hackathon
        </motion.p>

        <motion.div 
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#register" className="neon-border devil-horn-card" style={{ padding: '1rem 3rem', background: 'var(--neon-red)', color: '#000', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer' }}>
            Register on Unstop
          </a>
          <a href="#rules" className="glass" style={{ padding: '1rem 3rem', color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s' }}
             onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--neon-red)'; e.currentTarget.style.color = 'var(--neon-red)'; }}
             onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            Rulebook
          </a>
          <a href="#discord" className="glass" style={{ padding: '1rem 3rem', color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s' }}
             onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--neon-red)'; e.currentTarget.style.color = 'var(--neon-red)'; }}
             onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            Join Discord
          </a>
        </motion.div>

        <Countdown />
      </div>
    </section>
  );
}
