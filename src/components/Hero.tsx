'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AntigravityBackground from './AntigravityBackground';
import GlitchText from './animations/GlitchText';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center mt-12 z-20 relative w-full max-w-3xl mx-auto">
      <div className="text-neon-red font-mono text-sm tracking-widest mb-4 uppercase">
        Registration Closes In
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center group bg-black/50 border border-neon-red/30 px-4 py-3 sm:px-6 sm:py-4 rounded-sm hover:border-neon-red hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all flex-1 min-w-[80px] max-w-[120px]">
            <div className="font-mono text-neon-red text-3xl sm:text-5xl font-bold">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[3px] text-text-secondary mt-2 font-mono">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Particle Background */}
        <AntigravityBackground />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Circuit Traces (Simulated with radial gradients and repeating lines) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.8)_0%,transparent_60%)]" />
        
        {/* Animated Scanlines Effect */}
        <motion.div 
          animate={{ backgroundPosition: ['0px 0px', '0px 100px'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px]" 
        />
        
        {/* Red Beam Spotlight from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[100vh] bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(255,0,0,0.15)_160deg,rgba(255,0,0,0.3)_180deg,rgba(255,0,0,0.15)_200deg,transparent_360deg)] opacity-70 blur-xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-7xl px-4">
        
        {/* The Hero Logo with Morphing Wrapper */}
        <div id="reactor-logo" className="relative w-48 h-48 sm:w-64 sm:h-64 mb-10 z-30 perspective-1000">
          <motion.div
            className="w-full h-full"
            animate={{ 
              y: [-10, 10, -10],
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {/* Soft Neon Pulse behind logo */}
            <motion.div 
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[-20%] rounded-full bg-neon-red/30 blur-[30px] z-0 pointer-events-none"
            />
            
            {/* The Logo itself */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neon-red/60 shadow-[0_0_40px_rgba(255,0,0,0.8)] z-10 bg-black">
              <img 
                src="/LogoOmnikon.jpeg" 
                alt="Omnikon Logo" 
                className="w-full h-full object-cover opacity-90"
              />
              {/* Inner Scanline on Logo */}
              <motion.div 
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 h-1 bg-white/50 shadow-[0_0_10px_#fff] mix-blend-overlay"
              />
            </div>
          </motion.div>
        </div>

        {/* Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center w-full z-20"
        >
          <div className="inline-block relative">
            <GlitchText 
              text="OMNIKON NATIONAL HACKATHON 2026" 
              as="h1" 
              className="text-white text-shadow-[0_0_15px_rgba(255,0,0,0.5)] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter uppercase mb-4 max-w-5xl leading-[1.1]" 
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-2"
          >
            <div className="w-8 sm:w-12 h-[1px] bg-neon-red/50" />
            <p className="text-lg sm:text-xl text-text-secondary tracking-[6px] sm:tracking-[10px] uppercase font-mono text-shadow-[0_0_8px_rgba(255,0,0,0.4)]">
              Build. Innovate. Impact.
            </p>
            <div className="w-8 sm:w-12 h-[1px] bg-neon-red/50" />
          </motion.div>

          {/* Static Stat Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8"
          >
            {[
              { label: 'DURATION', value: '48H' },
              { label: 'PRIZE POOL', value: '₹10K' },
              { label: 'HACKERS', value: '500+' }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center bg-black/40 border border-white/10 px-6 py-2 rounded-sm backdrop-blur-sm">
                <span className="text-white font-mono font-bold text-2xl">{stat.value}</span>
                <span className="text-text-secondary font-mono text-[10px] uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap gap-6 mt-12 justify-center z-20"
        >
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#register" className="tier-1-glow relative group px-8 py-4 bg-black overflow-hidden transition-all">
            <span className="relative z-10 font-mono text-neon-red font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-300">
              Initialize Registration
            </span>
            <div className="absolute inset-0 bg-neon-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          </motion.a>
          
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/rulebook" className="tier-3-glass relative group px-8 py-4 bg-transparent overflow-hidden transition-all">
            <span className="relative z-10 font-mono text-text-secondary group-hover:text-white uppercase tracking-widest transition-colors duration-300">
              Access Rulebook
            </span>
            <div className="absolute inset-0 bg-white/10 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />
          </motion.a>
        </motion.div>

        <Countdown />
      </div>
    </section>
  );
}
