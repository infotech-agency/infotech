export interface PortfolioItem {
  slug: string;
  title: string;
  client: string;
  category: string;
  service: string;
  image: string;
  description: string;
  result: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'mehta-retail-ecommerce',
    title: 'Mehta Retail Ecommerce Platform',
    client: 'Mehta Retail Group',
    category: 'Ecommerce',
    service: 'Web Development',
    image:
      'https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'A fast, conversion-optimized ecommerce platform with 10,000+ products and seamless checkout.',
    result: '+210% online revenue',
  },
  {
    slug: 'luxe-skincare-brand',
    title: 'Luxe Skincare DTC Brand',
    client: 'Luxe Skincare',
    category: 'Beauty & Wellness',
    service: 'PPC',
    image:
      'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Full-funnel paid media and retention marketing for a premium DTC skincare brand.',
    result: '4.2x ROAS sustained',
  },
  {
    slug: 'propestate-property-site',
    title: 'PropEstate Property Showcase',
    client: 'PropEstate Realty',
    category: 'Real Estate',
    service: 'Web Development',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Immersive property showcase site with virtual tours and instant lead capture.',
    result: '120 units sold in 8 months',
  },
  {
    slug: 'finedge-fintech-app',
    title: 'FinEdge Loan Platform',
    client: 'FinEdge Technologies',
    category: 'Finance',
    service: 'Web Development',
    image:
      'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Compliant fintech platform with online loan applications and instant approvals.',
    result: '+210% loan applications',
  },
  {
    slug: 'cloudkitchens-brand',
    title: 'CloudKitchens Social Brand',
    client: 'CloudKitchens India',
    category: 'Food & Beverage',
    service: 'Social Media',
    image:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Instagram-first brand building and Zomato/Swiggy optimization for a cloud kitchen.',
    result: '+320% delivery orders',
  },
  {
    slug: 'kapoor-legal-site',
    title: 'Kapoor Legal Website',
    client: 'Kapoor Legal Associates',
    category: 'Legal',
    service: 'SEO',
    image:
      'https://images.pexels.com/photos/566877/pexels-photo-566877.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Compliant legal website with practice-area content and online intake system.',
    result: '+220% case inquiries',
  },
  {
    slug: 'staylux-hotel-site',
    title: 'StayLux Hotel Booking Site',
    client: 'StayLux Hotels',
    category: 'Hospitality',
    service: 'Web Development',
    image:
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Direct-booking hotel website with virtual tours and reputation management.',
    result: '+210% direct bookings',
  },
  {
    slug: 'eduprime-enrollment',
    title: 'EduPrime Enrollment Campaign',
    client: 'EduPrime Institute',
    category: 'Education',
    service: 'Digital Marketing',
    image:
      'https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Admission-cycle campaign with course-specific SEO and inquiry funnels.',
    result: '95% seats filled online',
  },
  {
    slug: 'wellness-spa-brand',
    title: 'Serenity Spa Wellness Brand',
    client: 'Serenity Wellness Spa',
    category: 'Beauty & Wellness',
    service: 'Social Media',
    image:
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Visual social marketing and influencer partnerships for a premium spa.',
    result: '+210% appointment bookings',
  },
];

export const portfolioCategories = [
  'All',
  'Ecommerce',
  'Real Estate',
  'Finance',
  'Food & Beverage',
  'Legal',
  'Hospitality',
  'Education',
  'Beauty & Wellness',
];
