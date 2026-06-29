import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FooterCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-32 lg:py-40 sf-section"
      style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <div className={`fade-up ${visible ? 'visible' : ''}`}>
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-6"
            style={{ color: 'var(--c-text-faint)', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Start a Conversation
          </p>
          <h2
            className="mb-8 leading-[1.0]"
            style={{
              color: 'var(--c-text)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(40px, 6vw, 88px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
            }}
          >
            Ready to Source{' '}
            <span
              style={{
                fontFamily: 'Fraunces, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#111111',
              }}
            >
              Smarter?
            </span>
          </h2>
          <p
            className="text-base mb-12 max-w-md mx-auto"
            style={{
              color: 'var(--c-text-muted)',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.7,
            }}
          >
            We respond within 24 business hours. Let&apos;s build something exceptional together.
          </p>
          <Link to="/contact" className="btn-gold" style={{ fontSize: '15px', height: '58px', padding: '0 40px' }}>
            Request a Quote
            <i className="ri-arrow-right-up-line text-lg" />
          </Link>
        </div>

        {/* Divider ornament */}
        <div className={`flex items-center justify-center gap-4 mt-20 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          <span className="w-16 h-px" style={{ background: 'var(--c-border)' }} />
          <span style={{ color: 'rgba(17,17,17,0.25)', fontSize: '8px' }}>◆</span>
          <span className="w-16 h-px" style={{ background: 'var(--c-border)' }} />
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
