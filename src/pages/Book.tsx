import { useEffect, useState, type CSSProperties } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE, PARTNER_MESSAGE } from '../config/whatsapp';

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
    <div className="flex flex-col gap-14">
      <Seo
        title="Book a Ride"
        description="Book a MET night ride through WhatsApp concierge for speed, clarity, and reliability."
      />

      <AnimatedSection>
        <div className="grid gap-5">
          <div>
            <p className="section-subtitle">Book</p>
            <h1 className="section-title mt-1">Book a Ride</h1>
            <p className="text-sm mt-2 max-w-md" style={{ color: 'rgba(224,224,224,0.6)' }}>
              Booking is concierge-based via WhatsApp for speed, clarity, and reliability.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Booking type">
            {[
              { id: 'book', label: 'Book a Ride' },
              { id: 'partner', label: 'Investor / Partner' },
            ].map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeTab === id}
                aria-controls={`tabpanel-${id}`}
                className="rounded-full px-5 py-2 text-[0.68rem] font-display font-bold tracking-[0.2em] uppercase cursor-pointer"
                style={tabStyle(id as BookingTab)}
                onClick={() => handleTabChange(id as BookingTab)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {isPartner ? (
          <div id="tabpanel-partner" role="tabpanel" className="card max-w-lg">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'rgba(255,142,113,0.15)',
                  border: '1px solid rgba(255,142,113,0.35)',
                  color: '#FF8E71',
                }}
              >
                P
              </span>
              <h2 className="font-display text-sm font-bold text-white">Investor / Partner Inquiry</h2>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(224,224,224,0.65)' }}>
              MET works with capital partners, nightlife operators, garages, and strategic
              collaborators. Send us a WhatsApp message and our team will respond with next steps
              and the full investor overview.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Capital Partners', 'Nightlife Operators', 'Garages', 'Strategic Collaborators'].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.62rem] px-2.5 py-1 rounded-full"
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
          </div>
        ) : (
          <div id="tabpanel-book" role="tabpanel" className="card max-w-lg">
            <h2 className="font-display text-sm font-bold text-white mb-3">Booking Template</h2>
            <p className="text-[0.68rem] mb-3" style={{ color: 'rgba(224,224,224,0.45)' }}>
              Copy the fields below into your WhatsApp message - or just tap the button.
            </p>
            <div
              className="rounded-xl p-4 space-y-2.5"
              style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {bookingFields.map(({ label, placeholder }) => (
                <div key={label} className="flex items-baseline gap-2">
                  <span className="text-[0.7rem] font-display font-semibold text-white/60 w-20 flex-shrink-0">
                    {label}:
                  </span>
                  <span className="text-[0.7rem] italic" style={{ color: 'rgba(224,224,224,0.35)' }}>
                    {placeholder}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-wrap gap-3">
          <a href={buildWhatsAppUrl(primaryMessage)} className="button-primary text-white">
            <span>{isPartner ? 'Contact MET via WhatsApp' : 'Open WhatsApp Booking'}</span>
          </a>
          {!isPartner && (
            <a href={buildWhatsAppUrl(PARTNER_MESSAGE)} className="button-secondary">
              Partner / Invest
            </a>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}

