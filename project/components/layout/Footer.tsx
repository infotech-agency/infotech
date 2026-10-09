// 'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import {
//   Linkedin,
//   Twitter,
//   Instagram,
//   Facebook,
//   Mail,
//   Phone,
//   MessageCircle,
//   MapPin,
// } from 'lucide-react';
// import { siteConfig } from '@/lib/site-data';
// import { services } from '@/lib/services';
// import { industries } from '@/lib/industries';
// import { getWebsiteSettings } from '@/lib/settings';

// /** 👉 Apna logo yahan set karo (public folder ke andar ki file) */
// const LOGO_SRC = '/images/logo.webp';

// export default function Footer() {
//   const [settings, setSettings] = useState<any>(null);

//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const websiteSettings = await getWebsiteSettings();
//         setSettings(websiteSettings);
//       } catch (error) {
//         console.error('Failed to fetch settings:', error);
//       }
//     };
//     fetchSettings();
//   }, []);

//   // ---- Fallbacks (used only if backend has nothing) ----
//   const fallbackPhones = ['+91 9971591023'];
//   const fallbackWhatsapps = ['+91 9971591023'];
//   const fallbackEmails = ['info@wisdommarketing.in'];

//   // Prefer backend, else fallback. Filter out empty strings.
//   const phones: string[] = (
//     settings?.phones?.length ? settings.phones : fallbackPhones
//   ).filter(Boolean);

//   const whatsapps: string[] = (
//     settings?.whatsapps?.length ? settings.whatsapps : fallbackWhatsapps
//   ).filter(Boolean);

//   const emails: string[] = (
//     settings?.emails?.length ? settings.emails : fallbackEmails
//   ).filter(Boolean);

//   const address =
//     settings?.address ?? 'Sec-15A, Faridabad Haryana - 121007';

//   // strip non-digits for wa.me / tel: links
//   const digits = (v: string) => v.replace(/\D/g, '');

//   return (
//     <footer className="w-full bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
//       <div className="relative z-10 mx-auto max-w-[1600px]">
//         {/* ===== Main Grid ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0">

//           {/* ===== LEFT: LOGO ===== */}
//           <div className="lg:col-span-3 flex items-center justify-center lg:justify-start px-6 pt-10 lg:py-12 lg:pl-10 lg:pr-4">
//             <div className="rounded-2xl bg-white p-4 shadow-lg shadow-black/30">
//               <Image
//                 src={LOGO_SRC}
//                 alt={siteConfig.name ?? 'Company logo'}
//                 width={200}
//                 height={80}
//                 className="h-auto w-40 object-contain sm:w-44"
//               />
//             </div>
//           </div>

//           {/* ===== MIDDLE: 2 link columns ===== */}
//           <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 py-10 lg:py-12 px-6 lg:px-8">

//             {/* --- IT Services --- */}
//             <div>
//               <h4 className="text-[20px] font-semibold text-white mb-6">
//                 IT Services
//               </h4>
//               <ul className="space-y-4">
//                 {services.map((svc) => (
//                   <li key={svc.slug}>
//                     <span className="text-[13px] text-white/90 hover:text-[#ff6b00] transition-colors duration-200 uppercase tracking-wide">
//                       {svc.shortTitle}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* --- COMPANY --- */}
//             <div>
//               <h4 className="text-[20px] font-semibold text-white mb-6">
//                 COMPANY
//               </h4>
//               <ul className="space-y-4">
//                 <li>
//                   <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
//                     Web Development
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
//                     wordpress development
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
//                     Digital Marketing Institutes
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
//                     Privacy Policy
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
//                     Contact Us
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* ===== RIGHT: BLUE CONTACT CARD ===== */}
//           <div
//             className="lg:col-span-4 relative"
//             style={{ filter: 'drop-shadow(-4px 6px 10px rgba(0,0,0,0.45))' }}
//           >
//             <div
//               className="relative bg-gradient-to-br from-[#0129FF] to-[#031143] p-8 pl-10 h-full min-h-[30px] flex flex-col justify-center"
//               style={{
//                 clipPath:
//                   'polygon(48px 0, 100% 0, 100% 100%, 0 100%, 0 48px)',
//               }}
//             >
//               <h3 className="text-[26px] font-bold mb-7 text-white">
//                 Contact Us
//               </h3>

//               <ul className="space-y-5">
//                 {/* Address */}
//                 {address && (
//                   <li className="flex items-start gap-3">
//                     <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
//                     <span className="text-[14px] leading-relaxed text-white font-normal">
//                       {address}
//                     </span>
//                   </li>
//                 )}

//                 {/* Emails (multiple) */}
//                 {emails.length > 0 && (
//                   <li className="flex items-start gap-3">
//                     <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
//                     <div className="text-[14px] leading-relaxed text-white space-y-1">
//                       <span className="block">Email Us :</span>
//                       {emails.map((e, i) => (
//                         <a
//                           key={i}
//                           href={`mailto:${e}`}
//                           className="block hover:underline break-all"
//                         >
//                           {e}
//                         </a>
//                       ))}
//                     </div>
//                   </li>
//                 )}

