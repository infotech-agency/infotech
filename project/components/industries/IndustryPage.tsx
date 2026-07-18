// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
// // import PageHero from '@/components/common/PageHero';
// // import SectionHeading from '@/components/common/SectionHeading';
// // import FAQAccordion from '@/components/common/FAQAccordion';
// // import CTABanner from '@/components/common/CTABanner';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // import type { Industry } from '@/lib/industries';

// // export default function IndustryPage({ industry }: { industry: Industry }) {
// //   const Icon = industry.icon;
// //   console.log(industry.name)

// //   return (
// //     <>
// //       <PageHero
// //         breadcrumb={industry.name}
// //         title={industry.heroTitle}
// //         description={industry.heroDescription}
// //         image={industry.image}
// //       />

// //       {/* Challenges */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Industry Challenges"
// //             title={`The Challenges Facing ${industry.name} Brands`}
// //             description="We understand the unique obstacles your industry faces — because we have solved them before."
// //           />
// //           <Stagger className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.1}>
// //             {industry.challenges.map((challenge) => (
// //               <StaggerItem key={challenge.title}>
// //                 <div className="flex h-full gap-5 rounded-2xl border border-border bg-sky p-7 shadow-premium">
// //                   <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
// //                     <span className="text-lg font-bold">!</span>
// //                   </div>
// //                   <div>
// //                     <h3 className="text-lg font-bold text-brand">{challenge.title}</h3>
// //                     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
// //                       {challenge.description}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Solutions */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Our Solutions"
// //             title={`How We Solve Them for ${industry.name}`}
// //             description="Tailored strategies built on 12+ years of industry-specific experience."
// //           />
// //           <Stagger className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.1}>
// //             {industry.solutions.map((solution) => (
// //               <StaggerItem key={solution.title}>
// //                 <div className="group h-full rounded-2xl border border-border bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                   <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric transition-all group-hover:gradient-primary group-hover:text-white">
// //                     <Icon className="h-7 w-7" />
// //                   </div>
// //                   <h3 className="text-lg font-bold text-brand">{solution.title}</h3>
// //                   <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
// //                     {solution.description}
// //                   </p>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Services Offered */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Services Offered"
// //             title={`What We Do for ${industry.name} Brands`}
// //             description="A full suite of services tailored to the unique needs of your industry."
// //           />
// //           <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
// //             {industry.servicesOffered.map((svc) => (
// //               <StaggerItem key={svc}>
// //                 <div className="flex items-center gap-3 rounded-xl border border-border bg-sky p-5 shadow-premium transition-all hover:border-electric/30">
// //                   <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-electric" />
// //                   <span className="text-sm font-semibold text-brand">{svc}</span>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Success Stories */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Success Stories"
// //             title={`Results We Have Delivered in ${industry.name}`}
// //             description="Real outcomes for real brands in your industry."
// //           />
// //           <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
// //             {industry.successStories.map((story) => (
// //               <StaggerItem key={story.client}>
// //                 <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                   <div className="mb-4 flex items-center gap-2 text-3xl font-bold gradient-text">
// //                     <TrendingUp className="h-7 w-7 text-electric" />
// //                     {story.metric}
// //                   </div>
// //                   <h3 className="text-lg font-bold text-brand">{story.client}</h3>
// //                   <p className="mt-2 text-sm text-muted-foreground">{story.result}</p>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
// //             <Reveal direction="right">
// //               <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium-lg">
// //                 <Image
// //                   src={industry.image}
// //                   alt={industry.name}
// //                   fill
// //                   className="object-cover"
// //                   sizes="(max-width: 1024px) 100vw, 50vw"
// //                 />
// //               </div>
// //             </Reveal>
// //             <Reveal direction="left">
// //               <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-primary-soft px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-electric">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-electric" />
// //                 Why Choose Us
// //               </div>
// //               <h2 className="text-3xl font-bold text-brand sm:text-4xl">
// //                 Why {industry.name} Brands Choose Infotech Agency
// //               </h2>
// //               <div className="mt-6 space-y-4">
// //                 {industry.whyChooseUs.map((item, i) => (
// //                   <div
// //                     key={i}
// //                     className="flex items-start gap-4 rounded-2xl border border-border bg-sky p-5 shadow-premium"
// //                   >
// //                     <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-electric" />
// //                     <p className="text-base text-brand">{item}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </Reveal>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQs */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="FAQs"
// //             title={`Common Questions About ${industry.name} Marketing`}
// //             description="Everything you need to know about marketing in your industry."
// //           />
// //           <div className="mt-14">
// //             <FAQAccordion items={industry.faqs} />
// //           </div>
// //         </div>
// //       </section>

// //       <CTABanner />
// //     </>
// //   );
// // }


// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
// // import PageHero from '@/components/common/PageHero';
// // import SectionHeading from '@/components/common/SectionHeading';
// // import FAQAccordion from '@/components/common/FAQAccordion';
// // import CTABanner from '@/components/common/CTABanner';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';

// // // Define the Industry interface based on your API response
// // interface Industry {
// //   _id: string;
// //   title: string;
// //   slug: string;
// //   banner: {
// //     public_id: string;
// //     secure_url: string;
// //   };
// //   overview: string;
// //   content: string;
// //   benefits: string[];
// //   faq: Array<{
// //     question: string;
// //     answer: string;
// //   }>;
// //   cta: {
// //     heading: string;
// //     subheading: string;
// //     buttonText: string;
// //     buttonLink: string;
// //   };
// //   metaTitle: string;
// //   metaDescription: string;
// //   schemaJson: string;
// //   status: string;
// //   gallery: Array<{
// //     public_id: string;
// //     secure_url: string;
// //   }>;
  
// //   createdAt: string;
// //   updatedAt: string;
// //   __v: number;
// // }

// // // Helper function to get icon based on industry name
// // function getIndustryIcon(title: string) {
// //   const name = title.toLowerCase();
// //   if (name.includes('ecommerce') || name.includes('e-commerce')) return BarChart3;
// //   if (name.includes('healthcare') || name.includes('medical')) return Users;
// //   if (name.includes('real estate')) return Target;
// //   // Default icon
// //   return TrendingUp;
// // }

