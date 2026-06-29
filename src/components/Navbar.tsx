'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        borderBottom: scrolled ? '1px solid var(--neon-red)' : '1px solid rgba(255,0,0,0.2)',
        boxShadow: scrolled ? '0 4px 30px rgba(255,0,0,0.15)' : '0 4px 30px rgba(0, 0, 0, 0.5)',
        backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4 w-full">
        <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleScrollTo(e as any, '#home')}>
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neon-red shadow-[0_0_10px_rgba(255,0,0,0.6)]">
            <img src="/LogoOmnikon.jpeg" alt="Omnikon Minimal Logo" className="w-full h-full object-cover" />
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '3px', textShadow: '0 0 5px rgba(255,255,255,0.4)' }}>
            Omnikon
          </div>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-10 list-none items-center">
          {links.map((item) => {
            const targetId = `#${item.toLowerCase()}`;
            return (
              <li key={item}>
                <a 
                  href={targetId}
                  onClick={(e) => handleScrollTo(e, targetId)}
                  className="font-mono"
                  style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--neon-red)';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(255,0,0,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Register Button */}
        <div className="hidden md:block">
          <a
            href="#register"
            onClick={(e) => handleScrollTo(e, '#register')}
            className="relative group overflow-hidden font-mono"
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              border: '1px solid var(--neon-red)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              boxShadow: '0 0 15px rgba(255,0,0,0.3), inset 0 0 10px rgba(255,0,0,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255,0,0,0.8), inset 0 0 20px rgba(255,0,0,0.4)';
              e.currentTarget.style.backgroundColor = 'rgba(255,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255,0,0,0.3), inset 0 0 10px rgba(255,0,0,0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors">Register</span>
            <div className="absolute inset-0 bg-neon-red/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-primary focus:outline-none p-2 border border-transparent hover:border-neon-red hover:shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-neon-red shadow-[0_10px_30px_rgba(255,0,0,0.3)] backdrop-blur-md">
          <ul className="flex flex-col py-6 px-8 gap-4 list-none font-mono">
            {links.map((item) => {
              const targetId = `#${item.toLowerCase()}`;
              return (
                <li key={item} className="border-b border-neon-red/10 pb-2">
                  <a 
                    href={targetId}
                    onClick={(e) => handleScrollTo(e, targetId)}
                    className="block text-sm uppercase tracking-widest text-text-secondary hover:text-neon-red transition-colors"
                  >
                    &gt; {item}
                  </a>
                </li>
              );
            })}
            <li className="pt-6 mt-2">
              <a
                href="#register"
                onClick={(e) => handleScrollTo(e, '#register')}
                className="block w-full text-center py-3 border border-neon-red text-text-primary uppercase tracking-widest font-bold bg-neon-red/10 hover:bg-neon-red/30 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-all"
              >
                Register [ENTER]
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
