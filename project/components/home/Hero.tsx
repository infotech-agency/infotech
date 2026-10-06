

// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Sparkles,
//   User,
//   Mail,
//   Phone,
//   Building2,
//   MessageSquare,
//   ShieldCheck,
//   Clock,
// } from 'lucide-react';
// import Counter from '@/components/common/Counter';
// import { heroStats } from '@/lib/site-data';

// const processSteps = [
//   { n: '01', label: 'You submit the form' },
//   { n: '02', label: 'We audit your current growth' },
//   { n: '03', label: 'You get a free strategy call' },
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
//       {/* ── Premium Background: Sharp Box Grid + Mesh Glow ── */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:48px_48px]" />
//         <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-ocean/10 blur-[100px]" />
//         <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-leaf/10 blur-[100px]" />
//         <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-ocean via-electric to-leaf" />
//       </div>

//       <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
//         <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">

//           {/* ── Left Content ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="text-center lg:text-left"
//           >
          
            

//             {/* Massive Headline */}
//             <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-brand sm:text-4xl lg:text-[42px] xl:text-5xl">
//               Digital Marketing
//               <br />
//               That Drives{' '}
//               <span className="relative inline-block">
//                 <span className="bg-gradient-to-r from-ocean via-electric to-leaf bg-clip-text text-transparent">
//                   Measurable Growth
//                 </span>
//                 <span className="absolute -bottom-1.5 left-0 h-[4px] w-full bg-leaf" />
//               </span>
//             </h1>

//             <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-slate-600 lg:mx-0">
//               We are a full-service digital marketing agency helping enterprise
//               brands scale with SEO, PPC, web development, and content strategies
//               that deliver compounding ROI — not vanity metrics.
//             </p>

//             {/* Trust Points */}
//             <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6 justify-center lg:justify-start">
//               {['Google Premier Partner', 'Meta Business Partner', '98% Retention Rate'].map((pt) => (
//                 <span key={pt} className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                   <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-leaf" />
//                   {pt}
//                 </span>
//               ))}
//             </div>

//             {/* Sharp CTA */}
//             <div className="mt-10 flex justify-center lg:justify-start">
//               <Link
//                 href="/our-work/case-studies"
//                 className="group inline-flex items-center justify-center gap-2.5 border-2 border-brand bg-white px-8 py-4 text-base font-bold text-brand transition-all hover:bg-slate-50"
//               >
//                 View Case Studies
//                 <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>

//             {/* Stats Section */}
//             <div className="mt-14 grid grid-cols-2 gap-8 border-t-2 border-slate-200 pt-8 sm:grid-cols-4">
//               {heroStats.map((stat, i) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
//                   className="text-center lg:text-left"
//                 >
//                   <div className="text-3xl font-extrabold tracking-tight text-brand lg:text-4xl">
//                     <Counter value={stat.value} suffix={stat.suffix} />
//                   </div>
//                   <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* ── Right: Enquiry Form ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//             className="relative mx-auto w-full max-w-md lg:max-w-none"
//           >
//             {/* Signature accent block behind the card */}
//             <div className="absolute -right-3 -top-3 -z-10 h-full w-full border-2 border-brand/15" />

//             <div className="relative overflow-hidden border-t-4 border-leaf bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)]">
//               {/* Header strip */}
//               <div className="bg-brand px-8 py-6">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">
//                   Free Growth Audit
//                 </p>
//                 <h3 className="mt-1.5 text-xl font-extrabold text-white sm:text-2xl">
//                   Get Your Free Marketing Proposal
//                 </h3>
//                 <p className="mt-2 text-sm leading-relaxed text-white/70">
//                   Tell us about your business — a strategist replies within 24 hours.
//                 </p>
//               </div>

//               {/* Form */}
//               <form className="space-y-5 px-8 py-8">
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div className="relative">
//                     <User className="pointer-events-none absolute left-0 top-3 h-4 w-4 text-slate-400" />
//                     <input
//                       type="text"
//                       placeholder="Full name"
//                       className="w-full border-b-2 border-slate-200 bg-transparent py-2.5 pl-6 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-leaf"
//                     />
//                   </div>
//                   <div className="relative">
//                     <Building2 className="pointer-events-none absolute left-0 top-3 h-4 w-4 text-slate-400" />
//                     <input
//                       type="text"
//                       placeholder="Company name"
//                       className="w-full border-b-2 border-slate-200 bg-transparent py-2.5 pl-6 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-leaf"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div className="relative">
//                     <Mail className="pointer-events-none absolute left-0 top-3 h-4 w-4 text-slate-400" />
//                     <input
//                       type="email"
//                       placeholder="Work email"
//                       className="w-full border-b-2 border-slate-200 bg-transparent py-2.5 pl-6 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-leaf"
//                     />
//                   </div>
//                   <div className="relative">
//                     <Phone className="pointer-events-none absolute left-0 top-3 h-4 w-4 text-slate-400" />
//                     <input
//                       type="tel"
//                       placeholder="Phone number"
//                       className="w-full border-b-2 border-slate-200 bg-transparent py-2.5 pl-6 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-leaf"
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <select
//                     defaultValue=""
//                     className="w-full appearance-none border-b-2 border-slate-200 bg-transparent py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-leaf"
//                   >
//                     <option value="" disabled>
//                       Service you're interested in
//                     </option>
//                     <option>SEO</option>
//                     <option>Paid Ads (PPC)</option>
//                     <option>Web Development</option>
//                     <option>Content Strategy</option>
//                     <option>Full-Service Marketing</option>
//                   </select>
//                   <span className="pointer-events-none absolute right-0 top-3 text-slate-400">▾</span>
//                 </div>

