
// import Counter from '@/components/common/Counter';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// import { resultsStats } from '@/lib/site-data';
// import {
//   BarChart3,
//   TrendingUp,
//   Users,
//   Clock,
//   Award,
//   Target,
//   Rocket,
//   Star,
//   type LucideIcon,
// } from 'lucide-react';

// interface ResultsStat {
//   label: string;
//   sublabel?: string;
//   value: number;
//   suffix?: string;
// }

// // 🚀 Dynamic Icon Mapper: label/sublabel ke hisaab se icon show hoga
// const getDynamicIcon = (stat: ResultsStat): LucideIcon => {
//   const text = `${stat.label} ${stat.sublabel ?? ''}`.toLowerCase();

//   if (text.includes('year') || text.includes('experience')) return BarChart3;
//   if (text.includes('project') || text.includes('deliver') && text.includes('project')) return TrendingUp;
//   if (text.includes('expert') || text.includes('team') || text.includes('client')) return Users;
//   if (text.includes('ontime') || text.includes('on-time') || text.includes('time')) return Clock;
//   if (text.includes('award') || text.includes('recogni')) return Award;
//   if (text.includes('growth') || text.includes('roi') || text.includes('revenue')) return Rocket;
//   if (text.includes('rating') || text.includes('review') || text.includes('satisf')) return Star;
//   return Target;
// };

// export default function ResultsStats() {
//   return (
//     <section className="relative overflow-hidden bg-[#DB2777] py-20 lg:py-28">
//       {/* Subtle ambient glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
//       </div>

//       <div className="container relative z-10 mx-auto px-4">
//         <Reveal className="mx-auto mb-14 max-w-3xl text-center">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur">
//             <span className="h-1.5 w-1.5 rounded-full bg-white" />
//             Results & Statistics
//           </div>
//           <h2 className="text-3xl font-bold text-white sm:text-4xl">
//             Growth You Can Measure
//           </h2>
//           <p className="mt-5 text-base leading-relaxed text-white/80">
//             We do not chase vanity metrics. Every number below represents real
//             business outcomes for real clients.
//           </p>
//         </Reveal>

//         <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4" stagger={0.08}>
//           {resultsStats.map((stat) => {
//             const Icon = getDynamicIcon(stat);

//             return (
//               <StaggerItem key={stat.label}>
//                 <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-white/20 bg-white/10 p-6 transition-all hover:bg-white/15">
//                   <div className="flex items-start justify-between">
//                     <div className="text-3xl font-extrabold text-white lg:text-4xl">
//                       <Counter value={stat.value} suffix={stat.suffix} />
//                     </div>
//                     <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-teal-600">
//                       <Icon className="h-5 w-5" strokeWidth={2} />
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-white">
//                       {stat.label}
//                     </p>
//                     {stat.sublabel && (
//                       <p className="mt-1 text-xs text-white/70">{stat.sublabel}</p>
//                     )}
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

/**
 * Inline SVG background (encoded as data URI) so no extra file is needed.
 * Rose (#F43F5E) base with darker diagonal chevron polygons.
 */
const BG_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 20 20'>
  <rect fill='#F43F5E' width='20' height='20'/>
  <g fill-opacity='1'>
    <polygon fill='#F4001B' points='20 10 10 0 0 0 20 20'/>
    <polygon fill='#F4001B' points='0 10 0 20 10 20'/>
  </g>
</svg>
`)}`;

export default function ResultsStats() {
  return (
    <section
      style={{
        backgroundColor: '#F43F5E',
        backgroundImage: `url("${BG_SVG}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '40px 40px',
        backgroundPosition: 'center',
      }}
      className="relative overflow-hidden py-20 lg:py-28"
    >
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