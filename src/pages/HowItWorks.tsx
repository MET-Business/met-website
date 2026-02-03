import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

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
    desc: 'Send a quick message with your date, pickup, drop-off, and passenger count. Our concierge picks it up instantly.',
    color: '#FF42A1',
  },
  {
    num: '02',
    title: 'Confirm Details',
    desc: 'We confirm pickup location, number of passengers, destination, and estimated time - no guesswork.',
    color: '#B14BF4',
  },
  {
    num: '03',
    title: 'Driver Dispatched',
    desc: 'A vetted night-shift driver is dispatched within our defined operating zones. Real-time, no surge surprises.',
    color: '#00D2FF',
  },
  {
    num: '04',
    title: 'Ride and Feedback',
    desc: 'Enjoy the ride. After arrival we capture feedback to keep the standard tight - every single night.',
    color: '#FF8E71',
  },
];

const rules: Rule[] = [
  { label: 'Operating days', value: 'Thursday - Sunday' },
  { label: 'Operating hours', value: '5 PM - 5 AM' },
  { label: 'Core zones', value: 'Westlands - Kilimani - Ngong Road' },
  { label: 'Pricing', value: 'Fixed or semi-fixed - no surge surprises' },
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-16">
      <Seo
        title="How It Works"
        description="Clear, concierge-led booking and controlled dispatch inside MET's operating zones."
      />

      <AnimatedSection>
        <div className="grid gap-3 max-w-xl">
          <p className="section-subtitle">Process</p>
          <h1 className="section-title">How It Works</h1>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
            Four simple steps from request to ride - designed for speed and clarity.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="stepper max-w-lg">
          {steps.map((step, i) => (
            <div key={step.num} className="step">
              <div className="step-line">
                <div className="step-dot" style={{ borderColor: `${step.color}44`, color: step.color }}>
                  {step.num}
                </div>
                {i < steps.length - 1 && <div className="step-connector" />}
              </div>
              <div className="step-content">
                <h3 className="font-display text-sm font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
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
              className="flex w-9 h-9 items-center justify-center rounded-full text-sm font-display font-bold"
              style={{
                background: 'rgba(177,75,244,0.15)',
                border: '1px solid rgba(177,75,244,0.4)',
                color: '#B14BF4',
              }}
            >
              !
            </span>
            <h2 className="font-display text-sm font-bold text-white">Operating Rules</h2>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {rules.map(({ label, value }) => (
              <div key={label} className="flex items-start gap-2">
                <span
                  className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: '#B14BF4', boxShadow: '0 0 6px #B14BF444' }}
                />
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.18em]" style={{ color: 'rgba(224,224,224,0.5)' }}>
                    {label}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(224,224,224,0.75)' }}>
                    {value}
                  </p>
                </div>
              </div>
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