// // export default function IndustryPage({ industry }: { industry: Industry }) {
// //   console.log(industry);
// //   const Icon = getIndustryIcon(industry.title);

// //   // Transform API data to match your component structure
// //   const industryData = {
// //     name: industry.title,
// //     slug: industry.slug,
// //     image: industry.banner?.secure_url || '',
// //     gallery:industry.gallery[0]?.secure_url || '',
// //     heroTitle: `${industry.title}`,
// //     heroDescription: industry.overview || `Grow your ${industry.title} business with our expert digital marketing solutions.`,
// //     challenges: [
// //       {
// //         title: 'Standing Out in a Competitive Market',
// //         description: `${industry.title} brands face intense competition. We help you differentiate and capture attention.`
// //       },
// //       {
// //         title: 'Building Trust with Customers',
// //         description: `Establishing credibility in ${industry.title} requires strategic messaging and proven results.`
// //       },
// //       {
// //         title: 'Maximizing ROI on Marketing Spend',
// //         description: `Every dollar counts. We optimize your campaigns for maximum returns.`
// //       },
// //       {
// //         title: 'Adapting to Rapid Industry Changes',
// //         description: `Stay ahead of trends and algorithm changes in the ${industry.title} space.`
// //       }
// //     ],
// //     solutions: [
// //       {
// //         title: 'Strategic Brand Positioning',
// //         description: `We help ${industry.title} brands define their unique value proposition and market position.`
// //       },
// //       {
// //         title: 'Multi-Channel Marketing',
// //         description: `Reach your audience across SEO, PPC, social media, and email marketing.`
// //       },
// //       {
// //         title: 'Conversion Rate Optimization',
// //         description: `Turn visitors into customers with data-driven optimization strategies.`
// //       },
// //       {
// //         title: 'Data-Driven Analytics & Insights',
// //         description: `Make informed decisions with comprehensive analytics and reporting.`
// //       }
// //     ],
// //     servicesOffered: [
// //       'Search Engine Optimization (SEO)',
// //       'Pay-Per-Click Advertising (PPC)',
// //       'Social Media Marketing',
// //       'Content Marketing',
// //       'Email Marketing',
// //       'Conversion Rate Optimization',
// //       'Analytics & Reporting',
// //       'Brand Strategy'
// //     ],
// //     successStories: [
// //       {
// //         client: `${industry.title} Brand A`,
// //         metric: '250% ROI',
// //         result: `Increased revenue by 150% within 6 months through targeted campaigns.`
// //       },
// //       {
// //         client: `${industry.title} Brand B`,
// //         metric: '300% Traffic Growth',
// //         result: `SEO and content strategy led to significant organic growth.`
// //       },
// //       {
// //         client: `${industry.title} Brand C`,
// //         metric: '45% Conversion Increase',
// //         result: `Optimized landing pages and user experience boosted conversions.`
// //       }
// //     ],
// //     whyChooseUs: [
// //       `${industry.title} industry experts with proven track records.`,
// //       `Data-driven strategies that deliver measurable results.`,
// //       `Customized solutions tailored to your specific needs.`,
// //       `Transparent reporting and clear communication throughout.`,
// //       `Focus on sustainable growth and long-term success.`
// //     ],
// //     faqs: industry.faq || [
// //       {
// //         question: `What is the best marketing strategy for ${industry.title}?`,
// //         answer: `The best strategy combines SEO, content marketing, and targeted advertising to reach your specific audience.`
// //       },
// //       {
// //         question: `How much should ${industry.title} businesses spend on marketing?`,
// //         answer: `Typically, businesses allocate 7-10% of revenue to marketing, but this varies based on goals and competition.`
// //       },
// //       {
// //         question: `How long does it take to see results from digital marketing?`,
// //         answer: `Initial results often appear within 3-6 months, with significant growth visible within 12 months.`
// //       }
// //     ]
// //   };

// //   return (
// //     <>
// //       <PageHero
// //         breadcrumb={industryData.name}
// //         title={industryData.heroTitle}
// //         description={industryData.heroDescription}
// //         image={industryData.image}
// //       />

// //       {/* Challenges */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Industry Challenges"
// //             title={`The Challenges Facing ${industryData.name} Brands`}
// //             description="We understand the unique obstacles your industry faces — because we have solved them before."
// //           />
// //           <Stagger className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.1}>
// //             {industryData.challenges.map((challenge) => (
// //               <StaggerItem key={challenge.title}>
// //                 <div className="flex h-full gap-5 rounded-2xl border border-border bg-sky p-7 shadow-premium">
// //                   <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
// //                     <span className="text-lg font-bold">!</span>
// //                   </div>
// //                   <div>
// //                     <h3 className="text-lg font-bold text-brand">{challenge.title}</h3>
// //                     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
// //                       {challenge.description}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Solutions */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Our Solutions"
// //             title={`How We Solve Them for ${industryData.name}`}
// //             description="Tailored strategies built on 12+ years of industry-specific experience."
// //           />
// //           <Stagger className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.1}>
// //             {industryData.solutions.map((solution) => (
// //               <StaggerItem key={solution.title}>
// //                 <div className="group h-full rounded-2xl border border-border bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                   <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric transition-all group-hover:gradient-primary group-hover:text-white">
// //                     <Icon className="h-7 w-7" />
// //                   </div>
// //                   <h3 className="text-lg font-bold text-brand">{solution.title}</h3>
// //                   <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
// //                     {solution.description}
// //                   </p>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Services Offered */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Services Offered"
// //             title={`What We Do for ${industryData.name} Brands`}
// //             description="A full suite of services tailored to the unique needs of your industry."
// //           />
// //           <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
// //             {industryData.servicesOffered.map((svc) => (
// //               <StaggerItem key={svc}>
// //                 <div className="flex items-center gap-3 rounded-xl border border-border bg-sky p-5 shadow-premium transition-all hover:border-electric/30">
// //                   <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-electric" />
// //                   <span className="text-sm font-semibold text-brand">{svc}</span>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Success Stories */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Success Stories"
// //             title={`Results We Have Delivered in ${industryData.name}`}
// //             description="Real outcomes for real brands in your industry."
// //           />
// //           <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
// //             {industryData.successStories.map((story) => (
// //               <StaggerItem key={story.client}>
// //                 <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                   <div className="mb-4 flex items-center gap-2 text-3xl font-bold gradient-text">
// //                     <TrendingUp className="h-7 w-7 text-electric" />
// //                     {story.metric}
// //                   </div>
// //                   <h3 className="text-lg font-bold text-brand">{story.client}</h3>
// //                   <p className="mt-2 text-sm text-muted-foreground">{story.result}</p>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
// //             <Reveal direction="right">
// //               <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium-lg">
// //                 <Image
// //                   src={industryData.gallery}
// //                   alt={industryData.name}
// //                   fill
// //                   className="object-cover"
// //                   sizes="(max-width: 1024px) 100vw, 50vw"
// //                 />
// //               </div>
// //             </Reveal>
// //             <Reveal direction="left">
// //               <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-primary-soft px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-electric">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-electric" />
// //                 Why Choose Us
// //               </div>
// //               <h2 className="text-3xl font-bold text-brand sm:text-4xl">
// //                 Why {industryData.name} Brands Choose Infotech Agency
// //               </h2>
// //               <div className="mt-6 space-y-4">
// //                 {industryData.whyChooseUs.map((item, i) => (
// //                   <div
// //                     key={i}
// //                     className="flex items-start gap-4 rounded-2xl border border-border bg-sky p-5 shadow-premium"
// //                   >
// //                     <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-electric" />
// //                     <p className="text-base text-brand">{item}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </Reveal>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQs */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="FAQs"
// //             title={`Common Questions About ${industryData.name} Marketing`}
// //             description="Everything you need to know about marketing in your industry."
// //           />
// //           <div className="mt-14">
// //             <FAQAccordion items={industryData.faqs} />
// //           </div>
// //         </div>
// //       </section>