//                 <div className="relative">
//                   <MessageSquare className="pointer-events-none absolute left-0 top-3 h-4 w-4 text-slate-400" />
//                   <textarea
//                     rows={3}
//                     placeholder="Tell us about your goals"
//                     className="w-full resize-none border-b-2 border-slate-200 bg-transparent py-2.5 pl-6 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-leaf"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden bg-brand px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)]"
//                 >
//                   <span className="absolute inset-0 -translate-y-full bg-ocean transition-transform duration-300 group-hover:translate-y-0" />
//                   <span className="relative flex items-center gap-2">
//                     Get Free Proposal
//                     <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//                   </span>
//                 </button>

//                 <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
//                   <ShieldCheck className="h-3.5 w-3.5" />
//                   No spam. No obligation. 100% confidential.
//                 </p>
//               </form>

//               {/* What happens next — process strip */}
//               <div className="grid grid-cols-3 divide-x-2 divide-slate-100 border-t-2 border-slate-100 bg-slate-50/60">
//                 {processSteps.map((step) => (
//                   <div key={step.n} className="flex flex-col items-center gap-1 px-2 py-4 text-center">
//                     <span className="text-lg font-extrabold text-leaf">{step.n}</span>
//                     <span className="text-[11px] font-medium leading-tight text-slate-500">
//                       {step.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Floating response-time badge */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//               className="absolute -bottom-5 -left-5 hidden items-center gap-2.5 border-2 border-slate-100 bg-white px-4 py-3 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.2)] sm:flex"
//             >
//               <span className="flex h-9 w-9 items-center justify-center bg-electric/10">
//                 <Clock className="h-4.5 w-4.5 text-electric" />
//               </span>
//               <div>
//                 <p className="text-xs font-medium text-slate-500">Avg. Reply Time</p>
//                 <p className="text-sm font-extrabold text-brand">Under 24 Hrs</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * FIX: Tailwind doesn't see dynamically constructed classes (like `${tile.pos}`).
 * By adding this comment block, Tailwind's JIT compiler will "see" these exact strings
 * and generate the necessary CSS for them. DO NOT DELETE THIS COMMENT.
 * 
 * left-[6%] top-[10%] lg:left-[9%] lg:top-[14%]
 * right-[5%] top-[10%] lg:right-[8%] lg:top-[14%]
 * left-[8%] bottom-[8%] lg:left-[14%] lg:bottom-[14%]
 * right-[8%] bottom-[10%] lg:right-[20%] lg:bottom-[16%]
 */
const floatingTiles = [
  {
    src: '/icons/figma.png',
    alt: 'Design icon',
    pos: 'left-[6%] top-[10%] lg:left-[9%] lg:top-[14%]',
    rotate: -12,
    delay: 0,
  },
  {
    src: '/icons/hashtag.png',
    alt: 'Analytics icon',
    pos: 'right-[5%] top-[10%] lg:right-[8%] lg:top-[14%]',
    rotate: 12,
    delay: 0.8,
  },
  {
    src: '/icons/insta.png',
    alt: 'Photo icon',
    pos: 'left-[8%] bottom-[8%] lg:left-[14%] lg:bottom-[14%]',
    rotate: 12,
    delay: 1.6,
  },
  {
    src: '/icons/megaphone.png',
    alt: 'Voice icon',
    pos: 'right-[8%] bottom-[10%] lg:right-[20%] lg:bottom-[16%]',
    rotate: -12,
    delay: 2.4,
  },
];

export default function Hero() {
  return (
    // HEIGHT REDUCED HERE
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-28 lg:pb-20 mt-8">
      {/* Soft green glow, top-left corner only (no grid) */}
      <div className="pointer-events-none absolute -left-24 -top-24 z-0 h-[260px] w-[260px] rounded-full bg-[#21D979]/25 blur-[90px]" />

      {/* Floating image tiles */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        {floatingTiles.map((tile) => (
          <motion.div
            key={tile.src}
            className={`absolute ${tile.pos}`}
            style={{ rotate: tile.rotate }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: tile.delay,
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20 lg:h-24 lg:w-24">
              <Image
                src={tile.src}
                alt={tile.alt}
                width={80}
                height={80}
                className="h-12 w-12 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered content */}
      <div className="container relative z-20 mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Eyebrow with gradient lines */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#4FB3E8] to-[#21D979]" />
            <span className="bg-gradient-to-r from-[#3AA6E0] via-[#22BFA6] to-[#1FC96F] bg-clip-text text-xs font-semibold uppercase tracking-[0.18em] text-transparent sm:text-sm">
              Growth Driven Marketing
            </span>
            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#21D979] to-[#4FB3E8]" />
          </div>

          {/* Headline */}
          <h1 className="mt-5 text-3xl font-normal leading-[1.1] tracking-tight text-[#111] sm:text-3xl lg:text-4xl xl:text-7xl">
            Digital Marketing
            <br />
            That Drives
            <span className="mt-1 block bg-gradient-to-r from-[#3AA6E0] via-[#22BFA6] to-[#1FC96F] bg-clip-text pb-2 font-serif text-3xl italic text-transparent sm:text-4xl lg:text-6xl xl:text-6xl">
              Measurable Growth
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            SEO, PPC, web development, and content strategies that deliver
            compounding ROI, not vanity metrics.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#111] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-black/80"
            >
              Get Free Proposal
            </Link>
            <Link
              href="/our-work/case-studies"
              className="group inline-flex items-center gap-2 text-base font-bold text-black"
            >
              View Case Studies
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ➔
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}