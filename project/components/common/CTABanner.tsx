// import Link from 'next/link';
// import { ArrowRight, PhoneCall } from 'lucide-react';
// import { Reveal } from '@/components/common/Reveal';
// import { siteConfig } from '@/lib/site-data';

// export default function CTABanner({
//   title = 'Ready to Grow Your Business?',
//   description = 'Get a free, no-obligation proposal tailored to your goals. Our team will audit your current presence and build a roadmap to measurable growth.',
//   buttonText = 'Get Free Proposal',
//   secondaryText = 'Talk to an Expert',
// }: {
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   secondaryText?: string;
// }) {
//   return (
//     <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
//       <div className="absolute inset-0 bg-grid-dark opacity-30" />
//       <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
//       <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />

//       <div className="container relative mx-auto px-4">
//         <Reveal className="mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
//             {title}
//           </h2>
//           <p className="mx-auto mt-6 max-w-2xl text-lg text-sky/80">
//             {description}
//           </p>
//           <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <Link
//               href="/contact"
//               className="group inline-flex items-center gap-2 bg-ocean px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark"
//             >
//               {buttonText}
//               <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Link>
//             <a
//               href={`tel:${siteConfig.phone}`}
//               className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
//             >
//               <PhoneCall className="h-5 w-5" />
//               {secondaryText}
//             </a>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Reveal } from '@/components/common/Reveal';
import { siteConfig } from '@/lib/site-data';

export default function CTABanner({
  title = 'Ready to Grow Your Business?',
  description = 'Get a free, no-obligation proposal tailored to your goals. Our team will audit your current presence and build a roadmap to measurable growth.',
  buttonText = 'Get Free Proposal',
  secondaryText = 'Talk to an Expert',
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  secondaryText?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand py-24 lg:py-32">
      {/* ── Premium Background: Sharp Box Grid + Mesh Glow ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Sharp CSS Grid (Subtle white lines) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] [background-size:48px_48px] opacity-40" />
        
        {/* Ocean Glow (Top Left) */}
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-ocean/30 blur-[120px]" />
        {/* Leaf Glow (Bottom Right) */}
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-leaf/20 blur-[120px]" />
      </div>

      {/* Top & Bottom Sharp Accent Lines (Frames the section beautifully) */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-ocean via-electric to-leaf"></div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-ocean via-electric to-leaf"></div>

      <div className="container relative z-10 mx-auto px-4">
        <Reveal className="mx-auto max-w-4xl text-center">
          
          {/* Small Accent Block */}
          <div className="mx-auto mb-6 h-1 w-12 bg-electric" />

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>

          {/* Sharp CTAs */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            {/* Primary Button - Slide-up fill effect */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-white px-8 py-4 text-base font-extrabold text-brand shadow-[0_10px_30px_-5px_rgba(0,0,0,0.4)] transition-all hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.5)]"
            >
              {/* Slide-up ocean fill on hover */}
              <span className="absolute inset-0 -translate-y-full bg-ocean transition-transform duration-300 group-hover:translate-y-0"></span>
              <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                {buttonText}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            
            {/* Secondary Button - Glassmorphism with sharp icon box */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="group inline-flex items-center justify-center gap-3 border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center bg-white/10 transition-colors duration-300 group-hover:bg-leaf group-hover:text-brand">
                <PhoneCall className="h-3.5 w-3.5" />
              </span>
              {secondaryText}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}