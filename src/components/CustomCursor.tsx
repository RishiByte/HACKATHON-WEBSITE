'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Use MotionValues for high-performance animation without React state re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // Spotlight effect follows exactly without spring for immediacy
  const spotlightX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const spotlightY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    // Initial position center of screen
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="hidden md:block">
      {/* Ambient Spotlight Effect */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9990]"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(255, 30, 30, 0.05), transparent 40%)`
          )
        }}
      />
      
      {/* Custom Pointer (Crosshair Reticle) */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center"
        style={{
          x: useTransform(cursorX, v => v - 12),
          y: useTransform(cursorY, v => v - 12),
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          rotate: isHovering ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute w-[2px] h-full bg-[#ff1e1e] shadow-[0_0_8px_#ff1e1e]" />
        <div className="absolute w-full h-[2px] bg-[#ff1e1e] shadow-[0_0_8px_#ff1e1e]" />
        
        {/* Glow circle expands on hover */}
        <motion.div 
          className="absolute w-full h-full border border-[#ff1e1e]/80 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.5 
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Soft particle trail simulation via static glow */}
        <div className="absolute w-12 h-12 bg-[#ff1e1e]/20 rounded-full blur-md -z-10" />
      </motion.div>
    </div>
  );
}
