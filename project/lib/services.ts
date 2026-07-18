import {
  Search,
  TrendingUp,
  Code2,
  MousePointerClick,
  PenTool,
  Share2,
  Building2,
  HeartPulse,
  ShoppingBag,
  Briefcase,
  Scale,
  Landmark,
  GraduationCap,
  Hotel,
  UtensilsCrossed,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export type ServiceSlug =
  | 'seo'
  | 'digital-marketing'
  | 'web-development'
  | 'ppc-marketing'
  | 'content-marketing'
  | 'social-media-marketing';

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  image: string;
  tagline: string;
  description: string;
  overview: string[];
  benefits: { title: string; description: string; icon: LucideIcon }[];
  process: { step: string; title: string; description: string }[];
  whyChooseUs: string[];
  industriesServed: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

const sharedIndustries = [
  'Real Estate',
  'Healthcare',
  'Ecommerce',
  'B2B',
  'Legal',
  'Finance',
  'Education',
  'Hospitality',
  'Food & Beverage',
  'Beauty & Wellness',
];

export const services: Service[] = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    shortTitle: 'SEO Services',
    icon: Search,
    image:
      'https://i.pinimg.com/1200x/80/9d/b6/809db6f87e64f041c877406ae2c9fd1b.jpg',
    tagline: 'Rank higher. Convert better. Grow faster.',
    description:
      'Data-driven SEO strategies that improve your visibility on search engines, drive qualified organic traffic, and deliver compounding ROI.',
    overview: [
      'Our SEO services combine technical expertise, content excellence, and authority building to put your brand in front of the right audience at the right moment. We start with a comprehensive audit of your website, competitors, and search landscape to identify the highest-impact opportunities.',
      'From there, we build a roadmap covering technical SEO, on-page optimization, content strategy, and link acquisition. Every recommendation is backed by data and tied to revenue — not vanity metrics. You get transparent reporting, clear KPIs, and a team that treats your growth as its own.',
    ],
    benefits: [
      {
        title: 'Higher Organic Rankings',
        description:
          'Climb to the top of Google for the keywords your customers actually search, with white-hat strategies built to last.',
        icon: TrendingUp,
      },
      {
        title: 'Qualified Traffic',
        description:
          'Attract visitors with real purchase intent — not just clicks — through intent-driven keyword targeting.',
        icon: Search,
      },
      {
        title: 'Technical Health',
        description:
          'Fix crawlability, speed, and indexation issues that silently cap your rankings and user experience.',
        icon: Code2,
      },
      {
        title: 'Compounding ROI',
        description:
          'Unlike paid ads, SEO gains compound over time — every ranking you earn keeps delivering traffic for months.',
        icon: TrendingUp,
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Audit',
        description:
          'We analyze your website, competitors, backlink profile, and keyword landscape to build a baseline.',
      },
      {
        step: '02',
        title: 'Strategy & Roadmap',
        description:
          'We define target keywords, content clusters, technical fixes, and a prioritized 90-day action plan.',
      },
      {
        step: '03',
        title: 'On-Page & Technical',
        description:
          'We optimize meta tags, content, internal links, schema, site speed, and mobile experience.',
      },
      {
        step: '04',
        title: 'Content & Authority',
        description:
          'We publish SEO-driven content and earn high-quality backlinks from relevant, authoritative domains.',
      },
      {
        step: '05',
        title: 'Measure & Scale',
        description:
          'Monthly reporting, rank tracking, and continuous optimization to scale what works and cut what does not.',
      },
    ],
    whyChooseUs: [
      '12+ years of enterprise SEO experience across 30+ industries',
      'Dedicated SEO strategist, content team, and link-building specialist',
      'Transparent dashboards with live rank, traffic, and revenue tracking',
      'White-hat only — no risky tactics that put your domain at risk',
      'Average 220% organic traffic growth in the first 12 months',
    ],
    industriesServed: sharedIndustries,
    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer:
          'Most clients see meaningful movement in 3–4 months and significant results in 6–12 months. SEO is a compounding investment — the work we do in month one keeps paying off in month twelve.',
      },
      {
        question: 'Do you guarantee #1 rankings?',
        answer:
          'No reputable agency can guarantee a specific ranking — Google’s algorithm has over 200 factors. What we guarantee is a transparent, data-driven process, clear KPIs, and measurable growth in organic traffic and conversions.',
      },
      {
        question: 'Do you work with new websites or only established ones?',
        answer:
          'Both. For new sites we focus on technical foundations and content velocity. For established sites we focus on authority building and competitive gap analysis.',
      },
      {
        question: 'What is included in your monthly SEO reporting?',
        answer:
          'You receive a live dashboard plus a monthly report covering keyword rankings, organic traffic, conversions, backlinks acquired, and a summary of work completed and planned.',
      },
    ],
    metaTitle: 'SEO Services | Search Engine Optimization Agency',
    metaDescription:
      'Data-driven SEO services that improve rankings, drive qualified organic traffic, and deliver compounding ROI. Technical, on-page, content, and link building.',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    icon: TrendingUp,
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    tagline: 'One partner. Every channel. Measurable growth.',
    description:
      'Integrated digital marketing across SEO, PPC, social, content, and email — orchestrated as one strategy to maximize every rupee of your budget.',
    overview: [
      'Digital marketing only works when every channel pulls in the same direction. Our integrated approach aligns SEO, paid media, social, content, and email into a single revenue engine — so your message reaches the right person, on the right platform, at the right stage of their journey.',
      'We do not chase channels for their own sake. We start with your business goals, map the customer journey, and deploy budget where it produces the highest return. You get a unified strategy, a single point of accountability, and reporting that ties every activity to revenue.',
    ],
    benefits: [
      {
        title: 'Unified Strategy',
        description:
          'One cohesive plan across every channel — no silos, no duplicated effort, no wasted budget.',
        icon: TrendingUp,
      },
      {
        title: 'Full-Funnel Coverage',
        description:
          'From awareness to conversion to retention, we engage customers at every stage of the journey.',
        icon: Share2,
      },
      {
        title: 'Budget Efficiency',
        description:
          'We shift spend toward what works in real time, maximizing ROAS across all channels.',
        icon: MousePointerClick,
      },
      {
        title: 'Single Accountability',
        description:
          'One team, one dashboard, one report. You always know who owns your results.',
        icon: Briefcase,
      },
    ],
    process: [
      {
        step: '01',
        title: 'Goal Setting & Audit',
        description:
          'We define business KPIs, audit current performance, and benchmark against competitors.',
      },
      {
        step: '02',
        title: 'Channel Strategy',
        description:
          'We map the customer journey and select the channels and tactics with the highest expected return.',
      },
      {
        step: '03',
        title: 'Campaign Build',
        description:
          'We launch integrated campaigns across SEO, PPC, social, content, and email with shared messaging.',
      },
      {
        step: '04',
        title: 'Optimize & Scale',
        description:
          'Weekly optimization, monthly strategy reviews, and continuous budget reallocation toward winners.',
      },
      {
        step: '05',
        title: 'Report & Refine',
        description:
          'Transparent reporting tied to revenue, with quarterly business reviews to refine the roadmap.',
      },
    ],
    whyChooseUs: [
      'Senior strategists on every account — no junior hand-offs',
      'Integrated reporting across all channels in one dashboard',
      'Average 3.5x return on ad spend across managed accounts',
      'Flexible month-to-month engagements, no lock-in',
      'Proven across 500+ brands from startups to enterprises',
    ],
    industriesServed: sharedIndustries,
    faqs: [
      {
        question: 'What channels do you manage?',
        answer:
          'SEO, Google Ads, Meta Ads, LinkedIn Ads, content marketing, email marketing, social media, and conversion rate optimization. You can engage us for one channel or all of them.',
      },
      {
        question: 'What is the minimum monthly budget?',
        answer:
          'Our integrated retainer starts at ₹1,50,000/month plus ad spend. We tailor the scope to your goals and scale as results compound.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'We tie every channel to revenue — leads, qualified pipeline, and ROAS — not vanity metrics. You see exactly how each activity contributes to your bottom line.',
      },
      {
        question: 'Do you work with our existing agency or in-house team?',
        answer:
          'Yes. We frequently partner with in-house teams, providing strategy, specialized execution, or filling capability gaps without disrupting existing workflows.',
      },
    ],
    metaTitle: 'Digital Marketing Services | Full-Channel Growth Agency',
    metaDescription:
      'Integrated digital marketing across SEO, PPC, social, content, and email — orchestrated as one revenue engine with transparent, revenue-tied reporting.',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Development',
    icon: Code2,
    image:
      'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    tagline: 'Fast, beautiful, conversion-ready websites.',
    description:
      'Custom websites and web apps engineered for speed, SEO, and conversions — built on modern stacks with a relentless focus on user experience.',
    overview: [
      'Your website is your hardest-working salesperson — live 24/7, never off sick, and the first impression for every prospect. We build websites that load in under two seconds, rank on Google, and convert visitors into customers through deliberate UX and persuasive design.',
      'From marketing sites to complex web applications, our engineering team builds on modern, scalable stacks. Every project includes SEO foundations, analytics, accessibility, and a CMS your team can actually use — so your site stays fast and fresh long after launch.',
    ],
    benefits: [
      {
        title: 'Lightning Fast',
        description:
          'Sub-2-second load times on mobile, with Core Web Vitals in the green — critical for SEO and conversions.',
        icon: Code2,
      },
      {
        title: 'Conversion-Focused',
        description:
          'Every section, CTA, and form is designed to move visitors toward becoming customers.',
        icon: MousePointerClick,
      },
      {
        title: 'SEO-Ready',
        description:
          'Built with semantic HTML, schema markup, and clean architecture so search engines can crawl and rank you.',
        icon: Search,
      },
      {
        title: 'Easy to Manage',
        description:
          'A headless CMS your marketing team can update without developer help — no ticket queues.',
        icon: Briefcase,
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & UX',
        description:
          'We map user journeys, define information architecture, and create wireframes validated against your goals.',
      },
      {
        step: '02',
        title: 'Design System',
        description:
          'We craft a pixel-perfect, responsive design system in Figma for your review before a line of code.',
      },
      {
        step: '03',
        title: 'Development',
        description:
          'We build on Next.js / React with a headless CMS, optimized for speed, SEO, and scalability.',
      },
      {
        step: '04',
        title: 'QA & Launch',
        description:
          'Cross-browser, cross-device testing, performance audits, and a smooth, zero-downtime launch.',
      },
      {
        step: '05',
        title: 'Grow & Optimize',
        description:
          'Post-launch CRO, content updates, and ongoing performance monitoring to keep improving results.',
      },
    ],
    whyChooseUs: [
      'In-house team of senior engineers and designers — no outsourcing',
      'Average Lighthouse performance score of 95+ on launch',
      'SEO and analytics baked in from day one, not bolted on later',
      'Modern stack: Next.js, TypeScript, Tailwind, headless CMS',
      '30-day post-launch support included on every project',
    ],
    industriesServed: sharedIndustries,
    faqs: [
      {
        question: 'What technologies do you use?',
        answer:
          'We build primarily on Next.js, React, TypeScript, and Tailwind CSS, with headless CMS options like Sanity, Contentful, or WordPress. For complex apps we use Node.js and PostgreSQL.',
      },
      {
        question: 'How long does a website take to build?',
        answer:
          'A marketing site takes 4–8 weeks. A complex web application can take 3–6 months. We provide a detailed timeline after the discovery phase.',
      },
      {
        question: 'Will I be able to update the site myself?',
        answer:
          'Yes. We build with a headless CMS so your marketing team can update content, images, and pages without developer help. We also provide training and documentation.',
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer:
          'Yes. We offer monthly maintenance plans covering security updates, performance monitoring, content updates, and feature enhancements.',
      },
    ],
    metaTitle: 'Web Development Services | Custom Websites & Web Apps',
    metaDescription:
      'Custom websites and web apps engineered for speed, SEO, and conversions. Built on Next.js, React, and modern stacks with a headless CMS.',
  },
  {
    slug: 'ppc-marketing',
    title: 'PPC / Paid Marketing',
    shortTitle: 'PPC Marketing',
    icon: MousePointerClick,
    image:
      'https://i.pinimg.com/1200x/5d/0b/49/5d0b49e04fb5a568769f8128bb6588ac.jpg',
    tagline: 'Instant traffic. Profitable scale.',
    description:
      'Performance-focused PPC across Google, Meta, and LinkedIn — engineered to lower your cost-per-acquisition while scaling profitable campaigns.',
    overview: [
      'Paid media is the fastest way to generate leads and sales — and the fastest way to burn budget if managed poorly. Our PPC team builds, tests, and scales campaigns with surgical precision, using advanced bidding strategies, audience segmentation, and creative testing to drive down your cost per acquisition.',
      'We manage Google Ads, Microsoft Ads, Meta (Facebook & Instagram), LinkedIn, and YouTube under one roof. You get full-funnel paid media — from awareness to retargeting — with transparent reporting that shows exactly where every rupee goes and what it returned.',
    ],
    benefits: [
      {
        title: 'Immediate Results',
        description:
          'Appear at the top of search and social results the moment your campaigns launch — no waiting for SEO.',
        icon: MousePointerClick,
      },
      {
        title: 'Lower CPA',
        description:
          'Continuous testing of ads, audiences, and bids to systematically reduce your cost per acquisition.',
        icon: TrendingUp,
      },
      {
        title: 'Precise Targeting',
        description:
          'Reach exact demographics, job titles, interests, and behaviors — and retarget visitors who did not convert.',
        icon: Search,
      },
      {
        title: 'Scalable Spend',
        description:
          'Start small, prove ROI, then scale budget on winning campaigns with confidence.',
        icon: TrendingUp,
      },
    ],
    process: [
      {
        step: '01',
        title: 'Account Audit',
        description:
          'We audit existing accounts for wasted spend, missed opportunities, and structural issues.',
      },
      {
        step: '02',
        title: 'Campaign Strategy',
        description:
          'We define keyword themes, audience segments, bidding strategy, and creative direction.',
      },
      {
        step: '03',
        title: 'Build & Launch',
        description:
          'We structure campaigns, write ad copy, build landing pages, and launch with conversion tracking.',
      },
      {
        step: '04',
        title: 'Optimize Daily',
        description:
          'Daily bid management, negative keyword additions, A/B testing, and budget reallocation.',
      },
      {
        step: '05',
        title: 'Scale Winners',
        description:
          'We double down on high-ROAS campaigns, expand to new channels, and scale profitably.',
      },
    ],
    whyChooseUs: [
      'Google Premier Partner and Meta Business Partner status',
      'Average 3.5x return on ad spend across managed accounts',
      'Dedicated account manager + media buyer on every account',
      'Advanced tracking with GA4, server-side tagging, and offline conversions',
      'No long-term contracts — we earn your business every month',
    ],
    industriesServed: sharedIndustries,
    faqs: [
      {
        question: 'What platforms do you manage?',
        answer:
          'Google Ads (Search, Display, Shopping, YouTube), Microsoft Ads, Meta (Facebook & Instagram), LinkedIn Ads, and X Ads. We recommend the platforms that match your audience and goals.',
      },
      {
        question: 'What is the minimum ad spend?',
        answer:
          'We recommend a minimum of ₹1,00,000/month in ad spend to generate enough data for optimization. Our management fee is separate and scales with spend.',
      },
      {
        question: 'How quickly can you launch campaigns?',
        answer:
          'For new accounts, we can launch within 5–7 business days after receiving assets and access. For existing accounts, optimizations begin immediately.',
      },
      {
        question: 'How do you track conversions?',
        answer:
          'We implement GA4, Google Tag Manager, server-side tracking, and — where applicable — offline conversion tracking to tie ad spend directly to revenue.',
      },
    ],
    metaTitle: 'PPC & Paid Marketing Services | Google, Meta & LinkedIn Ads',
    metaDescription:
      'Performance-focused PPC across Google, Meta, and LinkedIn. We lower your cost-per-acquisition while scaling profitable campaigns with transparent reporting.',
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortTitle: 'Content Marketing',
    icon: PenTool,
    image:
      'https://i.pinimg.com/736x/98/9d/18/989d187c6d70a5ce4a68fc4f705dd62c.jpg',
    tagline: 'Content that ranks, educates, and converts.',
    description:
      'Strategic content marketing that builds authority, ranks on search, and nurtures prospects through every stage of the buying journey.',
    overview: [
      'Content is how modern buyers research, compare, and decide. Our content marketing services create the articles, guides, videos, and assets your prospects are already searching for — positioning your brand as the obvious choice before they ever talk to sales.',
      'We do not produce content for content’s sake. Every piece is mapped to a keyword, a buyer persona, and a stage of the funnel. We measure content by its contribution to traffic, leads, and pipeline — not by word count.',
    ],
    benefits: [
      {
        title: 'Search Authority',
        description:
          'Rank for the topics your buyers research, building durable organic traffic and brand authority.',
        icon: Search,
      },
      {
        title: 'Lead Nurturing',
        description:
          'Guide prospects from awareness to decision with content tailored to each stage of the journey.',
        icon: TrendingUp,
      },
      {
        title: 'Brand Trust',
        description:
          'Consistently helpful content builds the trust that turns first-time visitors into loyal customers.',
        icon: Share2,
      },
      {
        title: 'Sales Enablement',
        description:
          'Equip your sales team with guides, case studies, and one-pagers that close deals faster.',
        icon: Briefcase,
      },
    ],
    process: [
      {
        step: '01',
        title: 'Content Audit',
        description:
          'We audit existing content, map keyword gaps, and analyze competitor content strategies.',
      },
      {
        step: '02',
        title: 'Strategy & Calendar',
        description:
          'We define topics, formats, and a publishing calendar aligned to keywords and funnel stages.',
      },
      {
        step: '03',
        title: 'Creation',
        description:
          'Our writers and designers produce SEO-optimized articles, guides, videos, and downloadable assets.',
      },
      {
        step: '04',
        title: 'Distribution',
        description:
          'We promote content across SEO, email, social, and paid channels to maximize reach and engagement.',
      },
      {
        step: '05',
        title: 'Measure & Refine',
        description:
          'We track traffic, leads, and revenue per piece, doubling down on what works and refreshing winners.',
      },
    ],
    whyChooseUs: [
      'In-house team of SEO writers, editors, designers, and video producers',
      'Every piece is SEO-optimized and reviewed by a senior editor',
      'Content mapped to revenue, not vanity metrics',
      'Average 4x increase in organic traffic within 6 months',
      'Full-service: strategy, creation, distribution, and measurement',
    ],
    industriesServed: sharedIndustries,
    faqs: [
      {
        question: 'What types of content do you produce?',
        answer:
          'Blog articles, long-form guides, case studies, whitepapers, ebooks, infographics, videos, email sequences, and landing page copy. We tailor formats to your audience and funnel stage.',
      },
      {
        question: 'How often will you publish?',
        answer:
          'Typically 4–8 pieces per month depending on your goals and budget. We prioritize quality and SEO impact over volume — one well-researched guide outperforms ten shallow posts.',
      },
      {
        question: 'Do you write for our industry if it is technical?',
        answer:
          'Yes. Our writers research deeply and collaborate with your subject-matter experts to produce technically accurate, authoritative content.',
      },
      {
        question: 'How do you measure content ROI?',
        answer:
          'We track organic traffic, keyword rankings, leads generated, and assisted revenue per content piece — connecting content directly to pipeline and sales.',
      },
    ],
    metaTitle: 'Content Marketing Services | Strategy, Creation & Distribution',
    metaDescription:
      'Strategic content marketing that builds authority, ranks on search, and nurtures prospects through every stage of the buying journey.',
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media Marketing',
    icon: Share2,
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    tagline: 'Build a community. Drive real business.',
    description:
      'Social media marketing that grows engaged communities, amplifies your brand, and turns followers into customers across every platform.',
    overview: [
      'Social media is where your customers spend their time — and where your brand can build genuine relationships. Our social media marketing services combine organic community building with paid amplification to grow followers, engagement, and conversions across Instagram, LinkedIn, Facebook, X, and YouTube.',
      'We do not post for the sake of posting. Every piece of content is part of a strategy designed to build brand affinity, educate your audience, and drive measurable business outcomes — from website traffic to direct sales.',
    ],
    benefits: [
      {
        title: 'Brand Awareness',
        description:
          'Reach and engage your target audience where they spend their time, building top-of-mind recall.',
        icon: Share2,
      },
      {
        title: 'Community Building',
        description:
          'Turn followers into a loyal community that advocates for your brand and drives word-of-mouth.',
        icon: HeartPulse,
      },
      {
        title: 'Lead Generation',
        description:
          'Convert social engagement into qualified leads with targeted campaigns and compelling offers.',
        icon: MousePointerClick,
      },
      {
        title: 'Customer Insights',
        description:
          'Listen to your audience in real time and use social data to inform product, marketing, and service.',
        icon: TrendingUp,
      },
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Persona',
        description:
          'We audit your social presence, define personas, and benchmark against competitors.',
      },
      {
        step: '02',
        title: 'Content Strategy',
        description:
          'We define pillars, formats, tone, and a content calendar tailored to each platform.',
      },
      {
        step: '03',
        title: 'Content Creation',
        description:
          'Our designers and copywriters produce scroll-stopping posts, reels, stories, and carousels.',
      },
      {
        step: '04',
        title: 'Community Management',
        description:
          'We engage with your audience, respond to comments, and manage DMs to build relationships.',
      },
      {
        step: '05',
        title: 'Paid Amplification',
        description:
          'We boost top-performing content and run targeted ad campaigns to scale reach and conversions.',
      },
    ],
    whyChooseUs: [
      'Dedicated social media manager and creative team on every account',
      'Platform-native content — not the same post across every channel',
      'Average 5x engagement rate increase within 3 months',
      'Full-funnel: organic, paid, community management, and influencer',
      'Real-time social listening and reputation management included',
    ],
    industriesServed: sharedIndustries,
    faqs: [
      {
        question: 'Which platforms do you manage?',
        answer:
          'Instagram, LinkedIn, Facebook, X (Twitter), YouTube, and Pinterest. We recommend the 2–3 platforms where your audience is most active rather than spreading thin.',
      },
      {
        question: 'Do you create the content or just post it?',
        answer:
          'We do both. Our in-house designers, videographers, and copywriters create all content — graphics, reels, carousels, captions, and hashtags — and handle scheduling and posting.',
      },
      {
        question: 'How often do you post?',
        answer:
          'Typically 3–5 posts per week per platform, adjusted based on your audience and goals. Quality and consistency matter more than raw volume.',
      },
      {
        question: 'Do you manage paid social ads too?',
        answer:
          'Yes. We run paid social campaigns on Meta, LinkedIn, and YouTube to amplify organic content and drive targeted conversions.',
      },
    ],
    metaTitle: 'Social Media Marketing Services | Organic & Paid Social',
    metaDescription:
      'Social media marketing that grows engaged communities, amplifies your brand, and turns followers into customers across every platform.',
  },
];

export const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  seo: Search,
  'digital-marketing': TrendingUp,
  'web-development': Code2,
  'ppc-marketing': MousePointerClick,
  'content-marketing': PenTool,
  'social-media-marketing': Share2,
};

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
