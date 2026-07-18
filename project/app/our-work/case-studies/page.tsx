// // import Image from 'next/image';
// // import { TrendingUp, Clock } from 'lucide-react';
// // import type { Metadata } from 'next';
// // import PageHero from '@/components/common/PageHero';
// // import SectionHeading from '@/components/common/SectionHeading';
// // import CTABanner from '@/components/common/CTABanner';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // import { caseStudies } from '@/lib/case-studies';

// // export const metadata: Metadata = {
// //   title: 'Case Studies | Real Growth Stories',
// //   description:
// //     'Detailed case studies showing how Infotech Agency helped brands achieve measurable growth through digital marketing.',
// //   alternates: { canonical: '/our-work/case-studies' },
// // };

// // export default function CaseStudiesPage() {
// //   return (
// //     <>
// //       <PageHero
// //         breadcrumb="Case Studies"
// //         title="Growth Stories, Backed by Data"
// //         description="Every case study below shows the challenge, the strategy, and the measurable results we delivered. This is what evidence-based marketing looks like."
// //         image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
// //       />

// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <div className="space-y-20">
// //             {caseStudies.map((cs, i) => (
// //               <Reveal key={cs.slug} direction={i % 2 === 0 ? 'right' : 'left'}>
// //                 <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
// //                   {/* Image */}
// //                   <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
// //                     <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium-lg">
// //                       <Image
// //                         src={cs.image}
// //                         alt={cs.title}
// //                         fill
// //                         className="object-cover"
// //                         sizes="(max-width: 1024px) 100vw, 50vw"
// //                       />
// //                       <div className="absolute left-4 top-4 bg-ocean px-3 py-1 text-xs font-semibold text-white">
// //                         {cs.category}
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Content */}
// //                   <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
// //                     <div className="mb-3 flex items-center gap-3 text-sm">
// //                       <span className="font-semibold text-electric">{cs.client}</span>
// //                       <span className="text-muted-foreground">·</span>
// //                       <span className="text-muted-foreground">{cs.industry}</span>
// //                       <span className="text-muted-foreground">·</span>
// //                       <span className="flex items-center gap-1 text-muted-foreground">
// //                         <Clock className="h-3.5 w-3.5" />
// //                         {cs.duration}
// //                       </span>
// //                     </div>
// //                     <h2 className="text-2xl font-bold text-brand sm:text-3xl">
// //                       {cs.title}
// //                     </h2>
// //                     <p className="mt-4 text-base leading-relaxed text-muted-foreground">
// //                       {cs.summary}
// //                     </p>

// //                     <div className="mt-6 space-y-4">
// //                       <div>
// //                         <h3 className="text-sm font-bold uppercase tracking-wider text-electric">
// //                           The Challenge
// //                         </h3>
// //                         <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
// //                           {cs.challenge}
// //                         </p>
// //                       </div>
// //                       <div>
// //                         <h3 className="text-sm font-bold uppercase tracking-wider text-electric">
// //                           Our Solution
// //                         </h3>
// //                         <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
// //                           {cs.solution}
// //                         </p>
// //                       </div>
// //                     </div>

// //                     {/* Results */}
// //                     <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
// //                       {cs.results.map((r) => (
// //                         <div
// //                           key={r.metric}
// //                           className="rounded-xl border border-border bg-sky p-4 text-center"
// //                         >
// //                           <div className="flex items-center justify-center gap-1 text-xl font-bold gradient-text">
// //                             <TrendingUp className="h-4 w-4 text-electric" />
// //                             {r.value}
// //                           </div>
// //                           <p className="mt-1 text-xs text-muted-foreground">
// //                             {r.metric}
// //                           </p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </Reveal>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <CTABanner />
// //     </>
// //   );
// // }



// // import Image from 'next/image';
// // import { TrendingUp, Clock } from 'lucide-react';
// // import type { Metadata } from 'next';
// // import PageHero from '@/components/common/PageHero';
// // import SectionHeading from '@/components/common/SectionHeading';
// // import CTABanner from '@/components/common/CTABanner';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // import { BASE_URL } from '@/utils/baseUrl';

// // export const metadata: Metadata = {
// //   title: 'Case Studies | Real Growth Stories',
// //   description:
// //     'Detailed case studies showing how Infotech Agency helped brands achieve measurable growth through digital marketing.',
// //   alternates: { canonical: '/our-work/case-studies' },
// // };

// // // ---------- types (matches what the API actually returns) ----------

