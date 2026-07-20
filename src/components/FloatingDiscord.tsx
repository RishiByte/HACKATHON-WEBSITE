'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingDiscord() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed the reminder in this session or entirely
    // We'll use a simple localStorage check
    const isDismissed = localStorage.getItem('omnikon_discord_dismissed');
    
    // Slight delay before showing to not overwhelm immediately
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('omnikon_discord_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 w-80 premium-card bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#ff1e1e]/30 p-5 rounded-2xl shadow-[0_10px_40px_rgba(255,30,30,0.15)] group"
        >
          {/* Subtle hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
          
          <button 
            onClick={handleDismiss}
            className="absolute top-3 right-3 text-[#bdbdbd] hover:text-white bg-[#151515] rounded-full p-1 border border-white/10 hover:border-white/30 hover:bg-[#ff1e1e]/20 hover:text-[#ff1e1e] transition-all z-10"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 flex items-center justify-center text-[#ff1e1e]">
              <MessageSquare size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-white text-sm tracking-wide mb-1">💬 Join our Discord</h4>
              <p className="text-xs text-[#bdbdbd] leading-relaxed mb-3">All event updates happen here.</p>
              <a 
                href="https://discord.gg/yWtjK2Tb8T" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  // Optionally dismiss on click since they joined
                  handleDismiss();
                }}
                className="inline-block bg-[#ff1e1e] hover:bg-white text-black font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-[0_0_15px_rgba(255,30,30,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              >
                Join Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
