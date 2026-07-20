// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import {
//   ArrowRight,
//   Play,
//   Star,
//   TrendingUp,
//   Award,
//   CheckCircle2,
// } from 'lucide-react';
// import Counter from '@/components/common/Counter';
// import { heroStats } from '@/lib/site-data';

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white pt-36 pb-20 lg:pt-44 lg:pb-32">
//       {/* Subtle grid */}
//       <div className="absolute inset-0 bg-grid opacity-60" />
//       {/* Ocean top-left glow */}
//       <div className="absolute -left-32 -top-20 h-[500px] w-[500px] rounded-full bg-ocean/8 blur-3xl" />
//       {/* Green bottom-right glow */}
//       <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-leaf/8 blur-3xl" />

//       {/* Left accent border */}
//       <div className="absolute left-0 top-0 h-full w-1 bg-ocean" />

//       <div className="container relative mx-auto px-4">
//         <div className="grid items-center gap-14 lg:grid-cols-2">
//           {/* ── Left content ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           >
//             {/* Badge */}
//             <div className="mb-6 inline-flex items-center gap-2 border border-leaf/30 bg-leaf/8 px-4 py-2 text-sm font-semibold text-leaf">
//               <span className="flex h-2 w-2 rounded-full bg-leaf" />
//               Trusted by 500+ brands worldwide
//             </div>

//             <h1 className="text-4xl font-bold leading-[1.1] text-brand sm:text-5xl lg:text-6xl xl:text-[68px]">
//               Digital Marketing
//               <br />
//               <span className="text-ocean">That Drives</span>{' '}
//               <span className="relative inline-block">
//                 <span className="text-ocean-gradient">Measurable Growth</span>
//                 {/* underline accent */}
//                 <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-leaf" />
//               </span>
//             </h1>

//             <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
//               We are a full-service digital marketing agency helping enterprise
//               brands scale with SEO, PPC, web development, and content strategies
//               that deliver compounding ROI — not vanity metrics.
//             </p>

//             {/* Trust points */}
//             <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
//               {['Google Premier Partner', 'Meta Business Partner', '98% Retention Rate'].map((pt) => (
//                 <span key={pt} className="flex items-center gap-2 text-sm font-medium text-brand">
//                   <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-leaf" />
//                   {pt}
//                 </span>
//               ))}
//             </div>

//             {/* CTAs — sharp corners */}
//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center justify-center gap-2 bg-brand px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:bg-ocean-dark"
//               >
//                 Get Free Proposal
//                 <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </Link>
//               <Link
//                 href="/our-work/case-studies"
//                 className="group inline-flex items-center justify-center gap-2 border-2 border-brand bg-white px-8 py-4 text-base font-bold text-brand transition-all hover:border-ocean hover:text-ocean"
//               >
//                 <Play className="h-5 w-5" />
//                 View Case Studies
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
//               {heroStats.map((stat, i) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
//                 >
//                   <div className="text-3xl font-bold text-brand">
//                     <Counter value={stat.value} suffix={stat.suffix} />
//                   </div>
//                   <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* ── Right visual ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative aspect-[4/4.2]">
//               {/* Ocean border accent */}
//               <div className="absolute -left-3 -top-3 h-full w-full border-2 border-ocean/20" />

//               {/* Main image — sharp corners */}
//               <div className="absolute inset-0 overflow-hidden border border-border shadow-premium-lg">
//                 <Image
//                   src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=840&fit=crop"
//                   alt="Digital marketing team at work"
//                   fill
//                   priority
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />
//                 {/* Light overlay — keep faces visible */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" />
//               </div>

//               {/* Floating card 1 — Organic Growth */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//                 className="absolute -left-8 top-10 border-l-4 border-leaf bg-white p-4 shadow-premium-lg"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center bg-leaf/10">
//                     <TrendingUp className="h-5 w-5 text-leaf" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-muted-foreground">Organic Growth</p>
//                     <p className="text-lg font-bold text-brand">+340%</p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Floating card 2 — Rating */}
//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//                 className="absolute -right-6 top-1/3 border-l-4 border-ocean bg-white p-4 shadow-premium-lg"
//               >
//                 <div className="flex items-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="mt-1 text-xs text-muted-foreground">Client Rating</p>
//                 <p className="text-lg font-bold text-brand">4.9 / 5.0</p>
//               </motion.div>

