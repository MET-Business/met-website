import { Link, NavLink } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';
import ThemeToggle from './ThemeToggle';

type NavLinkItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navLinks: NavLinkItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/partners', label: 'Partners' },
  { to: '/book', label: 'Book' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs font-display font-semibold tracking-[0.18em] uppercase transition-colors duration-200 ${
      isActive
        ? 'text-[color:var(--text-primary)]'
        : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Link to="/" className="flex items-center gap-2.5" aria-label="MET Home">
            <img
              src="/METlogo.png"
              alt="MET logo"
              className="h-10 w-auto no-invert"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navLinks.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[color:var(--text-muted)] text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] transition-colors" />
            <a
              href={buildWhatsAppUrl(BOOKING_MESSAGE)}
              className="button-primary"
              aria-label="Book a ride via WhatsApp"
            >
              <span>Book Now</span>
            </a>
          </div>

          <button
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            type="button"
          >
            <span className="block w-5 h-0.5 bg-[color:var(--text-primary)] rounded-full transition-all duration-300" />
            <span className="block w-5 h-0.5 bg-[color:var(--text-primary)] rounded-full transition-all duration-300" />
            <span className="block w-3.5 h-0.5 bg-[color:var(--text-muted)] rounded-full transition-all duration-300" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <>
          <div className="mobile-nav-overlay" onClick={closeMobile} aria-hidden="true" />
          <aside
            id="mobile-nav"
            className="mobile-nav-panel"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <button
              onClick={closeMobile}
              className="self-end mb-4 text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] transition-colors"
              aria-label="Close menu"
              type="button"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `block font-display font-semibold tracking-[0.15em] uppercase text-sm transition-colors duration-200 px-3 py-2.5 rounded-lg ${
                    isActive
                      ? 'text-[color:var(--text-primary)] bg-white/5'
                      : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <a
              href={buildWhatsAppUrl(BOOKING_MESSAGE)}
              className="button-primary mt-4 self-start"
              onClick={closeMobile}
            >
              <span>Book Now</span>
            </a>

            <ThemeToggle className="mt-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-[color:var(--text-muted)] text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] transition-colors" />
          </aside>
        </>
      )}
    </>
  );
}

