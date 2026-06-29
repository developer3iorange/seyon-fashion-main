import { useRef, useEffect, useState } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, delay }: StatProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center py-8 px-4">
      <div
        className="leading-none mb-3 counter-number"
        style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}
      >
        {count}{suffix}
      </div>
      <div
        className="text-[13px] font-medium tracking-[0.2em] uppercase"
        style={{ color: 'var(--c-text-faint)', fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {label}
      </div>
    </div>
  );
};

const stats = [
  { value: 45, suffix: '+', label: 'Years of Excellence' },
  { value: 27, suffix: '+', label: 'Export Countries' },
  { value: 600, suffix: '+', label: 'Skilled Workers' },
  { value: 5, suffix: 'M+', label: 'Garments Per Year' },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 lg:py-32 sf-section"
      style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Our Mission paragraph */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20 pb-20 fade-up ${visible ? 'visible' : ''}`}
          style={{ borderBottom: '1px solid var(--c-border-subtle)' }}
        >
          <div>
            <div className="gold-divider mb-6" />
            <p
              className="text-[11px] tracking-[0.35em] uppercase font-medium mb-4"
              style={{ color: 'var(--c-text-faint)', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Who We Are
            </p>
            <h2
              className="leading-tight mb-0"
              style={{
                color: 'var(--c-text)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              Our Mission
            </h2>
          </div>
          <div className="flex items-center">
            <p
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: 1.85,
                color: 'var(--c-text-muted)',
              }}
            >
              Seyon Fashions exists to give global fashion brands a manufacturing partner
              they can trust completely — one that combines{' '}
              <strong style={{ color: 'var(--c-text)', fontWeight: 700 }}>45 years of craft</strong>{' '}
              with the transparency, certifications, and ethical standards that today&apos;s sourcing
              teams demand. We don&apos;t just make garments.{' '}
              <strong style={{ color: 'var(--c-text)', fontWeight: 700 }}>We build long-term partnerships.</strong>
            </p>
          </div>
        </div>

        {/* Section header */}
        <div className={`text-center mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <div className="gold-divider mx-auto mb-6" />
          <p
            className="text-[12px] tracking-[0.3em] uppercase"
            style={{ color: 'var(--c-text-faint)', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            A Legacy in Numbers
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative"
              style={{
                borderRight: i < 3 ? '1px solid var(--c-border-subtle)' : 'none',
              }}
            >
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
