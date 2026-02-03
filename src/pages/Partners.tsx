import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';

type PartnerCategory = {
  title: string;
  accent: string;
  icon: string;
  description: string;
  partners: string[];
};

type PartnerChipProps = {
  name: string;
  accent: string;
};

const categories: PartnerCategory[] = [
  {
    title: 'Clubs and Events',
    accent: '#FF42A1',
    icon: 'C',
    description: 'Nightlife venues and event organizers who recommend MET to their patrons.',
    partners: ['Milan', 'Alchemist', '1824', 'K1'],
  },
  {
    title: 'Vehicle and Garage Partners',
    accent: '#B14BF4',
    icon: 'V',
    description: 'Car tuning and rental garages supplying branded, maintained fleet vehicles.',
    partners: ['Car Planet', 'AutoXpress', 'Import Garage'],
  },
  {
    title: 'Campus and Promoters',
    accent: '#00D2FF',
    icon: 'U',
    description: 'University campus promoters and private hosts driving young-professional demand.',
    partners: ['Strathmore', 'USIU', 'KU', 'Daystar'],
  },
];

function PartnerChip({ name, accent }: PartnerChipProps) {
  return (
    <span
      className="inline-flex items-center px-4 py-2 rounded-full text-xs font-display font-semibold transition-all duration-300 hover:-translate-y-0.5"
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
    <div className="flex flex-col gap-16">
      <Seo
        title="Partners"
        description="MET integrates into Nairobi's nightlife ecosystem through disciplined partnerships."
      />

      <AnimatedSection>
        <div className="grid gap-4 max-w-2xl">
          <p className="section-subtitle">Partners</p>
          <h1 className="section-title">Partners</h1>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
            MET integrates into Nairobi's nightlife ecosystem through disciplined partnerships -
            clubs, event organizers, garages, campuses, and private hosts.
          </p>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-6">
        {categories.map((category, i) => (
          <AnimatedSection key={category.title} delay={i * 100}>
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
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
                  <h2 className="font-display text-sm font-bold text-white">{category.title}</h2>
                  <p className="text-[0.68rem] mt-0.5" style={{ color: 'rgba(224,224,224,0.5)' }}>
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {category.partners.map((name) => (
                  <PartnerChip key={name} name={name} accent={category.accent} />
                ))}
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-[0.65rem] italic"
                  style={{ color: 'rgba(224,224,224,0.3)', border: '1px dashed rgba(255,255,255,0.12)' }}
                >
                  + more soon
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <Link to="/book?intent=partner" className="button-primary self-start text-white">
          <span>Partner with MET</span>
        </Link>
      </AnimatedSection>
    </div>
  );
}