//                 {/* Phones (multiple) */}
//                 {phones.length > 0 && (
//                   <li className="flex items-start gap-3">
//                     <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
//                     <div className="text-[14px] leading-relaxed text-white space-y-1">
//                       <span className="block">Phone :</span>
//                       {phones.map((p, i) => (
//                         <a
//                           key={i}
//                           href={`tel:${digits(p)}`}
//                           className="block hover:underline"
//                         >
//                           {p}
//                         </a>
//                       ))}
//                     </div>
//                   </li>
//                 )}

//                 {/* WhatsApps (multiple) */}
//                 {whatsapps.length > 0 && (
//                   <li className="flex items-start gap-3">
//                     <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
//                     <div className="text-[14px] leading-relaxed text-white space-y-1">
//                       <span className="block">WhatsApp :</span>
//                       {whatsapps.map((w, i) => (
//                         <a
//                           key={i}
//                           href={`https://wa.me/${digits(w)}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="block hover:underline"
//                         >
//                           {w}
//                         </a>
//                       ))}
//                     </div>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* ===== Bottom Bar ===== */}
//         <div className="border-t border-white/10 py-5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 px-6 lg:px-10">
//           <p className="text-[13px] text-gray-300 text-center">
//             © {new Date().getFullYear()}{' '}
//             {siteConfig.name ?? 'Wisdom Marketing-Digital Marketing'} | All
//             rights reserved
//           </p>

//           <div className="flex items-center gap-3">
//             {[
//               { Icon: Linkedin, href: settings?.socialLinks?.linkedin, label: 'LinkedIn' },
//               { Icon: Twitter, href: settings?.socialLinks?.twitter, label: 'Twitter' },
//               { Icon: Instagram, href: settings?.socialLinks?.instagram, label: 'Instagram' },
//               { Icon: Facebook, href: settings?.socialLinks?.facebook, label: 'Facebook' },
//             ]
//               .filter((s) => s.href)
//               .map(({ Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </a>
//               ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-data';
import { services } from '@/lib/services';
import { industries } from '@/lib/industries';
import { getWebsiteSettings } from '@/lib/settings';

/** 👉 Apna logo yahan set karo (public folder ke andar ki file) */
const LOGO_SRC = '/info-white.png';

/** 👉 Badge images public/images/badges/ me rakh, file names apne hisab se badal le */
const BADGES = [
  { src: '/badge/badge-1.svg', alt: 'Semrush Partner' },
  { src: '/badge/clutch.svg', alt: 'Clutch Top Agency' },
  { src: '/badge/google-premier.svg', alt: 'Google Partner' },
];

