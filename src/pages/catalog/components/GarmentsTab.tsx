import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products, productCategories, fabricsList, type Product } from '../../../mocks/products';
import ProductCard from './ProductCard';
import LicensedBrandsSlider from './LicensedBrandsSlider';

const GarmentsTab = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFabric, setActiveFabric] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setGridVisible(true); obs.unobserve(el); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxProduct(null);
    };
    if (lightboxProduct) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxProduct]);

  const garmentProducts = products.filter((p) => p.category !== 'Fabrics');

  const filtered = garmentProducts.filter((p) => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory;
    const fabMatch = activeFabric === 'All' || p.fabric === activeFabric;
    return catMatch && fabMatch;
  });

  return (
    <div className="py-16 lg:py-20" style={{ background: 'var(--c-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Category Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveFabric('All'); }}
              className="text-[12px] tracking-wider uppercase px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 600,
                background: activeCategory === cat ? '#111111' : 'var(--c-bg-alt)',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--c-text-sec)',
                border: activeCategory === cat ? '1px solid #111111' : '1px solid var(--c-border)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fabric filter */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          <span
            className="text-[11px] uppercase tracking-wider mr-1"
            style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Fabric:
          </span>
          {['All', ...fabricsList].map((fab) => (
            <button
              key={fab}
              onClick={() => setActiveFabric(fab)}
              className="text-[11px] px-3 py-1 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                background: activeFabric === fab ? 'rgba(0,0,0,0.07)' : 'transparent',
                color: activeFabric === fab ? '#111111' : 'var(--c-text-muted)',
                border: activeFabric === fab ? '1px solid rgba(0,0,0,0.18)' : '1px solid var(--c-border)',
              }}
            >
              {fab}
            </button>
          ))}
        </div>

        {/* Count + RFQ row */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-[13px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {filtered.length} styles available
          </p>
          <Link to="/contact" className="btn-gold text-[12px]">
            Request Bulk Quote <i className="ri-arrow-right-up-line" />
          </Link>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 fade-up ${gridVisible ? 'visible' : ''}`}
        >
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onImageClick={() => setLightboxProduct(product)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic', fontSize: '18px' }}>
              No products match the selected filters.
            </p>
          </div>
        )}

        {/* Licensed & Custom Development Banner */}
        <div
          className="mt-20 rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--c-border)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Dark left panel */}
            <div
              className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-center"
              style={{ background: '#111111' }}
            >
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-semibold block mb-5"
                style={{ color: 'rgba(255,255,255,0.40)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Custom Development
              </span>
              <h3
                className="mb-5 leading-tight"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(22px, 2.5vw, 34px)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                Licensed &amp; Custom Development
              </h3>
              <p
                className="mb-8 text-base"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  color: 'rgba(255,255,255,0.60)',
                  lineHeight: 1.85,
                  maxWidth: '480px',
                }}
              >
                We manufacture licensed garments and fully custom styles from your tech pack.
                Whether you need branded graphics, co-lab collections, or proprietary
                constructions — our in-house R&amp;D and embellishment teams bring your vision
                to life.
              </p>
              <Link to="/contact" className="self-start">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                  style={{
                    background: '#FFFFFF',
                    color: '#111111',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  }}
                >
                  Send Your Brief <i className="ri-arrow-right-up-line" />
                </span>
              </Link>
            </div>
            {/* Right icon grid */}
            <div
              className="lg:col-span-2 grid grid-cols-2 gap-px"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              {[
                { icon: 'ri-pen-nib-line', label: 'Tech Pack Development' },
                { icon: 'ri-palette-line', label: 'Licensed Graphics' },
                { icon: 'ri-brush-line', label: 'Co-Lab Collections' },
                { icon: 'ri-scissors-cut-line', label: 'Custom Constructions' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-3 p-8 text-center"
                  style={{ background: '#111111' }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}
                  >
                    <i className={`${item.icon} text-xl`} style={{ color: 'rgba(255,255,255,0.60)' }} />
                  </div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: 'rgba(255,255,255,0.50)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Licensed Brands Slider */}
        <LicensedBrandsSlider />

        {/* Don't see what you need */}
        <div
          className="mt-6 py-10 px-8 lg:px-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ background: 'var(--c-bg-alt)', border: '1px solid var(--c-border)' }}
        >
          <div>
            <h3
              className="mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--c-text)' }}
            >
              Don&apos;t see exactly what you need?
            </h3>
            <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic' }}>
              We develop custom styles from your tech packs. Let&apos;s talk.
            </p>
          </div>
          <Link to="/contact" className="btn-gold whitespace-nowrap flex-shrink-0">
            Send Your Tech Pack <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(6px)' }}
          onClick={() => setLightboxProduct(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer z-10"
            style={{ background: 'rgba(255,255,255,0.12)' }}
            onClick={() => setLightboxProduct(null)}
            aria-label="Close"
          >
            <i className="ri-close-line text-xl" style={{ color: '#FFFFFF' }} />
          </button>

          <div
            className="relative rounded-xl overflow-hidden max-w-[800px] w-full flex flex-col"
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.10)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-center" style={{ height: '70vh' }}>
              <img
                src={lightboxProduct.image}
                alt={lightboxProduct.name}
                className="w-full h-full object-contain"
                style={{ maxHeight: '70vh' }}
              />
            </div>
            <div className="p-5 md:p-6 flex items-center justify-between gap-4 flex-shrink-0">
              <div>
                <h4
                  className="font-semibold text-[15px] md:text-[17px]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#FFFFFF' }}
                >
                  {lightboxProduct.name}
                </h4>
                <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {lightboxProduct.fabric} &middot; MOQ: {lightboxProduct.moq}
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-gold text-[12px] whitespace-nowrap flex-shrink-0"
                onClick={() => setLightboxProduct(null)}
              >
                Request Style <i className="ri-arrow-right-up-line" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GarmentsTab;