import {
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

export type IndustrySlug =
  | 'real-estate'
  | 'healthcare'
  | 'ecommerce'
  | 'b2b'
  | 'legal'
  | 'finance'
  | 'education'
  | 'hospitality'
  | 'food'
  | 'beauty'
  | 'more';

export interface Industry {
  slug: IndustrySlug;
  name: string;
  icon: LucideIcon;
  image: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  servicesOffered: string[];
  successStories: { client: string; result: string; metric: string }[];
  whyChooseUs: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const industries: Industry[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: Building2,
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Generate qualified buyer and seller leads with hyper-local SEO and high-converting property campaigns.',
    heroTitle: 'Digital Marketing for Real Estate',
    heroDescription:
      'Fill your pipeline with qualified buyers and sellers through hyper-local SEO, stunning property showcases, and lead-capture systems that turn browsers into booked viewings.',
    challenges: [
      {
        title: 'Long, Complex Buyer Journeys',
        description:
          'Property purchases take months. Staying top-of-mind across a long research phase is hard without the right nurture strategy.',
      },
      {
        title: 'Hyper-Local Competition',
        description:
          'Every broker targets the same neighborhoods. Standing out in local search and maps is critical but fiercely contested.',
      },
      {
        title: 'Lead Quality vs. Quantity',
        description:
          'Generic leads waste your agents’ time. You need qualified buyers and sellers with real intent, not tire-kickers.',
      },
      {
        title: 'Visual Storytelling',
        description:
          'Properties sell on emotion. Showcasing homes with immersive visuals that load fast and rank well is a constant challenge.',
      },
    ],
    solutions: [
      {
        title: 'Hyper-Local SEO',
        description:
          'Dominate “property in [neighborhood]” searches with location pages, Google Business optimization, and local link building.',
      },
      {
        title: 'Property Showcase Sites',
        description:
          'Fast, beautiful listing sites with virtual tours, floor plans, and instant lead capture built for mobile-first buyers.',
      },
      {
        title: 'Lead Nurture Automation',
        description:
          'Automated email and WhatsApp sequences that keep buyers engaged across their months-long journey until they are ready to view.',
      },
      {
        title: 'Paid Lead Generation',
        description:
          'Google and Meta campaigns targeting in-market buyers and sellers with landing pages optimized for qualified leads.',
      },
    ],
    servicesOffered: [
      'Local SEO & Google Business Profile',
      'Property Listing Website Development',
      'Google Ads for Buyer & Seller Leads',
      'Meta Ads for Project Launches',
      'Email & WhatsApp Nurture Sequences',
      'Virtual Tour & Drone Content',
    ],
    successStories: [
      {
        client: 'Premium Residential Developer',
        result: 'Sold out 120-unit project in 8 months',
        metric: '340% ROI on ad spend',
      },
      {
        client: 'Independent Brokerage',
        result: 'Doubled qualified seller leads',
        metric: '180% increase in 6 months',
      },
      {
        client: 'Commercial Real Estate Firm',
        result: 'Ranked #1 for 200+ local keywords',
        metric: '5x organic traffic',
      },
    ],
    whyChooseUs: [
      'Specialized real estate marketing team with 50+ projects delivered',
      'CRM integrations with Salesforce, HubSpot, and Propstack',
      'WhatsApp Business API automation for instant lead response',
      'Drone videography and virtual tour production in-house',
      'Proven local SEO framework for hyper-competitive markets',
    ],
    faqs: [
      {
        question: 'Can you help with a new project launch?',
        answer:
          'Yes. We handle the full launch — landing page, lead capture, paid campaigns, email nurture, and retargeting — to maximize bookings in the critical first 90 days.',
      },
      {
        question: 'Do you integrate with our CRM?',
        answer:
          'We integrate with Salesforce, HubSpot, Propstack, and most major real estate CRMs so leads flow directly into your sales pipeline.',
      },
      {
        question: 'How do you target specific neighborhoods?',
        answer:
          'We build location-specific landing pages, optimize Google Business Profiles, run geo-targeted ads, and earn local backlinks to dominate neighborhood-level search.',
      },
    ],
    metaTitle: 'Real Estate Digital Marketing | Property Lead Generation',
    metaDescription:
      'Generate qualified buyer and seller leads with hyper-local SEO, property showcase sites, and lead-nurture automation built for real estate.',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: HeartPulse,
    image:
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Attract and retain patients with HIPAA-aware marketing, local SEO, and trust-building content.',
    heroTitle: 'Digital Marketing for Healthcare',
    heroDescription:
      'Grow your practice with patient-first marketing — local SEO that puts you on the map, content that builds trust, and compliant lead capture that turns searches into appointments.',
    challenges: [
      {
        title: 'Patient Trust & Compliance',
        description:
          'Healthcare marketing must build trust while navigating strict advertising and privacy regulations. One misstep can damage reputation.',
      },
      {
        title: 'Local Search Dominance',
        description:
          'Patients search “near me.” Winning the Google Map Pack and local reviews is the difference between a full calendar and empty slots.',
      },
      {
        title: 'Specialty Complexity',
        description:
          'Medical procedures are complex. Educating patients without overwhelming them requires careful content strategy.',
      },
      {
        title: 'Online Reputation',
        description:
          'Patient reviews make or break a practice. Managing reviews across Google, Practo, and social is constant work.',
      },
    ],
    solutions: [
      {
        title: 'Local SEO & Map Pack',
        description:
          'Optimize your Google Business Profile, earn reviews, and build local citations to rank at the top of “doctor near me” searches.',
      },
      {
        title: 'Patient Education Content',
        description:
          'Authoritative, easy-to-understand articles and videos that answer patient questions and build pre-visit trust.',
      },
      {
        title: 'Appointment Booking Funnel',
        description:
          'Conversion-optimized landing pages with online booking that reduce no-shows and fill your calendar.',
      },
      {
        title: 'Reputation Management',
        description:
          'Automated review requests, response management, and reputation monitoring across Google, Practo, and social.',
      },
    ],
    servicesOffered: [
      'Local SEO & Google Business Profile',
      'Healthcare Website Development',
      'Patient Education Content',
      'Google Ads for Patient Acquisition',
      'Online Appointment Booking Systems',
      'Reputation & Review Management',
    ],
    successStories: [
      {
        client: 'Multi-Specialty Hospital',
        result: 'Tripled online appointment bookings',
        metric: '320% increase in 9 months',
      },
      {
        client: 'Dental Clinic Chain',
        result: '#1 ranked for 80+ local keywords',
        metric: '4x new patient calls',
      },
      {
        client: 'Fertility Center',
        result: 'Doubled qualified patient inquiries',
        metric: '210% lead growth',
      },
    ],
    whyChooseUs: [
      'HIPAA-aware marketing processes and data handling',
      'Experience with hospitals, clinics, dental, and specialty practices',
      'Integration with Practo, Lybrate, and hospital appointment systems',
      'Medical content reviewed for accuracy and compliance',
      'Proven local SEO framework for healthcare practices',
    ],
    faqs: [
      {
        question: 'Are your marketing practices compliant with healthcare regulations?',
        answer:
          'Yes. We follow advertising guidelines for healthcare, avoid prohibited claims, and handle patient data with privacy-first processes. We recommend legal review of ad copy for regulated procedures.',
      },
      {
        question: 'Can you help us get more patient reviews?',
        answer:
          'Yes. We set up automated, compliant review request flows post-visit and help you respond to reviews professionally to build trust and improve local rankings.',
      },
      {
        question: 'Do you build appointment booking systems?',
        answer:
          'Yes. We build online booking systems that integrate with your calendar and reduce no-shows with automated reminders via SMS and WhatsApp.',
      },
    ],
    metaTitle: 'Healthcare Digital Marketing | Patient Acquisition & Retention',
    metaDescription:
      'Attract and retain patients with HIPAA-aware marketing, local SEO, trust-building content, and online appointment booking systems.',
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    icon: ShoppingBag,
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Scale revenue with Shopping ads, conversion-optimized stores, and full-funnel retention.',
    heroTitle: 'Digital Marketing for Ecommerce',
    heroDescription:
      'Turn clicks into customers and customers into repeat buyers with Shopping ads, conversion-optimized stores, email/SMS retention, and data-driven growth.',
    challenges: [
      {
        title: 'Rising Ad Costs',
        description:
          'CPMs and CPCs keep climbing. Squeezing profitable ROAS from paid channels requires relentless optimization.',
      },
      {
        title: 'Cart Abandonment',
        description:
          'Up to 70% of carts are abandoned. Recovering that revenue with the right retargeting and email flows is critical.',
      },
      {
        title: 'Customer Retention',
        description:
          'Acquisition is expensive. Profitable ecommerce brands are built on repeat purchases and lifetime value.',
      },
      {
        title: 'Marketplace Competition',
        description:
          'Competing with Amazon and Flipkart on price is a losing game. Differentiation and direct-to-consumer relationships are the answer.',
      },
    ],
    solutions: [
      {
        title: 'Google Shopping & PMax',
        description:
          'Profitable Shopping and Performance Max campaigns with feed optimization, negative keywords, and bid scaling.',
      },
      {
        title: 'Conversion Rate Optimization',
        description:
          'A/B testing on product pages, checkout, and navigation to lift conversion rates without more traffic.',
      },
      {
        title: 'Email & SMS Retention',
        description:
          'Klaviyo and WhatsApp flows for abandoned carts, welcome series, post-purchase, and win-back to drive repeat revenue.',
      },
      {
        title: 'DTC Brand Building',
        description:
          'Social content, influencer partnerships, and community building that make your brand un-commoditizable.',
      },
    ],
    servicesOffered: [
      'Google Shopping & Performance Max',
      'Meta & Instagram Shopping Ads',
      'Shopify & Custom Store Development',
      'Email & SMS Marketing (Klaviyo)',
      'Conversion Rate Optimization',
      'Influencer & UGC Campaigns',
    ],
    successStories: [
      {
        client: 'DTC Skincare Brand',
        result: 'Scaled to ₹5Cr monthly revenue',
        metric: '4.2x ROAS sustained',
      },
      {
        client: 'Fashion Marketplace',
        result: 'Recovered 35% of abandoned carts',
        metric: '₹1.2Cr recovered revenue',
      },
      {
        client: 'Home Decor Store',
        result: 'Doubled repeat purchase rate',
        metric: '2.3x LTV in 8 months',
      },
    ],
    whyChooseUs: [
      'Shopify Plus and custom ecommerce development expertise',
      'Klaviyo, WhatsApp Business, and retention marketing specialists',
      'Average 4x ROAS across managed ecommerce accounts',
      'Feed management and Shopping ads certified team',
      'Full-funnel: acquisition, conversion, retention, and LTV',
    ],
    faqs: [
      {
        question: 'Which ecommerce platforms do you work with?',
        answer:
          'Shopify, Shopify Plus, WooCommerce, Magento, and custom-built stores. We also work with marketplaces like Amazon and Flipkart for multichannel brands.',
      },
      {
        question: 'What ROAS can we expect?',
        answer:
          'We target a minimum 3x blended ROAS, though many clients achieve 4–6x. ROAS depends on margins, AOV, and category — we set realistic targets after an audit.',
      },
      {
        question: 'Do you handle email and SMS marketing?',
        answer:
          'Yes. We build and manage Klaviyo email flows and WhatsApp Business campaigns for abandoned carts, welcome, post-purchase, and win-back to drive repeat revenue.',
      },
    ],
    metaTitle: 'Ecommerce Digital Marketing | Shopping Ads & Retention',
    metaDescription:
      'Scale ecommerce revenue with Google Shopping, conversion-optimized stores, email/SMS retention, and full-funnel growth marketing.',
  },
  {
    slug: 'b2b',
    name: 'B2B',
    icon: Briefcase,
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Generate qualified pipeline with account-based marketing, thought leadership, and lead nurture.',
    heroTitle: 'Digital Marketing for B2B',
    heroDescription:
      'Fill your sales pipeline with qualified accounts through ABM, thought-leadership content, LinkedIn outreach, and nurture systems that turn cold prospects into sales conversations.',
    challenges: [
      {
        title: 'Long Sales Cycles',
        description:
          'B2B deals take 3–12 months. Keeping prospects engaged across multiple stakeholders and touchpoints is complex.',
      },
      {
        title: 'Reaching Decision-Makers',
        description:
          'Your buyers research anonymously for 70% of the journey before talking to sales. Being found early is critical.',
      },
      {
        title: 'Lead Quality',
        description:
          'Marketing-sourced leads often lack budget, authority, or timing. Sales needs SQLs, not MQLs that go nowhere.',
      },
      {
        title: 'Measuring Pipeline Impact',
        description:
          'Attribution in B2B is messy. Connecting marketing activity to closed-won revenue requires the right tracking.',
      },
    ],
    solutions: [
      {
        title: 'Account-Based Marketing',
        description:
          'Target named accounts with personalized campaigns across LinkedIn, email, and paid channels to engage buying committees.',
      },
      {
        title: 'Thought Leadership Content',
        description:
          'Authoritative whitepapers, research, and webinars that position your team as the category leader buyers trust.',
      },
      {
        title: 'LinkedIn Lead Generation',
        description:
          'Targeted LinkedIn ads and outreach to reach decision-makers by job title, industry, and company size.',
      },
      {
        title: 'Lead Nurture & Scoring',
        description:
          'Automated nurture flows with lead scoring so sales engages only when prospects show real buying intent.',
      },
    ],
    servicesOffered: [
      'Account-Based Marketing (ABM)',
      'B2B SEO & Content Marketing',
      'LinkedIn Ads & Outreach',
      'Lead Nurturing & Scoring',
      'Webinar & Event Marketing',
      'Marketing Automation (HubSpot)',
    ],
    successStories: [
      {
        client: 'Enterprise SaaS Company',
        result: 'Generated ₹12Cr in influenced pipeline',
        metric: '3.2x increase in 12 months',
      },
      {
        client: 'B2B Services Firm',
        result: 'Doubled sales-qualified leads',
        metric: '210% SQL growth',
      },
      {
        client: 'Industrial Manufacturer',
        result: 'Ranked #1 for 150+ industry keywords',
        metric: '4x organic traffic',
      },
    ],
    whyChooseUs: [
      'HubSpot and Salesforce certified implementation team',
      'ABM expertise across SaaS, manufacturing, and professional services',
      'Lead scoring models that align marketing and sales',
      'B2B content team that understands complex buying journeys',
      'Pipeline attribution and revenue reporting built for B2B',
    ],
    faqs: [
      {
        question: 'Do you work with our sales team?',
        answer:
          'Yes. We integrate closely with sales — aligning on ICP, lead scoring, SLAs, and feedback loops so marketing-sourced leads actually convert.',
      },
      {
        question: 'Can you help with account-based marketing?',
        answer:
          'Yes. We build ABM programs targeting named accounts with personalized content, LinkedIn outreach, and paid campaigns to engage full buying committees.',
      },
      {
        question: 'How do you measure B2B marketing ROI?',
        answer:
          'We track MQLs, SQLs, pipeline influenced, and closed-won revenue — connecting marketing activity to sales outcomes with multi-touch attribution.',
      },
    ],
    metaTitle: 'B2B Digital Marketing | ABM, Lead Gen & Pipeline Growth',
    metaDescription:
      'Generate qualified B2B pipeline with account-based marketing, thought-leadership content, LinkedIn outreach, and lead nurture systems.',
  },
  {
    slug: 'legal',
    name: 'Legal',
    icon: Scale,
    image:
      'https://images.pexels.com/photos/566877/pexels-photo-566877.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Win high-value cases with local SEO, authority content, and compliant legal marketing.',
    heroTitle: 'Digital Marketing for Law Firms',
    heroDescription:
      'Attract high-value cases with local SEO, authoritative legal content, and compliant marketing that builds trust before the first consultation.',
    challenges: [
      {
        title: 'Bar Council Advertising Rules',
        description:
          'Legal marketing is heavily regulated. Claims, comparisons, and solicitation are restricted — compliance is non-negotiable.',
      },
      {
        title: 'High-Intent Local Search',
        description:
          'Clients search “lawyer near me” in moments of need. Winning local search and reviews is everything.',
      },
      {
        title: 'Building Trust Pre-Consultation',
        description:
          'Clients choose lawyers they trust. Demonstrating expertise and authority before the first call is critical.',
      },
      {
        title: 'Case Intake Efficiency',
        description:
          'Slow or clunky intake loses cases to faster competitors. A smooth intake-to-consultation flow is essential.',
      },
    ],
    solutions: [
      {
        title: 'Local SEO for Law Firms',
        description:
          'Dominate “lawyer in [city]” searches with optimized Google Business Profiles, local citations, and review generation.',
      },
      {
        title: 'Authority Legal Content',
        description:
          'Practice-area pages and legal guides that demonstrate expertise, answer client questions, and rank for high-intent queries.',
      },
      {
        title: 'Compliant Lead Capture',
        description:
          'Conversion-optimized intake forms and live chat that comply with bar rules while maximizing case inquiries.',
      },
      {
        title: 'Reputation Building',
        description:
          'Systematic review generation and reputation management to build the social proof clients rely on.',
      },
    ],
    servicesOffered: [
      'Local SEO & Google Business Profile',
      'Law Firm Website Development',
      'Practice Area Content & Legal Guides',
      'Google Ads for Case Acquisition',
      'Online Intake & Consultation Booking',
      'Reputation & Review Management',
    ],
    successStories: [
      {
        client: 'Personal Injury Firm',
        result: 'Doubled case inquiries in 6 months',
        metric: '220% lead growth',
      },
      {
        client: 'Corporate Law Practice',
        result: 'Ranked #1 for 90+ practice keywords',
        metric: '5x organic traffic',
      },
      {
        client: 'Family Law Attorney',
        result: 'Filled consultation calendar',
        metric: '3x booked consultations',
      },
    ],
    whyChooseUs: [
      'Bar-council-compliant marketing processes',
      'Experience with personal injury, corporate, family, and criminal law',
      'Legal content written with accuracy and authority',
      'Local SEO framework built for competitive legal markets',
      'Compliant intake systems that convert without solicitation',
    ],
    faqs: [
      {
        question: 'Are your marketing practices compliant with bar rules?',
        answer:
          'Yes. We follow Bar Council advertising guidelines — no misleading claims, no solicitation, no comparison guarantees. We recommend your firm review all ad copy before launch.',
      },
      {
        question: 'Can you help us get more client reviews?',
        answer:
          'Yes. We set up compliant, post-matter review request flows on Google to build the social proof prospective clients rely on.',
      },
      {
        question: 'Do you build case intake systems?',
        answer:
          'Yes. We build online intake forms and consultation booking systems that qualify leads and route them to the right attorney.',
      },
    ],
    metaTitle: 'Legal Digital Marketing | Law Firm SEO & Case Generation',
    metaDescription:
      'Win high-value cases with local SEO, authority legal content, and bar-compliant marketing that builds trust before the first consultation.',
  },
  {
    slug: 'finance',
    name: 'Finance',
    icon: Landmark,
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Acquire and retain customers with compliant, trust-building financial marketing.',
    heroTitle: 'Digital Marketing for Finance',
    heroDescription:
      'Grow your financial services brand with compliant, trust-building marketing — SEO for high-intent financial queries, educational content, and lead capture that converts cautious researchers into clients.',
    challenges: [
      {
        title: 'Regulatory Compliance',
        description:
          'Financial marketing is heavily regulated. Disclosures, claims, and ad copy must satisfy SEBI, RBI, and IRDAI guidelines.',
      },
      {
        title: 'Building Trust',
        description:
          'Customers entrust you with their money. Trust must be earned through transparency, education, and social proof.',
      },
      {
        title: 'High-Intent Search Competition',
        description:
          '“Best mutual fund,” “low-interest loan,” and similar queries are fiercely contested by large incumbents.',
      },
      {
        title: 'Complex Product Education',
        description:
          'Financial products are complex. Educating customers enough to convert — without overwhelming them — is a fine line.',
      },
    ],
    solutions: [
      {
        title: 'Financial SEO',
        description:
          'Rank for high-intent financial queries with authoritative, accurate content that builds trust and drives applications.',
      },
      {
        title: 'Educational Content',
        description:
          'Guides, calculators, and videos that simplify complex products and position your brand as a trusted advisor.',
      },
      {
        title: 'Compliant Lead Generation',
        description:
          'Landing pages and forms that capture qualified leads while satisfying regulatory disclosure requirements.',
      },
      {
        title: 'Trust & Reputation',
        description:
          'Review generation, case studies, and thought leadership that build the credibility cautious financial customers demand.',
      },
    ],
    servicesOffered: [
      'Financial Services SEO',
      'Educational Content & Calculators',
      'Compliant Lead Generation',
      'Google & Meta Ads',
      'Email & SMS Nurture',
      'Reputation & Trust Building',
    ],
    successStories: [
      {
        client: 'Fintech Lending Platform',
        result: 'Doubled loan applications',
        metric: '210% lead growth',
      },
      {
        client: 'Wealth Management Firm',
        result: 'Tripled AUM inquiries',
        metric: '320% qualified leads',
      },
      {
        client: 'Insurance Broker',
        result: 'Ranked #1 for 60+ policy keywords',
        metric: '4x organic traffic',
      },
    ],
    whyChooseUs: [
      'SEBI, RBI, and IRDAI-aware marketing processes',
      'Experience with fintech, lending, insurance, and wealth management',
      'Financial content reviewed for accuracy and compliance',
      'Trust-building content that converts cautious researchers',
      'Compliant lead capture with proper disclosures',
    ],
    faqs: [
      {
        question: 'Are your marketing practices compliant with financial regulations?',
        answer:
          'We follow SEBI, RBI, and IRDAI advertising guidelines and include required disclosures. We recommend your compliance team review all ad copy and landing pages before launch.',
      },
      {
        question: 'Can you help with educational content?',
        answer:
          'Yes. We create guides, calculators, and videos that simplify complex financial products and build trust with cautious researchers.',
      },
      {
        question: 'Do you build lead capture systems for financial products?',
        answer:
          'Yes. We build compliant landing pages and forms with proper disclosures that capture qualified leads for loans, insurance, investments, and accounts.',
      },
    ],
    metaTitle: 'Finance Digital Marketing | Compliant Financial Lead Gen',
    metaDescription:
      'Acquire and retain financial customers with compliant, trust-building marketing — SEO, educational content, and lead capture for fintech, lending, and insurance.',
  },
  {
    slug: 'education',
    name: 'Education',
    icon: GraduationCap,
    image:
      'https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Drive enrollments with student-focused SEO, content, and high-intent ad campaigns.',
    heroTitle: 'Digital Marketing for Education',
    heroDescription:
      'Fill your classrooms and courses with student-focused marketing — SEO for high-intent course searches, content that answers student questions, and campaigns that drive enrollments.',
    challenges: [
      {
        title: 'Seasonal Enrollment Cycles',
        description:
          'Admissions happen in cycles. Missing the peak search window means losing an entire cohort to competitors.',
      },
      {
        title: 'Student & Parent Audiences',
        description:
          'You market to two audiences — students and parents — with different concerns, platforms, and messaging.',
      },
      {
        title: 'Course-Specific Search',
        description:
          'Students search by course and career outcome. Ranking for “best [course] in [city]” requires targeted content.',
      },
      {
        title: 'Proving Outcomes',
        description:
          'Students and parents want proof — placements, rankings, alumni success. Showcasing outcomes builds enrollment.',
      },
    ],
    solutions: [
      {
        title: 'Course-Specific SEO',
        description:
          'Rank for “best [course] in [city]” with dedicated course pages, career-outcome content, and local SEO.',
      },
      {
        title: 'Student & Parent Content',
        description:
          'Guides, videos, and webinars that address the distinct concerns of students and parents at each funnel stage.',
      },
      {
        title: 'Enrollment Campaigns',
        description:
          'Google and Meta campaigns timed to admission cycles, with landing pages optimized for inquiry and application.',
      },
      {
        title: 'Outcome Showcasing',
        description:
          'Placement reports, alumni stories, and campus content that prove outcomes and build enrollment confidence.',
      },
    ],
    servicesOffered: [
      'Course & Program SEO',
      'Education Website Development',
      'Student & Parent Content',
      'Google & Meta Enrollment Ads',
      'Inquiry & Application Funnels',
      'Webinar & Open Day Marketing',
    ],
    successStories: [
      {
        client: 'Management Institute',
        result: 'Doubled admission inquiries',
        metric: '210% lead growth',
      },
      {
        client: 'EdTech Platform',
        result: 'Tripled course enrollments',
        metric: '320% enrollment growth',
      },
      {
        client: 'K-12 School Chain',
        result: 'Filled 95% of seats online',
        metric: '4x inquiry volume',
      },
    ],
    whyChooseUs: [
      'Experience with K-12, higher ed, edtech, and coaching institutes',
      'Course-specific SEO framework for competitive education markets',
      'Student and parent persona expertise across platforms',
      'Admission-cycle campaign planning and execution',
      'Inquiry and application funnel optimization',
    ],
    faqs: [
      {
        question: 'Can you help with admission cycle campaigns?',
        answer:
          'Yes. We plan and execute campaigns timed to your admission cycles, ramping up before peak search windows to capture the full cohort.',
      },
      {
        question: 'Do you market to both students and parents?',
        answer:
          'Yes. We create distinct messaging, content, and campaigns for students and parents, who have different concerns and use different platforms.',
      },
      {
        question: 'Can you build inquiry and application systems?',
        answer:
          'Yes. We build online inquiry forms, application portals, and follow-up nurture flows that convert interest into enrollments.',
      },
    ],
    metaTitle: 'Education Digital Marketing | Student Enrollment & SEO',
    metaDescription:
      'Drive enrollments with student-focused SEO, content, and high-intent ad campaigns timed to admission cycles for schools, colleges, and edtech.',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: Hotel,
    image:
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Fill rooms and tables with direct-booking SEO, reputation management, and seasonal campaigns.',
    heroTitle: 'Digital Marketing for Hospitality',
    heroDescription:
      'Increase direct bookings and reduce OTA dependency with local SEO, reputation management, and seasonal campaigns that fill rooms and tables year-round.',
    challenges: [
      {
        title: 'OTA Commission Dependency',
        description:
          'Online travel agencies take 15–25% commission. Driving direct bookings is essential to protect margins.',
      },
      {
        title: 'Seasonal Demand',
        description:
          'Hospitality is seasonal. Filling off-peak periods without discounting brand value is a constant challenge.',
      },
      {
        title: 'Review-Driven Decisions',
        description:
          'Travelers book based on reviews. Managing reputation across Google, TripAdvisor, and Booking is critical.',
      },
      {
        title: 'Visual Storytelling',
        description:
          'Hospitality sells on experience. Showcasing rooms, amenities, and location with fast-loading visuals is essential.',
      },
    ],
    solutions: [
      {
        title: 'Direct Booking SEO',
        description:
          'Rank for “hotels in [city]” and “restaurants near me” with local SEO, schema, and review-driven visibility.',
      },
      {
        title: 'Reputation Management',
        description:
          'Automated review requests and response management across Google, TripAdvisor, and Booking to build trust.',
      },
      {
        title: 'Seasonal Campaigns',
        description:
          'Google and Meta campaigns timed to demand peaks and off-peak promotions to fill capacity year-round.',
      },
      {
        title: 'Visual Experience',
        description:
          'Fast, immersive websites with photo galleries, virtual tours, and instant booking widgets.',
      },
    ],
    servicesOffered: [
      'Local SEO & Google Business Profile',
      'Hotel & Restaurant Website Development',
      'Direct Booking Engine Integration',
      'Google & Meta Seasonal Campaigns',
      'Reputation & Review Management',
      'Email & Loyalty Marketing',
    ],
    successStories: [
      {
        client: 'Boutique Hotel Chain',
        result: 'Doubled direct bookings',
        metric: '210% direct revenue',
      },
      {
        client: 'Fine Dining Restaurant',
        result: 'Filled 95% of covers online',
        metric: '4x reservation volume',
      },
      {
        client: 'Resort Group',
        result: 'Reduced OTA dependency by 40%',
        metric: '₹2Cr saved in commissions',
      },
    ],
    whyChooseUs: [
      'Experience with hotels, resorts, restaurants, and travel brands',
      'Direct booking engine and channel manager integrations',
      'Reputation management across Google, TripAdvisor, and Booking',
      'Seasonal campaign planning for peak and off-peak demand',
      'Immersive, fast-loading visual websites',
    ],
    faqs: [
      {
        question: 'Can you help us get more direct bookings?',
        answer:
          'Yes. We build direct-booking websites, optimize local SEO, and run campaigns that drive traffic to your own booking engine — reducing OTA commission dependency.',
      },
      {
        question: 'Do you manage reviews across platforms?',
        answer:
          'Yes. We set up automated review requests and manage responses across Google, TripAdvisor, Booking, and Zomato to build trust and rankings.',
      },
      {
        question: 'Can you help with off-peak season demand?',
        answer:
          'Yes. We run targeted campaigns and promotions for off-peak periods — staycation packages, weekday offers, and event-driven demand — without discounting your brand.',
      },
    ],
    metaTitle: 'Hospitality Digital Marketing | Direct Bookings & Reputation',
    metaDescription:
      'Fill rooms and tables with direct-booking SEO, reputation management, and seasonal campaigns that reduce OTA dependency and drive year-round demand.',
  },
  {
    slug: 'food',
    name: 'Food & Beverage',
    icon: UtensilsCrossed,
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Fill tables and grow orders with local SEO, visual content, and delivery-platform marketing.',
    heroTitle: 'Digital Marketing for Food & Beverage',
    heroDescription:
      'Fill tables, grow delivery orders, and build a loyal following with local SEO, scroll-stopping food content, and reputation management that makes your brand the obvious choice.',
    challenges: [
      {
        title: 'Local Search Visibility',
        description:
          'Diners search “restaurants near me.” Winning the Map Pack and Zomato/Swiggy rankings is everything.',
      },
      {
        title: 'Visual Appetite Appeal',
        description:
          'Food sells on visuals. Scroll-stopping photos and reels that load fast and look irresistible are essential.',
      },
      {
        title: 'Review & Rating Impact',
        description:
          'A 0.1 rating difference changes your ranking on Zomato and Swiggy. Review management is make-or-break.',
      },
      {
        title: 'Delivery Platform Competition',
        description:
          'Standing out on Zomato and Swiggy — with thousands of competitors — requires optimization and promotion.',
      },
    ],
    solutions: [
      {
        title: 'Local SEO & Map Pack',
        description:
          'Dominate “restaurants near me” with optimized Google Business Profiles, local citations, and review generation.',
      },
      {
        title: 'Visual Food Content',
        description:
          'Professional food photography, reels, and UGC campaigns that make your menu irresistible on social.',
      },
      {
        title: 'Reputation Management',
        description:
          'Automated review requests and response management across Google, Zomato, and Swiggy to lift ratings.',
      },
      {
        title: 'Delivery Platform Growth',
        description:
          'Optimization and promoted listings on Zomato and Swiggy to stand out and grow delivery orders.',
      },
    ],
    servicesOffered: [
      'Local SEO & Google Business Profile',
      'Food Photography & Reels',
      'Instagram & Facebook Marketing',
      'Reputation & Review Management',
      'Zomato & Swiggy Optimization',
      'Loyalty & WhatsApp Marketing',
    ],
    successStories: [
      {
        client: 'Casual Dining Chain',
        result: 'Doubled weekend covers',
        metric: '210% reservation growth',
      },
      {
        client: 'Cloud Kitchen Brand',
        result: 'Tripled delivery orders',
        metric: '320% order growth',
      },
      {
        client: 'Fine Dining Restaurant',
        result: 'Lifted Zomato rating from 3.8 to 4.5',
        metric: '4x discovery impressions',
      },
    ],
    whyChooseUs: [
      'In-house food photography and reel production team',
      'Local SEO framework for competitive food markets',
      'Zomato and Swiggy optimization expertise',
      'WhatsApp Business loyalty and re-engagement campaigns',
      'Reputation management across all major review platforms',
    ],
    faqs: [
      {
        question: 'Can you help us rank higher on Zomato and Swiggy?',
        answer:
          'Yes. We optimize listings, manage reviews to lift ratings, and use promoted listings strategically to grow discovery and orders on delivery platforms.',
      },
      {
        question: 'Do you create food content?',
        answer:
          'Yes. Our in-house team produces professional food photography, reels, and UGC-style content that performs on Instagram and Facebook.',
      },
      {
        question: 'Can you help fill tables on slow days?',
        answer:
          'Yes. We run targeted campaigns and WhatsApp loyalty offers for slow days — weekday lunches, happy hours, and events — to fill capacity without discounting your brand.',
      },
    ],
    metaTitle: 'Food & Beverage Digital Marketing | Restaurants & Cloud Kitchens',
    metaDescription:
      'Fill tables and grow delivery orders with local SEO, scroll-stopping food content, reputation management, and delivery-platform marketing.',
  },
  {
    slug: 'beauty',
    name: 'Beauty & Wellness',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Book more appointments with visual social marketing, local SEO, and influencer partnerships.',
    heroTitle: 'Digital Marketing for Beauty & Wellness',
    heroDescription:
      'Fill your appointment calendar with visual social marketing, local SEO, influencer partnerships, and booking systems that turn followers into loyal clients.',
    challenges: [
      {
        title: 'Visual-First Audience',
        description:
          'Beauty clients choose with their eyes. Instagram-worthy visuals and before/after content are non-negotiable.',
      },
      {
        title: 'Local Discovery',
        description:
          'Clients search “salon near me” and “spa near me.” Winning local search and reviews drives walk-ins.',
      },
      {
        title: 'Influencer Saturation',
        description:
          'Every brand works with influencers. Standing out requires authentic partnerships and UGC, not paid posts.',
      },
      {
        title: 'Appointment Retention',
        description:
          'Acquisition is expensive. Rebooking and loyalty programs are essential to maximize client lifetime value.',
      },
    ],
    solutions: [
      {
        title: 'Visual Social Marketing',
        description:
          'Scroll-stopping Instagram content, reels, and before/after showcases that turn followers into bookings.',
      },
      {
        title: 'Local SEO & Reviews',
        description:
          'Dominate “salon near me” and “spa near me” with optimized Google Business Profiles and review generation.',
      },
      {
        title: 'Influencer & UGC',
        description:
          'Authentic micro-influencer partnerships and user-generated content that build trust and social proof.',
      },
      {
        title: 'Booking & Loyalty',
        description:
          'Online booking systems and WhatsApp loyalty programs that drive rebooking and maximize lifetime value.',
      },
    ],
    servicesOffered: [
      'Instagram & Facebook Marketing',
      'Local SEO & Google Business Profile',
      'Influencer & UGC Campaigns',
      'Online Booking Systems',
      'WhatsApp Loyalty & Rebooking',
      'Reputation & Review Management',
    ],
    successStories: [
      {
        client: 'Premium Salon Chain',
        result: 'Doubled appointment bookings',
        metric: '210% booking growth',
      },
      {
        client: 'Skincare Brand',
        result: 'Scaled to ₹2Cr monthly revenue',
        metric: '4.5x ROAS',
      },
      {
        client: 'Wellness Spa',
        result: 'Filled 90% of slots online',
        metric: '3x repeat bookings',
      },
    ],
    whyChooseUs: [
      'In-house beauty content and reel production team',
      'Micro-influencer network across beauty and wellness',
      'Local SEO framework for salon and spa markets',
      'WhatsApp Business booking and loyalty automation',
      'Instagram-first visual marketing expertise',
    ],
    faqs: [
      {
        question: 'Can you help us get more Instagram followers and bookings?',
        answer:
          'Yes. We create scroll-stopping visual content, run targeted campaigns, and build booking funnels that turn Instagram followers into paying clients.',
      },
      {
        question: 'Do you work with influencers?',
        answer:
          'Yes. We manage micro-influencer partnerships and UGC campaigns with authentic creators in the beauty and wellness space to build trust and social proof.',
      },
      {
        question: 'Can you build an online booking system?',
        answer:
          'Yes. We build online booking systems with WhatsApp reminders and loyalty programs that drive rebooking and maximize client lifetime value.',
      },
    ],
    metaTitle: 'Beauty & Wellness Digital Marketing | Salons, Spas & Skincare',
    metaDescription:
      'Book more appointments with visual social marketing, local SEO, influencer partnerships, and booking systems for salons, spas, and skincare brands.',
  },
  {
    slug: 'more',
    name: 'More Industries',
    icon: Briefcase,
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    shortDescription:
      'Custom digital marketing strategies for any industry — from manufacturing to nonprofits.',
    heroTitle: 'Digital Marketing for Every Industry',
    heroDescription:
      'Whatever your industry, we build a custom digital marketing strategy tailored to your audience, sales cycle, and growth goals — backed by 12+ years of cross-sector experience.',
    challenges: [
      {
        title: 'Unique Industry Dynamics',
        description:
          'Every industry has its own buyer behavior, regulations, and competitive landscape. Generic strategies fail.',
      },
      {
        title: 'Specialized Audience Targeting',
        description:
          'Reaching niche audiences — engineers, procurement officers, niche consumers — requires specialized targeting.',
      },
      {
        title: 'Industry-Specific Compliance',
        description:
          'From pharma to finance to government, each sector has marketing rules that must be respected.',
      },
      {
        title: 'Proving Industry Expertise',
        description:
          'Buyers want specialists, not generalists. Demonstrating deep industry understanding builds trust.',
      },
    ],
    solutions: [
      {
        title: 'Custom Strategy',
        description:
          'We start with a deep dive into your industry, audience, and competitors to build a strategy that fits — not a template.',
      },
      {
        title: 'Specialized Targeting',
        description:
          'We use platform-specific targeting — LinkedIn job titles, search intent, niche communities — to reach your exact audience.',
      },
      {
        title: 'Compliance-Aware Execution',
        description:
          'We adapt campaigns to your industry’s regulatory and compliance requirements without sacrificing performance.',
      },
      {
        title: 'Industry Authority Content',
        description:
          'We create content that demonstrates deep industry understanding and positions your brand as the specialist.',
      },
    ],
    servicesOffered: [
      'Custom Digital Marketing Strategy',
      'Industry-Specific SEO & Content',
      'Targeted Paid Media Campaigns',
      'Web Development & UX',
      'Marketing Automation',
      'Analytics & Revenue Reporting',
    ],
    successStories: [
      {
        client: 'Manufacturing Company',
        result: 'Doubled B2B inquiries',
        metric: '210% lead growth',
      },
      {
        client: 'Nonprofit Organization',
        result: 'Tripled donor acquisition',
        metric: '320% donor growth',
      },
      {
        client: 'SaaS Startup',
        result: 'Scaled to 10,000 users',
        metric: '5x signups in 6 months',
      },
    ],
    whyChooseUs: [
      '12+ years of cross-industry marketing experience',
      'Custom strategies — never templated approaches',
      'Compliance-aware execution for regulated industries',
      'Specialized audience targeting across all platforms',
      'Industry authority content that builds trust',
    ],
    faqs: [
      {
        question: 'Do you work with industries not listed on your site?',
        answer:
          'Yes. We have experience across 30+ industries beyond those listed. If your industry is not featured, we still build a custom strategy tailored to your audience and goals.',
      },
      {
        question: 'How do you learn a new industry?',
        answer:
          'We start with a deep-dive discovery — interviewing your team, researching your market, and analyzing competitors — to build industry fluency before strategy.',
      },
      {
        question: 'Can you handle regulated industries?',
        answer:
          'Yes. We have experience with pharma, finance, legal, healthcare, and government — adapting campaigns to compliance requirements without sacrificing performance.',
      },
    ],
    metaTitle: 'Digital Marketing for Every Industry | Custom Growth Strategies',
    metaDescription:
      'Custom digital marketing strategies for any industry — backed by 12+ years of cross-sector experience and tailored to your audience, sales cycle, and goals.',
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
