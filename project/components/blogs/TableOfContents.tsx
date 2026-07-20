// 'use client';

// import { useState, useEffect } from 'react';
// import { cn } from '@/lib/utils';

// export default function TableOfContents({ headings }: { headings: string[] }) {
//   const [activeSection, setActiveSection] = useState('');
//   // const decodeHtml = (html: string) => {
//   // const txt = document.createElement('textarea');
//   // txt.innerHTML = html;
//   // return txt.value;
//   const decodeHtml = (html: string) => {
//   if (typeof window === "undefined") {
//     return html;
//   }

//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };
// };
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = headings.map((h) =>
//         h.toLowerCase().replace(/[^a-z0-9]+/g, '-')
//       );
//       for (const id of sections) {
//         const el = document.getElementById(id);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top >= 0 && rect.top <= 200) {
//             setActiveSection(id);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [headings]);

//   return (
//     <nav className="space-y-2">
//       {/* {headings.map((heading) => {
//         const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//         return (
//           <a
//             key={id}
//             href={`#${id}`}
//             className={cn(
//               'block rounded-lg px-3 py-2 text-sm transition-colors',
//               activeSection === id
//                 ? 'bg-electric/10 font-semibold text-electric'
//                 : 'text-muted-foreground hover:text-brand'
//             )}
//           >
//             {heading}
//           </a>
//         );
//       })} */}
//       {headings.map((heading) => {
//   const decoded = decodeHtml(heading);
//   const id = decoded.toLowerCase().replace(/[^a-z0-9]+/g, '-');

//   return (
//     <a
//       key={id}
//       href={`#${id}`}
//       className={cn(
//         'block rounded-lg px-3 py-2 text-sm transition-colors',
//         activeSection === id
//           ? 'bg-electric/10 font-semibold text-electric'
//           : 'text-muted-foreground hover:text-brand'
//       )}
//     >
//       {decoded}
//     </a>
//   );
// })}
//     </nav>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function TableOfContents({
  headings,
}: {
  headings: string[];
}) {
  const [activeSection, setActiveSection] = useState('');

  const decodeHtml = (html: string) => {
    if (typeof document === 'undefined') return html;

    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = headings.map((h) =>
        decodeHtml(h).toLowerCase().replace(/[^a-z0-9]+/g, '-')
      );

      for (const id of sections) {
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top >= 0 && rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  return (
    <nav className="space-y-2">
      {headings.map((heading) => {
        const decoded = decodeHtml(heading);
        const id = decoded.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        return (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              'block rounded-lg px-3 py-2 text-sm transition-colors',
              activeSection === id
                ? 'bg-electric/10 font-semibold text-electric'
                : 'text-muted-foreground hover:text-brand'
            )}
          >
            {decoded}
          </a>
        );
      })}
    </nav>
  );
}