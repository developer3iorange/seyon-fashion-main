import { useState } from 'react';
import { Link } from 'react-router-dom';
import { yarnProducts } from '../../../mocks/products';

const YarnTab = () => {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <div className="py-16 lg:py-20" style={{ background: 'var(--c-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-12">
          <div className="gold-divider mb-5" />
          <h2
            className="mb-3 leading-tight"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(26px, 3vw, 42px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--c-text)',
            }}
          >
            Premium Yarns
          </h2>
          <p
            className="text-base max-w-2xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text-muted)', lineHeight: 1.75 }}
          >
            The foundation of quality garments — engineered for strength, softness, and
            environmental responsibility. Sourced from GOTS and OCS certified spinning partners
            with full chain-of-custody documentation.
          </p>
        </div>

        {/* Yarn grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {yarnProducts.map((yarn) => (
            <div
              key={yarn.id}
              className="group rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--c-border)', background: 'var(--c-bg-alt)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '220px', background: '#F0F0F0' }}>
                {!imgErrors[yarn.id] ? (
                  <img
                    src={yarn.image}
                    alt={yarn.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImgErrors((p) => ({ ...p, [yarn.id]: true }))}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="ri-loop-left-line text-3xl" style={{ color: 'var(--c-text-faint)' }} />
                  </div>
                )}
                {/* Cert badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-semibold"
                    style={{
                      background: 'rgba(255,255,255,0.92)',
                      color: '#111111',
                      border: '1px solid rgba(0,0,0,0.10)',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {yarn.certification}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-2">
                <h3
                  className="font-bold text-[15px] leading-snug"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}
                >
                  {yarn.name}
                </h3>
                <p className="text-[12px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {yarn.composition}
                </p>
                <p className="text-[12px]" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Counts: {yarn.counts}
                </p>
                <div
                  className="flex items-center justify-between mt-2 pt-3"
                  style={{ borderTop: '1px solid var(--c-border-subtle)' }}
                >
                  <span className="text-[12px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    MOQ: <span style={{ color: 'var(--c-text-sec)', fontWeight: 600 }}>{yarn.moq}</span>
                  </span>
                  <Link
                    to="/contact"
                    className="text-[11px] tracking-wider uppercase font-medium hover:text-[#111111] whitespace-nowrap transition-colors"
                    style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    RFQ →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note + CTA */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl"
          style={{ background: 'var(--c-bg-alt)', border: '1px solid var(--c-border)' }}
        >
          <div>
            <p
              className="text-sm font-semibold mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}
            >
              <i className="ri-information-line mr-2" />
              Custom counts available
            </p>
            <p className="text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text-muted)' }}>
              GOTS and OCS certified options on request. Minimum quantities may vary by count and colour.
            </p>
          </div>
          <Link to="/contact" className="btn-gold whitespace-nowrap flex-shrink-0">
            Request Yarn Samples <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YarnTab;
