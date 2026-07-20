
import Image from 'next/image';
import {
  CheckCircle2, TrendingUp, Users, Target, BarChart3, 
  Zap, Shield, Award, Star, ShieldCheck, Globe, Sparkles, ArrowUpRight,
  type LucideIcon
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTABanner from '@/components/common/CTABanner';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';

// Define the Industry interface
interface Industry {
  _id: string;
  title: string;
  slug: string;
  banner: { public_id: string; secure_url: string };
  overview: string;
  content: string;
  benefits: string[];
  faq: Array<{ question: string; answer: string }>;
  cta: { heading: string; subheading: string; buttonText: string; buttonLink: string };
  metaTitle: string;
  metaDescription: string;
  schemaJson: string;
  status: string;
  gallery: Array<{ public_id: string; secure_url: string }>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function getIndustryIcon(title: string) {
  const name = title.toLowerCase();
  if (name.includes('ecommerce') || name.includes('e-commerce')) return BarChart3;
  if (name.includes('healthcare') || name.includes('medical') || name.includes('health')) return Users;
  if (name.includes('real estate') || name.includes('property')) return Target;
  if (name.includes('tech') || name.includes('software')) return Zap;
  if (name.includes('finance') || name.includes('bank')) return Shield;
  if (name.includes('education') || name.includes('learning')) return Award;
  return TrendingUp;
}

function getIndustryColors(title: string) {
  const name = title.toLowerCase();
  if (name.includes('ecommerce') || name.includes('e-commerce')) {
    return { primary: 'from-blue-600 to-indigo-600', light: 'bg-blue-50', text: 'text-blue-600' };
  }
  if (name.includes('healthcare') || name.includes('medical')) {
    return { primary: 'from-emerald-600 to-teal-600', light: 'bg-emerald-50', text: 'text-emerald-600' };
  }
  if (name.includes('real estate') || name.includes('property')) {
    return { primary: 'from-amber-600 to-orange-600', light: 'bg-amber-50', text: 'text-amber-600' };
  }
  if (name.includes('tech') || name.includes('software')) {
    return { primary: 'from-purple-600 to-pink-600', light: 'bg-purple-50', text: 'text-purple-600' };
  }
  return { primary: 'from-blue-600 to-cyan-600', light: 'bg-blue-50', text: 'text-blue-600' };
}

export default function IndustryPage({ industry }: { industry: Industry }) {
  const colors = getIndustryColors(industry.title);
  const validBenefits = industry.benefits?.filter(b => b && b.trim() !== '') || [];
  const validFaqs = industry.faq?.filter(f => f.question && f.answer && f.question.trim() !== '') || [];

  const benefitIcons: LucideIcon[] = [
    ShieldCheck, Zap, Target, TrendingUp, Users, Award, Globe, Sparkles, CheckCircle2
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        breadcrumb={`${industry.title}`}
        title={`Digital Marketing For ${industry.title}`}
        description={industry.overview || `Expert digital marketing services tailored for ${industry.title} industry.`}
        image={industry.banner?.secure_url || ''}
      />

      {/* Main Content & Industry Insights */}
      {industry.content && (
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <SectionHeading
              eyebrow="Industry Insights"
              title={`Understanding ${industry.title}`}
              description="Comprehensive insights and expert analysis tailored for your market growth."
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
              {/* Left Side: Image + Key Facts Panel */}
              {industry.banner?.secure_url && (
                <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                  <Reveal direction="right">
                    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      {/* <div className="relative aspect-[4/3] sm:aspect-square">
                        <Image
                          src={industry.gallery[0]?.secure_url || industry.banner.secure_url}
                          alt={industry.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          priority
                        />
                      </div> */}
                      <div className="bg-red-500 p-5 relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[500px]">
  <Image
    src={industry.gallery[0]?.secure_url || industry.banner?.secure_url || '/placeholder-image.jpg'}
    alt={industry.title}
    fill
    className="object-cover object-center"
    sizes="100vw"
    priority
  />
</div>
                    </div>

                    {/* Corporate accent strip */}
                    <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${colors.primary}`} />
                        <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                          {industry.title} Focus
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Data-driven insights curated for decision makers in this sector.
                      </p>
                    </div>
                  </Reveal>
                </div>
              )}

              {/* Right Side: Structured Content Card */}
              {/* <div className={industry.banner?.secure_url ? "lg:col-span-8" : "lg:col-span-12 max-w-4xl mx-auto"}> */}
                <div className={industry.banner?.secure_url ? "lg:col-span-8 min-w-0" : "lg:col-span-12 max-w-4xl mx-auto min-w-0"}>
                <Reveal direction="left">
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    {/* Header bar */}
                    <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-6 sm:px-8 py-5">
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${colors.primary}`} />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Market Analysis
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <div className="w-full overflow-x-auto">
                        <div className="min-w-0">
                          <div
                            className="prose prose-lg max-w-none
                              prose-headings:text-slate-900 prose-headings:font-bold
                              prose-h1:text-2xl prose-h1:mb-4 prose-h1:break-words
                              prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:break-words prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100
                              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-h3:break-words
                              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-p:break-words
                              prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-4 prose-ul:break-words
                              prose-ol:list-decimal prose-ol:pl-5 prose-ol:mb-4 prose-ol:break-words
                              prose-li:text-slate-600 prose-li:mb-1 prose-li:break-words
                              prose-strong:text-slate-900 prose-strong:font-semibold
                              prose-a:text-blue-700 hover:prose-a:underline prose-a:break-words prose-a:font-medium
                              prose-img:rounded-lg prose-img:border prose-img:border-slate-200 prose-img:my-6
                              prose-blockquote:border-l-4 prose-blockquote:border-slate-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-500
                              prose-table:w-full prose-table:border-collapse prose-table:text-sm
                              prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-wide prose-th:text-slate-700
                              prose-td:border prose-td:border-slate-100 prose-td:p-3 prose-td:text-sm prose-td:text-slate-600
                              prose-hr:my-8 prose-hr:border-slate-100"
                            dangerouslySetInnerHTML={{ __html: industry.content }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {validBenefits.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Key Benefits"
              title={`Why Choose ${industry.title} Solutions`}
              description="Discover the competitive advantages of working with industry experts."
            />
            <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {validBenefits.map((benefit, index) => {
                const Icon = benefitIcons[index % benefitIcons.length];
                return (
                  <StaggerItem key={index}>
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                      {/* Hover Top Accent */}
                      <div className={`absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r ${colors.primary} transition-all duration-500 group-hover:w-1/2`}></div>
                      
                      <div className="relative z-10 flex flex-col items-start">
                        {/* Icon Badge */}
                        <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors.primary} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <p className="text-base font-medium text-brand leading-relaxed">{benefit}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      )}

      {/* Industry Statistics Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-24">
        {/* Background grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { metric: '12+', label: 'Years of Experience' },
              { metric: '500+', label: 'Projects Completed' },
              { metric: '98%', label: 'Client Satisfaction' },
              { metric: '50+', label: 'Industry Awards' }
            ].map((stat, i) => (
              <Reveal key={i} direction="up">
                <div className="text-center transition-transform duration-300 hover:scale-105">
                  <div className={`text-5xl font-extrabold tracking-tight bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                    {stat.metric}
                  </div>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Results"
            description="A proven methodology that ensures success for your business."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', desc: 'We analyze your business goals and market position.' },
              { step: '02', title: 'Strategy', desc: 'We develop a customized marketing strategy for you.' },
              { step: '03', title: 'Execution', desc: 'We implement the strategy with precision and expertise.' },
              { step: '04', title: 'Growth', desc: 'We optimize and scale your campaigns for maximum ROI.' },
            ].map((item) => (
              <div key={item.step} className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-3xl font-extrabold text-slate-300 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:${colors.primary} group-hover:text-white`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {validBenefits.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.primary} px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm`}>
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Why Choose Us
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
                Why {industry.title} Brands Trust Our Expertise
              </h2>
              <p className="mt-5 text-lg text-slate-500">
                We leverage data-driven insights and specific industry knowledge to deploy high-impact conversion models that deliver consistent business growth.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {validBenefits.map((benefit, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                return (
                  <Reveal key={i} direction="up">
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                      
                      {/* Background Glow */}
                      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${colors.primary} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}></div>

                      {/* Icon */}
                      <div className="relative mb-6 flex">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white">
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Content */}
                      <p className="relative text-base font-medium leading-relaxed text-brand">
                        {benefit}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials/Results Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
         {/* Decorative Background */}
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-electric/5 blur-3xl"></div>
         </div>

        <div className="container relative z-10 mx-auto px-4">
          <SectionHeading
            eyebrow="Success Stories"
            title={`Results We've Delivered for ${industry.title}`}
            description="Real outcomes that speak for themselves."
          />
          <Stagger className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.1}>
            {[
              { metric: '250%', label: 'Average ROI Increase', icon: TrendingUp },
              { metric: '300%', label: 'Traffic Growth', icon: Users },
              { metric: '45%', label: 'Conversion Rate Boost', icon: Target },
            ].map((stat) => (
              <StaggerItem key={stat.metric}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                    
                  {/* Hover Top Accent */}
                  <div className={`absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r ${colors.primary} transition-all duration-500 group-hover:w-1/2`}></div>

                  <div className="relative z-10">
                    <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.primary} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                      <stat.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <div className={`text-5xl font-extrabold tracking-tight bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                      {stat.metric}
                    </div>
                    <div className="my-3 h-[2px] w-12 mx-auto bg-slate-100 transition-all duration-500 group-hover:w-20 group-hover:bg-slate-200"></div>
                    <p className="text-sm font-bold uppercase tracking-wider text-brand">{stat.label}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQs Section */}
      {validFaqs.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="FAQs"
              title={`Frequently Asked Questions About ${industry.title}`}
              description="Get answers to the most common questions about our services."
            />
            <div className="mx-auto mt-14 max-w-3xl">
              <FAQAccordion items={validFaqs} />
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}