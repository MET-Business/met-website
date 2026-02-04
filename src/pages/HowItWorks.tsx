import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';
import { media, buildSrcSet } from '../config/media';

type Step = {
  num: string;
  title: string;
  desc: string;
  color: string;
};

type Rule = {
  label: string;
  value: string;
};

const steps: Step[] = [
  {
    num: '01',
    title: 'Request via WhatsApp',
    desc: 'Send a quick message with date, pickup, drop-off, passengers, and time window.',
    color: '#FF42A1',
  },
  {
    num: '02',
    title: 'Concierge Confirmation',
    desc: 'We confirm pricing, driver ETA, and any special requirements before dispatch.',
    color: '#B14BF4',
  },
  {
    num: '03',
    title: 'Driver Dispatched',
    desc: 'A vetted night-shift driver is assigned within MET operating zones.',
    color: '#00D2FF',
  },
  {
    num: '04',
    title: 'Ride + Feedback',
    desc: 'Smooth pickup, clear drop-off, and fast feedback capture to keep standards tight.',
    color: '#FF8E71',
  },
];

const rules: Rule[] = [
  { label: 'Operating days', value: 'Thursday – Sunday' },
  { label: 'Operating hours', value: '5 PM – 5 AM' },
  { label: 'Core zones', value: 'Westlands – Kilimani – Ngong Road' },
  { label: 'Pricing model', value: 'Fixed / semi-fixed, no surge surprises' },
];

const rideTypes = [
  {
    title: 'Standard Night Ride',
    desc: 'Ideal for point-to-point trips within core zones.',
    details: ['Single stop', 'Confirmed ETA', 'Transparent pricing'],
    accent: '#B14BF4',
  },
  {
    title: 'Group Movement',
    desc: 'Multi-vehicle coordination with clear pickup order.',
    details: ['Multiple vehicles', 'Unified comms thread', 'Event-ready timing'],
    accent: '#00D2FF',
  },
  {
    title: 'VIP + Events',
    desc: 'For high-value clients or venues needing consistent brand delivery.',
    details: ['Preferred drivers', 'On-call windows', 'Priority coordination'],
    accent: '#FF42A1',
  },
];

const safeguards = [
  {
    title: 'Driver Vetting',
    desc: 'Background checks, night-shift training, and reliability incentives.',
  },
  {
    title: 'Zone Discipline',
    desc: 'Geographic focus ensures faster response times and predictable ETAs.',
  },
  {
    title: 'Escalation Protocols',
    desc: 'Direct contact line for adjustments, delays, or safety concerns.',
  },
  {
    title: 'Post-Ride Review',
    desc: 'Every ride captures feedback to keep standards consistent.',
  },
];

