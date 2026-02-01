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
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteMeta.ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
