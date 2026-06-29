import { useRef, useEffect, useState } from 'react';

const FounderStory = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: '560px', border: '1px solid var(--c-border)' }}
            >
              <img
                src="https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f7aacdd1-c735-4f46-a6cc-d44a409a8e5e_MD_suit.webp"
                alt="Founder of Seyon Fashions"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }}
              />
              {/* Quote card overlay */}
              <div
                className="absolute bottom-6 left-6 right-6 p-5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontStyle: 'italic',
                    color: 'rgba(26,26,26,0.75)',
                  }}
                >
                  &ldquo;We never compromised on quality. From day one, every garment we made had to meet the highest global standards.&rdquo;
                </p>
                <div>
                  <span
                    className="text-sm font-semibold block"
                    style={{ color: '#1A1A1A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Mr. Loganathan Senniappan
                  </span>
                  <span
                    className="text-[11px] tracking-wider uppercase"
                    style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Founder &amp; Chairman
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="gold-divider mb-6" />
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--c-text)',
              }}
            >
              From a Single Unit to a{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#111111' }}>
                Global Force
              </span>
            </h2>

            <div
              className="flex flex-col gap-5"
              style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', lineHeight: 1.8 }}
            >
              <p>
                In 1980, Mr. Loganathan Senniappan started Seyon Fashions with a small dyeing processing
                unit and an unwavering belief: that India could produce garments that rival the best in the world.
              </p>
              <p>
                Over four and half decades, that vision has translated into a fully vertically integrated
                manufacturing powerhouse. Today we design, sample , knit , dye, cut, print, sew and finish — all within
                our Tiruppur facilities — giving our clients unmatched control over quality, timeline, and cost.
              </p>
              <p>
                Our exports reach 27+ countries and clients include global retailers, luxury DTC brands, and
                major fashion houses from the US, EU, UK, and Australia. Yet our commitment remains the same as
                it was in 1980: make every garment exceptional.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { label: 'Facilities', value: '4' },
                { label: 'Factory Area', value: '120,000 Sft' },
                { label: 'Founded', value: '1980' },
              ].map((item) => (
                <div key={item.label}>
                  <span
                    className="block text-xl font-bold mb-0.5"
                    style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {item.value}
                  </span>
                  <span
                    className="text-[11px] tracking-widest uppercase"
                    style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