const faqs = [
  {
    q: 'Why no app?',
    a: 'Concierge WhatsApp booking reduces friction, keeps communication clear, and ensures human verification during peak nightlife hours.',
  },
  {
    q: 'What if I need to change my pickup?',
    a: 'Message the concierge directly. We’ll confirm updated location and timing before dispatch.',
  },
  {
    q: 'Do you operate outside core zones?',
    a: 'Yes, at premium pricing based on distance and time. We confirm this before dispatch.',
  },
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-20 pb-10">
      <Seo
        title="How It Works"
        description="Clear, concierge-led booking and controlled dispatch inside MET's operating zones."
      />

      <AnimatedSection>
        <section className="relative grid gap-8 rounded-[28px] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="hero-background">
            <picture>
              <source type="image/webp" srcSet={buildSrcSet(media.images.abstractBrand.webp)} sizes="100vw" />
              <source type="image/jpeg" srcSet={buildSrcSet(media.images.abstractBrand.jpg)} sizes="100vw" />
              <img src={media.images.abstractBrand.fallback} alt={media.images.abstractBrand.alt} loading="eager" />
            </picture>
          </div>
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

          <div className="hero-surface flex flex-col gap-5">
            <p className="section-subtitle">Process</p>
            <h1 className="section-title">How MET Works</h1>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
              MET runs a tight, concierge-led operating model built for nightlife. We focus on clarity, confirmation,
              and controlled dispatch so late-night trips stay reliable.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="badge">Concierge Confirmations</span>
              <span className="badge">Defined Zones</span>
              <span className="badge">Fixed Pricing Logic</span>
            </div>
            {[
              { label: 'Response', value: 'Fast WhatsApp confirmations during operating hours' },
              { label: 'Dispatch', value: 'Driver assigned only after ride details are verified' },
              { label: 'Support', value: 'One thread for ETA updates and adjustments' },
            ].map((item) => (
              <div key={item.label} className="card">
                <p className="text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                  {item.label}
                </p>
                <p className="mt-3 text-base font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="hero-surface flex">
            <div className="media-frame h-full min-h-[520px] lg:min-h-[600px] w-full">
              <picture>
                <source
                  type="image/webp"
                  srcSet={buildSrcSet(media.images.bookingApp.webp)}
                  sizes="(min-width: 1024px) 32vw, 90vw"
                />
                <source
                  type="image/jpeg"
                  srcSet={buildSrcSet(media.images.bookingApp.jpg)}
                  sizes="(min-width: 1024px) 32vw, 90vw"
                />
                <img
                  src={media.images.bookingApp.fallback}
                  alt={media.images.bookingApp.alt}
                  loading="eager"
                />
              </picture>
              <div className="media-overlay hero" />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-subtitle">Step by Step</p>
            <h2 className="section-title mt-2">From Request to Drop-Off</h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
              Four steps, fully controlled by a human concierge. No automated surge logic, no silent cancellations.
            </p>
            <div className="mt-6 stepper max-w-lg">
              {steps.map((step, i) => (
                <div key={step.num} className="step">
                  <div className="step-line">
                    <div className="step-dot" style={{ borderColor: `${step.color}44`, color: step.color }}>
                      {step.num}
                    </div>
                    {i < steps.length - 1 && <div className="step-connector" />}
                  </div>
                  <div className="step-content">
                    <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: 'rgba(177,75,244,0.25)',
              background: 'rgba(177,75,244,0.06)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="flex w-9 h-9 items-center justify-center rounded-full text-base font-display font-bold"
                style={{
                  background: 'rgba(177,75,244,0.15)',
                  border: '1px solid rgba(177,75,244,0.4)',
                  color: '#B14BF4',
                }}
              >
                !
              </span>
              <h2 className="font-display text-base font-bold text-white">Operating Rules</h2>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {rules.map(({ label, value }) => (
                <div key={label} className="flex items-start gap-2">
                  <span
                    className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: '#B14BF4', boxShadow: '0 0 6px #B14BF444' }}
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                      {label}
                    </p>
                    <p className="text-base" style={{ color: 'rgba(224,224,224,0.75)' }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
                MET runs tight geographic coverage to keep drivers close, response times fast, and ride quality consistent.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-3xl">
            <p className="section-subtitle">Ride Types</p>
            <h2 className="section-title mt-2">Choose the Experience Level</h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
              From standard pickups to VIP coordination, MET adapts while keeping the same operating discipline.
            </p>
          </div>
          <div className="media-frame aspect-[16/9]">
            <picture>
              <source
                type="image/webp"
                srcSet={buildSrcSet(media.images.vipArrival.webp)}
                sizes="(min-width: 1024px) 70vw, 95vw"
              />
              <source
                type="image/jpeg"
                srcSet={buildSrcSet(media.images.vipArrival.jpg)}
                sizes="(min-width: 1024px) 70vw, 95vw"
              />
              <img src={media.images.vipArrival.fallback} alt={media.images.vipArrival.alt} loading="lazy" />
            </picture>
            <div className="media-overlay soft" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {rideTypes.map((ride) => (
              <div key={ride.title} className="card group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: ride.accent, boxShadow: `0 0 10px ${ride.accent}66` }}
                    />
                    <h3 className="font-display text-base font-bold text-white">{ride.title}</h3>
                  </div>
                  <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
                    {ride.desc}
                  </p>
                  <ul className="mt-4 space-y-2 text-base" style={{ color: 'rgba(224,224,224,0.6)' }}>
                    {ride.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1 w-1 rounded-full bg-white/40" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `${ride.accent}25` }}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <p className="text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
              Safety + Reliability
            </p>
            <div className="mt-4 grid gap-3">
              {safeguards.map((item) => (
                <div key={item.title}>
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-base" style={{ color: 'rgba(224,224,224,0.6)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <p className="text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
              Edge Cases We Handle
            </p>
            <ul className="mt-4 space-y-3 text-base" style={{ color: 'rgba(224,224,224,0.6)' }}>
              {[
                'Late-night venue exits with multiple vehicles',
                'Pickup changes after midnight',
                'Priority for trusted partner venues',
                'Return trips with fixed wait windows',
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
            <p className="section-subtitle">FAQs</p>
            <h2 className="section-title mt-2">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="group rounded-2xl border border-white/8 bg-charcoal/50 p-5 transition-colors hover:border-white/15">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-white">
                  <span>{faq.q}</span>
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
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary self-start text-white">
          <span>Book via WhatsApp</span>
        </a>
      </AnimatedSection>
    </div>
  );
}
