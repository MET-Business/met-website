const numberFromEnv = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

export const WHATSAPP_NUMBER = numberFromEnv && numberFromEnv.length > 0 ? numberFromEnv : '2547XXXXXXXX';

export const BOOKING_MESSAGE =
  "Hi MET, I'd like to book a night ride.\nDate: ____\nPickup: ____\nDrop-off: ____\nPassengers: ____\nTime: ____";

export const PARTNER_MESSAGE =
  "Hi MET, I'm interested in partnering with MET (venue, event organizer, or driver). Please share next steps.";

export const buildWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

