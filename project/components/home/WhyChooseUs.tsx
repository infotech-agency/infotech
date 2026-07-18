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
//     <section className="bg-white py-20 lg:py-28" style={{
//       backgroundImage:`url("/backgrounds/bg.png")`,
//     backgroundSize: "cover",          // cover | contain | 100% 100%
//     backgroundPosition: "center",     // center | top | bottom | left | right
//     backgroundRepeat: "no-repeat",    // repeat | repeat-x | repeat-y
//     backgroundAttachment: "fixed",    // fixed | scroll (parallax effect)
//     backgroundColor: "#fff",        
//     }}>
//       <div className="container mx-auto px-4">
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
//                 <div className="group h-full rounded-2xl border border-border bg-white p-8 shadow-premium transition-all hover:-translate-y-2 hover:border-electric/30 hover:shadow-premium-lg">
//                   <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl  text-brand transition-all group-hover:bg-brand group-hover:text-white">
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

import {
  Users,
  TrendingUp,
  Layers,
  BarChart3,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import { whyChooseUs } from '@/lib/site-data';
import Image from 'next/image';

const iconMap: Record<string, LucideIcon> = {
  Users,
  TrendingUp,
  Layers,
  BarChart3,
  Building2,
  ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Wave SVG Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/svg/blob.svg" // Make sure your SVG is in the public folder
          alt="Background wave"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Optional: Add overlay for better readability */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Infotech Agency Advantage"
          description="We are not just another agency. We are your growth partner — senior team, revenue focus, full-service execution, and transparent reporting."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl border border-border bg-white/90 backdrop-blur-sm p-8 shadow-premium transition-all hover:-translate-y-2 hover:border-electric/30 hover:shadow-premium-lg">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-brand transition-all group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}