// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { ArrowRight } from 'lucide-react';
// // import SectionHeading from '@/components/common/SectionHeading';
// // import { Stagger, StaggerItem } from '@/components/common/Reveal';
// // // import { industries } from '@/lib/industries';
// // import { useGetAllIndustries } from '@/hooks/useIndustries';

// // export default function IndustryExpertise() {
// //  const industries = useGetAllIndustries();
// //  console.log("ind->", industries)
// //   return (
// //     <section className="bg-white py-20 lg:py-28">
// //       <div className="container mx-auto px-4">
// //         <SectionHeading
// //           eyebrow="Industry Expertise"
// //           title="Deep Experience Across 30+ Industries"
// //           description="We do not do generic. Every industry has its own dynamics, regulations, and buyer behavior — and we have the specialized experience to match."
// //         />

// //         <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.05}>
// //           {industries?.map((ind) => {
// //             const Icon = ind.icon;
// //             return (
// //               <StaggerItem key={ind.slug}>
// //                 <Link
// //                   href={`/industries/${ind.slug}`}
// //                   className="group relative block aspect-square overflow-hidden rounded-2xl border border-border shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
// //                 >
// //                   <Image
// //                     src={ind.image}
// //                     alt={ind.name}
// //                     fill
// //                     className="object-cover transition-transform duration-500 group-hover:scale-110"
// //                     sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent" />
// //                   <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
// //                     <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur transition-all group-hover:bg-electric">
// //                       <Icon className="h-5 w-5 text-white" />
// //                     </div>
// //                     <p className="text-sm font-bold text-white">{ind.name}</p>
// //                   </div>
// //                 </Link>
// //               </StaggerItem>
// //             );
// //           })}
// //         </Stagger>

// //         <div className="mt-10 text-center">
// //           <Link
// //             href="/industries/more"
// //             className="inline-flex items-center gap-2 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-ocean hover:border-ocean hover:text-white"
// //           >
// //             View All Industries
// //             <ArrowRight className="h-4 w-4" />
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client"
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ArrowRight, Building2 } from 'lucide-react';
// import * as LucideIcons from 'lucide-react';
// import SectionHeading from '@/components/common/SectionHeading';
// import { Stagger, StaggerItem } from '@/components/common/Reveal';

// interface IndustryItem {
//   _id: string;
//   title: string;
//   slug: string;
//   banner?: {
//     secure_url: string;
//   };
//   overview?: string;
//   icon?: string; // optional, agar backend future me bheje
// }

// export default function IndustryExpertise() {
//   const [industries, setIndustries] = useState<IndustryItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchIndustries = async () => {
//       try {
//         // limit=10 (ya jitni chahiye) taaki grid me sab dikhe
//         const response = await fetch('http://localhost:5000/api/industries?limit=10&status=published');
//         const result = await response.json();

//         if (result.success && result.data) {
//           setIndustries(result.data);
//         }
//       } catch (error) {
//         console.error("Error fetching industries data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIndustries();
//   }, []);

//   return (
//     <section className="bg-white py-20 lg:py-28">
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           eyebrow="Industry Expertise"
//           title="Deep Experience Across 30+ Industries"
//           description="We do not do generic. Every industry has its own dynamics, regulations, and buyer behavior — and we have the specialized experience to match."
//         />

//         {loading ? (
//           <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
//             {[...Array(10)].map((_, index) => (
//               <div
//                 key={index}
//                 className="aspect-square animate-pulse rounded-2xl border border-border bg-gray-100 shadow-premium"
//               />
//             ))}
//           </div>
//         ) : (
//           <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.05}>
//             {industries.map((ind) => {
//               const Icon =
//                 (ind.icon && (LucideIcons as any)[ind.icon]) || Building2;

//               return (
//                 <StaggerItem key={ind._id}>
//                   <Link
//                     href={`/industries/${ind.slug}`}
//                     className="group relative block aspect-square overflow-hidden rounded-2xl border border-border shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
//                   >
//                     {ind.banner?.secure_url ? (
//                       <Image
//                         src={ind.gallery[0].secure_url}
//                         alt={ind.title}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-110"
//                         sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
//                       />
//                     ) : (
//                       <div className="absolute inset-0 bg-gradient-primary-soft" />
//                     )}

//                     <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent" />

