import { Link } from 'react-router-dom';
import { operatingInfo } from '../config/site';

type FooterLink = {
  to: string;
  label: string;
};

const footerLinks: FooterLink[] = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/partners', label: 'Partners' },
  { to: '/book', label: 'Book' },
];

export default function Footer() {
  return (
    <footer className="relative mt-20" role="contentinfo">
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(177,75,244,0.4), rgba(0,210,255,0.3), transparent)',
        }}
      />

      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <img src="/METlogo.png" alt="MET" className="h-12 w-auto max-w-[300px] object-contain opacity-80 no-invert" />
            <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
              Ministry of Enjoyment Taxi - Nairobi's nightlife transport operator.
              Built for reliability, safety, and premium group movement after dark.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-display font-bold tracking-[0.22em] uppercase text-[color:var(--text-secondary)]">Pages</h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-1.5">
                {footerLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-display font-bold tracking-[0.22em] uppercase text-[color:var(--text-secondary)]">Operations</h3>
            <ul className="flex flex-col gap-1.5 text-xs text-[color:var(--text-muted)]">
              <li>
                <span className="text-[color:var(--text-secondary)]">Days:</span> {operatingInfo.days}
              </li>
              <li>
                <span className="text-[color:var(--text-secondary)]">Hours:</span> {operatingInfo.hours}
              </li>
              <li>
                <span className="text-[color:var(--text-secondary)]">Zones:</span> {operatingInfo.zones.join(' - ')}
              </li>
            </ul>
            <p className="mt-2 text-[0.67rem] text-[color:var(--text-muted)] leading-relaxed">
              Driver vetting and safety escalation protocols are enforced during operating hours.
              Service availability depends on operating zones and hours.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 border-t border-white/6 pt-6">
          <p className="text-[0.65rem] text-[color:var(--text-muted)]">
            (c) {new Date().getFullYear()} Ministry of Enjoyment Taxi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