// //       <CTABanner />
// //     </>
// //   );
// // }


// // import Image from 'next/image';
// // import { CheckCircle2, TrendingUp, Users, Target, BarChart3, 
// //          Zap, Shield, Clock, Award, Star, ArrowRight } from 'lucide-react';
// // import PageHero from '@/components/common/PageHero';
// // import SectionHeading from '@/components/common/SectionHeading';
// // import FAQAccordion from '@/components/common/FAQAccordion';
// // import CTABanner from '@/components/common/CTABanner';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';

// // // Define the Industry interface based on your API response
// // interface Industry {
// //   _id: string;
// //   title: string;
// //   slug: string;
// //   banner: {
// //     public_id: string;
// //     secure_url: string;
// //   };
// //   overview: string;
// //   content: string;
// //   benefits: string[];
// //   faq: Array<{
// //     question: string;
// //     answer: string;
// //   }>;
// //   cta: {
// //     heading: string;
// //     subheading: string;
// //     buttonText: string;
// //     buttonLink: string;
// //   };
// //   metaTitle: string;
// //   metaDescription: string;
// //   schemaJson: string;
// //   status: string;
// //   gallery: Array<{
// //     public_id: string;
// //     secure_url: string;
// //   }>;
// //   createdAt: string;
// //   updatedAt: string;
// //   __v: number;
// // }

// // // Helper function to get icon based on industry
// // function getIndustryIcon(title: string) {
// //   const name = title.toLowerCase();
// //   if (name.includes('ecommerce') || name.includes('e-commerce')) return BarChart3;
// //   if (name.includes('healthcare') || name.includes('medical') || name.includes('health')) return Users;
// //   if (name.includes('real estate') || name.includes('property')) return Target;
// //   if (name.includes('tech') || name.includes('software')) return Zap;
// //   if (name.includes('finance') || name.includes('bank')) return Shield;
// //   if (name.includes('education') || name.includes('learning')) return Award;
// //   return TrendingUp;
// // }

// // // Helper to get color scheme based on industry
// // function getIndustryColors(title: string) {
// //   const name = title.toLowerCase();
// //   if (name.includes('ecommerce') || name.includes('e-commerce')) {
// //     return { primary: 'from-blue-600 to-indigo-600', light: 'bg-blue-50' };
// //   }
// //   if (name.includes('healthcare') || name.includes('medical')) {
// //     return { primary: 'from-emerald-600 to-teal-600', light: 'bg-emerald-50' };
// //   }
// //   if (name.includes('real estate') || name.includes('property')) {
// //     return { primary: 'from-amber-600 to-orange-600', light: 'bg-amber-50' };
// //   }
// //   if (name.includes('tech') || name.includes('software')) {
// //     return { primary: 'from-purple-600 to-pink-600', light: 'bg-purple-50' };
// //   }
// //   return { primary: 'from-blue-600 to-cyan-600', light: 'bg-blue-50' };
// // }

// // export default function IndustryPage({ industry }: { industry: Industry }) {
// //   const Icon = getIndustryIcon(industry.title);
// //   const colors = getIndustryColors(industry.title);
  
// //   // Filter valid benefits
// //   const validBenefits = industry.benefits?.filter(b => b && b.trim() !== '') || [];
  
// //   // Filter valid FAQs
// //   const validFaqs = industry.faq?.filter(f => f.question && f.answer && f.question.trim() !== '') || [];

// //   return (
// //     <>
// //       {/* Hero Section with Dynamic Gradient */}
// //       <PageHero
// //         breadcrumb={`${industry.title}`}
// //         title={`Digital Marketing For  ${industry.title}`}
// //         description={industry.overview || `Expert digital marketing services tailored for ${industry.title} industry.`}
// //         image={industry.banner?.secure_url || ''}
// //       />

// //       {/* Main Content Section - API Content
// //       {industry.content && (
// //         <section className="bg-white py-20 lg:py-28">
// //           <div className="container w-40 px-4">
// //             <div className="mx-auto max-w-4xl">
// //               <div className="prose prose-lg prose-brand ">
// //                 <div dangerouslySetInnerHTML={{ __html: industry.content }} />
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       )} */}
// //       {/* Main Content Section - API Content */}
// // {industry.content && (
// //   <section className="bg-white py-20 lg:py-28">
// //     <div className="container mx-auto px-4">
// //       <SectionHeading
// //         eyebrow="About This Industry"
// //         title={`Understanding ${industry.title}`}
// //         description="Comprehensive insights and expert analysis"
// //       />
// //       <div className="mt-14">
// //         <div className="mx-auto max-w-4xl">
// //           {/* Content Card - matching other section styles */}
// //           <div className="rounded-2xl border border-border bg-gradient-to-br from-sky/30 to-white p-7 shadow-premium overflow-hidden">
// //             {/* Decorative element */}
// //             <div className="mb-6 flex items-center gap-3">
// //               <div className="h-1 w-12 rounded-full bg-gradient-to-r from-electric to-blue-500"></div>
// //               <span className="text-sm font-semibold uppercase tracking-wider text-electric">
// //                 Industry Insights
// //               </span>
// //             </div>
            
