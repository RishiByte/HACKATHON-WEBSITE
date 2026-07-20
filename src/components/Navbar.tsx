'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-3 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-white/14 bg-black/72 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
            : 'border-white/8 bg-black/28 backdrop-blur-md'
        }`}
      >
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/14 bg-white/5">
            <Image src="/LogoOmnikon.jpeg" alt="Omnikon logo" fill sizes="40px" className="object-cover" />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black uppercase tracking-normal text-white">Omnikon</span>
            <span className="code-font block text-[0.64rem] uppercase tracking-[0.2em] text-text-muted">National Hackathon</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="code-font rounded-md px-3 py-2 text-xs uppercase tracking-[0.12em] text-text-secondary transition-colors hover:bg-white/7 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#register" onClick={(e) => handleScrollTo(e, '#register')} className="magnetic-button primary-button hidden min-h-10 px-4 text-xs md:inline-flex">
          Register
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-white md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-lg border border-white/12 bg-black/88 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:hidden">
          <div className="grid gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="code-font rounded-md px-4 py-3 text-sm uppercase tracking-[0.14em] text-text-secondary hover:bg-white/7 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a href="#register" onClick={(e) => handleScrollTo(e, '#register')} className="magnetic-button primary-button mt-2 w-full">
              Register now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
