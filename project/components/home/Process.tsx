


"use client";

import SectionHeading from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { processSteps } from "@/lib/site-data";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Process() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Process"
          title="A Proven Path to Growth"
          description="We do not guess. We follow a battle-tested process that has delivered results for 500+ brands across 30+ industries."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-glow">

                    <DotLottieReact
                      src={step.animation}
                      autoplay
                      loop
                      className="h-full w-full"
                    />

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-electric text-xs font-bold text-white">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}