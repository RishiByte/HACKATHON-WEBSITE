'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Camera, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', padding: '150px 2rem 50px', background: 'var(--bg-secondary)', borderTop: '2px solid var(--neon-red)', boxShadow: '0 -10px 30px rgba(255,0,0,0.2)' }}>
      
      {/* Footer Content */}

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
