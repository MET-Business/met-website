type ResponsiveSource = {
  webp: string[];
  jpg: string[];
  fallback: string;
  alt: string;
};

const widthFromPath = (path: string) => {
  const match = path.match(/-(\d+)\./);
  return match ? `${match[1]}w` : '';
};

export const buildSrcSet = (sources: string[]) =>
  sources
    .map((src) => {
      const width = widthFromPath(src);
      return width ? `${src} ${width}` : src;
    })
    .join(', ');

export const media = {
  basePath: '/images/optimized',
  images: {
    heroNightCity: {
      alt: 'Night ride through Nairobi city lights',
      webp: [
        '/images/optimized/hero-night-city-1536.webp',
        '/images/optimized/hero-night-city-1280.webp',
        '/images/optimized/hero-night-city-960.webp',
        '/images/optimized/hero-night-city-640.webp',
      ],
      jpg: [
        '/images/optimized/hero-night-city-1536.jpg',
        '/images/optimized/hero-night-city-1280.jpg',
        '/images/optimized/hero-night-city-960.jpg',
        '/images/optimized/hero-night-city-640.jpg',
      ],
      fallback: '/images/optimized/hero-night-city-1280.jpg',
    } satisfies ResponsiveSource,
    partyInterior: {
      alt: 'Premium vehicle interior lighting for nightlife',
      webp: [
        '/images/optimized/party-interior-1536.webp',
        '/images/optimized/party-interior-1280.webp',
        '/images/optimized/party-interior-960.webp',
        '/images/optimized/party-interior-640.webp',
      ],
      jpg: [
        '/images/optimized/party-interior-1536.jpg',
        '/images/optimized/party-interior-1280.jpg',
        '/images/optimized/party-interior-960.jpg',
        '/images/optimized/party-interior-640.jpg',
      ],
      fallback: '/images/optimized/party-interior-1280.jpg',
    } satisfies ResponsiveSource,
    fleetGarage: {
      alt: 'MET fleet and garage lineup',
      webp: [
        '/images/optimized/fleet-garage-1536.webp',
        '/images/optimized/fleet-garage-1280.webp',
        '/images/optimized/fleet-garage-960.webp',
        '/images/optimized/fleet-garage-640.webp',
      ],
      jpg: [
        '/images/optimized/fleet-garage-1536.jpg',
        '/images/optimized/fleet-garage-1280.jpg',
        '/images/optimized/fleet-garage-960.jpg',
        '/images/optimized/fleet-garage-640.jpg',
      ],
      fallback: '/images/optimized/fleet-garage-1280.jpg',
    } satisfies ResponsiveSource,
    professionalDriver: {
      alt: 'Professional MET night-shift driver',
      webp: [
        '/images/optimized/professional-driver-1536.webp',
        '/images/optimized/professional-driver-1280.webp',
        '/images/optimized/professional-driver-960.webp',
        '/images/optimized/professional-driver-640.webp',
      ],
      jpg: [
        '/images/optimized/professional-driver-1536.jpg',
        '/images/optimized/professional-driver-1280.jpg',
        '/images/optimized/professional-driver-960.jpg',
        '/images/optimized/professional-driver-640.jpg',
      ],
      fallback: '/images/optimized/professional-driver-1280.jpg',
    } satisfies ResponsiveSource,
    groupNightlife: {
      alt: 'Group nightlife energy and friends heading out',
      webp: [
        '/images/optimized/group-nightlife-1536.webp',
        '/images/optimized/group-nightlife-1280.webp',
        '/images/optimized/group-nightlife-960.webp',
        '/images/optimized/group-nightlife-640.webp',
      ],
      jpg: [
        '/images/optimized/group-nightlife-1536.jpg',
        '/images/optimized/group-nightlife-1280.jpg',
        '/images/optimized/group-nightlife-960.jpg',
        '/images/optimized/group-nightlife-640.jpg',
      ],
      fallback: '/images/optimized/group-nightlife-1280.jpg',
    } satisfies ResponsiveSource,
    vipArrival: {
      alt: 'VIP arrival with premium transport',
      webp: [
        '/images/optimized/vip-arrival-1536.webp',
        '/images/optimized/vip-arrival-1280.webp',
        '/images/optimized/vip-arrival-960.webp',
        '/images/optimized/vip-arrival-640.webp',
      ],
      jpg: [
        '/images/optimized/vip-arrival-1536.jpg',
        '/images/optimized/vip-arrival-1280.jpg',
        '/images/optimized/vip-arrival-960.jpg',
        '/images/optimized/vip-arrival-640.jpg',
      ],
      fallback: '/images/optimized/vip-arrival-1280.jpg',
    } satisfies ResponsiveSource,
    bookingApp: {
      alt: 'Booking flow on mobile app screen',
      webp: [
        '/images/optimized/booking-app-1024.webp',
        '/images/optimized/booking-app-768.webp',
        '/images/optimized/booking-app-512.webp',
      ],
      jpg: [
        '/images/optimized/booking-app-1024.jpg',
        '/images/optimized/booking-app-768.jpg',
        '/images/optimized/booking-app-512.jpg',
      ],
      fallback: '/images/optimized/booking-app-768.jpg',
    } satisfies ResponsiveSource,
    abstractBrand: {
      alt: 'Abstract neon brand background',
      webp: [
        '/images/optimized/abstract-brand-1536.webp',
        '/images/optimized/abstract-brand-1280.webp',
        '/images/optimized/abstract-brand-960.webp',
        '/images/optimized/abstract-brand-640.webp',
      ],
      jpg: [
        '/images/optimized/abstract-brand-1536.jpg',
        '/images/optimized/abstract-brand-1280.jpg',
        '/images/optimized/abstract-brand-960.jpg',
        '/images/optimized/abstract-brand-640.jpg',
      ],
      fallback: '/images/optimized/abstract-brand-1280.jpg',
    } satisfies ResponsiveSource,
    nightlifeCollage: {
      alt: 'Nightlife collage and vibe montage',
      webp: [
        '/images/optimized/nightlife-collage-1536.webp',
        '/images/optimized/nightlife-collage-1280.webp',
        '/images/optimized/nightlife-collage-960.webp',
        '/images/optimized/nightlife-collage-640.webp',
      ],
      jpg: [
        '/images/optimized/nightlife-collage-1536.jpg',
        '/images/optimized/nightlife-collage-1280.jpg',
        '/images/optimized/nightlife-collage-960.jpg',
        '/images/optimized/nightlife-collage-640.jpg',
      ],
      fallback: '/images/optimized/nightlife-collage-1280.jpg',
    } satisfies ResponsiveSource,
  },
  pageMap: {
    home: {
      hero: 'heroNightCity',
      support: 'groupNightlife',
      ambient: 'abstractBrand',
    },
    experience: {
      hero: 'partyInterior',
      support: 'professionalDriver',
      ambient: 'abstractBrand',
    },
    howItWorks: {
      hero: 'bookingApp',
      support: 'vipArrival',
      ambient: 'abstractBrand',
    },
    book: {
      hero: 'vipArrival',
      support: 'bookingApp',
      ambient: 'abstractBrand',
    },
    partners: {
      hero: 'fleetGarage',
      support: 'nightlifeCollage',
      ambient: 'abstractBrand',
    },
  },
} as const;
