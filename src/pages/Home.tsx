// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';
import { media, buildSrcSet } from '../config/media';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type StatCardProps = {
  label: string;
  value: string;
  description?: string;
};

type FeatureCardProps = {
  title: string;
  description: string;
  items: string[];
  accentColor?: string;
  icon?: React.ReactNode;
};

type HighlightCardProps = {
  title: string;
  sub: string;
  icon?: React.ReactNode;
};

type ProblemCardProps = {
  title: string;
  description: string;
  stat?: string;
};

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

// ============================================================================
// MICRO-COMPONENTS
// ============================================================================

function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="card group relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.22em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
          {label}
        </p>
        <p className="font-display mt-2 text-2xl font-bold text-white">{value}</p>
        {description && (
          <p className="mt-1.5 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.55)' }}>
            {description}
          </p>
        )}
      </div>
      {/* Hover glow effect */}
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-cyan/5" />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, items, accentColor = '#B14BF4', icon }: FeatureCardProps) {
  return (
    <div className="card group relative overflow-hidden">
      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: accentColor, boxShadow: `0 0 10px ${accentColor}66` }}
              aria-hidden="true"
            />
            <h3 className="font-display text-base font-bold text-white">{title}</h3>
          </div>
          {icon && <div className="flex-shrink-0 opacity-40 transition-opacity group-hover:opacity-70">{icon}</div>}
        </div>

        {/* Description */}
        <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
          {description}
        </p>

        {/* Feature list */}
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-base" style={{ color: 'rgba(224,224,224,0.6)' }}>
              <span className="mt-1 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-white/40" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative gradient on hover */}
      <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" 
           style={{ background: accentColor + '20' }} />
    </div>
  );
}