// //             {/* Content */}
// //             <div className="w-full overflow-x-auto">  
// //               <div className="min-w-0">
// //                 <div 
// //                   className="prose prose-lg max-w-none
// //                     prose-headings:text-brand
// //                     prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4 prose-h1:break-words
// //                     prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-3 prose-h2:break-words
// //                     prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-5 prose-h3:mb-2 prose-h3:break-words
// //                     prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-3 prose-p:break-words
// //                     prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-3 prose-ul:break-words
// //                     prose-ol:list-decimal prose-ol:pl-5 prose-ol:mb-3 prose-ol:break-words
// //                     prose-li:text-gray-700 prose-li:mb-1 prose-li:break-words
// //                     prose-strong:text-brand prose-strong:font-semibold
// //                     prose-a:text-electric hover:prose-a:text-blue-600 prose-a:break-words
// //                     prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-6 prose-img:max-w-full prose-img:h-auto
// //                     prose-blockquote:border-l-4 prose-blockquote:border-electric prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:break-words
// //                     prose-table:w-full prose-table:border-collapse prose-table:overflow-x-auto prose-table:block
// //                     prose-th:bg-sky/50 prose-th:p-2 prose-th:text-left prose-th:text-sm
// //                     prose-td:border prose-td:border-gray-200 prose-td:p-2 prose-td:text-sm
// //                     prose-hr:my-6 prose-hr:border-gray-200
// //                     prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto
// //                     prose-code:text-sm prose-code:break-words"
// //                   dangerouslySetInnerHTML={{ __html: industry.content }} 
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // )}
// //       {/* Benefits Section - Dynamic from API */}
// //       {validBenefits.length > 0 && (
// //         <section className="bg-sky py-20 lg:py-28">
// //           <div className="container mx-auto px-4">
// //             <SectionHeading
// //               eyebrow="Key Benefits"
// //               title={`Why Choose ${industry.title} Solutions`}
// //               description="Discover the competitive advantages of working with industry experts."
// //             />
// //             <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
// //               {validBenefits.map((benefit, index) => (
// //                 <StaggerItem key={index}>
// //                   <div className="group h-full rounded-2xl border border-border bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                     <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${colors.primary} text-white transition-all group-hover:scale-110`}>
// //                       {index % 2 === 0 ? <Zap className="h-6 w-6" /> : <Star className="h-6 w-6" />}
// //                     </div>
// //                     <p className="text-base font-semibold text-brand">{benefit}</p>
// //                   </div>
// //                 </StaggerItem>
// //               ))}
// //             </Stagger>
// //           </div>
// //         </section>
// //       )}

// //       {/* Industry Statistics/Counter Section */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <div className="grid gap-8 md:grid-cols-4">
// //             <div className="text-center">
// //               <div className="text-4xl font-bold gradient-text">12+</div>
// //               <p className="mt-2 text-sm text-muted-foreground">Years of Experience</p>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl font-bold gradient-text">500+</div>
// //               <p className="mt-2 text-sm text-muted-foreground">Projects Completed</p>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl font-bold gradient-text">98%</div>
// //               <p className="mt-2 text-sm text-muted-foreground">Client Satisfaction</p>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl font-bold gradient-text">50+</div>
// //               <p className="mt-2 text-sm text-muted-foreground">Industry Awards</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Our Process Section */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Our Process"
// //             title="How We Deliver Results"
// //             description="A proven methodology that ensures success for your business."
// //           />
// //           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// //             {[
// //               { step: '01', title: 'Discovery', desc: 'We analyze your business goals and market position.' },
// //               { step: '02', title: 'Strategy', desc: 'We develop a customized marketing strategy for you.' },
// //               { step: '03', title: 'Execution', desc: 'We implement the strategy with precision and expertise.' },
// //               { step: '04', title: 'Growth', desc: 'We optimize and scale your campaigns for maximum ROI.' },
// //             ].map((item) => (
// //               <div key={item.step} className="group rounded-2xl bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                 <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${colors.primary} text-2xl font-bold text-white`}>
// //                   {item.step}
// //                 </div>
// //                 <h3 className="text-lg font-bold text-brand">{item.title}</h3>
// //                 <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Us Section */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
// //             <Reveal direction="right">
// //               <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium-lg">
// //                 <Image
// //                   src={industry.banner?.secure_url || ''}
// //                   alt={industry.title}
// //                   fill
// //                   className="object-cover"
// //                   sizes="(max-width: 1024px) 100vw, 50vw"
// //                 />
// //               </div>
// //             </Reveal>
// //             <Reveal direction="left">
// //               <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.primary} px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white`}>
// //                 <span className="h-1.5 w-1.5 rounded-full bg-white" />
// //                 Why Choose Us
// //               </div>
// //               <h2 className="mt-4 text-3xl font-bold text-brand sm:text-4xl">
// //                 Why {industry.title} Brands Trust Us
// //               </h2>
// //               <p className="mt-4 text-muted-foreground">
// //                 We combine industry expertise with innovative strategies to deliver exceptional results.
// //               </p>
// //               <div className="mt-8 space-y-4">
// //                 {[
// //                   `Industry-specific expertise in ${industry.title}`,
// //                   'Data-driven decision making',
// //                   'Transparent communication & reporting',
// //                   'Customized solutions for your needs',
// //                   'Proven track record of success',
// //                 ].map((item, i) => (
// //                   <div
// //                     key={i}
// //                     className="flex items-start gap-4 rounded-2xl border border-border bg-sky p-5 shadow-premium transition-all hover:shadow-premium-lg"
// //                   >
// //                     <CheckCircle2 className={`mt-0.5 h-6 w-6 flex-shrink-0 text-${colors.primary.split(' ')[1] || 'electric'}`} />
// //                     <p className="text-base text-brand">{item}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </Reveal>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials/Results Section */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Success Stories"
// //             title={`Results We've Delivered for ${industry.title}`}
// //             description="Real outcomes that speak for themselves."
// //           />
// //           <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
// //             {[
// //               { metric: '250%', label: 'Average ROI Increase', icon: TrendingUp },
// //               { metric: '300%', label: 'Traffic Growth', icon: Users },
// //               { metric: '45%', label: 'Conversion Rate Boost', icon: Target },
// //             ].map((stat) => (
// //               <StaggerItem key={stat.metric}>
// //                 <div className="h-full rounded-2xl bg-white p-8 text-center shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                   <div className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${colors.primary} text-white`}>
// //                     <stat.icon className="h-8 w-8" />
// //                   </div>
// //                   <div className="text-4xl font-bold gradient-text">{stat.metric}</div>
// //                   <p className="mt-2 text-sm font-semibold text-brand">{stat.label}</p>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* FAQs Section - Dynamic from API */}
// //       {validFaqs.length > 0 && (
// //         <section className="bg-white py-20 lg:py-28">
// //           <div className="container mx-auto px-4">
// //             <SectionHeading
// //               eyebrow="FAQs"
// //               title={`Frequently Asked Questions About ${industry.title}`}
// //               description="Get answers to the most common questions about our services."
// //             />
// //             <div className="mx-auto mt-14 max-w-3xl">
// //               <FAQAccordion items={validFaqs} />
// //             </div>
// //           </div>
// //         </section>
// //       )}

