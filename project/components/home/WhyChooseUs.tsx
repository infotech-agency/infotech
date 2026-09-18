

// import {
//   Users,
//   TrendingUp,
//   Layers,
//   BarChart3,
//   Building2,
//   ShieldCheck,
//   type LucideIcon,
// } from 'lucide-react';
// import SectionHeading from '@/components/common/SectionHeading';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// import { whyChooseUs } from '@/lib/site-data';
// import Image from 'next/image';

// const iconMap: Record<string, LucideIcon> = {
//   Users,
//   TrendingUp,
//   Layers,
//   BarChart3,
//   Building2,
//   ShieldCheck,
// };

// export default function WhyChooseUs() {
//   return (
//     <section className="relative overflow-hidden py-20 lg:py-28">
//       {/* Wave SVG Background */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none">
//         <Image
//           src="/svg/blob2.svg" // Make sure your SVG is in the public folder
//           alt="Background wave"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* Optional: Add overlay for better readability */}
//       <div className="absolute inset-0  pointer-events-none" />

//       <div className="container relative mx-auto px-4 z-10">
//         <SectionHeading
//           eyebrow="Why Choose Us"
//           title="The Infotech Agency Advantage"
//           description="We are not just another agency. We are your growth partner — senior team, revenue focus, full-service execution, and transparent reporting."
//         />

//         <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
//           {whyChooseUs.map((item) => {
//             const Icon = iconMap[item.icon] || Users;
//             return (
//               <StaggerItem key={item.title}>
//                 <div className="group h-full rounded-2xl border border-border bg-white/90 backdrop-blur-sm p-8 shadow-premium transition-all hover:-translate-y-2 hover:border-electric/30 hover:shadow-premium-lg">
//                   <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-brand transition-all group-hover:bg-[#6BAB44] group-hover:text-white">
//                     <Icon className="h-7 w-7" />
//                   </div>
//                   <h3 className="text-xl font-bold text-brand">{item.title}</h3>
//                   <p className="mt-3 text-base leading-relaxed text-muted-foreground">
//                     {item.description}
//                   </p>
//                 </div>
//               </StaggerItem>
//             );
//           })}
//         </Stagger>
//       </div>
//     </section>
//   );
// }

import SectionHeading from '@/components/common/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import { whyChooseUs } from '@/lib/site-data';
import Image from 'next/image';

/**
 * Map API/data icon keys → PNG file path in /public/icons/
 * Yahan apni actual PNG filenames daalna.
 */
const iconMap: Record<string, string> = {
  Users: '/icons/senior.png',
  TrendingUp: '/icons/target.png',
  Layers: '/icons/customer-service.png',
  BarChart3: '/icons/pie-chart.png',
  Building2: '/icons/industrial.png',
  ShieldCheck: '/icons/contract.png',
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background SVG */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        <Image
          src="/svg/blob2.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Infotech Agency Advantage"
          description="We are not just another agency. We are your growth partner — senior team, revenue focus, full-service execution, and transparent reporting."
        />

        <Stagger
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {whyChooseUs.map((item) => {
            const iconSrc = iconMap[item.icon] || '/icons/users.png';

            return (
              <StaggerItem key={item.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white/90 p-8 shadow-premium backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#6BAB44]/40 hover:shadow-[0_20px_45px_-15px_rgba(107,171,68,0.45)]">

                  {/* Top accent bar — slides in on hover (WP-block style) */}
                  <span className="absolute left-0 top-0 h-1 w-0 bg-[#6BAB44] transition-all duration-500 group-hover:w-full" />

                  {/* Soft radial glow behind icon on hover */}
                  <span className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#6BAB44]/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Diagonal shine sweep */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="relative z-10">
                    {/* Icon container — big, clean, WP-like */}
                    <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-[#6BAB44]/15 bg-[#6BAB44]/5 transition-all duration-500 group-hover:scale-110 group-hover:border-[#6BAB44]/40 group-hover:bg-[#6BAB44]/10 group-hover:shadow-[0_10px_25px_-10px_rgba(107,171,68,0.5)]">
                      <Image
                        src={iconSrc}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-brand transition-colors duration-300 group-hover:text-[#6BAB44]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}