'use client';

import { motion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

export default function WhatYouBuild() {
  return (
    <section id="what-you-build" className="section-shell relative overflow-hidden">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="eyebrow">The Showcase</div>
          <h2 className="section-title">
            What You <span className="text-[#ff1e1e]">Build</span>
          </h2>
          <p className="section-subtitle">
            Take a look at the caliber of projects shipped at previous Omnikon events.
          </p>
        </motion.div>

        {/* Coming Soon State */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 w-full max-w-4xl mx-auto premium-card p-8 sm:p-16 text-center group relative overflow-hidden border-[#ff1e1e]/20"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,30,30,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,30,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-24 h-24 rounded-2xl bg-[#151515] border border-[#ff1e1e]/20 flex items-center justify-center text-[#ff1e1e] shadow-[0_0_30px_rgba(255,30,30,0.1)] group-hover:border-[#ff1e1e]/50 group-hover:shadow-[0_0_40px_rgba(255,30,30,0.2)] transition-all duration-300"
            >
              <Terminal size={40} />
            </motion.div>
            
            <div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4 group-hover:text-[#ff1e1e] transition-colors duration-500">
                Awaiting Innovation
              </h3>
              <p className="text-[#bdbdbd] max-w-lg mx-auto leading-relaxed text-lg">
                This section will be populated with the incredible projects built during this hackathon. Get ready to show the world what you can create.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
