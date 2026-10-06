'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    // HEIGHT REDUCED HERE
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-28 lg:pb-20 mt-8">
      {/* Soft green glow, top-left corner only (no grid) */}
      <div className="pointer-events-none absolute -left-24 -top-24 z-0 h-[260px] w-[260px] rounded-full bg-[#21D979]/25 blur-[90px]" />

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