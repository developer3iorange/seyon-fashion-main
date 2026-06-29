import { useRef, useEffect, useState } from 'react';

const values = [
  {
    icon: 'ri-shield-check-line',
    title: 'Uncompromising Quality',
    desc: 'Our QC process starts from Yarn to Fabric to Garments, following the industry\'s highest standards at each stage, and we are transparent in communicating the same.',
  },
  {
    icon: 'ri-leaf-line',
    title: 'Sustainable by Design',
    desc: 'Zero liquid discharge, GOTS-certified organic processing, and ethical labour practices throughout our supply chain.',
  },
  {
    icon: 'ri-earth-line',
    title: 'Globally Trusted',
    desc: 'Exporting to 18+ countries since 2001. Long-term partnerships with brands from the US, EU, Australia, and beyond.',
  },
  {
    icon: 'ri-group-line',
    title: 'People-First Culture',
    desc: 'Fair wages, safe workplaces, and continuous skill development for 600+ workers across our Tiruppur facilities.',
  },
  {
    icon: 'ri-shake-hands-line',
    title: 'Collaborative Partnership',
    desc: 'We work as an extension of your team. Dedicated account managers, real-time updates, transparent communication at every stage.',
  },
  {
    icon: 'ri-flask-line',
    title: 'Continuous Innovation',
    desc: 'Investing in new machinery, digital processes, and sustainable materials to stay ahead of global sourcing requirements.',
  },
  {
    icon: 'ri-seedling-line',
    title: 'Long-Term Thinking',
    desc: 'We build partnerships that last decades, not seasons. Every decision reflects our commitment to sustainable growth and lasting relationships with clients, workers, and communities.',
  },
];

const ValuesSection = () => {
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

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 lg:py-32"
      style={{ background: 'var(--c-bg-alt)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <div className="gold-divider mx-auto mb-5" />
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--c-text)',
            }}
          >
            Our Core Values
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontStyle: 'italic',
              color: 'var(--c-text-muted)',
              lineHeight: 1.7,
            }}
          >
            The principles that have guided 45 years of world-class manufacturing.
          </p>
        </div>

        {/* First 6 cards — balanced 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.slice(0, 6).map((val, i) => (
            <div
              key={val.title}
              className={`rounded-2xl p-8 flex flex-col gap-5 fade-up ${visible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                background: 'var(--c-bg)',
                border: '1px solid var(--c-border)',
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  background: 'rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <i className={`${val.icon} text-xl`} style={{ color: '#111111' }} />
              </div>
              <div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '17px', color: 'var(--c-text)' }}
                >
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 7th card — full-width spanning row */}
        <div className="mt-5">
          <div
            className={`rounded-2xl p-8 flex flex-col sm:flex-row gap-5 items-start fade-up ${visible ? 'visible' : ''}`}
            style={{
              transitionDelay: `${6 * 80}ms`,
              background: 'var(--c-bg)',
              border: '1px solid var(--c-border)',
            }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
              style={{
                background: 'rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <i className="ri-seedling-line text-xl" style={{ color: '#111111' }} />
            </div>
            <div className="flex-1">
              <h3
                className="font-bold mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '17px', color: 'var(--c-text)' }}
              >
                {values[6].title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {values[6].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
