import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useTheme } from '../../contexts/ThemeContext';

const productCategories = [
  'Mens Wear', 'Womens Wear', 'Kids Wear', 'Inner Wear', 'Home Textile', 'Fabrics', 'Other',
];

const purposeOptions = [
  'Manufacturing Inquiry / RFQ',
  'Bulk or Custom Orders',
  'Sampling Request',
  'Partnership Opportunity',
  'Sustainability / ESG Documentation Request',
  'Careers',
  'Others',
];

const contactPaths = [
  {
    key: 'source',
    label: 'SOURCE WITH US',
    icon: 'ri-shopping-bag-3-line',
    tagline: 'For brands & retailers',
    desc: 'Submit your RFQ, tech pack, or sourcing brief. Use the form below to get started.',
    cta: 'Use the form below',
    ctaAnchor: '#rfq-form',
    ctaExternal: false,
  },
  {
    key: 'produce',
    label: 'PRODUCE WITH US',
    icon: 'ri-tools-line',
    tagline: 'For mills, trim suppliers & logistics',
    desc: 'Fabric mills, trim suppliers, or logistics partners — reach out directly.',
    cta: 'sen@seyonfashions.com',
    ctaAnchor: 'mailto:sen@seyonfashions.com',
    ctaExternal: true,
  },
  {
    key: 'work',
    label: 'WORK WITH US',
    icon: 'ri-user-star-line',
    tagline: 'Career opportunities',
    desc: 'Join the Seyon Fashions team. View open roles or send us your profile.',
    cta: 'Reach out via email',
    ctaAnchor: 'mailto:sen@seyonfashions.com',
    ctaExternal: true,
  },
];

