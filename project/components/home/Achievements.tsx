


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
       {/* Stat strip: mobile pe 2-col grid, desktop pe ek line, har card glass */}
<Reveal className="relative mx-auto mt-14 max-w-6xl lg:mt-16">
  {loading ? (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-6 backdrop-blur-md md:flex-1"
        >
          <div className="h-12 w-12 animate-pulse rounded-full bg-white/20" />
          <div className="h-9 w-20 animate-pulse rounded bg-white/20" />
          <div className="h-3 w-24 animate-pulse rounded bg-white/20" />
        </div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:gap-5">
      {achievements.map((item) => {
        const Icon = IconMap[item.icon?.toLowerCase()] || Award;

        return (
          <div
            key={item._id}
            className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/30 bg-white/15 px-4 py-6 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:px-5 sm:py-8 md:min-w-0 md:flex-1 [&:last-child:nth-child(odd)]:col-span-2 md:[&:last-child:nth-child(odd)]:col-span-1"
          >
            {/* top highlight, glass shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 sm:h-12 sm:w-12">
              <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.5} />
            </span>

            <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <Counter value={item.value} suffix={item.suffix} />
            </div>

            <div className="text-xs font-medium text-white/90 sm:text-sm">
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
</Reveal>
      </div>
    </section>
  );
}