import { useRef, useEffect, useState } from 'react';

const regions = [
  {
    name: 'North America',
    buyers: '18+ buyers',
    countries: ['USA', 'Canada', 'Mexico'],
  },
  {
    name: 'Europe',
    buyers: '22+ buyers',
    countries: ['UK', 'Germany', 'France', 'Netherlands', 'Italy', 'Spain', 'Sweden'],
  },
  {
    name: 'Australia & NZ',
    buyers: '8+ buyers',
    countries: ['Sydney', 'Melbourne', 'Auckland', 'Brisbane'],
  },
  {
    name: 'Middle East',
    buyers: '6+ buyers',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'],
  },
  {
    name: 'Asia Pacific',
    buyers: '9+ buyers',
    countries: ['Japan', 'South Korea', 'Singapore', 'Hong Kong'],
  },
  {
    name: 'Africa',
    buyers: '4+ buyers',
    countries: ['Nigeria', 'Togo', 'Ghana', 'South Africa'],
  },
];

const WorldMap = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
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
      style={{ background: 'var(--c-bg-deep)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 fade-up ${visible ? 'visible' : ''}`}>
          <div>
            <div className="gold-divider mb-5" />
            <h2
              className="leading-tight"
              style={{
                color: 'var(--c-text)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Global Reach
            </h2>
            <p
              className="mt-3 max-w-lg text-sm leading-relaxed"
              style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Trusted by sourcing teams and fashion brands across 27+ countries and six continents.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-right">
              <span className="block text-3xl font-bold" style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                27+
              </span>
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Countries
              </span>
            </div>
            <div className="text-right">
              <span className="block text-3xl font-bold" style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                6
              </span>
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Continents
              </span>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div
          className={`relative rounded-2xl overflow-hidden mb-10 fade-up ${visible ? 'visible' : ''}`}
          style={{ border: '1px solid var(--c-border)', height: '320px', transitionDelay: '100ms' }}
        >
          <iframe
            title="Tiruppur, India — Seyon Fashions"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.9!2d77.0879!3d11.1085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b07f3f43f1%3A0x1de04b7fb06b0d58!2sTiruppur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Location label */}
          <div
            className="absolute top-4 left-4 rounded-xl px-4 py-3"
            style={{
              background: 'rgba(255,255,255,0.94)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <i className="ri-map-pin-2-fill text-sm" style={{ color: '#111111' }} />
              <span
                className="text-xs font-bold tracking-wider uppercase"
                style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Tiruppur, Tamil Nadu
              </span>
            </div>
            <p className="text-[11px]" style={{ color: 'rgba(17,17,17,0.55)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Manufacturing Origin · Est. 1980
            </p>
          </div>
        </div>

        {/* Regions grid — table style */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-px"
          style={{ background: 'var(--c-border)' }}
        >
          {regions.map((region, i) => (
            <div
              key={region.name}
              className={`p-8 fade-up ${visible ? 'visible' : ''}`}
              style={{
                background: 'var(--c-bg-deep)',
                transitionDelay: `${(i + 2) * 80}ms`,
              }}
            >
              {/* Region name + buyer badge */}
              <div className="flex items-start justify-between mb-6">
                <h3
                  className="font-bold leading-tight"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '15px',
                    color: 'var(--c-text)',
                  }}
                >
                  {region.name}
                </h3>
                <span
                  className="text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap ml-2"
                  style={{
                    background: 'rgba(0,0,0,0.05)',
                    color: 'var(--c-text-muted)',
                    border: '1px solid var(--c-border)',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  }}
                >
                  {region.buyers}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: 'var(--c-border)' }} />

              {/* Countries bullet list */}
              <div className="flex flex-col gap-2">
                {region.countries.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: 'var(--c-text-faint)' }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: 'var(--c-text-muted)',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