const ContactPage = () => {
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new URLSearchParams();
    const fields = ['name', 'company', 'country', 'email', 'purpose', 'category', 'quantity', 'fabric', 'delivery', 'message'];
    fields.forEach((f) => {
      const el = form.elements.namedItem(f) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
      if (el) data.append(f, el.value);
    });
    try {
      await fetch('https://readdy.ai/api/form/d6usvbdt4s7j0tv5i94g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
    } catch {
      // silently handle
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle = {
    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.12)'}`,
    color: isDark ? '#fff' : '#1A1A1A',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    borderRadius: '8px',
    padding: '12px 16px',
    transition: 'border-color 0.2s ease',
  } as const;

  const labelStyle = {
    color: 'var(--c-text-muted)',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    fontWeight: 600,
  };

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh', transition: 'background 0.4s ease' }}>
      <Navbar />
      <main>
        {/* ─── Hero ─── */}
        <section
          className="pt-40 pb-20"
          style={{
            background: 'linear-gradient(to bottom, var(--c-bg-deep), var(--c-bg))',
            borderBottom: '1px solid var(--c-border-subtle)',
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <span
              className="text-[11px] tracking-[0.35em] uppercase font-medium block mb-4"
              style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Contact &amp; RFQ
            </span>
            <h1
              className="leading-tight mb-5"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(34px, 4.5vw, 60px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                maxWidth: '780px',
                color: 'var(--c-text)',
              }}
            >
              Let&apos;s Build Something<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--c-text-sec)' }}>Exceptional Together</em>
            </h1>
            <p
              className="text-base max-w-xl"
              style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '1.8' }}
            >
              Trusted by <strong style={{ color: 'var(--c-text)' }}>40+ global brands</strong> across{' '}
              <strong style={{ color: 'var(--c-text)' }}>18+ countries.</strong> We respond to every inquiry within 24 business hours.
            </p>

            {/* WhatsApp primary CTA */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/919865923332"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm whitespace-nowrap cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '0.02em',
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-base" />
                </div>
                Chat on WhatsApp
              </a>
              <a
                href="#rfq-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm whitespace-nowrap cursor-pointer transition-all duration-200"
                style={{
                  border: '1px solid rgba(17,17,17,0.22)',
                  color: 'var(--c-text)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '0.02em',
                }}
              >
                Submit an RFQ
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-down-line text-sm" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ─── Three Contact Paths ─── */}
        <section className="py-16" style={{ background: 'var(--c-bg-deep)', borderBottom: '1px solid var(--c-border-subtle)' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p
              className="text-[11px] tracking-[0.3em] uppercase font-semibold mb-8"
              style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              How can we help?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {contactPaths.map((path) => (
                <div
                  key={path.key}
                  className="rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    border: '1px solid var(--c-border)',
                    background: 'var(--c-bg-card)',
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl"
                    style={{ background: 'rgba(17,17,17,0.06)', border: '1px solid rgba(17,17,17,0.12)' }}
                  >
                    <i className={`${path.icon} text-xl`} style={{ color: 'var(--c-text)' }} />
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-[0.2em] uppercase font-bold mb-1"
                      style={{ color: 'var(--c-text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {path.label}
                    </p>
                    <p className="text-[11px] uppercase tracking-widest mb-3" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {path.tagline}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {path.desc}
                    </p>
                  </div>
                  {path.ctaExternal ? (
                    <a
                      href={path.ctaAnchor}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto cursor-pointer transition-colors hover:opacity-80 whitespace-nowrap"
                      style={{ color: 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {path.cta}
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-arrow-right-up-line text-xs" />
                      </div>
                    </a>
                  ) : (
                    <a
                      href={path.ctaAnchor}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto cursor-pointer transition-colors hover:opacity-80 whitespace-nowrap"
                      style={{ color: 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {path.cta}
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-arrow-down-line text-xs" />
                      </div>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RFQ Form + Contact Info ─── */}
        <section id="rfq-form" className="py-20 lg:py-24" style={{ background: 'var(--c-bg)' }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div
                  className="rounded-2xl p-12 flex flex-col items-center justify-center text-center gap-6"
                  style={{ border: '1px solid rgba(17,17,17,0.12)', background: 'rgba(17,17,17,0.03)', minHeight: '400px' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(17,17,17,0.06)', border: '1px solid rgba(17,17,17,0.15)' }}
                  >
                    <i className="ri-check-line text-2xl" style={{ color: 'var(--c-text)' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}>
                      Request Received
                    </h3>
                    <p style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontStyle: 'italic' }}>
                      Thank you. Our team will reach out within 24 business hours.
                    </p>
                  </div>
                  <Link to="/catalog" className="btn-ghost">
                    Browse Our Catalog
                  </Link>
                </div>
              ) : (
                <form data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="mb-1">
                    <h2 className="text-xl font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}>
                      Request for Quote
                    </h2>
                    <p className="text-sm" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      Fill in the details below and we&apos;ll respond within 24 business hours.
                    </p>
                  </div>

                  {/* Purpose */}
                  <div className="flex flex-col gap-2">
                    <label style={labelStyle}>Purpose *</label>
                    <select name="purpose" required style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select purpose of inquiry</option>
                      {purposeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Full Name *</label>
                      <input name="name" required type="text" placeholder="Jane Smith" style={inputStyle} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Company *</label>
                      <input name="company" required type="text" placeholder="Your Brand or Agency" style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Country *</label>
                      <input name="country" required type="text" placeholder="United States" style={inputStyle} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Email *</label>
                      <input name="email" required type="email" placeholder="jane@brand.com" style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Product Category</label>
                      <select name="category" style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Quantity (pcs)</label>
                      <input name="quantity" type="text" placeholder="e.g. 5,000 pcs" style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Fabric</label>
                      <input name="fabric" type="text" placeholder="e.g. 100% Cotton, 180 GSM" style={inputStyle} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={labelStyle}>Required Delivery Date</label>
                      <input name="delivery" type="text" placeholder="e.g. Q3 2026" style={inputStyle} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label style={labelStyle}>Message / Style Details</label>
                      <span
                        className="text-[11px]"
                        style={{ color: charCount > 450 ? 'var(--c-text)' : 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {charCount}/500
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      maxLength={500}
                      placeholder="Describe your garment style, any special requirements, tech pack details, or questions..."
                      onChange={(e) => setCharCount(e.target.value.length)}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label style={labelStyle}>Tech Pack</label>
                    <p
                      className="text-[13px] px-4 py-3 rounded-lg"
                      style={{ background: 'var(--c-bg-card)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      Please email your tech pack directly to{' '}
                      <a href="mailto:sen@seyonfashions.com" className="hover:text-[#111111] transition-colors" style={{ color: 'var(--c-text-sec)' }}>
                        sen@seyonfashions.com
                      </a>{' '}
                      and reference your company name.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold justify-center mt-2 whitespace-nowrap"
                    style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                  >
                    {submitting ? 'Sending…' : 'Submit Request for Quote'}
                    <i className="ri-arrow-right-up-line" />
                  </button>

                  <p className="text-[12px] text-center" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    We respond within 24 business hours.
                  </p>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* WhatsApp prominent card */}
              <a
                href="https://wa.me/919865923332"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(37,211,102,0.12) 0%, rgba(37,211,102,0.04) 100%)',
                  border: '1px solid rgba(37,211,102,0.25)',
                }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{ background: '#25D366' }}
                >
                  <i className="ri-whatsapp-line text-2xl" style={{ color: '#fff' }} />
                </div>
                <div>
                  <p className="font-bold text-base mb-0.5" style={{ color: 'var(--c-text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Chat on WhatsApp
                  </p>
                  <p className="text-sm" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Fastest way to reach us — typically reply within the hour during business hours.
                  </p>
                </div>
              </a>

              <div
                className="rounded-2xl p-8 flex flex-col gap-6"
                style={{ border: '1px solid var(--c-border)', background: 'var(--c-bg-card)' }}
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}>
                    Get in Touch
                  </h3>
                  <span className="text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ background: 'rgba(17,17,17,0.06)', color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    🇮🇳 India HQ
                  </span>
                </div>
                <div className="flex flex-col gap-5">
                  <a href="mailto:sen@seyonfashions.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'rgba(17,17,17,0.05)', border: '1px solid rgba(17,17,17,0.10)' }}>
                      <i className="ri-mail-line" style={{ color: 'var(--c-text)' }} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-widest uppercase mb-1" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Email</p>
                      <p className="text-sm group-hover:text-[#111111] transition-colors" style={{ color: 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>sen@seyonfashions.com</p>
                    </div>
                  </a>
                  <a href="tel:+919865923332" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'rgba(17,17,17,0.05)', border: '1px solid rgba(17,17,17,0.10)' }}>
                      <i className="ri-phone-line" style={{ color: 'var(--c-text)' }} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-widest uppercase mb-1" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Mobile</p>
                      <p className="text-sm group-hover:text-[#111111] transition-colors" style={{ color: 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>+91 98659 23332</p>
                      <p className="text-sm mt-0.5" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>0421 – 4542468</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'rgba(17,17,17,0.05)', border: '1px solid rgba(17,17,17,0.10)' }}>
                      <i className="ri-map-pin-line" style={{ color: 'var(--c-text)' }} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-widest uppercase mb-1" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Address</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Mr. Senthil — Seyon Fashions<br />
                        Sakthi Garden, No.2, Vinayagapuram,<br />
                        4th Street, Rayapuram Extn,<br />
                        Tirupur, Tamil Nadu, India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* New York Office */}
              <div
                className="rounded-2xl p-8 flex flex-col gap-6"
                style={{ border: '1px solid var(--c-border)', background: 'var(--c-bg-card)' }}
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}>
                    New York Office
                  </h3>
                  <span className="text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ background: 'rgba(17,17,17,0.06)', color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    🇺🇸 USA
                  </span>
                </div>
                <div className="flex flex-col gap-5">
                  <a href="mailto:sourcing@seyonfashions.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'rgba(17,17,17,0.05)', border: '1px solid rgba(17,17,17,0.10)' }}>
                      <i className="ri-mail-line" style={{ color: 'var(--c-text)' }} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-widest uppercase mb-1" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Email</p>
                      <p className="text-sm group-hover:text-[#111111] transition-colors" style={{ color: 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>sourcing@seyonfashions.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'rgba(17,17,17,0.05)', border: '1px solid rgba(17,17,17,0.10)' }}>
                      <i className="ri-map-pin-line" style={{ color: 'var(--c-text)' }} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-widest uppercase mb-1" style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Address</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-sec)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        345, 7th Av,<br />
                        New York, 10001,<br />
                        USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden" style={{ height: '240px', border: '1px solid var(--c-border)' }}>
                <iframe
                  title="Seyon Fashions Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62656.40695568832!2d77.31317839999999!3d11.1035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907cbec685f93%3A0xf4dcb47c7b10f69!2sTiruppur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Response promise */}
              <div
                className="rounded-xl p-5 flex items-center gap-4"
                style={{ background: 'rgba(17,17,17,0.04)', border: '1px solid rgba(17,17,17,0.10)' }}
              >
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-xl" style={{ color: 'var(--c-text)' }} />
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  <strong style={{ color: 'var(--c-text)' }}>We respond within 24 business hours</strong> to every
                  request — no matter the order size. A Govt. of India Recognised Star Export House.
                </p>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
