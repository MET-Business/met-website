import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

type ExperiencePoint = {
  icon: string;
  title: string;
  description: string;
  accent: string;
};

const experiencePoints: ExperiencePoint[] = [
  {
    icon: '*',
    title: 'Tasteful Lighting',
    description:
      'Ambient interior lighting that sets the mood - not a disco, not a flashlight. Intentional and premium.',
    accent: '#FF42A1',
  },
  {
    icon: '~',
    title: 'Controlled Music',
    description:
      'Curated, low-volume soundscapes that complement the night without overpowering conversation.',
    accent: '#B14BF4',
  },
  {
    icon: '+',
    title: 'Clean Vehicles',
    description: 'Every ride starts fresh. Maintained to brand standard - inside and out, every shift.',
    accent: '#00D2FF',
  },
  {
    icon: '#',
    title: 'Professional Drivers',
    description: 'Vetted, night-shift trained, and incentivized for reliability. The ride feels safe before it starts.',
    accent: '#FF8E71',
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-16">
      <Seo
        title="The MET Experience"
        description="MET treats the ride as part of the night without compromising safety or discipline."
      />

      <AnimatedSection>
        <div className="grid gap-4 max-w-2xl">
          <p className="section-subtitle">Experience</p>
          <h1 className="section-title">The MET Experience</h1>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
            MET treats the ride as part of the night without compromising safety or discipline.
            Interiors are designed to feel premium and intentional - every detail considered.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-4 md:grid-cols-2">
        {experiencePoints.map((point, i) => (
          <AnimatedSection key={point.title} delay={i * 80}>
            <div className="card h-full">
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{
                    background: `${point.accent}15`,
                    border: `1px solid ${point.accent}33`,
                    color: point.accent,
                    textShadow: `0 0 8px ${point.accent}66`,
                  }}
                >
                  {point.icon}
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">{point.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'rgba(224,224,224,0.6)' }}>
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div
          className="rounded-2xl border border-white/8 p-6 md:p-8"
          style={{ background: 'rgba(14,14,16,0.7)', backdropFilter: 'blur(6px)' }}
        >
          <h2 className="font-display text-sm font-bold text-white mb-4">What's Included in Every Ride</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Group-ready rides', 'VIP vehicle options', 'Event coordination'].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span
                  className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(177,75,244,0.2)', border: '1px solid rgba(177,75,244,0.4)' }}
                >
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#B14BF4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-xs" style={{ color: 'rgba(224,224,224,0.7)' }}>
                  {item}
                </span>
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

