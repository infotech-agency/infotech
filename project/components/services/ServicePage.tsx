

// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { 
//   ArrowRight, 
//   CheckCircle2, 
//   BarChart3, 
//   Search, 
//   Users, 
//   Megaphone, 
//   PenTool,
//   TrendingUp,
//   Target,
//   Rocket,
//   Zap,
//   Award,
//   Globe,
//   Smartphone,
//   Mail,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Facebook,
//   Building2,
//   Briefcase,
//   CreditCard,
//   GraduationCap,
//   Heart,
//   Utensils,
//   Home,
//   Car,
//   Plane,
//   Stethoscope,
//   Landmark,
//   ShoppingBag,
//   Coffee,
//   Film,
//   Music,
//   Gamepad,
//   Shirt,
//   Wrench,
//   Leaf,
//   Paintbrush,
//   Dumbbell,
//   Crown,
//   Gem,
//   Bike,
//   ChevronRight,
//   Shield,
//   ShieldCheck,
//   Globe2,
//   BadgeCheck,
//   Cpu,
//   Sparkles
// } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import SectionHeading from '@/components/common/SectionHeading';
// import FAQAccordion from '@/components/common/FAQAccordion';
// import CTABanner from '@/components/common/CTABanner';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// import type { Service } from '@/lib/api';
// import { testimonials } from '@/lib/testimonials';
// import TestimonialsSlider from '../home/TestimonialsSlider';

// interface ServicePageProps {
//   service: Service;
// }

// // Map icons based on service title
// const getIconForService = (title: string): any => {
//   const lowerTitle = title.toLowerCase();
//   const iconMap: Record<string, any> = {
//     'seo': Search,
//     'social': Users,
//     'marketing': Megaphone,
//     'digital': BarChart3,
//     'content': PenTool,
//     'brand': Award,
//     'growth': TrendingUp,
//     'analytics': Target,
//     'automation': Rocket,
//     'ai': Zap,
//     'development': Shield,
//     'design': Paintbrush,
//     'consulting': Briefcase,
//     'training': GraduationCap,
//     'email': Mail,
//     'instagram': Instagram,
//     'linkedin': Linkedin,
//     'youtube': Youtube,
//     'facebook': Facebook,
//     'twitter': Twitter,
//   };
  
//   for (const [key, icon] of Object.entries(iconMap)) {
//     if (lowerTitle.includes(key)) {
//       return icon;
//     }
//   }
//   return BarChart3;
// };

// // Get benefit icon based on benefit text
// const getBenefitIcon = (benefitText: string): any => {
//   const lowerText = benefitText.toLowerCase();
//   const iconMap: Record<string, any> = {
//     'reach': TrendingUp,
//     'online': Globe,
//     'visibility': Search,
//     'engagement': Heart,
//     'conversion': Target,
//     'roi': TrendingUp,
//     'automation': Rocket,
//     'growth': TrendingUp,
//     'traffic': Users,
//     'sales': TrendingUp,
//     'brand': Award,
//     'trust': Shield,
//     'experience': Award,
//     'support': Users,
//   };
  
//   for (const [key, icon] of Object.entries(iconMap)) {
//     if (lowerText.includes(key)) {
//       return icon;
//     }
//   }
//   return Award;
// };

// // Get industries served
// const getIndustriesServed = (): string[] => {
//   return [
//     'Technology',
//     'Healthcare',
//     'Finance',
//     'Retail',
//     'Education',
//     'Manufacturing',
//     'Real Estate',
//     'Hospitality',
//     'Travel',
//     'Automotive',
//     'Fashion',
//     'Food & Beverage',
//     'Entertainment',
//     'Sports',
//     'Non-Profit',
//     'Government',
//     'Energy',
//     'Construction',
//     'Legal',
//     'Insurance'
//   ];
// };

// // Get why choose us points
// const getWhyChooseUs = (): string[] => {
//   return [
//     '12+ Years of Industry Experience',
//     'Dedicated Team of Certified Experts',
//     'Data-Driven Approach to Growth',
//     'Proven Track Record of Results',
//     '24/7 Dedicated Support Team',
//     'Customized Solutions for Your Business'
//   ];
// };

// export default function ServicePage({ service }: ServicePageProps) {
//   const Icon = getIconForService(service.title);
//   const benefitIcons = [
//     ShieldCheck,
//     Rocket,
//     Zap,
//     TrendingUp,
//     Globe2,
//     Users,
//     Award,
//     Briefcase,
//     BadgeCheck,
//     BarChart3,
//     Cpu,
//     Sparkles,
//   ];
//   // Parse features as benefits
//   const benefits = service.features?.map((feature) => ({
//     title: feature,
//     description: feature,
//     icon: getBenefitIcon(feature)
//   })) || [];

