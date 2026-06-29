import { useRef, useEffect, useState } from 'react';

const MissionVision = () => {
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
      className="w-full py-24 lg:py-32"
      style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ border: '1px solid var(--c-border)' }}>
          {/* Mission */}
          <div
            className={`p-12 lg:p-16 fade-up ${visible ? 'visible' : ''}`}
            style={{ background: 'var(--c-bg)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: 'var(--c-bg-alt)', border: '1px solid var(--c-border)' }}
              >
                <i className="ri-focus-3-line text-lg" style={{ color: 'var(--c-text)' }} />
              </div>
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-semibold"
                style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Our Mission
              </span>
            </div>
            <h2
              className="mb-7 leading-tight"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(24px, 2.5vw, 38px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--c-text)',
              }}
            >
              Enabling Responsible Sourcing from India
            </h2>
            <p
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.9,
                color: 'var(--c-text-muted)',
              }}
            >
              We exist to enable global fashion brands to source responsibly from India —
              combining{' '}
              <strong style={{ color: 'var(--c-text)', fontWeight: 700 }}>
                45 years of vertically integrated manufacturing
              </strong>{' '}
              with the transparency, certifications, and ethical standards that modern
              sourcing demands. Our goal is not just to deliver garments, but to become a
              trusted long-term extension of our clients&apos; supply chains.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`p-12 lg:p-16 fade-up ${visible ? 'visible' : ''}`}
            style={{
              background: '#111111',
              transitionDelay: '150ms',
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <i className="ri-eye-line text-lg" style={{ color: 'rgba(255,255,255,0.85)' }} />
              </div>
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-semibold"
                style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Our Vision
              </span>
            </div>
            <h2
              className="mb-7 leading-tight"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(24px, 2.5vw, 38px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              South Asia&apos;s Most Trusted Manufacturer
            </h2>
            <p
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.60)',
              }}
            >
              To be the most trusted vertically integrated apparel manufacturer from South Asia —
              known for{' '}
              <strong style={{ color: 'rgba(255,255,255,0.90)', fontWeight: 700 }}>
                uncompromising quality, sustainable operations,
              </strong>{' '}
              and partnerships that last decades.
            </p>

            {/* Visual accent */}
            <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
              <div className="flex items-center gap-3">
                <span
                  className="text-[11px] tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Est. 1980 · Tiruppur, India
                </span>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.10)' }} />
                <i className="ri-map-pin-line text-sm" style={{ color: 'rgba(255,255,255,0.3)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
