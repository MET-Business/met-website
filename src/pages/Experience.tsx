// src/pages/Experience.tsx
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';
import { Link } from 'react-router-dom';
import { media, buildSrcSet } from '../config/media';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type ExperiencePoint = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  accent: string;
};

type ServiceTier = {
  name: string;
  description: string;
  features: string[];
  pricing: string;
  accent: string;
  recommended?: boolean;
};

type DesignPrinciple = {
  principle: string;
  explanation: string;
  example: string;
};

// ============================================================================
// DATA
// ============================================================================

const experiencePoints: ExperiencePoint[] = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'Tasteful Lighting',
    description: 'Ambient interior lighting that sets the mood — not a disco, not a flashlight. Intentional and premium.',
    details: [
      'Warm, dimmable LED ambient lighting',
      'Accent lighting that enhances, not distracts',
      'Color temperature calibrated for evening comfort',
      'No harsh overhead lighting or strobing effects',
    ],
    accent: '#FF42A1',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    title: 'Controlled Music',
    description: 'Curated, low-volume soundscapes that complement the night without overpowering conversation.',
    details: [
      'Curated playlists aligned with nightlife energy',
      'Volume controlled for conversation comfort',
      'Optional silence or passenger requests honored',
      'No jarring transitions or intrusive advertising',
    ],
    accent: '#B14BF4',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: 'Clean Vehicles',
    description: 'Every ride starts fresh. Maintained to brand standard — inside and out, every shift.',
    details: [
      'Pre-shift interior cleaning and inspection',
      'Odor-free cabin environment',
      'Branded materials and accessories',
      'Regular deep-cleaning and detailing',
    ],
    accent: '#00D2FF',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Professional Drivers',
    description: 'Vetted, night-shift trained, and incentivized for reliability. The ride feels safe before it starts.',
    details: [
      'Background checks and reference verification',
      'Night-shift safety and customer service training',
      'Professional appearance and conduct standards',
      'Performance tracking and reliability incentives',
    ],
    accent: '#FF8E71',
  },
];

const serviceTiers: ServiceTier[] = [
  {
    name: 'Standard Night Ride',
    description: 'Core MET experience for individuals or small groups heading to or from nightlife destinations.',
    features: [
      'Seats up to 4 passengers',
      'Ambient lighting and curated music',
      'Professional night-shift driver',
      'Transparent pricing confirmed in chat',
      'WhatsApp booking confirmation',
    ],
    pricing: 'Varies by route and time',
    accent: '#00D2FF',
  },
  {
    name: 'Group Movement',
    description: 'Coordinated transport for parties of 5+ keeping the group together throughout the night.',
    features: [
      'Larger vehicle options (up to 7 passengers)',
      'Priority dispatch for group bookings',
      'Flexible pickup/drop-off coordination',
      'Group coordination options',
      'Event coordination support',
    ],
    pricing: 'Quote on request',
    accent: '#B14BF4',
    recommended: true,
  },
  {
    name: 'VIP Experience',
    description: 'Premium vehicle tier with enhanced amenities for special occasions and high-priority clients.',
    features: [
      'Premium vehicle selection',
      'Enhanced interior amenities',
      'Dedicated driver assignment',
      'Hourly or event-based booking',
      'White-glove service standard',
    ],
    pricing: 'Premium on request',
    accent: '#FF42A1',
  },
];

