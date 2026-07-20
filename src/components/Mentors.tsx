'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Mentors() {
  return (
    <section id="mentors" className="section-shell relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#ff1e1e]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-inner relative z-10">
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
          <p className="section-subtitle mx-auto mb-16">
            Learn from industry veterans who have built products scaling to millions of users.
          </p>
        </motion.div>

        {/* Coming Soon State */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl mx-auto premium-card p-12 text-center group relative overflow-hidden"
        >
          {/* Animated gradient sweep */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff1e1e]/10 to-transparent -translate-x-full skew-x-[-20deg]"
            animate={{ translateX: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="text-[#ff1e1e]/80"
            >
              <Sparkles size={48} strokeWidth={1} />
            </motion.div>
            
            <div>
              <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-3 group-hover:text-[#ff1e1e] transition-colors duration-500">
                Revealing Soon
              </h3>
              <p className="text-[#bdbdbd] max-w-md mx-auto leading-relaxed">
                We are finalizing our lineup of incredible mentors from top tech companies. Check back later to see who will be guiding you!
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border border-dashed border-[#ff1e1e]/20 bg-[#050505] flex items-center justify-center relative overflow-hidden group/avatar">
                  <div className="absolute inset-0 bg-[#ff1e1e]/5 group-hover/avatar:bg-[#ff1e1e]/20 transition-colors" />
                  <span className="text-[#ff1e1e]/40 text-[10px] code-font font-bold">?</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
