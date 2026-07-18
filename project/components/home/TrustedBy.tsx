// import { trustedBrands } from '@/lib/site-data';

// export default function TrustedBy() {
//   return (
//     <section className="border-b border-border bg-white py-12">
//       <div className="container mx-auto px-4">
//         <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
//           Trusted by leading brands across industries
//         </p>
//         <div className="relative overflow-hidden">
//           <div className="flex animate-marquee items-center gap-16">
//             {[...trustedBrands, ...trustedBrands].map((brand, i) => (
//               <div
//                 key={i}
//                 className="flex-shrink-0 text-2xl font-bold text-brand/30 transition-colors hover:text-brand/60"
//               >
//                 {brand}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function TrustedBy() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${API_URL}/api/clients?limit=50`);
        const data = await res.json();
        
        if (data.success && data.data) {
          const sortedClients = data.data.sort((a: Client, b: Client) => 
            (a.sortOrder || 0) - (b.sortOrder || 0)
          );
          setClients(sortedClients);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clients:', error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <section className="border-b border-border bg-white py-16">
        <div className="container mx-auto px-4">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by leading brands across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex-shrink-0">
                <div className="h-14 w-36 animate-pulse rounded-lg bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (clients.length === 0) return null;

  return (
    <section className="border-b border-border bg-white py-16">
      <div className="container mx-auto px-4">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by leading brands across industries
        </p>
        
        {/* Desktop: Marquee Animation */}
        <div className="relative hidden md:block overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>
          
          <div className="flex animate-marquee items-center gap-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client._id}-${index}`}
                className="group flex-shrink-0"
              >
                <div className="relative h-14 w-36 transition-transform duration-300 hover:scale-110">
                  <Image
                    src={client.logo.secure_url}
                    alt={client.companyName}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 120px, 144px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Static Grid */}
        <div className="grid grid-cols-2 gap-8 md:hidden">
          {clients.map((client) => (
            <div
              key={client._id}
              className="flex items-center justify-center"
            >
              <div className="relative h-12 w-32">
                <Image
                  src={client.logo.secure_url}
                  alt={client.companyName}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 120px, 144px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}