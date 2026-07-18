// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { ArrowRight, CheckCircle2 } from 'lucide-react';
// // import PageHero from '@/components/common/PageHero';
// // import SectionHeading from '@/components/common/SectionHeading';
// // import FAQAccordion from '@/components/common/FAQAccordion';
// // import CTABanner from '@/components/common/CTABanner';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // import type { Service } from '@/lib/services';
// // import { testimonials } from '@/lib/testimonials';

// // export default function ServicePage({ service }: { service: Service }) {
 
// //   const Icon = service.icon;

// //   return (
// //     <>
// //       <PageHero
// //         breadcrumb={service.shortTitle}
// //         title={service.title}
// //         description={service.description}
// //         image={service.image}
// //       />

// //       {/* Overview */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
// //             <Reveal direction="right">
// //               <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-primary-soft px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-electric">
// //                 <Icon className="h-4 w-4" />
// //                 Overview
// //               </div>
// //               <h2 className="text-3xl font-bold text-brand sm:text-4xl">
// //                 {service.tagline}
// //               </h2>
// //               {service.overview.map((para, i) => (
// //                 <p key={i} className="mt-5 text-base leading-relaxed text-muted-foreground">
// //                   {para}
// //                 </p>
// //               ))}
// //               <Link
// //                 href="/contact"
// //                 className="mt-8 inline-flex items-center gap-2 bg-ocean px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark"
// //               >
// //                 Get Started
// //                 <ArrowRight className="h-4 w-4" />
// //               </Link>
// //             </Reveal>
// //             <Reveal direction="left">
// //               <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium-lg">
// //                 <Image
// //                   src={service.image}
// //                   alt={service.title}
// //                   fill
// //                   className="object-cover"
// //                   sizes="(max-width: 1024px) 100vw, 50vw"
// //                 />
// //               </div>
// //             </Reveal>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Benefits */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Benefits"
// //             title={`Why ${service.shortTitle} Matters`}
// //             description="The tangible outcomes our clients experience when they invest in this service."
// //           />
// //           <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
// //             {service.benefits.map((benefit) => {
// //               const BIcon = benefit.icon;
// //               return (
// //                 <StaggerItem key={benefit.title}>
// //                   <div className="group h-full rounded-2xl border border-border bg-white p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                     <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric transition-all group-hover:gradient-primary group-hover:text-white">
// //                       <BIcon className="h-7 w-7" />
// //                     </div>
// //                     <h3 className="text-lg font-bold text-brand">{benefit.title}</h3>
// //                     <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
// //                       {benefit.description}
// //                     </p>
// //                   </div>
// //                 </StaggerItem>
// //               );
// //             })}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Process */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Our Process"
// //             title="How We Deliver Results"
// //             description="A proven, step-by-step process that turns this service into measurable business growth."
// //           />
// //           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
// //             {service.process.map((step, i) => (
// //               <Reveal key={step.step} delay={i * 0.1}>
// //                 <div className="relative h-full rounded-2xl border border-border bg-sky p-6 shadow-premium">
// //                   <div className="mb-4 text-4xl font-bold gradient-text">
// //                     {step.step}
// //                   </div>
// //                   <h3 className="text-base font-bold text-brand">{step.title}</h3>
// //                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
// //                     {step.description}
// //                   </p>
// //                 </div>
// //               </Reveal>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
// //             <Reveal direction="right">
// //               <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-primary-soft px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-electric">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-electric" />
// //                 Why Choose Us
// //               </div>
// //               <h2 className="text-3xl font-bold text-brand sm:text-4xl">
// //                 Why Brands Trust Us with Their {service.shortTitle}
// //               </h2>
// //               <p className="mt-5 text-base leading-relaxed text-muted-foreground">
// //                 We bring 12+ years of specialized experience, a senior team, and
// //                 a relentless focus on revenue — not vanity metrics.
// //               </p>
// //             </Reveal>
// //             <Reveal direction="left">
// //               <div className="space-y-4">
// //                 {service.whyChooseUs.map((item, i) => (
// //                   <div
// //                     key={i}
// //                     className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-premium"
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

