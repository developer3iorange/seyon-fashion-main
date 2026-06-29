const credentials = [
  '45+ Years Experience',
  'Vertically Integrated',
  '27+ Export Countries',
  'GOTS & Oeko-Tex Approved',
  '600+ Skilled Workers',
  '5M+ Garments / Year',
  '80% Renewable Energy',
  '4+ PRODUCTION FACILITIES',
  'SEDEX Member',
  'Zero Liquid Discharge',
  'Trusted by Global Brands',
];

const TickerSection = () => {
  const items = [...credentials, ...credentials];

  return (
    <div
      className="w-full overflow-hidden py-4 sf-section"
      style={{
        background: 'var(--c-bg-alt)',
        borderTop: '1px solid var(--c-border-subtle)',
        borderBottom: '1px solid var(--c-border-subtle)',
        transition: 'background 0.4s ease',
      }}
    >
      <div className="ticker-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span
              className="text-[11px] font-medium tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ color: 'var(--c-text-muted)' }}
            >
              {item}
            </span>
            <span style={{ color: 'rgba(17,17,17,0.25)', fontSize: '8px' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerSection;
