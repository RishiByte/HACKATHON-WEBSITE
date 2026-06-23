'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: "Who can participate?", answer: "Any developer, designer, or creator passionate about building the future. Teams can have up to 4 members." },
  { question: "Is it completely online?", answer: "Yes, DemonDie Hackathon is hosted 100% virtually on Unstop, so you can join the battle from anywhere in the world." },
  { question: "What are the rules?", answer: "All code must be written during the hackathon. Use of open-source libraries is permitted. Be respectful to fellow hackers." },
  { question: "Do I need an idea beforehand?", answer: "No! We will reveal specific themes and challenges at the start of the hackathon. You can brainstorm then." },
  { question: "How much does it cost?", answer: "Zero. Entry into the arena is completely free of charge." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" style={{ padding: '100px 2rem', minHeight: '60vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="neon-text" style={{ fontSize: '3.5rem', color: 'var(--text-primary)' }}>TERMINAL_FAQ</h2>
          <div style={{ width: '100px', height: '4px', background: 'var(--neon-red)', margin: '1rem auto', boxShadow: '0 0 15px var(--neon-red)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="glass neon-border" 
                style={{ 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  transition: 'all 0.3s',
                  boxShadow: isOpen ? '0 0 20px rgba(255,0,0,0.3)' : '0 0 10px rgba(0,0,0,0.5)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-secondary)',
                    border: 'none',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--neon-red)' : 'var(--text-primary)',
                    fontSize: '1.2rem',
                    textAlign: 'left',
                    fontFamily: 'var(--font-orbitron), sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="code-font" style={{ color: 'var(--text-secondary)' }}>{`>`}</span>
                    {faq.question}
                  </span>
                  <motion.span 
                    animate={{ rotate: isOpen ? 90 : 0 }} 
                    style={{ color: 'var(--neon-red)' }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      animate={{ height: ['0px', 'auto'], opacity: [0, 1] }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="code-font" style={{ 
                        padding: '1.5rem 2rem', 
                        color: 'var(--text-secondary)', 
                        background: 'rgba(0,0,0,0.5)',
                        borderTop: '1px solid var(--glass-border)',
                        fontSize: '1.1rem',
                        lineHeight: '1.6'
                      }}>
                        <span style={{ color: 'var(--neon-red)' }}>system:~$</span> {faq.answer}
                      </div>
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
