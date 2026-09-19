
// "use client"
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// import { BASE_URL } from '@/utils/baseUrl';

// interface TechnologyItem {
//   _id: string;
//   name: string;
//   logo: {
//     public_id: string;
//     secure_url: string;
//   };
//   description?: string;
// }

// export default function Technologies() {
//   const [technologies, setTechnologies] = useState<TechnologyItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTechnologies = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/technologies`);
//         const result = await response.json();
        
//         if (result.success && result.data) {
//           setTechnologies(result.data);
//         }
//       } catch (error) {
//           console.error("Error fetching technologies data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTechnologies();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
//       {/* Premium Background: Sharp Box Grid + Mesh Glow */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
//         <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
//       </div>

//       <div className="container relative z-10 mx-auto px-4">
//         {/* Header Section */}
//         <Reveal className="mx-auto mb-16 max-w-3xl text-center">
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-electric shadow-sm">
//             <span className="h-1.5 w-1.5 rounded-full bg-electric" />
//             Our Tech Stack
//           </div>
//           <h2 className="text-3xl font tracking-tight text-brand sm:text-4xl lg:text-3xl">
//             Technologies We{' '}
//             <span className="bg-gradient-to-r from-electric to-leaf bg-clip-text text-transparent">
//               Leverage
//             </span>
//           </h2>
//           <p className="mt-5  leading-relaxed text-slate-600">
//             We leverage cutting-edge frameworks, databases, and tools to build scalable websites, high-performance web applications, and robust CMS platforms.
//           </p>
//         </Reveal>

//         {loading ? (
//           /* Loading Skeleton State - Sharp Corners */
//           <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
//             {[...Array(8)].map((_, index) => (
//               <div key={index} className="h-44 animate-pulse border border-slate-200 bg-white shadow-sm" />
//             ))}
//           </div>
//         ) : (
//           /* Dynamic Grid with Stagger Animation */
//           <Stagger className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4" stagger={0.05}>
//             {technologies.map((tech) => (
//               <StaggerItem key={tech._id}>
//                 <div className="group relative flex h-full flex-col items-center justify-center border border-slate-200 bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-slate-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  
//                   {/* Hover Top Accent Line */}
//                   <div className="absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-electric transition-all duration-500 group-hover:w-1/2"></div>

//                   {/* Logo Container - Sharp & Structured */}
//                   <div className="relative flex h-20 w-20 items-center justify-center border border-slate-100 bg-slate-50 p-4 transition-all duration-300 group-hover:border-electric/20 group-hover:bg-white">
//                     <Image
//                       src={tech.logo.secure_url}
//                       alt={`${tech.name} logo`}
//                       fill
//                       sizes="80px"
//                       className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
//                       unoptimized // Cloudinary URLs handle optimization natively
//                     />
//                   </div>
                  
//                   {/* Technology Name */}
//                   <h3 className="mt-6 text-base font-bold tracking-tight text-brand transition-colors duration-300 group-hover:text-electric sm:text-lg">
//                     {tech.name}
//                   </h3>
                  
//                   {/* Sharp Divider */}
//                   <div className="mt-3 h-[2px] w-8 bg-slate-100 transition-all duration-500 group-hover:w-12 group-hover:bg-electric/20"></div>
                  
//                   {/* Conditional Description */}
//                   {tech.description && (
//                     <p className="mt-3 text-xs leading-relaxed text-slate-500">
//                       {tech.description}
//                     </p>
//                   )}
//                 </div>
//               </StaggerItem>
//             ))}
//           </Stagger>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { BASE_URL } from "@/utils/baseUrl";

interface TechnologyItem {
  _id: string;
  name: string;
  logo: {
    public_id: string;
    secure_url: string;
  };
  description?: string;
}

export default function Technologies() {
  const [technologies, setTechnologies] = useState<TechnologyItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch(`${BASE_URL}/technologies`);
        const result = await response.json();

        if (result.success && result.data) {
          setTechnologies(result.data);
        }
      } catch (error) {
        console.error("Error fetching technologies data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Subtle dotted texture — replaces the loud grid + blur mesh */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Soft edge fade so dots don't fight the content */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header — left aligned on desktop, centered on mobile */}
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">
            Our Tech Stack
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
            Technologies we leverage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Cutting-edge frameworks, databases, and tools we use to build
            scalable websites, high-performance web applications, and robust
            CMS platforms.
          </p>
        </Reveal>

        {loading ? (
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-3 md:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-40 animate-pulse bg-white"
              />
            ))}
          </div>
        ) : (
          /* Seamless grid — cards share borders, no floating tiles */
          <Stagger
            className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-3 md:grid-cols-4"
            stagger={0.04}
          >
            {technologies.map((tech) => (
              <StaggerItem key={tech._id}>
                <div className="group relative flex h-full flex-col items-center justify-center bg-white px-6 py-9 text-center transition-colors duration-300 hover:bg-slate-50">
                  {/* Logo — no box, just clean floating mark */}
                  <div className="relative h-14 w-14">
                    <Image
                      src={tech.logo.secure_url}
                      alt={`${tech.name} logo`}
                      fill
                      sizes="56px"
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                  </div>

                  <h3 className="mt-5 text-sm font-semibold tracking-tight text-brand sm:text-base">
                    {tech.name}
                  </h3>

                  {tech.description && (
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">
                      {tech.description}
                    </p>
                  )}

                  {/* Thin underline that grows on hover — subtle, not flashy */}
                  <span className="mt-4 h-px w-6 bg-slate-300 transition-all duration-500 group-hover:w-10 group-hover:bg-electric" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}