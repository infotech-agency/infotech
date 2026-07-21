

// import Image from 'next/image';
// import {
//   Target,
//   Palette,
//   BarChart3,
//   Zap,
//   Star,
//   Users,
//   ArrowUpRight,
//   type LucideIcon,
// } from 'lucide-react';
// import SectionHeading from '@/components/common/SectionHeading';
// import { Stagger, StaggerItem } from '@/components/common/Reveal';
// import { marketingSolutions } from '@/lib/site-data';

// const iconMap: Record<string, LucideIcon> = {
//   Target,
//   Palette,
//   BarChart3,
//   Zap,
//   Star,
//   Users,
// };

// // ⚠️ Replace these with your own optimized assets, e.g. '/images/solutions/strategy.jpg'.
// // The URLs below are Getty "comp" preview images — watermarked and not licensed for
// // production use, kept here only as visual placeholders so the layout isn't broken.
// const imageMap: Record<string, string> = {
//   Target:
//     'https://media.gettyimages.com/id/2231952003/photo/gen-z-leader-attending-a-technology-conference-representing-new-business-occupation-internet.jpg?s=612x612&w=0&k=20&c=gtOUra6TcNK9Jxg6S4ePk1DYgJU4SLDoV8Z5S1w91L0=',
//   Palette:
//     'https://media.gettyimages.com/id/1403599177/photo/abstract-blocks-with-curved-concave.jpg?s=612x612&w=0&k=20&c=HIED9semEwKJWKOBs7YGeEeKVQmpfGTkkLeC3mGwgr4=',
//   BarChart3:
//     'https://media.gettyimages.com/id/2212166509/photo/millennial-and-gen-z-new-investing-using-ai-finanace-interact-with-an-ai-data-finance.jpg?s=612x612&w=0&k=20&c=CfWAtFIdnDEnMy-YrQjtP7PXXWEuCIc7kL4oy09n4pU=',
//   Zap: 'https://media.gettyimages.com/id/2007009859/photo/data-flow-chart-hologram-and-the-woman-using-a-laptop-computer-the-concept-of-computer.jpg?s=612x612&w=0&k=20&c=mN2nFUsZBSYmh_nqofQu1m2_OzL5vO_SFHiky48qSRs=',
//   Star: 'https://media.gettyimages.com/id/2155090853/photo/datalake-big-data-warehouse-data-lake-platform-analytics-technology.jpg?s=612x612&w=0&k=20&c=tRZ5L7OwvbOxrVyOsMq5VtQIonVIYwovUdez3v0yohw=',
//   Users:
//     'https://media.gettyimages.com/id/1970266143/photo/closeup-of-two-friends-commenting-and-giving-likes-on-social-media-platform-via-smartphone.jpg?s=612x612&w=0&k=20&c=CqBleArHnSJDsPhPHRIJSdwVqAd3gA-Hc2MEqbSYDS4=',
// };

// export default function MarketingSolutions() {
//   return (
//     <section className="bg-sky py-20 lg:py-28">
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           eyebrow="Marketing Solutions"
//           title="Everything You Need to Grow"
//           description="Beyond channels, we offer the strategic capabilities that turn marketing spend into compounding revenue."
//         />

//         <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
//           {marketingSolutions.map((item) => {
//             const Icon = iconMap[item.icon] || Target;
//             const image = imageMap[item.icon] || imageMap.Target;

//             return (
//               <StaggerItem key={item.title}>
//                 <div className="group relative flex h-full flex-col rounded border border-border bg-white shadow-premium transition-all duration-300 hover:-translate-y-2 hover:border-electric/30 hover:shadow-premium-lg">
//                   {/* Image showcase — clipped to its own rounded top corners only */}
//                   <div className="relative h-44 w-full overflow-hidden rounded">
//                     <Image
//                       src={image}
//                       alt={item.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/10 to-transparent" />
//                   </div>

//                   {/* Icon badge — sits on a normal-flow row that overlaps upward
//                       via negative margin, so it tracks the image edge no matter
//                       what height the image is. No magic numbers, no absolute hack. */}
//                   <div className="relative z-10 -mt-7 flex px-7">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric shadow-premium ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
//                       <Icon className="h-7 w-7" />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-1 flex-col gap-2 px-7 pb-7 pt-4">
//                     <h3 className="text-lg font-bold text-brand">{item.title}</h3>
//                     <p className="text-sm leading-relaxed text-muted-foreground">
//                       {item.description}
//                     </p>

