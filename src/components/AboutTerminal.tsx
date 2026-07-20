'use client';

import { motion } from 'framer-motion';
import { Braces, Gauge, Rocket, Users } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const pillars = [
  {
    icon: Rocket,
    title: 'Ship Real Products',
    desc: 'Build working prototypes, demos, and product stories that judges can understand in minutes.',
  },
  {
    icon: Users,
    title: 'Team-First Format',
    desc: 'Collaborate in squads of up to four with enough structure to move fast and enough freedom to be bold.',
  },
  {
    icon: Gauge,
    title: 'High-Signal Judging',
    desc: 'Projects are evaluated on execution, usability, technical depth, creativity, and practical impact.',
  },
];

const telemetry = ['Idea validation', 'Prototype sprint', 'Mentor review', 'Final showcase'];

export default function AboutTerminal() {
  return (
    <section id="about" className="section-shell bg-[#0a0a0a]">
      <ScrollReveal stagger className="section-inner grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollRevealItem>
          <div className="eyebrow">Built for serious makers</div>
          <h2 className="section-title">
            A Hackathon That Feels Like A <span className="text-[#ff1e1e]">Launchpad</span>
          </h2>
          <p className="section-subtitle max-w-2xl mt-6">
            Omnikon brings together developers, designers, and builders for a focused online sprint. The goal is simple: form a sharp idea, build a clean product, and present it like something ready for the world.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['48H', 'core sprint'],
              ['5', 'tracks'],
              ['₹10K', 'rewards'],
            ].map(([value, label]) => (
              <div key={label} className="premium-card p-6 border-[#ff1e1e]/20 hover:border-[#ff1e1e]/50 transition-colors">
                <div className="code-font text-4xl font-black text-white">{value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#bdbdbd]">{label}</div>
              </div>
            ))}
          </div>
        </ScrollRevealItem>

        <ScrollRevealItem>
          <div className="premium-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/5 to-transparent pointer-events-none" />
            <div className="mb-8 flex items-center justify-between gap-4 relative z-10">
              <div>
                <div className="eyebrow text-[0.68rem] mb-2">Event operating system</div>
                <h3 className="mt-2 text-2xl font-bold text-white">From concept to showcase</h3>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-[#ff1e1e] shadow-[0_0_20px_rgba(255,30,30,0.15)]">
                <Braces size={28} />
              </div>
            </div>

            <div className="grid gap-5 relative z-10">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-[#151515] p-6 hover:border-[#ff1e1e]/40 transition-colors"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff1e1e]/20 to-transparent text-[#ff1e1e]">
                      <pillar.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                      <p className="mt-2 text-base leading-6 text-[#bdbdbd]">{pillar.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-[#ff1e1e]/20 bg-[#050505] p-5 relative z-10">
              <div className="mb-4 flex items-center justify-between">
                <span className="code-font text-xs uppercase tracking-[0.2em] text-[#bdbdbd]">Live workflow</span>
                <span className="h-2 w-2 rounded-full bg-[#ff1e1e] shadow-[0_0_15px_#ff1e1e] animate-pulse" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {telemetry.map((item, index) => (
                  <div key={item} className="relative rounded-lg bg-[#151515] px-4 py-4 border border-white/5 hover:border-[#ff1e1e]/30 transition-colors">
                    <div className="code-font text-xs text-[#ff1e1e] mb-1">0{index + 1}</div>
                    <div className="text-sm font-bold text-white leading-tight">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollRevealItem>
      </ScrollReveal>
    </section>
  );
}
