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

import Counter from '@/components/common/Counter';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import { resultsStats } from '@/lib/site-data';
import Image from 'next/image';

export default function ResultsStats() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
      {/* Wave SVG Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/svg/stacked.svg" // Make sure your SVG is in the public folder
          alt="Background wave"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-brand/40 pointer-events-none" />

      {/* Existing background elements */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-sky backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" />
            Results & Statistics
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Growth You Can Measure
          </h2>
          <p className="mt-5 text-lg text-sky/80">
            We do not chase vanity metrics. Every number below represents real
            business outcomes for real clients.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-3" stagger={0.08}>
          {resultsStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-all hover:bg-white/10">
                <div className="text-5xl font-bold text-white lg:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 text-lg font-semibold text-sky">
                  {stat.label}
                </div>
                <p className="mt-1 text-sm text-sky/60">{stat.sublabel}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}