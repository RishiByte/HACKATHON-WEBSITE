'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code, Laptop, Briefcase } from 'lucide-react';

const reasons = [
  { icon: Trophy, title: 'National Recognition', desc: 'Compete with the best minds across the nation and prove your mettle.' },
  { icon: Award, title: 'Certificates', desc: 'Get verifiable certificates from industry leaders for your participation and victories.' },
  { icon: Users, title: 'Networking', desc: 'Connect with mentors, sponsors, and thousands of like-minded developers.' },
  { icon: Code, title: 'Open Source', desc: 'Contribute to meaningful open-source projects that make a real difference.' },
  { icon: Laptop, title: 'Real Projects', desc: 'Build actual products that solve real-world problems in less than 1 month.' },
  { icon: Briefcase, title: 'Career Opportunities', desc: 'Land internships and full-time roles directly from our sponsor companies.' },
];

export default function WhyParticipate() {
  return (
    <section id="why-participate" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="eyebrow">The Experience</div>
          <h2 className="section-title">
            Why <span className="text-[#ff1e1e]">Participate</span>
          </h2>
          <p className="section-subtitle">
            Every hour counts. That&apos;s why we provide the best tools, a frictionless environment, and real-time guidance to help you ship.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="premium-card p-8 group cursor-pointer"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a1a1a] border border-[#ff1e1e]/20 text-[#ff1e1e] group-hover:bg-[#ff1e1e]/10 group-hover:scale-110 transition-all duration-300">
                <reason.icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{reason.title}</h3>
              <p className="text-[#bdbdbd] leading-relaxed">{reason.desc}</p>
              
              {/* Animated bottom border on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#ff1e1e] transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
