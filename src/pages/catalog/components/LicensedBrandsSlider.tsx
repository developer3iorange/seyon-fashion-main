import { useRef, useEffect, useState, useCallback } from 'react';

interface Brand {
  name: string;
  /** Short display label — used as fallback text */
  label: string;
  /** Optional direct logo URL */
  logoUrl?: string;
  /** Clearbit domain for logo lookup */
  domain?: string;
}

const BRANDS: Brand[] = [
  { name: 'Coors', label: 'COORS', domain: 'coors.com' },
  { name: 'Bar Method', label: 'BAR METHOD', domain: 'barmethod.com' },
  { name: 'ICR', label: 'ICR' },
  { name: 'Fitness Connection', label: 'FITNESS CONNECTION', domain: 'fitnessconnection.com' },
  { name: 'Blink Fitness', label: 'BLINK FITNESS', domain: 'blinkfitness.com' },
  { name: '9Round', label: '9ROUND', domain: '9round.com' },
  { name: 'Stepstone', label: 'STEPSTONE', domain: 'stepstone.de' },
  { name: 'Summer Fridays', label: 'SUMMER FRIDAYS', domain: 'summerfridays.com' },
  { name: 'Tonal', label: 'TONAL', domain: 'tonal.com' },
  { name: 'Mercedes-Benz', label: 'MERCEDES-BENZ', domain: 'mercedes-benz.com' },
  { name: 'Life Time', label: 'LIFETIME', domain: 'lifetime.life' },
  { name: 'Insomnia Cookies', label: 'INSOMNIA COOKIES', domain: 'insomniacookies.com' },
  { name: 'Burn Boot Camp', label: 'BURN BOOT CAMP', domain: 'burnbootcamp.com' },
  { name: 'Kendo', label: 'KENDO', domain: 'kendobrands.com' },
  { name: 'D-Mart', label: 'DMART', domain: 'dmartindia.com' },
  { name: 'Kingsway by Rockbell', label: 'KINGSWAY BY ROCKBELL' },
  { name: 'Rockbell', label: 'ROCKBELL' },
  { name: 'Ole Henriksen', label: 'OLE HENRIKSEN', domain: 'olehenriksen.com' },
  { name: 'Arthur Galan', label: 'ARTHUR GALAN' },
  { name: 'Dos Tortugas', label: 'DOSTORTUGAS' },
  { name: 'RBS Bank', label: 'RBS BANK', domain: 'rbs.com' },
];

// ─── Single brand tile ────────────────────────────────────────────────────────
const BrandTile = ({ brand }: { brand: Brand }) => {
  const [status, setStatus] = useState<'loading' | 'ok' | 'failed'>(
    brand.domain ? 'loading' : 'failed'
  );

  const logoSrc = brand.logoUrl
    ? brand.logoUrl
    : brand.domain
    ? `https://logo.clearbit.com/${brand.domain}`
    : undefined;

  const handleLoad = useCallback(() => setStatus('ok'), []);
  const handleError = useCallback(() => setStatus('failed'), []);

  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{
        minWidth: '180px',
        height: '80px',
        borderRight: '1px solid var(--c-border)',
        padding: '0 28px',
      }}
    >
      {logoSrc && status !== 'failed' ? (
        <img
          src={logoSrc}
          alt={brand.name}
          onLoad={handleLoad}
          onError={handleError}
          className="object-contain"
          style={{
            maxHeight: '36px',
            maxWidth: '130px',
            width: 'auto',
            filter: 'grayscale(100%) brightness(0)',
            opacity: status === 'ok' ? 0.5 : 0,
            transition: 'opacity 0.3s ease',
          }}
          draggable={false}
        />
      ) : null}

      {/* Typographic fallback — shown when image fails or no domain */}
      {status === 'failed' && (
        <span
          className="text-center leading-tight select-none"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'rgba(17,17,17,0.40)',
            maxWidth: '130px',
            display: 'block',
          }}
        >
          {brand.label}
        </span>
      )}
    </div>
  );
};

// ─── Main slider ──────────────────────────────────────────────────────────────
const LicensedBrandsSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Fade-in on scroll into view
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Continuous marquee
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.42; // px / frame

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current -= SPEED;
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Double the list for seamless infinite loop
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <div
      ref={wrapperRef}
      className={`mt-6 rounded-2xl overflow-hidden fade-up ${visible ? 'visible' : ''}`}
      style={{ border: '1px solid var(--c-border)', background: 'var(--c-bg-alt)' }}
    >
      {/* ── Header ── */}
      <div
        className="px-8 lg:px-12 pt-7 pb-5 flex items-center justify-between flex-wrap gap-3"
        style={{ borderBottom: '1px solid var(--c-border)' }}
      >
        <div>
          <span
            className="text-[11px] tracking-[0.35em] uppercase font-semibold block mb-1"
            style={{ color: 'rgba(17,17,17,0.32)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Licensed Partners
          </span>
          <h4
            className="font-bold"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '15px',
              color: 'var(--c-text)',
              letterSpacing: '-0.01em',
            }}
          >
            Brands We&apos;ve Manufactured For
          </h4>
        </div>
        <span
          className="text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap"
          style={{
            background: '#111111',
            color: '#FFFFFF',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            letterSpacing: '0.06em',
          }}
        >
          {BRANDS.length}+ BRANDS
        </span>
      </div>

      {/* ── Scrolling track ── */}
      <div
        className="relative overflow-hidden"
        style={{ height: '90px' }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: '72px',
            background: 'linear-gradient(to right, var(--c-bg-alt) 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: '72px',
            background: 'linear-gradient(to left, var(--c-bg-alt) 0%, transparent 100%)',
          }}
        />

        {/* Track */}
        <div
          ref={trackRef}
          className="absolute top-0 left-0 flex items-center h-full will-change-transform"
          style={{ width: 'max-content' }}
        >
          {doubled.map((brand, idx) => (
            <BrandTile key={`${brand.name}-${idx}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* ── Footer note ── */}
      <div
        className="px-8 lg:px-12 py-3"
        style={{ borderTop: '1px solid var(--c-border)' }}
      >
        <p
          className="text-[11px]"
          style={{
            color: 'rgba(17,17,17,0.30)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: 'italic',
          }}
        >
          Hover to pause &middot; Licensed manufacturing available for qualified brand partners
        </p>
      </div>
    </div>
  );
};

export default LicensedBrandsSlider;
