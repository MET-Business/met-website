import { useEffect, useState, type CSSProperties } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE, PARTNER_MESSAGE } from '../config/whatsapp';
import { media, buildSrcSet } from '../config/media';

type BookingField = {
  label: string;
  placeholder: string;
};

type BookingTab = 'book' | 'partner';

const bookingFields: BookingField[] = [
  { label: 'Date', placeholder: 'e.g. Friday 7 Feb' },
  { label: 'Pickup', placeholder: 'e.g. Westlands CBD' },
  { label: 'Drop-off', placeholder: 'e.g. Kilimani' },
  { label: 'Passengers', placeholder: 'e.g. 4' },
  { label: 'Time', placeholder: 'e.g. 11 PM' },
];

const bookingPromises = [
  {
    title: 'Concierge Confirmation',
    description: 'Every ride is confirmed by a human operator. No ghost bookings, no silence.',
    accent: '#B14BF4',
  },
  {
    title: 'Pricing Confirmation',
    description: 'Transparent pricing confirmed before dispatch. No surprises at pickup.',
    accent: '#00D2FF',
  },
  {
    title: 'Night-Shift Drivers',
    description: 'Vetted and trained drivers optimized for nightlife movement and safety.',
    accent: '#FF42A1',
  },
];

const bookingSteps = [
  {
    title: 'Send the request',
    description: 'Share your date, pickup, drop-off, passenger count, and preferred time window.',
  },
  {
    title: 'We confirm details',
    description: 'A concierge confirms availability, pricing, and driver ETA before dispatch.',
  },
  {
    title: 'Driver is dispatched',
    description: 'A MET driver is assigned within your zone with clear pickup instructions.',
  },
];

const partnerReasons = [
  'Access to a disciplined, nightlife-focused operator built for reliable late-night movement.',
  'Consistent brand standards across vehicles and chauffeurs.',
  'Clear expectations, brand standards, and support.',
];

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'Same-day bookings are welcome, but we recommend at least 1-2 hours ahead during peak weekend windows for best availability.',
  },
  {
    q: 'Can MET handle group rides?',
    a: 'Yes. We coordinate multi-vehicle group movement and communicate clear pickup order via WhatsApp.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Core zones are Westlands, Kilimani, and Ngong Road. Requests outside core zones may be available; confirm in booking.',
  },
  {
    q: 'What happens if I need to update my booking?',
    a: 'Message the concierge directly. We’ll reconfirm the details and coordinate with the driver.',
  },
];

