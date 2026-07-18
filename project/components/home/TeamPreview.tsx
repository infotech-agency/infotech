import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { teamMembers } from '@/lib/site-data';

export default function TeamPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Team"
            title="Meet the Experts Behind Your Growth"
            description="Senior strategists, not junior account managers. Every client is led by experts with 10+ years of experience."
            className="lg:mb-0"
          />
          <Link
            href="/about-us"
            className="inline-flex flex-shrink-0 items-center gap-2 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-ocean hover:border-ocean hover:text-white"
          >
            Meet the Full Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-sky/90">{member.bio}</p>
                    <div className="mt-3 flex gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                        <Linkedin className="h-4 w-4 text-white" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-brand">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-electric">
                    {member.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