// //       {/* CTA Section - Custom from API if available */}
// //       {/* <section className="py-20 lg:py-28" style={{
// //         background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`
// //       }}>
// //         <div className="container mx-auto px-4 text-center">
// //           <Reveal>
// //             <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
// //               {industry.cta?.heading || `Ready to Grow Your ${industry.title} Business?`}
// //             </h2>
// //             <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
// //               {industry.cta?.subheading || `Let's discuss how we can help you achieve your marketing goals.`}
// //             </p>
// //             <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
// //               <a
// //                 href={industry.cta?.buttonLink || '/contact'}
// //                 className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.primary} px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-xl`}
// //               >
// //                 {industry.cta?.buttonText || 'Get Started Today'}
// //                 <ArrowRight className="h-5 w-5" />
// //               </a>
// //               <a
// //                 href="/portfolio"
// //                 className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 font-semibold text-white transition-all hover:bg-white/10"
// //               >
// //                 View Our Portfolio
// //               </a>
// //             </div>
// //           </Reveal>
// //         </div>
// //       </section> */}

// //       <CTABanner />
// //     </>
// //   );
// // }


// import Image from 'next/image';
// import { CheckCircle2, TrendingUp, Users, Target, BarChart3, 
//          Zap, Shield, Award, Star,
//   ShieldCheck,
//   Globe,
//   Sparkles, } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import SectionHeading from '@/components/common/SectionHeading';
// import FAQAccordion from '@/components/common/FAQAccordion';
// import CTABanner from '@/components/common/CTABanner';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';

// // Define the Industry interface
// interface Industry {
//   _id: string;
//   title: string;
//   slug: string;
//   banner: {
//     public_id: string;
//     secure_url: string;
//   };
//   overview: string;
//   content: string;
//   benefits: string[];
//   faq: Array<{
//     question: string;
//     answer: string;
//   }>;
//   cta: {
//     heading: string;
//     subheading: string;
//     buttonText: string;
//     buttonLink: string;
//   };
//   metaTitle: string;
//   metaDescription: string;
//   schemaJson: string;
//   status: string;
//   gallery: Array<{
//     public_id: string;
//     secure_url: string;
//   }>;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// function getIndustryIcon(title: string) {
//   const name = title.toLowerCase();
//   if (name.includes('ecommerce') || name.includes('e-commerce')) return BarChart3;
//   if (name.includes('healthcare') || name.includes('medical') || name.includes('health')) return Users;
//   if (name.includes('real estate') || name.includes('property')) return Target;
//   if (name.includes('tech') || name.includes('software')) return Zap;
//   if (name.includes('finance') || name.includes('bank')) return Shield;
//   if (name.includes('education') || name.includes('learning')) return Award;
//   return TrendingUp;
// }

// function getIndustryColors(title: string) {
//   const name = title.toLowerCase();
//   if (name.includes('ecommerce') || name.includes('e-commerce')) {
//     return { primary: 'from-blue-600 to-indigo-600', light: 'bg-blue-50', text: 'text-blue-600' };
//   }
//   if (name.includes('healthcare') || name.includes('medical')) {
//     return { primary: 'from-emerald-600 to-teal-600', light: 'bg-emerald-50', text: 'text-emerald-600' };
//   }
//   if (name.includes('real estate') || name.includes('property')) {
//     return { primary: 'from-amber-600 to-orange-600', light: 'bg-amber-50', text: 'text-amber-600' };
//   }
//   if (name.includes('tech') || name.includes('software')) {
//     return { primary: 'from-purple-600 to-pink-600', light: 'bg-purple-50', text: 'text-purple-600' };
//   }
//   return { primary: 'from-blue-600 to-cyan-600', light: 'bg-blue-50', text: 'text-blue-600' };
// }

// export default function IndustryPage({ industry }: { industry: Industry }) {
//   const colors = getIndustryColors(industry.title);
//   // console.log("industry", industry)
//   const validBenefits = industry.benefits?.filter(b => b && b.trim() !== '') || [];
//   const validFaqs = industry.faq?.filter(f => f.question && f.answer && f.question.trim() !== '') || [];

//   const benefitIcons = [
//   ShieldCheck,
//   Zap,
//  Target,
//   TrendingUp,
//   Users,
//   Award,
//   Globe,
//   Sparkles,
//   CheckCircle2,
// ];

//   return (
//     <>
//       {/* Hero Section */}
//       <PageHero
//         breadcrumb={`${industry.title}`}
//         title={`Digital Marketing For ${industry.title}`}
//         description={industry.overview || `Expert digital marketing services tailored for ${industry.title} industry.`}
//         image={industry.banner?.secure_url || ''}
//       />

