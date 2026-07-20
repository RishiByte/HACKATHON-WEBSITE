'use client';

import { motion } from 'framer-motion';

const projects = [
  { title: 'AI Developer Assistant', category: 'Artificial Intelligence', img: '/placeholder1.png' },
  { title: 'DeFi Lending Protocol', category: 'Web3 & Blockchain', img: '/placeholder2.png' },
  { title: 'Cloud Infrastructure Manager', category: 'Cloud Computing', img: '/placeholder3.png' },
];

export default function WhatYouBuild() {
  return (
    <section id="what-you-build" className="section-shell">
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="premium-card group overflow-hidden"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#0a0a0a]">
                <div className="absolute inset-0 flex items-center justify-center text-[#ff1e1e]/20 border-b border-[#ff1e1e]/10">
                  <span className="code-font text-xl">{'<IMAGE_PLACEHOLDER />'}</span>
                </div>
                {/* <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-80" />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 bg-[#ff1e1e]/10 backdrop-blur-md border border-[#ff1e1e]/30 text-[#ff1e1e] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#bdbdbd] text-sm">
                  A revolutionary project built during the 48-hour hackathon, showcasing technical depth and innovation.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
