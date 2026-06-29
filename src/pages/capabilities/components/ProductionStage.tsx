import { useRef, useEffect, useState } from 'react';

interface Spec {
  label: string;
  value: string;
}

interface SubType {
  name: string;
  desc: string;
}

interface ProductionStageProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: Spec[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  subTypes?: SubType[];
  notes?: string[];
}

const ProductionStage = ({
  number, title, subtitle, description, specs, imageUrl, imageAlt,
  reverse = false, subTypes, notes,
}: ProductionStageProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stageNum = parseInt(number, 10);
  const isEven = stageNum % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="w-full py-0"
      style={{ background: isEven ? 'var(--c-bg-alt)' : 'var(--c-bg)', transition: 'background 0.4s ease' }}
    >
      <div
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:[direction:rtl]' : ''}`}
      >
        {/* Image */}
        <div
          className={`relative rounded-2xl overflow-hidden fade-up ${visible ? 'visible' : ''}`}
          style={{ height: '520px', border: '1px solid var(--c-border)', direction: 'ltr' }}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }}
          />
          <div
            className="absolute top-6 left-6 text-6xl font-bold leading-none select-none"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.12)' }}
          >
            {number}
          </div>
        </div>

        {/* Text */}
        <div
          className={`flex flex-col gap-6 fade-up ${visible ? 'visible' : ''}`}
          style={{ direction: 'ltr', transitionDelay: '150ms' }}
        >
          <div>
            <span
              className="text-[11px] tracking-[0.3em] uppercase font-medium block mb-2"
              style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Stage {number}
            </span>
            <h2
              className="leading-tight mb-2"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--c-text)',
              }}
            >
              {title}
            </h2>
            <p
              className="text-base"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic', color: 'var(--c-text-muted)' }}
            >
              {subtitle}
            </p>
          </div>

          <p
            className="text-[15px] leading-relaxed"
            style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            {description}
          </p>

          {/* Sub-types (e.g. printing methods) */}
          {subTypes && subTypes.length > 0 && (
            <div className="flex flex-col gap-2 mt-1">
              {subTypes.map((st) => (
                <div
                  key={st.name}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl"
                  style={{ background: isEven ? 'var(--c-bg)' : 'var(--c-bg-alt)', border: '1px solid var(--c-border-subtle)' }}
                >
                  <span
                    className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#111111', marginTop: '6px' }}
                  />
                  <div>
                    <span
                      className="text-sm font-bold block"
                      style={{ color: 'var(--c-text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {st.name}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {st.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Specs grid */}
          <div
            className="grid grid-cols-2 gap-px mt-2"
            style={{ background: 'var(--c-border-subtle)' }}
          >
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="px-5 py-4 flex flex-col gap-1"
                style={{ background: isEven ? 'var(--c-bg-alt)' : 'var(--c-bg)' }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {spec.value}
                </span>
                <span
                  className="text-[11px] tracking-widest uppercase"
                  style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {spec.label}
                </span>
              </div>
            ))}
          </div>

          {/* Notes / certifications */}
          {notes && notes.length > 0 && (
            <div className={notes.length === 6 || notes.length === 9 ? 'grid grid-cols-3 gap-2 mt-1' : notes.length === 8 ? 'grid grid-cols-4 gap-2 mt-1' : notes.length === 4 ? 'grid grid-cols-2 gap-2 mt-1' : 'flex flex-wrap gap-2 mt-1'}>
              {notes.map((note) => (
                <span
                  key={note}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap"
                  style={{
                    background: 'rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.10)',
                    color: 'rgba(17,17,17,0.65)',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  }}
                >
                  <i className="ri-check-line text-xs" />
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="max-w-[1400px] mx-auto px-6 lg:px-12"
        style={{ borderTop: '1px solid var(--c-border-subtle)' }}
      />
    </section>
  );
};

export default ProductionStage;
