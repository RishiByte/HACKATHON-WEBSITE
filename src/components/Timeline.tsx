'use client';

import { motion } from 'framer-motion';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const timeline = [
  {
    phase: 'Phase 1',
    title: 'Registration Opens',
    date: 'August 15, 2026',
    desc: 'Form your team, select your track, and secure your spot in the hackathon.',
  },
  {
    phase: 'Phase 2',
    title: 'Opening Ceremony',
    date: 'September 3, 2026',
    desc: 'Kickoff stream with keynote speakers, rule breakdown, and API announcements.',
  },
  {
    phase: 'Phase 3',
    title: 'The Sprint (48 Hours)',
    date: 'September 3-5, 2026',
    desc: 'Non-stop building. Mentors available round-the-clock for technical guidance.',
  },
  {
    phase: 'Phase 4',
    title: 'Submission & Pitch',
    date: 'September 5, 2026',
    desc: 'Code freeze. Submit your repo and a 3-minute video pitch.',
  },
  {
    phase: 'Phase 5',
    title: 'Winners Announced',
    date: 'September 8, 2026',
    desc: 'Closing ceremony. Prizes awarded and top projects showcased globally.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-shell">
      <ScrollReveal className="section-inner max-w-4xl mx-auto">
        <ScrollRevealItem className="mb-20 text-center">
          <div className="eyebrow mx-auto">The Roadmap</div>
          <h2 className="section-title">
            Hackathon <span className="text-[#ff1e1e]">Timeline</span>
          </h2>
        </ScrollRevealItem>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff1e1e]/50 via-[#151515] to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollRevealItem key={item.phase}>
                  <div className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    {/* Center Node */}
                    <div className="absolute left-[28px] md:left-1/2 w-4 h-4 bg-[#ff1e1e] rounded-full shadow-[0_0_15px_#ff1e1e] transform -translate-x-1/2 md:translate-x-[-50%] z-10" />

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="premium-card p-6 inline-block w-full group"
                      >
                        <div className="code-font text-[#ff1e1e] text-sm mb-1 uppercase tracking-widest">
                          {item.phase}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff1e1e] transition-colors">{item.title}</h3>
                        <div className="code-font text-[#bdbdbd] mb-4">{item.date}</div>
                        <p className="text-[#bdbdbd]">{item.desc}</p>
                      </motion.div>
                    </div>
                  </div>
                </ScrollRevealItem>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