//   // Parse process (if available)
//   const processSteps = service.process?.map((step: any, index: number) => ({
//     step: String(index + 1),
//     title: step.title || `Step ${index + 1}`,
//     description: step.description || step || ''
//   })) || [
//     { step: '1', title: 'Discovery & Analysis', description: 'We analyze your business goals and current performance.' },
//     { step: '2', title: 'Strategy Development', description: 'Create a tailored strategy based on insights.' },
//     { step: '3', title: 'Implementation', description: 'Execute the strategy with precision and expertise.' },
//     { step: '4', title: 'Monitor & Optimize', description: 'Continuous tracking and optimization for results.' },
//     { step: '5', title: 'Scale & Grow', description: 'Scale successful strategies for maximum growth.' }
//   ];

//   const industriesServed = getIndustriesServed();
//   const whyChooseUs = getWhyChooseUs();

//   return (
//     <>
//       <PageHero
//         breadcrumb={service.title.split(' ').slice(0, 2).join(' ')}
//         title={service.title}
//         description={service.shortDescription || service.overview}
//         image={service.bannerImage?.secure_url || ''}
//       />

//       {/* Full-width banner (no radius) */}
//       {service.bannerImage?.secure_url && (
//         <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-[30rem]">
//           <Image
//             src={service.bannerImage.secure_url}
//             alt={service.title}
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover"
//           />
//         </div>
//       )}

//       {/* Overview Section — full width content, no thumbnail */}
//       <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-28">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <Reveal direction="right">
//             <div className="w-full min-w-0">
//               <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
//                 {service.overview || 'We provide cutting-edge solutions to help your business grow and succeed in the digital landscape.'}
//               </p>

//               {service.mainContent && (
//                 <div
//                   className="mt-4 w-full max-w-full overflow-x-hidden break-words text-sm leading-relaxed text-gray-600 sm:text-base [&_img]:h-auto [&_img]:max-w-full [&_pre]:overflow-x-auto [&_pre]:whitespace-pre-wrap [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_a]:break-all"
//                   style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
//                   dangerouslySetInnerHTML={{ __html: service.mainContent }}
//                 />
//               )}

//               <Link
//                 href="/contact"
//                 className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl sm:mt-8 sm:w-auto sm:justify-start sm:px-7 sm:py-3.5"
//               >
//                 Get Started
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* Features/Benefits */}
//       {benefits.length > 0 && (
//         <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-28">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <SectionHeading
//               eyebrow="Features"
//               title={`What ${service.title} Includes`}
//               description="Our comprehensive service package designed to deliver maximum value."
//             />

//             <Stagger
//               className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
//               stagger={0.08}
//             >
//               {benefits.map((benefit, index) => {
//                 const Icon = benefitIcons[index % benefitIcons.length];

//                 return (
//                   <StaggerItem key={benefit.title}>
//                     <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">

//                       {/* Glow */}
//                       <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-100 blur-3xl opacity-60 group-hover:bg-blue-200 transition-all" />

//                       {/* Icon */}
//                       <div className="relative mb-6 flex ">
//                         <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 transition-all duration-300 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600">
//                           <Icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />
//                         </div>
//                       </div>

//                       <p className=" leading-7 text-slate-600 text-left">
//                         {benefit.description}
//                       </p>
//                     </div>
//                   </StaggerItem>
//                 );
//               })}
//             </Stagger>
//           </div>
//         </section>
//       )}

//       {/* Process */}
//       <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-28">
//         {/* subtle background accent */}
//         <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

//         <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionHeading
//             eyebrow="Our Process"
//             title="How We Deliver Results"
//             description="A proven, step-by-step process that turns this service into measurable business growth."
//           />

//           <div className="relative mt-14 sm:mt-16">
//             {/* connecting line - desktop only, sits behind the number badges */}
//             <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-400 lg:block" />

//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
//               {processSteps.map((step, i) => (
//                 <Reveal key={step.step} delay={i * 0.1}>
//                   <div className="group relative h-full min-w-0">
//                     {/* number badge, sits on the connecting line */}
//                     <div className="relative z-10 mb-5 flex items-center gap-3 lg:mb-6 lg:flex-col lg:items-start lg:gap-0">
//                       <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-lg font-bold text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white lg:h-16 lg:w-16 lg:text-xl">
//                         {step.step}
//                       </div>
//                       {/* arrow connector for mobile/tablet */}
//                       {i !== processSteps.length - 1 && (
//                         <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-blue-200 to-transparent sm:hidden" />
//                       )}
//                     </div>

//                     <div className="relative h-full min-w-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:shadow-xl">
//                       <h3 className="text-base font-bold text-gray-900 break-words">
//                         {step.title}
//                       </h3>
//                       <p className="mt-2.5 text-sm leading-relaxed text-gray-600 break-words">
//                         {step.description}
//                       </p>

