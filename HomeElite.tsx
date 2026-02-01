import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

export default function HomeElite() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect calculation
  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="flex flex-col">
      <Seo
        title="Home"
        description="MET is Nairobi's nightlife transport operator built for late-night reliability, safety, and premium group movement."
      />

      {/* Hero Section - Immersive Full Height */}
      <section 
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-ink via-charcoal to-ink"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* Animated Background Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Radial Glow Effect */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(202,162,74,0.15),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(202,162,74,0.08),transparent_40%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex flex-col gap-8">
              {/* Animated Badge Group */}
              <div 
                className={`flex flex-wrap gap-3 transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <span className="badge-elite">Nairobi Night Operations</span>
                <span className="badge-elite animation-delay-100">Thu–Sun • 5PM–5AM</span>
                <span className="badge-elite animation-delay-200">Westlands • Kilimani • Ngong Road</span>
              </div>

              {/* Main Heading with Stagger Animation */}
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
                  for Nairobi's Night Economy
                </h1>
                
                <p 
                  className={`max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl transition-all duration-1000 delay-400 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  Ministry of Enjoyment Taxi (MET) is a nightlife-focused transport operator designed for 
                  late-night reliability, safety, and premium group movement where conventional 
                  ride-hailing systems fall short.
                </p>
              </div>

              {/* Value Props with Icons */}
              <ul 
                className={`space-y-3 text-base text-offwhite/70 transition-all duration-1000 delay-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Controlled fleet access (leased/partner vehicles)
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professionally vetted night-shift drivers
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fixed operating windows and defined zones
                </li>
              </ul>

              {/* CTA Buttons with Magnetic Effect */}
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-1000 delay-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <a 
                  href={buildWhatsAppUrl(BOOKING_MESSAGE)} 
                  className="button-elite-primary group"
                >
                  <span>Book via WhatsApp</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link to="/book?intent=partner" className="button-elite-secondary">
                  Investor / Partner Inquiry
                </Link>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div 
              className={`flex items-center transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="card-elite w-full">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    MET Snapshot
                  </h3>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-gold shadow-[0_0_12px_rgba(202,162,74,0.6)]" />
                </div>
                
                <div className="space-y-6">
                  <StatItem 
                    label="Operating Hours"
                    value="Thu–Sun, 5PM–5AM"
                    delay={1200}
                    isVisible={isVisible}
                  />
                  <StatItem 
                    label="Coverage Zones"
                    value="3 Premium Areas"
                    delay={1400}
                    isVisible={isVisible}
                  />
                  <StatItem 
                    label="Fleet Status"
                    value="Pilot Active"
                    delay={1600}
                    isVisible={isVisible}
                  />
                  <StatItem 
                    label="Safety Record"
                    value="100% Vetted Drivers"
                    delay={1800}
                    isVisible={isVisible}
                  />
                </div>

                <div className="mt-8 rounded-xl border border-gold/20 bg-gold/5 p-4">
                  <p className="text-sm text-offwhite/70">
                    Premium, reliable group movement during peak risk hours with 
                    concierge booking and controlled dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-offwhite/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem Section - Editorial Layout */}
      <section className="section-elite bg-gradient-to-b from-ink to-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <div className="space-y-4">
              <p className="section-subtitle-elite">The Problem</p>
              <h2 className="section-title-elite">
                The Night Transport Gap
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-offwhite/80">
                After 9 PM, ride availability declines, surge pricing becomes unpredictable, 
                and drivers selectively avoid certain trips. Large ride-hailing platforms 
                optimize for daytime volume—not late-night security risk, group logistics, 
                or event-driven demand spikes.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-3">
                <ProblemCard 
                  icon="⚠️"
                  title="Availability Crisis"
                  description="Declining driver presence after 9 PM"
                />
                <ProblemCard 
                  icon="💸"
                  title="Surge Chaos"
                  description="Unpredictable pricing spikes"
                />
                <ProblemCard 
                  icon="🚫"
                  title="Selective Service"
                  description="Drivers avoiding high-risk trips"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Bento Grid */}
      <section className="section-elite">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="section-subtitle-elite">MET's Solution</p>
            <h2 className="section-title-elite">
              A Focused Operator, Not a Ride-Hailing App
            </h2>
          </div>

          <div className="bento-grid">
            {/* Large Feature Card */}
            <div className="card-elite-feature lg:col-span-2 lg:row-span-2">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 inline-block rounded-full bg-gold/10 p-3">
                    <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">Controlled Operations</h3>
                  <p className="mb-6 text-base text-offwhite/70">
                    Fixed operating hours, defined nightlife zones, and transparent pricing logic 
                    replace the chaos of algorithmic dispatch.
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-offwhite/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold">→</span>
                    Thu–Sun, 5 PM–5 AM operating window
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold">→</span>
                    Westlands, Kilimani, Ngong Road focus
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold">→</span>
                    Fixed or semi-fixed pricing (no surge surprises)
                  </li>
                </ul>
              </div>
            </div>

            {/* Secondary Cards */}
            <SolutionCard 
              icon="🚗"
              title="Asset-Light Fleet"
              description="Leased or garage-partner vehicles with brand consistency and maintenance standards. Scalable without heavy asset risk."
            />
            <SolutionCard 
              icon="👤"
              title="Professional Drivers"
              description="Vetted and trained for nightlife conditions with reliability incentives and clear safety procedures."
            />
          </div>
        </div>
      </section>

      {/* Investment Metrics - Data Showcase */}
      <section className="section-elite bg-gradient-to-br from-charcoal via-ink to-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="section-subtitle-elite">Unit Economics</p>
            <h2 className="section-title-elite">Built for Early Profitability</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <MetricCard 
              label="Pilot Fleet"
              value="2–3"
              unit="vehicles"
              trend="baseline"
            />
            <MetricCard 
              label="Monthly Revenue"
              value="1.0M+"
              unit="KES"
              trend="up"
            />
            <MetricCard 
              label="Operating Cost"
              value="875K"
              unit="KES/mo"
              trend="neutral"
            />
            <MetricCard 
              label="Target Margin"
              value="18-20"
              unit="%"
              trend="up"
            />
            <MetricCard 
              label="Break-Even"
              value="2–3"
              unit="months"
              trend="fast"
            />
          </div>

          <p className="mt-8 text-center text-xs text-offwhite/50">
            Metrics represent pilot assumptions and disciplined utilization targets.
          </p>
        </div>
      </section>

      {/* Final CTA - Dramatic */}
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
                Whether you're moving people or deploying capital—MET is built to deliver 
                control, safety, and consistent service during Nairobi's peak nightlife hours.
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

