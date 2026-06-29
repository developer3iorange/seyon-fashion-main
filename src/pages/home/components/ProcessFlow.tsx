import { useRef, useEffect, useState } from 'react';

const steps = [
  { num: '01', title: 'Inquiry', desc: 'Share your tech pack, fabric specs, and order details.' },
  { num: '02', title: 'Sampling', desc: 'Our team creates lab-approved proto samples within 7 days.' },
  { num: '03', title: 'Approval', desc: 'Buyer reviews and approves, with revisions as needed.' },
  { num: '04', title: 'Production', desc: 'Bulk manufacturing begins with real-time tracking.' },
  { num: '05', title: 'QC', desc: 'AQL 2.5 inspection at inline, mid-line, and final stages.' },
  { num: '06', title: 'Delivery', desc: 'On-time shipment to 27+ countries via air or sea.' },
];

const ProcessFlow = () => {
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
      style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-16 fade-up ${visible ? 'visible' : ''}`}>
          <div className="gold-divider mx-auto mb-5" />
          <h2
            className="mb-3"
            style={{
              color: 'var(--c-text)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            How We Work
          </h2>
          <p className="text-base" style={{ color: 'var(--c-text-muted)', fontFamily: 'Inter, sans-serif' }}>
            A streamlined process designed for global sourcing professionals.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-px" style={{ background: 'var(--c-border-subtle)' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`p-7 lg:p-8 flex flex-col gap-4 fade-up ${visible ? 'visible' : ''}`}
              style={{
                background: 'var(--c-bg)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span
                className="leading-none font-bold"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '40px',
                  color: '#111111',
                  opacity: 0.18,
                }}
              >
                {step.num}
              </span>
              <div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: 'var(--c-text)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '16px' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-faint)', fontFamily: 'Inter, sans-serif' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
