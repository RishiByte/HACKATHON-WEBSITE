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
    <section id="about" className="section-shell">
      <ScrollReveal stagger className="section-inner grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollRevealItem>
          <div className="eyebrow">Built for serious makers</div>
          <h2 className="section-title">A Hackathon That Feels Like A Launchpad</h2>
          <p className="section-subtitle max-w-2xl">
            Omnikon brings together developers, designers, and builders for a focused online sprint. The goal is simple: form a sharp idea, build a clean product, and present it like something ready for the world.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ['48H', 'core sprint'],
              ['5', 'tracks'],
              ['₹10K', 'rewards'],
            ].map(([value, label]) => (
              <div key={label} className="premium-card p-5">
                <div className="code-font text-3xl font-bold text-white">{value}</div>
                <div className="mt-1 text-sm uppercase tracking-[0.14em] text-text-muted">{label}</div>
              </div>
            ))}
          </div>
        </ScrollRevealItem>

        <ScrollRevealItem>
          <div className="premium-card p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <div className="eyebrow text-[0.68rem]">Event operating system</div>
                <h3 className="mt-2 text-2xl font-bold text-white">From concept to showcase</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/12 bg-white/7 text-accent-cyan">
                <Braces size={24} />
              </div>
            </div>

            <div className="grid gap-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-neon-red/25 to-accent-cyan/15 text-accent-gold">
                      <pillar.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                      <p className="mt-1 text-base leading-6 text-text-secondary">{pillar.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-black/30 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="code-font text-xs uppercase tracking-[0.18em] text-text-muted">Live workflow</span>
                <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_18px_var(--accent-cyan)]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                {telemetry.map((item, index) => (
                  <div key={item} className="relative rounded-md bg-white/[0.045] px-3 py-3">
                    <div className="code-font text-xs text-accent-cyan">0{index + 1}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{item}</div>
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
