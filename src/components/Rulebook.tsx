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
    <section id="rules" className="section-shell overflow-hidden bg-[#050505]">
      <ScrollReveal stagger className="section-inner">
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <ScrollRevealItem>
            <div className="eyebrow">Rules at a glance</div>
            <h2 className="section-title">
              Simple Rules. <span className="text-[#ff1e1e]">Serious Standards.</span>
            </h2>
            <p className="section-subtitle mt-6">
              The rulebook is designed to keep the competition fair, fast, and focused on original building.
            </p>
            <Link href="/rulebook" className="magnetic-button secondary-button mt-10 hover:border-[#ff1e1e]/40 transition-colors inline-flex">
              Read full rulebook <ArrowRight size={18} />
            </Link>
          </ScrollRevealItem>

          <div className="grid gap-5 sm:grid-cols-2">
            {rules.map((rule, index) => (
              <ScrollRevealItem key={rule.title}>
                <motion.article 
                  whileHover={{ y: -8, scale: 1.02 }} 
                  className="premium-card h-full p-8 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-white group-hover:text-[#ff1e1e] group-hover:border-[#ff1e1e]/30 shadow-[0_10px_30px_rgba(255,30,30,0.05)] transition-all duration-300">
                        <rule.icon size={26} />
                      </div>
                      <span className="code-font text-lg font-black text-[#bdbdbd]/40 group-hover:text-[#ff1e1e]/40 transition-colors">0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#ff1e1e] transition-colors">{rule.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#bdbdbd] group-hover:text-white transition-colors">{rule.desc}</p>
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