// //       {/* Industries Served */}
// //       <section className="bg-white py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="Industries Served"
// //             title="We Serve Your Industry"
// //             description="We have deep experience across 30+ industries. Here are a few we specialize in."
// //           />
// //           <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.05}>
// //             {service.industriesServed.map((ind) => (
// //               <StaggerItem key={ind}>
// //                 <Link
// //                   href={`/industries/${ind.toLowerCase().replace(/[^a-z]+/g, '-')}`}
// //                   className="block rounded-xl border border-border bg-sky p-5 text-center text-sm font-semibold text-brand transition-all hover:gradient-primary hover:text-white hover:shadow-glow"
// //                 >
// //                   {ind}
// //                 </Link>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* Testimonials */}
// //       <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
// //         <div className="absolute inset-0 bg-grid-dark opacity-20" />
// //         <div className="container relative mx-auto px-4">
// //           <SectionHeading
// //             light
// //             eyebrow="Testimonials"
// //             title="What Clients Say About Our Work"
// //             description="Real results from real brands who trusted us with their growth."
// //           />
// //           <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
// //             {testimonials.slice(0, 3).map((t) => (
// //               <StaggerItem key={t.name}>
// //                 <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
// //                   <p className="flex-1 text-base leading-relaxed text-sky/90">
// //                     "{t.quote}"
// //                   </p>
// //                   <div className="mt-6 border-t border-white/10 pt-5">
// //                     <p className="font-semibold text-white">{t.name}</p>
// //                     <p className="text-sm text-sky/60">
// //                       {t.role}, {t.company}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </StaggerItem>
// //             ))}
// //           </Stagger>
// //         </div>
// //       </section>

// //       {/* FAQs */}
// //       <section className="bg-sky py-20 lg:py-28">
// //         <div className="container mx-auto px-4">
// //           <SectionHeading
// //             eyebrow="FAQs"
// //             title={`Common Questions About ${service.shortTitle}`}
// //             description="Everything you need to know before getting started."
// //           />
// //           <div className="mt-14">
// //             <FAQAccordion items={service.faqs} />
// //           </div>
// //         </div>
// //       </section>

// //       <CTABanner />
// //     </>
// //   );
// // }

// // components/services/ServicePage.tsx


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
//   Shield
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

//       {/* Overview Section */}
//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//             <Reveal direction="right">
//               <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600">
//                 <Icon className="h-4 w-4" />
//                 Overview
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                 {service.title}
//               </h2>
//               <p className="mt-5 text-base leading-relaxed text-gray-600">
//                 {service.overview || 'We provide cutting-edge solutions to help your business grow and succeed in the digital landscape.'}
//               </p>
//               {service.mainContent && (
//                 <div 
//                   className="mt-4 text-base leading-relaxed text-gray-600"
//                   dangerouslySetInnerHTML={{ __html: service.mainContent }}
//                 />
//               )}
//               <Link
//                 href="/contact"
//                 className="mt-8 inline-flex items-center gap-2 bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl rounded-md"
//               >
//                 Get Started
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Reveal>
//             <Reveal direction="left">
//               <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
//                 {service.thumbnail?.secure_url ? (
//                   <Image
//                     src={service.thumbnail.secure_url}
//                     alt={service.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 1024px) 100vw, 50vw"
//                   />
//                 ) : (
//                   <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-400">
//                     <div className="text-center">
//                       <Icon className="mx-auto h-16 w-16 text-blue-400" />
//                       <p className="mt-2">{service.title}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Features/Benefits */}
//       {benefits.length > 0 && (
//         <section className="bg-gray-50 py-20 lg:py-28">
//           <div className="container mx-auto px-4">
//             <SectionHeading
//               eyebrow="Features"
//               title={`What ${service.title} Includes`}
//               description="Our comprehensive service package designed to deliver maximum value."
//             />
//             <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
//               {benefits.map((benefit) => {
//                 const BIcon = benefit.icon;
//                 return (
//                   <StaggerItem key={benefit.title}>
//                     <div className="group h-full text-center rounded-2xl border border-gray-200 bg-white p-7 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
//                       <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
//                         <BIcon className="h-7 w-7" />
//                       </div>
//                       <h3 className="text-lg  font-bold text-gray-900">{benefit.title}</h3>
//                       {/* <p className="mt-3 text-sm leading-relaxed text-gray-600">
//                         {benefit.description}
//                       </p> */}
//                     </div>
//                   </StaggerItem>
//                 );
//               })}
//             </Stagger>
//           </div>
//         </section>
//       )}

