'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, MessageCircle, Globe, Camera, Mail, MessageSquare } from 'lucide-react';
import { useRef } from 'react';

const socials = [
  { icon: Globe, href: 'https://omnikonhub.com', label: 'Website', target: "_blank" },
  { icon: Mail, href: 'mailto:contact@omnikonhub.com', label: 'Email' },
  { icon: Terminal, href: 'https://github.com/Omnikon-Org', label: 'GitHub', target: "_blank" },
  { icon: MessageSquare, href: 'https://discord.gg/yWtjK2Tb8T', label: 'Discord', target: "_blank" },
  { icon: Globe, href: 'https://www.linkedin.com/company/omnikon-org', label: 'LinkedIn', target: "_blank" },
  { icon: MessageCircle, href: 'https://x.com/OmnikonOrg', label: 'X (Twitter)', target: "_blank" },
  { icon: Camera, href: 'https://www.instagram.com/omnikonorg', label: 'Instagram', target: "_blank" },
];

function DockItem({ item, mouseX }: { item: typeof socials[0], mouseX: any }) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  // Calculate distance from mouse to this item
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scale based on distance (MacOS dock effect)
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  
  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.target}
      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={item.label}
      style={{ width }}
      className="relative flex aspect-square items-center justify-center rounded-2xl bg-[#151515] border border-white/10 hover:border-[#ff1e1e]/50 hover:bg-[#ff1e1e]/10 hover:shadow-[0_0_20px_rgba(255,30,30,0.3)] transition-colors group"
    >
      <item.icon className="w-1/2 h-1/2 text-[#bdbdbd] group-hover:text-[#ff1e1e] transition-colors" />
      
      {/* Tooltip */}
      <div className="absolute -top-10 px-3 py-1.5 bg-[#050505] border border-[#ff1e1e]/20 rounded-lg text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.8)]">
        {item.label}
        {/* Triangle pointer */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#ff1e1e]/20" />
      </div>
    </motion.a>
  );
}

export default function SocialMedia() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[45] hidden md:block" // Hidden on very small screens to save space
    >
      <div 
        className="flex items-end gap-3 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {socials.map((social) => (
          <DockItem key={social.label} item={social} mouseX={mouseX} />
        ))}
      </div>
    </motion.div>
  );
}
