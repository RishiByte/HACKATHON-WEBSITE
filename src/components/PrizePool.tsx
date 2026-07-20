'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';

export const prizes = [
  {
    title: 'Champion',
    place: '1st Place',
    icon: Trophy,
    numericAmount: 5000,
    amountStr: '₹5,000',
    accent: '#ffffff', // White for 1st place in red/black theme
    perks: ['Winner showcase', 'Certificate', 'Top mentor feedback'],
    featured: true,
    revealOrder: 3, // Last
  },
  {
    title: 'Runner Up',
    place: '2nd Place',
    icon: Medal,
    numericAmount: 3000,
    amountStr: '₹3,000',
    accent: '#bdbdbd', // Silver/Grey
    perks: ['Certificate', 'Project spotlight', 'Judge notes'],
    revealOrder: 2,
  },
  {
    title: 'Finalist',
    place: '3rd Place',
    icon: Award,
    numericAmount: 2000,
    amountStr: '₹2,000',
    accent: '#ff1e1e', // Red
    perks: ['Certificate', 'Community feature', 'Demo feedback'],
    revealOrder: 1, // First
  },
];

function PrizeCard({ prize, isInView, baseDelay }: { prize: typeof prizes[0]; isInView: boolean; baseDelay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1deg", "-1deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1deg", "1deg"]);

  const [count, setCount] = useState(0);

  // Reveal timing math
  const revealDelay = baseDelay + (prize.revealOrder * 0.25);
  const countDelay = revealDelay + 0.4;
  const sweepDelay = revealDelay + 1.4;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, prize.numericAmount, {
        duration: 1,
        delay: countDelay,
        ease: "easeOut",
        onUpdate: (val) => setCount(Math.round(val))
      });
      return controls.stop;
    } else {
      setCount(0);
    }
  }, [isInView, countDelay, prize.numericAmount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Format the counting number with commas
  const displayAmount = `₹${count.toLocaleString('en-IN')}`;

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: revealDelay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover="hover"
      variants={{
        hover: { y: -8 }
      }}
      className={`premium-card relative p-8 group overflow-hidden transition-all duration-300 transform-gpu ${prize.featured ? 'lg:-mt-10 lg:min-h-[460px] border-[#ff1e1e]/40' : 'lg:min-h-[400px]'}`}
    >
      {/* 3D mouse tracking glow */}
      <motion.div 
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([xPos, yPos]) => `radial-gradient(400px circle at ${(xPos as number) * 100 + 50}% ${(yPos as number) * 100 + 50}%, ${prize.accent}15, transparent 50%)`
          )
        }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen" 
      />

      {/* Champion Highlight Glow (Triggers after counting) */}
      {prize.featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: [0, 1, 0], scale: [0.8, 1.2, 1] } : {}}
          transition={{ duration: 1.5, delay: sweepDelay, times: [0, 0.3, 1], ease: "easeInOut" }}
          className="absolute inset-0 bg-[#ff1e1e]/20 blur-3xl rounded-full z-0 pointer-events-none"
        />
      )}
      
      {/* Hover border and deep shadow */}
      <div className={`absolute inset-0 rounded-2xl border-2 pointer-events-none transition-all duration-300 ${prize.featured ? 'border-transparent group-hover:border-[#ff1e1e]/80 group-hover:shadow-[0_20px_50px_rgba(255,30,30,0.2)]' : 'border-transparent group-hover:border-white/20 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]'}`} />
      
      <div
        className="absolute inset-x-0 top-0 h-44 opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${prize.accent}, transparent 70%)` }}
      />
      
      <div className="relative z-10 flex h-full flex-col items-center text-center pointer-events-none">
        
        {/* Icon & Place */}
        <div className="mb-6 flex flex-col items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: revealDelay + 0.1, type: "spring" }}
          >
            <motion.div 
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_15px_35px_rgba(0,0,0,0.5)] group-hover:border-white/30 transition-all duration-300" 
              style={{ color: prize.accent }}
              variants={{ hover: { scale: 1.1 } }}
              animate={
                prize.featured && isInView 
                  ? { y: [0, -10, 0] } 
                  : {}
              }
              transition={
                prize.featured 
                  ? { duration: 0.6, delay: sweepDelay, ease: "easeInOut" }
                  : { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
              }
            >
              <prize.icon size={36} />
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: revealDelay + 0.15 }}
            className="code-font text-xs uppercase tracking-[0.2em] text-[#bdbdbd]"
          >
            {prize.place}
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: revealDelay + 0.2 }}
          className="text-3xl font-bold text-white mb-2 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          {prize.title}
        </motion.h3>
        
        {/* Prize Amount with Light Sweep */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: revealDelay + 0.3 }}
          className="relative overflow-hidden mt-2"
        >
          <div 
            className="code-font text-5xl font-black neon-text transition-colors duration-300 group-hover:brightness-125" 
            style={{ color: prize.accent }}
          >
            {displayAmount}
          </div>
          {/* Light Sweep */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={isInView ? { left: "100%" } : { left: "-100%" }}
            transition={{ duration: 0.8, delay: sweepDelay, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] mix-blend-overlay opacity-60 z-20 pointer-events-none"
          />
        </motion.div>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/50 transition-colors duration-300" />

        {/* Perks */}
        <ul className="mt-auto grid gap-4 w-full text-left">
          {prize.perks.map((perk, i) => (
            <motion.li 
              key={perk} 
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: sweepDelay + (i * 0.15) }}
              className="flex items-center gap-3 text-[#bdbdbd] group-hover:text-white transition-colors duration-300 font-medium"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: prize.accent, boxShadow: `0 0 10px ${prize.accent}` }} />
              {perk}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function PrizePool() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const headingText = "REWARDS FOR CHAMPIONS";
  const headingLetters = headingText.split("");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Base delay before cards start animating
  const BASE_DELAY = 1.0; 

  return (
    <section ref={sectionRef} id="prizes" className="section-shell overflow-hidden relative">
      
      {/* Background Polish */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />
      
      {/* Gentle breathing light behind cards */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-[#ff1e1e]/5 blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" 
      />

      {/* Floating particles */}
      {mounted && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, (Math.random() - 0.5) * 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="section-inner relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "drop-shadow(0 0 0 rgba(255,30,30,0))" }}
            animate={isInView ? { opacity: 1, scale: 1, filter: "drop-shadow(0 0 10px rgba(255,30,30,0.5))" } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow justify-center"
          >
            Prize pool
          </motion.div>
          
          <h2 className="section-title mt-2">
            {headingLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.1, delay: 0.2 + (index * (0.6 / headingLetters.length)) }}
                className={index >= 12 ? "text-[#ff1e1e]" : "text-white"} // "REWARDS FOR " is 12 chars
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="section-subtitle mx-auto mt-6"
          >
            Cash awards, recognition, and useful feedback for the strongest products across the Omnikon build arena.
          </motion.p>
        </div>

        {/* Prize Podium */}
        <div className="grid items-end gap-6 lg:grid-cols-3 perspective-[2000px]">
          {prizes.map((prize) => (
            <PrizeCard 
              key={prize.title} 
              prize={prize} 
              isInView={isInView} 
              baseDelay={BASE_DELAY}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
