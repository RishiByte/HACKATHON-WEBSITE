'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Rules', href: '#rules' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveLink(targetId);
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 sm:px-6 pt-4 transition-all duration-500">
      <motion.div
        animate={{
          padding: scrolled ? '0.5rem 1rem' : '0.75rem 1.5rem',
          backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.7)' : 'rgba(5, 5, 5, 0.2)',
          borderColor: scrolled ? 'rgba(255, 30, 30, 0.15)' : 'rgba(255, 255, 255, 0.05)',
          scale: scrolled ? 0.98 : 1,
        }}
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 group">
          <span className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-[#151515] group-hover:border-[#ff1e1e] group-hover:shadow-[0_0_15px_rgba(255,30,30,0.6)] transition-all duration-300">
            <Image src="/LogoOmnikon.jpeg" alt="Omnikon logo" fill sizes="40px" className="object-cover" />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black uppercase tracking-widest text-white group-hover:text-[#ff1e1e] group-hover:drop-shadow-[0_0_8px_rgba(255,30,30,0.8)] transition-all duration-300">Omnikon</span>
            <span className="code-font block text-[0.60rem] uppercase tracking-[0.2em] text-[#bdbdbd]">National Hackathon</span>
          </span>
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`code-font relative px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                  activeLink === link.href ? 'text-white' : 'text-[#bdbdbd] hover:text-white'
                }`}
                onMouseEnter={() => setActiveLink(link.href)}
                onMouseLeave={() => setActiveLink('')}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff1e1e] shadow-[0_0_10px_#ff1e1e]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Breathing glow register button */}
        <motion.a 
          href="https://unstop.com/p/omnikon-national-hackathon-2026-omnikon-1715716" target="_blank" rel="noopener noreferrer"
          className="magnetic-button primary-button hidden md:inline-flex min-h-10 px-5 text-xs relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-[#ff1e1e]/20 blur-md"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="relative z-10">Register</span>
        </motion.a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-white hover:text-[#ff1e1e] hover:border-[#ff1e1e]/50 hover:shadow-[0_0_15px_rgba(255,30,30,0.3)] transition-all md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-[#ff1e1e]/20 bg-[#0a0a0a]/95 p-4 shadow-[0_20px_60px_rgba(255,30,30,0.2)] backdrop-blur-2xl md:hidden"
          >
            <div className="grid gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="code-font rounded-xl px-4 py-3 text-sm uppercase tracking-[0.15em] text-[#bdbdbd] hover:bg-[#ff1e1e]/10 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="https://unstop.com/p/omnikon-national-hackathon-2026-omnikon-1715716" target="_blank" rel="noopener noreferrer" className="magnetic-button primary-button mt-4 w-full">
                Register now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
