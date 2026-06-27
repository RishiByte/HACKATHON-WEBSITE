'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Camera, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', padding: '150px 2rem 50px', background: 'var(--bg-secondary)', borderTop: '2px solid var(--neon-red)', boxShadow: '0 -10px 30px rgba(255,0,0,0.2)' }}>
      
      {/* Background Arena Gate glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, var(--neon-red) 0%, transparent 60%)',
          filter: 'blur(100px)',
          opacity: 0.3,
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* CTA */}
      <div style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative', zIndex: 10 }}>
        <h2 className="neon-text" style={{ fontSize: '4rem', marginBottom: '3rem', color: 'var(--text-primary)', letterSpacing: '2px' }}>
          ARE YOU READY TO ENTER THE ARENA?
        </h2>
        <a href="#register" className="neon-border devil-horn-card" style={{ 
          display: 'inline-block',
          padding: '1.5rem 4rem', 
          background: 'var(--neon-red)', 
          color: '#000', 
          fontWeight: 'bold', 
          fontSize: '1.5rem', 
          textTransform: 'uppercase', 
          letterSpacing: '3px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px var(--neon-red-light)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 10px var(--neon-red-light)'}
        >
          REGISTER NOW
        </a>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '3rem', position: 'relative', zIndex: 10 }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--neon-red)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Omnikon
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-red)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Code size={30} />
          </a>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-red)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <MessageCircle size={30} />
          </a>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-red)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Globe size={30} />
          </a>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-red)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Camera size={30} />
          </a>
        </div>

        <div className="code-font" style={{ color: 'var(--text-secondary)' }}>
          © 2026 Omnikon Hackathon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
