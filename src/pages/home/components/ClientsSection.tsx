import { useRef, useEffect, useState } from 'react';

// Row 1 brands
const row1 = [
  { name: 'Bloomingdales', font: "'Playfair Display', serif", weight: 700, size: '1.05rem', spacing: '0.04em' },
  { name: 'COORS', font: "'Oswald', sans-serif", weight: 700, size: '1.1rem', spacing: '0.18em' },
  { name: 'Bar Method', font: "'Cormorant Garamond', serif", weight: 600, size: '1.05rem', spacing: '0.08em' },
  { name: 'ICR', font: "'Bebas Neue', sans-serif", weight: 400, size: '1.25rem', spacing: '0.22em' },
  { name: 'Fitness Connection', font: "'Raleway', sans-serif", weight: 800, size: '0.88rem', spacing: '0.05em' },
  { name: 'Blink Fitness', font: "'Nunito Sans', sans-serif", weight: 900, size: '1rem', spacing: '0.03em' },
  { name: '9Round', font: "'Bebas Neue', sans-serif", weight: 400, size: '1.2rem', spacing: '0.15em' },
  { name: 'Stepstone', font: "'Plus Jakarta Sans', sans-serif", weight: 700, size: '1rem', spacing: '0.06em' },
  { name: 'Summer Fridays', font: "'Cormorant Garamond', serif", weight: 600, size: '1.05rem', spacing: '0.1em' },
  { name: 'Tonal', font: "'Montserrat', sans-serif", weight: 800, size: '1rem', spacing: '0.2em' },
  { name: 'Mercedes-Benz', font: "'Cormorant Garamond', serif", weight: 600, size: '1rem', spacing: '0.06em' },
  { name: 'The Sculpt Society', font: "'Raleway', sans-serif", weight: 700, size: '0.92rem', spacing: '0.06em' },
  { name: 'HalfDays', font: "'Montserrat', sans-serif", weight: 800, size: '1rem', spacing: '0.1em' },
];

// Row 2 brands
const row2 = [
  { name: 'Lifetime', font: "'Bebas Neue', sans-serif", weight: 400, size: '1.2rem', spacing: '0.2em' },
  { name: 'Insomnia Cookies', font: "'Nunito Sans', sans-serif", weight: 900, size: '0.9rem', spacing: '0.04em' },
  { name: 'Burn Boot Camp', font: "'Oswald', sans-serif", weight: 700, size: '0.95rem', spacing: '0.12em' },
  { name: 'Kingsway by Rockbell', font: "'Cormorant Garamond', serif", weight: 600, size: '0.92rem', spacing: '0.06em' },
  { name: 'Ole Henriksen', font: "'Cormorant Garamond', serif", weight: 600, size: '1rem', spacing: '0.08em' },
  { name: 'Arthur Galan', font: "'Playfair Display', serif", weight: 700, size: '1rem', spacing: '0.04em' },
  { name: 'Dos Tortugas', font: "'Raleway', sans-serif", weight: 700, size: '1rem', spacing: '0.06em' },
  { name: 'RMS', font: "'Bebas Neue', sans-serif", weight: 400, size: '1.25rem', spacing: '0.22em' },
  { name: 'PQL', font: "'Oswald', sans-serif", weight: 700, size: '1.1rem', spacing: '0.18em' },
];

interface Brand {
  name: string;
  font: string;
  weight: number;
  size: string;
  spacing: string;
}

interface MarqueeRowProps {
  brands: Brand[];
  reverse?: boolean;
  speed?: number;
}

const MarqueeRow = ({ brands, reverse = false, speed = 40 }: MarqueeRowProps) => {
  const [paused, setPaused] = useState(false);
  // Triplicate for seamless loop
  const items = [...brands, ...brands, ...brands];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 lg:w-40"
        style={{ background: 'linear-gradient(to right, #f9f9f7 0%, transparent 100%)' }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 lg:w-40"
        style={{ background: 'linear-gradient(to left, #f9f9f7 0%, transparent 100%)' }}
      />

      <div
        className="flex items-center gap-0"
        style={{
          animation: `marquee-${reverse ? 'reverse' : 'forward'} ${speed}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          width: 'max-content',
        }}
      >
        {items.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex items-center shrink-0"
            style={{ padding: '0 2.5rem' }}
          >
            <span
              className="transition-all duration-300 select-none"
              style={{
                fontFamily: brand.font,
                fontWeight: brand.weight,
                fontSize: brand.size,
                letterSpacing: brand.spacing,
                color: 'rgba(17,17,17,0.72)',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                cursor: 'default',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = '#111111'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = 'rgba(17,17,17,0.72)'; }}
            >
              {brand.name}
            </span>
            {/* Separator dot */}
            <span
              className="ml-[2.5rem]"
              style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(17,17,17,0.18)',
                verticalAlign: 'middle',
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
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
    <section ref={ref} className="py-24 lg:py-32 overflow-hidden" style={{ background: '#f9f9f7' }}>
      {/* Keyframe injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Bebas+Neue&family=Raleway:wght@700;800&family=Cormorant+Garamond:wght@600;700&family=Oswald:wght@600;700&family=Nunito+Sans:wght@800;900&family=Montserrat:wght@700;800&display=swap');

        @keyframes marquee-forward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: 'rgba(0,0,0,0.05)',
              color: '#111111',
              border: '1px solid rgba(0,0,0,0.12)',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >
            <i className="ri-global-line text-xs" />
            Global Clients
          </span>
          <h2
            className="block"
            style={{
              color: '#111111',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Trusted By Global Brands
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(17,17,17,0.55)' }}
          >
            Supplying the world&apos;s most recognised apparel brands across 27+ countries.
          </p>
        </div>
      </div>

      {/* Full-bleed marquee rows */}
      <div className={`flex flex-col gap-6 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
        <MarqueeRow brands={row1} reverse={false} speed={50} />
        <MarqueeRow brands={row2} reverse={true} speed={45} />
      </div>

      {/* Bottom note */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`text-center mt-14 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block h-px w-16 bg-black/10" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ color: 'rgba(17,17,17,0.35)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              23+ Active Partners
            </span>
            <span className="block h-px w-16 bg-black/10" />
          </div>
          <p className="text-[13px]" style={{ color: 'rgba(17,17,17,0.5)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            A Govt. of India Recognised{' '}
            <strong style={{ color: '#111111' }}>Star Export House</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