//               {/* Floating card 3 — Awards */}
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//                 className="absolute -bottom-6 left-1/4 border-l-4 border-ocean bg-white p-4 shadow-premium-lg"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center bg-ocean/10">
//                     <Award className="h-5 w-5 text-ocean" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-muted-foreground">Awards Won</p>
//                     <p className="text-lg font-bold text-brand">15+</p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Green corner accent */}
//               <div className="absolute -right-3 bottom-12 h-16 w-1 bg-leaf" />
//             </div>
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
import {
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import Counter from '@/components/common/Counter';
import { heroStats } from '@/lib/site-data';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* ── Premium Background: Sharp Box Grid + Mesh Glow ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Sharp Box Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.7]" />
        
        {/* Ocean Glow (Top Left) */}
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-ocean/20 blur-[120px]" />
        {/* Leaf Glow (Bottom Right) */}
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-leaf/20 blur-[120px]" />
        
        {/* Left Accent Border */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-ocean via-electric to-leaf" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          
          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Premium Pill Badge (Kept rounded for contrast) */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-leaf/30 bg-leaf/5 py-2 pl-2 pr-4 text-sm font-semibold text-leaf shadow-sm backdrop-blur-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-leaf/10">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              Trusted by 500+ brands worldwide
            </div>

            {/* Massive Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-brand sm:text-5xl lg:text-6xl xl:text-[72px]">
              Digital Marketing
              <br />
              That Drives{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-ocean via-electric to-leaf bg-clip-text text-transparent">
                  Measurable Growth
                </span>
                {/* Sharp Block Underline */}
                <span className="absolute -bottom-2 left-0 h-[6px] w-full bg-leaf" />
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
              We are a full-service digital marketing agency helping enterprise
              brands scale with SEO, PPC, web development, and content strategies
              that deliver compounding ROI — not vanity metrics.
            </p>

            {/* Trust Points */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6 justify-center lg:justify-start">
              {['Google Premier Partner', 'Meta Business Partner', '98% Retention Rate'].map((pt) => (
                <span key={pt} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-leaf" />
                  {pt}
                </span>
              ))}
            </div>

            {/* Sharp CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-brand px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)]"
              >
                {/* Slide-up fill effect on hover */}
                <span className="absolute inset-0 -translate-y-full bg-ocean transition-transform duration-300 group-hover:translate-y-0"></span>
                <span className="relative flex items-center gap-2">
                  Get Free Proposal
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link
                href="/our-work/case-studies"
                className="group inline-flex items-center justify-center gap-2.5 border-2 border-brand bg-white px-8 py-4 text-base font-bold text-brand transition-all hover:bg-slate-50"
              >
                <span className="flex h-7 w-7 rounded-full items-center justify-center bg-brand/5 transition-colors group-hover:bg-ocean group-hover:text-white">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                View Case Studies
              </Link>
            </div>

            {/* Stats Section */}
            <div className="mt-14 grid grid-cols-2 gap-8 border-t-2 border-slate-200 pt-8 sm:grid-cols-4">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl font-extrabold tracking-tight text-brand lg:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[4/4.5]">
              
              {/* Main Image Container - Sharp Corners & Deep Shadow */}
              <div className="absolute inset-0 overflow-hidden  ">
                <Image
                  // src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop"
                  src="/hero/marketing3.png"
                  alt="Digital marketing team at work"
                  fill
                  priority
                  className="object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Cinematic blend overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-brand/30 via-transparent to-transparent" /> */}
              </div>

              {/* Floating Glassmorphic Card 1 — Organic Growth (Top Left) */}
              {/* Made sharp (rounded-none) to match the brutalist aesthetic */}
              {/* <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 top-12 border-l-4 border-leaf bg-white/90 p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center bg-leaf/15">
                    <TrendingUp className="h-6 w-6 text-leaf" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500">Organic Growth</p>
                    <p className="text-xl font-extrabold text-brand">+340%</p>
                  </div>
                </div>
              </motion.div> */}

              {/* Floating Glassmorphic Card 2 — Rating (Right Middle) */}
              {/* <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 top-1/3 border-l-4 border-ocean bg-white/90 p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:-right-8"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-medium text-slate-500">Client Rating</p>
                <p className="text-xl font-extrabold text-brand">4.9 / 5.0</p>
              </motion.div> */}

              {/* Floating Glassmorphic Card 3 — Awards (Bottom Left) */}
              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 left-1/4 border-l-4 border-electric bg-white/90 p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center bg-ocean/15">
                    <Award className="h-6 w-6 text-ocean" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500">Awards Won</p>
                    <p className="text-xl font-extrabold text-brand">15+</p>
                  </div>
                </div>
              </motion.div> */}

              {/* Abstract Geometric Accents */}
              <div className="absolute -bottom-10 -right-6 -z-10 h-32 w-32 border-2 border-dashed border-leaf/40" />
              <div className="absolute -top-6 -right-6 -z-10 h-16 w-16 bg-ocean/15" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}