import {
  Code2,
  Search,
  Target,
  Megaphone,
  Share2,
  PenTool,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';

/** Blue -> mint -> green (sab sections me yahi gradient use ho raha hai) */
const GRADIENT =
  'linear-gradient(135deg, #2b8be0 0%, #6fdc9f 50%, #1fc46a 100%)';

const services = [
  {
    title: 'Web Development',
    description:
      'Fast, responsive and conversion-focused websites built to turn visitors into customers.',
    icon: Code2,
    points: ['Custom website design', 'E-commerce & CMS', 'Speed & performance'],
  },
  {
    title: 'SEO',
    description:
      'Rank higher on Google and bring in steady organic traffic that keeps growing every month.',
    icon: Search,
    points: ['Keyword & competitor research', 'On-page & technical SEO', 'Link building'],
  },
  {
    title: 'Paid Marketing',
    description:
      'High-ROI ad campaigns across Google and social platforms, tracked down to every rupee.',
    icon: Target,
    points: ['Google & Meta Ads', 'Retargeting funnels', 'Budget optimization'],
  },
  {
    title: 'Digital Marketing',
    description:
      'Complete data-driven digital strategy that connects every channel to measurable growth.',
    icon: Megaphone,
    points: ['Multi-channel strategy', 'Email & lead nurturing', 'Analytics & reporting'],
  },
  {
    title: 'Social Media Marketing',
    description:
      'Grow your audience, build community and keep your brand active where your customers are.',
    icon: Share2,
    points: ['Content calendar & posting', 'Community management', 'Influencer outreach'],
  },
  {
    title: 'Content Marketing',
    description:
      'Stories, blogs and creatives that build trust, educate buyers and drive them to act.',
    icon: PenTool,
    points: ['Blogs & articles', 'Video & creative assets', 'Brand storytelling'],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p
            style={{ backgroundImage: GRADIENT }}
            className="mb-3 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent"
          >
            Our Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to Grow Online
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From your website to your ads, we handle every part of your digital
            growth under one roof.
          </p>
        </Reveal>

        {/* Cards */}
        <Stagger
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          stagger={0.08}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_-12px_rgba(15,28,76,0.15)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_28px_50px_-18px_rgba(15,28,76,0.45)]">
                  {/* Top accent bar — gradient, slides in on hover */}
                  <span
                    style={{ backgroundImage: GRADIENT }}
                    className="absolute left-0 top-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full"
                  />

                  {/* Soft gradient glow in corner on hover */}
                  <span
                    style={{ backgroundImage: GRADIENT }}
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  />

                  <div className="relative z-10 flex flex-1 flex-col">
                    {/* Icon — turns gradient on hover */}
                    <div className="relative mb-6 h-16 w-16">
                      <div className="absolute inset-0 rounded-2xl bg-slate-100 transition-opacity duration-500 group-hover:opacity-0" />
                      <div
                        style={{ backgroundImage: GRADIENT }}
                        className="absolute inset-0 rounded-2xl opacity-0 shadow-lg shadow-[#2b8be0]/30 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                      />
                      <div className="relative flex h-full w-full items-center justify-center">
                        <Icon
                          strokeWidth={1.75}
                          className="h-8 w-8 text-[#2b8be0] transition-colors duration-500 group-hover:text-white"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-900">
                      {service.description}
                    </p>

                    {/* Points */}
                    <ul className="mt-5 space-y-2.5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 text-sm text-slate-700"
                        >
                          <span
                            style={{ backgroundImage: GRADIENT }}
                            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          >
                            <Check className="h-3 w-3 text-white" strokeWidth={3} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Gradient button (abhi koi link nahi) */}
                    <div className="mt-auto border-t border-slate-100 pt-8">
                      <button
                        type="button"
                        style={{ backgroundImage: GRADIENT }}
                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#2b8be0]/25 [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1fc46a]/40 hover:brightness-105 active:translate-y-0 sm:w-fit"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
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