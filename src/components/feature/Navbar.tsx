import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Products', href: '/catalog' },
  { label: 'Services', href: '/services' },
  { label: 'Quality', href: '/quality' },
  { label: 'Sustainability', href: '/sustainability' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`nav-glass fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span
            className="text-xl font-semibold tracking-[0.15em] uppercase"
            style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            SEYON
          </span>
          <span
            className="text-[11px] tracking-[0.32em] uppercase font-light"
            style={{ color: '#111111', opacity: 0.5, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            FASHIONS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[13px] font-semibold tracking-[0.04em] uppercase transition-colors duration-200"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                color: location.pathname === link.href ? '#111111' : 'rgba(17,17,17,0.55)',
                borderBottom: location.pathname === link.href ? '1.5px solid #111111' : '1.5px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919865923332"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:opacity-85 cursor-pointer"
            style={{ background: '#25D366', color: '#fff' }}
            aria-label="Chat on WhatsApp"
          >
            <i className="ri-whatsapp-line" style={{ fontSize: '18px', lineHeight: 1 }} />
          </a>

          <Link to="/contact" className="btn-gold text-[13px]">
            Request a Quote
            <i className="ri-arrow-right-up-line text-base" />
          </Link>
        </div>

        {/* Mobile: WhatsApp + Contact CTA + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919865923332"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
            style={{
              background: '#25D366',
              color: '#fff',
            }}
            aria-label="Chat on WhatsApp"
          >
            <i className="ri-whatsapp-line" style={{ fontSize: '18px', lineHeight: 1 }} />
          </a>

          {/* Request a Quote */}
          <Link
            to="/contact"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.03em] uppercase whitespace-nowrap transition-all duration-200"
            style={{
              background: '#111111',
              color: '#FFFFFF',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          >
            Quote
            <i className="ri-arrow-right-up-line" style={{ fontSize: '13px' }} />
          </Link>

          {/* Hamburger */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
            style={{
              background: menuOpen ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.10)',
              cursor: 'pointer',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}
              style={{ fontSize: '20px', color: '#111111', lineHeight: 1 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden border-t px-6 pb-6"
          style={{ background: '#FFFFFF', borderTopColor: 'rgba(0,0,0,0.07)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block py-4 text-sm tracking-[0.04em] uppercase border-b transition-colors font-semibold"
              style={{
                color: location.pathname === link.href ? '#111111' : 'rgba(17,17,17,0.60)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                borderBottomColor: 'rgba(0,0,0,0.07)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold mt-6 w-full justify-center text-[13px]">
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