export default function Book() {
  const [params, setParams] = useSearchParams();
  const intent = params.get('intent');
  const [activeTab, setActiveTab] = useState<BookingTab>(intent === 'partner' ? 'partner' : 'book');

  useEffect(() => {
    setActiveTab(intent === 'partner' ? 'partner' : 'book');
  }, [intent]);

  const handleTabChange = (tab: BookingTab) => {
    setActiveTab(tab);
    setParams(tab === 'partner' ? { intent: 'partner' } : {});
  };

  const isPartner = activeTab === 'partner';
  const primaryMessage = isPartner ? PARTNER_MESSAGE : BOOKING_MESSAGE;

  const tabStyle = (tab: BookingTab): CSSProperties => {
    const active = activeTab === tab;
    return {
      background: active
        ? 'linear-gradient(90deg, rgba(255,66,161,0.18), rgba(177,75,244,0.18))'
        : 'transparent',
      border: active ? '1px solid rgba(177,75,244,0.4)' : '1px solid rgba(255,255,255,0.1)',
      color: active ? '#fff' : 'rgba(224,224,224,0.6)',
      boxShadow: active ? '0 0 14px rgba(177,75,244,0.2)' : 'none',
      transition: 'all 0.3s cubic-bezier(.22,1,.36,1)',
    };
  };

  return (
    <div className="flex flex-col gap-20 pb-10">
      <Seo
        title="Book a Ride"
        description="Book a MET night ride through WhatsApp concierge for speed, clarity, and reliability."
      />

      <AnimatedSection>
        <section className="relative grid gap-8 rounded-[28px] p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="hero-background">
            <picture>
              <source type="image/webp" srcSet={buildSrcSet(media.images.vipArrival.webp)} sizes="100vw" />
              <source type="image/jpeg" srcSet={buildSrcSet(media.images.vipArrival.jpg)} sizes="100vw" />
              <img src={media.images.vipArrival.fallback} alt={media.images.vipArrival.alt} loading="eager" />
            </picture>
          </div>
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

          <div className="hero-surface flex flex-col gap-5">
            <div>
              <p className="section-subtitle">Book</p>
              <h1 className="section-title mt-2">Book a MET Night Ride</h1>
              <p className="text-base mt-3 max-w-xl" style={{ color: 'rgba(224,224,224,0.7)' }}>
                Fast, concierge-led WhatsApp booking designed for Nairobi nightlife. Clear confirmations, transparent pricing, and
                vetted drivers from request to drop-off.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="badge">Thu–Sun · 5 PM–5 AM</span>
              <span className="badge">Westlands · Kilimani · Ngong Rd</span>
              <span className="badge">Concierge Confirmation</span>
            </div>

            <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Booking type">
              {[
                { id: 'book', label: 'Book a Ride' },
                { id: 'partner', label: 'Partner / Driver' },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === id}
                  aria-controls={`tabpanel-${id}`}
                  className="rounded-full px-5 py-2 text-base font-display font-bold tracking-[0.2em] uppercase cursor-pointer"
                  style={tabStyle(id as BookingTab)}
                  onClick={() => handleTabChange(id as BookingTab)}
                >
                  {label}
                </button>
              ))}
            </div>

            {bookingPromises.map((promise) => (
              <div key={promise.title} className="card">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2 w-2 rounded-full"
                    style={{ background: promise.accent, boxShadow: `0 0 10px ${promise.accent}88` }}
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{promise.title}</h3>
                    <p className="mt-2 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                      {promise.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-surface flex">
            <div className="media-frame h-full min-h-[520px] lg:min-h-[600px] w-full">
              <picture>
                <source
                  type="image/webp"
                  srcSet={buildSrcSet(media.images.bookingApp.webp)}
                  sizes="(min-width: 1024px) 36vw, 90vw"
                />
                <source
                  type="image/jpeg"
                  srcSet={buildSrcSet(media.images.bookingApp.jpg)}
                  sizes="(min-width: 1024px) 36vw, 90vw"
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
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="section-subtitle">Process</p>
            <h2 className="section-title mt-2">Concierge Booking Flow</h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
              A simple, human-verified flow that keeps bookings tight and predictable.
            </p>
            <div className="mt-6 grid gap-3">
              {bookingSteps.map((step, index) => (
                <div key={step.title} className="card flex items-start gap-4">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: 'rgba(0,210,255,0.15)', border: '1px solid rgba(0,210,255,0.35)', color: '#00D2FF' }}
                  >
                    {String(index + 1).padStart(2, '0')}
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

          {isPartner ? (
            <div id="tabpanel-partner" role="tabpanel" className="card max-w-lg lg:justify-self-end">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold"
                  style={{
                    background: 'rgba(255,142,113,0.15)',
                    border: '1px solid rgba(255,142,113,0.35)',
                    color: '#FF8E71',
                  }}
                >
                  P
                </span>
                <h2 className="font-display text-base font-bold text-white">Partner / Driver Inquiry</h2>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
                MET works with venues, event organizers, garages, and driver partners. Send us a WhatsApp
                message and our team will respond with next steps.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Venues', 'Event Organizers', 'Garages', 'Driver Partners'].map((tag) => (
                  <span
                    key={tag}
                    className="text-base px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(224,224,224,0.5)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                  What we share
                </p>
                <ul className="mt-3 space-y-2 text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>
                  {partnerReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div id="tabpanel-book" role="tabpanel" className="card max-w-lg lg:justify-self-end">
              <h2 className="font-display text-base font-bold text-white mb-3">Booking Template</h2>
              <p className="text-base mb-3" style={{ color: 'rgba(224,224,224,0.45)' }}>
                Copy the fields below into your WhatsApp message - or just tap the button.
              </p>
              <div
                className="rounded-xl p-4 space-y-2.5"
                style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {bookingFields.map(({ label, placeholder }) => (
                  <div key={label} className="flex items-baseline gap-2">
                    <span className="text-base font-display font-semibold text-white/60 w-20 flex-shrink-0">
                      {label}:
                    </span>
                    <span className="text-base italic" style={{ color: 'rgba(224,224,224,0.35)' }}>
                      {placeholder}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-cyan/15 bg-cyan/5 p-4">
                <p className="text-base leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  Share any special requests (extra stops, return trip, security notes) and we will confirm if the
                  driver can accommodate them.
                </p>
              </div>
            </div>
          )}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <p className="text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
              Why WhatsApp Concierge
            </p>
            <ul className="mt-4 space-y-3 text-base" style={{ color: 'rgba(224,224,224,0.65)' }}>
              {[
                'Human verification prevents cancellations and miscommunication.',
                'Real-time updates for multi-stop or group bookings.',
                'One thread for price confirmation, ETA, and changes.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <p className="text-xs uppercase tracking-[0.24em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
              Service Standards
            </p>
            <div className="mt-4 grid gap-3">
              {[
                { label: 'Response time', value: 'Fast response during operating hours' },
                { label: 'Dispatch window', value: 'Confirmed ETA before driver moves' },
                { label: 'Support', value: 'Direct WhatsApp line for adjustments' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                    {item.label}
                  </p>
                  <p className="text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <p className="section-subtitle">FAQs</p>
            <h2 className="section-title mt-2">Booking Questions, Answered</h2>
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
        <div className="flex flex-wrap gap-3">
          <a href={buildWhatsAppUrl(primaryMessage)} className="button-primary text-white">
            <span>{isPartner ? 'Contact MET via WhatsApp' : 'Open WhatsApp Booking'}</span>
          </a>
          {!isPartner && (
            <a href={buildWhatsAppUrl(PARTNER_MESSAGE)} className="button-secondary">
              Partner with MET
            </a>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