// Reusable Components

function StatItem({ label, value, delay, isVisible }: { label: string; value: string; delay: number; isVisible: boolean }) {
  return (
    <div 
      className={`transition-all duration-700`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
      }}
    >
      <p className="mb-1 text-xs uppercase tracking-wider text-offwhite/50">{label}</p>
      <p className="text-lg font-semibold text-offwhite">{value}</p>
    </div>
  );
}

function ProblemCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-ink/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/10 hover:bg-ink/80">
      <div className="mb-2 text-2xl">{icon}</div>
      <h4 className="mb-1 text-sm font-semibold text-offwhite">{title}</h4>
      <p className="text-xs text-offwhite/60">{description}</p>
    </div>
  );
}

function SolutionCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card-elite">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-offwhite/70">{description}</p>
    </div>
  );
}

function MetricCard({ label, value, unit, trend }: { label: string; value: string; unit: string; trend: 'up' | 'down' | 'neutral' | 'baseline' | 'fast' }) {
  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-offwhite/50',
    baseline: 'text-gold',
    fast: 'text-emerald-400'
  };

  return (
    <div className="card-elite text-center">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-offwhite/50">{label}</p>
      <p className="mb-1 text-3xl font-bold text-offwhite">{value}</p>
      <p className={`text-xs ${trendColors[trend]}`}>{unit}</p>
    </div>
  );
}
