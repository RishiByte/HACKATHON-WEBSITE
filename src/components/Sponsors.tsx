'use client';

import { motion } from 'framer-motion';

const sponsors = [
  'Google', 'Microsoft', 'GitHub', 'Unstop', 'Vercel', 'Stripe', 'Supabase', 'Figma'
];

export default function Sponsors() {
  return (
    <section id="sponsors" style={{ padding: '100px 0', minHeight: '40vh', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="neon-text" style={{ fontSize: '3.5rem', color: 'var(--text-primary)' }}>OUR ALLIES</h2>
        <div style={{ width: '100px', height: '4px', background: 'var(--neon-red)', margin: '1rem auto', boxShadow: '0 0 15px var(--neon-red)' }} />
      </div>

      <div style={{ display: 'flex', position: 'relative', width: '100vw', overflow: 'hidden', padding: '2rem 0' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', gap: '3rem', paddingLeft: '3rem', width: 'max-content' }}
        >
          {/* Double the list to make it infinite loop seamlessly */}
          {[...sponsors, ...sponsors].map((sponsor, i) => (
            <div
              key={i}
              className="glass"
              style={{
                padding: '2rem 4rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '250px',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--neon-red)';
                e.currentTarget.style.boxShadow = '0 0 30px var(--neon-red-light)';
                const text = e.currentTarget.querySelector('span');
                if (text) {
                  text.style.color = 'var(--neon-red)';
                  text.style.textShadow = '0 0 10px var(--neon-red)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.1)';
                const text = e.currentTarget.querySelector('span');
                if (text) {
                  text.style.color = 'var(--text-secondary)';
                  text.style.textShadow = 'none';
                }
              }}
            >
              <span className="code-font" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', fontWeight: 'bold', transition: 'all 0.3s' }}>
                {sponsor}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
