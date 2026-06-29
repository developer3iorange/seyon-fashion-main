import { useRef, useEffect, useState } from 'react';

const workforceStats = [
  { value: '600+', label: 'Skilled Workers', icon: 'ri-user-3-line' },
  { value: '45+', label: 'Years of Collective Expertise', icon: 'ri-time-line' },
  { value: 'End-to-End', label: 'Supply Chain Control', icon: 'ri-links-line' },
];

const WorkforceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full py-24 lg:py-32 overflow-hidden"
      style={{ background: '#111111', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text block */}
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <div className="mb-6 w-8 h-px" style={{ background: 'rgba(255,255,255,0.35)' }} />
            <span
              className="text-[11px] tracking-[0.4em] uppercase font-semibold block mb-5"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Our People
            </span>
            <h2
              className="mb-8 leading-tight"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(30px, 3.5vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              The Heart of Seyon
            </h2>
            <p
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '16px',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.58)',
              }}
            >
              Every garment that leaves our facility is built by{' '}
              <strong style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 700 }}>
                skilled hands, trained to global standards.
              </strong>{' '}
              Our workforce is our greatest asset and the foundation of every
              partnership we build. We invest continuously in their skills, safety,
              and well-being — because excellence starts with people.
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-10">
              {['Fair Wage Certified', 'SEDEX Member', 'Safe Workplace'].map((b) => (
                <span
                  key={b}
                  className="text-[11px] tracking-wider uppercase font-medium px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.55)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — large stat numbers */}
          <div className={`flex flex-col gap-0 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            {workforceStats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 py-8"
                style={{
                  borderBottom: i < workforceStats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <i className={`${stat.icon} text-lg`} style={{ color: 'rgba(255,255,255,0.55)' }} />
                </div>
                <div>
                  <span
                    className="block leading-none mb-1"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: 'clamp(40px, 5vw, 64px)',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: '#FFFFFF',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[12px] tracking-[0.2em] uppercase font-medium"
                    style={{ color: 'rgba(255,255,255,0.38)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkforceSection;
