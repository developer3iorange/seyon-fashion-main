import { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

/* ─── Merged Commitments Component ─────────────────────────────────────── */

type Metric = { v: string; l: string };
type Pillar = { icon: string; title: string; subtitle: string; desc: string; metrics: Metric[] };

const TABS = [
  { id: 'commitments', label: 'Four Commitments', icon: 'ri-focus-3-line' },
  { id: 'planet', label: 'Protecting the Planet', icon: 'ri-earth-line' },
  { id: 'people', label: 'Empowering Our People', icon: 'ri-group-line' },
] as const;

type TabId = typeof TABS[number]['id'];

const TAB_META: Record<TabId, { eyebrow: string; headline: string; sub: string }> = {
  commitments: {
    eyebrow: 'Our Pillars',
    headline: 'Four Commitments.\nZero Compromise.',
    sub: 'Every product we make is built on four non-negotiable pillars — water, chemistry, fibre, and people. These are not aspirations. They are our operating standards.',
  },
  planet: {
    eyebrow: 'Planet-Centric Initiatives',
    headline: 'Protecting\nthe Environment.',
    sub: 'From zero liquid discharge to renewable energy targets, every environmental decision we make is designed to leave the planet better than we found it.',
  },
  people: {
    eyebrow: 'People-Centric Initiatives',
    headline: 'Empowering\nOur People.',
    sub: 'Our 600+ workforce is our greatest asset. We invest in their safety, growth, and wellbeing — because sustainable fashion starts with sustainable livelihoods.',
  },
};

interface MergedProps {
  pillarsRef: React.RefObject<HTMLDivElement>;
  pillarsVisible: boolean;
  planetRef: React.RefObject<HTMLDivElement>;
  planetVisible: boolean;
  peopleRef: React.RefObject<HTMLDivElement>;
  peopleVisible: boolean;
}

const MergedCommitmentsSection = ({
  pillarsRef, pillarsVisible, planetRef, planetVisible, peopleRef, peopleVisible,
}: MergedProps) => {
  const [activeTab, setActiveTab] = useState<TabId>('commitments');
  const [animating, setAnimating] = useState(false);

  const switchTab = useCallback((id: TabId) => {
    if (id === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setAnimating(false);
    }, 220);
  }, [activeTab]);

  const meta = TAB_META[activeTab];

  const allPillars: Record<TabId, Pillar[]> = {
    commitments: [
      {
        icon: 'ri-drop-line',
        title: 'Zero Discharge',
        subtitle: 'Water Stewardship',
        desc: 'Our on-site Effluent Treatment Plant (ETP) processes 100% of dyeing wastewater. We operate a closed-loop water recycling system with zero liquid discharge, ensuring zero harm to local water sources.',
        metrics: [{ v: '0', l: 'Liquid Discharge' }, { v: '100%', l: 'Water Recycled' }],
      },
      {
        icon: 'ri-leaf-line',
        title: 'Clean Chemistry',
        subtitle: 'REACH & Oeko-Tex',
        desc: 'All dyes, auxiliaries and finishing chemicals are REACH-compliant and tested to Oeko-Tex Standard 100. We do not use AZO dyes, formaldehyde, or any substance on the RSL/MRSL restricted lists.',
        metrics: [{ v: 'REACH', l: 'EU Compliant' }, { v: 'Oeko-Tex', l: 'Std 100 Certified' }],
      },
      {
        icon: 'ri-seedling-line',
        title: 'Organic & Sustainable Fibres',
        subtitle: 'GOTS & OCS Certified',
        desc: 'We source and process GOTS-certified organic cotton and OCS-verified fibres, giving international brands the full chain-of-custody documentation their compliance teams require.',
        metrics: [{ v: 'GOTS', l: 'Certified Processing' }, { v: 'OCS', l: 'Organic Content Std' }],
      },
      {
        icon: 'ri-user-heart-line',
        title: 'Ethical Labour',
        subtitle: 'People-First Manufacturing',
        desc: 'Our factories are Sedex-registered and regularly audited for fair wages, safe working conditions, freedom of association and zero tolerance for child labour — aligned to the ETI Base Code.',
        metrics: [{ v: 'Sedex', l: 'Registered' }, { v: '600+', l: 'Workers Employed' }],
      },
    ],
    planet: [
      {
        icon: 'ri-drop-line',
        title: 'Zero Discharge',
        subtitle: 'Water Stewardship',
        desc: 'Closed-loop ETP system with 100% water recycled and zero liquid discharge to local sources.',
        metrics: [{ v: '0 L', l: 'Liquid Discharged' }, { v: '100%', l: 'Water Recycled' }],
      },
      {
        icon: 'ri-leaf-line',
        title: 'Clean Chemistry',
        subtitle: 'REACH & Oeko-Tex',
        desc: 'REACH-compliant dyes and chemicals. No AZO dyes, formaldehyde, or MRSL-restricted substances.',
        metrics: [{ v: 'REACH', l: 'EU Compliant' }, { v: 'Oeko-Tex', l: 'Std 100 Certified' }],
      },
      {
        icon: 'ri-seedling-line',
        title: 'Organic & Sustainable Fibres',
        subtitle: 'GOTS & OCS Certified',
        desc: 'GOTS-certified organic cotton and OCS-verified fibres with full chain-of-custody documentation.',
        metrics: [{ v: 'GOTS', l: 'Certified Processing' }, { v: 'OCS', l: 'Organic Content Std' }],
      },
      {
        icon: 'ri-sun-line',
        title: 'Renewable Energy',
        subtitle: 'Wind & Solar Transition',
        desc: 'We are actively transitioning to wind and solar power. Target: 80% renewable energy in our manufacturing by 2026.',
        metrics: [{ v: '80%', l: 'Renewable by 2026' }, { v: 'Wind+Solar', l: 'In Progress' }],
      },
    ],
    people: [
      {
        icon: 'ri-user-heart-line',
        title: 'Ethical Labour',
        subtitle: 'Sedex Registered',
        desc: 'Sedex-registered and regularly audited for fair wages, safe working conditions, and freedom of association aligned to the ETI Base Code.',
        metrics: [{ v: 'Sedex', l: 'Registered' }, { v: '600+', l: 'Workers' }],
      },
      {
        icon: 'ri-graduation-cap-line',
        title: 'Workplace Empowerment',
        subtitle: 'Training & Development',
        desc: 'We invest in training and career development, equipping our 600+ workforce to grow, innovate, and thrive.',
        metrics: [{ v: '600+', l: 'Workforce' }, { v: 'Annual', l: 'Training Cycles' }],
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Health & Safety',
        subtitle: 'Safe Working Environment',
        desc: 'Strict safety protocols, PPE, and regular training ensure a secure, healthy environment for all workers across every production unit.',
        metrics: [{ v: '100%', l: 'PPE Compliant' }, { v: 'Zero', l: 'Tolerance Policy' }],
      },
      {
        icon: 'ri-community-line',
        title: 'Community Development',
        subtitle: 'CSR Initiatives',
        desc: 'Through education, environmental protection, and social welfare initiatives, we support the communities that power our manufacturing.',
        metrics: [{ v: 'CSR', l: 'Active Since 2013' }, { v: 'Local', l: 'Community Impact' }],
      },
    ],
  };

  const currentPillars = allPillars[activeTab];

  /* use pillars visibility for the entire merged section */
  const sectionRef = pillarsRef;
  const sectionVisible = pillarsVisible;

  return (
    <section
      ref={sectionRef}
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(46,125,82,0.12)' }}
    >
      {/* ── Top editorial header ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-0">
        <div className={`fade-up ${sectionVisible ? 'visible' : ''}`}>
          <span
            className="text-[10px] tracking-[0.45em] uppercase font-semibold block mb-6"
            style={{ color: 'rgba(46,125,82,0.9)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.4em' }}
          >
            Sustainability Framework
          </span>
        </div>

        {/* Tab navigation */}
        <div className={`fade-up ${sectionVisible ? 'visible' : ''} flex flex-col sm:flex-row gap-0 mb-0`} style={{ transitionDelay: '60ms' }}>
          <div
            className="flex flex-col sm:flex-row border-b"
            style={{ borderColor: 'rgba(255,255,255,0.08)', width: '100%' }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className="relative flex items-center gap-3 px-0 py-5 sm:pr-12 text-left cursor-pointer whitespace-nowrap"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    marginRight: '0',
                    marginBottom: '0',
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      background: isActive ? 'rgba(46,125,82,0.25)' : 'rgba(255,255,255,0.05)',
                      border: isActive ? '1px solid rgba(46,125,82,0.5)' : '1px solid rgba(255,255,255,0.08)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <i
                      className={`${tab.icon} text-sm`}
                      style={{ color: isActive ? '#2E7D52' : 'rgba(255,255,255,0.3)', transition: 'color 0.3s ease' }}
                    />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      color: isActive ? '#ffffff' : 'rgba(255,255,255,0.35)',
                      transition: 'color 0.3s ease',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tab.label}
                  </span>
                  {/* Active underline */}
                  <span
                    className="absolute bottom-0 left-0"
                    style={{
                      height: '2px',
                      width: isActive ? '100%' : '0%',
                      background: '#2E7D52',
                      transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                      right: '0',
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Content area ── */}
      <div
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(12px)' : 'translateY(0)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}
      >
        {/* Editorial split: big headline left, body right */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div>
              <h2
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(38px, 5vw, 72px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: '1.05',
                  color: '#ffffff',
                  whiteSpace: 'pre-line',
                }}
              >
                {meta.headline.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>
                    {i === 0 ? line : <em style={{ fontWeight: 300, color: '#2E7D52', fontStyle: 'italic' }}>{line}</em>}
                  </span>
                ))}
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <p
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.85',
                  color: 'rgba(255,255,255,0.5)',
                  maxWidth: '480px',
                }}
              >
                {meta.sub}
              </p>
              {/* Inline stat strip */}
              <div className="flex items-center gap-8 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {activeTab === 'commitments' && (
                  <>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>4</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Core Pillars</span></div>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>0</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Compromises</span></div>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>45+</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Years of Practice</span></div>
                  </>
                )}
                {activeTab === 'planet' && (
                  <>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>0 L</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Liquid Discharged</span></div>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>100%</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>ETP Treated</span></div>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>80%</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Renewable by 2026</span></div>
                  </>
                )}
                {activeTab === 'people' && (
                  <>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>600+</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Workers</span></div>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Sedex</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Registered</span></div>
                    <div><span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>ETI</span><span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Base Code Aligned</span></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div
          className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {currentPillars.map((p, i) => (
              <div
                key={`${activeTab}-${p.title}`}
                className="group flex flex-col gap-0 cursor-default"
                style={{
                  background: '#0a0a0a',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#111111'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#0a0a0a'; }}
              >
                {/* Card top: number + icon */}
                <div
                  className="flex items-start justify-between p-8 pb-6"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span
                    className="text-[11px] font-bold tracking-[0.2em]"
                    style={{ color: 'rgba(46,125,82,0.5)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    0{i + 1}
                  </span>
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full"
                    style={{
                      background: 'rgba(46,125,82,0.1)',
                      border: '1px solid rgba(46,125,82,0.2)',
                    }}
                  >
                    <i className={`${p.icon} text-base`} style={{ color: '#2E7D52' }} />
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-4 p-8 pt-6 flex-1">
                  <div>
                    <h3
                      className="font-bold text-lg mb-1 leading-snug"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#ffffff', letterSpacing: '-0.02em' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{ color: 'rgba(46,125,82,0.8)', fontSize: '11px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic', letterSpacing: '0.02em' }}
                    >
                      {p.subtitle}
                    </p>
                  </div>
                  <p
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', lineHeight: '1.8', flex: 1 }}
                  >
                    {p.desc}
                  </p>

                  {/* Metrics */}
                  <div
                    className="flex items-center gap-6 pt-5 mt-auto"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {p.metrics.map((m) => (
                      <div key={m.l}>
                        <span
                          className="block font-bold text-base"
                          style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.02em' }}
                        >
                          {m.v}
                        </span>
                        <span
                          style={{ color: 'rgba(255,255,255,0.25)', fontSize: '9px', fontFamily: 'Plus Jakarta Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                        >
                          {m.l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="h-[2px] w-0 group-hover:w-full"
                  style={{
                    background: 'linear-gradient(to right, #2E7D52, rgba(46,125,82,0.3))',
                    transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const useVisible = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
};



const commitments = [
  { icon: 'ri-flashlight-line', label: 'Reducing Energy Use & GHG Emissions' },
  { icon: 'ri-user-heart-line', label: 'Workers Rights & Wellbeing' },
  { icon: 'ri-drop-line', label: 'Water Stewardship' },
  { icon: 'ri-team-line', label: 'Diversity, Equity & Inclusion' },
  { icon: 'ri-delete-bin-line', label: 'Waste Reduction' },
  { icon: 'ri-book-open-line', label: 'Learning & Development' },
  { icon: 'ri-loop-right-line', label: 'Circular Manufacturing' },
  { icon: 'ri-heart-line', label: 'Community Contributions' },
];

const roadmap = [
  { year: '2026', title: 'Transition to 80% Renewable Energy', desc: 'Wind and solar installations fully operational across manufacturing units.', done: false },
  { year: '2027', title: '15% Reduction in Non-Hazardous Waste', desc: 'Through optimised cutting, sorting and material recovery programmes.', done: false },
  { year: '2030', title: '50% Reduction in Freshwater Consumption', desc: 'Per kg dyed — achieved via advanced ETP upgrades and process redesign.', done: false },
  { year: '2040', title: 'Net-Zero Manufacturing Emissions', desc: 'Across Scope 1 & 2 — full decarbonisation of direct and energy-related emissions.', done: false },
];

const certs = [
  { name: 'GOTS', full: 'Global Organic Textile Standard' },
  { name: 'OCS', full: 'Organic Content Standard' },
  { name: 'Oeko-Tex 100', full: 'Tested for Harmful Substances' },
  { name: 'Sedex', full: 'Ethical Trade Compliance' },
  { name: 'REACH', full: 'EU Chemical Compliance' },
  { name: 'ETP Certified', full: 'Zero Liquid Discharge Plant' },
];

const SustainabilityPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 200); return () => clearTimeout(t); }, []);

  const approachVis = useVisible();
  const pillarsVis = useVisible();
  const planetVis = useVisible();
  const peopleVis = useVisible();
  const certsVis = useVisible();
  const commitmentsVis = useVisible();
  const roadmapVis = useVisible();
  const statementVis = useVisible();
  const esgVis = useVisible();

  // Attach planet + people refs to invisible sentinel divs so IntersectionObserver fires
  // (the actual section ref is managed inside MergedCommitmentsSection via pillarsVis.ref)

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh', transition: 'background 0.4s ease' }}>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-40 pb-28 overflow-hidden"
          style={{ background: 'linear-gradient(to bottom, var(--c-bg-deep), var(--c-bg))', transition: 'background 0.4s ease' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(46,125,82,0.08) 0%, transparent 70%)' }}
          />
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`}>
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Sustainability
              </span>
            </div>
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '80ms' }}>
              <h1
                className="leading-tight mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', maxWidth: '800px', color: 'var(--c-text)' }}
              >
                Fashion that doesn&apos;t<br />
                <em style={{ fontWeight: 300, color: '#2E7D52' }}>cost the earth.</em>
              </h1>
            </div>
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '160ms' }}>
              <p className="text-lg max-w-2xl" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '1.75' }}>
                For over 45 years we have been manufacturing with environmental stewardship at our core.
                Today, we hold every major green certification demanded by global brands — and we&apos;re pushing further.
              </p>
            </div>
            <div className={`flex items-center gap-8 mt-12 fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '240ms' }}>
              {[{ v: '0 L', l: 'Liquid Waste Discharged' }, { v: '100%', l: 'ETP Treated Water' }, { v: 'GOTS', l: 'Organic Certified' }].map((s) => (
                <div key={s.l}>
                  <span className="block text-2xl font-bold" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.v}</span>
                  <span className="text-[11px] tracking-widest uppercase" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Sustainability Approach */}
        <section
          ref={approachVis.ref}
          className="py-24 lg:py-28"
          style={{ borderTop: '1px solid rgba(46,125,82,0.10)', background: 'var(--c-bg-deep)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`fade-up ${approachVis.visible ? 'visible' : ''}`}>
                <span
                  className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                  style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Our Philosophy
                </span>
                <h2
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '24px' }}
                >
                  Our Sustainability Approach
                </h2>
                <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', lineHeight: '1.85' }}>
                  We believe every part of the fashion industry must contribute to a better future — protecting our planet and improving the lives of workers and communities. The linear model of make, use, dispose must give way to circular thinking.
                </p>
                <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', lineHeight: '1.85', marginTop: '16px' }}>
                  At Seyon, sustainability is not a department. It has been embedded in our manufacturing since 1980 when we were established — and we are pushing further every year.
                </p>
              </div>
              <div className={`fade-up ${approachVis.visible ? 'visible' : ''} grid grid-cols-2 gap-4`} style={{ transitionDelay: '120ms' }}>
                {[
                  { icon: 'ri-recycle-line', label: 'Circular Thinking' },
                  { icon: 'ri-water-flash-line', label: 'Zero Liquid Discharge' },
                  { icon: 'ri-plant-line', label: 'Organic Certified' },
                  { icon: 'ri-global-line', label: 'Global Compliance' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-6 flex flex-col gap-3"
                    style={{
                      background: i % 2 === 0 ? 'rgba(46,125,82,0.06)' : 'rgba(46,125,82,0.03)',
                      border: '1px solid rgba(46,125,82,0.12)',
                    }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: 'rgba(46,125,82,0.12)' }}>
                      <i className={`${item.icon} text-lg`} style={{ color: '#2E7D52' }} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: 'var(--c-text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             MERGED EDITORIAL SECTION — Four Commitments + Planet + People
             ═══════════════════════════════════════════════════════════ */}
        <MergedCommitmentsSection
          pillarsRef={pillarsVis.ref}
          pillarsVisible={pillarsVis.visible}
          planetRef={planetVis.ref}
          planetVisible={planetVis.visible}
          peopleRef={peopleVis.ref}
          peopleVisible={peopleVis.visible}
        />

        {/* Bold Statement */}
        <section
          ref={statementVis.ref}
          className="py-24 lg:py-28"
          style={{ borderTop: '1px solid rgba(46,125,82,0.10)', background: 'var(--c-bg-deep)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <p
              className={`fade-up ${statementVis.visible ? 'visible' : ''}`}
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(24px, 3.5vw, 48px)',
                fontWeight: 600,
                lineHeight: '1.4',
                color: 'var(--c-text)',
                fontStyle: 'italic',
                maxWidth: '900px',
                margin: '0 auto 48px',
              }}
            >
              &ldquo;Sustainability is not a line item in our budget —
              it is the way we have manufactured for{' '}
              <span style={{ color: '#2E7D52' }}>45 years</span>.&rdquo;
            </p>
          </div>
        </section>

        {/* Our Commitments */}
        <section
          ref={commitmentsVis.ref}
          className="py-24 lg:py-28"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className={`text-center mb-16 fade-up ${commitmentsVis.visible ? 'visible' : ''}`}>
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                What We Stand For
              </span>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}>
                Our Commitments
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {commitments.map((c, i) => (
                <div
                  key={c.label}
                  className={`fade-up ${commitmentsVis.visible ? 'visible' : ''} rounded-2xl p-7 flex flex-col items-center text-center gap-4`}
                  style={{
                    background: 'rgba(46,125,82,0.04)',
                    border: '1px solid rgba(46,125,82,0.10)',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full"
                    style={{ background: 'rgba(46,125,82,0.10)', border: '1px solid rgba(46,125,82,0.18)' }}
                  >
                    <i className={`${c.icon} text-2xl`} style={{ color: '#2E7D52' }} />
                  </div>
                  <span className="text-sm font-semibold leading-snug" style={{ color: 'var(--c-text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Roadmap */}
        <section
          ref={roadmapVis.ref}
          className="py-24 lg:py-28"
          style={{ borderTop: '1px solid rgba(46,125,82,0.10)', background: 'var(--c-bg-deep)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className={`text-center mb-16 fade-up ${roadmapVis.visible ? 'visible' : ''}`}>
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Looking Ahead
              </span>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}>
                Our Roadmap
              </h2>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-[27px] top-0 bottom-0 w-px hidden lg:block"
                style={{ background: 'linear-gradient(to bottom, rgba(46,125,82,0.0), rgba(46,125,82,0.3), rgba(46,125,82,0.0))' }}
              />
              <div className="flex flex-col gap-0">
                {roadmap.map((r, i) => (
                  <div
                    key={r.year}
                    className={`fade-up ${roadmapVis.visible ? 'visible' : ''} flex gap-10 items-start py-10 border-b last:border-0`}
                    style={{ borderColor: 'rgba(46,125,82,0.10)', transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex-shrink-0 flex flex-col items-center gap-2 lg:w-14">
                      <div
                        className="w-[54px] h-[54px] flex items-center justify-center rounded-full font-bold text-sm"
                        style={{
                          background: 'rgba(46,125,82,0.12)',
                          border: '2px solid rgba(46,125,82,0.3)',
                          color: '#2E7D52',
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {r.year}
                      </div>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)', letterSpacing: '-0.01em' }}>
                        {r.title}
                      </h3>
                      <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', lineHeight: '1.75' }}>
                        {r.desc}
                      </p>
                    </div>
                    <div className="hidden lg:flex flex-shrink-0 items-center">
                      <span
                        className="px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase"
                        style={{ background: 'rgba(46,125,82,0.08)', color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif', border: '1px solid rgba(46,125,82,0.18)' }}
                      >
                        Target
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications grid — existing, unchanged */}
        <section
          className="py-20 lg:py-24"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg-alt)', transition: 'background 0.4s ease' }}
        >
          <div ref={certsVis.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className={`text-center mb-12 fade-up ${certsVis.visible ? 'visible' : ''}`}>
              <h3 className="font-bold text-2xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}>
                Our Green Certifications
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px" style={{ background: 'var(--c-border)' }}>
              {certs.map((c, i) => (
                <div
                  key={c.name}
                  className={`fade-up ${certsVis.visible ? 'visible' : ''} flex flex-col items-center text-center gap-3 p-8`}
                  style={{ background: 'var(--c-bg-alt)', transitionDelay: `${i * 60}ms` }}
                >
                  <span className="font-bold text-base" style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{c.name}</span>
                  <span className="text-[11px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{c.full}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESG Contact */}
        <section
          ref={esgVis.ref}
          className="py-24 lg:py-28"
          style={{ borderTop: '1px solid rgba(46,125,82,0.10)', background: 'var(--c-bg-deep)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`fade-up ${esgVis.visible ? 'visible' : ''}`}>
                <span
                  className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                  style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  ESG & Documentation
                </span>
                <h2
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)', marginBottom: '20px' }}
                >
                  Talk to Our Sustainability Team
                </h2>
                <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', lineHeight: '1.85', marginBottom: '28px' }}>
                  For ESG documentation, audit requests, certification packs, or supply chain transparency reports — contact us directly.
                </p>
                <a
                  href="mailto:sen@seyonfashions.com"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: '#2E7D52', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <i className="ri-mail-line" />
                  sen@seyonfashions.com
                  <span style={{ color: 'var(--c-text-faint)', fontWeight: 400 }}>— Sustainability Enquiries</span>
                </a>
              </div>
              <div className={`fade-up ${esgVis.visible ? 'visible' : ''} flex flex-col sm:flex-row lg:flex-col gap-4`} style={{ transitionDelay: '120ms' }}>
                <Link
                  to="/contact"
                  className="btn-gold whitespace-nowrap inline-flex items-center justify-center gap-2"
                >
                  Request Cert Pack <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Original CTA — preserved */}
        <section
          className="py-20"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}>
                Need our sustainability documentation?
              </h3>
              <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic' }}>
                Full cert packs, audit reports and policy documents available on request.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link to="/contact" className="btn-gold whitespace-nowrap">
                Request Cert Pack <i className="ri-arrow-right-up-line" />
              </Link>
              <Link to="/quality" className="btn-ghost whitespace-nowrap">
                Quality &amp; Compliance
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
