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

const services = [
  {
    number: '01',
    icon: 'ri-microscope-line',
    title: 'Research & Development',
    subtitle: 'Where tomorrow\'s styles are born today.',
    description:
      'R&D is an ongoing process embedded into our organisation\'s DNA. A dedicated team constantly scans the international fashion market for emerging designs, fabric innovations, and evolving aesthetics — keeping our clients ahead of the curve.',
    bullets: [
      'Creating fresh and differentiated fabric constructions',
      'Developing styles based on current global trends',
      'New Print Graphics, Washing techniques and Embroidery work',
      'Advanced Styling, Patterning and Garmenting technologies',
    ],
    metric: { value: '180+', label: 'styles per month in R&D and Sampling' },
    image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/8a8210f8-26ed-40d4-ba86-84a763b466f5_Research--Development.webp',
    imageAlt: 'R&D design studio with fabric swatches and trend boards',
  },
  {
    number: '02',
    icon: 'ri-t-shirt-line',
    title: 'Sampling & Proto Development',
    subtitle: 'From tech pack to approval — faster.',
    description:
      'Our in-house sample unit in Tiruppur delivers proto samples within 7 days of tech pack approval. We offer end-to-end sample development services — including digital and 3D garment prototyping — to streamline your design-to-production journey, reduce physical sample rounds, and accelerate buyer sign-off.',
    bullets: [
      'Lab-dip development and colour approval support',
      'Fit samples, size sets, and pre-production samples',
      'Sealed samples with full production-approved standards',
      'Digital / 3D prototyping to reduce physical sample rounds',
      'Digital garment renders for design and fit review',
      'Range building and buyer presentation decks',
    ],
    metric: { value: '7 Days', label: 'Proto Sample Turnaround' },
    image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/b7c5c6f3-7f07-4002-9337-e157a49edd5e_Sampling--Proto-Development.webp',
    imageAlt: 'Sample development studio with dress form and fabric',
  },
  {
    number: '03',
    icon: 'ri-route-line',
    title: 'Merchandising',
    subtitle: 'Precision planning from order to dispatch.',
    description:
      'Price points, shipment lead time and product quality are tightly monitored by our expert merchandising team. We assign dedicated account managers to each customer or brand, ensuring nothing falls through the cracks.',
    bullets: [
      'Dedicated team to plan and execute orders per deadlines',
      'Continuous real-time monitoring & production status updates',
      'Dedicated Merchandising Manager for each Customer/Brand',
      'End-to-end coordination from sampling to final shipment',
    ],
    metric: { value: '98%', label: 'On-Time Delivery Rate' },
    image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/097f672a-080f-4dd4-b329-4509a1746a14_Merchandising.webp',
    imageAlt: 'Merchandising team reviewing garment samples',
  },
  {
    number: '04',
    icon: 'ri-settings-3-line',
    title: 'Production',
    subtitle: 'Vertical integration. Uncompromised quality.',
    description:
      'Our vertically integrated setup synchronises production with merchandising at every stage. From yarn to finished garment, every process happens under one roof — enabling maximum quality control, competitive pricing, and strict social responsibility standards.',
    bullets: [
      'In-house Knitting, Dyeing, Printing, Sewing and Finishing',
      'Competitive pricing with best-in-class finish',
      'Quality control at every stage of production',
      'Full social responsibility and ethical manufacturing',
    ],
    metric: { value: '5M+', label: 'Garments Produced / Year' },
    image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/32468bf8-d095-4f81-82b5-ca016c680910_Production.webp',
    imageAlt: 'Premium garment manufacturing facility',
  },
  {
    number: '05',
    icon: 'ri-ship-line',
    title: 'Logistics & Global Shipping',
    subtitle: 'PO to POD — we own every mile.',
    description:
      'We take full responsibility for your shipment from Purchase Order to Proof of Delivery at your warehouse. With sea and air freight capabilities, a dedicated office in New York for customs clearance, and door delivery anywhere in the world — we handle DDP and LDP shipments with precision and confidence.',
    bullets: [
      'Sea & air freight to any destination worldwide',
      'NYC office for US customs clearance & last-mile delivery',
      'DDP & LDP shipment handling — fully duty-paid delivery',
      'Expert customs navigation to ensure safe, compliant delivery',
    ],
    metric: { value: 'DDP', label: 'Door-to-Door Delivery Worldwide' },
    image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/b4467b68-b6d8-465a-a1cf-cb9a91198ce0_Logistics--Global-Shipping.webp',
    imageAlt: 'International cargo shipping port with freight vessels',
  },
  {
    number: '06',
    icon: 'ri-shield-check-line',
    title: 'Supply Chain Traceability',
    subtitle: 'Every step. Fully documented.',
    description:
      'We provide full chain-of-custody documentation for every certified order. Our traceability practice covers GOTS, OCS, GRS, and RCS certified material streams — with waybill checks, scope certificates, and audit support on all applicable shipments.',
    bullets: [
      'GOTS, OCS, GRS, and RCS certified order support',
      'Waybill checks and scope certificate management',
      'TrusTrace and ERP / SAP integrations on request',
      'Traceability reports available for every certified order',
    ],
    metric: { value: '100%', label: 'Documented Supply Chain' },
    image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/5a9d4563-0b68-485d-b09b-ecd9fa283fec_Supply-Chain-Traceability.webp',
    imageAlt: 'Sustainable supply chain with certified organic materials',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, visible } = useVisible();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={`fade-up flex flex-col ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Number label */}
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-[11px] tracking-[0.3em] uppercase font-medium leading-none"
          style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          {service.number}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--c-border-subtle)' }} />
      </div>

      {/* Card */}
      <div
        className="rounded-2xl flex-1 flex flex-col overflow-hidden group transition-all duration-500"
        style={{ border: '1px solid var(--c-border)', background: 'var(--c-bg-card)' }}
      >
        {/* Contextual Image */}
        <div className="relative w-full overflow-hidden" style={{ height: '240px' }}>
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ background: 'var(--c-bg-deep)', opacity: imgLoaded ? 0 : 1, zIndex: 1 }}
          />
          <img
            src={service.image}
            alt={service.imageAlt}
            onLoad={() => setImgLoaded(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{ display: 'block' }}
          />
          {/* Subtle gradient overlay for text legibility */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.32) 100%)', zIndex: 2 }}
          />
          {/* Icon badge over image */}
          <div
            className="absolute bottom-4 left-5 w-10 h-10 flex items-center justify-center rounded-full"
            style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(201,168,76,0.25)', zIndex: 3 }}
          >
            <i className={`${service.icon} text-base`} style={{ color: '#111111' }} />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col gap-6 flex-1">
          <div>
            <h3
              className="mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}
            >
              {service.title}
            </h3>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic', color: 'var(--c-text-muted)', fontSize: '14px' }}>
              {service.subtitle}
            </p>
          </div>

          <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', lineHeight: '1.8' }}>
            {service.description}
          </p>

          <ul className="flex flex-col gap-2.5 flex-1">
            {service.bullets.filter((b) => b.trim() !== '').map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }} />
                <span style={{ color: 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', lineHeight: '1.75' }}>
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="pt-5 border-t flex items-end justify-between"
            style={{ borderColor: 'var(--c-border-subtle)' }}
          >
            <div>
              <span
                className="text-3xl font-bold block"
                style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.03em' }}
              >
                {service.metric.value}
              </span>
              <span
                className="text-[11px] tracking-widest uppercase"
                style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {service.metric.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const processSteps = [
  {
    number: '01',
    label: 'Inquiry',
    headline: 'It starts with a conversation.',
    body: 'Share your brief, mood board, or tech pack. Our team reviews your requirements and responds within 24 business hours with a tailored proposal.',
    image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/96a9be6a-ad80-4509-aad1-9e69cbbb80ab_Conversation.webp',
    icon: 'ri-mail-open-line',
    accent: '#C9A84C',
  },
  {
    number: '02',
    label: 'Sampling',
    headline: 'Concept becomes cloth.',
    body: 'Our in-house sample unit in Tiruppur develops proto samples within 7 days of tech pack approval — with digital 3D protos available to reduce physical rounds.',
    image: 'https://readdy.ai/api/search-image?query=fashion%20sample%20room%20atelier%20close%20up%20of%20hands%20working%20on%20garment%20prototype%20on%20dress%20form%20white%20fabric%20pinning%20editorial%20luxury%20apparel%20studio%20clean%20bright%20minimal%20neutral%20background%20high%20fashion%20craftsmanship&width=1200&height=700&seq=proc02samp&orientation=landscape',
    icon: 'ri-scissors-cut-line',
    accent: '#C9A84C',
  },
  {
    number: '03',
    label: 'Approval',
    headline: 'Sign off with confidence.',
    body: 'Lab dips, fit samples, and size sets are submitted for your approval. Every detail — colour, construction, measurement — is locked before production begins.',
    image: 'https://readdy.ai/api/search-image?query=fashion%20quality%20approval%20process%20buyer%20reviewing%20garment%20sample%20against%20colour%20swatch%20card%20in%20bright%20studio%20editorial%20photography%20clean%20white%20background%20luxury%20apparel%20brand%20professional%20inspection%20minimal&width=1200&height=700&seq=proc03appr&orientation=landscape',
    icon: 'ri-checkbox-circle-line',
    accent: '#C9A84C',
  },
  {
    number: '04',
    label: 'Production',
    headline: 'Scale without compromise.',
    body: 'Vertically integrated production — knitting, dyeing, printing, sewing, finishing — all under one roof. Every garment is built to the sealed sample standard.',
    image: 'https://readdy.ai/api/search-image?query=modern%20textile%20production%20line%20with%20rows%20of%20precision%20sewing%20machines%20and%20fabric%20bolts%20in%20foreground%20bright%20airy%20factory%20interior%20with%20large%20windows%20natural%20daylight%20illuminating%20organized%20workstations%20clean%20minimal%20industrial%20aesthetic%20editorial%20photography%20warm%20cream%20and%20charcoal%20tonal%20palette%20professional%20garment%20manufacturing%20atmosphere&width=1200&height=700&seq=proc04prod-v3&orientation=landscape',
    icon: 'ri-settings-3-line',
    accent: '#C9A84C',
  },
  {
    number: '05',
    label: 'QC Inspection',
    headline: 'Zero tolerance for defects.',
    body: 'Multi-stage quality control at inline, mid-line, and final inspection. AQL standards applied across every order — with third-party audit support available.',
    image: 'https://readdy.ai/api/search-image?query=garment%20factory%20inline%20quality%20control%20station%20on%20busy%20production%20floor%20female%20QC%20inspector%20in%20white%20uniform%20holding%20finished%20knit%20sweater%20up%20to%20overhead%20daylight%20checking%20seams%20and%20stitching%20industrial%20sewing%20lines%20visible%20in%20soft%20background%20bokeh%20clean%20organized%20factory%20editorial%20photography%20warm%20neutral%20tones%20professional%20textile%20manufacturing&width=1200&height=700&seq=proc05qc-v4&orientation=landscape',
    icon: 'ri-search-eye-line',
    accent: '#C9A84C',
  },
  {
    number: '06',
    label: 'Packing',
    headline: 'Retail-ready from the floor.',
    body: 'Garments are packed to your exact retail specifications — hangtags, polybags, carton marks, and barcode labelling — ready for direct store or warehouse receipt.',
    image: 'https://readdy.ai/api/search-image?query=three%20neat%20stacks%20of%20freshly%20packed%20cotton%20t%20shirts%20and%20fleece%20hoodies%20each%20in%20transparent%20polybag%20with%20visible%20hangtag%20and%20size%20sticker%20arranged%20on%20clean%20wooden%20surface%20in%20bright%20warehouse%20with%20soft%20natural%20window%20light%20retail%20ready%20export%20packaging%20editorial%20photography%20warm%20cream%20and%20ivory%20tones%20professional%20apparel%20logistics&width=1200&height=700&seq=proc06pack-v3&orientation=landscape',
    icon: 'ri-archive-line',
    accent: '#C9A84C',
  },
  {
    number: '07',
    label: 'Customs & Freight',
    headline: 'We navigate every border.',
    body: 'Sea and air freight handled end-to-end. Our New York office manages US customs clearance, documentation, and compliance — DDP and LDP shipments executed with precision.',
    image: 'https://readdy.ai/api/search-image?query=international%20freight%20logistics%20aerial%20view%20of%20cargo%20containers%20at%20port%20with%20large%20shipping%20vessels%20at%20dock%20golden%20hour%20editorial%20photography%20wide%20angle%20commercial%20shipping%20global%20trade%20neutral%20tones&width=1200&height=700&seq=proc07cust&orientation=landscape',
    icon: 'ri-ship-line',
    accent: '#C9A84C',
  },
  {
    number: '08',
    label: 'Door Delivery',
    headline: 'PO to POD. Every time.',
    body: 'From purchase order to proof of delivery at your warehouse — we own every mile. Anywhere in the world, on time, fully documented.',
    image: 'https://readdy.ai/api/search-image?query=professional%20logistics%20delivery%20of%20fashion%20apparel%20boxes%20at%20modern%20warehouse%20loading%20dock%20clean%20organized%20editorial%20photography%20neutral%20tones%20minimal%20commercial%20delivery%20last%20mile%20fulfillment%20luxury%20brand&width=1200&height=700&seq=proc08del&orientation=landscape',
    icon: 'ri-map-pin-2-line',
    accent: '#C9A84C',
  },
];

const ProcessJourney = () => {
  const [active, setActive] = useState(0);
  const [imgLoaded, setImgLoaded] = useState<boolean[]>(processSteps.map(() => false));
  const { ref, visible } = useVisible();

  const handleImgLoad = (i: number) => {
    setImgLoaded((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };

  return (
    <section
      ref={ref}
      className="py-0 overflow-hidden"
      style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg-deep)', transition: 'background 0.4s ease' }}
    >
      {/* Section header */}
      <div className={`max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-14 fade-up ${visible ? 'visible' : ''}`}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span
              className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
              style={{ color: '#C9A84C', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              How It Works
            </span>
            <h2
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                lineHeight: 1.1,
              }}
            >
              From Inquiry<br />to Delivery
            </h2>
          </div>
          <p
            className="max-w-sm"
            style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', lineHeight: '1.8' }}
          >
            Eight precision-engineered steps. One seamless journey — from your first brief to the moment your collection lands at your warehouse door.
          </p>
        </div>
      </div>

      {/* Main visual area */}
      <div className="relative w-full" style={{ minHeight: '560px' }}>
        {/* Background image — full bleed */}
        {processSteps.map((step, i) => (
          <div
            key={step.number}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? 'auto' : 'none' }}
          >
            {/* Skeleton */}
            {!imgLoaded[i] && (
              <div className="absolute inset-0" style={{ background: 'var(--c-bg-deep)' }} />
            )}
            <img
              src={step.image}
              alt={step.label}
              onLoad={() => handleImgLoad(i)}
              className="w-full h-full object-cover object-top"
              style={{ display: 'block', height: '560px' }}
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.12) 100%)' }}
            />
          </div>
        ))}

        {/* Content overlay */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center" style={{ minHeight: '560px' }}>
          <div className="flex flex-col justify-center" style={{ maxWidth: '480px', paddingTop: '48px', paddingBottom: '48px' }}>
            {/* Step badge */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 flex items-center justify-center rounded-full"
                style={{ background: '#C9A84C', flexShrink: 0 }}
              >
                <i className={`${processSteps[active].icon} text-sm`} style={{ color: '#fff' }} />
              </div>
              <span
                className="text-[11px] tracking-[0.3em] uppercase font-semibold"
                style={{ color: '#C9A84C', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Step {processSteps[active].number} — {processSteps[active].label}
              </span>
            </div>

            {/* Headline */}
            <h3
              className="mb-5"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(26px, 3vw, 42px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                lineHeight: 1.15,
              }}
            >
              {processSteps[active].headline}
            </h3>

            {/* Body */}
            <p
              style={{
                color: 'rgba(255,255,255,0.78)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '15px',
                lineHeight: '1.8',
              }}
            >
              {processSteps[active].body}
            </p>

            {/* Prev / Next */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={() => setActive((p) => Math.max(0, p - 1))}
                disabled={active === 0}
                className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.6)',
                  background: active === 0 ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.22)',
                  color: active === 0 ? 'rgba(255,255,255,0.3)' : '#fff',
                  backdropFilter: 'blur(8px)',
                  boxShadow: active === 0 ? 'none' : '0 2px 12px rgba(0,0,0,0.4)',
                }}
              >
                <i className="ri-arrow-left-line text-sm" />
              </button>
              <button
                onClick={() => setActive((p) => Math.min(processSteps.length - 1, p + 1))}
                disabled={active === processSteps.length - 1}
                className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.6)',
                  background: active === processSteps.length - 1 ? 'rgba(0,0,0,0.35)' : '#C9A84C',
                  color: active === processSteps.length - 1 ? 'rgba(255,255,255,0.3)' : '#fff',
                  backdropFilter: 'blur(8px)',
                  boxShadow: active === processSteps.length - 1 ? 'none' : '0 2px 16px rgba(201,168,76,0.5)',
                }}
              >
                <i className="ri-arrow-right-line text-sm" />
              </button>
              <span
                className="ml-2 text-[12px] tracking-widest"
                style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {String(active + 1).padStart(2, '0')} / {String(processSteps.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Step selector strip */}
      <div
        className="w-full overflow-x-auto"
        style={{ background: '#f5f0e8', borderTop: '1px solid rgba(0,0,0,0.08)' }}
      >
        <div className="flex min-w-max mx-auto" style={{ maxWidth: '1400px', padding: '0 48px' }}>
          {processSteps.map((step, i) => (
            <button
              key={step.number}
              onClick={() => setActive(i)}
              className="flex flex-col items-start gap-1.5 py-5 pr-10 transition-all duration-200 cursor-pointer whitespace-nowrap group"
              style={{
                background: 'none',
                outline: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                borderTop: `2px solid ${active === i ? '#C9A84C' : 'rgba(0,0,0,0.15)'}`,
                paddingTop: '18px',
              }}
            >
              <span
                className="text-[10px] tracking-[0.3em] uppercase block mb-1.5"
                style={{ color: active === i ? '#C9A84C' : 'rgba(0,0,0,0.45)', fontFamily: 'Plus Jakarta Sans, sans-serif', transition: 'color 0.2s', minWidth: '100px' }}
              >
                {step.number}
              </span>
              <span
                className="text-[13px] font-semibold block"
                style={{ color: active === i ? '#111111' : 'rgba(0,0,0,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif', transition: 'color 0.2s' }}
              >
                {step.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 200); return () => clearTimeout(t); }, []);

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
                What We Offer
              </span>
            </div>
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '80ms' }}>
              <h1
                className="leading-tight mb-6"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  maxWidth: '700px',
                  color: 'var(--c-text)',
                }}
              >
                Our Services
              </h1>
            </div>
            <div className={`fade-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '160ms' }}>
              <p
                className="text-lg max-w-2xl"
                style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '1.75' }}
              >
                From research and design through to precision merchandising and full-scale production
                — every service we offer is built around one goal: your success in the global market.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-28" style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* 6 cards — clean 3-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <ServiceCard key={service.number} service={service} index={i % 3} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview — Editorial Journey */}
        <ProcessJourney />

        {/* CTA */}
        <section
          className="py-20 lg:py-24"
          style={{ borderTop: '1px solid var(--c-border-subtle)', background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3
                className="mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text)' }}
              >
                Ready to start your next collection?
              </h3>
              <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic' }}>
                Our team responds within 24 business hours.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link to="/contact" className="btn-gold whitespace-nowrap">
                Request a Quote <i className="ri-arrow-right-up-line" />
              </Link>
              <Link to="/capabilities" className="btn-ghost whitespace-nowrap">
                View Capabilities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
