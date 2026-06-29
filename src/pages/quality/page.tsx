import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

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

const certifications = [
  { name: 'Oeko-Tex Std 100', desc: 'Tested for Harmful Substances', icon: 'ri-leaf-line' },
  { name: 'GOTS', desc: 'Global Organic Textile Standard', icon: 'ri-plant-line' },
  { name: 'Sedex', desc: 'Ethical Trade & Social Compliance', icon: 'ri-group-line' },
  { name: 'REACH', desc: 'EU Chemical Compliance', icon: 'ri-flask-line' },
  { name: 'AQL 2.5', desc: 'Internationally Accepted Inspection Level', icon: 'ri-bar-chart-line' },
  { name: 'WRAP', desc: 'Worldwide Responsible Accredited Production', icon: 'ri-medal-line' },
  { name: 'ZDHC MRSL', desc: 'Zero Discharge of Hazardous Chemicals', icon: 'ri-drop-line' },
  { name: 'Higg Index', desc: 'Facility-Level Sustainability Measurement', icon: 'ri-building-line' },
  { name: 'amfori BSCI', desc: 'Business Social Compliance Initiative', icon: 'ri-global-line' },
];

const aqlSteps = [
  {
    step: '01',
    title: 'Raw Material Inspection',
    desc: 'Yarn: Tested for Count, Strength, Hairiness and Imperfections. Fabric: GSM, Spirality, Shade Matching, Colour Fastness via our defined FPT and 4.0 system. Fabric check reports for each and every single lot that is going to be processed for next stage cutting.'
  },
  {
    step: '02',
    title: 'In-Process QC',
    desc: 'To adhere to buyers standards, all raw materials, finished fabrics, accessories and trims are checked and evaluated at every stage from knitting, dyeing, cutting, stitching, embellishments and finishing to ensure highest quality standards are followed and met. Each stage is documented and verified by HOD\'s.'
  },
  {
    step: '03',
    title: 'Lab Testing',
    desc: 'Colour fastness, tensile strength, pilling resistance, and chemical compliance (REACH / Oeko-Tex) tested in our certified internal lab.'
  },
  {
    step: '04',
    title: 'Final AQL',
    desc: 'AQL 2.5 is our standard. Third party audits are available upon request. We work on 100% garment to garment and 1.5 AQL standards. Our reports can be taken to highest standard in transparency as we work with global brands and know the value of trust in our words.'
  },
  {
    step: '05',
    title: 'Approval & Dispatch',
    desc: 'Only approved lots are packed and dispatched. Full traceability documentation accompanies every shipment.'
  },
];

const memberships = [
  {
    name: 'SEDEX',
    icon: 'ri-group-line',
    desc: 'Annual SMETA audits conducted. Ethical trade compliance verified across labour, health & safety, environment, and business ethics.',
  },
  {
    name: 'GOTS',
    icon: 'ri-plant-line',
    desc: 'Certified organic textile processing since 2013. Full chain-of-custody documentation maintained for all organic orders.',
  },
  {
    name: 'Oeko-Tex',
    icon: 'ri-leaf-line',
    desc: 'Standard 100 certified. Every component tested for 100+ harmful substances to ensure product safety for end consumers.',
  },
  {
    name: 'REACH',
    icon: 'ri-flask-line',
    desc: 'Full EU chemical regulation compliance on all export orders. Restricted substance management integrated into dye and process selection.',
  },
  {
    name: 'ZDHC',
    icon: 'ri-drop-line',
    desc: 'Zero Discharge of Hazardous Chemicals manufacturing programme. MRSL-compliant dye chemistry applied across our dyeing and processing unit.',
  },
  {
    name: 'Higg Index',
    icon: 'ri-building-line',
    desc: 'Facility Environmental Module (FEM) assessment completed. Energy, water, waste, and emissions data tracked and benchmarked annually.',
  },
];