//       {/* Process */}
//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             eyebrow="Our Process"
//             title="How We Deliver Results"
//             description="A proven, step-by-step process that turns this service into measurable business growth."
//           />
//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
//             {processSteps.map((step, i) => (
//               <Reveal key={step.step} delay={i * 0.1}>
//                 <div className="relative h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-lg">
//                   <div className="mb-4 text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                     {step.step}
//                   </div>
//                   <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-gray-600">
//                     {step.description}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

      
     
//       <TestimonialsSlider/>
    

//       {/* FAQs */}
//       {service.faq && service.faq.length > 0 && (
//         <section className="bg-gray-50 py-20 lg:py-28">
//           <div className="container mx-auto px-4">
//             <SectionHeading
//               eyebrow="FAQs"
//               title={`Common Questions About ${service.title.split(' ').slice(0, 2).join(' ')}`}
//               description="Everything you need to know before getting started."
//             />
//             <div className="mt-14 max-w-3xl mx-auto">
//               <FAQAccordion items={service.faq} />
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       {service.cta && service.cta.heading && (
//         <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 lg:py-28">
//           <div className="container mx-auto px-4 text-center">
//             <Reveal>
//               <h2 className="text-3xl font-bold text-white sm:text-4xl">
//                 {service.cta.heading || 'Ready to Get Started?'}
//               </h2>
//               {service.cta.subheading && (
//                 <p className="mt-4 text-lg text-blue-100">
//                   {service.cta.subheading}
//                 </p>
//               )}
//               <Link
//                 href={service.cta.buttonLink || '/contact'}
//                 className="mt-8 inline-flex items-center gap-2 bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition-all hover:shadow-xl hover:scale-105 rounded-md"
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
  BarChart3, 
  Search, 
  Users, 
  Megaphone, 
  PenTool,
  TrendingUp,
  Target,
  Rocket,
  Zap,
  Award,
  Globe,
  Smartphone,
  Mail,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Building2,
  Briefcase,
  CreditCard,
  GraduationCap,
  Heart,
  Utensils,
  Home,
  Car,
  Plane,
  Stethoscope,
  Landmark,
  ShoppingBag,
  Coffee,
  Film,
  Music,
  Gamepad,
  Shirt,
  Wrench,
  Leaf,
  Paintbrush,
  Dumbbell,
  Crown,
  Gem,
  Bike,
  ChevronRight,
  Shield,
  ShieldCheck,
  Globe2,
  BadgeCheck,
  Cpu,
  Sparkles
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTABanner from '@/components/common/CTABanner';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import type { Service } from '@/lib/api';
import { testimonials } from '@/lib/testimonials';
import TestimonialsSlider from '../home/TestimonialsSlider';

interface ServicePageProps {
  service: Service;
}

// Map icons based on service title
const getIconForService = (title: string): any => {
  const lowerTitle = title.toLowerCase();
  const iconMap: Record<string, any> = {
    'seo': Search,
    'social': Users,
    'marketing': Megaphone,
    'digital': BarChart3,
    'content': PenTool,
    'brand': Award,
    'growth': TrendingUp,
    'analytics': Target,
    'automation': Rocket,
    'ai': Zap,
    'development': Shield,
    'design': Paintbrush,
    'consulting': Briefcase,
    'training': GraduationCap,
    'email': Mail,
    'instagram': Instagram,
    'linkedin': Linkedin,
    'youtube': Youtube,
    'facebook': Facebook,
    'twitter': Twitter,
  };
  
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lowerTitle.includes(key)) {
      return icon;
    }
  }
  return BarChart3;
};

