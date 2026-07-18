export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  service: string;
  title: string;
  summary: string;
  image: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  duration: string;
  category: 'SEO' | 'PPC' | 'Web Development' | 'Social Media' | 'Content' | 'Branding';
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mehta-retail-seo',
    client: 'Mehta Retail Group',
    industry: 'Ecommerce',
    service: 'SEO',
    title: 'How Mehta Retail Group Grew Organic Traffic 320% in 8 Months',
    summary:
      'A comprehensive SEO overhaul — technical fixes, content clusters, and authority building — that transformed organic search into the brand’s #1 revenue channel.',
    image:
      'https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    challenge:
      'Mehta Retail Group had a strong offline presence but was invisible online. Their website was slow, technically flawed, and ranked for almost no commercial keywords. Paid ads were eating their margins with rising CPCs.',
    solution:
      'We executed a full SEO overhaul: a technical audit and fix pass, a content cluster strategy targeting 200+ commercial keywords, internal linking restructuring, and a 6-month authority link-building campaign. We also rebuilt their product pages for conversion.',
    results: [
      { metric: 'Organic Traffic', value: '+320%' },
      { metric: 'Online Revenue', value: '+210%' },
      { metric: 'Keywords Ranked', value: '1,400+' },
      { metric: 'ROAS', value: '6.2x' },
    ],
    duration: '8 months',
    category: 'SEO',
  },
  {
    slug: 'luxe-skincare-ppc',
    client: 'Luxe Skincare',
    industry: 'Beauty & Wellness',
    service: 'PPC',
    title: 'Scaling Luxe Skincare to ₹5Cr Monthly Revenue at 4.2x ROAS',
    summary:
      'A full-funnel paid media strategy across Google, Meta, and influencer partnerships that scaled a DTC skincare brand profitably without sacrificing margin.',
    image:
      'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    challenge:
      'Luxe Skincare was growing but profitably. Their existing agency had scaled spend without scaling ROAS — costs were rising faster than revenue, and they were burning cash on unprofitable campaigns.',
    solution:
      'We rebuilt their account structure, implemented advanced audience segmentation, launched creative testing at scale, and built a full retention engine with Klaviyo email and WhatsApp flows. We shifted budget from cold acquisition to retargeting and retention.',
    results: [
      { metric: 'Monthly Revenue', value: '₹5Cr' },
      { metric: 'ROAS', value: '4.2x' },
      { metric: 'Repeat Purchase Rate', value: '+180%' },
      { metric: 'CAC', value: '-45%' },
    ],
    duration: '6 months',
    category: 'PPC',
  },
  {
    slug: 'propestate-realty-leads',
    client: 'PropEstate Realty',
    industry: 'Real Estate',
    service: 'Digital Marketing',
    title: 'Selling Out a 120-Unit Project at 340% ROI on Ad Spend',
    summary:
      'Hyper-local SEO, lead nurture automation, and targeted paid campaigns that sold out a premium residential project in 8 months.',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    challenge:
      'PropEstate Realty was launching a 120-unit premium residential project in a competitive market. They needed to generate qualified buyer leads, nurture them through a long sales cycle, and close sales within 12 months.',
    solution:
      'We built hyper-local landing pages for each neighborhood, ran Google and Meta campaigns targeting in-market buyers, and implemented a WhatsApp + email nurture sequence that kept buyers engaged for months. We also produced drone videography and virtual tours.',
    results: [
      { metric: 'Units Sold', value: '120/120' },
      { metric: 'ROI on Ad Spend', value: '340%' },
      { metric: 'Qualified Leads', value: '3,200+' },
      { metric: 'Time to Sell Out', value: '8 months' },
    ],
    duration: '8 months',
    category: 'PPC',
  },
  {
    slug: 'finedge-fintech-web',
    client: 'FinEdge Technologies',
    industry: 'Finance',
    service: 'Web Development',
    title: 'Rebuilding FinEdge: A Fintech Site That Doubled Loan Applications',
    summary:
      'A complete website rebuild on Next.js with compliant lead capture, online application flows, and SEO foundations that doubled loan applications.',
    image:
      'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    challenge:
      'FinEdge’s old website was slow, hard to update, and converted poorly. The application process was clunky, and they were losing qualified applicants to faster competitors. Compliance disclosures were also inconsistent.',
    solution:
      'We rebuilt the site on Next.js with a headless CMS, a streamlined online application flow with proper disclosures, and SEO-optimized product pages. We integrated with their CRM for instant lead routing and added live chat support.',
    results: [
      { metric: 'Loan Applications', value: '+210%' },
      { metric: 'Page Load Speed', value: '1.2s' },
      { metric: 'Conversion Rate', value: '+85%' },
      { metric: 'Lighthouse Score', value: '98' },
    ],
    duration: '4 months',
    category: 'Web Development',
  },
  {
    slug: 'cloudkitchens-social',
    client: 'CloudKitchens India',
    industry: 'Food & Beverage',
    service: 'Social Media Marketing',
    title: 'Tripling Delivery Orders with Instagram-First Marketing',
    summary:
      'A visual social media strategy, Zomato/Swiggy optimization, and WhatsApp loyalty that tripled delivery orders for a cloud kitchen brand.',
    image:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    challenge:
      'CloudKitchens India was competing with thousands of restaurants on Zomato and Swiggy. Their ratings were average, social presence was weak, and they had no direct relationship with customers.',
    solution:
      'We produced scroll-stopping food content, ran Instagram and Facebook campaigns, optimized their Zomato and Swiggy listings, implemented review generation, and built a WhatsApp loyalty program for repeat orders.',
    results: [
      { metric: 'Delivery Orders', value: '+320%' },
      { metric: 'Zomato Rating', value: '3.8 → 4.5' },
      { metric: 'Repeat Order Rate', value: '+180%' },
      { metric: 'Instagram Followers', value: '+95,000' },
    ],
    duration: '6 months',
    category: 'Social Media',
  },
  {
    slug: 'kapoor-legal-seo',
    client: 'Kapoor Legal Associates',
    industry: 'Legal',
    service: 'SEO',
    title: 'Doubling Case Inquiries with Compliant Legal SEO',
    summary:
      'A bar-compliant local SEO and content strategy that doubled case inquiries for a law firm without ever crossing advertising guidelines.',
    image:
      'https://images.pexels.com/photos/566877/pexels-photo-566877.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    challenge:
      'Kapoor Legal Associates was a respected firm with almost no online visibility. They wanted to grow but were cautious about bar council advertising rules and reputation.',
    solution:
      'We built a compliant local SEO strategy — Google Business Profile optimization, practice-area content, and review generation — plus a clean intake system. All content was reviewed for bar compliance before publishing.',
    results: [
      { metric: 'Case Inquiries', value: '+220%' },
      { metric: 'Local Keywords Ranked', value: '90+' },
      { metric: 'Google Reviews', value: '4.9 rating' },
      { metric: 'Consultations Booked', value: '+180%' },
    ],
    duration: '6 months',
    category: 'SEO',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