// // interface ApiCaseStudy {
// //   _id: string;
// //   title: string;
// //   slug: string;
// //   client: string;
// //   industry: string;
// //   challenge: string;
// //   solution: string;
// //   result: string;
// //   images: { public_id: string; secure_url: string }[];
// //   gallery: { public_id: string; secure_url: string }[];
// //   metaTitle: string;
// //   metaDescription: string;
// //   status: string;
// // }

// // function normalizeCaseStudy(cs: ApiCaseStudy) {
// //   return {
// //     slug: cs.slug,
// //     title: cs.title,
// //     client: cs.client,
// //     industry: cs.industry, // category field nahi hai, industry ko hi badge mein use karenge
// //     challenge: cs.challenge,
// //     solution: cs.solution,
// //     result: cs.result, // single string, array nahi
// //     image: cs.images?.[0]?.secure_url || '/placeholder.jpg',
// //   };
// // }

// // async function getCaseStudies() {
// //   try {
// //     const res = await fetch(`${BASE_URL}/case-studies`, { cache: 'no-store' });
// //     if (!res.ok) return [];
// //     const result = await res.json();
// //     if (!result.success) return [];
// //     return (result.data || [])
// //       .filter((cs: ApiCaseStudy) => cs.status === 'published')
// //       .map(normalizeCaseStudy);
// //   } catch (err) {
// //     console.error('Failed to fetch case studies', err);
// //     return [];
// //   }
// // }

// // export default async function CaseStudiesPage() {
// //   const caseStudies = await getCaseStudies();

// //   return (
// //     <>
// //       <PageHero
// //         breadcrumb="Case Studies"
// //         title="Growth Stories, Backed by Data"
// //         description="Every case study below shows the challenge, the strategy, and the measurable results we delivered. This is what evidence-based marketing looks like."
// //         image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
// //       />

// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           {caseStudies.length === 0 ? (
// //             <p className="text-center text-muted-foreground">
// //               No case studies available right now.
// //             </p>
// //           ) : (
// //             <div className="space-y-20">
// //               {caseStudies.map((cs, i) => (
// //                 <Reveal key={cs.slug} direction={i % 2 === 0 ? 'right' : 'left'}>
// //                   <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
// //                     {/* Image */}
// //                     <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
// //                       <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium-lg">
// //                         <Image
// //                           src={cs.image}
// //                           alt={cs.title}
// //                           fill
// //                           className="object-cover"
// //                           sizes="(max-width: 1024px) 100vw, 50vw"
// //                         />
// //                         <div className="absolute left-4 top-4 bg-ocean px-3 py-1 text-xs font-semibold text-white">
// //                           {cs.industry}
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Content */}
// //                     <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
// //                       <div className="mb-3 flex items-center gap-3 text-sm">
// //                         <span className="font-semibold text-electric">{cs.client}</span>
// //                         <span className="text-muted-foreground">·</span>
// //                         <span className="text-muted-foreground">{cs.industry}</span>
// //                       </div>
// //                       <h2 className="text-2xl font-bold text-brand sm:text-3xl">
// //                         {cs.title}
// //                       </h2>

// //                       {(cs.challenge || cs.solution) && (
// //                         <div className="mt-6 space-y-4">
// //                           {cs.challenge && (
// //                             <div>
// //                               <h3 className="text-sm font-bold uppercase tracking-wider text-electric">
// //                                 The Challenge
// //                               </h3>
// //                               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
// //                                 {cs.challenge}
// //                               </p>
// //                             </div>
// //                           )}
// //                           {cs.solution && (
// //                             <div>
// //                               <h3 className="text-sm font-bold uppercase tracking-wider text-electric">
// //                                 Our Solution
// //                               </h3>
// //                               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
// //                                 {cs.solution}
// //                               </p>
// //                             </div>
// //                           )}
// //                         </div>
// //                       )}

// //                       {/* Result - single string highlight, no metric grid */}
// //                       {cs.result && (
// //                         <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-sky px-4 py-3">
// //                           <TrendingUp className="h-5 w-5 flex-shrink-0 text-electric" />
// //                           <span className="text-sm font-semibold text-brand">
// //                             {cs.result}
// //                           </span>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </Reveal>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       <CTABanner />
// //     </>
// //   );
// // }


