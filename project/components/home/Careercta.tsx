import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import HangingIdCard from '../ui/hanging-id-card';


export default function CareersCta() {
  return (
    <section className="bg-sky py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Hanging ID card visual */}
        <Reveal>
          <div className="flex items-center justify-center p-20">
            <HangingIdCard
              name="John Doe"
              role="UI Developer"
              badgeId="LW-2025"
              accentColor="#173eff"
              ropeLength={90}
            />
          </div>
        </Reveal>

        <SectionHeading
          eyebrow="Careers"
          title="Want to Join Our Team?"
          description="We're always looking for curious, driven people to grow with us. Check out our current openings and find where you fit."
        />

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href="/careers"
              className="group inline-flex items-center gap-2  bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-premium transition-all hover:-translate-y-0.5 hover:bg-brand/90 hover:shadow-premium-lg"
            >
              Check Out Openings
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}