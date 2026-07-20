'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal, { ScrollRevealItem } from './animations/ScrollReveal';

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
    <section id="faqs" className="section-shell bg-[#080808]">
      <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <ScrollReveal>
          <ScrollRevealItem>
            <div className="eyebrow">Questions</div>
            <h2 className="section-title">
              Everything Before You <span className="text-[#ff1e1e]">Register</span>
            </h2>
            <p className="section-subtitle mt-6 max-w-md">
              Quick answers for teams deciding whether Omnikon is the right place to build their next project.
            </p>
          </ScrollRevealItem>
        </ScrollReveal>

        <div className="grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollRevealItem key={faq.question}>
                <motion.div 
                  layout
                  className={`premium-card transition-all duration-500 overflow-hidden ${isOpen ? 'border-[#ff1e1e]/40 shadow-[0_10px_30px_rgba(255,30,30,0.15)] bg-[#0a0a0a]' : 'hover:border-[#ff1e1e]/20 hover:bg-[#0a0a0a]'}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left outline-none"
                  >
                    <span className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#ff1e1e]' : 'text-white'}`}>{faq.question}</span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }} 
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${isOpen ? 'border-[#ff1e1e]/50 bg-[#ff1e1e]/10 text-[#ff1e1e] shadow-[0_0_15px_rgba(255,30,30,0.2)]' : 'border-white/10 bg-[#151515] text-[#bdbdbd]'}`}
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="border-t border-[#ff1e1e]/10 pt-4 text-lg leading-relaxed text-[#bdbdbd]">
                            <motion.p
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.4 }}
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollRevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
