import type { Metadata } from 'next';
import PortfolioContent from '@/components/portfolio/PortfolioContent';

export const metadata: Metadata = {
  title: 'Portfolio | Our Work & Client Projects',
  description:
    'Explore our portfolio of brands we have helped grow through data-driven digital marketing — SEO, PPC, web development, and more.',
  alternates: { canonical: '/our-work/portfolio' },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
