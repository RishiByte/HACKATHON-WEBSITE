'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Tracks', 'Timeline', 'Prizes', 'FAQs', 'Sponsors'];

  return (
    <nav
      className={`glass`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid var(--neon-red)' : '1px solid var(--glass-border)',
        boxShadow: scrolled ? '0 4px 20px rgba(255,0,0,0.4)' : '0 4px 30px rgba(0, 0, 0, 0.5)',
        padding: '1rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--neon-red)', textTransform: 'uppercase', letterSpacing: '2px' }}>
        DemonDie
      </div>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map((item) => (
          <li key={item}>
            <Link 
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'color 0.3s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--neon-red)';
                e.currentTarget.style.textShadow = '0 0 8px var(--neon-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <a
        href="#register"
        className="neon-border devil-horn-card"
        style={{
          display: 'inline-block',
          padding: '0.6rem 2rem',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--neon-red)';
          e.currentTarget.style.boxShadow = '0 0 25px var(--neon-red)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
          e.currentTarget.style.boxShadow = '0 0 10px var(--neon-red-light), inset 0 0 10px var(--glass-border)';
        }}
      >
        Register
      </a>
    </nav>
  );
}
