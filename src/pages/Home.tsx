import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

type StatCardProps = {
  label: string;
  value: string;
};

type FeatureCardProps = {
  title: string;
  items: string[];
  accentColor?: string;
};

type HighlightCardProps = {
  title: string;
  sub: string;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="card flex flex-col gap-2">
      <p className="text-[0.62rem] uppercase tracking-[0.22em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
        {label}
      </p>
      <p className="font-display text-lg font-bold text-white">{value}</p>
    </div>
  );
}

function FeatureCard({ title, items, accentColor = '#B14BF4' }: FeatureCardProps) {
  return (
    <div className="card">
      <div className="flex items-center gap-2.5 mb-3">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: accentColor, boxShadow: `0 0 10px ${accentColor}66` }}
          aria-hidden="true"
        />
        <h3 className="font-display text-sm font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-xs" style={{ color: 'rgba(224,224,224,0.6)' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HighlightCard({ title, sub }: HighlightCardProps) {
  return (
    <div className="card">
      <p className="text-xs font-display font-bold text-white">{title}</p>
      <p className="mt-2 text-xs" style={{ color: 'rgba(224,224,224,0.6)' }}>
        {sub}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Seo
        title="Home"
        description="MET is Nairobi's nightlife transport operator built for late-night reliability, safety, and premium group movement."
      />

      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2.5">
            <span className="badge">Nairobi Night Ops</span>
            <span className="badge">Thu-Sun - 5 PM-5 AM</span>
            <span className="badge">Westlands - Kilimani - Ngong Rd</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl animate-fadeInUp">
            Night Transport, <span className="text-gradient-brand">Engineered</span> for Nairobi's Night Economy
          </h1>

          <p className="text-sm leading-relaxed" style={{ color: 'rgba(224,224,224,0.7)', maxWidth: '480px' }}>
            Ministry of Enjoyment Taxi (MET) is a nightlife-focused transport operator designed
            for late-night reliability, safety, and premium group movement where conventional
            ride-hailing systems fall short.
          </p>

          <ul className="space-y-1.5 text-xs" style={{ color: 'rgba(224,224,224,0.55)' }}>
            <li className="flex items-center gap-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-purple"
                style={{ boxShadow: '0 0 6px #B14BF4' }}
              />
              Controlled fleet access (leased / partner vehicles)
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan" style={{ boxShadow: '0 0 6px #00D2FF' }} />
              Professionally vetted night-shift drivers
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink" style={{ boxShadow: '0 0 6px #FF42A1' }} />
              Fixed operating windows and defined zones
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-2">
            <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary text-white">
              <span>Book via WhatsApp</span>
            </a>
            <Link to="/book?intent=partner" className="button-secondary">
              Investor / Partner
            </Link>
          </div>
        </div>

        <div
          className="rounded-2xl border border-white/8 p-5"
          style={{ background: 'rgba(14,14,16,0.7)', backdropFilter: 'blur(8px)' }}
        >
          <div className="glow-block h-full min-h-[260px] flex flex-col justify-between">
            <p className="text-[0.62rem] uppercase tracking-[0.28em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
              MET Snapshot
            </p>
            <div className="space-y-3 text-xs" style={{ color: 'rgba(224,224,224,0.65)' }}>
              <p>Thu-Sun operations built around Nairobi nightlife demand.</p>
              <p>Concierge booking with controlled dispatch.</p>
              <p>Premium, reliable group movement during peak risk hours.</p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <div className="grid gap-4">
          <p className="section-subtitle">The Problem</p>
          <h2 className="section-title">The Night Transport Gap</h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(224,224,224,0.65)' }}>
            After 9 PM, ride availability declines, surge pricing becomes unpredictable,
            and drivers selectively avoid certain trips. Large ride-hailing platforms optimize
            for daytime volume - not late-night security risk, group logistics, or event-driven
            demand spikes.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { title: 'Availability Crisis', description: 'Declining driver presence after 9 PM' },
              { title: 'Surge Chaos', description: 'Unpredictable pricing spikes' },
              { title: 'Selective Service', description: 'Drivers avoiding high-risk trips' },
            ].map(({ title, description }) => (
              <div key={title} className="card">
                <p className="text-xs font-display font-bold text-white">{title}</p>
                <p className="mt-2 text-xs" style={{ color: 'rgba(224,224,224,0.6)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <div>
            <p className="section-subtitle">MET's Solution</p>
            <h2 className="section-title mt-1">A Focused Operator, Not a Ride-Hailing App</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard
              title="Controlled Operations"
              accentColor="#FF42A1"
              items={['Fixed hours: Thu-Sun, 5 PM-5 AM', 'Defined nightlife zones', 'Fixed or semi-fixed pricing logic']}
            />
            <FeatureCard
              title="Asset-Light Fleet"
              accentColor="#B14BF4"
              items={['Leased or garage-partner vehicles', 'Brand consistency and maintenance standards', 'Scalable without heavy asset risk']}
            />
            <FeatureCard
              title="Professional Night Drivers"
              accentColor="#00D2FF"
              items={['Vetted and trained for nightlife conditions', 'Reliability incentives', 'Clear escalation and safety procedures']}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-5">
          <div>
            <p className="section-subtitle">Investment Highlights</p>
            <h2 className="section-title mt-1">Why MET</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <HighlightCard title="Asset-light fleet strategy" sub="Leased and partner vehicles reduce capital risk" />
            <HighlightCard title="Defined operating windows" sub="Thu-Sun, 5 PM-5 AM - maximum utilization" />
            <HighlightCard title="Focused zones" sub="Westlands - Kilimani - Ngong Road" />
            <HighlightCard title="Early profitability logic" sub="Pilot break-even in 2-3 months" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-5">
          <div>
            <p className="section-subtitle">Unit Economics</p>
            <h2 className="section-title mt-1">Built for Early Profitability</h2>
          </div>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-5">
            <StatCard label="Pilot Fleet" value="2-3 vehicles" />
            <StatCard label="Revenue Potential" value="~KES 1.0M+" />
            <StatCard label="Operating Cost" value="~KES 875K" />
            <StatCard label="Target Margin" value="18-20%" />
            <StatCard label="Break-even" value="2-3 months" />
          </div>
          <p className="text-[0.65rem]" style={{ color: 'rgba(224,224,224,0.35)' }}>
            Metrics represent pilot assumptions and disciplined utilization targets.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-5">
          <div>
            <p className="section-subtitle">Operating Model</p>
            <h2 className="section-title mt-1">How MET Operates</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: 'Zones', value: 'Westlands - Kilimani - Ngong Road (other areas at premium)' },
              { label: 'Hours', value: 'Thu-Sun, 5 PM-5 AM' },
              { label: 'Booking', value: 'WhatsApp concierge confirmation' },
              { label: 'Experience', value: 'Tasteful lighting, controlled music, professional drivers' },
            ].map(({ label, value }) => (
              <div key={label} className="card">
                <p className="text-[0.62rem] uppercase tracking-[0.22em]" style={{ color: 'rgba(224,224,224,0.45)' }}>
                  {label}
                </p>
                <p className="mt-2 text-xs" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-5">
          <div>
            <p className="section-subtitle">Pilot Readiness</p>
            <h2 className="section-title mt-1">Ready to Launch</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              'Driver vetting and night-shift protocols (defined)',
              'Garage and vehicle partnership model (defined)',
              'Fixed pricing logic and zone controls (defined)',
              'Safety escalation and incident handling (defined)',
            ].map((item) => (
              <div key={item} className="card flex items-center gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,210,255,0.15)', border: '1px solid rgba(0,210,255,0.35)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-xs" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div
          className="rounded-2xl border border-white/8 p-8 md:p-12"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,66,161,0.08) 0%, rgba(177,75,244,0.06) 50%, rgba(0,210,255,0.08) 100%)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="section-subtitle">Get Started</p>
              <h2 className="section-title mt-1">
                Predictability in the Most <span className="text-gradient-brand">Unpredictable</span> Hours
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)', maxWidth: '440px' }}>
                Whether you're moving people or deploying capital - MET delivers control,
                safety, and consistent service during Nairobi's peak nightlife hours.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end md:justify-center">
              <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary text-white">
                <span>Book via WhatsApp</span>
              </a>
              <Link to="/book?intent=partner" className="button-secondary">
                Partner / Invest
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

