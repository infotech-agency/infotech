
// // import Image from 'next/image';
// // import { Award as AwardIcon, Trophy } from 'lucide-react';
// // import SectionHeading from '@/components/common/SectionHeading';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // import { awards } from '@/lib/site-data';

// // export default function AwardsRecognition() {
// //   return (
// //     <section className="bg-sky py-20 lg:py-28">
// //       <div className="container mx-auto px-4">
// //         <SectionHeading
// //           eyebrow="Awards & Recognition"
// //           title="Recognized for Excellence"
// //           description="Our work has been recognized by the industry's most respected organizations — a testament to the results we deliver."
// //         />

// //         <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
// //           {awards.map((award) => (
// //             <StaggerItem key={award.title}>
// //               <div className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
// //                 {/* subtle gold sheen on hover — reinforces the "award" feel
// //                     without touching the core brand palette */}
// //                 <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

// //                 {/* Award image badge, with the org's actual logo/photo.
// //                     Falls back to the Award icon if no image is provided
// //                     in the data so the layout never breaks. */}
// //                 <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-border bg-gradient-primary-soft p-2.5 shadow-sm transition-all group-hover:border-electric">
// //                   {award.img ? (
// //                     <Image
// //                       src={award.img}
// //                       alt={award.organization}
// //                       fill
// //                       className="object-contain p-3"
// //                       sizes="64px"
// //                     />
// //                   ) : (
// //                     <AwardIcon className="h-8 w-8 text-electric transition-colors group-hover:text-brand" />
// //                   )}

// //                   {/* Trophy accent badge overlapping the image corner */}
// //                   <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-primary-soft text-electric ring-4 ring-white transition-all group-hover:bg-brand group-hover:text-white">
// //                     <Trophy className="h-3.5 w-3.5" />
// //                   </div>
// //                 </div>

// //                 <div className="relative">
// //                   <h3 className="text-base font-bold text-brand">{award.title}</h3>
// //                   <p className="mt-1 text-sm text-muted-foreground">
// //                     {award.organization} · {award.year}
// //                   </p>
// //                 </div>
// //               </div>
// //             </StaggerItem>
// //           ))}
// //         </Stagger>
// //       </div>
// //     </section>
// //   );
// // }

// import Image from 'next/image';
// import { Award as AwardIcon, Trophy } from 'lucide-react';
// import SectionHeading from '@/components/common/SectionHeading';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// import { awards } from '@/lib/site-data';

// export default function AwardsRecognition() {
//   return (
//     <section className="relative overflow-hidden bg-sky py-20 lg:py-28">
//       {/* Full-section background layer.
//           Drop your image/SVG here — it'll auto-cover the whole section.
//           Replace src below, or swap <Image> for an inline <svg> if you prefer. */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/awarsbg.svg" // 👈 apni bg image/svg ka path yahan daalo
//           alt=""
//           fill
//           className="object-cover"
//           priority={false}
//         />
//         {/* soft overlay so cards stay readable over any busy bg art */}
//         <div className="absolute inset-0 bg-sky/90" />
//       </div>

//       <div className="container relative z-10 mx-auto px-4">
//         <SectionHeading
//           eyebrow="Awards & Recognition"
//           title="Recognized for Excellence"
//           description="Our work has been recognized by the industry's most respected organizations — a testament to the results we deliver."
//         />

//         <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
//           {awards.map((award) => (
//             <StaggerItem key={award.title}>
//               <div className="group relative flex flex-col items-start gap-5 overflow-hidden  border border-border/60 bg-white/80 p-7 shadow-premium backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-electric/40 hover:bg-white hover:shadow-premium-lg sm:flex-row sm:items-center">
//                 {/* gold sheen sweep on hover */}
//                 <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

//                 {/* subtle glow ring behind badge for extra depth */}
//                 <div className="relative flex h-24 w-24 flex-shrink-0 items-center justify-center  border border-border bg-gradient-primary-soft p-3 shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:scale-105 group-hover:border-electric group-hover:shadow-md">
//                   {award.img ? (
//                     <Image
//                       src={award.img}
//                       alt={award.organization}
//                       fill
//                       className="object-contain p-3"
//                       sizes="96px"
//                     />
//                   ) : (
//                     <AwardIcon className="h-10 w-10 text-electric transition-colors group-hover:text-brand" />
//                   )}

//                   {/* Trophy accent badge */}
//                   <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary-soft text-electric shadow-sm ring-4 ring-white transition-all duration-300 group-hover:bg-brand group-hover:text-white">
//                     <Trophy className="h-4 w-4" />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <h3 className="text-lg font-bold text-brand">{award.title}</h3>
//                   <p className="mt-1.5 text-sm font-medium text-muted-foreground">
//                     {award.organization} · {award.year}
//                   </p>
//                 </div>
//               </div>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }

import Image from 'next/image';
import { Award as AwardIcon, Trophy } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import { awards } from '@/lib/site-data';

export default function AwardsRecognition() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Premium Background: Sharp Box Grid + Mesh Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          eyebrow="Awards & Recognition"
          title="Recognized for Excellence"
          description="Our work has been recognized by the industry's most respected organizations — a testament to the results we deliver."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {awards.map((award) => (
            <StaggerItem key={award.title}>
              <div className="group relative flex h-full flex-col items-start gap-6 overflow-hidden border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-slate-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center">
                
                {/* Sharp Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-electric transition-all duration-500 group-hover:w-full"></div>

                {/* Award Image/Icon Container - Sharp & Structured */}
                <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-electric group-hover:bg-white">
                  {award.img ? (
                    <Image
                      src={award.img}
                      alt={award.organization}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                      sizes="80px"
                    />
                  ) : (
                    <AwardIcon className="h-10 w-10 text-slate-400 transition-colors duration-300 group-hover:text-electric" />
                  )}

                  {/* Sharp Trophy Corner Accent */}
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center bg-electric text-white shadow-md ring-4 ring-white transition-all duration-300 group-hover:bg-brand">
                    <Trophy className="h-4 w-4" strokeWidth={2} />
                  </div>
                </div>

                {/* Content Layout */}
                <div className="relative flex-1">
                  {/* Organization as Uppercase Eyebrow */}
                  <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-electric">
                    {award.organization}
                  </span>
                  
                  {/* Award Title */}
                  <h3 className="mt-2 text-lg font-extrabold tracking-tight text-brand leading-snug">
                    {award.title}
                  </h3>
                  
                  {/* Year Divider */}
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-[1px] w-6 bg-slate-300 transition-all duration-500 group-hover:w-12 group-hover:bg-electric"></div>
                    <p className="text-sm font-semibold text-slate-500">
                      {award.year}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}