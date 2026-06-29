import { useRef, useEffect, useState } from 'react';

const tiers = [
  {
    days: 30,
    label: 'Express',
    badge: 'Most Requested',
    highlight: true,
    desc: 'Ultra-fast turnaround for urgent replenishments and time-critical drops. Limited to select product categories.',
    icon: 'ri-flashlight-line',
  },
  {
    days: 45,
    label: 'Fast Track',
    badge: 'Customer Favourite',
    highlight: true,
    desc: 'Our most popular lead time — full production cycle with inline QC, washing, and export packing included.',
    icon: 'ri-rocket-line',
  },
  {
    days: 60,
    label: 'Standard',
    badge: '',
    highlight: false,
    desc: 'Ideal for seasonal collections. Allows additional embellishment, specialty washes, and complex construction.',
    icon: 'ri-time-line',
  },
  {
    days: 75,
    label: 'Extended',
    badge: '',
    highlight: false,
    desc: 'Suited for large volume orders with multiple colourways, garment dyeing, or complex embroidery programs.',
    icon: 'ri-calendar-check-line',
  },
  {
    days: 90,
    label: 'Full Program',
    badge: '',
    highlight: false,
    desc: 'End-to-end program management for full seasonal buys — includes sampling, bulk, and compliance documentation.',
    icon: 'ri-calendar-2-line',
  },
];

const LeadTimeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-28"
      style={{ background: 'var(--c-bg-deep)', borderTop: '1px solid var(--c-border-subtle)', borderBottom: '1px solid var(--c-border-subtle)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-14 fade-up ${visible ? 'visible' : ''}`}>
          <div className="gold-divider mb-5" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2
                className="leading-tight mb-3"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(26px, 3vw, 42px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--c-text)',
                }}
              >
                Lead Times That Work
                <br />
                <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--c-text-muted)' }}>
                  for Your Calendar
                </span>
              </h2>
            </div>
            <p
              className="text-[14px] leading-relaxed lg:text-right"
              style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: '360px' }}
            >
              Speed is our competitive edge. Our 30 and 45-day turnarounds are
              consistently praised by buyers who need agility without sacrificing quality.
            </p>
          </div>
        </div>

        {/* Timeline bar */}
        <div className={`relative mb-10 fade-up ${visible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
          <div
            className="h-1 w-full rounded-full"
            style={{ background: 'var(--c-border)' }}
          />
          <div
            className="absolute top-0 left-0 h-1 rounded-full transition-all duration-1000"
            style={{
              width: visible ? '100%' : '0%',
              background: 'linear-gradient(90deg, #C9A84C, #E8C96A, #C9A84C)',
            }}
          />
          {/* Tick marks */}
          <div className="flex justify-between mt-2">
            {tiers.map((t) => (
              <div key={t.days} className="flex flex-col items-center" style={{ width: '20%' }}>
                <div
                  className="w-2 h-2 rounded-full -mt-[18px]"
                  style={{ background: t.highlight ? '#C9A84C' : 'var(--c-border-strong, #999)' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiers.map((tier, i) => (
            <div
              key={tier.days}
              className={`fade-up relative rounded-xl p-5 flex flex-col gap-3 ${visible ? 'visible' : ''}`}
              style={{
                animationDelay: `${0.05 * i}s`,
                background: tier.highlight ? 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(201,168,76,0.04))' : 'var(--c-bg-card)',
                border: tier.highlight ? '1px solid rgba(201,168,76,0.35)' : '1px solid var(--c-border)',
              }}
            >
              {tier.badge && (
                <span
                  className="absolute -top-3 left-4 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase whitespace-nowrap"
                  style={{ background: '#C9A84C', color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {tier.badge}
                </span>
              )}

              {/* Day count */}
              <div className="flex items-end gap-1">
                <span
                  className="leading-none"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 'clamp(36px, 3.5vw, 48px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: tier.highlight ? '#C9A84C' : 'var(--c-text)',
                  }}
                >
                  {tier.days}
                </span>
                <span
                  className="mb-1 text-[13px] font-medium"
                  style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  days
                </span>
              </div>

              {/* Label + icon */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`${tier.icon} text-[14px]`} style={{ color: tier.highlight ? '#C9A84C' : 'var(--c-text-muted)' }} />
                </div>
                <span
                  className="text-[12px] font-semibold tracking-wider uppercase"
                  style={{ color: tier.highlight ? '#C9A84C' : 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {tier.label}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-[12px] leading-relaxed"
                style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-8 flex flex-wrap items-center gap-6 fade-up ${visible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-checkbox-circle-line text-[14px]" style={{ color: '#C9A84C' }} />
            </div>
            <span className="text-[12px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Lead times start from order confirmation &amp; fabric approval
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-checkbox-circle-line text-[14px]" style={{ color: '#C9A84C' }} />
            </div>
            <span className="text-[12px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Includes inline QC, finishing &amp; export documentation
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-checkbox-circle-line text-[14px]" style={{ color: '#C9A84C' }} />
            </div>
            <span className="text-[12px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Custom timelines available for large programs
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadTimeSection;
