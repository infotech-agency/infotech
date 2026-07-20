// // import SectionHeading from '@/components/common/SectionHeading';
// // import FAQAccordion from '@/components/common/FAQAccordion';
// // import { homeFaqs } from '@/lib/site-data';

// // export default function HomeFAQ() {
// //   return (
// //     <section className="bg-sky py-20 lg:py-28">
// //       <div className="container mx-auto px-4">
// //         <SectionHeading
// //           eyebrow="FAQ"
// //           title="Frequently Asked Questions"
// //           description="Everything you need to know about working with Infotech Agency. Still have questions? Reach out — we are happy to help."
// //         />
// //         <div className="mt-14">
// //           <FAQAccordion items={homeFaqs} />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { useState, useEffect } from 'react';
// import SectionHeading from '@/components/common/SectionHeading';
// import FAQAccordion from '@/components/common/FAQAccordion';

// // API URL
// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// interface FAQ {
//   _id: string;
//   question: string;
//   answer: string;
//   category: string;
//   sortOrder: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export default function HomeFAQ() {
//   const [faqs, setFaqs] = useState<FAQ[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchFaqs = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${API_URL}/api/faqs?limit=20`);
//         const data = await response.json();
        
//         if (data.success && data.data) {
//           // Sort by sortOrder if available
//           const sortedFaqs = data.data.sort((a: FAQ, b: FAQ) => {
//             return (a.sortOrder || 0) - (b.sortOrder || 0);
//           });
//           setFaqs(sortedFaqs);
//         } else {
//           setError('Failed to fetch FAQs');
//         }
//       } catch (err) {
//         console.error('Error fetching FAQs:', err);
//         setError('Failed to load FAQs');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFaqs();
//   }, []);

//   // Transform API FAQ format to match FAQAccordion expected format
//   const transformFaqs = (apiFaqs: FAQ[]) => {
//     return apiFaqs.map(faq => ({
//       question: faq.question,
//       answer: faq.answer,
//     }));
//   };

//   if (loading) {
//     return (
//       <section className="bg-sky py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             eyebrow="FAQ"
//             title="Frequently Asked Questions"
//             description="Everything you need to know about working with Infotech Agency. Still have questions? Reach out — we are happy to help."
//           />
//           <div className="mt-14 space-y-4">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div key={i} className="animate-pulse rounded-2xl border border-border bg-white p-6 shadow-premium">
//                 <div className="flex items-center justify-between">
//                   <div className="h-6 w-3/4 rounded bg-gray-200"></div>
//                   <div className="h-5 w-5 rounded bg-gray-200"></div>
//                 </div>
//                 <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>
//                 <div className="mt-2 h-4 w-2/3 rounded bg-gray-200"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error || faqs.length === 0) {
//     return (
//       <section className="bg-sky py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             eyebrow="FAQ"
//             title="Frequently Asked Questions"
//             description="Everything you need to know about working with Infotech Agency. Still have questions? Reach out — we are happy to help."
//           />
//           <div className="mt-14 text-center">
//             <p className="text-muted-foreground">
//               {error || 'No FAQs available at the moment.'}
//             </p>
//             <div className="mt-6">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-ocean px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ocean-dark"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-sky py-20 lg:py-28">
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           eyebrow="FAQ"
//           title="Frequently Asked Questions"
//           description="Everything you need to know about working with Infotech Agency. Still have questions? Reach out — we are happy to help."
//         />
//         <div className="mt-14">
//           <FAQAccordion items={transformFaqs(faqs)} />
//         </div>
        
//         {/* Optional: Show categories or additional info */}
//         {faqs.length > 0 && (
//           <div className="mt-8 text-center">
//             <p className="text-sm text-muted-foreground">
//               Can't find what you're looking for?{' '}
//               <a href="/contact" className="font-semibold text-electric hover:underline">
//                 Contact our team
//               </a>
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect, type ReactNode } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import { BASE_URL } from '@/utils/baseUrl';

// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface FAQ {
  _id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

// Shared shell so the background SVG only has to be defined once and stays
// identical across the loading / error / success states below.
function FAQSectionShell({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-sky py-20 lg:py-28">
      {/* Background SVG layer — swap the src below for your own artwork.
          Sits behind everything (z-0); content is pinned above it (z-10). */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/faq.svg" // 👈 apna SVG path yahan daalo
          alt=""
          className="h-full w-full object-cover opacity-100"
        />
        {/* Optional soft wash so accordion text stays fully readable
            over a busy or high-contrast SVG. Tweak/remove as needed. */}
        <div className="absolute inset-0 bg-sky/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  );
}

export default function HomeFAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/faqs?limit=20`);
        const data = await response.json();

        if (data.success && data.data) {
          // Sort by sortOrder if available
          const sortedFaqs = data.data.sort((a: FAQ, b: FAQ) => {
            return (a.sortOrder || 0) - (b.sortOrder || 0);
          });
          setFaqs(sortedFaqs);
        } else {
          setError('Failed to fetch FAQs');
        }
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQs');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // Transform API FAQ format to match FAQAccordion expected format
  const transformFaqs = (apiFaqs: FAQ[]) => {
    return apiFaqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }));
  };

  if (loading) {
    return (
      <FAQSectionShell>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with Infotech Agency. Still have questions? Reach out — we are happy to help."
        />
        <div className="mt-14 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl border border-border bg-white p-6 shadow-premium"
            >
              <div className="flex items-center justify-between">
                <div className="h-6 w-3/4 rounded bg-gray-200"></div>
                <div className="h-5 w-5 rounded bg-gray-200"></div>
              </div>
              <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>
              <div className="mt-2 h-4 w-2/3 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      </FAQSectionShell>
    );
  }

  if (error || faqs.length === 0) {
    return (
      <FAQSectionShell>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with Infotech Agency. Still have questions? Reach out — we are happy to help."
        />
        <div className="mt-14 text-center">
          <p className="text-muted-foreground">
            {error || 'No FAQs available at the moment.'}
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-ocean px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ocean-dark"
            >
              Contact Us
            </a>
          </div>
        </div>
      </FAQSectionShell>
    );
  }

  return (
    <FAQSectionShell>
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with Infotech Agency. Still have questions? Reach out — we are happy to help."
      />
      <div className="mt-14">
        <FAQAccordion items={transformFaqs(faqs)} />
      </div>

      {/* Optional: Show categories or additional info */}
      {faqs.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="/contact" className="font-semibold text-electric hover:underline">
              Contact our team
            </a>
          </p>
        </div>
      )}
    </FAQSectionShell>
  );
}