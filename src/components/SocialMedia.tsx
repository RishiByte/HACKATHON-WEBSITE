'use client';

import { motion } from 'framer-motion';
import { Terminal, MessageCircle, Globe, Camera, Mail } from 'lucide-react';

const socials = [
  { icon: Terminal, href: '#', label: 'GitHub' },
  { icon: MessageCircle, href: '#', label: 'X (Twitter)' },
  { icon: Globe, href: '#', label: 'LinkedIn' },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Email' },
  { icon: Globe, href: '#', label: 'Website' },
];

export default function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed left-6 bottom-1/2 translate-y-1/2 z-40 hidden xl:flex flex-col gap-6"
    >
      {socials.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#bdbdbd] hover:text-[#ff1e1e] transition-colors duration-300 relative group"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.1 }}
        >
          <social.icon size={22} />
          {/* Tooltip */}
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#151515] border border-[#ff1e1e]/20 rounded text-xs code-font opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {social.label}
          </div>
        </motion.a>
      ))}
      <div className="w-[1px] h-24 bg-gradient-to-b from-[#ff1e1e]/50 to-transparent mx-auto mt-4" />
    </motion.div>
  );
}
