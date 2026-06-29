import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const expertise = [
  {
    label: 'Spinning',
    icon: 'ri-loader-4-line',
    desc: 'Ring & open-end spun yarns',
    accent: '#1a1a2e',
    accentLight: 'rgba(26,26,46,0.07)',
    num: '01',
  },
  {
    label: 'Knitting',
    icon: 'ri-artboard-line',
    desc: 'Circular & flat bed machines',
    accent: '#1c2340',
    accentLight: 'rgba(28,35,64,0.07)',
    num: '02',
  },
  {
    label: 'Dyeing & Processing',
    icon: 'ri-drop-fill',
    desc: 'Zero liquid discharge',
    accent: '#0f3460',
    accentLight: 'rgba(15,52,96,0.07)',
    num: '03',
  },
  {
    label: 'Printing',
    icon: 'ri-printer-fill',
    desc: 'Screen, Digital, Rotary, Sublimation',
    accent: '#2d2d2d',
    accentLight: 'rgba(45,45,45,0.07)',
    num: '04',
  },
  {
    label: 'Cutting',
    icon: 'ri-scissors-2-fill',
    desc: 'CAD-driven precision cutting',
    accent: '#1a1a1a',
    accentLight: 'rgba(26,26,26,0.07)',
    num: '05',
  },
  {
    label: 'Embroidery',
    icon: 'ri-brush-fill',
    desc: 'Multi-head computerised units',
    accent: '#2c1654',
    accentLight: 'rgba(44,22,84,0.07)',
    num: '06',
  },
  {
    label: 'Sewing Lines',
    icon: 'ri-tools-fill',
    desc: '15+ high-speed sewing lines',
    accent: '#1b2838',
    accentLight: 'rgba(27,40,56,0.07)',
    num: '07',
  },
  {
    label: 'Washing',
    icon: 'ri-water-flash-fill',
    desc: 'Soft, enzyme & stone washing',
    accent: '#0d3b4f',
    accentLight: 'rgba(13,59,79,0.07)',
    num: '08',
  },
  {
    label: 'Packaging',
    icon: 'ri-box-3-fill',
    desc: 'Retail-ready export packaging',
    accent: '#2d2416',
    accentLight: 'rgba(45,36,22,0.07)',
    num: '09',
  },
  {
    label: 'Sampling',
    icon: 'ri-file-copy-2-fill',
    desc: 'Proto, fit & pre-production samples — where ideas take shape',
    accent: '#1c3a1c',
    accentLight: 'rgba(28,58,28,0.07)',
    num: '10',
  },
  {
    label: 'Design Services',
    icon: 'ri-pencil-ruler-2-fill',
    desc: 'Trend research, concept development & technical design',
    accent: '#3a1c2e',
    accentLight: 'rgba(58,28,46,0.07)',
    num: '11',
  },
  {
    label: 'In-House Testing Lab',
    icon: 'ri-flask-fill',
    desc: 'Fabric & garment testing to meet customer & international standards',
    accent: '#1c2a3a',
    accentLight: 'rgba(28,42,58,0.07)',
    num: '12',
  },
];

const ManufacturingExpertise = () => {
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
      className="w-full py-24 lg:py-32 sf-section"
      style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 fade-up ${visible ? 'visible' : ''}`}>
          <div>
            <div className="gold-divider mb-5" />
            <h2
              className="leading-tight"
              style={{
                color: 'var(--c-text)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(30px, 3.5vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              Manufacturing Expertise
            </h2>
          </div>
          <p
            className="text-base max-w-sm"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              color: 'var(--c-text-muted)',
              lineHeight: 1.75,
            }}
          >
            With a strong manufacturing base across owned and partner factories in India, we specialize in high-quality knitted products, casual wovens, outerwear, and innerwear, designed for women, men, and kids/babies.
          </p>
        </div>

        {/* 4×3 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px" style={{ background: 'var(--c-border-subtle)' }}>
          {expertise.map((item, i) => (
            <Link
              to="/capabilities"
              key={item.label}
              className={`group relative flex flex-col gap-5 p-7 lg:p-8 transition-all duration-300 fade-up ${visible ? 'visible' : ''} overflow-hidden`}
              style={{
                background: 'var(--c-bg)',
                transitionDelay: `${i * 50}ms`,
                textDecoration: 'none',
              }}
            >
              {/* Subtle background accent on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: item.accentLight }}
              />

              {/* Number + icon row */}
              <div className="relative flex items-start justify-between">
                {/* Large icon block */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: item.accentLight,
                    border: `1px solid ${item.accent}18`,
                  }}
                >
                  <i
                    className={`${item.icon} text-2xl`}
                    style={{ color: item.accent }}
                  />
                </div>

                {/* Step number — top right */}
                <span
                  className="text-[11px] font-bold tracking-[0.15em] tabular-nums"
                  style={{
                    color: 'var(--c-text-ultrafaint)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {item.num}
                </span>
              </div>

              {/* Text */}
              <div className="relative flex flex-col gap-1.5 flex-1">
                <span
                  className="text-[15px] font-bold leading-snug transition-colors duration-200"
                  style={{
                    color: 'var(--c-text)',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="text-[13px] leading-relaxed"
                  style={{
                    color: 'var(--c-text-muted)',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    textAlign: 'left',
                  }}
                >
                  {item.desc}
                </span>
              </div>

              {/* Bottom accent line — slides in on hover */}
              <div
                className="relative flex items-center justify-between mt-auto pt-4"
                style={{ borderTop: `1px solid ${item.accent}12` }}
              >
                <span
                  className="text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  style={{ color: item.accent, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Explore <i className="ri-arrow-right-line text-xs" />
                </span>
                {/* Accent dot */}
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: item.accent, opacity: 0.25 }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`flex justify-center mt-12 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '650ms' }}>
          <Link to="/capabilities" className="btn-outline">
            View Full Capabilities
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExpertise;