const designPrinciples: DesignPrinciple[] = [
  {
    principle: 'Experience without Excess',
    explanation: 'Premium feel doesn\'t mean over-the-top. MET\'s interior design is intentional, not extravagant.',
    example: 'Subtle lighting accents instead of mirror balls. Comfort instead of spectacle.',
  },
  {
    principle: 'Safety First, Always',
    explanation: 'Every experiential element is secondary to operational safety and driver professionalism.',
    example: 'Music volume controlled to not distract drivers. Lighting positioned to not impair visibility.',
  },
  {
    principle: 'Consistency Across Fleet',
    explanation: 'Brand standards are enforced across all partnered vehicles to ensure predictable quality.',
    example: 'Every MET vehicle meets the same cleanliness, lighting, and amenity standards regardless of ownership.',
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function Experience() {
  return (
    <div className="flex flex-col gap-20 pb-12">
      <Seo
        title="The MET Experience"
        description="MET treats the ride as part of the night without compromising safety or discipline. Premium interiors designed with intention."
      />

      {/* ================================================================
          HERO — Introduction to the MET experience
      ================================================================ */}
      <AnimatedSection>
        <div className="relative grid gap-8 rounded-[28px] p-6 sm:p-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="hero-background">
            <picture>
              <source type="image/webp" srcSet={buildSrcSet(media.images.partyInterior.webp)} sizes="100vw" />
              <source type="image/jpeg" srcSet={buildSrcSet(media.images.partyInterior.jpg)} sizes="100vw" />
              <img src={media.images.partyInterior.fallback} alt={media.images.partyInterior.alt} loading="eager" />
            </picture>
          </div>

          <div className="hero-surface grid gap-5">
            <div className="flex flex-wrap gap-2.5">
              <span className="badge">Premium Transport</span>
              <span className="badge">Intentional Design</span>
              <span className="badge">Safety First</span>
            </div>

            <div>
              <p className="section-subtitle">Experience</p>
              <h1 className="section-title mt-2">The MET Experience</h1>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              <p>
                MET treats the ride as part of the night — not an afterthought, not a necessary evil. 
                From the moment you step in, the experience is designed to extend the quality of your 
                evening without compromising safety or operational discipline.
              </p>
              <p>
                Interiors are premium and intentional. Tasteful lighting, controlled music, clean vehicles, 
                and professional drivers create an environment where the journey complements the destination. 
                This isn't a gimmick — it's a standard maintained across every vehicle, every shift.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
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
                <span>Book Your Ride</span>
              </a>
              <Link to="/how-it-works" className="button-secondary">
                <span>See How It Works</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Visual element */}
          <div className="hero-surface flex flex-col gap-6">
            <div
              className="rounded-2xl border border-white/8 p-6"
              style={{ background: 'rgba(14,14,16,0.7)', backdropFilter: 'blur(8px)' }}
            >
              <div className="glow-block flex h-full min-h-[280px] flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                    Experience Standard
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(224,224,224,0.45)' }}>
                      Core Philosophy
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-white">
                      Premium without pretense
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(224,224,224,0.45)' }}>
                      Design Approach
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-white">
                      Intentional, not excessive
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(224,224,224,0.45)' }}>
                      Operational Priority
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-white">
                      Safety always comes first
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple/15 bg-purple/5 p-3">
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)' }}>
                      Every detail serves the experience, but nothing compromises safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          EXPERIENCE PILLARS — Detailed breakdown
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-8">
          <div className="max-w-3xl">
            <p className="section-subtitle">What Makes MET Different</p>
            <h2 className="section-title mt-2">Four Pillars of the MET Experience</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              These aren't marketing points — they're operational standards maintained across every vehicle, 
              every driver, every shift. Consistency is the experience.
            </p>
          </div>

          <div className="media-frame aspect-[16/9]">
            <picture>
              <source
                type="image/webp"
                srcSet={buildSrcSet(media.images.professionalDriver.webp)}
                sizes="(min-width: 1024px) 70vw, 95vw"
              />
              <source
                type="image/jpeg"
                srcSet={buildSrcSet(media.images.professionalDriver.jpg)}
                sizes="(min-width: 1024px) 70vw, 95vw"
              />
              <img
                src={media.images.professionalDriver.fallback}
                alt={media.images.professionalDriver.alt}
                loading="lazy"
              />
            </picture>
            <div className="media-overlay soft" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {experiencePoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 100}>
                <div className="card group relative h-full overflow-hidden">
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                        style={{
                          background: `${point.accent}15`,
                          border: `1px solid ${point.accent}33`,
                          color: point.accent,
                        }}
                      >
                        {point.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-base font-bold text-white">{point.title}</h3>
                        <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
                          {point.description}
                        </p>
                      </div>
                    </div>

                    {/* Details list */}
                    <div className="mt-5 space-y-2">
                      {point.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2.5">
                          <span
                            className="mt-0.5 inline-block h-1 w-1 flex-shrink-0 rounded-full"
                            style={{ background: point.accent }}
                          />
                          <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative glow */}
                  <div
                    className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `${point.accent}20` }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          SERVICE TIERS — Different experience levels
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-8">
          <div className="max-w-3xl">
            <p className="section-subtitle">Service Options</p>
            <h2 className="section-title mt-2">Choose Your Experience Level</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET offers tiered service options to match different use cases — from standard night rides 
              to VIP experiences. All tiers maintain our core safety and professionalism standards.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 100}>
                <div
                  className={`card group relative h-full overflow-hidden ${
                    tier.recommended ? 'border-purple/30' : ''
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute right-4 top-4">
                      <span
                        className="rounded-full border px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider"
                        style={{
                          background: 'rgba(177,75,244,0.15)',
                          border: '1px solid rgba(177,75,244,0.4)',
                          color: '#B14BF4',
                        }}
                      >
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Tier header */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: tier.accent, boxShadow: `0 0 10px ${tier.accent}66` }}
                      />
                      <h3 className="font-display text-base font-bold text-white">{tier.name}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
                      {tier.description}
                    </p>

                    {/* Features */}
                    <div className="mt-5 space-y-2.5">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            style={{ color: tier.accent }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-base" style={{ color: 'rgba(224,224,224,0.7)' }}>
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(224,224,224,0.45)' }}>
                        Starting From
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-white">{tier.pricing}</p>
                    </div>
                  </div>

                  {/* Decorative accent */}
                  <div
                    className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `${tier.accent}15` }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          DESIGN PRINCIPLES — Operational philosophy
      ================================================================ */}
      <AnimatedSection>
        <div className="flex flex-col gap-8">
          <div className="max-w-3xl">
            <p className="section-subtitle">Design Philosophy</p>
            <h2 className="section-title mt-2">How We Think About Experience</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET's experience design is guided by clear principles that balance premium quality with 
              operational safety and consistency.
            </p>
          </div>

          <div className="space-y-4">
            {designPrinciples.map((item, i) => (
              <AnimatedSection key={item.principle} delay={i * 80}>
                <div className="card group relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      {/* Number indicator */}
                      <div className="flex-shrink-0">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full border font-display text-base font-bold"
                          style={{
                            background: 'rgba(177,75,244,0.1)',
                            border: '1px solid rgba(177,75,244,0.3)',
                            color: '#B14BF4',
                          }}
                        >
                          {i + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-display text-base font-bold text-white">{item.principle}</h3>
                        <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
                          {item.explanation}
                        </p>
                        <div className="mt-3 rounded-lg border border-white/5 bg-white/5 p-3">
                          <p className="text-base italic leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                            <span className="font-semibold text-white">Example:</span> {item.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          WHAT'S INCLUDED — Standard features
      ================================================================ */}
      <AnimatedSection>
        <div
          className="rounded-2xl border border-white/10 p-8"
          style={{ background: 'rgba(14,14,16,0.7)', backdropFilter: 'blur(6px)' }}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="font-display text-lg font-bold text-white">Included in Every MET Ride</h2>
              <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
                These features are standard across all service tiers — not add-ons, not upgrades. 
                This is the baseline MET experience.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'WhatsApp booking confirmation',
                'Professional vetted driver',
                'Clean, maintained vehicle',
                'Ambient interior lighting',
                'Curated music options',
                'Transparent pricing confirmation',
                'GPS tracking & safety',
                'Group-ready seating',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ background: 'rgba(0,210,255,0.2)', border: '1px solid rgba(0,210,255,0.4)' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#00D2FF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-base" style={{ color: 'rgba(224,224,224,0.75)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          SAFETY REMINDER — Experience doesn't compromise safety
      ================================================================ */}
      <AnimatedSection>
        <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-cyan/20 p-2">
              <svg className="h-5 w-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-display text-base font-bold text-white">Safety is Non-Negotiable</p>
              <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
                Every experiential element — lighting, music, amenities — is designed to enhance the ride without 
                compromising driver focus, passenger safety, or operational discipline. If it conflicts with safety, 
                it doesn't make it into a MET vehicle. Premium experience means nothing if it's not safe.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ================================================================
          CTA — Book or learn more
      ================================================================ */}
      <AnimatedSection>
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 p-8"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,66,161,0.08) 0%, rgba(177,75,244,0.06) 50%, rgba(0,210,255,0.08) 100%)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div className="hero-background">
            <picture>
              <source type="image/webp" srcSet={buildSrcSet(media.images.abstractBrand.webp)} sizes="100vw" />
              <source type="image/jpeg" srcSet={buildSrcSet(media.images.abstractBrand.jpg)} sizes="100vw" />
              <img src={media.images.abstractBrand.fallback} alt={media.images.abstractBrand.alt} loading="lazy" />
            </picture>
          </div>
          <div className="hero-surface grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="section-subtitle">Experience MET</p>
              <h2 className="section-title mt-2">
                The Ride is <span className="text-gradient-brand">Part of the Night</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.75)', maxWidth: '480px' }}>
                MET doesn't just get you there — we extend the quality and energy of your evening from 
                pickup to drop-off. Book your next ride and experience the difference between transport 
                and nightlife transport done right.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end md:justify-center">
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
              <Link to="/how-it-works" className="button-secondary w-full text-center md:w-auto">
                <span>How It Works</span>
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