//                     {/* Reveals on hover: quiet nudge toward the next step,
//                         doesn't compete with the copy at rest */}
                   
//                   </div>
//                 </div>
//               </StaggerItem>
//             );
//           })}
//         </Stagger>
//       </div>
//     </section>
//   );
// }


import Image from 'next/image';
import {
  Target,
  Palette,
  BarChart3,
  Zap,
  Star,
  Users,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { marketingSolutions } from '@/lib/site-data';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Palette,
  BarChart3,
  Zap,
  Star,
  Users,
};

// ⚠️ Replace these with your own optimized assets in the /public folder.
const imageMap: Record<string, string> = {
  Target:
    'https://media.gettyimages.com/id/2231952003/photo/gen-z-leader-attending-a-technology-conference-representing-new-business-occupation-internet.jpg?s=612x612&w=0&k=20&c=gtOUra6TcNK9Jxg6S4ePk1DYgJU4SLDoV8Z5S1w91L0=',
  Palette:
    'https://media.gettyimages.com/id/1403599177/photo/abstract-blocks-with-curved-concave.jpg?s=612x612&w=0&k=20&c=HIED9semEwKJWKOBs7YGeEeKVQmpfGTkkLeC3mGwgr4=',
  BarChart3:
    'https://media.gettyimages.com/id/2212166509/photo/millennial-and-gen-z-new-investing-using-ai-finanace-interact-with-an-ai-data-finance.jpg?s=612x612&w=0&k=20&c=CfWAtFIdnDEnMy-YrQjtP7PXXWEuCIc7kL4oy09n4pU=',
  Zap: 'https://media.gettyimages.com/id/2007009859/photo/data-flow-chart-hologram-and-the-woman-using-a-laptop-computer-the-concept-of-computer.jpg?s=612x612&w=0&k=20&c=mN2nFUsZBSYmh_nqofQu1m2_OzL5vO_SFHiky48qSRs=',
  Star: 'https://media.gettyimages.com/id/2155090853/photo/datalake-big-data-warehouse-data-lake-platform-analytics-technology.jpg?s=612x612&w=0&k=20&c=tRZ5L7OwvbOxrVyOsMq5VtQIonVIYwovUdez3v0yohw=',
  Users:
    'https://media.gettyimages.com/id/1970266143/photo/closeup-of-two-friends-commenting-and-giving-likes-on-social-media-platform-via-smartphone.jpg?s=612x612&w=0&k=20&c=CqBleArHnSJDsPhPHRIJSdwVqAd3gA-Hc2MEqbSYDS4=',
};

export default function MarketingSolutions() {
  return (
    <section className="relative overflow-hidden bg-sky py-20 lg:py-28">
      {/* Decorative Background Blurs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-electric/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          eyebrow="Marketing Solutions"
          title="Everything You Need to Grow"
          description="Beyond channels, we offer the strategic capabilities that turn marketing spend into compounding revenue."
        />

        <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {marketingSolutions.map((item) => {
            const Icon = iconMap[item.icon] || Target;
            const image = imageMap[item.icon] || imageMap.Target;

            return (
              <StaggerItem key={item.title}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-electric/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  
                  {/* Image Showcase */}
                  <div className="relative h-52 w-full overflow-hidden rounded-t">
                    <Image
                      src={image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    
                    {/* Optional: Subtle floating tag on image (can be removed if not needed) */}
                  
                  </div>

                  {/* Icon Badge */}
                  <div className="relative z-10 -mt-8 flex px-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-electric shadow-lg ring-1 ring-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-electric group-hover:to-primary group-hover:text-white group-hover:ring-transparent">
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-6 pb-7 pt-5">
                    <h3 className="text-xl font-bold text-brand transition-colors duration-300 group-hover:text-electric">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>

                    {/* Reinstated Hover CTA */}
                    {/* <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5">
                      <span className="text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-brand">
                        Learn More
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-electric" />
                    </div> */}
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