//       {/* Main Content & Industry Insights */}
//     {/* Main Content & Industry Insights */}
// {industry.content && (
//   <section className="bg-slate-50 py-20 lg:py-28 border-t border-slate-200">
//     <div className="container mx-auto px-4">
//       <SectionHeading
//         eyebrow="Industry Insights"
//         title={`Understanding ${industry.title}`}
//         description="Comprehensive insights and expert analysis tailored for your market growth."
//       />

//       <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
//         {/* Left Side: Image + Key Facts Panel */}
//         {industry.banner?.secure_url && (
//           <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
//             <Reveal direction="right">
//               <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
//                 <div className="relative aspect-[4/3] sm:aspect-square">
//                   <Image
//                     src={industry.gallery[0]?.secure_url}
//                     alt={industry.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     priority
//                   />
//                 </div>
//               </div>

//               {/* Corporate accent strip */}
//               <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${colors.primary}`} />
//                   <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
//                     {industry.title}
//                   </span>
//                 </div>
//                 <p className="text-sm text-slate-500 leading-relaxed">
//                   Data-driven insights curated for decision makers in this sector.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         )}

//         {/* Right Side: Structured Content Card */}
//         <div className={industry.banner?.secure_url ? "lg:col-span-8" : "lg:col-span-12 max-w-4xl mx-auto"}>
//           <Reveal direction="left">
//             <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
//               {/* Header bar */}
//               <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50/60 px-6 sm:px-8 py-5">
//                 <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${colors.primary}`} />
//                 <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
//                   Market Analysis
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="p-6 sm:p-8">
//                 <div className="w-full overflow-x-auto">
//                   <div className="min-w-0">
//                     <div
//                       className="prose prose-lg max-w-none
//                         prose-headings:text-slate-900 prose-headings:font-semibold
//                         prose-h1:text-2xl prose-h1:mb-4 prose-h1:break-words
//                         prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:break-words prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100
//                         prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-h3:break-words
//                         prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-p:break-words
//                         prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-4 prose-ul:break-words
//                         prose-ol:list-decimal prose-ol:pl-5 prose-ol:mb-4 prose-ol:break-words
//                         prose-li:text-slate-600 prose-li:mb-1 prose-li:break-words
//                         prose-strong:text-slate-900 prose-strong:font-semibold
//                         prose-a:text-blue-700 hover:prose-a:underline prose-a:break-words prose-a:font-medium
//                         prose-img:rounded-lg prose-img:border prose-img:border-slate-200 prose-img:my-6
//                         prose-blockquote:border-l-4 prose-blockquote:border-slate-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-500
//                         prose-table:w-full prose-table:border-collapse prose-table:text-sm
//                         prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-wide prose-th:text-slate-700
//                         prose-td:border prose-td:border-slate-100 prose-td:p-3 prose-td:text-sm prose-td:text-slate-600
//                         prose-hr:my-8 prose-hr:border-slate-100"
//                       dangerouslySetInnerHTML={{ __html: industry.content }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </div>
//   </section>
// )}
//       {/* Benefits Section */}
//       {validBenefits.length > 0 && (
//         <section className="bg-sky py-20 lg:py-28">
//           <div className="container mx-auto px-4">
//             <SectionHeading
//               eyebrow="Key Benefits"
//               title={`Why Choose ${industry.title} Solutions`}
//               description="Discover the competitive advantages of working with industry experts."
//             />
//             <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
//               {validBenefits.map((benefit, index) => (
//                 <StaggerItem key={index}>
//                   <div className="group h-full rounded-2xl border border-border bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
//                     <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${colors.primary} text-white transition-all group-hover:scale-110`}>
//                       {index % 2 === 0 ? <Zap className="h-6 w-6" /> : <Star className="h-6 w-6" />}
//                     </div>
//                     <p className="text-base  text-brand">{benefit}</p>
//                   </div>
//                 </StaggerItem>
//               ))}
//             </Stagger>
//           </div>
//         </section>
//       )}

//       {/* Industry Statistics Section */}
//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-8 md:grid-cols-4">
//             <div className="text-center">
//               <div className="text-4xl font-bold gradient-text">12+</div>
//               <p className="mt-2 text-sm text-muted-foreground">Years of Experience</p>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold gradient-text">500+</div>
//               <p className="mt-2 text-sm text-muted-foreground">Projects Completed</p>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold gradient-text">98%</div>
//               <p className="mt-2 text-sm text-muted-foreground">Client Satisfaction</p>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold gradient-text">50+</div>
//               <p className="mt-2 text-sm text-muted-foreground">Industry Awards</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Process Section */}
//       <section className="bg-sky py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             eyebrow="Our Process"
//             title="How We Deliver Results"
//             description="A proven methodology that ensures success for your business."
//           />
//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {[
//               { step: '01', title: 'Discovery', desc: 'We analyze your business goals and market position.' },
//               { step: '02', title: 'Strategy', desc: 'We develop a customized marketing strategy for you.' },
//               { step: '03', title: 'Execution', desc: 'We implement the strategy with precision and expertise.' },
//               { step: '04', title: 'Growth', desc: 'We optimize and scale your campaigns for maximum ROI.' },
//             ].map((item) => (
//               <div key={item.step} className="group rounded-2xl bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
//                 <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${colors.primary} text-2xl font-bold text-white`}>
//                   {item.step}
//                 </div>
//                 <h3 className="text-lg font-bold text-brand">{item.title}</h3>
//                 <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section - Completely DYNAMIC & Image Free */}
//       {validBenefits.length > 0 && (
//         <section className="bg-white py-20 lg:py-28">
//           <div className="container mx-auto px-4">
//             <div className="text-center max-w-3xl mx-auto mb-14">
//               <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.primary} px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white`}>
//                 <span className="h-1.5 w-1.5 rounded-full bg-white" />
//                 Why Choose Us
//               </div>
//               <h2 className="mt-4 text-3xl font-bold text-brand sm:text-4xl">
//                 Why {industry.title} Brands Trust Our Expertise
//               </h2>
//               <p className="mt-4 text-muted-foreground">
//                 We leverage data-driven insights and specific industry knowledge to deploy high-impact conversion models that deliver consistent business growth.
//               </p>
//             </div>

