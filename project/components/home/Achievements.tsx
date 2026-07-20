"use client"
import { useState, useEffect } from 'react';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import Counter from '@/components/common/Counter';
// Importing icons (Assuming lucide-react. Run: npm install lucide-react)
import { Trophy, Users, Rocket, Award, CheckCircle, Sparkles } from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';

interface AchievementItem {
  _id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string; // e.g., "trophy", "users", "rocket"
  description?: string;
}

// Helper to map API string to actual Icon Component
const IconMap: Record<string, any> = {
  trophy: Trophy,
  users: Users,
  rocket: Rocket,
  award: Award,
  check: CheckCircle,
  sparkles: Sparkles
};

export default function Achievements() {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        // http://localhost:5000/api/counters
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
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Decorative Background Elements for Marketing Vibe */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-electric/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-electric shadow-sm">
            <Sparkles className="h-4 w-4" />
            Our Achievements
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            Numbers That Speak for{" "}
            <span className="bg-gradient-to-r from-electric to-primary bg-clip-text text-transparent">
              Themselves
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Over 12 years, we have helped 500+ brands achieve measurable growth
            through data-driven digital marketing strategies.
          </p>
        </Reveal>

        {/* Loading State */}
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-64 animate-pulse rounded-3xl border border-slate-100 bg-white/50 p-8 shadow-sm">
                <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-slate-200"></div>
                <div className="mx-auto h-10 w-24 rounded-lg bg-slate-200"></div>
                <div className="mx-auto mt-4 h-4 w-32 rounded bg-slate-200"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Dynamic Data Content */
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => {
              const Icon = IconMap[item.icon?.toLowerCase()] || Award; // Fallback icon
              
              return (
                <StaggerItem key={item._id}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-electric/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-electric/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-electric/5 group-hover:to-primary/5 group-hover:opacity-100"></div>
                    
                    {/* Top Accent Line on Hover */}
                    <div className="absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-electric to-primary transition-all duration-500 group-hover:w-1/2"></div>

                    <div className="relative z-10 flex flex-col items-center">
                      {/* Icon Container */}
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 text-electric transition-all duration-500 group-hover:from-electric group-hover:to-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-electric/30">
                        <Icon className="h-8 w-8" strokeWidth={1.5} />
                      </div>

                      {/* Counter Value */}
                      <div className="text-4xl font-extrabold tracking-tight text-brand lg:text-5xl">
                        <Counter value={item.value} suffix={item.suffix} />
                      </div>

                      {/* Divider */}
                      <div className="my-4 h-[2px] w-12 bg-slate-100 transition-all duration-500 group-hover:w-20 group-hover:bg-electric/20"></div>

                      {/* Label */}
                      <div className="text-base font-bold uppercase tracking-wider text-brand">
                        {item.label}
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        )}
      </div>
    </section>
  );
}