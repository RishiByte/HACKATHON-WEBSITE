'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ShieldCheck, Sparkles, Users } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const rules = [
  {
    icon: Users,
    title: 'Team Structure',
    desc: 'Register officially, keep teams within the size limit, and make sure every contributor is eligible.',
  },
  {
    icon: Sparkles,
    title: 'Original Work',
    desc: 'Build during the hackathon window. Open-source libraries and AI tools are allowed with transparent use.',
  },
  {
    icon: FileText,
    title: 'Clear Submissions',
    desc: 'Submit documentation, presentation, repository, demo video, and working prototype by the listed deadlines.',
  },
  {
    icon: ShieldCheck,
    title: 'Fair Conduct',
    desc: 'Respect other teams, avoid plagiarism, and follow the code of conduct throughout the event.',
  },
];

export default function Rulebook() {
  return (
    <section id="rules" className="section-shell overflow-hidden">
      <ScrollReveal stagger className="section-inner">
        <div className="grid items-end gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <ScrollRevealItem>
            <div className="eyebrow">Rules at a glance</div>
            <h2 className="section-title">Simple Rules. Serious Standards.</h2>
            <p className="section-subtitle">
              The rulebook is designed to keep the competition fair, fast, and focused on original building.
            </p>
            <Link href="/rulebook" className="magnetic-button secondary-button mt-8">
              Read full rulebook <ArrowRight size={18} />
            </Link>
          </ScrollRevealItem>

          <div className="grid gap-4 sm:grid-cols-2">
            {rules.map((rule, index) => (
              <ScrollRevealItem key={rule.title}>
                <motion.article whileHover={{ y: -6 }} className="premium-card h-full p-6">
                  <div className="relative z-10">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/12 bg-white/7 text-accent-cyan">
                        <rule.icon size={24} />
                      </div>
                      <span className="code-font text-sm text-text-muted">0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{rule.title}</h3>
                    <p className="mt-3 text-lg leading-7 text-text-secondary">{rule.desc}</p>
                  </div>
                </motion.article>
              </ScrollRevealItem>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
