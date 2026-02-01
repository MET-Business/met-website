import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

type Trend = 'up' | 'down' | 'neutral' | 'baseline' | 'fast';

export default function HomeElite() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = window.setTimeout(() => setIsVisible(true), 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timer);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="flex flex-col">
      <Seo
        title="Home"
        description="MET is Nairobi's nightlife transport operator built for late-night reliability, safety, and premium group movement."
      />

      <section
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-ink via-charcoal to-ink"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(202,162,74,0.15),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(202,162,74,0.08),transparent_40%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="flex flex-col gap-8">
              <div
                className={`flex flex-wrap gap-3 transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <span className="badge-elite">Nairobi Night Operations</span>
                <span className="badge-elite animation-delay-100">Thu-Sun - 5 PM-5 AM</span>
                <span className="badge-elite animation-delay-200">Westlands - Kilimani - Ngong Road</span>
              </div>

              <div className="space-y-4">
                <h1
                  className={`font-display text-5xl font-bold leading-[1.1] tracking-tight text-offwhite md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  Night Transport,{' '}
                  <span className="bg-gradient-to-r from-gold via-[#d4af5f] to-gold bg-clip-text text-transparent">
                    Engineered
                  </span>
                  <br />
                  for Nairobi&apos;s Night Economy
                </h1>

                <p
                  className={`max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl transition-all duration-1000 delay-400 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  Ministry of Enjoyment Taxi (MET) is a nightlife-focused transport operator designed for late-night
                  reliability, safety, and premium group movement where conventional ride-hailing systems fall short.
                </p>
              </div>

              <ul
                className={`space-y-3 text-base text-offwhite/70 transition-all duration-1000 delay-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  Controlled fleet access (leased/partner vehicles)
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  Professionally vetted night-shift drivers
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  Fixed operating windows and defined zones
                </li>
              </ul>

              <div
                className={`flex flex-wrap gap-4 transition-all duration-1000 delay-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-elite-primary group">
                  <span>Book via WhatsApp</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24">
                    <path
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </a>
                <Link to="/book?intent=partner" className="button-elite-secondary">
                  Investor / Partner Inquiry
                </Link>
              </div>
            </div>

            <div
              className={`flex items-center transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="card-elite w-full">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">MET Snapshot</h3>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-gold shadow-[0_0_12px_rgba(202,162,74,0.6)]" />
                </div>

                <div className="space-y-6">
                  <StatItem label="Operating Hours" value="Thu-Sun, 5 PM-5 AM" delay={1200} isVisible={isVisible} />
                  <StatItem label="Coverage Zones" value="3 Premium Areas" delay={1400} isVisible={isVisible} />
                  <StatItem label="Fleet Status" value="Pilot Active" delay={1600} isVisible={isVisible} />
                  <StatItem label="Safety Record" value="100% Vetted Drivers" delay={1800} isVisible={isVisible} />
                </div>

                <div className="mt-8 rounded-xl border border-gold/20 bg-gold/5 p-4">
                  <p className="text-sm text-offwhite/70">
                    Premium, reliable group movement during peak risk hours with concierge booking and controlled
                    dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-offwhite/40" viewBox="0 0 24 24">
            <path
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </section>

      <section className="section-elite bg-gradient-to-b from-ink to-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <div className="space-y-4">
              <p className="section-subtitle-elite">The Problem</p>
              <h2 className="section-title-elite">The Night Transport Gap</h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-offwhite/80">
                After 9 PM, ride availability declines, surge pricing becomes unpredictable, and drivers selectively
                avoid certain trips. Large ride-hailing platforms optimize for daytime volume, not late-night security
                risk, group logistics, or event-driven demand spikes.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <ProblemCard
                  icon={<AlertIcon />}
                  title="Availability Crisis"
                  description="Declining driver presence after 9 PM"
                />
                <ProblemCard icon={<CurrencyIcon />} title="Surge Chaos" description="Unpredictable pricing spikes" />
                <ProblemCard icon={<ShieldOffIcon />} title="Selective Service" description="Drivers avoiding high-risk trips" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-elite">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="section-subtitle-elite">MET's Solution</p>
            <h2 className="section-title-elite">A Focused Operator, Not a Ride-Hailing App</h2>
          </div>

          <div className="bento-grid">
            <div className="card-elite-feature lg:col-span-2 lg:row-span-2">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 inline-block rounded-full bg-gold/10 p-3">
                    <ShieldCheckIcon />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">Controlled Operations</h3>
                  <p className="mb-6 text-base text-offwhite/70">
                    Fixed operating hours, defined nightlife zones, and transparent pricing logic replace the chaos of
                    algorithmic dispatch.
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-offwhite/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold">-&gt;</span>
                    Thu-Sun, 5 PM-5 AM operating window
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold">-&gt;</span>
                    Westlands, Kilimani, Ngong Road focus
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold">-&gt;</span>
                    Fixed or semi-fixed pricing (no surge surprises)
                  </li>
                </ul>
              </div>
            </div>

            <SolutionCard
              icon={<CarIcon />}
              title="Asset-Light Fleet"
              description="Leased or garage-partner vehicles with brand consistency and maintenance standards. Scalable without heavy asset risk."
            />
            <SolutionCard
              icon={<UsersIcon />}
              title="Professional Drivers"
              description="Vetted and trained for nightlife conditions with reliability incentives and clear safety procedures."
            />
          </div>
        </div>
      </section>

      <section className="section-elite bg-gradient-to-br from-charcoal via-ink to-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="section-subtitle-elite">Unit Economics</p>
            <h2 className="section-title-elite">Built for Early Profitability</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <MetricCard label="Pilot Fleet" value="2-3" unit="vehicles" trend="baseline" />
            <MetricCard label="Monthly Revenue" value="1.0M+" unit="KES" trend="up" />
            <MetricCard label="Operating Cost" value="875K" unit="KES/mo" trend="neutral" />
            <MetricCard label="Target Margin" value="18-20" unit="%" trend="up" />
            <MetricCard label="Break-Even" value="2-3" unit="months" trend="fast" />
          </div>

          <p className="mt-8 text-center text-xs text-offwhite/50">
            Metrics represent pilot assumptions and disciplined utilization targets.
          </p>
        </div>
      </section>

      <section className="section-elite">
        <div className="mx-auto max-w-5xl px-6">
          <div className="card-elite-cta">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Predictability in the Most Unpredictable Hours
              </h2>
              <p className="mb-8 text-lg text-offwhite/70">
                Whether you are moving people or deploying capital, MET is built to deliver control, safety, and
                consistent service during Nairobi's peak nightlife hours.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-elite-primary">
                  Book via WhatsApp
                </a>
                <Link to="/book?intent=partner" className="button-elite-secondary">
                  Partner / Invest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({
  label,
  value,
  delay,
  isVisible,
}: {
  label: string;
  value: string;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div
      className="transition-all duration-700"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
      }}
    >
      <p className="mb-1 text-xs uppercase tracking-wider text-offwhite/50">{label}</p>
      <p className="text-lg font-semibold text-offwhite">{value}</p>
    </div>
  );
}

function ProblemCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-ink/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/10 hover:bg-ink/80">
      <div className="mb-2 text-2xl text-gold">{icon}</div>
      <h4 className="mb-1 text-sm font-semibold text-offwhite">{title}</h4>
      <p className="text-xs text-offwhite/60">{description}</p>
    </div>
  );
}

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card-elite">
      <div className="mb-4 text-3xl text-gold">{icon}</div>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-offwhite/70">{description}</p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  unit,
  trend,
}: {
  label: string;
  value: string;
  unit: string;
  trend: Trend;
}) {
  const trendColors: Record<Trend, string> = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-offwhite/50',
    baseline: 'text-gold',
    fast: 'text-emerald-400',
  };

  return (
    <div className="card-elite text-center">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-offwhite/50">{label}</p>
      <p className="mb-1 text-3xl font-bold text-offwhite">{value}</p>
      <p className={`text-xs ${trendColors[trend]}`}>{unit}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-gold" viewBox="0 0 24 24">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24">
      <path
        d="M12 9v4m0 4h.01M10.29 3.86l-7 12.12A1.5 1.5 0 0 0 4.5 18h15a1.5 1.5 0 0 0 1.3-2.25l-7-12.12a1.5 1.5 0 0 0-2.6 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CurrencyIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24">
      <path
        d="M12 6v12m4-10H9.5a2.5 2.5 0 1 0 0 5H14a2.5 2.5 0 1 1 0 5H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ShieldOffIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24">
      <path
        d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 19L19 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg className="h-8 w-8 text-gold" viewBox="0 0 24 24">
      <path
        d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg className="h-9 w-9" viewBox="0 0 24 24">
      <path
        d="M3 13l2-6a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 7l2 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 13h14v5a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H11a2 2 0 1 1-4 0H6a1 1 0 0 1-1-1v-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-9 w-9" viewBox="0 0 24 24">
      <path
        d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4 20a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
