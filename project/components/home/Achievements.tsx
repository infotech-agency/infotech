

// "use client"
// import { useState, useEffect } from 'react';
// import { Reveal } from '@/components/common/Reveal';
// import Counter from '@/components/common/Counter';
// import { Trophy, Users, Rocket, Award, CheckCircle, Sparkles } from 'lucide-react';
// import { BASE_URL } from '@/utils/baseUrl';

// interface AchievementItem {
//   _id: string;
//   label: string;
//   value: number;
//   suffix: string;
//   icon: string;
//   description?: string;
// }

// const IconMap: Record<string, any> = {
//   trophy: Trophy,
//   users: Users,
//   rocket: Rocket,
//   award: Award,
//   check: CheckCircle,
//   sparkles: Sparkles
// };

// export default function Achievements() {
//   const [achievements, setAchievements] = useState<AchievementItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAchievements = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/counters`);
//         const result = await response.json();

//         if (result.success && result.data) {
//           const sortedData = result.data.sort((a: any, b: any) => a.sortOrder - b.sortOrder);
//           setAchievements(sortedData);
//         }
//       } catch (error) {
//         console.error("Error fetching achievements data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAchievements();
//   }, []);

//   return (
//     <section
//       style={{
//         // Blue -> mint -> green (logo image wala gradient)
//         backgroundImage:
//           "linear-gradient(135deg, #2b8be0 0%, #6fdc9f 50%, #1fc46a 100%)",
//       }}
//       className="relative overflow-hidden py-20 lg:py-28"
//     >
//       {/* halka overlay taaki white text readable rahe */}
//       <div className="pointer-events-none absolute inset-0 bg-black/10" />

//       <div className="container relative z-10 mx-auto px-4">
//         {/* Header */}
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
//             The numbers behind 12 years of growth
//           </h2>
//           <p className="mt-4 text-lg leading-relaxed text-white/80">
//             500+ brands, one consistent outcome: measurable results from
//             data-driven digital marketing.
//           </p>
//         </div>

//         {/* Stat strip */}
//         <Reveal className="relative mx-auto mt-16 max-w-5xl">
//           <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-40 -translate-y-1/2 bg-white/10 blur-3xl" />

//           {loading ? (
//             <div className="grid grid-cols-2 gap-y-10 border-y border-white/20 py-10 sm:grid-cols-4 sm:divide-x sm:divide-white/20">
//               {[...Array(4)].map((_, index) => (
//                 <div key={index} className="flex flex-col items-center gap-3 px-6">
//                   <div className="h-6 w-6 animate-pulse rounded-full bg-white/20" />
//                   <div className="h-10 w-20 animate-pulse rounded bg-white/20" />
//                   <div className="h-3 w-28 animate-pulse rounded bg-white/20" />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 gap-y-10 border-y border-white/20 py-10 sm:grid-cols-4 sm:divide-x sm:divide-white/20">
//               {achievements.map((item) => {
//                 const Icon = IconMap[item.icon?.toLowerCase()] || Award;

//                 return (
//                   <div
//                     key={item._id}
//                     className="flex flex-col items-center gap-3 px-6 text-center"
//                   >
//                     <Icon className="h-6 w-6 text-white/70" strokeWidth={1.5} />

//                     <div className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
//                       <Counter value={item.value} suffix={item.suffix} />
//                     </div>

//                     <div className="text-sm font-medium text-white/80">
//                       {item.label}
//                     </div>

//                     {item.description && (
//                       <p className="text-xs leading-relaxed text-white/70">
//                         {item.description}
//                       </p>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </Reveal>
//       </div>
//     </section>
//   );
// }


"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/common/Reveal';
import Counter from '@/components/common/Counter';
import { Trophy, Users, Rocket, Award, CheckCircle, Sparkles } from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';

interface AchievementItem {
  _id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  description?: string;
}

const IconMap: Record<string, any> = {
  trophy: Trophy,
  users: Users,
  rocket: Rocket,
  award: Award,
  check: CheckCircle,
  sparkles: Sparkles
};

