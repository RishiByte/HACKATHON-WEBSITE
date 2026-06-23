'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const prizes = [
  {
    title: 'Runner-Up',
    icon: Medal,
    amount: '$1,500',
    color: '#c0c0c0', // Silver
    delay: 0.2
  },
  {
    title: 'Champion',
    icon: Trophy,
    amount: '$3,000',
    color: '#ffd700', // Gold
    delay: 0,
    scale: 1.1
  },
  {
    title: 'Special Awards',
    icon: Award,
    amount: '$500',
    color: '#cd7f32', // Bronze
    delay: 0.4
  }
];

export default function PrizePool() {
  return (
    <section id="prizes" style={{ padding: '100px 2rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="neon-text" style={{ fontSize: '3.5rem', color: 'var(--text-primary)' }}>THE SPOILS OF WAR</h2>
          <div style={{ width: '100px', height: '4px', background: 'var(--neon-red)', margin: '1rem auto', boxShadow: '0 0 15px var(--neon-red)' }} />
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Massive prize pool for the ultimate victors.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.title}
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: prize.delay }}
              whileHover={{ y: -15, scale: prize.scale ? prize.scale * 1.05 : 1.05 }}
              style={{
                background: `linear-gradient(145deg, rgba(20,20,20,0.8) 0%, rgba(0,0,0,0.9) 100%)`,
                border: `1px solid ${prize.color}`,
                boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px ${prize.color}40`,
                padding: '3rem 2rem',
                borderRadius: '16px',
                textAlign: 'center',
                flex: '1',
                minWidth: '280px',
                maxWidth: '350px',
                transform: `scale(${prize.scale || 1})`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated Metallic Glow */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: prize.delay
                }}
                style={{
                  position: 'absolute',
                  top: 0, left: 0, bottom: 0, width: '50%',
                  background: `linear-gradient(90deg, transparent, ${prize.color}30, transparent)`,
                  transform: 'skewX(-20deg)'
                }}
              />

              <div style={{ 
                width: '100px', height: '100px', borderRadius: '50%', 
                background: `radial-gradient(circle, ${prize.color}40 0%, transparent 70%)`,
                margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <prize.icon size={50} color={prize.color} style={{ filter: `drop-shadow(0 0 10px ${prize.color})` }} />
              </div>
              
              <div className="code-font" style={{ fontSize: '3.5rem', fontWeight: 'bold', color: prize.color, textShadow: `0 0 20px ${prize.color}80`, marginBottom: '1rem' }}>
                {prize.amount}
              </div>
              
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
                {prize.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
