'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const timelineEvents = [
  { date: 'Oct 01, 2026', title: 'Registrations Open', desc: 'Secure your spot in the ultimate hackathon arena.' },
  { date: 'Oct 15, 2026', title: 'Idea Submission', desc: 'Submit your groundbreaking ideas before the deadline.' },
  { date: 'Oct 20, 2026', title: 'Round 1', desc: 'The coding battle begins. 48 hours to build your MVP.' },
  { date: 'Oct 25, 2026', title: 'Final Round', desc: 'Top teams present their projects to the elite judges.' },
  { date: 'Oct 30, 2026', title: 'Winners Announcement', desc: 'Glory, prizes, and the champion title awarded.' }
];

export default function Timeline() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (lineRef.current && containerRef.current) {
      gsap.fromTo(lineRef.current, 
        { height: '0%' }, 
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <section id="timeline" style={{ padding: '100px 2rem', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="neon-text" style={{ fontSize: '3.5rem', color: 'var(--text-primary)' }}>BATTLE TIMELINE</h2>
          <div style={{ width: '100px', height: '4px', background: 'var(--neon-red)', margin: '1rem auto', boxShadow: '0 0 15px var(--neon-red)' }} />
        </div>

        <div ref={containerRef} style={{ position: 'relative', padding: '2rem 0' }}>
          {/* Background subtle line */}
          <div style={{ position: 'absolute', left: '50px', top: 0, bottom: 0, width: '2px', background: 'var(--glass-border)' }} />
          
          {/* Animated red line */}
          <div ref={lineRef} style={{ position: 'absolute', left: '50px', top: 0, width: '2px', background: 'var(--neon-red)', boxShadow: '0 0 10px var(--neon-red)' }} />

          {timelineEvents.map((event, index) => (
            <div key={index} style={{ display: 'flex', gap: '3rem', marginBottom: '4rem', position: 'relative' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--bg-primary)', border: '4px solid var(--neon-red)', position: 'absolute', left: '41px', top: '0', zIndex: 2, boxShadow: '0 0 15px var(--neon-red)' }} />
              
              <div style={{ paddingLeft: '80px', width: '100%' }}>
                <div className="code-font neon-text" style={{ fontSize: '1.2rem', color: 'var(--neon-red)', marginBottom: '0.5rem' }}>{event.date}</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{event.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