//                       {/* subtle corner accent */}
//                       <div className="absolute right-0 top-0 h-16 w-16 rounded-tr-2xl bg-gradient-to-bl from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <TestimonialsSlider />

//       {/* FAQs */}
//       {service.faq && service.faq.length > 0 && (
//         <section className="bg-gray-50 py-14 sm:py-16 md:py-20 lg:py-28">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <SectionHeading
//               eyebrow="FAQs"
//               title={`Common Questions About ${service.title.split(' ').slice(0, 2).join(' ')}`}
//               description="Everything you need to know before getting started."
//             />
//             <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
//               <FAQAccordion items={service.faq} />
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       {service.cta && service.cta.heading && (
//         <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-14 sm:py-16 md:py-20 lg:py-28">
//           <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
//             <Reveal>
//               <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
//                 {service.cta.heading || 'Ready to Get Started?'}
//               </h2>
//               {service.cta.subheading && (
//                 <p className="mt-3 text-base text-blue-100 sm:mt-4 sm:text-lg">
//                   {service.cta.subheading}
//                 </p>
//               )}
//               <Link
//                 href={service.cta.buttonLink || '/contact'}
//                 className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
//               >
//                 {service.cta.buttonText || 'Contact Us Today'}
//                 <ChevronRight className="h-5 w-5" />
//               </Link>
//             </Reveal>
//           </div>
//         </section>
//       )}

//       <CTABanner />
//     </>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Rocket,
  Zap,
  TrendingUp,
  Globe2,
  Users,
  Award,
  Briefcase,
  BadgeCheck,
  BarChart3,
  Cpu,
  Sparkles,
  Phone,
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTABanner from '@/components/common/CTABanner';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import type { Service } from '@/lib/api';
import TestimonialsSlider from '../home/TestimonialsSlider';

interface ServicePageProps {
  service: Service;
}

/* ------------------------------------------------------------------ */
/* Helpers – backend fields can be string or object, so normalise them */
/* ------------------------------------------------------------------ */

type Img = { secure_url?: string; public_id?: string } | undefined | null;

interface TitleDesc {
  title: string;
  description: string;
}

const toTitleDesc = (item: any, fallbackTitle: string): TitleDesc => {
  if (typeof item === 'string') return { title: item, description: '' };
  return {
    title: item?.title || item?.name || fallbackTitle,
    description: item?.description || item?.text || '',
  };
};

const cardIcons = [
  ShieldCheck,
  Rocket,
  Zap,
  TrendingUp,
  Globe2,
  Users,
  Award,
  Briefcase,
  BadgeCheck,
  BarChart3,
  Cpu,
  Sparkles,
];

export default function ServicePage({ service }: ServicePageProps) {
  const s = service as any;

  const banner: Img = s.bannerImage;
  const thumbnail: Img = s.thumbnail;
  const gallery: Img[] = Array.isArray(s.gallery) ? s.gallery.filter((g: Img) => g?.secure_url) : [];

  // category may be populated object ({ name, slug }) or just an id string
  const categoryName: string | undefined =
    s.category && typeof s.category === 'object' ? s.category.name : undefined;
  const categorySlug: string | undefined =
    s.category && typeof s.category === 'object' ? s.category.slug : undefined;

  const features: TitleDesc[] = (Array.isArray(s.features) ? s.features : []).map((f: any, i: number) =>
    toTitleDesc(f, `Feature ${i + 1}`)
  );
  const benefits: TitleDesc[] = (Array.isArray(s.benefits) ? s.benefits : []).map((b: any, i: number) =>
    toTitleDesc(b, `Benefit ${i + 1}`)
  );
  const processSteps: TitleDesc[] = (Array.isArray(s.process) ? s.process : []).map((p: any, i: number) =>
    toTitleDesc(p, `Step ${i + 1}`)
  );

  const hasFaq = Array.isArray(s.faq) && s.faq.length > 0;
  const hasCta = s.cta && s.cta.heading;
  const shortTitle = String(s.title || '').split(' ').slice(0, 2).join(' ');

  return (
    <>
      <PageHero
        breadcrumb={categoryName || shortTitle}
        title={s.title}
        description={s.shortDescription || s.overview}
        image={banner?.secure_url || ''}
      />

      {/* Full-width banner */}
      {banner?.secure_url && (
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-[30rem]">
          <Image
            src={banner.secure_url}
            alt={s.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* ---------------------------- Overview ---------------------------- */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
            {/* Main column */}
            <Reveal className="min-w-0 lg:col-span-2">
              {categoryName && (
                <Link
                  href={categorySlug ? `/services/category/${categorySlug}` : '/services'}
                  className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                >
                  {categoryName}
                </Link>
              )}

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                About {s.title}
              </h2>

              {s.overview && (
                <p className="mt-4 text-base leading-7 text-gray-600">{s.overview}</p>
              )}

              {s.mainContent && (
                <div
                  className="prose-service mt-6 w-full max-w-full overflow-x-hidden break-words text-base leading-7 text-gray-600 [&_a]:break-all [&_a]:text-blue-600 [&_a]:underline [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl [&_li]:mt-1.5 [&_ol]:ml-5 [&_ol]:list-decimal [&_p]:mt-4 [&_pre]:overflow-x-auto [&_pre]:whitespace-pre-wrap [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_ul]:ml-5 [&_ul]:list-disc"
                  style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                  dangerouslySetInnerHTML={{ __html: s.mainContent }}
                />
              )}
            </Reveal>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  {thumbnail?.secure_url && (
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={thumbnail.secure_url}
                        alt={s.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">Interested in {shortTitle}?</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      Tell us about your requirements and our team will get back to you with a tailored plan.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                    >
                      <Phone className="h-4 w-4" />
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------------------- Features ---------------------------- */}
      {features.length > 0 && (
        <section className="bg-slate-50 py-14 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Features"
              title={`What ${s.title} Includes`}
              description="Everything covered in this service, so you know exactly what to expect."
            />

            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {features.map((f, i) => (
                <StaggerItem key={`${f.title}-${i}`}>
                  <div className="flex h-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-blue-300">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 break-words">{f.title}</p>
                      {f.description && (
                        <p className="mt-1 text-sm leading-relaxed text-gray-600 break-words">
                          {f.description}
                        </p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ---------------------------- Benefits ---------------------------- */}
      {benefits.length > 0 && (
        <section className="bg-white py-14 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Benefits"
              title={`Why Choose ${shortTitle}`}
              description="The results and value you can expect from working with us."
            />

            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
              {benefits.map((b, i) => {
                const Icon = cardIcons[i % cardIcons.length];
                return (
                  <StaggerItem key={`${b.title}-${i}`}>
                    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 transition-colors duration-300 group-hover:from-blue-600 group-hover:to-indigo-600">
                        <Icon className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white" />
                      </div>
                      <h3 className="mt-5 text-base font-bold text-gray-900 break-words">{b.title}</h3>
                      {b.description && (
                        <p className="mt-2 text-sm leading-relaxed text-gray-600 break-words">
                          {b.description}
                        </p>
                      )}
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      )}

      {/* ----------------------------- Process ---------------------------- */}
      {processSteps.length > 0 && (
        <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-24">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Process"
              title="How We Deliver Results"
              description="A clear, step-by-step process that turns this service into measurable business growth."
            />

            <div className="relative mt-14">
              {/* connecting line – desktop only */}
              {processSteps.length > 1 && (
                <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-400 lg:block" />
              )}

              <div
                className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-5 ${
                  processSteps.length >= 5
                    ? 'lg:grid-cols-5'
                    : processSteps.length === 4
                    ? 'lg:grid-cols-4'
                    : processSteps.length === 3
                    ? 'lg:grid-cols-3'
                    : 'lg:grid-cols-2'
                }`}
              >
                {processSteps.map((step, i) => (
                  <Reveal key={`${step.title}-${i}`} delay={i * 0.08}>
                    <div className="group relative h-full min-w-0">
                      <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-lg font-bold text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white lg:h-16 lg:w-16 lg:text-xl">
                        {i + 1}
                      </div>
                      <div className="h-full min-w-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:shadow-lg">
                        <h3 className="text-base font-bold text-gray-900 break-words">{step.title}</h3>
                        {step.description && (
                          <p className="mt-2.5 text-sm leading-relaxed text-gray-600 break-words">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ----------------------------- Gallery ---------------------------- */}
      {gallery.length > 0 && (
        <section className="bg-white py-14 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Gallery"
              title={`${shortTitle} in Action`}
              description="A closer look at our work and deliverables."
            />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map((img, i) => (
                <div
                  key={img?.public_id || i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                >
                  <Image
                    src={img!.secure_url as string}
                    alt={`${s.title} ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialsSlider />

      {/* ------------------------------- FAQ ------------------------------ */}
      {hasFaq && (
        <section className="bg-gray-50 py-14 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQs"
              title={`Common Questions About ${shortTitle}`}
              description="Everything you need to know before getting started."
            />
            <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
              <FAQAccordion items={s.faq} />
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------- CTA ------------------------------ */}
      {hasCta && (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-14 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">{s.cta.heading}</h2>
              {s.cta.subheading && (
                <p className="mx-auto mt-3 max-w-2xl text-base text-blue-100 sm:mt-4 sm:text-lg">
                  {s.cta.subheading}
                </p>
              )}
              <Link
                href={s.cta.buttonLink || '/contact'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                {s.cta.buttonText || 'Contact Us Today'}
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}