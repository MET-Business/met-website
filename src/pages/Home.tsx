import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Seo
        title="Home"
        description="MET is Nairobi's nightlife transport operator built for late-night reliability, safety, and premium group movement."
      />

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            <span className="badge">Nairobi Night Operations</span>
            <span className="badge">ThuSun 5 PM 5 AM</span>
            <span className="badge">Westlands Kilimani Ngong Road</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Night Transport, Engineered for Nairobis Night Economy
          </h1>
          <p className="text-lg text-offwhite/80">
            Ministry of Enjoyment Taxi (MET) is a nightlife-focused transport operator designed for late-night reliability,
            safety, and premium group movement where conventional ride-hailing systems fall short.
          </p>
          <ul className="space-y-2 text-sm text-offwhite/70">
            <li>Controlled fleet access (leased/partner vehicles)</li>
            <li>Professionally vetted night-shift drivers</li>
            <li>Fixed operating windows and defined zones</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary">
              Book via WhatsApp
            </a>
            <Link to="/book?intent=partner" className="button-secondary">
              Investor / Partner Inquiry
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-charcoal/60 p-6 shadow-glow">
          <div className="glow-block h-full min-h-[280px] rounded-2xl border border-white/10 p-6">
            <div className="flex h-full flex-col justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-offwhite/60">MET Snapshot</p>
              <div className="space-y-3 text-sm text-offwhite/70">
                <p>ThuSun operations built around Nairobi nightlife demand.</p>
                <p>Concierge booking with controlled dispatch.</p>
                <p>Premium, reliable group movement during peak risk hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <p className="section-subtitle">The Problem</p>
        <h2 className="section-title">The Night Transport Gap</h2>
        <p className="max-w-3xl text-base text-offwhite/75">
          After 9 PM, ride availability declines, surge pricing becomes unpredictable, and drivers selectively avoid
          certain trips. Large ride-hailing platforms optimize for daytime volume not late-night security risk, group
          logistics, or event-driven demand spikes.
        </p>
      </section>

      <section className="grid gap-8">
        <div>
          <p className="section-subtitle">METs Solution</p>
          <h2 className="section-title">A Focused Operator, Not a Ride-Hailing App</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold">Controlled Operations</h3>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
              <li>Fixed operating hours (ThuSun, 5 PM5 AM)</li>
              <li>Defined nightlife zones (Westlands, Kilimani, Ngong Road)</li>
              <li>Fixed or semi-fixed pricing logic</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Asset-Light Fleet Strategy</h3>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
              <li>Leased or garage-partner vehicles</li>
              <li>Brand consistency and maintenance standards</li>
              <li>Scalable without heavy asset risk</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Professional Night Drivers</h3>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
              <li>Vetted and trained for nightlife conditions</li>
              <li>Reliability incentives</li>
              <li>Clear escalation and safety procedures</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8">
        <div>
          <p className="section-subtitle">Investment Highlights</p>
          <h2 className="section-title">Investment Highlights</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <p className="text-sm font-semibold">Asset-light fleet strategy</p>
            <p className="mt-3 text-sm text-offwhite/70">Leased & partner vehicles</p>
          </div>
          <div className="card">
            <p className="text-sm font-semibold">Defined operating windows</p>
            <p className="mt-3 text-sm text-offwhite/70">ThuSun, 5 PM5 AM</p>
          </div>
          <div className="card">
            <p className="text-sm font-semibold">Focused zones</p>
            <p className="mt-3 text-sm text-offwhite/70">Westlands, Kilimani, Ngong Road</p>
          </div>
          <div className="card">
            <p className="text-sm font-semibold">Early profitability logic</p>
            <p className="mt-3 text-sm text-offwhite/70">Pilot break-even in 23 months</p>
          </div>
        </div>
      </section>

      <section className="grid gap-8">
        <div>
          <p className="section-subtitle">Pilot Readiness</p>
          <h2 className="section-title">Pilot Readiness</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <p className="text-sm text-offwhite/75">Driver vetting & night-shift protocols (defined)</p>
          </div>
          <div className="card">
            <p className="text-sm text-offwhite/75">Garage & vehicle partnership model (defined)</p>
          </div>
          <div className="card">
            <p className="text-sm text-offwhite/75">Fixed pricing logic and zone controls (defined)</p>
          </div>
          <div className="card">
            <p className="text-sm text-offwhite/75">Safety escalation and incident handling procedures (defined)</p>
          </div>
        </div>
      </section>

      <section className="grid gap-8">
        <div>
          <p className="section-subtitle">Unit Economics</p>
          <h2 className="section-title">Built for Early Profitability</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Pilot fleet</p>
            <p className="mt-3 text-lg font-semibold">23 vehicles</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Revenue potential</p>
            <p className="mt-3 text-lg font-semibold">~KES 1.0M+/month</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Operating cost</p>
            <p className="mt-3 text-lg font-semibold">~KES 875K/month</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Target margin</p>
            <p className="mt-3 text-lg font-semibold">18-20%</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Break-even</p>
            <p className="mt-3 text-lg font-semibold">23 months</p>
          </div>
        </div>
        <p className="text-xs text-offwhite/60">
          Metrics shown represent pilot assumptions and disciplined utilization targets.
        </p>
      </section>

      <section className="grid gap-8">
        <div>
          <p className="section-subtitle">Operating Model Snapshot</p>
          <h2 className="section-title">How MET Operates</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Zones</p>
            <p className="mt-3 text-sm text-offwhite/75">
              Westlands Kilimani Ngong Road (other areas priced at a premium)
            </p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Hours</p>
            <p className="mt-3 text-sm text-offwhite/75">ThuSun, 5 PM5 AM</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Booking</p>
            <p className="mt-3 text-sm text-offwhite/75">WhatsApp concierge confirmation</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-offwhite/60">Experience</p>
            <p className="mt-3 text-sm text-offwhite/75">
              Tasteful lighting, controlled music, professional drivers
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gold/20 bg-charcoal/70 p-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="section-subtitle">Final CTA</p>
            <h2 className="section-title">Predictability in the Most Unpredictable Hours</h2>
            <p className="mt-4 text-base text-offwhite/75">
              Whether youre moving people or deploying capital MET is built to deliver control, safety, and consistent
              service during Nairobis peak nightlife hours.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end md:justify-center">
            <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary">
              Book via WhatsApp
            </a>
            <Link to="/book?intent=partner" className="button-secondary">
              Partner / Invest
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