// Get benefit icon based on benefit text
const getBenefitIcon = (benefitText: string): any => {
  const lowerText = benefitText.toLowerCase();
  const iconMap: Record<string, any> = {
    'reach': TrendingUp,
    'online': Globe,
    'visibility': Search,
    'engagement': Heart,
    'conversion': Target,
    'roi': TrendingUp,
    'automation': Rocket,
    'growth': TrendingUp,
    'traffic': Users,
    'sales': TrendingUp,
    'brand': Award,
    'trust': Shield,
    'experience': Award,
    'support': Users,
  };
  
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lowerText.includes(key)) {
      return icon;
    }
  }
  return Award;
};

// Get industries served
const getIndustriesServed = (): string[] => {
  return [
    'Technology',
    'Healthcare',
    'Finance',
    'Retail',
    'Education',
    'Manufacturing',
    'Real Estate',
    'Hospitality',
    'Travel',
    'Automotive',
    'Fashion',
    'Food & Beverage',
    'Entertainment',
    'Sports',
    'Non-Profit',
    'Government',
    'Energy',
    'Construction',
    'Legal',
    'Insurance'
  ];
};

// Get why choose us points
const getWhyChooseUs = (): string[] => {
  return [
    '12+ Years of Industry Experience',
    'Dedicated Team of Certified Experts',
    'Data-Driven Approach to Growth',
    'Proven Track Record of Results',
    '24/7 Dedicated Support Team',
    'Customized Solutions for Your Business'
  ];
};

