'use client';

import { motion } from 'framer-motion';

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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ff1e1e]/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="section-inner grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="eyebrow">The Rubric</div>
          <h2 className="section-title">
            Judging <br /><span className="text-[#ff1e1e]">Criteria</span>
          </h2>
          <p className="section-subtitle mb-8">
            Our judges evaluate projects based on a strict set of criteria to ensure fairness and reward true engineering excellence.
          </p>
          <button className="magnetic-button secondary-button">
            Read Full Guidelines
          </button>
        </motion.div>

        <div className="flex flex-col gap-6">
          {criteria.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-5"
            >
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-[#bdbdbd] mt-1">{item.desc}</p>
                </div>
                <div className="code-font text-[#ff1e1e] font-bold">{item.percent}%</div>
              </div>
              <div className="h-2 w-full bg-[#0a0a0a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                  className="h-full bg-[#ff1e1e] shadow-[0_0_10px_#ff1e1e]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
