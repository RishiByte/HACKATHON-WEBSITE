'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  className = ''
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [hasStarted, setHasStarted] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 15,
    mass: 1,
    restDelta: 0.001
  });

  const display = useTransform(spring, (current) => {
    return Math.floor(current).toString();
  });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      spring.set(value);
    }
  }, [isInView, value, spring, hasStarted]);

  return (
    <span ref={ref} className={`inline-flex items-center ${className}`}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
