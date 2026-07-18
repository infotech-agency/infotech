'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Award, TrendingUp, Sparkles, Zap } from 'lucide-react';

export default function WmeStyleHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      
      {/* ── Background Effects: Grid & Glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Sharp CSS Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] [background-size:64px_64px] opacity-40" />
        {/* Left Blue Glow */}
        <div className="absolute left-[-10%] top-1/4 h-[600px] w-[600px] rounded-full bg-[#173eff]/20 blur-[120px]" />
        {/* Right Orange Glow (Matching the bottom strip) */}
        <div className="absolute right-[-5%] bottom-0 h-[500px] w-[500px] rounded-full bg-[#f97316]/10 blur-[120px]" />
      </div>

      {/* ── Navbar (Simulated for context) ── */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">WME AGENCY</span>
        </div>
        <div className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">
          <a href="#" className="transition-colors hover:text-white">Services</a>
          <a href="#" className="transition-colors hover:text-white">About Us</a>
          <a href="#" className="transition-colors hover:text-white">Work</a>
        </div>
        <a href="#" className="group flex items-center gap-2 border border-white/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black">
          Contact Us
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
        </a>
      </nav>

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-32 pt-12 lg:px-8">
        
        {/* Floating Badge: NO.01 AWARD WINNING */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-6 top-24 hidden lg:block"
        >
          <div className="flex items-center gap-3 border-l-2 border-[#173eff] bg-[#173eff]/10 px-4 py-3 backdrop-blur-md">
            <Star className="h-5 w-5 fill-[#173eff] text-[#173eff]" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">No. 01</p>
              <p className="text-sm font-bold text-white">Award Winning</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Badge: CLIENT WORLDWIDE */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-6 top-32 hidden lg:block"
        >
          <div className="flex items-center gap-3 border-r-2 border-[#f97316] bg-[#f97316]/10 px-4 py-3 backdrop-blur-md">
            <TrendingUp className="h-5 w-5 text-[#f97316]" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fb923c]">Since 2019</p>
              <p className="text-sm font-bold text-white">Client Worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* Central Visual & Typography Container */}
        <div className="relative flex w-full flex-col items-center">
          
          {/* Massive Background Text */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 -z-10 w-full -translate-y-1/2 text-center text-[18vw] font-black uppercase leading-none tracking-tighter text-white/5 sm:text-[15vw] lg:text-[12vw]"
          >
            WME
          </motion.h1>

          {/* Central Image (Futuristic/Agency Vibe) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] lg:h-[600px] lg:w-[450px]"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 shadow-[0_0_80px_rgba(23,62,255,0.3)]">
              <Image
                src="/hero/man.png"
                alt="Agency Creative Director"
                fill
                priority
                className="object-cover rounded-[2rem]"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Floating Glass Cards over the image (Simulating the 3D boxes) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-12 top-1/4 hidden md:block"
            >
              <div className="flex items-center gap-3 border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center bg-[#173eff] text-white">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Performance</p>
                  <p className="text-sm font-bold text-white">+340% ROI</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-12 bottom-1/4 hidden md:block"
            >
              <div className="flex items-center gap-3 border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center bg-[#f97316] text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Branding</p>
                  <p className="text-sm font-bold text-white">Top Agency</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Overlay Typography */}
          <div className="absolute bottom-[-3rem] z-20 flex flex-col items-center text-center sm:bottom-[-4rem]">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }}
              className="mb-4 flex items-center gap-2 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 backdrop-blur-sm"
            >
              <Sparkles className="h-3 w-3 text-[#173eff]" />
              Empowering Digital Brands
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8 }}
              className="text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl"
            >
              We Create <br/> <span className="text-[#173eff]">Legends</span>
            </motion.h2>
          </div>
        </div>
      </div>

      {/* ── Bottom Orange Marquee Strip ── */}
      <motion.div 
        initial={{ y: 100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 z-20 flex w-full items-center justify-between overflow-hidden bg-[#f97316] py-4 text-black"
      >
        {/* Infinite Scroll Marquee Effect */}
        <div className="flex animate-[marquee_20s_linear_infinite] items-center gap-8 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
              WME Agency 20 - 19
              <span className="text-xl">✺</span>
              Award Winning Marketing
              <span className="text-xl">✺</span>
              Digital Growth
              <span className="text-xl">✺</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tailwind Custom Animation CSS (Inject this into your global.css if needed) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { motion, Variants } from "framer-motion";
// import { Play, ArrowUpRight } from "lucide-react";

// /**
//  * WME AGENCY — Animated Hero Section
//  * Next.js 14+ (App Router) / TSX / Tailwind CSS / Framer Motion
//  *
//  * npm i framer-motion lucide-react
//  *
//  * Drop your own assets in /public and update the src paths marked below:
//  *  - /model.png            → the model w/ VR headset (transparent PNG)
//  *  - /fly-cam-left.png     → left floating "Why ME" winged camera
//  *  - /fly-cam-right.png    → right floating "Why ME" winged camera
//  *  - /globe-wire.png       → wireframe globe (client widget)
//  *  - /globe-wire-small.png → small wireframe globe (bottom badge)
//  *  - /noise.png            → optional grain/noise overlay texture
//  */

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   show: (i: number = 0) => ({
//     opacity: 1,
//     transition: { duration: 0.9, delay: i * 0.12, ease: "easeOut" },
//   }),
// };

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
//       {/* grain overlay */}
//       <div
//         className="pointer-events-none absolute inset-0 z-40 opacity-[0.06] mix-blend-overlay"
//         style={{
//           backgroundImage: "url('/noise.png')",
//           backgroundSize: "180px",
//         }}
//       />

//       {/* ---------------- NAVBAR ---------------- */}
//       <motion.header
//         variants={fadeUp}
//         initial="hidden"
//         animate="show"
//         className="relative z-30 flex items-center justify-between px-6 md:px-12 pt-8"
//       >
//         <span className="text-lg md:text-xl font-extrabold tracking-tight">
//           WME AGENCY
//         </span>

//         <nav className="hidden md:flex items-center gap-10 text-sm text-white/80">
//           <a href="#services" className="hover:text-white transition-colors">
//             Services
//           </a>
//           <a href="#about" className="hover:text-white transition-colors">
//             About us
//           </a>
//         </nav>

//         <a
//           href="#contact"
//           className="rounded-full border border-white/30 px-5 py-2 text-xs md:text-sm tracking-wide hover:bg-white hover:text-black transition-colors"
//         >
//           CONTACT US
//         </a>
//       </motion.header>

//       {/* ---------------- TOP BADGES ---------------- */}
//       <motion.div
//         variants={fadeUp}
//         custom={1}
//         initial="hidden"
//         animate="show"
//         className="absolute left-6 md:left-12 top-32 z-30 flex items-center gap-3 rounded-full bg-blue-600 py-1.5 pl-1.5 pr-5"
//       >
//         <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold leading-tight">
//           <motion.span
//             animate={{ rotate: 360 }}
//             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//             className="absolute inset-0 rounded-full border border-white/40 border-dashed"
//           />
//           NO.
//           <br />
//           01
//         </div>
//         <span className="text-[11px] md:text-xs font-semibold leading-tight">
//           AWWARD
//           <br />
//           WINNING
//         </span>
//       </motion.div>

//       <motion.div
//         variants={fadeUp}
//         custom={1.2}
//         initial="hidden"
//         animate="show"
//         className="absolute right-6 md:right-12 top-32 z-30 hidden sm:flex items-center gap-6 rounded-md border border-white/20 px-5 py-4"
//       >
//         <div className="text-[11px] leading-snug text-white/80">
//           CLIENT
//           <br />
//           WORLD WIDE
//           <br />
//           SINCE 2019
//           <button className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
//             <Play className="h-3 w-3 fill-white text-white" />
//           </button>
//         </div>

//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="relative h-20 w-20"
//         >
//           {/* Replace with your wireframe globe asset for exact match */}
//           <Image
//             src="/hero/glob.png"
//             alt="Global clients"
//             fill
//             className="object-contain opacity-90"
//           />
//         </motion.div>
//       </motion.div>

//       {/* ---------------- BACKGROUND TITLE ---------------- */}
//       <div className="absolute inset-x-0 top-[26%] z-10 select-none">
//         {["EMPOWERING", "DIGITAL BRANDS", "DIGITAL AGENCY"].map((line, i) => (
//           <motion.h1
//             key={line}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
//             className="whitespace-nowrap text-center font-black uppercase leading-[0.95] tracking-tight text-white"
//             style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
//           >
//             {line}
//           </motion.h1>
//         ))}
//       </div>

//       {/* ---------------- MODEL / HERO IMAGE ---------------- */}
//       <motion.div
//         initial={{ opacity: 0, y: 60, scale: 0.98 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//         className="relative z-20 mx-auto mt-24 md:mt-28 h-[60vh] md:h-[78vh] w-full max-w-md"
//       >
//         <Image
//           src="/hero/man.png"
//           alt="Model wearing VR headset"
//           fill
//           priority
//           className="object-contain object-bottom"
//         />

//         {/* "Why ME" label on the headset */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.9 }}
//           className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2"
//         >
//           <span className="rounded-md border border-white/40 bg-black/80 px-6 py-2 text-lg font-semibold tracking-wide backdrop-blur-sm">
//             Why ME
//           </span>
//         </motion.div>
//       </motion.div>

//       {/* ---------------- FLOATING FLY-CAM ICONS ---------------- */}
//       <motion.div
//         animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
//         transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute left-[6%] top-[46%] z-20 hidden md:block"
//       >
//         <div className="relative h-24 w-32">
//           <Image src="/fly-cam-left.png" alt="" fill className="object-contain" />
//         </div>
//       </motion.div>

//       <motion.div
//         animate={{ y: [0, 16, 0], rotate: [0, 3, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//         className="absolute right-[6%] top-[48%] z-20 hidden md:block"
//       >
//         <div className="relative h-24 w-32">
//           <Image src="/hero/tv.png" alt="" fill className="object-contain" />
//         </div>
//       </motion.div>

//       {/* ---------------- BOTTOM ORANGE BANNER ---------------- */}
//       <motion.div
//         variants={fadeIn}
//         custom={2}
//         initial="hidden"
//         animate="show"
//         className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between bg-orange-600 px-6 md:px-12 py-6 md:py-8"
//       >
//         <motion.h2
//           initial={{ x: -40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
//           className="font-black uppercase leading-none tracking-tight text-[#f4ecd8]"
//           style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
//         >
//           WME AGENCY
//         </motion.h2>

//         <motion.div
//           initial={{ x: 40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
//           className="relative hidden h-16 w-16 shrink-0 items-center justify-center border border-[#f4ecd8]/60 sm:flex md:h-20 md:w-20"
//         >
//           <Image
//             src="/hero/info.png"
//             alt=""
//             fill
//             className="object-contain p-2"
//           />
//           <span className="absolute bottom-1 text-[10px] font-bold text-[#f4ecd8]">
//             20-19
//           </span>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }