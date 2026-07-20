'use client';

import { motion } from 'framer-motion';
import { Terminal, MessageCircle, Globe, Camera, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const socials = [
  { icon: Terminal, href: '#', label: 'GitHub' },
  { icon: MessageCircle, href: '#', label: 'X (Twitter)' },
  { icon: Globe, href: '#', label: 'LinkedIn' },
  { icon: Camera, href: '#', label: 'Instagram' },
];

const links = [
  { title: 'Quick Links', items: ['Home', 'About', 'Tracks', 'Timeline', 'Prizes'] },
  { title: 'Resources', items: ['Rulebook', 'API Documentation', 'Design Assets', 'Code of Conduct'] },
  { title: 'Contact', items: ['hello@omnikon.dev', 'Sponsorship', 'Help Center'] },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030303] pt-20 pb-10 border-t border-[#ff1e1e]/20">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_bottom,#ff1e1e,transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 group inline-flex mb-6">
              <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-[#ff1e1e]/30 bg-[#151515] group-hover:border-[#ff1e1e] transition-colors">
                <Image src="/LogoOmnikon.jpeg" alt="Omnikon logo" fill sizes="48px" className="object-cover" />
              </span>
              <span className="leading-none">
                <span className="block text-2xl font-black uppercase tracking-widest text-white group-hover:text-[#ff1e1e] transition-colors">Omnikon</span>
                <span className="code-font block text-[0.65rem] uppercase tracking-[0.2em] text-[#bdbdbd]">National Hackathon</span>
              </span>
            </a>
            <p className="text-[#bdbdbd] mb-8 max-w-sm leading-relaxed">
              The premier 48-hour build arena for developers who want to push boundaries, craft premium products, and shape the future of technology.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#151515] text-[#bdbdbd] transition-all hover:text-[#ff1e1e] hover:border-[#ff1e1e]/50 hover:shadow-[0_0_15px_rgba(255,30,30,0.2)]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {links.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-6 text-lg">{col.title}</h4>
              <ul className="grid gap-4">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#bdbdbd] hover:text-[#ff1e1e] transition-colors text-sm code-font tracking-wide">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="premium-card p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border-[#ff1e1e]/20 bg-[#0a0a0a]">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Stay Updated</h4>
            <p className="text-[#bdbdbd]">Get the latest announcements, API reveals, and event details directly in your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff1e1e]/50 transition-colors flex-1 min-w-[250px]"
            />
            <button className="magnetic-button primary-button !min-h-0 py-3 px-6 rounded-lg whitespace-nowrap">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="h-px w-full bg-[#151515] mb-8 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#ff1e1e] to-transparent"
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="code-font text-xs text-[#bdbdbd] uppercase tracking-widest">
            © 2026 Omnikon Hackathon. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs code-font text-[#bdbdbd] uppercase tracking-widest">
            <a href="#" className="hover:text-[#ff1e1e] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ff1e1e] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
