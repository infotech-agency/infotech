// // 'use client';

// // import Link from 'next/link';
// // import { useState } from 'react';
// // import {
// //   Linkedin,
// //   Twitter,
// //   Instagram,
// //   Facebook,
// //   Youtube,
// //   Mail,
// //   Phone,
// //   MapPin,
// //   ArrowRight,
// //   Send,
// // } from 'lucide-react';
// // import { siteConfig } from '@/lib/site-data';
// // import { services } from '@/lib/services';
// // import { industries } from '@/lib/industries';
// // import Image from 'next/image';

// // export default function Footer() {
// //   const [email, setEmail] = useState('');
// //   const [subscribed, setSubscribed] = useState(false);

// //   const handleSubscribe = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (email) {
// //       setSubscribed(true);
// //       setEmail('');
// //       setTimeout(() => setSubscribed(false), 3000);
// //     }
// //   };

// //   return (
// //     <footer className="relative overflow-hidden bg-brand-dark text-sky">
// //       <div className="absolute inset-0 bg-grid-dark opacity-20" />
// //       <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />

// //       <div className="container relative mx-auto px-4">
// //         {/* Newsletter */}
// //         <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-2 lg:items-center">
// //           <div>
// //             <h3 className="text-2xl font-bold text-white sm:text-3xl">
// //               Get Growth Insights in Your Inbox
// //             </h3>
// //             <p className="mt-3 text-sky/70">
// //               Join 15,000+ marketers getting our weekly digital marketing tips,
// //               case studies, and industry analysis.
// //             </p>
// //           </div>
// //           <form onSubmit={handleSubscribe} className="flex gap-3">
// //             <input
// //               type="email"
// //               required
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="Enter your email"
// //               className="flex-1 border border-white/10 bg-white/5 px-6 py-3.5 text-white placeholder:text-sky/40 focus:border-ocean focus:outline-none"
// //             />
// //             <button
// //               type="submit"
// //               className="inline-flex items-center gap-2 bg-ocean px-6 py-3.5 font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark"
// //             >
// //               {subscribed ? 'Subscribed!' : 'Subscribe'}
// //               <Send className="h-4 w-4" />
// //             </button>
// //           </form>
// //         </div>

// //         {/* Main footer */}
// //         <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
// //           {/* Company Info */}
// //           <div className="lg:col-span-2">
// //             <Link href="/" className="flex items-center gap-2.5">
// //               <Image src="/images/logo.png" height={160} width={160} alt='logo'/>
// //             </Link>
// //             <p className="mt-5 max-w-sm text-sm leading-relaxed text-sky/70">
// //               {siteConfig.description}
// //             </p>
// //             <div className="mt-6 space-y-3">
// //               <a
// //                 href={`mailto:${siteConfig.email}`}
// //                 className="flex items-center gap-3 text-sm text-sky/70 transition-colors hover:text-electric"
// //               >
// //                 <Mail className="h-4 w-4" />
// //                 {siteConfig.email}
// //               </a>
// //               <a
// //                 href={`tel:${siteConfig.phone}`}
// //                 className="flex items-center gap-3 text-sm text-sky/70 transition-colors hover:text-electric"
// //               >
// //                 <Phone className="h-4 w-4" />
// //                 {siteConfig.phone}
// //               </a>
// //               <p className="flex items-start gap-3 text-sm text-sky/70">
// //                 <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
// //                 {siteConfig.address}
// //               </p>
// //             </div>

// //           <div className='flex gap-6 mt-10'>
// //             <div>
// //               <Image src="/images/google.svg" height={50} width={50} alt='partner'/>
// //             </div>
// //             <div>
// //               <Image src="/images/semrush.svg" height={50} width={50} alt='partner'/>
// //             </div>
// //           </div>

// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h4 className="text-sm font-bold uppercase tracking-wider text-white">
// //               Company
// //             </h4>
// //             <ul className="mt-5 space-y-3">
// //               {[
// //                 { label: 'About Us', href: '/about-us' },
// //                 { label: 'Careers', href: '/careers' },
// //                 { label: 'Portfolio', href: '/our-work/portfolio' },
// //                 { label: 'Case Studies', href: '/our-work/case-studies' },
// //                 { label: 'Testimonials', href: '/our-work/testimonials' },
// //                 { label: 'Blogs', href: '/blogs' },
// //                 { label: 'Contact', href: '/contact' },
// //               ].map((link) => (
// //                 <li key={link.href}>
// //                   <Link
// //                     href={link.href}
// //                     className="text-sm text-sky/70 transition-colors hover:text-electric"
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Services */}
// //           <div>
// //             <h4 className="text-sm font-bold uppercase tracking-wider text-white">
// //               Services
// //             </h4>
// //             <ul className="mt-5 space-y-3">
// //               {services.map((svc) => (
// //                 <li key={svc.slug}>
// //                   <Link
// //                     href={`/services/${svc.slug}`}
// //                     className="text-sm text-sky/70 transition-colors hover:text-electric"
// //                   >
// //                     {svc.shortTitle}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Industries */}
// //           <div>
// //             <h4 className="text-sm font-bold uppercase tracking-wider text-white">
// //               Industries
// //             </h4>
// //             <ul className="mt-5 space-y-3">
// //               {industries.slice(0, 8).map((ind) => (
// //                 <li key={ind.slug}>
// //                   <Link
// //                     href={`/industries/${ind.slug}`}
// //                     className="text-sm text-sky/70 transition-colors hover:text-electric"
// //                   >
// //                     {ind.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //               <li>
// //                 <Link
// //                   href="/industries/more"
// //                   className="flex items-center gap-1 text-sm font-semibold text-electric"
// //                 >
// //                   View All <ArrowRight className="h-3 w-3" />
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Bottom bar */}
// //         <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 md:flex-row">
// //           <p className="text-sm text-sky/60">
// //             © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
// //           </p>
// //           <div className="flex items-center gap-3">
// //             {[
// //               { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
// //               { Icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
// //               { Icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
// //               { Icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
// //               { Icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
// //             ].map(({ Icon, href, label }) => (
// //               <a
// //                 key={label}
// //                 href={href}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label={label}
// //                 className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sky/70 transition-all hover:border-electric hover:bg-electric hover:text-white"
// //               >
// //                 <Icon className="h-4 w-4" />
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import {
//   Linkedin,
//   Twitter,
//   Instagram,
//   Facebook,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Send,
// } from 'lucide-react';
// import { siteConfig } from '@/lib/site-data';
// import { services } from '@/lib/services';
// import { industries } from '@/lib/industries';
// import Image from 'next/image';

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       setSubscribed(true);
//       setEmail('');
//       setTimeout(() => setSubscribed(false), 3000);
//     }
//   };

//   return (
//     <footer className="relative overflow-hidden bg-brand-dark text-sky">
//       <div className="absolute inset-0 bg-grid-dark opacity-20" />
//       <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />

//       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Newsletter Section */}
//         <div className="grid gap-6 border-b border-white/10 py-8 md:py-10 lg:grid-cols-2 lg:items-center">
//           <div className="text-center lg:text-left">
//             <h3 className="text-xl font-bold text-white sm:text-2xl">
//               Get Growth Insights in Your Inbox
//             </h3>
//             <p className="mt-2 text-sm text-sky/70">
//               Join 15,000+ marketers getting our weekly digital marketing tips.
//             </p>
//           </div>
//           <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full flex-1 border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-sky/40 focus:border-ocean focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ocean px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark"
//             >
//               {subscribed ? 'Subscribed!' : 'Subscribe'}
//               <Send className="h-4 w-4" />
//             </button>
//           </form>
//         </div>

//         {/* --- FIXED: Compact & Non-Overflowing Banner Section --- */}
//     <div className="w-full h-[350px] flex items-center justify-center overflow-hidden">
//   <Image
//     src="/images/footer-banner.png"
//     alt="Footer Banner"
//     width={1200}
//     height={160}
//     className="block w-full max-w-4xl h-auto"
//     priority
//   />
// </div>
//         {/* -------------------------------------------------------- */}

//         {/* Main Footer Links & Info Grid */}
//         <div className="grid gap-8 py-8 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-5 md:py-10">
          
//           {/* Company Info */}
//           <div className="sm:col-span-2 flex flex-col items-center sm:items-start">
//             <Link href="/" className="flex items-center gap-2.5">
//               <Image src="/images/logo.png" height={120} width={120} alt='logo' className="h-auto w-28 sm:w-32" />
//             </Link>
//             <p className="mt-4 max-w-sm text-sm leading-relaxed text-sky/70">
//               {siteConfig.description}
//             </p>
//             <div className="mt-4 space-y-2 w-full">
//               <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center sm:justify-start gap-3 text-sm text-sky/70 transition-colors hover:text-electric">
//                 <Mail className="h-4 w-4 flex-shrink-0" />
//                 <span className="break-all">{siteConfig.email}</span>
//               </a>
//               <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center sm:justify-start gap-3 text-sm text-sky/70 transition-colors hover:text-electric">
//                 <Phone className="h-4 w-4 flex-shrink-0" />
//                 {siteConfig.phone}
//               </a>
//               <p className="flex items-start justify-center sm:justify-start gap-3 text-sm text-sky/70">
//                 <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 hidden sm:block" />
//                 <span>{siteConfig.address}</span>
//               </p>
//             </div>

//             {/* Partner Logos */}
//             <div className='flex gap-4 mt-6 justify-center sm:justify-start'>
//               <div className="relative w-10 h-10">
//                 <Image src="/images/google.svg" fill alt='Google partner' className="object-contain"/>
//               </div>
//               <div className="relative w-10 h-10">
//                 <Image src="/images/semrush.svg" fill alt='Semrush partner' className="object-contain"/>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
//               Company
//             </h4>
//             <ul className="mt-3 space-y-2">
//               {[
//                 { label: 'About Us', href: '/about-us' },
//                 { label: 'Careers', href: '/careers' },
//                 { label: 'Portfolio', href: '/our-work/portfolio' },
//                 { label: 'Case Studies', href: '/our-work/case-studies' },
//                 { label: 'Testimonials', href: '/our-work/testimonials' },
//                 { label: 'Blogs', href: '/blogs' },
//                 { label: 'Contact', href: '/contact' },
//               ].map((link) => (
//                 <li key={link.href}>
//                   <Link href={link.href} className="text-sm text-sky/70 transition-colors hover:text-electric block py-0.5 sm:py-0">
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
//               Services
//             </h4>
//             <ul className="mt-3 space-y-2">
//               {services.map((svc) => (
//                 <li key={svc.slug}>
//                   <Link href={`/services/${svc.slug}`} className="text-sm text-sky/70 transition-colors hover:text-electric block py-0.5 sm:py-0">
//                     {svc.shortTitle}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Industries */}
//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
//               Industries
//             </h4>
//             <ul className="mt-3 space-y-2">
//               {industries.slice(0, 8).map((ind) => (
//                 <li key={ind.slug}>
//                   <Link href={`/industries/${ind.slug}`} className="text-sm text-sky/70 transition-colors hover:text-electric block py-0.5 sm:py-0">
//                     {ind.name}
//                   </Link>
//                 </li>
//               ))}
//               <li className="flex justify-center sm:justify-start pt-0.5">
//                 <Link href="/industries/more" className="flex items-center gap-1 text-sm font-semibold text-electric">
//                   View All <ArrowRight className="h-3 w-3" />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row text-center md:text-left">
//           <p className="text-xs text-sky/60 sm:text-sm order-2 md:order-1">
//             © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
//           </p>
//           <div className="flex items-center gap-3 order-1 md:order-2">
//             {[
//               { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
//               { Icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
//               { Icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
//               { Icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
//               { Icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
//             ].map(({ Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sky/70 transition-all hover:border-electric hover:bg-electric hover:text-white"
//               >
//                 <Icon className="h-4 w-4" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-data';
import { services } from '@/lib/services';
import { industries } from '@/lib/industries';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-brand-dark text-sky">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />

      {/* Delhi skyline silhouette — sits behind all footer content, fades
          into the brand-dark background. Swap the src for your own asset
          (a transparent-background silhouette PNG/SVG works best here). */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-20 sm:h-52 lg:h-64">
        <Image
          src="/images/delhiskyline.png"
          alt=""
          fill
          className="object-cover object-bottom"
          aria-hidden="true"
        />
        {/* soft fade so the skyline blends up into the dark background
            instead of cutting off with a hard edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="grid gap-6 border-b border-white/10 py-8 md:py-10 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Get Growth Insights in Your Inbox
            </h3>
            <p className="mt-2 text-sm text-sky/70">
              Join 15,000+ marketers getting our weekly digital marketing tips.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full flex-1 border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-sky/40 focus:border-ocean focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ocean px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* --- FIXED: Compact & Non-Overflowing Banner Section --- */}
    <div className="w-full h-[350px] flex items-center justify-center overflow-hidden">
  <Image
    src="/images/footebanner.png"
    alt="Footer Banner"
    width={1200}
    height={160}
    className="block w-full max-w-4xl h-auto"
    priority
  />
</div>
        {/* -------------------------------------------------------- */}

        {/* Main Footer Links & Info Grid */}
        <div className="grid gap-8 py-8 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-5 md:py-10">
          
          {/* Company Info */}
          <div className="sm:col-span-2 flex flex-col items-center sm:items-start">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/images/logo.png" height={120} width={120} alt='logo' className="h-auto w-28 sm:w-32" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sky/70">
            <Image src="/images/india-gate.png" height={80} width={80} alt='logo' className="h-auto w-28 sm:w-32" />
              {siteConfig.description}
            </p>
            <div className="mt-4 space-y-2 w-full">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center sm:justify-start gap-3 text-sm text-sky/70 transition-colors hover:text-electric">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center sm:justify-start gap-3 text-sm text-sky/70 transition-colors hover:text-electric">
                <Phone className="h-4 w-4 flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <p className="flex items-start justify-center sm:justify-start gap-3 text-sm text-sky/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 hidden sm:block" />
                <span>{siteConfig.address}</span>
              </p>
            </div>

            {/* Partner Logos */}
            <div className='flex gap-4 mt-6 justify-center sm:justify-start'>
              <div className="relative w-10 h-10">
                <Image src="/images/google.svg" fill alt='Google partner' className="object-contain"/>
              </div>
              <div className="relative w-10 h-10">
                <Image src="/images/semrush.svg" fill alt='Semrush partner' className="object-contain"/>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              Company
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: 'About Us', href: '/about-us' },
                { label: 'Careers', href: '/careers' },
                { label: 'Portfolio', href: '/our-work/portfolio' },
                { label: 'Case Studies', href: '/our-work/case-studies' },
                { label: 'Testimonials', href: '/our-work/testimonials' },
                { label: 'Blogs', href: '/blogs' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sky/70 transition-colors hover:text-electric block py-0.5 sm:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              Services
            </h4>
            <ul className="mt-3 space-y-2">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link href={`/services/${svc.slug}`} className="text-sm text-sky/70 transition-colors hover:text-electric block py-0.5 sm:py-0">
                    {svc.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              Industries
            </h4>
            <ul className="mt-3 space-y-2">
              {industries.slice(0, 8).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="text-sm text-sky/70 transition-colors hover:text-electric block py-0.5 sm:py-0">
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li className="flex justify-center sm:justify-start pt-0.5">
                <Link href="/industries/more" className="flex items-center gap-1 text-sm font-semibold text-electric">
                  View All <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row text-center md:text-left">
          <p className="text-xs text-sky/60 sm:text-sm order-2 md:order-1">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 order-1 md:order-2">
            {[
              { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
              { Icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
              { Icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
              { Icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
              { Icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sky/70 transition-all hover:border-electric hover:bg-electric hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}