//                     <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
//                       <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur transition-all group-hover:bg-brand">
//                         <Icon className="h-5 w-5 text-white" />
//                       </div>
//                       <p className="text-sm font-bold text-white">{ind.title}</p>
//                     </div>
//                   </Link>
//                 </StaggerItem>
//               );
//             })}
//           </Stagger>
//         )}

//         <div className="mt-10 text-center">
//           <Link
//             href="/industries/more"
//             className="inline-flex items-center gap-2 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-brand  hover:text-white"
//           >
//             View All Industries
//             <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Building2, 
  HeartPulse, 
  Home, 
  ShoppingBag, 
  Cpu, 
  Landmark, 
  GraduationCap, 
  Plane, 
  Utensils, 
  Car,
  type LucideIcon
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { BASE_URL } from '@/utils/baseUrl';

interface IndustryItem {
  _id: string;
  title: string;
  slug: string;
  banner?: {
    secure_url: string;
  };
  gallery?: Array<{ secure_url: string }>;
  overview?: string;
  icon?: string; 
}

// 🚀 Dynamic Icon Mapper: Title ke hisaab se icon show hoga
const getDynamicIcon = (title: string): LucideIcon => {
  const name = title.toLowerCase();
  if (name.includes('health') || name.includes('medical') || name.includes('care') || name.includes('hospital')) return HeartPulse;
  if (name.includes('real estate') || name.includes('property') || name.includes('home') || name.includes('construction')) return Home;
  if (name.includes('ecommerce') || name.includes('e-commerce') || name.includes('retail') || name.includes('shop')) return ShoppingBag;
  if (name.includes('tech') || name.includes('software') || name.includes('it') || name.includes('saas')) return Cpu;
  if (name.includes('finance') || name.includes('bank') || name.includes('insurance') || name.includes('loan')) return Landmark;
  if (name.includes('education') || name.includes('learning') || name.includes('school') || name.includes('ed-tech')) return GraduationCap;
  if (name.includes('travel') || name.includes('tour') || name.includes('hotel') || name.includes('hospitality')) return Plane;
  if (name.includes('food') || name.includes('restaurant') || name.includes('beverage') || name.includes('cafe')) return Utensils;
  if (name.includes('automotive') || name.includes('car') || name.includes('vehicle') || name.includes('transport')) return Car;
  return Building2; // Agar kuch match na ho toh default
};

export default function IndustryExpertise() {
  const [industries, setIndustries] = useState<IndustryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        // http://localhost:5000/api/industries?limit=10&status=published
        const response = await fetch(`${BASE_URL}/industries?limit=10&status=published`);
        const result = await response.json();

        if (result.success && result.data) {
          setIndustries(result.data);
        }
      } catch (error) {
        console.error("Error fetching industries data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-electric/5 blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          eyebrow="Industry Expertise"
          title="Deep Experience Across 30+ Industries"
          description="We do not do generic. Every industry has its own dynamics, regulations, and buyer behavior — and we have the specialized experience to match."
        />

        {loading ? (
          <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="aspect-square animate-pulse rounded-2xl border border-slate-100 bg-slate-100/80 shadow-sm"
              />
            ))}
          </div>
        ) : (
          <Stagger className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5" stagger={0.05}>
            {industries.map((ind) => {
              // API se icon aaye toh wo, warna title ke hisaab se dynamic icon
              const Icon = getDynamicIcon(ind.title);

              // Image URL: Pehle banner se, warna gallery se, warna placeholder
              const imageUrl = ind.banner?.secure_url || ind.gallery?.[0]?.secure_url;

              return (
                <StaggerItem key={ind._id}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group relative block aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                  >
                    {/* Image Background */}
                    {imageUrl ? (
                      <Image
                        src={ind.gallery[0].secure_url}
                        alt={ind.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                    )}

                    {/* Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:from-slate-900/95" />
                    
                    {/* Hover Top Accent Line */}
                    <div className="absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-electric to-primary transition-all duration-500 group-hover:w-1/2"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                      {/* Glassmorphism Icon */}
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      
                      {/* Title */}
                      <p className="text-sm font-bold text-white transition-transform duration-500 group-hover:-translate-y-1">
                        {ind.title}
                      </p>

                      {/* Hover CTA Indicator */}
                      <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-white/0 transition-all duration-500 group-hover:text-white/80">
                        Explore
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        )}

       
      </div>
    </section>
  );
}