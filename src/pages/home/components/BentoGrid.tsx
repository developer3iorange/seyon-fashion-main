import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    title: 'Knitting',
    desc: 'State-of-the-art circular and flat knitting machines producing premium jersey, rib, interlock, and engineered fabrics.',
    img: 'https://public.readdy.ai/ai/img_res/edited_912deb6312345f3a2ae2e72e75faf07a_553338b0.jpg',
    icon: 'ri-scissors-cut-line',
  },
  {
    title: 'Dyeing',
    desc: 'In-house eco dyeing with zero liquid discharge. Precision colour matching for 100+ colours.',
    img: 'https://readdy.ai/api/search-image?query=fabric%20dyeing%20process%20in%20textile%20factory%20large%20industrial%20dye%20vats%20colorful%20yarn%20hanks%20dramatic%20factory%20lighting%20dark%20background%20steam%20rising%20industrial%20textile%20manufacturing%20warm%20tones%20moody%20atmosphere&width=700&height=450&seq=bento002&orientation=landscape',
    icon: 'ri-drop-line',
  },
  {
    title: 'Cutting & Stitching',
    desc: 'CAD-driven precision cutting and 15+ sewing lines handling complex garment constructions.',
    img: 'https://readdy.ai/api/search-image?query=garment%20cutting%20stitching%20sewing%20factory%20floor%20industrial%20machines%20dark%20moody%20fashion%20manufacturing%20rows%20of%20sewing%20machines%20workers%20fabric%20cutting%20cinematic%20lighting%20editorial%20photography%20warm%20amber%20shadows&width=700&height=450&seq=bento003&orientation=landscape',
    icon: 'ri-tools-line',
  },
  {
    title: 'Finishing',
    desc: 'Embellishments, embroidery, printing, and export-grade finishing that meets global retail standards.',
    img: 'https://readdy.ai/api/search-image?query=garment%20finishing%20quality%20control%20textile%20factory%20folding%20packaging%20inspection%20dark%20industrial%20photography%20warm%20golden%20light%20editorial%20fashion%20manufacturing%20premium%20quality%20checking%20dark%20moody%20atmosphere&width=700&height=450&seq=bento004&orientation=landscape',
    icon: 'ri-star-line',
  },
  {
    title: 'Sampling & Design',
    desc: 'Our New York design office handles tech packs, 3D prototyping, graphic design, and the latest trend showcasing — bridging global fashion intelligence with Indian manufacturing precision.',
    img: 'https://readdy.ai/api/search-image?query=modern%20fashion%20design%20studio%20New%20York%20creative%20workspace%20mood%20boards%20fabric%20swatches%20tech%20packs%203D%20garment%20design%20digital%20prototyping%20clean%20bright%20minimal%20interior%20editorial%20photography%20warm%20natural%20light%20contemporary%20design%20office&width=700&height=450&seq=bento005&orientation=landscape',
    icon: 'ri-pencil-ruler-2-line',
  },
];

const BentoGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Heights: tall card = 2 rows of right cards. Each right card = 240px, gap = 20px → tall = 240+240+20 = 500px
  const rightCardHeight = 240;
  const gapPx = 20;
  const tallHeight = rightCardHeight * 2 + gapPx;

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 lg:py-32 sf-section"
      style={{ background: 'var(--c-bg-alt)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 fade-up ${visible ? 'visible' : ''}`}>
          <div>
            <div className="gold-divider mb-5" />
            <h2
              className="leading-tight"
              style={{
                color: 'var(--c-text)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Our Capabilities
            </h2>
          </div>
          <p
            className="text-base max-w-xs"
            style={{
              fontFamily: 'Fraunces, serif',
              fontStyle: 'italic',
              color: 'var(--c-text-muted)',
              lineHeight: 1.7,
            }}
          >
            From concept to finished garment,<br />everything under one roof.
          </p>
        </div>

        {/* Bento grid — desktop: 12 cols. Left tall card (4 cols, 2 rows). Right: 2×2 grid (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

          {/* ── LEFT: tall card ── */}
          <div
            className={`lg:col-span-4 lg:row-span-2 group relative rounded-2xl overflow-hidden glass-card fade-up ${visible ? 'visible' : ''} cursor-pointer`}
            style={{ minHeight: `${tallHeight}px`, transitionDelay: '100ms' }}
          >
            <img
              src={capabilities[0].img}
              alt={capabilities[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span
                className="text-[11px] tracking-[0.3em] uppercase font-medium block mb-2"
                style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                01
              </span>
              <h3
                className="text-white text-2xl font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {capabilities[0].title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'left' }}>
                {capabilities[0].desc}
              </p>
            </div>
          </div>

          {/* ── RIGHT: 2×2 grid of 4 cards, each col-span-4 ── */}
          {capabilities.slice(1).map((cap, i) => (
            <div
              key={cap.title}
              className={`lg:col-span-4 group relative rounded-2xl overflow-hidden glass-card fade-up ${visible ? 'visible' : ''} cursor-pointer`}
              style={{ height: `${rightCardHeight}px`, transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <img
                src={cap.img}
                alt={cap.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.35) 55%, transparent 100%)' }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span
                  className="text-[11px] tracking-[0.3em] uppercase font-medium block mb-1"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  0{i + 2}
                </span>
                <h3
                  className="text-white text-lg font-bold mb-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {cap.title}
                </h3>
                <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'left' }}>
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`flex justify-center mt-12 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '700ms' }}>
          <Link to="/capabilities" className="btn-outline">
            View Full Capabilities
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
