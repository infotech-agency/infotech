import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { services } from '@/lib/services';

export default function ServicesGrid() {
  return (
    <section className="bg-sky py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Services"
          title="Full-Service Digital Marketing Under One Roof"
          description="From SEO to social media, we cover every channel your brand needs to grow — all managed by senior specialists, all tied to revenue."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <StaggerItem key={svc.slug}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.shortTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur">
                      <Icon className="h-6 w-6 text-electric" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand transition-colors group-hover:text-electric">
                      {svc.shortTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {svc.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-electric">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
