import { useRef, useEffect, useState } from 'react';

const tiers = [
  {
    tier: 'Tier 1',
    label: 'Seyon Fashions — Owned Manufacturing',
    location: 'Tiruppur, India',
    icon: 'ri-building-2-line',
    detail: 'All core production stages in-house: knitting, dyeing, cutting, stitching, embellishments, washing, finishing and QC.',
    owned: true,
  },
  {
    tier: 'Tier 2',
    label: 'Contracted Processing',
    location: 'Tiruppur, India',
    icon: 'ri-links-line',
    detail: 'Specialist processes including digital printing, embroidery overflow, and additional washing capacity from vetted, audited local partners.',
    owned: false,
  },
  {
    tier: 'Tier 3',
    label: 'Fabric Production & Yarn Spinning',
    location: 'Certified Mills, Tamil Nadu',
    icon: 'ri-loop-left-line',
    detail: 'GOTS and OCS certified spinning and fabric mills with full chain-of-custody documentation. Traceable from fibre to grey fabric.',
    owned: false,
  },
  {
    tier: 'Tier 4',
    label: 'Raw Materials',
    location: 'GOTS/OCS Certified Farms',
    icon: 'ri-plant-line',
    detail: 'GOTS and OCS certified organic cotton farms. Conventional cotton sourced from mills with REACH-compliant chemical management.',
    owned: false,
  },
];

const SupplyChainSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.08 }
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
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 fade-up ${visible ? 'visible' : ''}`}>
          <div>
            <div className="gold-divider mb-5" />
            <h2
              className="mb-3 leading-tight"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--c-text)',
              }}
            >
              Our Supply Chain
            </h2>
            <p
              className="text-base max-w-lg"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text-muted)', lineHeight: 1.75 }}
            >
              We provide full chain-of-custody documentation for certified orders.
              Traceability reports available on request.
            </p>
          </div>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
            style={{
              background: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.10)',
              color: '#111111',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >
            <i className="ri-shield-check-line" />
            Full Traceability Available
          </span>
        </div>

        {/* Tier list */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="hidden lg:block absolute left-[28px] top-10 bottom-10 w-px"
            style={{ background: 'var(--c-border-subtle)' }}
          />

          <div className="flex flex-col gap-5">
            {tiers.map((tier, i) => (
              <div
                key={tier.tier}
                className={`flex flex-col lg:flex-row gap-5 lg:gap-10 items-start fade-up ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Tier indicator */}
                <div className="flex items-center gap-4 flex-shrink-0 lg:w-[200px]">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0 relative z-10"
                    style={{
                      background: tier.owned ? '#111111' : 'var(--c-bg-alt)',
                      border: `1px solid ${tier.owned ? '#111111' : 'var(--c-border)'}`,
                    }}
                  >
                    <i
                      className={`${tier.icon} text-xl`}
                      style={{ color: tier.owned ? '#FFFFFF' : 'var(--c-text-muted)' }}
                    />
                  </div>
                  <span
                    className="text-[11px] tracking-[0.25em] uppercase font-bold"
                    style={{ color: tier.owned ? '#111111' : 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {tier.tier}
                  </span>
                </div>

                {/* Content card */}
                <div
                  className="flex-1 rounded-2xl p-6 lg:p-8"
                  style={{
                    background: tier.owned ? 'rgba(0,0,0,0.03)' : 'var(--c-bg-alt)',
                    border: `1px solid ${tier.owned ? 'rgba(0,0,0,0.12)' : 'var(--c-border-subtle)'}`,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3
                      className="font-bold"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', color: 'var(--c-text)' }}
                    >
                      {tier.label}
                    </h3>
                    <span
                      className="flex items-center gap-1.5 text-[11px] whitespace-nowrap"
                      style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      <i className="ri-map-pin-line text-xs" />
                      {tier.location}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {tier.detail}
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

export default SupplyChainSection;
