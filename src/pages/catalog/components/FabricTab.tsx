import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fabricProducts } from '../../../mocks/products';

const FabricTab = () => {
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
            Sustainable Fabrics
          </h2>
          <p
            className="text-base max-w-2xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text-muted)', lineHeight: 1.75 }}
          >
            From everyday essentials to high-performance textiles, meeting the evolving needs
            of conscious global fashion brands. GOTS and Oeko-Tex certified options available.
          </p>
        </div>

        {/* Fabric types quick reference */}
        <div className="mb-10">
          <p
            className="text-[11px] uppercase tracking-widest mb-3"
            style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Available Constructions:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Single Jersey', 'Interlock', 'Auto Stripes', 'Single Rib', 'Double Rib', 'Pointele', 'Airtex', 'Jacquard', '2-Thread Fleece', '3-Thread Fleece'].map((t) => (
              <span
                key={t}
                className="text-[11px] px-3 py-1 rounded-full"
                style={{ border: '1px solid var(--c-border)', color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Fabric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          {fabricProducts.map((fab) => (
            <div
              key={fab.id}
              className="group rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--c-border)', background: 'var(--c-bg-alt)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '200px', background: '#EFEFEF' }}>
                {!imgErrors[fab.id] ? (
                  <img
                    src={fab.image}
                    alt={fab.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImgErrors((p) => ({ ...p, [fab.id]: true }))}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="ri-artboard-line text-3xl" style={{ color: 'var(--c-text-faint)' }} />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-2">
                <h3
                  className="font-bold text-[15px] leading-snug"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}
                >
                  {fab.name}
                </h3>
                <p className="text-[12px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {fab.composition}
                </p>
                <div className="flex items-center gap-3 flex-wrap mt-1">
                  <span
                    className="text-[11px] px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--c-bg)', border: '1px solid var(--c-border-subtle)', color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {fab.construction}
                  </span>
                  <span
                    className="text-[11px] px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--c-bg)', border: '1px solid var(--c-border-subtle)', color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {fab.gsmRange}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between mt-2 pt-3"
                  style={{ borderTop: '1px solid var(--c-border-subtle)' }}
                >
                  <span className="text-[12px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    MOQ: <span style={{ color: 'var(--c-text-sec)', fontWeight: 600 }}>{fab.moq}</span>
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
              MOQ from 200 kg
            </p>
            <p className="text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text-muted)' }}>
              Full-width and tubular dyeing available. Custom GSM, construction, and colour on request.
            </p>
          </div>
          <Link to="/contact" className="btn-gold whitespace-nowrap flex-shrink-0">
            Request Fabric Swatches <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FabricTab;
