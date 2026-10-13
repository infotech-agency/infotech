

'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { BASE_URL } from '@/utils/baseUrl';

interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  images: Array<{
    public_id: string;
    secure_url: string;
  }>;
  gallery: Array<{
    public_id: string;
    secure_url: string;
  }>;
  metaTitle: string;
  metaDescription: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

/** Blue -> mint -> green (sab sections me yahi gradient use ho raha hai) */
const GRADIENT =
  'linear-gradient(135deg, #2b8be0 0%, #6fdc9f 50%, #1fc46a 100%)';

const ALL = 'All';
const FALLBACK_CATEGORY = 'Digital Marketing';

// Category from industry (fallback agar industry khaali ho)
const getCategory = (cs: CaseStudy) =>
  cs.industry && cs.industry.trim() ? cs.industry.trim() : FALLBACK_CATEGORY;

// Image URL with fallback
const getImageUrl = (cs: CaseStudy) => {
  if (cs.images && cs.images.length > 0 && cs.images[0].secure_url) {
    return cs.images[0].secure_url;
  }
  return 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';
};

function Heading() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Case Studies
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-brand lg:text-4xl">
        See The Proof Behind Our Promises
      </h2>
    </div>
  );
}

export default function FeaturedCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(ALL);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        // limit badha diya taaki saari industries ke tabs ban sakein
        const response = await fetch(`${BASE_URL}/case-studies?status=published&limit=50`);
        const data = await response.json();

        if (data.success && data.data) {
          setCaseStudies(data.data);
        } else {
          setError('Failed to fetch case studies');
        }
      } catch (err) {
        console.error('Error fetching case studies:', err);
        setError('Failed to load case studies');
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  // Tabs: "All" + unique industries (count ke saath)
  const tabs = useMemo(() => {
    const counts = new Map<string, number>();
    caseStudies.forEach((cs) => {
      const cat = getCategory(cs);
      counts.set(cat, (counts.get(cat) || 0) + 1);
    });
    return [
      { name: ALL, count: caseStudies.length },
      ...Array.from(counts.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, count]) => ({ name, count })),
    ];
  }, [caseStudies]);

  const filtered = useMemo(
    () =>
      activeTab === ALL
        ? caseStudies
        : caseStudies.filter((cs) => getCategory(cs) === activeTab),
    [caseStudies, activeTab]
  );

  /* ---------- Loading ---------- */
  if (loading) {
    return (
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto h-4 w-28 animate-pulse rounded bg-gray-200"></div>
            <div className="mx-auto mt-4 h-10 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="mt-10 flex justify-center gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-24 animate-pulse rounded-full bg-gray-200" />
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-56 rounded-2xl bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 w-32 rounded-full bg-gray-200"></div>
                  <div className="mt-3 h-5 w-full rounded bg-gray-200"></div>
                  <div className="mt-2 h-5 w-2/3 rounded bg-gray-200"></div>
                  <div className="mt-5 h-10 w-40 rounded-full bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Error / Empty ---------- */
  if (error || caseStudies.length === 0) {
    return (
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <Heading />
          <div className="mt-14 text-center">
            <p className="text-muted-foreground">
              {error || 'No case studies available at the moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Main ---------- */
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <Heading />

        {/* Industry tabs */}
        <div className="mt-10 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filter case studies by industry"
            className="mx-auto flex w-max min-w-full justify-start gap-3 sm:w-auto sm:min-w-0 sm:flex-wrap sm:justify-center"
          >
            {tabs.map((tab) => {
              const isActive = tab.name === activeTab;
              return (
                <button
                  key={tab.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.name)}
                  style={isActive ? { backgroundImage: GRADIENT } : undefined}
                  className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-lg shadow-[#2b8be0]/30 [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]'
                      : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:text-[#2b8be0] hover:ring-[#2b8be0]/40'
                  }`}
                >
                  {tab.name}
                  <span
                    className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* key change hone pe cards animate hoke dobara aate hain */}
        <Stagger
          key={activeTab}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {filtered.map((cs) => (
            <StaggerItem key={cs._id}>
              <div className="group h-full overflow-hidden rounded border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                {/* <div className="relative h-56 overflow-hidden rounded">
                  <Image
                    src={getImageUrl(cs)}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div> */}
                <div className="overflow-hidden rounded-t">
  <Image
    src={getImageUrl(cs)}
    alt={cs.title}
    width={0}
    height={0}
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="block h-auto w-full"
  />
</div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-600">
                    {getCategory(cs)}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-brand">
                    {cs.title}
                  </h3>
                   <p className="mt-4 text-sm">
                    {cs.result.split("").splice(0,100)}.....
                  </p>
                  <Link
                    href={`/our-work/case-studies/${cs.slug}`}
                    className="mt-5 inline-flex items-center gap-2 rounded bg-green-600 py-2.5 pl-5 pr-2 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                  >
                    View Case Study
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}