'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import { BASE_URL } from '@/utils/baseUrl';

interface FaqCategory {
  _id: string;
  name: string;
  slug: string;
}

interface FAQ {
  _id: string;
  question: string;
  answer: string;
  sortOrder: number;
}

interface GroupedFaq {
  category: FaqCategory;
  faqs: FAQ[];
}

const HEADING = {
  eyebrow: 'FAQ',
  title: 'Frequently Asked Questions',
  description:
    'Everything you need to know about working with Infotech Agency. Still have questions? Reach out — we are happy to help.',
};

// function FAQSectionShell({ children }: { children: ReactNode }) {
//   return (
//     <section className="relative overflow-hidden bg-sky py-20 lg:py-28">
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <img
//           src="/images/faq.svg"
//           alt=""
//           className="h-full w-full object-cover opacity-100"
//         />
//         <div className="absolute inset-0 bg-sky/80" />
//       </div>
//       <div className="container relative z-10 mx-auto px-4">{children}</div>
//     </section>
//   );
// }

/** 4-point sparkle star */
function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0 C12.8 6.5 17.5 11.2 24 12 C17.5 12.8 12.8 17.5 12 24 C11.2 17.5 6.5 12.8 0 12 C6.5 11.2 11.2 6.5 12 0 Z" />
    </svg>
  );
}

function FAQSectionShell({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2b8be0] via-[#a8e8dc] to-[#3fd58f] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* big soft circles */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
        <div className="absolute -bottom-28 left-1/4 h-80 w-80 rounded-full bg-[#0868A0]/15 blur-3xl" />

        {/* ring circles */}
        <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full border border-white/50" />
        <div className="absolute bottom-[14%] right-[10%] h-40 w-40 rounded-full border border-white/40" />
        <div className="absolute right-[28%] top-[8%] h-3 w-3 rounded-full bg-white/70" />
        <div className="absolute bottom-[26%] left-[14%] h-4 w-4 rounded-full bg-white/60" />
        <div className="absolute left-[46%] top-[40%] h-2 w-2 rounded-full bg-white/70" />

        {/* sparkles */}
        <Sparkle className="absolute left-[6%] top-[10%] h-8 w-8 text-white/90" />
        <Sparkle className="absolute right-[8%] top-[14%] h-12 w-12 text-white/80" />
        <Sparkle className="absolute left-[22%] bottom-[12%] h-6 w-6 text-white/80" />
        <Sparkle className="absolute right-[22%] bottom-[22%] h-8 w-8 text-white/90" />
        <Sparkle className="absolute left-[50%] top-[6%] h-5 w-5 text-white/70" />
        <Sparkle className="absolute right-[4%] bottom-[8%] h-5 w-5 text-white/70" />
      </div>
      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  );
}

/** Main white box that wraps everything */
function FAQBox({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
      {children}
    </div>
  );
}

export default function HomeFAQ() {
  const [groups, setGroups] = useState<GroupedFaq[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/faqs/grouped`);
        const data = await response.json();

        if (data.success && data.data) {
          // Sirf wahi categories rakho jinke andar kam se kam 1 FAQ hai
          const nonEmpty = data.data.filter((g: GroupedFaq) => g.faqs.length > 0);
          setGroups(nonEmpty);
          if (nonEmpty.length > 0) setActiveCategoryId(nonEmpty[0].category._id);
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

  const activeGroup = groups.find((g) => g.category._id === activeCategoryId);

  const transformFaqs = (apiFaqs: FAQ[]) =>
    apiFaqs
      .slice()
      .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
      .map((faq) => ({ question: faq.question, answer: faq.answer }));

  /* ---------- Loading ---------- */
  if (loading) {
    return (
      <FAQSectionShell>
        <SectionHeading {...HEADING} />
        <FAQBox>
          <div className="grid lg:grid-cols-[280px_1fr]">
            <div className="flex gap-2 border-b border-slate-200 bg-slate-50 p-4 lg:flex-col lg:border-b-0 lg:border-r lg:p-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-11 w-32 animate-pulse rounded-xl bg-slate-200 lg:w-full" />
              ))}
            </div>
            <div className="space-y-3 p-6 lg:p-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-pulse rounded-xl border border-slate-200 p-5">
                  <div className="h-5 w-3/4 rounded bg-slate-200" />
                  <div className="mt-3 h-3 w-full rounded bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </FAQBox>
      </FAQSectionShell>
    );
  }

  /* ---------- Error / Empty ---------- */
  if (error || groups.length === 0) {
    return (
      <FAQSectionShell>
        <SectionHeading {...HEADING} />
        <FAQBox>
          <div className="px-6 py-14 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
              <HelpCircle className="h-7 w-7 text-slate-900" />
            </div>
            <p className="text-muted-foreground">
              {error || 'No FAQs available at the moment.'}
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ocean px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ocean-dark"
            >
              Contact Us
            </a>
          </div>
        </FAQBox>
      </FAQSectionShell>
    );
  }

  /* ---------- Main ---------- */
  return (
    <FAQSectionShell>
      <SectionHeading {...HEADING} />

      <FAQBox>
        <div className="grid lg:grid-cols-[280px_1fr]">
          {/* LEFT — category sidebar */}
          <aside className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r lg:p-6">
            <p className="mb-3 hidden text-xs font-semibold uppercase tracking-wider text-slate-900 lg:block">
              Categories
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {groups.map((g) => {
                const isActive = g.category._id === activeCategoryId;
                return (
                  <button
                    key={g.category._id}
                    onClick={() => setActiveCategoryId(g.category._id)}
                    className={`flex shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-300 lg:whitespace-normal ${
                      isActive
                        ? 'bg-ocean text-white shadow-md'
                        : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-ocean/5 hover:text-ocean hover:ring-ocean/30'
                    }`}
                  >
                    <span>{g.category.name}</span>
                    <span
                      className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-900'
                      }`}
                    >
                      {g.faqs.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT — active category's FAQs */}
          <div className="p-6 lg:p-8">
            {activeGroup && (
              <>
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <h3 className="text-xl font-bold text-brand">
                      {activeGroup.category.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-900">
                      {activeGroup.faqs.length}{' '}
                      {activeGroup.faqs.length === 1 ? 'question' : 'questions'}
                    </p>
                  </div>
                  <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-ocean/10 sm:flex">
                    <HelpCircle className="h-5 w-5 text-ocean" />
                  </div>
                </div>

                {/* key resets accordion state when category changes */}
                <FAQAccordion
                  key={activeGroup.category._id}
                  items={transformFaqs(activeGroup.faqs)}
                />
              </>
            )}
          </div>
        </div>

        {/* Bottom contact strip */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-slate-50 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm text-slate-900">
            Can&apos;t find what you&apos;re looking for? Our team is happy to help.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ocean-dark"
          >
            Contact our team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </FAQBox>
    </FAQSectionShell>
  );
}