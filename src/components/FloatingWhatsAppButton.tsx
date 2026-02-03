import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.5a7.5 7.5 0 0 0-6.4 11.3L5 20l4.4-1.2A7.5 7.5 0 1 0 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.6c.8 1.6 2 2.8 3.6 3.6l1.1-1.1c.2-.2.5-.3.8-.2l1.8.6c.4.1.6.5.5.9-.3 1.2-1.5 2-2.8 2-3.8 0-6.9-3.1-6.9-6.9 0-1.3.8-2.5 2-2.8.4-.1.8.1.9.5l.6 1.8c.1.3 0 .6-.2.8l-1.1 1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(BOOKING_MESSAGE)}
      className="group fixed bottom-6 right-5 z-50 flex items-center gap-2.5 rounded-full px-5 py-3 text-white shadow-glow-pink transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-3"
      style={{ background: 'linear-gradient(90deg, #FF42A1, #B14BF4, #00D2FF)' }}
      aria-label="Book a ride via WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      <span className="text-[0.68rem] font-display font-bold tracking-[0.2em] uppercase">Book Now</span>
    </a>
  );
}

