
// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';

// /**
//  * Holi-style color splashes — sab kuch same blue → mint → green palette me.
//  * Inline styles use kiye hain taaki Tailwind purge ka koi issue na aaye.
//  */
// const blobs: {
//   color: string;
//   size: number;
//   top?: string;
//   bottom?: string;
//   left?: string;
//   right?: string;
//   opacity: number;
//   dx: number;
//   dy: number;
//   dur: number;
// }[] = [
//   // top-left (green)
//   { color: '#21D979', size: 380, top: '-10%', left: '-8%', opacity: 0.35, dx: 30, dy: 20, dur: 14 },
//   // top-right (blue)
//   { color: '#3AA6E0', size: 420, top: '-12%', right: '-8%', opacity: 0.32, dx: -30, dy: 25, dur: 16 },
//   // bottom-left (mint)
//   { color: '#6fdc9f', size: 360, bottom: '-14%', left: '2%', opacity: 0.4, dx: 25, dy: -25, dur: 15 },
//   // bottom-right (blue-green)
//   { color: '#22BFA6', size: 400, bottom: '-16%', right: '-4%', opacity: 0.33, dx: -25, dy: -20, dur: 18 },
//   // center faint wash
//   { color: '#4FB3E8', size: 300, top: '30%', left: '38%', opacity: 0.14, dx: 20, dy: 15, dur: 20 },
// ];

// /** Chhote "gulaal" dots jo halka sa float karte hain */
// const particles = [
//   { size: 14, top: '18%', left: '14%', color: '#21D979', delay: 0 },
//   { size: 10, top: '28%', left: '6%', color: '#3AA6E0', delay: 0.6 },
//   { size: 20, top: '62%', left: '10%', color: '#6fdc9f', delay: 1.2 },
//   { size: 12, top: '78%', left: '22%', color: '#22BFA6', delay: 1.8 },
//   { size: 16, top: '16%', left: '84%', color: '#3AA6E0', delay: 0.3 },
//   { size: 10, top: '34%', left: '92%', color: '#21D979', delay: 0.9 },
//   { size: 22, top: '66%', left: '88%', color: '#22BFA6', delay: 1.5 },
//   { size: 12, top: '82%', left: '76%', color: '#6fdc9f', delay: 2.1 },
//   { size: 8, top: '10%', left: '48%', color: '#21D979', delay: 0.4 },
//   { size: 8, top: '90%', left: '50%', color: '#3AA6E0', delay: 1.1 },
// ];

// export default function Hero() {
//   return (
//     // HEIGHT REDUCED HERE
//     <section className="relative mt-8 overflow-hidden bg-white pt-20 pb-16 lg:pt-28 lg:pb-20">
//       {/* ===== Holi color splashes ===== */}
//       <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
//         {blobs.map((b, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full blur-[90px]"
//             style={{
//               width: b.size,
//               height: b.size,
//               background: b.color,
//               opacity: b.opacity,
//               top: b.top,
//               bottom: b.bottom,
//               left: b.left,
//               right: b.right,
//             }}
//             animate={{
//               x: [0, b.dx, 0],
//               y: [0, b.dy, 0],
//               scale: [1, 1.12, 1],
//             }}
//             transition={{
//               duration: b.dur,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//           />
//         ))}

//         {/* subtle dotted texture, center me fade hota hai */}
//         <div
//           className="absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage:
//               'radial-gradient(circle, rgba(34,191,166,0.35) 1px, transparent 1.5px)',
//             backgroundSize: '26px 26px',
//             WebkitMaskImage:
//               'radial-gradient(ellipse at center, transparent 30%, #000 85%)',
//             maskImage:
//               'radial-gradient(ellipse at center, transparent 30%, #000 85%)',
//           }}
//         />
//       </div>

//       {/* ===== Floating color dots ===== */}
//       <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
//         {particles.map((p, i) => (
//           <motion.span
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: p.size,
//               height: p.size,
//               top: p.top,
//               left: p.left,
//               background: p.color,
//               opacity: 0.55,
//               boxShadow: `0 0 18px ${p.color}`,
//             }}
//             animate={{ y: [0, -14, 0], scale: [1, 1.15, 1] }}
//             transition={{
//               duration: 5 + (i % 3),
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: p.delay,
//             }}
//           />
//         ))}
//       </div>

