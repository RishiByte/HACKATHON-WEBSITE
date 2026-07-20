'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingDiscord() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isDismissed = false;
    try {
      isDismissed = localStorage.getItem('omnikon_discord_dismissed') === 'true';
    } catch (e) {}
    
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem('omnikon_discord_dismissed', 'true');
    } catch (e) {}
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[100] w-[calc(100vw-2rem)] sm:w-80 premium-card bg-[#0a0a0a]/90 backdrop-blur-2xl border border-[#ff1e1e]/30 p-4 sm:p-5 rounded-2xl shadow-[0_10px_40px_rgba(255,30,30,0.15)] group"
          style={{ transformPerspective: 1000 }}
        >
          {/* Subtle hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
          
          <button 
            onClick={handleDismiss}
            className="absolute top-3 right-3 text-[#bdbdbd] hover:text-white bg-[#151515] rounded-full p-1.5 border border-white/10 hover:border-[#ff1e1e]/50 hover:bg-[#ff1e1e]/20 hover:text-[#ff1e1e] transition-all z-10"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
          
          <div className="flex items-start gap-4 relative z-10">
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#ff1e1e]/20 to-[#ff1e1e]/5 border border-[#ff1e1e]/30 flex items-center justify-center text-[#ff1e1e] shadow-[0_0_15px_rgba(255,30,30,0.2)]"
            >
              <MessageSquare size={24} />
            </motion.div>
            <div className="flex-1 pr-6">
              <h4 className="font-bold text-white text-sm sm:text-base tracking-wide mb-1">Join our Discord</h4>
              <p className="text-xs text-[#bdbdbd] leading-relaxed mb-3">Don't miss important hackathon updates.</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/yWtjK2Tb8T" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleDismiss}
                className="inline-block bg-[#ff1e1e] hover:bg-white text-black font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-[0_0_15px_rgba(255,30,30,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              >
                Join Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