// import Image from 'next/image';
// import { TrendingUp, ArrowRight } from 'lucide-react';
// import type { Metadata } from 'next';
// import Link from 'next/link';
// import PageHero from '@/components/common/PageHero';
// import CTABanner from '@/components/common/CTABanner';
// import { Reveal } from '@/components/common/Reveal';
// import { BASE_URL } from '@/utils/baseUrl';

// export const metadata: Metadata = {
//   title: 'Case Studies | Real Growth Stories',
//   description:
//     'Detailed case studies showing how our agency helped brands achieve measurable growth through digital marketing.',
//   alternates: { canonical: '/our-work/case-studies' },
// };

// interface ApiCaseStudy {
//   _id: string;
//   title: string;
//   slug: string;
//   client: string;
//   industry: string;
//   challenge: string;
//   solution: string;
//   result: string;
//   images: { public_id: string; secure_url: string }[];
//   gallery: { public_id: string; secure_url: string }[];
//   metaTitle: string;
//   metaDescription: string;
//   status: string;
// }

// function normalizeCaseStudy(cs: ApiCaseStudy) {
//   return {
//     slug: cs.slug,
//     title: cs.title,
//     client: cs.client,
//     industry: cs.industry,
//     challenge: cs.challenge,
//     solution: cs.solution,
//     result: cs.result,
//     image: cs.images?.[0]?.secure_url || '/placeholder.jpg',
//   };
// }

// async function getCaseStudies() {
//   try {
//     const res = await fetch(`${BASE_URL}/case-studies`, { cache: 'no-store' });
//     if (!res.ok) return [];
//     const result = await res.json();
//     if (!result.success) return [];
//     return (result.data || [])
//       .filter((cs: ApiCaseStudy) => cs.status === 'published')
//       .map(normalizeCaseStudy);
//   } catch (err) {
//     console.error('Failed to fetch case studies', err);
//     return [];
//   }
// }

// export default async function CaseStudiesPage() {
//   const caseStudies = await getCaseStudies();

//   return (
//     <>
//       <PageHero
//         breadcrumb="Case Studies"
//         title="Growth Stories, Backed by Data"
//         description="Every case study below shows the challenge, the strategy, and the measurable results we delivered. This is what evidence-based marketing looks like."
//         image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//       />

//       <section className="bg-slate-50/50 py-24 lg:py-32">
//         <div className="container mx-auto px-4 max-w-7xl">
//           {caseStudies.length === 0 ? (
//             <div className="text-center py-20 border border-dashed border-slate-200 rounded-3xl bg-white">
//               <p className="text-slate-500 font-medium tracking-wide">
//                 No case studies available right now.
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-28  lg:space-y-40">
//               {caseStudies.map((cs, i) => {
//                 const isEven = i % 2 === 0;
//                 return (
//                   <Reveal key={cs.slug} direction={isEven ? 'right' : 'left'}>
//                     <div className="grid  gap-12 lg:grid-cols-12 lg:items-center">
                      
//                       {/* Image Container */}
                      
//                    <div className={`lg:col-span-6 ${!isEven ? 'lg:order-2' : ''}`}>
//   <div className="group overflow-hidden rounded-2xl bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">

//     <div className="relative">
//       <Image
//         src={cs.image}
//         alt={cs.title}
//         width={1200}
//         height={800}
//         className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
//       />

//       <div className="absolute left-6 top-6 rounded-full bg-slate-900/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 border border-slate-700/50">
//         {cs.industry}
//       </div>
//     </div>

//   </div>
// </div>  
//                       {/* Content Container */}
//                       <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
//                         {/* Meta Tags */}
//                         <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#031143]">
//                           <span>{cs.client}</span>
//                           <span className="h-1 w-1 rounded-full bg-slate-300" />
//                           <span className="text-slate-400 font-medium">{cs.industry}</span>
//                         </div>

//                         {/* Title */}
//                         <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:leading-tight">
//                           {cs.title}
//                         </h2>

//                         {/* Challenge & Solution Blocks */}
//                         {(cs.challenge || cs.solution) && (
//                           <div className="mt-8 space-y-6 border-l-2 border-slate-200 pl-6">
//                             {cs.challenge && (
//                               <div>
//                                 <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
//                                   The Challenge
//                                 </h3>
//                                 <p className="mt-2 text-[15px] leading-relaxed text-slate-500 font-normal">
//                                   {cs.challenge}
//                                 </p>
//                               </div>
//                             )}
//                             {cs.solution && (
//                               <div>
//                                 <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
//                                   Our Strategy
//                                 </h3>
//                                 <p className="mt-2 text-[15px] leading-relaxed text-slate-500 font-normal">
//                                   {cs.solution}
//                                 </p>
//                               </div>
//                             )}
//                           </div>
//                         )}

