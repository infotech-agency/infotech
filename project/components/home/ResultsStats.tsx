// import Counter from '@/components/common/Counter';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// import { resultsStats } from '@/lib/site-data';

// export default function ResultsStats() {
//   return (
//     <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
//       <div className="absolute inset-0 bg-grid-dark opacity-20" />
//       <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl" />

//       <div className="container relative mx-auto px-4">
//         <Reveal className="mx-auto mb-14 max-w-3xl text-center">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-sky backdrop-blur">
//             <span className="h-1.5 w-1.5 rounded-full bg-electric" />
//             Results & Statistics
//           </div>
//           <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
//             Growth You Can Measure
//           </h2>
//           <p className="mt-5 text-lg text-sky/80">
//             We do not chase vanity metrics. Every number below represents real
//             business outcomes for real clients.
//           </p>
//         </Reveal>

//         <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-3" stagger={0.08}>
//           {resultsStats.map((stat) => (
//             <StaggerItem key={stat.label}>
//               <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-all hover:bg-white/10">
//                 <div className="text-5xl font-bold text-white lg:text-6xl">
//                   <Counter value={stat.value} suffix={stat.suffix} />
//                 </div>
//                 <div className="mt-3 text-lg font-semibold text-sky">
//                   {stat.label}
//                 </div>
//                 <p className="mt-1 text-sm text-sky/60">{stat.sublabel}</p>
//               </div>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }

// import Counter from '@/components/common/Counter';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// import { resultsStats } from '@/lib/site-data';
// import Image from 'next/image';

// export default function ResultsStats() {
//   return (
//     <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
//       {/* Wave SVG Background */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none">
//         <Image
//           src="/svg/stacked.svg" // Make sure your SVG is in the public folder
//           alt="Background wave"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* Overlay for better readability */}
//       <div className="absolute inset-0  pointer-events-none" />

//       {/* Existing background elements */}
//       <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
//       <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl pointer-events-none" />

//       <div className="container relative mx-auto px-4 z-10">
//         <Reveal className="mx-auto mb-14 max-w-3xl text-center">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-sky backdrop-blur">
//             <span className="h-1.5 w-1.5 rounded-full bg-electric" />
//             Results & Statistics
//           </div>
//           <h2 className="text-xl font-semibold text-white sm:text-4xl lg:text-4xl">
//             Growth You Can Measure
//           </h2>
//           <p className="mt-5  text-white">
//             We do not chase vanity metrics. Every number below represents real
//             business outcomes for real clients.
//           </p>
//         </Reveal>

//         <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-3" stagger={0.08}>
//           {resultsStats.map((stat) => (
//             <StaggerItem key={stat.label}>
//               <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-all hover:bg-white/10">
//                 <div className="text-3xl font-bold text-white lg:text-4xl">
//                   <Counter value={stat.value} suffix={stat.suffix} />
//                 </div>
//                 <div className="mt-3 text-lg font-semibold text-sky">
//                   {stat.label}
//                 </div>
//                 <p className="mt-1 text-sm text-sky/60">{stat.sublabel}</p>
//               </div>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }

import Counter from '@/components/common/Counter';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import { resultsStats } from '@/lib/site-data';
import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Award,
  Target,
  Rocket,
  Star,
  type LucideIcon,
} from 'lucide-react';

interface ResultsStat {
  label: string;
  sublabel?: string;
  value: number;
  suffix?: string;
}

// 🚀 Dynamic Icon Mapper: label/sublabel ke hisaab se icon show hoga
const getDynamicIcon = (stat: ResultsStat): LucideIcon => {
  const text = `${stat.label} ${stat.sublabel ?? ''}`.toLowerCase();

  if (text.includes('year') || text.includes('experience')) return BarChart3;
  if (text.includes('project') || text.includes('deliver') && text.includes('project')) return TrendingUp;
  if (text.includes('expert') || text.includes('team') || text.includes('client')) return Users;
  if (text.includes('ontime') || text.includes('on-time') || text.includes('time')) return Clock;
  if (text.includes('award') || text.includes('recogni')) return Award;
  if (text.includes('growth') || text.includes('roi') || text.includes('revenue')) return Rocket;
  if (text.includes('rating') || text.includes('review') || text.includes('satisf')) return Star;
  return Target;
};

export default function ResultsStats() {
  return (
    <section className="relative overflow-hidden bg-[#6BAA44] py-20 lg:py-28">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Results & Statistics
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Growth You Can Measure
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            We do not chase vanity metrics. Every number below represents real
            business outcomes for real clients.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4" stagger={0.08}>
          {resultsStats.map((stat) => {
            const Icon = getDynamicIcon(stat);

            return (
              <StaggerItem key={stat.label}>
                <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-white/20 bg-white/10 p-6 transition-all hover:bg-white/15">
                  <div className="flex items-start justify-between">
                    <div className="text-3xl font-extrabold text-white lg:text-4xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-teal-600">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {stat.label}
                    </p>
                    {stat.sublabel && (
                      <p className="mt-1 text-xs text-white/70">{stat.sublabel}</p>
                    )}
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