import { useRef, useEffect, useState } from 'react';

const tests = [
  {
    icon: 'ri-weight-line',
    accent: '#C8A96E',
    label: 'GSM & Weight Testing',
    desc: 'Every fabric lot measured against buyer specification tolerances using precision weighing equipment.',
  },
  {
    icon: 'ri-ruler-2-line',
    accent: '#9ECFB0',
    label: 'Shrinkage & Dimensional Stability',
    desc: 'Pre and post-wash dimensional checks on all fabrics and finished garments to ensure sizing consistency.',
  },
  {
    icon: 'ri-contrast-2-line',
    accent: '#E8A87C',
    label: 'Colour Fastness',
    desc: 'Wash, rub, and light fastness tested to ISO and AATCC standards across all dye lots.',
  },
  {
    icon: 'ri-link-unlink-m',
    accent: '#A8C5E8',
    label: 'Tensile & Seam Strength',
    desc: 'Breaking strength and seam slippage tests conducted on all critical construction points.',
  },
  {
    icon: 'ri-microscope-line',
    accent: '#C8A9E8',
    label: 'REACH / Oeko-Tex Chemical Screening',
    desc: 'Chemical residue screening ensuring compliance with global restricted substance lists.',
  },
  {
    icon: 'ri-shield-check-line',
    accent: '#A8E8C5',
    label: 'Pilling Resistance',
    desc: 'Surface pilling evaluated against Martindale and ICI pill box standards for long-term durability.',
  },
];

const LabSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

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
      className="w-full py-24 lg:py-32 relative overflow-hidden"
      style={{ background: '#0E0E0E' }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(200,169,110,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Top header — full width */}
        <div className={`mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: 'rgba(200,169,110,0.5)' }} />
            <span
              className="text-[11px] tracking-[0.4em] uppercase font-semibold"
              style={{ color: 'rgba(200,169,110,0.8)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              In-House Testing
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="leading-tight"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              Testing &amp; Lab
            </h2>
            <p
              className="lg:max-w-md"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '15px',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.52)',
              }}
            >
              Every production lot is tested in our certified internal lab before dispatch.
              No guesswork — only verified, documented results shipped with every order.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          {tests.map((test, i) => (
            <div
              key={test.label}
              className="relative p-7 rounded-2xl flex flex-col gap-5 cursor-default transition-all duration-300"
              style={{
                background: hovered === i ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                border: hovered === i
                  ? `1px solid ${test.accent}33`
                  : '1px solid rgba(255,255,255,0.07)',
                transform: hovered === i ? 'translateY(-2px)' : 'none',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon container */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl"
                style={{
                  background: hovered === i ? `${test.accent}18` : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${hovered === i ? `${test.accent}40` : 'rgba(255,255,255,0.09)'}`,
                  transition: 'all 0.3s ease',
                }}
              >
                <i
                  className={`${test.icon} text-xl`}
                  style={{
                    color: hovered === i ? test.accent : 'rgba(255,255,255,0.55)',
                    transition: 'color 0.3s ease',
                  }}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <span
                  className="text-sm font-bold leading-snug"
                  style={{ color: '#FFFFFF', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {test.label}
                </span>
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.42)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {test.desc}
                </span>
              </div>

              {/* Subtle index number */}
              <span
                className="absolute top-5 right-6 text-[11px] font-mono"
                style={{ color: 'rgba(255,255,255,0.12)' }}
              >
                0{i + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div
          className={`mt-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x rounded-2xl overflow-hidden fade-up ${visible ? 'visible' : ''}`}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            divideColor: 'rgba(255,255,255,0.07)',
            transitionDelay: '200ms',
          }}
        >
          {[
            { value: '100%', label: 'Of Orders Lab-Tested Before Dispatch' },
            { value: 'AATCC', label: 'International Testing Standards' },
            { value: '6 Tests', label: 'Performed Per Production Lot' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 px-8 py-7">
              <span
                className="text-3xl font-extrabold leading-none"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#FFFFFF', letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </span>
              <span
                className="text-[11px] tracking-widest uppercase mt-1"
                style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LabSection;
