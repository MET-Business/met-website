import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-12">
      <Seo
        title="How It Works"
        description="Clear, concierge-led booking and controlled dispatch inside MET's operating zones."
      />

      <section className="grid gap-6">
        <p className="section-subtitle">How It Works</p>
        <h1 className="section-title">How It Works</h1>
        <ol className="space-y-3 text-sm text-offwhite/70">
          <li>1) Request via WhatsApp</li>
          <li>2) Confirm pickup, passengers, destination</li>
          <li>3) Driver dispatched within operating zones</li>
          <li>4) Ride completed and feedback captured</li>
        </ol>
      </section>

      <section className="card border-gold/25 bg-charcoal/80">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-sm font-semibold text-gold">
            !
          </span>
          <h2 className="text-lg font-semibold">Operating Rules</h2>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
          <li>Operating days: ThuSun</li>
          <li>Operating hours: 5 PM5 AM</li>
          <li>Core zones: Westlands, Kilimani, Ngong Road</li>
          <li>Pricing: fixed or semi-fixed; no surge surprises</li>
        </ul>
      </section>

      <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary">
        Book via WhatsApp
      </a>
    </div>
  );
}
