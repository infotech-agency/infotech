// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// import { Star, Quote } from 'lucide-react';
// import SectionHeading from '@/components/common/SectionHeading';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { BASE_URL } from '@/utils/baseUrl';

// // Types based on your API response
// interface Testimonial {
//   _id: string;
//   clientName: string;
//   company: string;
//   photo: {
//     public_id: string;
//     secure_url: string;
//   };
//   review: string;
//   starRating: number;
//   videoUrl?: string;
//   featured: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// interface ApiResponse {
//   success: boolean;
//   message: string;
//   data: Testimonial[];
//   meta: {
//     total: number;
//     page: number;
//     limit: number;
//     pages: number;
//   };
// }

// export default function TestimonialsSlider() {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/testimonials`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch testimonials');
//         }
//         const data: ApiResponse = await response.json();
//         setTestimonials(data.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   if (loading) {
//     return (
//       <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
//         <div className="container relative mx-auto px-4">
//           <div className="flex items-center justify-center py-20">
//             <div className="h-12 w-12 animate-spin rounded-full border-4 border-electric border-t-transparent"></div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
//         <div className="container relative mx-auto px-4">
//           <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-center text-red-400">
//             <p>Error loading testimonials: {error}</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (testimonials.length === 0) {
//     return (
//       <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
//         <div className="container relative mx-auto px-4">
//           <div className="text-center text-sky/60">
//             <p>No testimonials available yet.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
//       {/* Wave SVG Background - Using next/image */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none">
//         <Image
//           src="/svg/testimonials.svg" // Put your SVG in the public folder
//           alt="Background wave"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* Overlay for better readability */}
//       <div className="absolute inset-0  pointer-events-none" />

//       <div className="container relative mx-auto px-4 z-10">
//         <SectionHeading
//           dark
//           // eyebrow="Client Success Stories"
//           title="What Our Clients Say"
//           description="We measure our success by our clients' success. Here is what they have to say about working with Infotech Agency."
//         />
       
        
//         <div className="mt-14">

//           <Swiper
//             modules={[Pagination, Autoplay, Navigation]}
//             spaceBetween={24}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             navigation
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="pb-16"
//           >
//             {testimonials.map((testimonial) => (
//               <SwiperSlide key={testimonial._id}>
//                 <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
//                   <div className="mb-4 flex items-center justify-between">
//                     <div className="flex gap-1">
//                       {[...Array(testimonial.starRating)].map((_, j) => (
//                         <Star
//                           key={j}
//                           className="h-5 w-5 fill-yellow-400 text-yellow-400"
//                         />
//                       ))}
//                     </div>
//                     <Quote className="h-8 w-8 text-white" />
//                   </div>
//                   <p className="flex-1 text-base leading-relaxed text-sky/90">
//                     "{testimonial.review}"
//                   </p>
//                   <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
//                     <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                       <Image
//                         src={testimonial.photo?.secure_url}
//                         alt={testimonial.clientName}
//                         fill
//                         className="object-cover"
//                         sizes="48px"
//                       />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-white">{testimonial.clientName}</p>
//                       <p className="text-sm text-sky/60">
//                         {testimonial.company}
//                       </p>
//                     </div>
//                   </div>
//                   {testimonial.videoUrl && (
//                     <a
//                       href={testimonial.videoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="mt-3 inline-flex items-center gap-2 text-sm text-electric hover:text-electric/80 transition-colors"
//                     >
//                       <span>▶</span> Watch Video Testimonial
//                     </a>
//                   )}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BASE_URL } from '@/utils/baseUrl';

interface Testimonial {
  _id: string;
  clientName: string;
  company: string;
  photo: {
    public_id: string;
    secure_url: string;
  };
  review: string;
  starRating: number;
  videoUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Testimonial[];
  meta: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

/** Pagination accent color */
const PINK = '#DB2777';

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BASE_URL}/testimonials`);
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data: ApiResponse = await response.json();
        setTestimonials(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
        <div className="container relative mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-electric border-t-transparent" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
        <div className="container relative mx-auto px-4">
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-center text-red-400">
            <p>Error loading testimonials: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
        <div className="container relative mx-auto px-4">
          <div className="text-center text-sky/60">
            <p>No testimonials available yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
      {/* Background SVG */}
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <Image
          src="/svg/testimonials.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          dark
          title="What Our Clients Say"
          description="We measure our success by our clients' success. Here is what they have to say about working with Infotech Agency."
        />

        {/* Custom pink pagination CSS */}
        <style jsx global>{`
          .testimonials-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(219, 39, 119, 0.3);
            opacity: 1;
            transition: all 0.3s ease;
          }
          .testimonials-swiper .swiper-pagination-bullet:hover {
            background: rgba(219, 39, 119, 0.6);
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            background: ${PINK};
            width: 28px;
            border-radius: 9999px;
          }
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            width: 44px;
            height: 44px;
            border-radius: 9999px;
            background: #ffffff;
            color: ${PINK};
            box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease;
          }
          .testimonials-swiper .swiper-button-next:hover,
          .testimonials-swiper .swiper-button-prev:hover {
            background: ${PINK};
            color: #ffffff;
            transform: scale(1.05);
          }
          .testimonials-swiper .swiper-button-next::after,
          .testimonials-swiper .swiper-button-prev::after {
            font-size: 16px;
            font-weight: 700;
          }
        `}</style>

        <div className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper pb-20"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id} className="!h-auto !overflow-visible">
  <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 pt-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#DB2777]/30 hover:shadow-[0_20px_45px_-15px_rgba(219,39,119,0.35)]">

    {/* Top accent bar */}
    <span className="absolute left-0 top-0 h-1 w-0 rounded-tl-2xl bg-[#DB2777] transition-all duration-500 group-hover:w-full" />

    {/* Quote badge — INSIDE card now */}
    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#DB2777] shadow-lg shadow-[#DB2777]/30">
      <Quote className="h-5 w-5 text-white" />
    </div>

    {/* Stars */}
    <div className="mb-4 flex gap-1 pr-12">
      {[...Array(testimonial.starRating)].map((_, j) => (
        <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    {/* Review */}
    <p className="flex-1 text-base leading-relaxed text-slate-700">
      “{testimonial.review}”
    </p>

    {/* Divider */}
    <div className="my-6 h-px w-full bg-slate-100" />

    {/* Author */}
    <div className="flex items-center gap-4">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#DB2777]/20 ring-offset-2 ring-offset-white transition-all duration-500 group-hover:ring-[#DB2777]/60">
        <Image
          src={testimonial.photo?.secure_url}
          alt={testimonial.clientName}
          fill
          className="object-cover"
          sizes="56px"
        />
      </div>
      <div className="min-w-0">
        <p className="truncate font-semibold text-slate-900">
          {testimonial.clientName}
        </p>
        <p className="truncate text-sm text-slate-500">
          {testimonial.company}
        </p>
      </div>
    </div>

    {/* Video link */}
    {testimonial.videoUrl && (
      <a
        href={testimonial.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#DB2777] transition-colors hover:text-[#DB2777]/80"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DB2777]/10">
          ▶
        </span>
        Watch Video Testimonial
      </a>
    )}
  </div>
</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}