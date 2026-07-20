'use client';

import { motion } from 'framer-motion';

export default function PartnerWithUs() {
  return (
    <section id="partner" className="section-shell border-t border-[#ff1e1e]/10 bg-[#080808]">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <div className="eyebrow mx-auto">Get Involved</div>
          <h2 className="section-title">
            Partner With <span className="text-[#ff1e1e]">Us</span>
          </h2>
          <p className="section-subtitle mx-auto mb-16">
            Join hands with Omnikon to foster innovation and support the next generation of builders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-8 text-center flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Sponsor Us</h3>
              <p className="text-[#bdbdbd] mb-8">Reach thousands of talented developers, showcase your APIs, and recruit top talent.</p>
            </div>
            <button className="magnetic-button primary-button w-full">View Prospectus</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="premium-card p-8 text-center flex flex-col justify-between border-[#ff1e1e]/30 bg-[#ff1e1e]/5"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#ff1e1e] mb-4">Campus Ambassador</h3>
              <p className="text-[#bdbdbd] mb-8">Lead your college community, organize local meetups, and get exclusive perks.</p>
            </div>
            <button className="magnetic-button secondary-button w-full border-[#ff1e1e]/50 hover:bg-[#ff1e1e] hover:text-black">Apply Now</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="premium-card p-8 text-center flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Volunteer</h3>
              <p className="text-[#bdbdbd] mb-8">Help us run the event smoothly, gain backstage experience, and network.</p>
            </div>
            <button className="magnetic-button secondary-button w-full">Join the Team</button>
          </motion.div>
        </div>

        {/* Community Numbers */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#151515]">
          {[
            { num: '50+', label: 'Colleges' },
            { num: '10k+', label: 'Community' },
            { num: '30+', label: 'Partners' },
            { num: '100+', label: 'Projects' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="code-font text-3xl font-bold text-white neon-text">{stat.num}</div>
              <div className="text-xs text-[#bdbdbd] uppercase tracking-widest mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