//             {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//               {validBenefits.map((benefit, i) => (
//                 <Reveal key={i} direction="up">
                  
//                   <div className="flex items-start gap-4 h-full rounded-2xl border border-border bg-sky/30 p-6 shadow-premium transition-all hover:-translate-y-1 hover:bg-sky/50 hover:shadow-premium-lg">
                  
//                     <CheckCircle2 className={`mt-0.5 h-6 w-6 flex-shrink-0 ${colors.text}`} />
//                     <p className="text-base  text-brand leading-snug">{benefit}</p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div> */}
//             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//   {validBenefits.map((benefit, i) => {
//     const Icon = benefitIcons[i % benefitIcons.length];

//     return (
//       <Reveal key={i} direction="up">
//         <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">

//           {/* Background Glow */}
//           <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />

//           {/* Icon */}
//           <div className="relative mb-6 flex ">
//             <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
//               <Icon className="h-10 w-10 text-primary group-hover:text-white" />
//             </div>
//           </div>

//           {/* Content */}
//           <p className="relative text-left leading-relaxed text-slate-700">
//             {benefit}
//           </p>
//         </div>
//       </Reveal>
//     );
//   })}
// </div>
//           </div>
//         </section>
//       )}

//       {/* Testimonials/Results Section */}
//       <section className="bg-sky py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             eyebrow="Success Stories"
//             title={`Results We've Delivered for ${industry.title}`}
//             description="Real outcomes that speak for themselves."
//           />
//           <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
//             {[
//               { metric: '250%', label: 'Average ROI Increase', icon: TrendingUp },
//               { metric: '300%', label: 'Traffic Growth', icon: Users },
//               { metric: '45%', label: 'Conversion Rate Boost', icon: Target },
//             ].map((stat) => (
//               <StaggerItem key={stat.metric}>
//                 <div className="h-full rounded-2xl bg-white p-8 text-center shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
//                   <div className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${colors.primary} text-white`}>
//                     <stat.icon className="h-8 w-8" />
//                   </div>
//                   <div className="text-4xl font-bold gradient-text">{stat.metric}</div>
//                   <p className="mt-2 text-sm font-semibold text-brand">{stat.label}</p>
//                 </div>
//               </StaggerItem>
//             ))}
//           </Stagger>
//         </div>
//       </section>

//       {/* FAQs Section */}
//       {validFaqs.length > 0 && (
//         <section className="bg-white py-20 lg:py-28">
//           <div className="container mx-auto px-4">
//             <SectionHeading
//               eyebrow="FAQs"
//               title={`Frequently Asked Questions About ${industry.title}`}
//               description="Get answers to the most common questions about our services."
//             />
//             <div className="mx-auto mt-14 max-w-3xl">
//               <FAQAccordion items={validFaqs} />
//             </div>
//           </div>
//         </section>
//       )}

//       <CTABanner />
//     </>
//   );
// }


