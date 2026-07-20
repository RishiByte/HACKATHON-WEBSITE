'use client';

import { motion } from 'framer-motion';

const mentors = [
  { name: 'Dr. Alan Turing', role: 'AI Researcher', company: 'DeepMind' },
  { name: 'Ada Lovelace', role: 'Chief Architect', company: 'Vercel' },
  { name: 'Grace Hopper', role: 'Security Lead', company: 'Cloudflare' },
  { name: 'Linus Torvalds', role: 'Systems Engineer', company: 'Linux Foundation' },
];

export default function Mentors() {
  return (
    <section id="mentors" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <div className="eyebrow mx-auto">Expert Guidance</div>
          <h2 className="section-title">
            Our <span className="text-[#ff1e1e]">Mentors</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Learn from industry veterans who have built products scaling to millions of users.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-6 text-center group"
            >
              <div className="mx-auto h-32 w-32 rounded-full border-2 border-[#ff1e1e]/20 bg-[#0a0a0a] mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-[#ff1e1e] transition-colors duration-300">
                <span className="code-font text-[#ff1e1e]/40">AVATAR</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff1e1e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ff1e1e] transition-colors">{mentor.name}</h3>
              <p className="text-[#bdbdbd] font-semibold text-sm">{mentor.role}</p>
              <p className="text-[#ff1e1e]/80 text-xs mt-2 uppercase tracking-widest">{mentor.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
