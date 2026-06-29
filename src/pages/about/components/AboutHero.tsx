const AboutHero = () => (
  <section
    className="relative w-full pt-36 pb-16 overflow-hidden"
    style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
  >
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
    />

    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px" style={{ background: '#111111' }} />
          <span
            className="text-[11px] tracking-[0.4em] uppercase font-medium"
            style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Our Story
          </span>
        </div>
        <h1
          className="mb-8 leading-[1.0]"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(44px, 5.5vw, 80px)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: 'var(--c-text)',
          }}
        >
          Built on Craft.
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
            Driven by Excellence.
          </span>
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{
            color: 'var(--c-text-muted)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 400,
            maxWidth: '560px',
          }}
        >
          Since 1980, Seyon Fashions has grown from a single dyeing unit in Tiruppur to one of
          South India&apos;s most respected vertically integrated apparel manufacturers — trusted by
          leading brands across six continents.
        </p>
      </div>
    </div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-16">
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
      />
    </div>
  </section>
);

export default AboutHero;