// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { X, ArrowRight, Sparkles } from 'lucide-react';

// export default function AnnouncementBar() {
//   const [visible, setVisible] = useState(true);
//   if (!visible) return null;

//   return (
//     <div className="relative z-[60] flex items-center justify-center gap-3 bg-[#0F1C4C] px-4 py-2.5 text-white">
//       {/* Left accent stripe */}
//       <div className="absolute left-0 top-0 h-full w-1 bg-[#0868A0]" />

//       <Sparkles className="h-4 w-4 flex-shrink-0 text-[#0868A0]" />
//       <p className="text-center text-sm font-medium">
//         <span className="font-bold text-[#0868A0]">Limited Offer:</span>{' '}
//         Get a free SEO audit + growth roadmap worth ₹25,000 — no strings attached.{' '}
//         <Link
//           href="/contact"
//           className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:text-sky"
//         >
//           Claim Now <ArrowRight className="h-3 w-3" />
//         </Link>
//       </p>

//       <button
//         onClick={() => setVisible(false)}
//         aria-label="Close announcement"
//         className="ml-auto flex-shrink-0 text-white/70 transition-colors hover:text-white"
//       >
//         <X className="h-4 w-4" />
//       </button>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ArrowRight, AlertTriangle } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const Message = () => (
    <p className="mx-6 flex flex-shrink-0 items-center text-sm font-medium">
      <span className="font-bold text-[#0868A0]">Limited Offer: </span>{' '}
      Get a free SEO audit + growth roadmap worth ₹25,000 — no strings attached.{' '}
      <Link
        href="/contact"
        className="ml-1 inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:text-sky"
      >
        Claim Now <ArrowRight className="h-3 w-3" />
      </Link>
    </p>
  );

  return (
    <div className="relative z-[60] flex items-center bg-[#0F1C4C] py-2.5 text-white">
      {/* Left accent stripe */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#0868A0]" />

      {/* Static warning icon */}
      <div className="z-10 flex flex-shrink-0 items-center gap-2 bg-[#0F1C4C] pl-4 pr-3">
        <AlertTriangle className="h-4 w-4 flex-shrink-0 " />
      </div>

      {/* Scrolling text track */}
      <div className="relative flex flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          <Message />
          <Message />
        </div>
        <div className="flex w-max animate-marquee whitespace-nowrap" aria-hidden="true">
          <Message />
          <Message />
        </div>
      </div>

      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="z-10 ml-2 mr-4 flex-shrink-0 text-white/70 transition-colors hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}