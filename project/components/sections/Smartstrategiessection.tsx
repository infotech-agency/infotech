import {
  Search,
  Users,
  MousePointerClick,
  Mail,
  Bot,
  BarChart3,
  Megaphone,
  Eye,
  Target,
  ShoppingCart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/**
 * SmartStrategiesSection
 * -------------------------------------------------------------
 * Icons now use solid, distinct colors (no gradients).
 * Center circle has no text and no icon — an image is placed inside.
 *
 * Requires: lucide-react  ->  npm install lucide-react
 */

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string; // solid color per icon
};

const leftFeatures: Feature[] = [
  {
    icon: Search,
    title: "SEO & AI SEO",
    desc: "Rank higher on search engines with smart SEO and AI-powered strategies.",
    color: "#6BAB44", // green
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    desc: "Build brand awareness, engage your audience, and grow your community.",
    color: "#3B82F6", // blue
  },
  {
    icon: MousePointerClick,
    title: "Google Ads Management",
    desc: "Target the right audience and get instant leads with high-converting ad campaigns.",
    color: "#F59E0B", // amber
  },
];

const rightFeatures: Feature[] = [
  {
    icon: Mail,
    title: "Content Marketing",
    desc: "Engage, inform, and convert your audience with valuable content that builds trust.",
    color: "#8B5CF6", // violet
  },
  {
    icon: Bot,
    title: "AI Powered Marketing",
    desc: "Leverage AI tools and automation to optimize campaigns and maximise ROI.",
    color: "#06B6D4", // cyan
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Track performance, measure results, and make data-driven decisions for growth.",
    color: "#F43F5E", // rose
  },
];

const stats = [
  { icon: Eye, label: "More Visibility", color: "#6BAB44" },
  { icon: Target, label: "More Leads", color: "#3B82F6" },
  { icon: ShoppingCart, label: "More Sales", color: "#F59E0B" },
  { icon: TrendingUp, label: "Sustainable Growth", color: "#8B5CF6" },
];

function FeatureCard({
  feature,
  align = "left",
}: {
  feature: Feature;
  align?: "left" | "right";
}) {
  const Icon = feature.icon;
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-premium ${
        align === "right" ? "flex-row-reverse text-right" : "text-left"
      }`}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-glow"
        style={{ backgroundColor: feature.color }}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h3 className="text-[0.95rem] font-semibold text-primary">
          {feature.title}
        </h3>
        <p className="mt-1 text-[0.85rem] leading-relaxed text-foreground/80">
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

const CANVAS_W = 1200;
const CANVAS_H = 620;

const rowY = { top: 120, mid: 310, bottom: 500 };

const connectors = [
  { d: `M320,${rowY.top} C420,${rowY.top} 420,246 489,246` },
  { d: `M320,${rowY.mid} C396,${rowY.mid} 396,${rowY.mid} 472,${rowY.mid}` },
  { d: `M320,${rowY.bottom} C420,${rowY.bottom} 420,374 489,374` },
  { d: `M880,${rowY.top} C780,${rowY.top} 780,246 711,246` },
  { d: `M880,${rowY.mid} C804,${rowY.mid} 804,${rowY.mid} 728,${rowY.mid}` },
  { d: `M880,${rowY.bottom} C780,${rowY.bottom} 780,374 711,374` },
];

/** Solid accent color for connector lines + center ring */
const ACCENT = "#6BAB44";

export default function SmartStrategiesSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid" />

      {/* Header */}
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <p className="text-[0.85rem] font-medium tracking-wide text-secondary sm:text-sm">
          From Digital Marketing and Web Development
        </p>
        <h2
          className="mt-2 font-black text-balance text-2xl font-semibold  leading-tight sm:text-3xl md:text-4xl"
          
        >
          Smart Strategies For Business Expansion
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-foreground/85 sm:text-base">
          A stunning website gets attention. Our result-driven digital
          marketing turns into traffic, leads, and loyal customers.
        </p>
      </div>

      {/* Desktop hub-and-spoke diagram */}
      <div className="relative mx-auto mt-14 hidden max-w-6xl px-4 lg:block">
        <div
          className="relative w-full"
          style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            preserveAspectRatio="none"
            fill="none"
          >
            {connectors.map((c, i) => (
              <path
                key={i}
                d={c.d}
                stroke={ACCENT}
                strokeWidth={2}
                strokeDasharray="6 6"
                strokeLinecap="round"
                opacity={0.7}
              />
            ))}
          </svg>

          {/* Center circle — image only, no text, no icon */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: "50%",
              top: "50%",
              width: `${(256 / CANVAS_W) * 100}%`,
              height: `${(256 / CANVAS_H) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full shadow-glow ring-8 ring-background"
              style={{ backgroundColor: ACCENT }}
            >
              <img
                src="/images/micro.png"
                alt="Digital Solutions"
                className="h-[70%] w-[70%] object-contain"
              />
            </div>
          </div>

          {/* Left cards */}
          {leftFeatures.map((f, i) => {
            const y = i === 0 ? rowY.top : i === 1 ? rowY.mid : rowY.bottom;
            return (
              <div
                key={f.title}
                className="absolute"
                style={{
                  left: 0,
                  width: `${(300 / CANVAS_W) * 100}%`,
                  top: `${(y / CANVAS_H) * 100}%`,
                  transform: "translateY(-50%)",
                }}
              >
                <FeatureCard feature={f} align="left" />
              </div>
            );
          })}

          {/* Right cards */}
          {rightFeatures.map((f, i) => {
            const y = i === 0 ? rowY.top : i === 1 ? rowY.mid : rowY.bottom;
            return (
              <div
                key={f.title}
                className="absolute"
                style={{
                  right: 0,
                  width: `${(300 / CANVAS_W) * 100}%`,
                  top: `${(y / CANVAS_H) * 100}%`,
                  transform: "translateY(-50%)",
                }}
              >
                <FeatureCard feature={f} align="right" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile / tablet stacked version */}
      <div className="relative mx-auto mt-10 max-w-md space-y-4 px-4 lg:hidden">
        <div
          className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full shadow-glow"
          style={{ backgroundColor: ACCENT }}
        >
          <img
            src="/images/micro.png"
            alt="Digital Solutions"
            className="h-[70%] w-[70%] object-contain"
          />
        </div>

        {[...leftFeatures, ...rightFeatures].map((f) => (
          <FeatureCard key={f.title} feature={f} align="left" />
        ))}
      </div>

      {/* Bottom stats bar */}
      <div className="relative mx-auto mt-14 max-w-4xl px-4">
        <div className="flex flex-col divide-y divide-border rounded-3xl border border-border bg-card shadow-premium-lg sm:flex-row sm:divide-x sm:divide-y-0">
          {stats.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-1 items-center justify-center gap-2 px-6 py-4"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{ backgroundColor: color }}
              >
                <Icon className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-[0.9rem] font-medium text-primary">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}