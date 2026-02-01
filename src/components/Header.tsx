import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

const navLinkBase =
  'text-sm uppercase tracking-[0.18em] text-offwhite/70 hover:text-offwhite transition-colors';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-white/10 bg-ink/80 backdrop-blur-elite shadow-glow-sm' : 'border-white/5 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            src="/METlogo.png"
            alt="MET logo"
            className="h-12 w-auto"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" end className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            Experience
          </NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            How It Works
          </NavLink>
          <NavLink to="/partners" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            Partners
          </NavLink>
          <NavLink to="/book" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            Book
          </NavLink>
        </nav>

        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={buildWhatsAppUrl(BOOKING_MESSAGE)}
          className="hidden rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-offwhite transition-all hover:border-gold hover:bg-gold/20 md:inline-block"
        >
          Book via WhatsApp
        </motion.a>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-6 pb-4 md:hidden">
        <NavLink to="/" end className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          Experience
        </NavLink>
        <NavLink to="/how-it-works" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          How It Works
        </NavLink>
        <NavLink to="/partners" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          Partners
        </NavLink>
        <NavLink to="/book" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          Book
        </NavLink>
        <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-elite-primary">
          Book via WhatsApp
        </a>
      </div>
    </motion.header>
  );
}
