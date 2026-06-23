'use client';

import { useEffect, useState } from 'react';

export default function SpotlightCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 0, 0, 0.08), transparent 40%)`,
      }}
    />
  );
}
