

// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { BASE_URL } from '@/utils/baseUrl';

// interface Client {
//   _id: string;
//   companyName: string;
//   logo: {
//     public_id: string;
//     secure_url: string;
//   };
//   websiteUrl: string;
//   sortOrder: number;
// }

// export default function TrustedBy() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
//         const res = await fetch(`${BASE_URL}/clients?limit=50`);
//         const data = await res.json();

//         if (data.success && data.data) {
//           const sortedClients = data.data.sort((a: Client, b: Client) =>
//             (a.sortOrder || 0) - (b.sortOrder || 0)
//           );
//           setClients(sortedClients);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching clients:', error);
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   if (loading) {
//     return (
//       <section className="border-b border-border bg-white py-16">
//         <div className="container mx-auto px-4">
//           <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
//             Trusted by leading brands across industries
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="flex-shrink-0">
//                 <div className="h-14 w-36 animate-pulse rounded-2xl bg-gray-200"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (clients.length === 0) return null;

//   return (
//     <section className="relative overflow-hidden border-b border-border bg-white py-16">
//       {/* Optional: soft colored blobs behind the glass for a nicer frosted effect */}
//       <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#0868A0]/10 blur-3xl" />
//       <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#6BAA44]/10 blur-3xl" />

//       <div className="container relative mx-auto px-4">
//         <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
//           Trusted by leading brands across industries
//         </p>

//         {/* Desktop: Marquee Animation */}
//         <div className="relative hidden overflow-hidden md:block">
//           {/* Gradient overlays */}
//           <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>
//           <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

//           <div className="flex animate-marquee items-center gap-8">
//             {[...clients, ...clients].map((client, index) => (
//               <div
//                 key={`${client._id}-${index}`}
//                 className="group flex-shrink-0"
//               >
//                 {/* ===== Glassmorphism Card ===== */}
//                 <div
//                   className="relative flex h-20 w-44 items-center justify-center rounded-2xl
//                              border border-white/40 bg-white/30 backdrop-blur-md
//                              shadow-[0_8px_24px_-8px_rgba(15,28,76,0.15)]
//                              ring-1 ring-inset ring-white/30
//                              transition-all duration-300
//                              hover:-translate-y-1 hover:bg-white/50 hover:shadow-[0_12px_32px_-8px_rgba(15,28,76,0.25)]"
//                 >
//                   {/* subtle inner highlight */}
//                   <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-transparent" />

//                   <div className="relative h-12 w-32">
//                     <Image
//                       src={client.logo.secure_url}
//                       alt={client.companyName}
//                       fill
//                       className="object-contain"
//                       sizes="(max-width: 768px) 120px, 144px"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile: Static Grid */}
//         <div className="grid grid-cols-2 gap-4 md:hidden">
//           {clients.map((client) => (
//             <div
//               key={client._id}
//               className="flex items-center justify-center"
//             >
//               {/* ===== Glassmorphism Card (Mobile) ===== */}
//               <div
//                 className="relative flex h-20 w-full items-center justify-center rounded-2xl
//                            border border-white/40 bg-white/30 backdrop-blur-md
//                            shadow-[0_8px_24px_-8px_rgba(15,28,76,0.15)]
//                            ring-1 ring-inset ring-white/30"
//               >
//                 <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-transparent" />

//                 <div className="relative h-12 w-28">
//                   <Image
//                     src={client.logo.secure_url}
//                     alt={client.companyName}
//                     fill
//                     className="object-contain"
//                     sizes="(max-width: 768px) 120px, 144px"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '@/utils/baseUrl';

interface Client {
  _id: string;
  companyName: string;
  logo: {
    public_id: string;
    secure_url: string;
  };
  websiteUrl: string;
  sortOrder: number;
}

const PER_GRID = 3; // logos inside one grid box

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const gridBox =
  'grid grid-cols-3 items-center gap-2 border-b border-r border-[#bdb9b1] bg-white px-3 py-6 sm:gap-4 sm:px-6 md:py-8';

const Heading = () => (
  <div className="mb-10 text-center">
    <h2 className="text-2xl  uppercase tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
      Our Precious Clients
    </h2>
    <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
      Our integrated model leads to the efficiency and transparency of our work.
      <br className="hidden sm:block" /> Below are some of our remarkable clients.
    </p>
  </div>
);

export default function TrustedBy() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${BASE_URL}/clients?limit=50`);
        const data = await res.json();

        if (data.success && data.data) {
          const sortedClients = data.data.sort(
            (a: Client, b: Client) => (a.sortOrder || 0) - (b.sortOrder || 0)
          );
          setClients(sortedClients);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <Heading />
          <div className="mx-auto max-w-5xl border-l border-t border-[#bdb9b1]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={gridBox}>
                  {Array.from({ length: PER_GRID }).map((__, j) => (
                    <div key={j} className="mx-auto h-10 w-full max-w-[110px] animate-pulse rounded bg-gray-200" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (clients.length === 0) return null;

  const groups = chunk(clients, PER_GRID);
  // Keep an even number of grids so the last desktop row stays closed.
  const padGrid = groups.length % 2 === 1;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <Heading />

        <div className="mx-auto max-w-5xl border-l border-t border-[#bdb9b1]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {groups.map((group, gi) => (
              <div key={gi} className={gridBox}>
                {group.map((client) => {
                  const logo = (
                    <div className="relative mx-auto h-10 w-full max-w-[130px] sm:h-12 md:h-14">
                      <Image
                        src={client.logo.secure_url}
                        alt={client.companyName}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100px, 140px"
                      />
                    </div>
                  );

                  return client.websiteUrl ? (
                    <Link
                      key={client._id}
                      href={client.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={client.companyName}
                      className="block transition-transform duration-300 hover:scale-105"
                    >
                      {logo}
                    </Link>
                  ) : (
                    <div key={client._id}>{logo}</div>
                  );
                })}
              </div>
            ))}

            {padGrid && <div className={`${gridBox} hidden md:block`} />}
          </div>
        </div>
      </div>
    </section>
  );
}