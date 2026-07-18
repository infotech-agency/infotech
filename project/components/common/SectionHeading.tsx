import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-wider',
            light
              ? 'bg-white/10 text-sky'
              : 'bg-gradient-primary-soft text-electric'
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-electric" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          'text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-brand'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            light ? 'text-sky/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
