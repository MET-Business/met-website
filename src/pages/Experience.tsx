import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

export default function Experience() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="flex flex-col gap-12">
        <Seo
          title="The MET Experience"
          description="MET treats the ride as part of the night without compromising safety or discipline."
        />

        <section className="grid gap-6">
          <p className="section-subtitle">Experience</p>
          <h1 className="section-title">The MET Experience</h1>
          <p className="max-w-3xl text-base text-offwhite/75">
            MET treats the ride as part of the night without compromising safety or discipline. Interiors are designed
            to feel premium and intentional: tasteful lighting, controlled music, clean vehicles, and professional
            drivers.
          </p>
          <ul className="space-y-2 text-sm text-offwhite/70">
            <li>Group-ready rides</li>
            <li>VIP vehicle options</li>
            <li>Event coordination</li>
          </ul>
          <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-primary">
            Book via WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
