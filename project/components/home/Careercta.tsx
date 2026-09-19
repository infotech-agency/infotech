// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import SectionHeading from '@/components/common/SectionHeading';
// import { Reveal } from '@/components/common/Reveal';
// import HangingIdCard from '../ui/hanging-id-card';


// export default function CareersCta() {
//   return (
//     <section className="bg-[#6BAA44] py-20 lg:py-28">
//       <div className="container mx-auto px-4">
//         {/* Hanging ID card visual */}
//         <Reveal>
//           <div className="flex items-center justify-center p-20">
//             <HangingIdCard
//               name="John Doe"
//               role="UI Developer"
//               badgeId="LW-2025"
//               accentColor="#173eff"
//               ropeLength={90}
//             />
//           </div>
//         </Reveal>

//         <SectionHeading
//           eyebrow="Careers"
//           title="Want to Join Our Team?"
//           description="We're always looking for curious, driven people to grow with us. Check out our current openings and find where you fit."
//         />

//         <Reveal>
//           <div className="mt-10 flex justify-center">
//             <Link
//               href="/careers"
//               className="group inline-flex items-center gap-2  bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-premium transition-all hover:-translate-y-0.5 hover:bg-brand/90 hover:shadow-premium-lg"
//             >
//               Check Out Openings
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import HangingIdCard from '../ui/hanging-id-card';

export default function CareersCta() {
  return (
    <section className="relative overflow-hidden bg-[#6BAA44] py-20 lg:py-28">
      {/* ===== Background SVG Pattern ===== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 "
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect fill="#11aa44" width="200" height="200" />
          <g
            fill="none"
            stroke="#7F3"
            strokeWidth="1"
            strokeOpacity="0.2"
          >
            <rect x="-40" y="40" width="75" height="75" />
            <rect x="-35" y="45" width="65" height="65" />
            <rect x="-30" y="50" width="55" height="55" />
            <rect x="-25" y="55" width="45" height="45" />
            <rect x="-20" y="60" width="35" height="35" />
            <rect x="-15" y="65" width="25" height="25" />
            <rect x="-10" y="70" width="15" height="15" />
            <rect x="-5" y="75" width="5" height="5" />
            <rect width="35" height="35" />
            <rect x="5" y="5" width="25" height="25" />
            <rect x="10" y="10" width="15" height="15" />
            <rect x="15" y="15" width="5" height="5" />
            <rect x="40" width="75" height="75" />
            <rect x="45" y="5" width="65" height="65" />
            <rect x="50" y="10" width="55" height="55" />
            <rect x="55" y="15" width="45" height="45" />
            <rect x="60" y="20" width="35" height="35" />
            <rect x="65" y="25" width="25" height="25" />
            <rect x="70" y="30" width="15" height="15" />
            <rect x="75" y="35" width="5" height="5" />
            <rect x="40" y="80" width="35" height="35" />
            <rect x="45" y="85" width="25" height="25" />
            <rect x="50" y="90" width="15" height="15" />
            <rect x="55" y="95" width="5" height="5" />
            <rect x="120" y="-40" width="75" height="75" />
            <rect x="125" y="-35" width="65" height="65" />
            <rect x="130" y="-30" width="55" height="55" />
            <rect x="135" y="-25" width="45" height="45" />
            <rect x="140" y="-20" width="35" height="35" />
            <rect x="145" y="-15" width="25" height="25" />
            <rect x="150" y="-10" width="15" height="15" />
            <rect x="155" y="-5" width="5" height="5" />
            <rect x="120" y="40" width="35" height="35" />
            <rect x="125" y="45" width="25" height="25" />
            <rect x="130" y="50" width="15" height="15" />
            <rect x="135" y="55" width="5" height="5" />
            <rect y="120" width="75" height="75" />
            <rect x="5" y="125" width="65" height="65" />
            <rect x="10" y="130" width="55" height="55" />
            <rect x="15" y="135" width="45" height="45" />
            <rect x="20" y="140" width="35" height="35" />
            <rect x="25" y="145" width="25" height="25" />
            <rect x="30" y="150" width="15" height="15" />
            <rect x="35" y="155" width="5" height="5" />
            <rect x="200" y="120" width="75" height="75" />
            <rect x="40" y="200" width="75" height="75" />
            <rect x="80" y="80" width="75" height="75" />
            <rect x="85" y="85" width="65" height="65" />
            <rect x="90" y="90" width="55" height="55" />
            <rect x="95" y="95" width="45" height="45" />
            <rect x="100" y="100" width="35" height="35" />
            <rect x="105" y="105" width="25" height="25" />
            <rect x="110" y="110" width="15" height="15" />
            <rect x="115" y="115" width="5" height="5" />
            <rect x="80" y="160" width="35" height="35" />
            <rect x="85" y="165" width="25" height="25" />
            <rect x="90" y="170" width="15" height="15" />
            <rect x="95" y="175" width="5" height="5" />
            <rect x="120" y="160" width="75" height="75" />
            <rect x="125" y="165" width="65" height="65" />
            <rect x="130" y="170" width="55" height="55" />
            <rect x="135" y="175" width="45" height="45" />
            <rect x="140" y="180" width="35" height="35" />
            <rect x="145" y="185" width="25" height="25" />
            <rect x="150" y="190" width="15" height="15" />
            <rect x="155" y="195" width="5" height="5" />
            <rect x="160" y="40" width="75" height="75" />
            <rect x="165" y="45" width="65" height="65" />
            <rect x="170" y="50" width="55" height="55" />
            <rect x="175" y="55" width="45" height="45" />
            <rect x="180" y="60" width="35" height="35" />
            <rect x="185" y="65" width="25" height="25" />
            <rect x="190" y="70" width="15" height="15" />
            <rect x="195" y="75" width="5" height="5" />
            <rect x="160" y="120" width="35" height="35" />
            <rect x="165" y="125" width="25" height="25" />
            <rect x="170" y="130" width="15" height="15" />
            <rect x="175" y="135" width="5" height="5" />
            <rect x="200" y="200" width="35" height="35" />
            <rect x="200" width="35" height="35" />
            <rect y="200" width="35" height="35" />
          </g>
        </svg>
      </div>

      {/* ===== Content (z-10 so it stays above bg) ===== */}
      <div className="container relative z-10 mx-auto px-4">
        <Reveal>
          <div className="flex items-center justify-center p-20">
            <HangingIdCard
              name="John Doe"
              role="UI Developer"
              badgeId="LW-2025"
              accentColor="#173eff"
              ropeLength={90}
            />
          </div>
        </Reveal>

        <SectionHeading
          eyebrow="Careers"
          title="Want to Join Our Team?"
          description="We're always looking for curious, driven people to grow with us. Check out our current openings and find where you fit."
        />

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href="/careers"
              className="group inline-flex items-center gap-2 bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-premium transition-all hover:-translate-y-0.5 hover:bg-brand/90 hover:shadow-premium-lg"
            >
              Check Out Openings
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}