function HighlightCard({ title, sub, icon }: HighlightCardProps) {
  return (
    <div className="card group relative overflow-hidden">
      <div className="relative z-10 flex items-start gap-3">
        {icon && (
          <div className="flex-shrink-0 opacity-50 transition-opacity group-hover:opacity-80">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <p className="font-display text-base font-bold text-white">{title}</p>
          <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProblemCard({ title, description, stat }: ProblemCardProps) {
  return (
    <div className="card group relative overflow-hidden">
      <div className="relative z-10">
        {stat && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink/20 bg-pink/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-pink" style={{ boxShadow: '0 0 6px #FF42A1' }} />
            <span className="text-xs font-bold uppercase tracking-wider text-pink">{stat}</span>
          </div>
        )}
        <h3 className="font-display text-base font-bold text-white">{title}</h3>
        <p className="mt-2.5 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
          {description}
        </p>
      </div>
      
      {/* Warning indicator */}
      <div className="absolute right-4 top-4 opacity-20 transition-opacity group-hover:opacity-40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF42A1" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: TestimonialProps) {
  return (
    <div className="card relative overflow-hidden">
      <div className="relative z-10">
        {/* Quote icon */}
        <div className="mb-4 opacity-30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-cyan">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>
        
        {/* Quote text */}
        <p className="text-base leading-relaxed italic text-white/90">"{quote}"</p>
        
        {/* Author info */}
        <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple/30 to-cyan/30 text-base font-bold text-white">
            {author.charAt(0)}
          </div>
          <div>
            <p className="text-base font-semibold text-white">{author}</p>
            <p className="text-base" style={{ color: 'rgba(224,224,224,0.5)' }}>{role}</p>
          </div>
        </div>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/5 blur-2xl" />
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-12">
      <Seo
        title="Home"
        description="MET is Nairobi's nightlife transport operator built for late-night reliability, safety, and premium group movement."
      />

      {/* ================================================================
          HERO SECTION — Enhanced with stronger value prop
      ================================================================ */}
      <section className="relative grid gap-10 rounded-[28px] p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="hero-background">
          <picture>
            <source type="image/webp" srcSet={buildSrcSet(media.images.heroNightCity.webp)} sizes="100vw" />
            <source type="image/jpeg" srcSet={buildSrcSet(media.images.heroNightCity.jpg)} sizes="100vw" />
            <img src={media.images.heroNightCity.fallback} alt={media.images.heroNightCity.alt} loading="eager" />
          </picture>
        </div>

        {/* Decorative background glow */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />

        <div className="hero-surface flex flex-col gap-6">
          {/* Main headline */}
          <h1 className="animate-fadeInUp font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Night Transport,{' '}
            <span className="text-gradient-brand">Engineered</span> for Nairobi's Night Economy
          </h1>

          {/* Value proposition */}
          <p className="max-w-[520px] text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)' }}>
            Ministry of Enjoyment Taxi (MET) is a nightlife-focused transport operator designed for late-night 
            reliability, safety, and premium group movement — filling the gap where conventional ride-hailing 
            systems consistently fall short.
          </p>

          {/* Key differentiators */}
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" 
                    style={{ boxShadow: '0 0 6px #B14BF4' }} />
              <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>
                <span className="font-semibold text-white">Controlled fleet access</span> — partnered vehicles 
                with consistent branding and standards
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan" 
                    style={{ boxShadow: '0 0 6px #00D2FF' }} />
              <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>
                <span className="font-semibold text-white">Professional night drivers</span> — vetted, 
                trained, and incentivized for late-night operations
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink" 
                    style={{ boxShadow: '0 0 6px #FF42A1' }} />
              <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>
                <span className="font-semibold text-white">Nightlife-ready scheduling</span> — defined 
                zones and clear confirmations for reliable pickups
              </p>
            </div>
          </div>

          {/* Operating badges */}
          <div className="flex flex-wrap gap-2.5">
            <span className="badge">Nairobi Night Ops</span>
            <span className="badge">Operating hours vary · confirm in booking</span>
            <span className="badge">Westlands · Kilimani · Ngong Rd</span>
          </div>

          {/* CTA buttons */}
          <div className="mt-2 flex flex-wrap gap-3">
            <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 4.5a7.5 7.5 0 0 0-6.4 11.3L5 20l4.4-1.2A7.5 7.5 0 1 0 12 4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path d="M9.2 9.6c.8 1.6 2 2.8 3.6 3.6l1.1-1.1c.2-.2.5-.3.8-.2l1.8.6c.4.1.6.5.5.9-.3 1.2-1.5 2-2.8 2-3.8 0-6.9-3.1-6.9-6.9 0-1.3.8-2.5 2-2.8.4-.1.8.1.9.5l.6 1.8c.1.3 0 .6-.2.8l-1.1 1.1Z" />
              </svg>
              <span>Book via WhatsApp</span>
            </a>
            <Link to="/book?intent=partner" className="button-secondary">
              <span>Partner with MET</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right column — snapshot card */}
        <div className="hero-surface flex flex-col gap-6">
          <div
            className="party-card party-float rounded-2xl border border-white/8 p-6"
            style={{ background: 'rgba(14,14,16,0.7)', backdropFilter: 'blur(8px)' }}
          >
            <div className="party-flicker-layer" aria-hidden="true" />
            <div className="party-sparkles" aria-hidden="true" />
            <div className="glow-block relative z-10 flex h-full min-h-[280px] flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                  MET Operating Snapshot
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(224,224,224,0.45)' }}>
                    Service Window
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white">
                    Thu–Sun, 5:00 PM – 5:00 AM
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(224,224,224,0.45)' }}>
                    Coverage Zones
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white">
                    Westlands · Kilimani · Ngong Road
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(224,224,224,0.45)' }}>
                    Fleet Strategy
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white">Partnered, branded fleet</p>
                </div>

                <div className="rounded-xl border border-cyan/15 bg-cyan/5 p-3">
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)' }}>
                    Built for predictability during Nairobi's most unpredictable hours.
                    Operating hours may vary by day or event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PROBLEM STATEMENT — Expanded with real-world context
      ================================================================ */}
      <AnimatedSection>
        <div className="grid gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Why MET Exists</p>
            <h2 className="section-title mt-2">The Night Transport Gap in Nairobi</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              After 9 PM, getting a reliable ride in Nairobi becomes a different game. Availability drops,
              prices swing, and pickups become uncertain just when groups need clarity most.
            </p>
            <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET exists to make late-night movement simple: clear confirmations, predictable pickups,
              and a service built for nightlife, not rush hour.
            </p>
          </div>

          {/* Problem breakdown cards */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProblemCard
              title="Low Late-Night Supply"
              description="Fewer available drivers after dark means longer waits"
              stat="Late-night dip"
            />
            <ProblemCard
              title="Unclear Pricing"
              description="Last-minute price swings leave groups unsure what they'll pay"
              stat="Unpredictable"
            />
            <ProblemCard
              title="Pickup Uncertainty"
              description="Cancellations and vague ETAs make it hard to plan the night"
              stat="Common issue"
            />
            <ProblemCard
              title="Split Groups"
              description="Parties forced to book multiple rides lose cohesion and timing"
              stat="Common pain"
            />
          </div>

          {/* Supporting context */}
          <div className="mt-6 rounded-2xl border border-pink/15 bg-pink/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display text-base font-bold text-white">Why This Matters</p>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  Nairobi's nightlife economy spans Westlands, Kilimani, Ngong Road, and select Lang'ata
                  corridors — and riders deserve a service that shows up when the city is still moving.
                  MET closes that gap with reliable execution, not gimmicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          SOLUTION — Detailed breakdown
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-8">
          <div className="max-w-3xl">
            <p className="section-subtitle">How MET Works</p>
            <h2 className="section-title mt-2">Built for Nightlife, Not Rush Hour</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET is a focused night-transport operator. We run on clear operating hours, confirmed pricing,
              and a concierge-led dispatch so rides stay predictable during the busiest nightlife windows.
            </p>
          </div>

          {/* Solution pillars */}
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Nightlife Operating Window"
              description="Clear hours and zones keep pickups fast and dependable."
              accentColor="#FF42A1"
              items={[
                'Fixed hours: Thu–Sun, 5:00 PM – 5:00 AM',
                'Defined nightlife zones (Westlands, Kilimani, Ngong Road)',
                'Pricing confirmed before dispatch — no surprises',
                'Concierge dispatch keeps timing clear',
              ]}
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              }
            />

            <FeatureCard
              title="Partnered Fleet Standards"
              description="Every MET vehicle follows the same comfort and cleanliness standards."
              accentColor="#B14BF4"
              items={[
                'Branded, inspected vehicles',
                'Consistent interior quality',
                'Group-ready options',
                'Reliable availability during peak hours',
              ]}
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
            />

            <FeatureCard
              title="Night-Shift Professionals"
              description="Drivers trained for nightlife service and safety."
              accentColor="#00D2FF"
              items={[
                'Background checks and night-shift vetting',
                'Training on nightlife-specific scenarios and safety protocols',
                'Reliability incentives and quality checks',
                'Clear escalation procedures for incidents',
              ]}
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
            />
          </div>

          {/* Differentiation callout */}
          <div className="rounded-2xl border border-purple/20 bg-purple/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-full bg-purple/20 p-2">
                <svg className="h-5 w-5 text-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-display text-base font-bold text-white">What Makes MET Different</p>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  MET treats night transport as its own service. We optimize for reliable pickups,
                  clear communication, and safe arrivals during the hours most services struggle with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          OPERATING MODEL — Transparency builds trust
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Operating Model</p>
            <h2 className="section-title mt-2">How MET Operates</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              Clear operational parameters create predictability for riders and partner venues. 
              MET is designed for consistent execution, not constant change.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="card">
              <div className="flex items-center gap-2.5 mb-3">
                <svg className="h-5 w-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                  Geographic Zones
                </p>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)' }}>
                Core operations: Westlands, Kilimani, Ngong Road
              </p>
              <p className="mt-1.5 text-base" style={{ color: 'rgba(224,224,224,0.5)' }}>
                Pricing varies by route and time; confirm in booking
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-2.5 mb-3">
                <svg className="h-5 w-5 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                  Operating Hours
                </p>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)' }}>
                Thursday – Sunday, 5:00 PM – 5:00 AM
              </p>
              <p className="mt-1.5 text-base" style={{ color: 'rgba(224,224,224,0.5)' }}>
                Aligned with peak nightlife demand
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-2.5 mb-3">
                <svg className="h-5 w-5 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                  Booking Method
                </p>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)' }}>
                WhatsApp concierge with manual confirmation
              </p>
              <p className="mt-1.5 text-base" style={{ color: 'rgba(224,224,224,0.5)' }}>
                Clear communication, no app friction
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-2.5 mb-3">
                <svg className="h-5 w-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                  Experience
                </p>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)' }}>
                Tasteful lighting, controlled music, professional drivers
              </p>
              <p className="mt-1.5 text-base" style={{ color: 'rgba(224,224,224,0.5)' }}>
                The ride is part of the night
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          QUALITY STANDARDS — What to expect
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Quality Standards</p>
            <h2 className="section-title mt-2">What You Can Expect Every Ride</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET is built around clear service standards that make late-night rides feel safe, premium, and 
              predictable. We keep the experience consistent across every vehicle, every shift.
            </p>
          </div>

          {/* Experience standards */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <StatCard
              label="Fleet Readiness"
              value="Night-ready vehicles"
              description="Cleaned, checked, and branded before shift"
            />
            <StatCard
              label="Confirmation"
              value="Human concierge"
              description="Clear ETA and pickup details"
            />
            <StatCard
              label="Pricing"
              value="Transparent, upfront"
              description="Pricing varies by route/time; confirm in booking"
            />
            <StatCard
              label="Safety"
              value="Vetted drivers"
              description="Background checks and safety protocols"
            />
            <StatCard
              label="Availability"
              value="Demand-based"
              description="Service availability subject to demand"
            />
          </div>

          {/* Experience breakdown */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(14,14,16,0.5)' }}>
              <h3 className="font-display text-base font-bold text-white">Ride Experience Standards</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Clean, fresh interiors</p>
                  <p className="font-display text-base font-bold text-white">Always</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Tasteful lighting + music</p>
                  <p className="font-display text-base font-bold text-white">Standard</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Group-friendly seating</p>
                  <p className="font-display text-base font-bold text-white">Available</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Flexible pickup coordination</p>
                  <p className="font-display text-base font-bold text-white">By request</p>
                </div>
                <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-cyan">Overall Focus</p>
                  <p className="font-display text-base font-bold text-cyan">Consistency</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(14,14,16,0.5)' }}>
              <h3 className="font-display text-base font-bold text-white">Safety + Support</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Driver vetting and training</p>
                  <p className="font-display text-base font-bold text-white">Required</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Live location sharing</p>
                  <p className="font-display text-base font-bold text-white">Available</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Support line for issues</p>
                  <p className="font-display text-base font-bold text-white">Active</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Clear rider guidelines</p>
                  <p className="font-display text-base font-bold text-white">Shared</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Incident escalation</p>
                  <p className="font-display text-base font-bold text-white">Defined</p>
                </div>
                <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-pink">Service Promise</p>
                  <p className="font-display text-base font-bold text-pink">Safe + Reliable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Public disclaimer */}
          <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.4)' }}>
            Pricing varies by route and time; confirm in booking. Operating hours may vary by day or event. 
            Ride availability is subject to demand.
          </p>
        </div>
      </AnimatedSection>

      {/* ================================================================
          WHY MET — Public-facing highlights
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Why MET</p>
            <h2 className="section-title mt-2">Why Riders Choose MET</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET is built for nightlife reliability — a focused service designed to get groups home safely, 
              on time, and with a premium experience that matches the night.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <HighlightCard
              title="Partnered Fleet Standards"
              sub="Every MET vehicle follows the same cleanliness, branding, and service standards for a consistent experience."
              icon={
                <svg className="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            <HighlightCard
              title="Nightlife-Ready Scheduling"
              sub="We operate around nightlife demand, with clear confirmations and concierge coordination for reliable pickups."
              icon={
                <svg className="h-6 w-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <HighlightCard
              title="Familiar Coverage"
              sub="We focus on key nightlife corridors like Westlands, Kilimani, and Ngong Road for faster, more reliable service."
              icon={
                <svg className="h-6 w-6 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              }
            />
            <HighlightCard
              title="Reliable Experience"
              sub="From booking to drop-off, the focus is safety, clarity, and a premium ride that feels effortless."
              icon={
                <svg className="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            />
          </div>

          {/* Service focus */}
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-full bg-cyan/20 p-2">
                <svg className="h-5 w-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-display text-base font-bold text-white">Service Focus</p>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  <span className="font-semibold text-white">Tonight:</span> reliable pickups in core zones with clear confirmations.
                  <span className="font-semibold text-white ml-2">Growing:</span> deeper partner coordination and smoother group handling.
                  <span className="font-semibold text-white ml-2">Ahead:</span> expanded coverage based on demand and rider feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          PILOT READINESS — Operational credibility
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Safety + Operations</p>
            <h2 className="section-title mt-2">Built for Consistent Nights</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET runs with clear processes so every ride feels consistent. Driver standards, fleet care,
              and safety protocols are in place to keep nights smooth and reliable.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              {
                item: 'Driver vetting and night-shift protocols',
                status: 'In place',
                description: 'Background checks, training curriculum, and reliability incentives',
              },
              {
                item: 'Garage and vehicle partnership model',
                status: 'In place',
                description: 'Maintenance standards, branding requirements, and safety checks',
              },
              {
                item: 'Fixed pricing logic and zone controls',
                status: 'In place',
                description: 'Clear pricing confirmations, zone coverage, and group coordination',
              },
              {
                item: 'Safety escalation and incident handling',
                status: 'In place',
                description: 'Emergency protocols, customer support channels, and accountability',
              },
            ].map(({ item, status, description }) => (
              <div key={item} className="card flex gap-4">
                <div className="flex-shrink-0">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ background: 'rgba(0,210,255,0.15)', border: '1px solid rgba(0,210,255,0.35)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#00D2FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-white">{item}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-cyan">{status}</p>
                  <p className="mt-1.5 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          SOCIAL PROOF — Testimonials and trust signals
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Testimonials</p>
            <h2 className="section-title mt-2">What Riders & Partners Say</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr]">
            <div className="media-frame min-h-[240px]">
              <picture>
                <source
                  type="image/webp"
                  srcSet={buildSrcSet(media.images.groupNightlife.webp)}
                  sizes="(min-width: 1024px) 32vw, 90vw"
                />
                <source
                  type="image/jpeg"
                  srcSet={buildSrcSet(media.images.groupNightlife.jpg)}
                  sizes="(min-width: 1024px) 32vw, 90vw"
                />
                <img src={media.images.groupNightlife.fallback} alt={media.images.groupNightlife.alt} loading="lazy" />
              </picture>
              <div className="media-overlay soft" />
            </div>
            <TestimonialCard
              quote="Finally, a ride service that understands Nairobi nightlife. No more surge panic or driver cancellations when we need transport most."
              author="Sarah M."
              role="Regular MET Customer, Westlands"
            />
            <TestimonialCard
              quote="We've partnered with MET for our Friday events. Their reliability and professionalism have made late-night logistics predictable for our patrons."
              author="James K."
              role="Club Manager, Kilimani"
            />
            <TestimonialCard
              quote="MET keeps our group together and the pickup is always clear. It feels like a premium service built for nights out."
              author="Patricia N."
              role="Weekend Rider"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          FAQ — Preempt objections
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="section-title mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How is MET different from Uber or Bolt?',
                a: 'MET is not a mass-market ride-hailing platform. We operate exclusively during nightlife hours (Thu–Sun, 5 PM–5 AM) with controlled fleet access, professional night-shift drivers, and pricing confirmed before dispatch. Our focus is reliable pickups when the city is still moving.',
              },
              {
                q: 'Why WhatsApp booking instead of an app?',
                a: 'Concierge-based WhatsApp booking keeps communication clear and fast, especially during nightlife rush. Manual confirmation ensures accurate pickup details and a reliable ETA.',
              },
              {
                q: 'What makes your drivers different?',
                a: 'MET drivers are vetted specifically for night-shift operations, trained on nightlife-specific scenarios and safety protocols, and incentivized for reliability. We do not rely on the general ride-hailing driver pool — our drivers are selected and managed for this use case.',
              },
              {
                q: 'How do you ensure safety?',
                a: 'Safety protocols include: driver background checks, GPS tracking on all vehicles, clear escalation procedures for incidents, controlled operating zones, and direct customer support channels. Drivers are accountable to MET operational standards, not algorithmic metrics.',
              },
              {
                q: 'What are the operating zones?',
                a: 'Core zones are Westlands, Kilimani, and Ngong Road — the primary nightlife corridors in Nairobi. Requests outside core zones may be available; confirm availability and pricing in booking.',
              },
              {
                q: 'How does pricing work?',
                a: 'Pricing is confirmed upfront based on route and time. No surprise surges — you receive a clear confirmation before dispatch. Pricing varies by route/time; confirm in booking.',
              },
            ].map(({ q, a }, index) => (
              <details key={index} className="group rounded-2xl border border-white/8 bg-charcoal/50 p-5 transition-colors hover:border-white/15">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-white">
                  <span>{q}</span>
                  <svg
                    className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          FINAL CTA — Dual conversion paths
      ================================================================ */}
      <AnimatedSection>
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,66,161,0.1) 0%, rgba(177,75,244,0.08) 50%, rgba(0,210,255,0.1) 100%)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="hero-background">
            <picture>
              <source type="image/webp" srcSet={buildSrcSet(media.images.abstractBrand.webp)} sizes="100vw" />
              <source type="image/jpeg" srcSet={buildSrcSet(media.images.abstractBrand.jpg)} sizes="100vw" />
              <img src={media.images.abstractBrand.fallback} alt={media.images.abstractBrand.alt} loading="lazy" />
            </picture>
          </div>
          <div className="hero-surface grid gap-10 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="section-subtitle">Ready to Move Forward</p>
              <h2 className="section-title mt-2">
                Predictability in the Most <span className="text-gradient-brand">Unpredictable</span> Hours
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)', maxWidth: '520px' }}>
                Whether you're booking a night ride or planning a group outing — we deliver control, safety, 
                and consistent service during Nairobi's peak nightlife hours. No hype, no gimmicks — just 
                a premium ride that shows up on time.
              </p>

              {/* Value props */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.7)' }}>
                    WhatsApp booking with human confirmation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.7)' }}>
                    Fixed pricing, no surge surprises
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.7)' }}>
                    Professional drivers, safety protocols
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.7)' }}>
                    Group-ready vehicles, event coordination
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end md:justify-center">
              <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary w-full text-center text-white md:w-auto">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 4.5a7.5 7.5 0 0 0-6.4 11.3L5 20l4.4-1.2A7.5 7.5 0 1 0 12 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path d="M9.2 9.6c.8 1.6 2 2.8 3.6 3.6l1.1-1.1c.2-.2.5-.3.8-.2l1.8.6c.4.1.6.5.5.9-.3 1.2-1.5 2-2.8 2-3.8 0-6.9-3.1-6.9-6.9 0-1.3.8-2.5 2-2.8.4-.1.8.1.9.5l.6 1.8c.1.3 0 .6-.2.8l-1.1 1.1Z" />
                </svg>
                <span>Book via WhatsApp</span>
              </a>
              <Link to="/book?intent=partner" className="button-secondary w-full text-center md:w-auto">
                <span>Partner with MET</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