export default function ServicePage({ service }: ServicePageProps) {
  const Icon = getIconForService(service.title);
  const benefitIcons = [
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
  // Parse features as benefits
  const benefits = service.features?.map((feature) => ({
    title: feature,
    description: feature,
    icon: getBenefitIcon(feature)
  })) || [];

  // Parse process (if available)
  const processSteps = service.process?.map((step: any, index: number) => ({
    step: String(index + 1),
    title: step.title || `Step ${index + 1}`,
    description: step.description || step || ''
  })) || [
    { step: '1', title: 'Discovery & Analysis', description: 'We analyze your business goals and current performance.' },
    { step: '2', title: 'Strategy Development', description: 'Create a tailored strategy based on insights.' },
    { step: '3', title: 'Implementation', description: 'Execute the strategy with precision and expertise.' },
    { step: '4', title: 'Monitor & Optimize', description: 'Continuous tracking and optimization for results.' },
    { step: '5', title: 'Scale & Grow', description: 'Scale successful strategies for maximum growth.' }
  ];

  const industriesServed = getIndustriesServed();
  const whyChooseUs = getWhyChooseUs();

  return (
    <>
      <PageHero
        breadcrumb={service.title.split(' ').slice(0, 2).join(' ')}
        title={service.title}
        description={service.shortDescription || service.overview}
        image={service.bannerImage?.secure_url || ''}
      />

      {/* Overview Section */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
            <Reveal direction="right">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 sm:mb-4 sm:px-4 sm:text-sm">
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Overview
              </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:mt-5 sm:text-base">
                {service.overview || 'We provide cutting-edge solutions to help your business grow and succeed in the digital landscape.'}
              </p>
              {/* {service.mainContent && (
                <div 
                  className="mt-4 text-sm leading-relaxed text-gray-600 bg-red-500 sm:text-base"
                  dangerouslySetInnerHTML={{ __html: service.mainContent }}
                />
              )} */}
              {service.mainContent && (
  <div 
    className="mt-4 w-full max-w-full overflow-x-hidden break-words text-sm leading-relaxed text-gray-600 sm:text-base [&_img]:h-auto [&_img]:max-w-full [&_pre]:overflow-x-auto [&_pre]:whitespace-pre-wrap [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_a]:break-all"
    dangerouslySetInnerHTML={{ __html: service.mainContent }}
  />
)}
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl sm:mt-8 sm:w-auto sm:justify-start sm:px-7 sm:py-3.5"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal direction="left">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl sm:rounded-2xl sm:shadow-2xl">
                {service.thumbnail?.secure_url ? (
                  <Image
                    src={service.thumbnail.secure_url}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-400">
                    <div className="text-center px-4">
                      <Icon className="mx-auto h-12 w-12 text-blue-400 sm:h-16 sm:w-16" />
                      <p className="mt-2 text-sm sm:text-base">{service.title}</p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
    {benefits.length > 0 && (
  <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Features"
        title={`What ${service.title} Includes`}
        description="Our comprehensive service package designed to deliver maximum value."
      />

  <Stagger
  className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
  stagger={0.08}
>
  {benefits.map((benefit, index) => {
    const Icon = benefitIcons[index % benefitIcons.length];

    return (
      <StaggerItem key={benefit.title}>
        <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">

          {/* Glow */}
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-100 blur-3xl opacity-60 group-hover:bg-blue-200 transition-all" />

          {/* Icon */}
          <div className="relative mb-6 flex ">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 transition-all duration-300 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600">
              <Icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />
            </div>
          </div>

         

          <p className=" leading-7 text-slate-600 text-left">
            {benefit.description}
          </p>
        </div>
      </StaggerItem>
    );
  })}
</Stagger>
    </div>
  </section>
)}

      {/* Process */}
      {/* <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Results"
            description="A proven, step-by-step process that turns this service into measurable business growth."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative h-full rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-lg sm:rounded-2xl sm:p-6">
                  <div className="mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-4 sm:text-4xl">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 sm:text-base">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-28">
  {/* subtle background accent */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      eyebrow="Our Process"
      title="How We Deliver Results"
      description="A proven, step-by-step process that turns this service into measurable business growth."
    />

    <div className="relative mt-14 sm:mt-16">
      {/* connecting line - desktop only, sits behind the number badges */}
      <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-400 lg:block" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {processSteps.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.1}>
            <div className="group relative h-full">
              {/* number badge, sits on the connecting line */}
              <div className="relative z-10 mb-5 flex items-center gap-3 lg:mb-6 lg:flex-col lg:items-start lg:gap-0">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-lg font-bold text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white lg:h-16 lg:w-16 lg:text-xl">
                  {step.step}
                </div>
                {/* arrow connector for mobile/tablet */}
                {i !== processSteps.length - 1 && (
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent sm:hidden" />
                )}
              </div>

              <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:shadow-xl">
                <h3 className="text-base font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>

                {/* subtle corner accent */}
                <div className="absolute right-0 top-0 h-16 w-16 rounded-tr-2xl bg-gradient-to-bl from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
</section>
      
     
      <TestimonialsSlider/>
    

      {/* FAQs */}
      {service.faq && service.faq.length > 0 && (
        <section className="bg-gray-50 py-14 sm:py-16 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQs"
              title={`Common Questions About ${service.title.split(' ').slice(0, 2).join(' ')}`}
              description="Everything you need to know before getting started."
            />
            <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
              <FAQAccordion items={service.faq} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {service.cta && service.cta.heading && (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-14 sm:py-16 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                {service.cta.heading || 'Ready to Get Started?'}
              </h2>
              {service.cta.subheading && (
                <p className="mt-3 text-base text-blue-100 sm:mt-4 sm:text-lg">
                  {service.cta.subheading}
                </p>
              )}
              <Link
                href={service.cta.buttonLink || '/contact'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                {service.cta.buttonText || 'Contact Us Today'}
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