import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Services', href: '/services' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Quality & Compliance', href: '/quality' },
  ],
  Products: [
    { label: 'Mens Wear', href: '/catalog' },
    { label: 'Womens Wear', href: '/catalog' },
    { label: 'Kids Wear', href: '/catalog' },
    { label: 'Inner Wear', href: '/catalog' },
    { label: 'Home Textile', href: '/catalog' },
    { label: 'Fabrics', href: '/catalog' },
  ],
  Garments: [
    { label: 'T-Shirts & Polos', href: '/catalog' },
    { label: 'Sweatshirts', href: '/catalog' },
    { label: 'Joggers', href: '/catalog' },
    { label: 'Pyjamas', href: '/catalog' },
    { label: 'Leggings', href: '/catalog' },
    { label: 'Rompers', href: '/catalog' },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      const body = new URLSearchParams({ email });
      await fetch('https://readdy.ai/api/form/d6ue3vedp0k8rarn7k6g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <footer style={{ background: 'var(--c-bg-deep)' }}>
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <div className="flex flex-col mb-8">
              <span
                className="text-2xl font-semibold tracking-[0.18em] uppercase"
                style={{ color: 'var(--c-text)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                SEYON
              </span>
              <span
                className="text-[11px] tracking-[0.4em] uppercase font-light"
                style={{ color: 'var(--c-text-faint)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                FASHIONS
              </span>
            </div>
            <p
              className="text-[15px] leading-relaxed mb-8 max-w-xs"
              style={{ color: 'var(--c-text-muted)', fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}
            >
              45 years of making the world&apos;s finest apparel. Vertically integrated, globally trusted.
            </p>
            <div className="flex flex-col gap-3 text-sm" style={{ color: 'var(--c-text-sec)' }}>
              <a
                href="mailto:sen@seyonfashions.com"
                className="transition-colors duration-200 flex items-center gap-2 hover:text-[#111111]"
              >
                <i className="ri-mail-line" style={{ color: '#111111' }} /> sen@seyonfashions.com
              </a>
              <a
                href="tel:+919865923332"
                className="transition-colors duration-200 flex items-center gap-2 hover:text-[#111111]"
              >
                <i className="ri-phone-line" style={{ color: '#111111' }} /> +91 98659 23332
              </a>
              <a
                href="https://wa.me/919865923332"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="transition-colors duration-200 flex items-center gap-2 hover:text-[#111111]"
              >
                <i className="ri-whatsapp-line" style={{ color: '#111111' }} /> WhatsApp Us
              </a>
              <span className="flex items-start gap-2">
                <i className="ri-map-pin-line mt-0.5" style={{ color: '#111111' }} />
                Sakthi Garden, No.2, Vinayagapuram,<br />4th St, Rayapuram Extn,<br />Tirupur, Tamil Nadu, India.
              </span>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-2">
              <h4
                className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ color: 'var(--c-text-faint)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[14px] transition-colors duration-200 hover:text-[#111111]"
                      style={{ color: 'var(--c-text-muted)', fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter col */}
          <div className="lg:col-span-4">
            <h4
              className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: 'var(--c-text-faint)', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Stay Updated
            </h4>
            <p className="text-[14px] mb-5" style={{ color: 'var(--c-text-muted)' }}>
              Sourcing insights, industry trends &amp; factory updates.
            </p>
            {submitted ? (
              <div
                className="text-sm py-3 px-4 rounded-full"
                style={{ background: 'rgba(0,0,0,0.06)', color: '#111111', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Thank you — you&apos;re on the list.
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleNewsletter} className="flex items-center gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  className="flex-1 rounded-full px-4 h-11 text-sm focus:outline-none transition-colors"
                  style={{
                    background: 'var(--c-bg-card)',
                    border: '1px solid var(--c-border)',
                    color: 'var(--c-text)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                  }}
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-105"
                  style={{ background: '#111111', cursor: 'pointer' }}
                  aria-label="Subscribe"
                >
                  <i className="ri-arrow-right-line text-white text-base" />
                </button>
              </form>
            )}

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              {['ri-linkedin-fill', 'ri-instagram-line', 'ri-twitter-x-line'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  rel="nofollow noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:border-black/40 hover:text-[#111111]"
                  style={{ border: '1px solid var(--c-border)', color: 'var(--c-text-faint)' }}
                >
                  <i className={`${icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--c-border-subtle)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: 'var(--c-text-faint)', fontFamily: 'Inter, sans-serif' }}>
            &copy; {new Date().getFullYear()} Seyon Fashions. All rights reserved.
          </p>
          <p
            className="text-[12px] tracking-[0.06em]"
            style={{ color: 'var(--c-text-ultrafaint)', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            TIRUPPUR · INDIA · EST. 1980
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
