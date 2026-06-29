import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const trustBadges = [
  { icon: 'ri-group-line', label: 'SEDEX Member' },
  { icon: 'ri-leaf-line', label: 'GOTS Approved' },
  { icon: 'ri-shield-check-line', label: 'OEKO-Tex Standard' },
  { icon: 'ri-drop-line', label: 'Specialised in Garment Dye & Wash' },
  { icon: 'ri-test-tube-line', label: '12+ Treatment Washes' },
  { icon: 'ri-calendar-check-line', label: '45 Day Leadtime' },
  { icon: 'ri-infinity-line', label: 'No MOQs' },
  { icon: 'ri-focus-3-line', label: 'Quality Driven – Dedicated QC' },
  { icon: 'ri-truck-line', label: 'Design + Mfg + Fulfilment DDP' },
];

const heroImages = [
  {
    src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/00e94b5e-729b-48c5-8b4d-311602868bdc_image-16.webp',
    alt: 'Premium loungewear collection — relaxed knit trousers on soft linen sofa',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/a49f950c-cad5-4181-87c4-289e097d8a8e_image-94.webp',
    alt: 'Performance activewear — seamless ribbed crop top and shorts set',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/8f4e7702-511f-4894-afe8-78ac6fa70cc1_image-92.webp',
    alt: 'Casual quarter-zip fleece set in deep forest green',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/bc2b55ec-e7a2-49f1-9588-ba0391ffb3e1_image-95.webp',
    alt: 'Sport essentials — matching maroon sports bra and baseball cap',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/06ba31d9-e0ee-4d2e-a239-07828555a168_image-91.webp',
    alt: 'Minimal streetwear — cream fleece hoodie and matching joggers',
  },
];

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center pt-[72px]"
      style={{ background: '#FFFFFF' }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-20">

          {/* LEFT — text */}
          <div
            className="flex flex-col"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            {/* Eyebrow tag */}
            <div className="flex items-center gap-2 mb-7">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(0,0,0,0.05)',
                  color: '#111111',
                  border: '1px solid rgba(0,0,0,0.15)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                <i className="ri-map-pin-line text-xs" />
                Tiruppur, India · Est. 1980
              </span>
            </div>

            {/* Headline */}
            <h1
              className="leading-[1.05] mb-6"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(38px, 4.5vw, 72px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#111111',
              }}
            >
              Premium Apparel
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #111111, #555555)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Manufactured
              </span>
              <br />
              for the World.
            </h1>

            {/* Sub text */}
            <p
              className="text-lg mb-10 max-w-[480px]"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'rgba(17,17,17,0.60)',
              }}
            >
              Vertically integrated garment manufacturing from Tiruppur —
              knitting, dyeing, stitching and finishing — trusted by global
              fashion brands for 45+ years.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/catalog" className="btn-gold">
                View Products
                <i className="ri-arrow-right-line text-base" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Request a Quote
                <i className="ri-arrow-right-up-line text-base" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{
                    background: 'rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  <i className={`${badge.icon} text-sm`} style={{ color: '#111111' }} />
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: 'rgba(17,17,17,0.65)',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image carousel */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
            }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: '560px' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides */}
              {heroImages.map((img, index) => (
                <div
                  key={img.src}
                  className="absolute inset-0"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    zIndex: index === activeIndex ? 1 : 0,
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 25%, transparent 100%)',
                  zIndex: 2,
                }}
              />

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  backdropFilter: 'blur(4px)',
                }}
                aria-label="Previous slide"
              >
                <i className="ri-arrow-left-s-line text-lg" style={{ color: '#111111' }} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  backdropFilter: 'blur(4px)',
                }}
                aria-label="Next slide"
              >
                <i className="ri-arrow-right-s-line text-lg" style={{ color: '#111111' }} />
              </button>

              {/* Dot indicators */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                {heroImages.map((img, index) => (
                  <button
                    key={img.src}
                    onClick={() => setActiveIndex(index)}
                    className="cursor-pointer rounded-full transition-all duration-300"
                    style={{
                      width: index === activeIndex ? 20 : 6,
                      height: 6,
                      background: index === activeIndex ? '#111111' : 'rgba(0,0,0,0.25)',
                      border: 'none',
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Subtle decorative accent */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)', zIndex: -1 }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)', zIndex: -1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;