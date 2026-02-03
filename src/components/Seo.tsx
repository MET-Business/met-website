import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteMeta } from '../config/site';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
};

export default function Seo({ title, description, canonical }: SeoProps) {
  const { pathname } = useLocation();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const baseUrl = origin || siteMeta.siteUrl;
  const canonicalUrl = canonical ?? (baseUrl ? `${baseUrl}${pathname}` : undefined);
  const fullTitle = `${title} | ${siteMeta.name}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TransportationCompany',
    name: 'Ministry of Enjoyment Taxi',
    alternateName: 'MET',
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    areaServed: [
      { '@type': 'Place', name: 'Westlands, Nairobi' },
      { '@type': 'Place', name: 'Kilimani, Nairobi' },
      { '@type': 'Place', name: 'Ngong Road, Nairobi' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '17:00',
        closes: '05:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'booking',
      description: 'WhatsApp concierge',
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteMeta.ogImage} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