import Image from 'next/image';
import {
  CheckCircle2, TrendingUp, Users, Target, BarChart3, 
  Zap, Shield, Award, Star, ShieldCheck, Globe, Sparkles, ArrowUpRight,
  type LucideIcon
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTABanner from '@/components/common/CTABanner';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';

// Define the Industry interface
interface Industry {
  _id: string;
  title: string;
  slug: string;
  banner: { public_id: string; secure_url: string };
  overview: string;
  content: string;
  benefits: string[];
  faq: Array<{ question: string; answer: string }>;
  cta: { heading: string; subheading: string; buttonText: string; buttonLink: string };
  metaTitle: string;
  metaDescription: string;
  schemaJson: string;
  status: string;
  gallery: Array<{ public_id: string; secure_url: string }>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function getIndustryIcon(title: string) {
  const name = title.toLowerCase();
  if (name.includes('ecommerce') || name.includes('e-commerce')) return BarChart3;
  if (name.includes('healthcare') || name.includes('medical') || name.includes('health')) return Users;
  if (name.includes('real estate') || name.includes('property')) return Target;
  if (name.includes('tech') || name.includes('software')) return Zap;
  if (name.includes('finance') || name.includes('bank')) return Shield;
  if (name.includes('education') || name.includes('learning')) return Award;
  return TrendingUp;
}

function getIndustryColors(title: string) {
  const name = title.toLowerCase();
  if (name.includes('ecommerce') || name.includes('e-commerce')) {
    return { primary: 'from-blue-600 to-indigo-600', light: 'bg-blue-50', text: 'text-blue-600' };
  }
  if (name.includes('healthcare') || name.includes('medical')) {
    return { primary: 'from-emerald-600 to-teal-600', light: 'bg-emerald-50', text: 'text-emerald-600' };
  }
  if (name.includes('real estate') || name.includes('property')) {
    return { primary: 'from-amber-600 to-orange-600', light: 'bg-amber-50', text: 'text-amber-600' };
  }
  if (name.includes('tech') || name.includes('software')) {
    return { primary: 'from-purple-600 to-pink-600', light: 'bg-purple-50', text: 'text-purple-600' };
  }
  return { primary: 'from-blue-600 to-cyan-600', light: 'bg-blue-50', text: 'text-blue-600' };
}

export default function IndustryPage({ industry }: { industry: Industry }) {
  const colors = getIndustryColors(industry.title);
  const validBenefits = industry.benefits?.filter(b => b && b.trim() !== '') || [];
  const validFaqs = industry.faq?.filter(f => f.question && f.answer && f.question.trim() !== '') || [];

  const benefitIcons: LucideIcon[] = [
    ShieldCheck, Zap, Target, TrendingUp, Users, Award, Globe, Sparkles, CheckCircle2
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        breadcrumb={`${industry.title}`}
        title={`Digital Marketing For ${industry.title}`}
        description={industry.overview || `Expert digital marketing services tailored for ${industry.title} industry.`}
        image={industry.banner?.secure_url || ''}
      />

      {/* Main Content & Industry Insights */}
      {industry.content && (
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <SectionHeading
              eyebrow="Industry Insights"
              title={`Understanding ${industry.title}`}
              description="Comprehensive insights and expert analysis tailored for your market growth."
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
              {/* Left Side: Image + Key Facts Panel */}
              {industry.banner?.secure_url && (
                <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                  <Reveal direction="right">
                    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <div className="relative aspect-[4/3] sm:aspect-square">
                        <Image
                          src={industry.gallery[0]?.secure_url || industry.banner.secure_url}
                          alt={industry.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          priority
                        />
                      </div>
                    </div>

                    {/* Corporate accent strip */}
                    <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${colors.primary}`} />
                        <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                          {industry.title} Focus
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Data-driven insights curated for decision makers in this sector.
                      </p>
                    </div>
                  </Reveal>
                </div>
              )}

              {/* Right Side: Structured Content Card */}
              <div className={industry.banner?.secure_url ? "lg:col-span-8" : "lg:col-span-12 max-w-4xl mx-auto"}>
                <Reveal direction="left">
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    {/* Header bar */}
                    <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-6 sm:px-8 py-5">
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${colors.primary}`} />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Market Analysis
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <div className="w-full overflow-x-auto">
                        <div className="min-w-0">
                          <div
                            className="prose prose-lg max-w-none
                              prose-headings:text-slate-900 prose-headings:font-bold
                              prose-h1:text-2xl prose-h1:mb-4 prose-h1:break-words
                              prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:break-words prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100
                              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-h3:break-words
                              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-p:break-words
                              prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-4 prose-ul:break-words
                              prose-ol:list-decimal prose-ol:pl-5 prose-ol:mb-4 prose-ol:break-words
                              prose-li:text-slate-600 prose-li:mb-1 prose-li:break-words
                              prose-strong:text-slate-900 prose-strong:font-semibold
                              prose-a:text-blue-700 hover:prose-a:underline prose-a:break-words prose-a:font-medium
                              prose-img:rounded-lg prose-img:border prose-img:border-slate-200 prose-img:my-6
                              prose-blockquote:border-l-4 prose-blockquote:border-slate-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-500
                              prose-table:w-full prose-table:border-collapse prose-table:text-sm
                              prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-wide prose-th:text-slate-700
                              prose-td:border prose-td:border-slate-100 prose-td:p-3 prose-td:text-sm prose-td:text-slate-600
                              prose-hr:my-8 prose-hr:border-slate-100"
                            dangerouslySetInnerHTML={{ __html: industry.content }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {validBenefits.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Key Benefits"
              title={`Why Choose ${industry.title} Solutions`}
              description="Discover the competitive advantages of working with industry experts."
            />
            <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {validBenefits.map((benefit, index) => {
                const Icon = benefitIcons[index % benefitIcons.length];
                return (
                  <StaggerItem key={index}>
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                      {/* Hover Top Accent */}
                      <div className={`absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r ${colors.primary} transition-all duration-500 group-hover:w-1/2`}></div>
                      
                      <div className="relative z-10 flex flex-col items-start">
                        {/* Icon Badge */}
                        <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors.primary} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <p className="text-base font-medium text-brand leading-relaxed">{benefit}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      )}

      {/* Industry Statistics Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-24">
        {/* Background grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { metric: '12+', label: 'Years of Experience' },
              { metric: '500+', label: 'Projects Completed' },
              { metric: '98%', label: 'Client Satisfaction' },
              { metric: '50+', label: 'Industry Awards' }
            ].map((stat, i) => (
              <Reveal key={i} direction="up">
                <div className="text-center transition-transform duration-300 hover:scale-105">
                  <div className={`text-5xl font-extrabold tracking-tight bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                    {stat.metric}
                  </div>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Results"
            description="A proven methodology that ensures success for your business."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', desc: 'We analyze your business goals and market position.' },
              { step: '02', title: 'Strategy', desc: 'We develop a customized marketing strategy for you.' },
              { step: '03', title: 'Execution', desc: 'We implement the strategy with precision and expertise.' },
              { step: '04', title: 'Growth', desc: 'We optimize and scale your campaigns for maximum ROI.' },
            ].map((item) => (
              <div key={item.step} className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-3xl font-extrabold text-slate-300 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:${colors.primary} group-hover:text-white`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {validBenefits.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.primary} px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm`}>
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Why Choose Us
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
                Why {industry.title} Brands Trust Our Expertise
              </h2>
              <p className="mt-5 text-lg text-slate-500">
                We leverage data-driven insights and specific industry knowledge to deploy high-impact conversion models that deliver consistent business growth.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {validBenefits.map((benefit, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                return (
                  <Reveal key={i} direction="up">
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                      
                      {/* Background Glow */}
                      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${colors.primary} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}></div>

                      {/* Icon */}
                      <div className="relative mb-6 flex">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white">
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Content */}
                      <p className="relative text-base font-medium leading-relaxed text-brand">
                        {benefit}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials/Results Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
         {/* Decorative Background */}
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-electric/5 blur-3xl"></div>
         </div>

        <div className="container relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Success Stories"
            title={`Results We've Delivered for ${industry.title}`}
            description="Real outcomes that speak for themselves."
          />
          <Stagger className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.1}>
            {[
              { metric: '250%', label: 'Average ROI Increase', icon: TrendingUp },
              { metric: '300%', label: 'Traffic Growth', icon: Users },
              { metric: '45%', label: 'Conversion Rate Boost', icon: Target },
            ].map((stat) => (
              <StaggerItem key={stat.metric}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                    
                  {/* Hover Top Accent */}
                  <div className={`absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r ${colors.primary} transition-all duration-500 group-hover:w-1/2`}></div>

                  <div className="relative z-10">
                    <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.primary} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                      <stat.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <div className={`text-5xl font-extrabold tracking-tight bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                      {stat.metric}
                    </div>
                    <div className="my-3 h-[2px] w-12 mx-auto bg-slate-100 transition-all duration-500 group-hover:w-20 group-hover:bg-slate-200"></div>
                    <p className="text-sm font-bold uppercase tracking-wider text-brand">{stat.label}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQs Section */}
      {validFaqs.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="FAQs"
              title={`Frequently Asked Questions About ${industry.title}`}
              description="Get answers to the most common questions about our services."
            />
            <div className="mx-auto mt-14 max-w-3xl">
              <FAQAccordion items={validFaqs} />
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}