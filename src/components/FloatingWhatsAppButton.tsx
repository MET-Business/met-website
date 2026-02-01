import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(BOOKING_MESSAGE)}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-gold/60 bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-glow transition hover:-translate-y-1 hover:bg-[#dab35c] md:px-4"
      aria-label="Book via WhatsApp"
    >
      <span aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4.5a7.5 7.5 0 0 0-6.4 11.3L5 20l4.4-1.2A7.5 7.5 0 1 0 12 4.5Z"
            stroke="#0b0b0c"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9.2 9.6c.8 1.6 2 2.8 3.6 3.6l1.1-1.1c.2-.2.5-.3.8-.2l1.8.6c.4.1.6.5.5.9-.3 1.2-1.5 2-2.8 2-3.8 0-6.9-3.1-6.9-6.9 0-1.3.8-2.5 2-2.8.4-.1.8.1.9.5l.6 1.8c.1.3 0 .6-.2.8l-1.1 1.1Z" fill="#0b0b0c" />
        </svg>
      </span>
      <span className="md:hidden">WhatsApp</span>
      <span className="pointer-events-none absolute right-full top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-offwhite/80 opacity-0 shadow-glow transition group-hover:opacity-100 md:block">
        Book via WhatsApp
      </span>
    </a>
  );
}
