import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE, PARTNER_MESSAGE } from '../config/whatsapp';

export default function Book() {
  const [params, setParams] = useSearchParams();
  const intent = params.get('intent');
  const [activeTab, setActiveTab] = useState<'book' | 'partner'>(intent === 'partner' ? 'partner' : 'book');

  useEffect(() => {
    setActiveTab(intent === 'partner' ? 'partner' : 'book');
  }, [intent]);

  const tabClass = (tab: 'book' | 'partner') =>
    `rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition ${
      activeTab === tab
        ? 'border-gold/70 bg-gold/15 text-offwhite'
        : 'border-white/15 text-offwhite/70 hover:border-gold/40 hover:text-offwhite'
    }`;

  const handleTabChange = (tab: 'book' | 'partner') => {
    setActiveTab(tab);
    if (tab === 'partner') {
      setParams({ intent: 'partner' });
      return;
    }
    setParams({});
  };

  const isPartner = activeTab === 'partner';
  const primaryMessage = isPartner ? PARTNER_MESSAGE : BOOKING_MESSAGE;

  return (
    <div className="flex flex-col gap-12">
      <Seo
        title="Book a Ride"
        description="Book a MET night ride through WhatsApp concierge for speed, clarity, and reliability."
      />

      <section className="grid gap-6">
        <p className="section-subtitle">Book</p>
        <h1 className="section-title">Book a Ride</h1>
        <p className="max-w-2xl text-base text-offwhite/75">
          Booking is concierge-based via WhatsApp for speed, clarity, and reliability.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" className={tabClass('book')} onClick={() => handleTabChange('book')}>
            Book a Ride
          </button>
          <button type="button" className={tabClass('partner')} onClick={() => handleTabChange('partner')}>
            Investor / Partner
          </button>
        </div>
      </section>

      {isPartner ? (
        <section className="card">
          <h2 className="text-lg font-semibold">Investor / Partner Inquiry</h2>
          <p className="mt-4 text-sm text-offwhite/75">
            MET works with capital partners, nightlife operators, garages, and strategic collaborators.
          </p>
        </section>
      ) : (
        <section className="card">
          <h2 className="text-lg font-semibold">Booking Template</h2>
          <div className="mt-4 rounded-xl border border-white/10 bg-ink/60 p-4 text-sm text-offwhite/75">
            <p>Date:</p>
            <p>Pickup:</p>
            <p>Drop-off:</p>
            <p>Passengers:</p>
            <p>Time:</p>
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-4">
        <a href={buildWhatsAppUrl(primaryMessage)} className="button-primary">
          {isPartner ? 'Contact MET via WhatsApp' : 'Open WhatsApp Booking'}
        </a>
        {!isPartner && (
          <a href={buildWhatsAppUrl(PARTNER_MESSAGE)} className="button-secondary">
            Partner / Invest (WhatsApp)
          </a>
        )}
      </div>
    </div>
  );
}
