// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
// import ServicePage from '@/components/services/ServicePage';
// import { services, getService } from '@/lib/services';

// export function generateStaticParams() {
//   return services.map((s) => ({ slug: s.slug }));
// }

// export function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Metadata {
//   const service = getService(params.slug);
//   if (!service) return {};
//   return {
//     title: service.metaTitle,
//     description: service.metaDescription,
//     alternates: { canonical: `/services/${service.slug}` },
//     openGraph: {
//       title: service.metaTitle,
//       description: service.metaDescription,
//       url: `https://infotechagency.com/services/${service.slug}`,
//       images: [{ url: service.image, width: 1200, height: 800, alt: service.title }],
//     },
//   };
// }

// export default function ServiceRoute({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const service = getService(params.slug);
//   if (!service) notFound();
//   return <ServicePage service={service} />;
// }

// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { fetchServiceBySlug, getAllServiceSlugs, type Service } from '@/lib/api';

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await fetchServiceBySlug(params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }
  
  return {
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.shortDescription,
    alternates: { 
      canonical: service.canonicalUrl || `/services/${service.slug}` 
    },
    openGraph: {
      title: service.metaTitle || service.title,
      description: service.metaDescription || service.shortDescription,
      url: `https://infotechagency.com/services/${service.slug}`,
      images: [
        { 
          url: service.bannerImage?.secure_url || '', 
          width: 1200, 
          height: 800, 
          alt: service.title 
        }
      ],
    },
  };
}

// Main page component
export default async function ServiceRoute({
  params,
}: {
  params: { slug: string };
}) {
  const service = await fetchServiceBySlug(params.slug);
  
  if (!service) {
    notFound();
  }
  
  return <ServicePage service={service} />;
}