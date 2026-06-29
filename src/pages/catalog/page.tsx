import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import YarnTab from './components/YarnTab';
import FabricTab from './components/FabricTab';
import GarmentsTab from './components/GarmentsTab';

type TopTab = 'Garments' | 'Fabric' | 'Yarn';

const topTabs: TopTab[] = ['Garments', 'Fabric', 'Yarn'];

const tabMeta: Record<TopTab, { eyebrow: string; headline: string; sub: string }> = {
  Garments: {
    eyebrow: 'Collection Overview',
    headline: 'Garments',
    sub: 'Precision-crafted across every category — Menswear, Womenswear, Kidswear, Innerwear, Sweater Knit, Woven, Accessories and Home Textiles. Each piece reflects our commitment to quality, consistency, and design excellence at a global standard.',
  },
  Fabric: {
    eyebrow: 'Material Intelligence',
    headline: 'Fabrics',
    sub: 'A curated range of performance and everyday textiles, developed with sustainability at the core. From jersey and interlock to technical weaves — every fabric meets the demands of discerning international markets.',
  },
  Yarn: {
    eyebrow: 'The Foundation of Quality',
    headline: 'Yarn',
    sub: 'We begin where quality begins. Our yarn selection spans certified organic, recycled, and blended constructions — each traceable, responsibly sourced, and engineered to deliver exceptional end-product performance.',
  },
};

const CatalogPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<TopTab>('Garments');

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const meta = tabMeta[activeTab];

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh', transition: 'background 0.4s ease' }}>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-40 pb-0"
          style={{
            background: 'linear-gradient(to bottom, var(--c-bg-deep), var(--c-bg))',
            borderBottom: '1px solid var(--c-border-subtle)',
            transition: 'background 0.4s ease',
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Eyebrow */}
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`}>
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {meta.eyebrow}
              </span>
            </div>
            {/* Headline */}
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '80ms' }}>
              <h1
                className="leading-tight mb-6"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  maxWidth: '700px',
                  color: 'var(--c-text)',
                }}
              >
                {meta.headline}
              </h1>
            </div>
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '160ms' }}>
              <p
                className="text-lg max-w-2xl mb-12"
                style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '1.75' }}
              >
                {meta.sub}
              </p>
            </div>

            {/* Top-level 3-tab nav — docked to bottom of hero */}
            <div className={`flex items-center gap-0 fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '220ms' }}>
              {topTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-8 py-4 text-sm font-bold tracking-wider uppercase cursor-pointer transition-all duration-200 whitespace-nowrap"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    color: activeTab === tab ? '#111111' : 'var(--c-text-faint)',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab ? '2px solid #111111' : '2px solid transparent',
                  }}
                >
                  {tab}
                </button>
              ))}
              <div className="flex-1 border-b-2" style={{ borderColor: 'var(--c-border-subtle)' }} />
            </div>
          </div>
        </section>

        {/* Tab content */}
        {activeTab === 'Garments' && <GarmentsTab />}
        {activeTab === 'Fabric' && <FabricTab />}
        {activeTab === 'Yarn' && <YarnTab />}
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