//       {/* Centered content */}
//       <div className="container relative z-20 mx-auto px-6 sm:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="mx-auto flex max-w-3xl flex-col items-center text-center"
//         >
//           {/* Eyebrow with gradient lines */}
//           <div className="flex items-center gap-3">
//             <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#4FB3E8] to-[#21D979]" />
//             <span className="bg-gradient-to-r from-[#3AA6E0] via-[#22BFA6] to-[#1FC96F] bg-clip-text text-xs font-semibold uppercase tracking-[0.18em] text-transparent sm:text-sm">
//               Growth Driven Marketing
//             </span>
//             <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#21D979] to-[#4FB3E8]" />
//           </div>

//           {/* Headline */}
//           <h1 className="mt-5 text-3xl font-normal leading-[1.1] tracking-tight text-[#111] sm:text-3xl lg:text-4xl xl:text-7xl">
//             Digital Marketing
//             <br />
//             That Drives
//             <span className="mt-1 block bg-gradient-to-r from-[#3AA6E0] via-[#22BFA6] to-[#1FC96F] bg-clip-text pb-2 font-serif text-3xl italic text-transparent sm:text-4xl lg:text-6xl xl:text-6xl">
//               Measurable Growth
//             </span>
//           </h1>

//           <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
//             SEO, PPC, web development, and content strategies that deliver
//             compounding ROI, not vanity metrics.
//           </p>

//           {/* CTAs */}
//           <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-lg bg-[#111] px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-[#22BFA6]/20 transition-all hover:-translate-y-0.5 hover:bg-black/80"
//             >
//               Get Free Proposal
//             </Link>
//             <Link
//               href="/our-work/case-studies"
//               className="group inline-flex items-center gap-2 text-base font-bold text-black"
//             >
//               View Case Studies
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 ➔
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Typing effect ke phrases — har phrase ka apna alag gradient.
 * (Chhote rakhna, taaki mobile pe 2 lines me wrap na ho.)
 */
const phrases = [
  {
    text: 'Measurable Growth',
    gradient: 'linear-gradient(90deg, #3AA6E0, #22BFA6, #1FC96F)', // blue → teal → green
  },
  {
    text: 'Higher Rankings',
    gradient: 'linear-gradient(90deg, #21D979, #0f9d58, #0b8a6b)', // green → emerald
  },
  {
    text: 'More Qualified Leads',
    gradient: 'linear-gradient(90deg, #2b8be0, #6366f1, #8b5cf6)', // blue → violet
  },
  {
    text: 'Real Business ROI',
    gradient: 'linear-gradient(90deg, #06b6d4, #3AA6E0, #2b8be0)', // cyan → blue
  },
  {
    text: 'Brand Authority',
    gradient: 'linear-gradient(90deg, #14b8a6, #38bdf8, #6fdc9f)', // teal → sky → mint
  },
];

const TYPE_SPEED = 80; // ms per letter
const DELETE_SPEED = 40; // ms per letter
const HOLD_TIME = 1800; // full text ruka rahe
const GAP_TIME = 300; // delete ke baad chhota pause

/**
 * Holi-style color splashes — sab kuch same blue → mint → green palette me.
 * Inline styles use kiye hain taaki Tailwind purge ka koi issue na aaye.
 */
const blobs: {
  color: string;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity: number;
  dx: number;
  dy: number;
  dur: number;
}[] = [
  // top-left (green)
  { color: '#21D979', size: 380, top: '-10%', left: '-8%', opacity: 0.35, dx: 30, dy: 20, dur: 14 },
  // top-right (blue)
  { color: '#3AA6E0', size: 420, top: '-12%', right: '-8%', opacity: 0.32, dx: -30, dy: 25, dur: 16 },
  // bottom-left (mint)
  { color: '#6fdc9f', size: 360, bottom: '-14%', left: '2%', opacity: 0.4, dx: 25, dy: -25, dur: 15 },
  // bottom-right (blue-green)
  { color: '#22BFA6', size: 400, bottom: '-16%', right: '-4%', opacity: 0.33, dx: -25, dy: -20, dur: 18 },
  // center faint wash
  { color: '#4FB3E8', size: 300, top: '30%', left: '38%', opacity: 0.14, dx: 20, dy: 15, dur: 20 },
];

