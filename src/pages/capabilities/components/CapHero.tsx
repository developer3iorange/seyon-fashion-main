const CapHero = () => (
  <section
    className="relative w-full pt-40 pb-20 overflow-hidden"
    style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
  >
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
    />

    <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px" style={{ background: '#111111' }} />
        <span
          className="text-[11px] tracking-[0.4em] uppercase font-medium"
          style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Manufacturing Excellence
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <h1
            className="leading-[1.0] mb-6"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(44px, 5.5vw, 80px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: 'var(--c-text)',
            }}
          >
            End-to-End
            <br />
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 300,
                background: 'linear-gradient(135deg, #111111, #555555)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Manufacturing
            </span>
          </h1>
        </div>
        <div className="lg:pb-3">
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: '420px' }}
          >
            From raw yarn selection to export-ready finished garments — every production stage
            happens in-house at our Tiruppur facilities. With a strong manufacturing base across owned and partner factories in India. Full quality control.
            Unmatched delivery precision.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-12">
        {['Spinning', 'Yarn & Knitting', 'Dyeing', 'Cutting & CAD', 'Stitching', 'Embellishments', 'Washing', 'Quality Control'].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full text-[12px] font-medium tracking-wide"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              color: '#B8902D',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default CapHero;
