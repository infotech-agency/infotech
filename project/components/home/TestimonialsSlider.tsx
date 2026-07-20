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
//         const response = await fetch('http://localhost:5000/api/testimonials');
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
//       <div className="absolute inset-0 bg-grid-dark opacity-20" />
//       <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
//       <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />

//       <div className="container relative mx-auto px-4">
//         <SectionHeading
//           light
//           eyebrow="Client Success Stories"
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
//                     <Quote className="h-8 w-8 text-electric/40" />
//                   </div>
//                   <p className="flex-1 text-base leading-relaxed text-sky/90">
//                     "{testimonial.review}"
//                   </p>
//                   <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
//                     <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                       <Image
//                         src={testimonial.photo.secure_url}
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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { BASE_URL } from '@/utils/baseUrl';

// Types based on your API response
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

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BASE_URL}/testimonials`);
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data: ApiResponse = await response.json();
        setTestimonials(data.data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
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
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-electric border-t-transparent"></div>
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
      {/* Wave SVG Background - Using next/image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/svg/Wave.svg" // Put your SVG in the public folder
          alt="Background wave"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-brand/40 pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        <SectionHeading
          light
          eyebrow="Client Success Stories"
          title="What Our Clients Say"
          description="We measure our success by our clients' success. Here is what they have to say about working with Infotech Agency."
        />
        <div className='flex justify-center items-center'>
          <DotLottieReact
    src="/animations/Reviews.lottie"
    autoplay
    loop
    className="h-48 w-48 transition-transform duration-500 group-hover:scale-110"
  />
        </div>
        
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
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(testimonial.starRating)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                  <p className="flex-1 text-base leading-relaxed text-sky/90">
                    "{testimonial.review}"
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.photo?.secure_url}
                        alt={testimonial.clientName}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.clientName}</p>
                      <p className="text-sm text-sky/60">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  {testimonial.videoUrl && (
                    <a
                      href={testimonial.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm text-electric hover:text-electric/80 transition-colors"
                    >
                      <span>▶</span> Watch Video Testimonial
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