const policies = [
  { title: 'Code of Conduct', icon: 'ri-file-text-line' },
  { title: 'Child Labour Policy', icon: 'ri-parent-line' },
  { title: 'Forced Labour Policy', icon: 'ri-forbid-line' },
  { title: 'Environmental & Sustainability Policy', icon: 'ri-earth-line' },
  { title: 'Waste Management Policy', icon: 'ri-recycle-line' },
  { title: 'Anti-Discrimination & DEI Policy', icon: 'ri-team-line' },
  { title: 'Health & Safety Policy', icon: 'ri-heart-pulse-line' },
  { title: 'Anti-Bribery & Corruption Policy', icon: 'ri-shield-line' },
];

const QualityPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 200); return () => clearTimeout(t); }, []);

  const certsVis = useVisible();
  const aqlVis = useVisible();
  const commitVis = useVisible();
  const complianceVis = useVisible();
  const checkpointsVis = useVisible();
  const policiesVis = useVisible();

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh', transition: 'background 0.4s ease' }}>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-40 pb-24"
          style={{ background: 'linear-gradient(to bottom, var(--c-bg-deep), var(--c-bg))', borderBottom: '1px solid var(--c-border-subtle)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`}>
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Quality &amp; Compliance
              </span>
            </div>
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '80ms' }}>
              <h1
                className="leading-tight mb-8"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', maxWidth: '800px', color: 'var(--c-text)' }}
              >
                Built on Quality.<br />
                <span style={{ fontWeight: 300, color: '#111111', letterSpacing: '-0.02em' }}>Backed by Compliance.</span>
              </h1>
              {/* Gold accent underline */}
              <div className="flex items-center gap-3 mb-4">
                <div style={{ height: '3px', width: '60px', background: 'linear-gradient(90deg, #111111, rgba(17,17,17,0.2))', borderRadius: '2px' }} />
                <div style={{ height: '3px', width: '12px', background: '#111111', borderRadius: '2px' }} />
              </div>
            </div>
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '160ms' }}>
              <p className="text-lg max-w-2xl" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '1.75' }}>
                We are committed to delivering high quality products and being recognised as a reliable
                organisation. From raw material procurement to finished product, every step is governed
                by the latest quality technology systems and international standards.
              </p>
            </div>
          </div>
        </section>

        {/* Quality Commitment */}
        <section className="py-24 lg:py-28" style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div ref={commitVis.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-up ${commitVis.visible ? 'visible' : ''}`}>
              <div>
                <span
                  className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                  style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Our Commitment
                </span>
                <h2
                  className="mb-6"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}
                >
                  Quality is not a department. It&apos;s our culture.
                </h2>
                <p className="mb-4" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', lineHeight: '1.8' }}>
                  A team of professionals constantly inspects the quality of garments through a series of quality assurance tests followed across our organisation. Right from the procurement of raw materials to the manufacturing of the end product, we use the latest quality technology systems and methods to meet the exacting requirements of our buyers.
                </p>
                <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', lineHeight: '1.8' }}>
                  Excellence in manufacturing quality products is achieved by regularly upgrading our machinery to the latest standards. At present, our products are the preferred choice for most international and domestic top-notch labels.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'AQL 2.5', label: 'Inspection Standard' },
                  { value: '10+', label: 'Active Certifications' },
                  { value: '45+', label: 'Years Quality Track Record' },
                  { value: '12+', label: 'Process Driven Quality Control Checkpoints' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-6 flex flex-col gap-2"
                    style={{ background: 'var(--c-bg-alt)', border: '1px solid var(--c-border)' }}
                  >
                    <span style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '30px', fontWeight: 700 }}>
                      {stat.value}
                    </span>
                    <span style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MERGED: Compliance You Can Trust + Memberships & Affiliations */}
        <section
          id="certifications"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: '#0d0d0d', overflow: 'hidden' }}
        >
          {/* Top editorial header — full bleed dark */}
          <div ref={certsVis.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-16">
            <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 fade-up ${certsVis.visible ? 'visible' : ''}`}>
              <div>
                <span
                  className="text-[11px] tracking-[0.4em] uppercase font-medium block mb-5"
                  style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Standards &amp; Memberships
                </span>
                <h2
                  className="leading-none"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff' }}
                >
                  Compliance<br />
                  <em style={{ fontWeight: 300, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>You Can Trust.</em>
                </h2>
              </div>
              <p
                className="text-base max-w-sm lg:text-right"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}
              >
                Active memberships and certification programmes reflecting our commitment to ethical manufacturing, environmental responsibility, and transparent supply chains.
              </p>
            </div>
          </div>

          {/* Certification ticker strip */}
          <div
            className="w-full overflow-hidden py-5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="flex gap-0 whitespace-nowrap"
              style={{ animation: 'certTicker 28s linear infinite' }}
            >
              {[...certifications, ...certifications].map((cert, i) => (
                <div
                  key={`${cert.name}-${i}`}
                  className="inline-flex items-center gap-3 px-10 flex-shrink-0"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.07)' }}
                  >
                    <i className={`${cert.icon} text-xs`} style={{ color: 'rgba(255,255,255,0.6)' }} />
                  </div>
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.75)' }}
                  >
                    {cert.name}
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.3)' }}
                  >
                    {cert.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships — editorial full-width cards */}
          <div ref={complianceVis.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
              {memberships.map((m, i) => (
                <div
                  key={m.name}
                  className={`group relative flex flex-col justify-between p-10 fade-up ${complianceVis.visible ? 'visible' : ''} transition-all duration-500`}
                  style={{
                    background: '#0d0d0d',
                    transitionDelay: `${i * 80}ms`,
                    minHeight: '260px',
                  }}
                >
                  {/* Hover fill */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0"
                        style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
                      >
                        <i className={`${m.icon} text-base`} style={{ color: 'rgba(255,255,255,0.7)' }} />
                      </div>
                      <span
                        className="text-[10px] tracking-[0.3em] uppercase"
                        style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3
                      className="mb-4 font-bold"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(20px, 2vw, 26px)', color: '#ffffff', letterSpacing: '-0.01em' }}
                    >
                      {m.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}
                    >
                      {m.desc}
                    </p>
                  </div>
                  {/* Bottom accent line */}
                  <div
                    className="relative z-10 mt-8 h-px w-0 group-hover:w-full transition-all duration-700"
                    style={{ background: 'rgba(255,255,255,0.25)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AQL Inspection Process */}
        <section
          className="py-20 lg:py-28"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
        >
          <div ref={aqlVis.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className={`text-center mb-14 fade-up ${aqlVis.visible ? 'visible' : ''}`}>
              <span className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4" style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                AQL Inspection Process
              </span>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}>
                How We Guarantee Quality
              </h2>
            </div>
            <div className="flex flex-col gap-0">
              {aqlSteps.map((step, i) => (
                <div
                  key={step.step}
                  className={`fade-up ${aqlVis.visible ? 'visible' : ''} grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 border-b items-start`}
                  style={{ borderColor: 'var(--c-border-subtle)', transitionDelay: `${i * 80}ms` }}
                >
                  <div className="lg:col-span-1">
                    <span style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em' }}>
                      {step.step}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h4 className="font-semibold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}>
                      {step.title}
                    </h4>
                  </div>
                  <div className="lg:col-span-7">
                    <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', lineHeight: '1.75' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stage-by-Stage Compliance Checkpoints */}
        <section
          className="py-20 lg:py-28"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
        >
          <div ref={checkpointsVis.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className={`text-center mb-14 fade-up ${checkpointsVis.visible ? 'visible' : ''}`}>
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
                style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Process
              </span>
              <h2
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}
              >
                Our Stage-by-Stage Compliance Checkpoints
              </h2>
              <p
                className="text-sm md:text-base max-w-2xl mx-auto mt-4"
                style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '1.7' }}
              >
                Every production stage is inspector-assigned, checklist-enforced, and requires sign-off before proceeding.
              </p>
            </div>
            <div className={`fade-up ${checkpointsVis.visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <div className="flex justify-center">
                <div className="w-full max-w-[1200px]">
                  {/* Desktop: 4 + 4 grid */}
                  <div className="hidden lg:flex flex-col gap-0">
                    {/* Row 1: steps 1-4 */}
                    <div className="flex items-stretch">
                      {[
                        { step: '01', name: 'Raw Material Inspection', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                        { step: '02', name: 'Cutting', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                        { step: '03', name: 'Pre-production Meeting', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                        { step: '04', name: 'Inline Quality Check', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      ].map((stage, i, arr) => (
                        <div key={stage.step} className="flex-1 flex items-stretch">
                          <div
                            className="flex-1 rounded-xl p-5 flex flex-col"
                            style={{ background: 'var(--c-bg-alt)', border: '1px solid var(--c-border-subtle)' }}
                          >
                            <div className="flex items-center gap-3 mb-5">
                              <span
                                className="text-[10px] tracking-[0.2em] uppercase font-semibold flex-shrink-0"
                                style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                              >
                                {stage.step}
                              </span>
                              <div style={{ height: '1px', flex: 1, background: 'var(--c-border-subtle)' }} />
                            </div>
                            <h4
                              className="text-sm font-bold mb-5"
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)', letterSpacing: '-0.01em' }}
                            >
                              {stage.name}
                            </h4>
                            <div className="space-y-3 flex-1">
                              {stage.checks.map((check) => (
                                <div key={check.label} className="flex items-center gap-2.5">
                                  <div
                                    className="w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0"
                                    style={{ border: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)' }}
                                  >
                                    <i className={`${check.icon} text-[10px]`} style={{ color: 'var(--c-text-muted)' }} />
                                  </div>
                                  <span
                                    className="text-[11px] leading-snug"
                                    style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                  >
                                    {check.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {i < arr.length - 1 && (
                            <div className="flex items-center justify-center w-6 flex-shrink-0">
                              <div className="flex items-center justify-center w-5 h-5 rounded-full" style={{ border: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)' }}>
                                <i className="ri-arrow-right-line text-[10px]" style={{ color: 'var(--c-text-faint)' }} />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {/* Vertical connector between rows */}
                    <div className="flex justify-center py-2">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full" style={{ border: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)' }}>
                        <i className="ri-arrow-down-line text-[10px]" style={{ color: 'var(--c-text-faint)' }} />
                      </div>
                    </div>
                    {/* Row 2: steps 5-8 */}
                    <div className="flex items-stretch">
                      {[
                        { step: '05', name: 'Pre-final Inspection', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                        { step: '06', name: 'Final AQL Inspection', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                        { step: '07', name: 'Packing Inspection', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                        { step: '08', name: 'Dispatch', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      ].map((stage, i, arr) => (
                        <div key={stage.step} className="flex-1 flex items-stretch">
                          <div
                            className="flex-1 rounded-xl p-5 flex flex-col"
                            style={{ background: 'var(--c-bg-alt)', border: '1px solid var(--c-border-subtle)' }}
                          >
                            <div className="flex items-center gap-3 mb-5">
                              <span
                                className="text-[10px] tracking-[0.2em] uppercase font-semibold flex-shrink-0"
                                style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                              >
                                {stage.step}
                              </span>
                              <div style={{ height: '1px', flex: 1, background: 'var(--c-border-subtle)' }} />
                            </div>
                            <h4
                              className="text-sm font-bold mb-5"
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)', letterSpacing: '-0.01em' }}
                            >
                              {stage.name}
                            </h4>
                            <div className="space-y-3 flex-1">
                              {stage.checks.map((check) => (
                                <div key={check.label} className="flex items-center gap-2.5">
                                  <div
                                    className="w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0"
                                    style={{ border: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)' }}
                                  >
                                    <i className={`${check.icon} text-[10px]`} style={{ color: 'var(--c-text-muted)' }} />
                                  </div>
                                  <span
                                    className="text-[11px] leading-snug"
                                    style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                  >
                                    {check.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {i < arr.length - 1 && (
                            <div className="flex items-center justify-center w-6 flex-shrink-0">
                              <div className="flex items-center justify-center w-5 h-5 rounded-full" style={{ border: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)' }}>
                                <i className="ri-arrow-right-line text-[10px]" style={{ color: 'var(--c-text-faint)' }} />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile: stacked flow — all 8 steps */}
                  <div className="lg:hidden flex flex-col gap-0">
                    {[
                      { step: '01', name: 'Raw Material Inspection', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      { step: '02', name: 'Cutting', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      { step: '03', name: 'Pre-production Meeting', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      { step: '04', name: 'Inline Quality Check', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      { step: '05', name: 'Pre-final Inspection', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      { step: '06', name: 'Final AQL Inspection', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      { step: '07', name: 'Packing Inspection', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                      { step: '08', name: 'Dispatch', checks: [{ icon: 'ri-user-line', label: 'Inspector Assigned' }, { icon: 'ri-file-list-3-line', label: 'Checklist Enforced' }, { icon: 'ri-check-double-line', label: 'Sign-off Required' }] },
                    ].map((stage, i, arr) => (
                      <div key={stage.step} className="flex flex-col items-center">
                        <div
                          className="w-full rounded-xl p-5"
                          style={{ background: 'var(--c-bg-alt)', border: '1px solid var(--c-border-subtle)' }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                              style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                              {stage.step}
                            </span>
                            <div style={{ height: '1px', flex: 1, background: 'var(--c-border-subtle)' }} />
                          </div>
                          <h4
                            className="text-sm font-bold mb-4"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)', letterSpacing: '-0.01em' }}
                          >
                            {stage.name}
                          </h4>
                          <div className="space-y-3">
                            {stage.checks.map((check) => (
                              <div key={check.label} className="flex items-center gap-2.5">
                                <div
                                  className="w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0"
                                  style={{ border: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)' }}
                                >
                                  <i className={`${check.icon} text-[10px]`} style={{ color: 'var(--c-text-muted)' }} />
                                </div>
                                <span
                                  className="text-[11px] leading-snug"
                                  style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                >
                                  {check.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="flex items-center justify-center py-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ border: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)' }}>
                              <i className="ri-arrow-down-line text-[10px]" style={{ color: 'var(--c-text-faint)' }} />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={`text-center mt-8 fade-up ${checkpointsVis.visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <p
                className="text-xs md:text-sm"
                style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.05em' }}
              >
                Inspector sign-off mandatory · Digital checklist enforced · Escalation protocol in place
              </p>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section
          className="py-20 lg:py-28"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
        >
          <div ref={policiesVis.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-4 fade-up ${policiesVis.visible ? 'visible' : ''}`}>
              <div>
                <div className="gold-divider mb-5" />
                <h2
                  className="mb-3 leading-tight"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--c-text)' }}
                >
                  Our Policies
                </h2>
                <p
                  className="text-base"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text-muted)' }}
                >
                  Available on request —{' '}
                  <a
                    href="mailto:sen@seyonfashions.com"
                    className="font-semibold transition-colors duration-200 hover:underline"
                    style={{ color: '#111111' }}
                  >
                    sen@seyonfashions.com
                  </a>
                </p>
              </div>
              <Link to="/contact" className="btn-outline whitespace-nowrap flex-shrink-0">
                Request All Documents <i className="ri-arrow-right-up-line" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--c-border-subtle)' }}>
              {policies.map((policy, i) => (
                <div
                  key={policy.title}
                  className={`group flex items-start gap-4 p-7 transition-all duration-300 fade-up ${policiesVis.visible ? 'visible' : ''}`}
                  style={{
                    background: 'var(--c-bg)',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: 'var(--c-bg-alt)', border: '1px solid var(--c-border-subtle)' }}
                  >
                    <i className={`${policy.icon} text-base`} style={{ color: 'var(--c-text-muted)' }} />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm font-semibold mb-3 leading-snug"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}
                    >
                      {policy.title}
                    </p>
                    <Link
                      to="/contact"
                      className="text-[11px] tracking-wider uppercase font-semibold transition-colors duration-200 hover:text-[#111111] whitespace-nowrap"
                      style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      Request Document →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg-deep)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3
                className="mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}
              >
                Request our full compliance documentation.
              </h3>
              <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic' }}>
                Audit reports, certificates and test results available on request.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link to="/contact" className="btn-gold whitespace-nowrap">
                Request Documents <i className="ri-arrow-right-up-line" />
              </Link>
              <Link to="/sustainability" className="btn-ghost whitespace-nowrap">
                Sustainability
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QualityPage;