/** Background me float hone wale color blobs */
const blobs = [
  { color: '#ffffff', size: 420, top: '-18%', left: '-8%', opacity: 0.25, dx: 40, dy: 25, dur: 16 },
  { color: '#0b5fb5', size: 460, bottom: '-26%', right: '-8%', opacity: 0.45, dx: -40, dy: -25, dur: 18 },
  { color: '#b6ffd9', size: 340, top: '8%', right: '14%', opacity: 0.4, dx: -25, dy: 30, dur: 14 },
  { color: '#0f9d58', size: 320, bottom: '-10%', left: '22%', opacity: 0.35, dx: 30, dy: -20, dur: 20 },
] as {
  color: string; size: number; top?: string; bottom?: string; left?: string; right?: string;
  opacity: number; dx: number; dy: number; dur: number;
}[];

export default function Achievements() {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch(`${BASE_URL}/counters`);
        const result = await response.json();

        if (result.success && result.data) {
          const sortedData = result.data.sort((a: any, b: any) => a.sortOrder - b.sortOrder);
          setAchievements(sortedData);
        }
      } catch (error) {
        console.error("Error fetching achievements data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <section
      style={{
        // Blue -> mint -> green (logo image wala gradient)
        backgroundImage:
          "linear-gradient(135deg, #2b8be0 0%, #6fdc9f 50%, #1fc46a 100%)",
      }}
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* ===== Background experiments ===== */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* halka overlay taaki white text readable rahe */}
        <div className="absolute inset-0 bg-black/10" />

        {/* floating color blobs */}
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[80px]"
            style={{
              width: b.size,
              height: b.size,
              background: b.color,
              opacity: b.opacity,
              top: b.top,
              bottom: b.bottom,
              left: b.left,
              right: b.right,
            }}
            animate={{ x: [0, b.dx, 0], y: [0, b.dy, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* dotted texture (kinaaron pe, beech me fade) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1.5px)',
            backgroundSize: '24px 24px',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, transparent 25%, #000 90%)',
            maskImage:
              'radial-gradient(ellipse at center, transparent 25%, #000 90%)',
            opacity: 0.5,
          }}
        />

        {/* concentric rings, top-right + bottom-left */}
        <div className="absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full border border-white/20" />
        <div className="absolute -right-44 -top-44 h-[560px] w-[560px] rounded-full border border-white/15" />
        <div className="absolute -right-64 -top-64 h-[760px] w-[760px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full border border-white/20" />
        <div className="absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full border border-white/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The numbers behind 12 years of growth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            500+ brands, one consistent outcome: measurable results from
            data-driven digital marketing.
          </p>
        </div>

        {/* Stat strip — ek hi line me, frosted glass box */}
        <Reveal className="relative mx-auto mt-16 max-w-6xl">
          <div className="rounded-3xl border border-white/25 bg-white/10 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-4">
            {loading ? (
              <div className="flex overflow-x-auto sm:overflow-visible">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="flex min-w-[170px] flex-1 shrink-0 flex-col items-center gap-3 px-6 py-6 sm:min-w-0 sm:shrink"
                  >
                    <div className="h-12 w-12 animate-pulse rounded-full bg-white/20" />
                    <div className="h-10 w-20 animate-pulse rounded bg-white/20" />
                    <div className="h-3 w-24 animate-pulse rounded bg-white/20" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex snap-x snap-mandatory overflow-x-auto sm:snap-none sm:overflow-visible sm:divide-x sm:divide-white/20">
                {achievements.map((item) => {
                  const Icon = IconMap[item.icon?.toLowerCase()] || Award;

                  return (
                    <div
                      key={item._id}
                      className="group flex min-w-[170px] flex-1 shrink-0 snap-center flex-col items-center gap-3 px-6 py-6 text-center sm:min-w-0 sm:shrink"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </span>

                      <div className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
                        <Counter value={item.value} suffix={item.suffix} />
                      </div>

                      <div className="text-sm font-medium text-white/90">
                        {item.label}
                      </div>

                      {item.description && (
                        <p className="text-xs leading-relaxed text-white/70">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}