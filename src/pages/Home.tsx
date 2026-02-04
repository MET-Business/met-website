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
          {/* Operating badges */}
          <div className="flex flex-wrap gap-2.5">
            <span className="badge">Nairobi Night Ops</span>
            <span className="badge">Thu-Sun · 5 PM-5 AM</span>
            <span className="badge">Westlands · Kilimani · Ngong Rd</span>
          </div>

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
                <span className="font-semibold text-white">Controlled fleet access</span> — leased and 
                partner vehicles with consistent branding
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
                <span className="font-semibold text-white">Fixed operating windows</span> — defined 
                zones and hours for maximum reliability
              </p>
            </div>
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
              <span>Investor Overview</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right column — snapshot card */}
        <div className="hero-surface flex flex-col gap-6">
          <div
            className="rounded-2xl border border-white/8 p-6"
            style={{ background: 'rgba(14,14,16,0.7)', backdropFilter: 'blur(8px)' }}
          >
            <div className="glow-block flex h-full min-h-[280px] flex-col justify-between">
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
                  <p className="mt-1 font-display text-base font-bold text-white">Asset-light leasing model</p>
                </div>

                <div className="rounded-xl border border-cyan/15 bg-cyan/5 p-3">
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)' }}>
                    Built for predictability during Nairobi's most unpredictable hours.
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
            <p className="section-subtitle">The Problem</p>
            <h2 className="section-title mt-2">The Night Transport Gap in Nairobi</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              After 9 PM in Nairobi, the dynamics of urban transport shift dramatically. Ride availability 
              declines, surge pricing becomes unpredictable, and drivers increasingly avoid certain routes, 
              times, and passenger types. While large ride-hailing platforms excel at daytime commuting volume, 
              they are not optimized for late-night security risk, group logistics, or the concentrated demand 
              spikes that define nightlife movement.
            </p>
            <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              This creates a structural service gap during the most economically active hours of Nairobi's 
              night economy — leaving club-goers stranded, groups forced to split rides inefficiently, and 
              safety compromised when reliable options simply aren't available.
            </p>
          </div>

          {/* Problem breakdown cards */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProblemCard
              title="Driver Scarcity"
              description="Night shift operations avoided due to perceived security risks and inadequate incentives"
              stat="60-70% decline"
            />
            <ProblemCard
              title="Pricing Volatility"
              description="Unpredictable surge multipliers that spike without warning during peak nightlife hours"
              stat="3-5x surges"
            />
            <ProblemCard
              title="Selective Acceptance"
              description="Drivers declining trips based on destination, passenger count, or perceived risk factors"
              stat="Common issue"
            />
            <ProblemCard
              title="Group Fragmentation"
              description="Parties forced to book multiple vehicles, losing cohesion and increasing per-person costs"
              stat="Inefficient"
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
                  corridors — generating significant late-night transport demand that existing platforms 
                  systematically underserve. MET exists to close this gap with operational discipline, 
                  not gimmicks.
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
            <p className="section-subtitle">MET's Solution</p>
            <h2 className="section-title mt-2">A Focused Operator, Not a Ride-Hailing App</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET addresses the night transport gap through disciplined operations, controlled fleet access, 
              and nightlife-specific service design. We are not attempting to compete with mass-market platforms 
              on their terms — we operate in the window where their model breaks down.
            </p>
          </div>

          {/* Solution pillars */}
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Controlled Operations"
              description="Disciplined operating parameters ensure reliability when it matters most."
              accentColor="#FF42A1"
              items={[
                'Fixed hours: Thu–Sun, 5:00 PM – 5:00 AM',
                'Defined nightlife zones (Westlands, Kilimani, Ngong Road)',
                'Fixed or semi-fixed pricing logic — no algorithmic surprises',
                'Controlled dispatch to prevent oversaturation',
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
              title="Asset-Light Fleet Strategy"
              description="Partnership-based vehicle access reduces capital risk while maintaining brand consistency."
              accentColor="#B14BF4"
              items={[
                'Leased or garage-partner vehicles',
                'Brand consistency and maintenance standards enforced',
                'Scalable without heavy asset lock-in',
                'Flexible expansion or contraction based on demand',
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
              title="Professional Night Drivers"
              description="Vetted, trained, and incentivized specifically for late-night operations."
              accentColor="#00D2FF"
              items={[
                'Background checks and night-shift vetting',
                'Training on nightlife-specific scenarios and safety protocols',
                'Reliability incentives and performance tracking',
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
                  MET treats night transport as a specialized service requiring different operational logic, 
                  not as an extension of daytime commuting. We optimize for reliability during high-risk hours, 
                  not maximum vehicle utilization across all times and zones. This focus is our competitive advantage.
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
              Clear operational parameters create predictability for both customers and investors. 
              MET's model is designed for disciplined execution, not rapid experimentation.
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
                Other areas served at premium pricing
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
          UNIT ECONOMICS — Investor-grade transparency
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Unit Economics</p>
            <h2 className="section-title mt-2">Built for Early Profitability</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET's financial model is designed for rapid path to cash-flow positivity with conservative 
              assumptions. Pilot economics demonstrate viability before significant capital deployment.
            </p>
          </div>

          {/* Financial metrics */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <StatCard
              label="Pilot Fleet Size"
              value="2–3 vehicles"
              description="Start lean, prove model"
            />
            <StatCard
              label="Monthly Revenue"
              value="~KES 1.0M+"
              description="Pilot phase target"
            />
            <StatCard
              label="Operating Costs"
              value="~KES 875K"
              description="Monthly OPEX estimate"
            />
            <StatCard
              label="Target Margin"
              value="18–20%"
              description="After OPEX, pre-tax"
            />
            <StatCard
              label="Break-even Timeline"
              value="2–3 months"
              description="Cash-flow positive"
            />
          </div>

          {/* Cost breakdown */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(14,14,16,0.5)' }}>
              <h3 className="font-display text-base font-bold text-white">Monthly Revenue Streams</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Standard trips (6/night × 20 nights)</p>
                  <p className="font-display text-base font-bold text-white">~KES 612K</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Hourly/private bookings</p>
                  <p className="font-display text-base font-bold text-white">~KES 200K</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Club/event partnerships</p>
                  <p className="font-display text-base font-bold text-white">~KES 150K</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>VIP experiences</p>
                  <p className="font-display text-base font-bold text-white">~KES 116K</p>
                </div>
                <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-cyan">Total Monthly</p>
                  <p className="font-display text-base font-bold text-cyan">~KES 1.078M</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 p-6" style={{ background: 'rgba(14,14,16,0.5)' }}>
              <h3 className="font-display text-base font-bold text-white">Monthly Operating Costs</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Driver salaries (3 × KES 45K)</p>
                  <p className="font-display text-base font-bold text-white">KES 135K</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Fuel costs</p>
                  <p className="font-display text-base font-bold text-white">KES 400K</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Vehicle lease/partnership</p>
                  <p className="font-display text-base font-bold text-white">KES 200K</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Insurance, licensing, admin</p>
                  <p className="font-display text-base font-bold text-white">KES 90K</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>Marketing & operations</p>
                  <p className="font-display text-base font-bold text-white">KES 50K</p>
                </div>
                <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-pink">Total Monthly OPEX</p>
                  <p className="font-display text-base font-bold text-pink">~KES 875K</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial disclaimer */}
          <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.4)' }}>
            Financial projections represent pilot-phase assumptions based on conservative utilization targets 
            and verified Nairobi nightlife demand patterns. Actual results will vary based on operational execution, 
            market conditions, and partnership development.
          </p>
        </div>
      </AnimatedSection>

      {/* ================================================================
          INVESTMENT HIGHLIGHTS — Why invest in MET
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Investment Thesis</p>
            <h2 className="section-title mt-2">Why MET Deserves Capital</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET offers investors exposure to Nairobi's growing night economy through a disciplined, 
              asset-light model with clear path to profitability and scalability.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <HighlightCard
              title="Asset-Light Fleet Strategy"
              sub="Leased and partner vehicles reduce capital requirements and asset risk while maintaining brand consistency and operational control. Scalable without heavy lock-in."
              icon={
                <svg className="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            <HighlightCard
              title="Defined Operating Windows"
              sub="Thu–Sun, 5 PM–5 AM operations ensure maximum vehicle utilization during peak demand. Fixed schedule eliminates idle time and optimizes driver efficiency."
              icon={
                <svg className="h-6 w-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <HighlightCard
              title="Geographic Focus"
              sub="Concentrated operations in Westlands, Kilimani, and Ngong Road nightlife zones allow for efficient dispatch, driver familiarity, and partnership density."
              icon={
                <svg className="h-6 w-6 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              }
            />
            <HighlightCard
              title="Rapid Path to Profitability"
              sub="Conservative financial model shows pilot break-even in 2–3 months with 18–20% margins. Cash-flow positive before significant expansion."
              icon={
                <svg className="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            />
          </div>

          {/* Growth trajectory */}
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-full bg-cyan/20 p-2">
                <svg className="h-5 w-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-display text-base font-bold text-white">3-Year Growth Trajectory</p>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  <span className="font-semibold text-white">Year 1 (Pilot):</span> 2–3 vehicles → KES 3.5M annual profit · 
                  <span className="font-semibold text-white ml-2">Year 2 (Expansion):</span> 7 vehicles → KES 7M profit · 
                  <span className="font-semibold text-white ml-2">Year 3 (Scale):</span> 12 vehicles → KES 14M profit
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
            <p className="section-subtitle">Pilot Readiness</p>
            <h2 className="section-title mt-2">Operational Foundations in Place</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET is not a concept — core operating procedures, partnership frameworks, and safety protocols 
              have been defined and documented. The pilot phase validates economics, not viability.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              {
                item: 'Driver vetting and night-shift protocols',
                status: 'Defined and documented',
                description: 'Background checks, training curriculum, and reliability incentive structure',
              },
              {
                item: 'Garage and vehicle partnership model',
                status: 'Defined and documented',
                description: 'Lease terms, maintenance SLAs, branding requirements, and partnership economics',
              },
              {
                item: 'Fixed pricing logic and zone controls',
                status: 'Defined and documented',
                description: 'Base fares, surge prevention, premium zone pricing, and group discount structure',
              },
              {
                item: 'Safety escalation and incident handling',
                status: 'Defined and documented',
                description: 'Emergency protocols, customer support channels, and driver accountability measures',
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
            <p className="section-subtitle">Early Validation</p>
            <h2 className="section-title mt-2">What Early Users & Partners Say</h2>
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
              quote="As an investor, I appreciate the disciplined approach. This isn't a moonshot — it's a real business solving a real problem with conservative economics."
              author="Patricia N."
              role="Early-Stage Investor"
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
                a: 'MET is not a mass-market ride-hailing platform. We operate exclusively during nightlife hours (Thu–Sun, 5 PM–5 AM) with controlled fleet access, professional night-shift drivers, and fixed pricing. Our focus is reliability during high-risk hours, not maximum utilization across all times.',
              },
              {
                q: 'Why WhatsApp booking instead of an app?',
                a: 'Concierge-based WhatsApp booking reduces friction, allows for clear communication, and eliminates app development costs during the pilot phase. Manual confirmation ensures quality control and enables personalized service. An app may be introduced post-pilot based on demand.',
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
                a: 'Core zones are Westlands, Kilimani, and Ngong Road — the primary nightlife corridors in Nairobi. Trips outside these zones are accepted at premium pricing. Geographic focus allows for efficient dispatch and driver familiarity.',
              },
              {
                q: 'How does pricing work?',
                a: 'MET uses fixed or semi-fixed pricing based on route and time. No algorithmic surge pricing. Group bookings and hourly packages are available. Pricing is transparent and communicated upfront via WhatsApp confirmation.',
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
                Whether you're booking a night ride or evaluating MET as an investment opportunity — we deliver 
                control, safety, and consistent service during Nairobi's peak nightlife hours. No hype, no 
                gimmicks — just disciplined operations and real economics.
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
                <span>Investor Overview</span>
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