export default function Footer() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const websiteSettings = await getWebsiteSettings();
        setSettings(websiteSettings);
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      }
    };
    fetchSettings();
  }, []);

  // ---- Fallbacks (used only if backend has nothing) ----
  const fallbackPhones = ['+91 9971591023'];
  const fallbackWhatsapps = ['+91 9971591023'];
  const fallbackEmails = ['info@wisdommarketing.in'];

  // Prefer backend, else fallback. Filter out empty strings.
  const phones: string[] = (
    settings?.phones?.length ? settings.phones : fallbackPhones
  ).filter(Boolean);

  const whatsapps: string[] = (
    settings?.whatsapps?.length ? settings.whatsapps : fallbackWhatsapps
  ).filter(Boolean);

  const emails: string[] = (
    settings?.emails?.length ? settings.emails : fallbackEmails
  ).filter(Boolean);

  const address =
    settings?.address ?? 'Sec-15A, Faridabad Haryana - 121007';

  // strip non-digits for wa.me / tel: links
  const digits = (v: string) => v.replace(/\D/g, '');

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#050505] via-[#161616] to-[#3a3a3a] font-sans text-white">
      {/* soft grey glow, depth ke liye */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* ===== Main Grid ===== */}
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-12">

          {/* ===== LEFT: LOGO + BADGES ===== */}
          <div className="flex flex-col items-center gap-5 px-6 pt-10 lg:col-span-3 lg:items-start lg:justify-center lg:py-12 lg:pl-10 lg:pr-4">
            <div className="rounded-2xl p-4 shadow-lg shadow-black/30">
              <Image
                src={LOGO_SRC}
                alt={siteConfig.name ?? 'Company logo'}
                width={200}
                height={80}
                className="h-auto w-40 object-contain sm:w-44"
              />
            </div>

            <div className="flex items-center gap-3">
              {BADGES.map((b) => (
                <div
                  key={b.alt}
                  className="flex h-18 w-18 items-center justify-center rounded-xl  p-1.5 shadow-md shadow-black/30 sm:h-16 sm:w-16"
                >
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== MIDDLE: 2 link columns ===== */}
          <div className="grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:col-span-5 lg:px-8 lg:py-12">

            {/* --- IT Services --- */}
            <div>
              <h4 className="mb-6 text-[20px] font-semibold text-white">
                IT Services
              </h4>
              <ul className="space-y-4">
                {services.map((svc) => (
                  <li key={svc.slug}>
                    <span className="text-[13px] uppercase tracking-wide text-white/90 transition-colors duration-200 hover:text-[#ff6b00]">
                      {svc.shortTitle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- COMPANY --- */}
            <div>
              <h4 className="mb-6 text-[20px] font-semibold text-white">
                COMPANY
              </h4>
              <ul className="space-y-4">
                <li>
                  <span className="text-[14px] text-white/90 transition-colors hover:text-[#ff6b00]">
                    Web Development
                  </span>
                </li>
                <li>
                  <span className="text-[14px] text-white/90 transition-colors hover:text-[#ff6b00]">
                    wordpress development
                  </span>
                </li>
                <li>
                  <span className="text-[14px] text-white/90 transition-colors hover:text-[#ff6b00]">
                    Digital Marketing Institutes
                  </span>
                </li>
                <li>
                  <span className="text-[14px] text-white/90 transition-colors hover:text-[#ff6b00]">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="text-[14px] text-white/90 transition-colors hover:text-[#ff6b00]">
                    Contact Us
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ===== RIGHT: BLUE CONTACT CARD ===== */}
          <div
            className="relative lg:col-span-4"
            style={{ filter: 'drop-shadow(-4px 6px 10px rgba(0,0,0,0.45))' }}
          >
            <div
              className="relative flex h-full min-h-[30px] flex-col justify-center bg-gradient-to-br from-[#0129FF] to-[#031143] p-8 pl-10"
              style={{
                clipPath:
                  'polygon(48px 0, 100% 0, 100% 100%, 0 100%, 0 48px)',
              }}
            >
              <h3 className="mb-7 text-[26px] font-bold text-white">
                Contact Us
              </h3>

              <ul className="space-y-5">
                {/* Address */}
                {address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <span className="text-[14px] font-normal leading-relaxed text-white">
                      {address}
                    </span>
                  </li>
                )}

                {/* Emails (multiple) */}
                {emails.length > 0 && (
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <div className="space-y-1 text-[14px] leading-relaxed text-white">
                      <span className="block">Email Us :</span>
                      {emails.map((e, i) => (
                        <a
                          key={i}
                          href={`mailto:${e}`}
                          className="block break-all hover:underline"
                        >
                          {e}
                        </a>
                      ))}
                    </div>
                  </li>
                )}

                {/* Phones (multiple) */}
                {phones.length > 0 && (
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <div className="space-y-1 text-[14px] leading-relaxed text-white">
                      <span className="block">Phone :</span>
                      {phones.map((p, i) => (
                        <a
                          key={i}
                          href={`tel:${digits(p)}`}
                          className="block hover:underline"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </li>
                )}

                {/* WhatsApps (multiple) */}
                {whatsapps.length > 0 && (
                  <li className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <div className="space-y-1 text-[14px] leading-relaxed text-white">
                      <span className="block">WhatsApp :</span>
                      {whatsapps.map((w, i) => (
                        <a
                          key={i}
                          href={`https://wa.me/${digits(w)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:underline"
                        >
                          {w}
                        </a>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-white/10 px-6 py-5 md:flex-row md:justify-between lg:px-10">
          <p className="text-center text-[13px] text-gray-300">
            © {new Date().getFullYear()}{' '}
            {siteConfig.name ?? 'Wisdom Marketing-Digital Marketing'} | All
            rights reserved
          </p>
             <div className="flex flex-wrap items-center justify-center gap-6">
  <div className="flex items-center gap-2 text-sm text-white">
    <img height={28} width={28} src="/badge/google-rating.webp" alt="Google rating" />
    <span>4.5 rating</span>
  </div>
  <div className="flex items-center gap-2 text-sm text-white">
    <img height={28} width={28} src="/badge/goodform-rating.webp" alt="GoodFirms rating" />
    <span>4.2 rating</span>
  </div>
  <div className="flex items-center gap-2 text-sm text-white">
    <img height={28} width={28} src="/badge/clutch-rating.webp" alt="Clutch rating" />
    <span>4.5 rating</span>
  </div>
</div>
          <div className="flex items-center gap-3">
            {[
              { Icon: Linkedin, href: settings?.socialLinks?.linkedin, label: 'LinkedIn' },
              { Icon: Twitter, href: settings?.socialLinks?.twitter, label: 'Twitter' },
              { Icon: Instagram, href: settings?.socialLinks?.instagram, label: 'Instagram' },
              { Icon: Facebook, href: settings?.socialLinks?.facebook, label: 'Facebook' },
            ]
              .filter((s) => s.href)
              .map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
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