/** Chhote "gulaal" dots jo halka sa float karte hain */
const particles = [
  { size: 14, top: '18%', left: '14%', color: '#21D979', delay: 0 },
  { size: 10, top: '28%', left: '6%', color: '#3AA6E0', delay: 0.6 },
  { size: 20, top: '62%', left: '10%', color: '#6fdc9f', delay: 1.2 },
  { size: 12, top: '78%', left: '22%', color: '#22BFA6', delay: 1.8 },
  { size: 16, top: '16%', left: '84%', color: '#3AA6E0', delay: 0.3 },
  { size: 10, top: '34%', left: '92%', color: '#21D979', delay: 0.9 },
  { size: 22, top: '66%', left: '88%', color: '#22BFA6', delay: 1.5 },
  { size: 12, top: '82%', left: '76%', color: '#6fdc9f', delay: 2.1 },
  { size: 8, top: '10%', left: '48%', color: '#21D979', delay: 0.4 },
  { size: 8, top: '90%', left: '50%', color: '#3AA6E0', delay: 1.1 },
];

export default function Hero() {
  // Pehla phrase poora dikhta hai (SSR / SEO ke liye), phir typing loop chalta hai
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0].text);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // reduced-motion wale users ke liye animation band
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const full = phrases[index].text;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === full) {
      // poora type ho gaya -> thodi der ruko, phir delete
      timeout = setTimeout(() => setIsDeleting(true), HOLD_TIME);
    } else if (isDeleting && text === '') {
      // poora delete ho gaya -> next phrase
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, GAP_TIME);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            isDeleting
              ? full.slice(0, text.length - 1)
              : full.slice(0, text.length + 1)
          ),
        isDeleting ? DELETE_SPEED : TYPE_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  const current = phrases[index];

  return (
    // HEIGHT REDUCED HERE
    <section className="relative mt-8 overflow-hidden bg-white pt-20 pb-16 lg:pt-28 lg:pb-20">
      {/* ===== Holi color splashes ===== */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[90px]"
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
            animate={{
              x: [0, b.dx, 0],
              y: [0, b.dy, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: b.dur,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* subtle dotted texture, center me fade hota hai */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(34,191,166,0.35) 1px, transparent 1.5px)',
            backgroundSize: '26px 26px',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, transparent 30%, #000 85%)',
            maskImage:
              'radial-gradient(ellipse at center, transparent 30%, #000 85%)',
          }}
        />
      </div>

      {/* ===== Floating color dots ===== */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              background: p.color,
              opacity: 0.55,
              boxShadow: `0 0 18px ${p.color}`,
            }}
            animate={{ y: [0, -14, 0], scale: [1, 1.15, 1] }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
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
            {/* ===== Typing line ===== */}
            <span className="mt-1 block pb-2 font-serif text-3xl italic sm:text-4xl lg:text-6xl xl:text-6xl">
              {/*
                inline-grid trick: sabse lamba phrase invisible sizer ki tarah
                width reserve karta hai, isliye typing ke time layout / gradient
                hilta nahi.
              */}
              <span className="inline-grid">
                {/* sizer (invisible) — sabse lamba text width fix karta hai */}
                <span
                  aria-hidden="true"
                  className="invisible col-start-1 row-start-1 whitespace-nowrap pr-2"
                >
                  {phrases.reduce((a, b) => (b.text.length > a.length ? b.text : a), '')}
                </span>

                {/* typed text with current gradient */}
                <span
                  className="col-start-1 row-start-1 whitespace-nowrap bg-clip-text pr-2 text-left text-transparent"
                  style={{
                    backgroundImage: current.gradient,
                    // gradient poori reserved width pe failta hai
                  }}
                >
                  {text}
                  {/* blinking caret */}
                  <motion.span
                    aria-hidden="true"
                    className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] rounded-full align-baseline"
                    style={{ backgroundImage: current.gradient }}
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      times: [0, 0.5, 0.5, 1],
                    }}
                  />
                </span>
              </span>
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
            SEO, PPC, web development, and content strategies that deliver
            compounding ROI, not vanity metrics.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#111] px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-[#22BFA6]/20 transition-all hover:-translate-y-0.5 hover:bg-black/80"
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