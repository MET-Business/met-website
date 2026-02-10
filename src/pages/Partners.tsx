import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { media, buildSrcSet } from '../config/media';

type PartnerCategory = {
  title: string;
  accent: string;
  icon: string;
  description: string;
  partners: string[];
};

type ValueCard = {
  title: string;
  description: string;
  accent: string;
};

const categories: PartnerCategory[] = [
  {
    title: 'Clubs and Events',
    accent: '#FF42A1',
    icon: 'C',
    description: 'Nightlife venues and event organizers who recommend MET to their patrons.',
    partners: ['Partner venues', 'Event organizers', 'Community hosts'],
  },
  {
    title: 'Vehicle and Garage Partners',
    accent: '#B14BF4',
    icon: 'V',
    description: 'Car tuning and rental garages supplying branded, maintained fleet vehicles.',
    partners: ['Fleet partners', 'Vehicle providers', 'Service garages'],
  },
  {
    title: 'Campus and Promoters',
    accent: '#00D2FF',
    icon: 'U',
    description: 'University campus promoters and private hosts driving young-professional demand.',
    partners: ['Campus communities', 'Student hosts', 'City groups'],
  },
];

const valueCards: ValueCard[] = [
  {
    title: 'Reliable Late-Night Logistics',
    description: 'Ensure patrons leave safely with predictable ETAs and controlled dispatch.',
    accent: '#B14BF4',
  },
  {
    title: 'Brand Consistency',
    description: 'Branded vehicles and uniform service standards create a premium guest experience.',
    accent: '#FF42A1',
  },
  {
    title: 'Partner Alignment',
    description: 'Collaborative planning that prioritizes safe exits, reliable pickups, and smooth guest flow.',
    accent: '#00D2FF',
  },
  {
    title: 'Operational Discipline',
    description: 'Defined zones and hours create clarity for partners and reduce operational risk.',
    accent: '#FF8E71',
  },
];

const onboardingSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'Define goals, coverage areas, and collaboration needs.',
  },
  {
    step: '02',
    title: 'Pilot Design',
    description: 'Align on event cadence, pickup flow, and operational touchpoints.',
  },
  {
    step: '03',
    title: 'Launch + Monitoring',
    description: 'Activate the collaboration and review learnings regularly.',
  },
  {
    step: '04',
    title: 'Scale',
    description: 'Expand coverage, events, or coordination based on learnings.',
  },
];

const faq = [
  {
    q: 'What types of partners do you prioritize?',
    a: 'Nightlife venues, event organizers, garages, and driver partners aligned with late-night operations.',
  },
  {
    q: 'How do partnerships create value?',
    a: 'We increase guest safety, reduce transport friction, and coordinate demand into predictable dispatch windows.',
  },
  {
    q: 'Can we pilot before a long-term agreement?',
    a: 'Yes. We can pilot collaboration with clear goals and feedback loops before any long-term commitment.',
  },
];

function PartnerChip({ name, accent }: { name: string; accent: string }) {
  return (
    <span
      className="inline-flex items-center px-4 py-2 rounded-full text-base font-display font-semibold transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: `${accent}0d`,
        border: `1px solid ${accent}25`,
        color: 'rgba(224,224,224,0.8)',
        boxShadow: `0 0 0 0 ${accent}00`,
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = `${accent}55`;
        event.currentTarget.style.boxShadow = `0 0 12px ${accent}22`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = `${accent}25`;
        event.currentTarget.style.boxShadow = `0 0 0 0 ${accent}00`;
      }}
    >
      {name}
    </span>
  );
}

