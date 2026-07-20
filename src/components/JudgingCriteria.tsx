'use client';

import { motion } from 'framer-motion';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

const criteria = [
  { name: 'Innovation', percent: 25, desc: 'How unique and creative is the solution?' },
  { name: 'Technical Depth', percent: 30, desc: 'Complexity and quality of the codebase and architecture.' },
  { name: 'Impact', percent: 20, desc: 'Real-world applicability and potential user base.' },
  { name: 'Execution', percent: 15, desc: 'Completeness of the prototype and lack of bugs.' },
  { name: 'Presentation', percent: 10, desc: 'Clarity of the pitch and demo quality.' },
];

export default function JudgingCriteria() {
  return (
    <section id="judging" className="section-shell relative overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff1e1e]/10 blur-[150px] pointer-events-none rounded-full mix-blend-screen" 
      />
      
      <div className="section-inner grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <ScrollRevealItem>
            <div className="eyebrow">The Rubric</div>
            <h2 className="section-title">
              Judging <br /><span className="text-[#ff1e1e]">Criteria</span>
            </h2>
            <p className="section-subtitle mb-8">
              Our judges evaluate projects based on a strict set of criteria to ensure fairness and reward true engineering excellence.
            </p>
            <button className="magnetic-button secondary-button group">
              Read Full Guidelines
              <motion.span 
                className="absolute inset-0 bg-[#ff1e1e]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
              />
            </button>
          </ScrollRevealItem>
        </ScrollReveal>

        <div className="flex flex-col gap-6 relative z-10">
          {criteria.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, x: -10 }}
              className="premium-card p-6 group cursor-default transition-all duration-300 hover:border-[#ff1e1e]/30 hover:bg-[#0a0a0a]"
            >
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#ff1e1e] transition-colors">{item.name}</h4>
                  <p className="text-sm text-[#bdbdbd] mt-1">{item.desc}</p>
                </div>
                <div className="code-font text-[#ff1e1e] text-lg font-bold glow-text">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    {item.percent}%
                  </motion.span>
                </div>
              </div>
              <div className="h-3 w-full bg-[#151515] rounded-full overflow-hidden relative shadow-inner border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-[#ff1e1e]/80 to-[#ff1e1e] shadow-[0_0_15px_#ff1e1e] relative"
                >
                  {/* Leading edge glow pulse */}
                  <motion.div 
                    className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
