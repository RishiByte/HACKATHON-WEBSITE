'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'Who can participate?', answer: 'Any developer, designer, or creator who wants to build. Teams can include up to 4 members.' },
  { question: 'Is Omnikon fully online?', answer: 'Yes. The hackathon runs virtually on Unstop, so teams can participate from anywhere.' },
  { question: 'Can we use open-source libraries or AI tools?', answer: 'Yes, as long as your final work is original, transparent, and created during the hackathon window.' },
  { question: 'Do we need an idea before the event?', answer: 'No. Themes and prompts are released during the program so every team starts with the same context.' },
  { question: 'Is there a registration fee?', answer: 'No. Omnikon is free to enter.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="section-shell">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="eyebrow">Questions</div>
          <h2 className="section-title">Everything Before You Register</h2>
          <p className="section-subtitle">
            Quick answers for teams deciding whether Omnikon is the right place to build their next project.
          </p>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="premium-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-xl font-bold text-white">{faq.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/7 text-accent-cyan">
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/10 px-5 pb-5 pt-4 text-lg leading-7 text-text-secondary">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
