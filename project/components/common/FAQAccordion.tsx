'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({
  items,
  light = false,
}: {
  items: FAQItem[];
  light?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div
            className={cn(
              'overflow-hidden rounded-2xl border transition-all',
              light
                ? 'border-white/10 bg-white/5'
                : 'border-border bg-white shadow-premium',
              open === i && (light ? 'bg-white/10' : 'shadow-premium-lg')
            )}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span
                className={cn(
                  'text-base font-semibold sm:text-lg',
                  light ? 'text-white' : 'text-brand'
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors',
                  open === i ? 'bg-electric text-white' : 'bg-sky text-brand'
                )}
              >
                {open === i ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300',
                open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    'px-6 pb-5 text-base leading-relaxed',
                    light ? 'text-sky/70' : 'text-muted-foreground'
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
