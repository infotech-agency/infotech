

// import Link from 'next/link';
// import Image from 'next/image';
// import { Reveal } from '@/components/common/Reveal';

// /**
//  * Pattern background (data URI, no extra asset file needed).
//  * Soft coral base with overlapping circle-arc texture, matching
//  * the reference design.
//  */
// const BG_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
// <svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
//   <rect width='120' height='120' fill='#F7A8B8'/>
//   <g fill='none' stroke='#F2809A' stroke-width='2' opacity='0.5'>
//     <circle cx='0' cy='0' r='40'/>
//     <circle cx='120' cy='120' r='40'/>
//     <circle cx='120' cy='0' r='40'/>
//     <circle cx='0' cy='120' r='40'/>
//     <circle cx='60' cy='60' r='40'/>
//   </g>
// </svg>
// `)}`;

// export default function CTABanner({
//   eyebrow = "Let's Work Together",
//   title = 'Need a Successful Project?',
//   buttonText = 'Contact Us',
//   buttonHref = '/contact',
//   illustrationSrc = '/images/success.png',
// }: {
//   eyebrow?: string;
//   title?: string;
//   buttonText?: string;
//   buttonHref?: string;
//   illustrationSrc?: string;
// }) {
//   return (
//     <section
//       style={{
//         backgroundColor: '#F7A8B8',
//         backgroundImage: `url("${BG_SVG}")`,
//         backgroundRepeat: 'repeat',
//         backgroundSize: '120px 120px',
//       }}
//       className="relative overflow-hidden py-20 lg:py-28"
//     >
//       <div className="container relative z-10 mx-auto px-4">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand/70">
//             {eyebrow}
//           </p>

//           <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand sm:text-4xl lg:text-5xl">
//             {title}
//           </h2>

//           <div className="mt-8 flex justify-center">
//             <Link
//               href={buttonHref}
//               className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
//             >
//               {buttonText}
//             </Link>
//           </div>
//         </Reveal>

//         {/* Illustration */}
//         <div className="relative mx-auto mt-12 max-w-3xl">
//           <Image
//             src={illustrationSrc}
//             alt=""
//             width={1200}
//             height={500}
//             className="h-auto w-full object-contain"
//             priority={false}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/common/Reveal';

export default function CTABanner({
  eyebrow = "Let's Work Together",
  title = 'Need a Successful Project?',
  buttonText = 'Contact Us',
  buttonHref = '/contact',
  illustrationSrc = '/images/success.png',
}: {
  eyebrow?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  illustrationSrc?: string;
}) {
  return (
    <section
      style={{
        // Blue -> mint -> green (logo image wala gradient)
        backgroundImage:
          'linear-gradient(135deg, #2b8be0 0%, #6fdc9f 50%, #1fc46a 100%)',
      }}
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* halka overlay taaki text readable rahe */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <div className="container relative z-10 mx-auto px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            {eyebrow}
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <div className="mt-8 flex justify-center">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              {buttonText}
            </Link>
          </div>
        </Reveal>

        {/* Illustration */}
        <div className="relative mx-auto mt-12 max-w-3xl">
          <Image
            src={illustrationSrc}
            alt=""
            width={1200}
            height={500}
            className="h-auto w-full object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}