//                         {/* Outcome / Result - Highly Styled */}
//                         {cs.result && (
//                           <div className="mt-8 inline-flex w-full items-center gap-4 rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent p-4 backdrop-blur-sm">
//                             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-white shadow-md shadow-amber-500/20">
//                               <TrendingUp className="h-5 w-5" />
//                             </div>
//                             <div>
//                               <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-600">
//                                 Key Impact
//                               </span>
//                               <span className="text-base font-bold text-slate-900">
//                                 {cs.result}
//                               </span>
//                             </div>
//                           </div>
//                         )}
                        
//                       </div>
//                     </div>
//                   </Reveal>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }

import Image from 'next/image';
import { TrendingUp, ArrowRight, Target, Zap, FolderOpen } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import CTABanner from '@/components/common/CTABanner';
import { BASE_URL } from '@/utils/baseUrl';

export const metadata: Metadata = {
  title: 'Case Studies | Real Growth Stories',
  description:
    'Detailed case studies showing how our agency helped brands achieve measurable growth through digital marketing.',
  alternates: { canonical: '/our-work/case-studies' },
};

interface ApiCaseStudy {
  _id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  images: { public_id: string; secure_url: string }[];
  gallery: { public_id: string; secure_url: string }[];
  metaTitle: string;
  metaDescription: string;
  status: string;
}

function normalizeCaseStudy(cs: ApiCaseStudy) {
  return {
    slug: cs.slug,
    title: cs.title,
    client: cs.client,
    industry: cs.industry,
    challenge: cs.challenge,
    solution: cs.solution,
    result: cs.result,
    image: cs.images?.[0]?.secure_url || '/placeholder.jpg',
  };
}

async function getCaseStudies() {
  try {
    const res = await fetch(`${BASE_URL}/case-studies`, { cache: 'no-store' });
    if (!res.ok) return [];
    const result = await res.json();
    if (!result.success) return [];
    return (result.data || [])
      .filter((cs: ApiCaseStudy) => cs.status === 'published')
      .map(normalizeCaseStudy);
  } catch (err) {
    console.error('Failed to fetch case studies', err);
    return [];
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <PageHero
        breadcrumb="Case Studies"
        title="Growth Stories, Backed by Data"
        description="Every case study below shows the challenge, the strategy, and the measurable results we delivered. This is what evidence-based marketing looks like."
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        {/* Premium Background: Sharp Box Grid + Mesh Glow */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          {caseStudies.length === 0 ? (
            <div className="mx-auto max-w-md border border-slate-200 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-slate-50">
                <FolderOpen className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-brand">No Case Studies Found</h3>
              <p className="mt-2 text-sm text-slate-500">No published case studies available at the moment. Please check back later.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {caseStudies.map((cs) => (
                <div 
                  key={cs.slug} 
                  className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-slate-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                >
                  {/* Hover Top Accent Line */}
                  <div className="absolute top-0 left-1/2 z-20 h-1 w-0 -translate-x-1/2 bg-electric transition-all duration-500 group-hover:w-1/2"></div>

                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4 border-l-2 border-white/50 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                      {cs.industry}
                    </div>

                    {/* Client & Title (Over Image) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-300">
                        {cs.client}
                      </p>
                      <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-white">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    
                    {/* Challenge & Strategy Grid */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      {cs.challenge && (
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <Target className="h-3.5 w-3.5 text-electric" /> Challenge
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-4">
                            {cs.challenge}
                          </p>
                        </div>
                      )}
                      {cs.solution && (
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <Zap className="h-3.5 w-3.5 text-leaf" /> Strategy
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-4">
                            {cs.solution}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Key Impact (Result) Block - Dark Dashboard Style */}
                    {cs.result && (
                      <div className="mt-8 flex items-center gap-4 border border-slate-200 bg-slate-900 p-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-electric/20">
                          <TrendingUp className="h-6 w-6 text-electric" />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            Key Impact
                          </span>
                          <span className="text-base font-bold leading-tight text-white">
                            {cs.result}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Footer Link */}
                    <div className="mt-auto pt-6">
                      <Link 
                        href={`/our-work/case-studies/${cs.slug}`} 
                        className="group/link flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-brand transition-colors hover:text-electric"
                      >
                        Read Full Case Study
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}