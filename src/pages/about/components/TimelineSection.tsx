import { useRef, useEffect, useState } from 'react';

const milestones = [
  { year: '1980', title: 'Foundation', desc: 'Mr. Loganathan Senniappan founded Seyon Fashions as a dyeing processing unit in Tiruppur.' },
  { year: '1986', title: 'Vertical Integration', desc: 'Knitting capacity with 12 circular machines and 60 workers.' },
  { year: '1991', title: 'First Export', desc: 'Europe and Japan.' },
  { year: '2000', title: 'Eco Commitment', desc: 'With Zero Liquid Discharge.' },
  { year: '2011', title: 'Vertical Integration', desc: 'Starting printing units.' },
  { year: '2023', title: 'Design Studio', desc: 'Design studio in New York.' },
];

const TimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 lg:py-32"
      style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <div className="gold-divider mb-5" />
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--c-text)',
            }}
          >
            45 years of Progress
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute left-[180px] top-0 bottom-0 w-px"
            style={{ background: 'var(--c-border-subtle)' }}
          />

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex flex-col lg:flex-row gap-6 lg:gap-12 items-start py-8 fade-up ${visible ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  borderBottom: i < milestones.length - 1 ? '1px solid var(--c-border-subtle)' : 'none',
                }}
              >
                <div className="lg:w-[180px] flex-shrink-0 flex lg:justify-end lg:pr-10 items-center lg:items-start">
                  <span
                    className="text-3xl font-bold tracking-tight"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      color: i === milestones.length - 1 ? '#111111' : 'var(--c-text-faint)',
                    }}
                  >
                    {m.year}
                  </span>
                </div>

                <div className="hidden lg:flex items-center justify-center w-3 h-3 flex-shrink-0 mt-2.5 relative">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: i === milestones.length - 1 ? '#111111' : 'rgba(0,0,0,0.20)' }}
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '18px', color: 'var(--c-text)' }}
                  >
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)', maxWidth: '480px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