export default function Partners() {
  return (
    <div className="flex flex-col gap-20 pb-10">
      <Seo
        title="Partners"
        description="MET integrates into Nairobi's nightlife ecosystem through disciplined partnerships."
      />

      <AnimatedSection>
        <section className="relative grid gap-8 rounded-[28px] p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="hero-background">
            <picture>
              <source type="image/webp" srcSet={buildSrcSet(media.images.fleetGarage.webp)} sizes="100vw" />
              <source type="image/jpeg" srcSet={buildSrcSet(media.images.fleetGarage.jpg)} sizes="100vw" />
              <img src={media.images.fleetGarage.fallback} alt={media.images.fleetGarage.alt} loading="eager" />
            </picture>
          </div>
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple/10 blur-3xl" />

          <div className="hero-surface flex flex-col gap-5">
            <p className="section-subtitle">Partners</p>
            <h1 className="section-title">Build the Night Economy With MET</h1>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET integrates directly into Nairobi&apos;s nightlife ecosystem through disciplined partnerships with venues,
              promoters, garages, and strategic collaborators. We bring predictable movement to the most unpredictable hours.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="badge">Venue Logistics</span>
              <span className="badge">Fleet Partnerships</span>
              <span className="badge">Event Coordination</span>
            </div>
          </div>

          <div className="hero-surface grid gap-4">
            {valueCards.map((card) => (
              <div key={card.title} className="card">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2 w-2 rounded-full"
                    style={{ background: card.accent, boxShadow: `0 0 10px ${card.accent}88` }}
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{card.title}</h3>
                    <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <p className="section-subtitle">Partner Types</p>
            <h2 className="section-title mt-2">Where MET Fits In</h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
              We collaborate across multiple layers of the nightlife ecosystem to create predictable transport outcomes.
            </p>
          </div>

          <div className="media-frame aspect-[16/9]">
            <picture>
              <source
                type="image/webp"
                srcSet={buildSrcSet(media.images.nightlifeCollage.webp)}
                sizes="(min-width: 1024px) 70vw, 95vw"
              />
              <source
                type="image/jpeg"
                srcSet={buildSrcSet(media.images.nightlifeCollage.jpg)}
                sizes="(min-width: 1024px) 70vw, 95vw"
              />
              <img
                src={media.images.nightlifeCollage.fallback}
                alt={media.images.nightlifeCollage.alt}
                loading="lazy"
              />
            </picture>
            <div className="media-overlay soft" />
          </div>

          <div className="flex flex-col gap-6">
            {categories.map((category, i) => (
              <AnimatedSection key={category.title} delay={i * 100}>
                <div className="card">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0"
                      style={{
                        background: `${category.accent}12`,
                        border: `1px solid ${category.accent}30`,
                        color: category.accent,
                        textShadow: `0 0 8px ${category.accent}55`,
                      }}
                    >
                      {category.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{category.title}</h3>
                      <p className="text-base mt-0.5" style={{ color: 'rgba(224,224,224,0.5)' }}>
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.partners.map((name) => (
                      <PartnerChip key={name} name={name} accent={category.accent} />
                    ))}
                    <span
                      className="inline-flex items-center px-4 py-2 rounded-full text-base italic"
                      style={{ color: 'rgba(224,224,224,0.3)', border: '1px dashed rgba(255,255,255,0.12)' }}
                    >
                      + more soon
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <p className="text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
              Partner Benefits
            </p>
            <ul className="mt-4 space-y-3 text-base" style={{ color: 'rgba(224,224,224,0.6)' }}>
              {[
                'Improved guest experience and safety during late-night exits',
                'Predictable transport capacity during peak demand',
                'Joint marketing and VIP coordination for key events',
                'Clear reporting on ride volume and partner performance',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-pink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <p className="text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
              Partner Expectations
            </p>
            <ul className="mt-4 space-y-3 text-base" style={{ color: 'rgba(224,224,224,0.6)' }}>
              {[
                'Clear pickup zones and venue coordination',
                'Agreed promotional cadence and event calendars',
                'Adherence to brand and customer experience standards',
                'Operational feedback loops for continuous improvement',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <p className="section-subtitle">Onboarding</p>
            <h2 className="section-title mt-2">Partnership Onboarding Flow</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {onboardingSteps.map((step) => (
              <div key={step.step} className="card flex items-start gap-4">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: 'rgba(177,75,244,0.15)', border: '1px solid rgba(177,75,244,0.35)', color: '#B14BF4' }}
                >
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <p className="section-subtitle">FAQs</p>
            <h2 className="section-title mt-2">Partnership Questions</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, index) => (
              <details key={index} className="group rounded-2xl border border-white/8 bg-charcoal/50 p-5 transition-colors hover:border-white/15">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-white">
                  <span>{item.q}</span>
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
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Link to="/book?intent=partner" className="button-primary self-start text-white">
          <span>Partner with MET</span>
        </Link>
      </AnimatedSection>
    </div>
  );
}
