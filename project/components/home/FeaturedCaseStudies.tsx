// import Link from 'next/link';
// import Image from 'next/image';
// import { ArrowRight, TrendingUp } from 'lucide-react';
// import SectionHeading from '@/components/common/SectionHeading';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// import { caseStudies } from '@/lib/case-studies';

// export default function FeaturedCaseStudies() {
//   const featured = caseStudies.slice(0, 3);

//   return (
//     <section className="bg-sky py-20 lg:py-28">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
//           <SectionHeading
//             align="left"
//             eyebrow="Featured Case Studies"
//             title="Real Results for Real Brands"
//             description="We do not just talk about growth — we deliver it. Here are a few stories of brands we have helped scale."
//             className="lg:mb-0"
//           />
//           <Link
//             href="/our-work/case-studies"
//             className="inline-flex flex-shrink-0 items-center gap-2 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-ocean hover:border-ocean hover:text-white"
//           >
//             View All Case Studies
//             <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>

//         <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
//           {featured.map((cs) => (
//             <StaggerItem key={cs.slug}>
//               <Link
//                 href={`/our-work/case-studies`}
//                 className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <Image
//                     src={cs.image}
//                     alt={cs.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent" />
//                   <div className="absolute left-4 top-4 bg-ocean px-3 py-1 text-xs font-semibold text-white">
//                     {cs.category}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-sm font-semibold text-electric">
//                     {cs.client} · {cs.industry}
//                   </p>
//                   <h3 className="mt-2 text-lg font-bold text-brand transition-colors group-hover:text-electric">
//                     {cs.title}
//                   </h3>
//                   <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
//                     {cs.summary}
//                   </p>
//                   <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
//                     {cs.results.slice(0, 2).map((r) => (
//                       <div key={r.metric}>
//                         <div className="flex items-center gap-1 text-lg font-bold text-brand">
//                           <TrendingUp className="h-4 w-4 text-electric" />
//                           {r.value}
//                         </div>
//                         <p className="text-xs text-muted-foreground">{r.metric}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import { BASE_URL } from '@/utils/baseUrl';

// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  images: Array<{
    public_id: string;
    secure_url: string;
  }>;
  gallery: Array<{
    public_id: string;
    secure_url: string;
  }>;
  metaTitle: string;
  metaDescription: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function FeaturedCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/case-studies?status=published&limit=3`);
        const data = await response.json();
        
        if (data.success && data.data) {
          setCaseStudies(data.data);
        } else {
          setError('Failed to fetch case studies');
        }
      } catch (err) {
        console.error('Error fetching case studies:', err);
        setError('Failed to load case studies');
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  // Get image URL with fallback
  const getImageUrl = (cs: CaseStudy) => {
    if (cs.images && cs.images.length > 0 && cs.images[0].secure_url) {
      return cs.images[0].secure_url;
    }
    // Fallback image
    return 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';
  };

  // Extract metrics from result string
  const extractMetrics = (result: string) => {
    if (!result) return [];
    
    const metrics = [];
    // Look for percentage increases
    const percentMatches = result.match(/\d+%/g);
    if (percentMatches) {
      metrics.push({
        value: percentMatches[0],
        metric: 'Performance Increase'
      });
    }
    
    // Look for monetary values
    const moneyMatches = result.match(/\$\d+(?:,\d+)?(?:\.\d+)?[KMB]?/g);
    if (moneyMatches && metrics.length < 2) {
      metrics.push({
        value: moneyMatches[0],
        metric: 'Revenue Growth'
      });
    }
    
    // Look for other numbers
    const numberMatches = result.match(/\d+[Xx]/g);
    if (numberMatches && metrics.length < 2) {
      metrics.push({
        value: numberMatches[0],
        metric: 'Multiplier'
      });
    }
    
    // If no metrics found, add a default one
    if (metrics.length === 0 && result) {
      metrics.push({
        value: '100%',
        metric: 'Success Rate'
      });
    }
    
    return metrics.slice(0, 2);
  };

  // Get category from industry or title
  const getCategory = (cs: CaseStudy) => {
    if (cs.industry && cs.industry.trim()) {
      return cs.industry;
    }
    return 'Case Study';
  };

  // Get summary from challenge or solution
  const getSummary = (cs: CaseStudy) => {
    if (cs.challenge && cs.challenge.trim()) {
      return cs.challenge.substring(0, 150) + (cs.challenge.length > 150 ? '...' : '');
    }
    if (cs.solution && cs.solution.trim()) {
      return cs.solution.substring(0, 150) + (cs.solution.length > 150 ? '...' : '');
    }
    if (cs.result && cs.result.trim()) {
      return cs.result.substring(0, 150) + (cs.result.length > 150 ? '...' : '');
    }
    return 'Learn how we helped this client achieve remarkable results.';
  };

  if (loading) {
    return (
      <section className="bg-sky py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured Case Studies"
              title="Real Results for Real Brands"
              description="We do not just talk about growth — we deliver it. Here are a few stories of brands we have helped scale."
              className="lg:mb-0"
            />
            <div className="h-12 w-48 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-56 rounded bg-gray-200"></div>
                <div className="rounded border border-border bg-white p-6">
                  <div className="h-4 w-32 rounded bg-gray-200"></div>
                  <div className="mt-2 h-6 w-3/4 rounded bg-gray-200"></div>
                  <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>
                  <div className="mt-5 border-t border-border pt-4">
                    <div className="flex gap-4">
                      <div className="h-8 w-20 rounded bg-gray-200"></div>
                      <div className="h-8 w-20 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || caseStudies.length === 0) {
    return (
      <section className="bg-sky py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured Case Studies"
              title="Real Results for Real Brands"
              description="We do not just talk about growth — we deliver it. Here are a few stories of brands we have helped scale."
              className="lg:mb-0"
            />
            <Link
              href="/our-work/case-studies"
              className="inline-flex flex-shrink-0 items-center gap-2 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-ocean hover:border-ocean hover:text-white"
            >
              View All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 text-center">
            <p className="text-muted-foreground">
              {error || 'No case studies available at the moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sky py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured Case Studies"
            title="Real Results for Real Brands"
            description="We do not just talk about growth — we deliver it. Here are a few stories of brands we have helped scale."
            className="lg:mb-0"
          />
          <Link
            href="/our-work/case-studies"
            className="inline-flex flex-shrink-0 items-center gap-2 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-ocean hover:border-ocean hover:text-white"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {caseStudies.map((cs) => {
            const metrics = extractMetrics(cs.result);
            const hasContent = cs.challenge || cs.solution || cs.result;
            
            return (
              <StaggerItem key={cs._id}>
                <Link
                  href={`/our-work/case-studies/`}
                  className="group block h-full overflow-hidden rounded border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={getImageUrl(cs)}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent" />
                    <div className="absolute left-4 top-4 bg-ocean px-3 py-1 text-xs font-semibold text-white">
                      {getCategory(cs)}
                    </div>
                    {cs.client && (
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-semibold">{cs.client}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    {cs.client && cs.industry && (
                      <p className="text-sm font-semibold text-electric">
                        {cs.client} · {cs.industry}
                      </p>
                    )}
                    <h3 className="mt-2 text-lg font-bold text-brand transition-colors group-hover:text-electric line-clamp-1">
                      {cs.title}
                    </h3>
                    {hasContent && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {getSummary(cs)}
                      </p>
                    )}
                    {metrics.length > 0 && (
                      <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                        {metrics.map((r, index) => (
                          <div key={index}>
                            <div className="flex items-center gap-1 text-lg font-bold text-brand">
                              <TrendingUp className="h-4 w-4 text-electric" />
                              {r.value}
                            </div>
                            <p className="text-xs text-muted-foreground">{r.metric}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {!hasContent && metrics.length === 0 && (
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-electric">
                        View Case Study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}