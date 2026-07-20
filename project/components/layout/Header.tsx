

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
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
  Search,
  TrendingUp,
  Code2,
  MousePointerClick,
  PenTool,
  Share2,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';
import { BASE_URL } from '@/utils/baseUrl';

const industryIcons: Record<string, LucideIcon> = {
  'real-estate': Building2,
  healthcare: HeartPulse,
  ecommerce: ShoppingBag,
  b2b: Briefcase,
  legal: Scale,
  finance: Landmark,
  education: GraduationCap,
  hospitality: Hotel,
  food: UtensilsCrossed,
  beauty: Sparkles,
  'digital-marketing-for-ecommerce': ShoppingBag,
  more: Briefcase,
};

// Default fallback icon
const defaultIcon = Building2;

interface Industry {
  _id: string;
  title: string;
  slug: string;
  banner: {
    public_id: string;
    secure_url: string;
  };
  overview: string;
  content: string;
  benefits: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    heading: string;
    subheading: string;
    buttonText: string;
    buttonLink: string;
  };
  metaTitle: string;
  metaDescription: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Menu types
interface MenuCategory {
  _id: string;
  name: string;
  slug: string;
  services: Array<{
    _id: string;
    title: string;
    slug: string;
  }>;
}

// Icon mapping for menu categories
const menuCategoryIcons: Record<string, LucideIcon> = {
  'seo': Search,
  'digital-marketing': TrendingUp,
  'social-media': Share2,
  'web-development': Code2,
  'content-marketing': PenTool,
  'ppc': MousePointerClick,
};

const getMenuCategoryIcon = (slug: string): LucideIcon => {
  return menuCategoryIcons[slug] || Briefcase;
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileServiceSubmenu, setMobileServiceSubmenu] = useState<string | null>(null);

  // Menu data state
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [menuLoading, setMenuLoading] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  // Which service tab is active inside the "Our Services" mega menu
  const [activeServiceSlug, setActiveServiceSlug] = useState(services[0]?.slug ?? '');
  const activeService = services.find((s) => s.slug === activeServiceSlug) ?? services[0];

  const pathname = usePathname();

  // Fetch industries from API
  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${BASE_URL}/industries?status=published&limit=20`);
        const data = await res.json();
        if (data.success && data.data) {
          setIndustries(data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching industries:', error);
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  // Fetch menu data for services
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${BASE_URL}/services/menu`);
        const data = await res.json();
        if (data.success && data.data) {
          setMenuCategories(data.data);
          // Set first category as active
          if (data.data.length > 0) {
            setActiveCategoryId(data.data[0]._id);
          }
        }
        setMenuLoading(false);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setMenuLoading(false);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Helper to get icon for industry
  const getIndustryIcon = (slug: string): LucideIcon => {
    return industryIcons[slug] || defaultIcon;
  };

  // Helper to get short description from overview
  const getShortDescription = (overview: string, maxLength: number = 60) => {
    if (!overview) return '';
    if (overview.length <= maxLength) return overview;
    return overview.substring(0, maxLength) + '...';
  };

  // Get active category services
  const activeCategory = menuCategories.find(c => c._id === activeCategoryId);
  const activeCategoryServices = activeCategory?.services || [];

  return (
    <header
      className={cn(
        'fixed inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'top-0 bg-white py-3 shadow-[0_4px_24px_rgba(15,28,76,0.1)]'
          : 'top-10 bg-white py-4 border-b border-border'
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/images/logo.webp" height={160} width={160} alt='logo' />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('company')}
            >
              <button
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm  text-brand transition-colors hover:text-ocean"
              >
                Company
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMenu === 'company' && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-56 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-premium-lg">
                    <Link
                      href="/about-us"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm  text-brand transition-colors hover:bg-sky"
                    >
                      <Building2 className="h-4 w-4 text-[#0868A0]" />
                      About Us
                    </Link>
                    <Link
                      href="/careers"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm  text-brand transition-colors hover:bg-sky"
                    >
                      <Briefcase className="h-4 w-4 text-[#0868A0]" />
                      Careers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our Work */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('work')}
            >
              <button
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm  text-brand transition-colors hover:text-ocean"
              >
                Our Work
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMenu === 'work' && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-56 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-premium-lg">
                    <Link
                      href="/our-work/portfolio"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm  text-brand transition-colors hover:bg-sky"
                    >
                      <Sparkles className="h-4 w-4 text-[#0868A0]" />
                      Portfolio
                    </Link>
                    <Link
                      href="/our-work/case-studies"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm  text-brand transition-colors hover:bg-sky"
                    >
                      <TrendingUp className="h-4 w-4 text-[#0868A0]" />
                      Case Studies
                    </Link>
                    <Link
                      href="/our-work/testimonials"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm  text-brand transition-colors hover:bg-sky"
                    >
                      <HeartPulse className="h-4 w-4 text-[#0868A0]" />
                      Testimonials
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Mega Menu - Dynamic */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('industries')}
            >
              <button
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm  text-brand transition-colors hover:text-ocean"
              >
                Industries
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMenu === 'industries' && (
                <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2">
                  <div className="w-[640px] overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-premium-lg">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
                        Industries We Serve
                      </h3>
                      <Link
                        href="/industries"
                        className="flex items-center gap-1 text-sm font-semibold text-electric hover:underline"
                      >
                        View All <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                    {loading ? (
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="animate-pulse rounded-xl bg-sky p-3">
                            <div className="flex items-start gap-3">
                              <div className="h-10 w-10 rounded-lg bg-gray-200"></div>
                              <div className="flex-1">
                                <div className="h-4 w-20 rounded bg-gray-200"></div>
                                <div className="mt-1 h-3 w-32 rounded bg-gray-200"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-2">
                        {industries.map((ind) => {
                          const Icon = getIndustryIcon(ind.slug);
                          return (
                            <Link
                              key={ind._id}
                              href={`/industries/${ind.slug}`}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-sky"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-[#0868A0] transition-colors group-hover:text-[#0868A0]">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-brand">
                                  {ind.title}
                                </p>
                                <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                                  {getShortDescription(ind.overview, 50)}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Blogs */}
            <Link
              href="/blogs"
              className="rounded-lg px-4 py-2 text-sm  text-brand transition-colors hover:text-ocean"
            >
              Blogs
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 text-sm  text-brand transition-colors hover:text-ocean"
            >
              Contact
            </Link>

            {/* Services Mega Menu — Using menu API */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('services')}
            >
              <button
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm  text-brand transition-colors hover:text-ocean"
              >
                Our Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMenu === 'services' && !menuLoading && menuCategories.length > 0 && (
                <div className="absolute right-0 top-full pt-3">
                  <div className="w-[900px] overflow-hidden rounded-2xl border border-border bg-white shadow-premium-lg">
                    <div className="flex">
                      {/* Left sidebar - Categories from menu API */}
                      <div className="w-[250px] border-r border-border p-4 bg-sky/30">
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Categories
                        </h4>
                        <div className="space-y-1">
                          {menuCategories.map((category) => {
                            const Icon = getMenuCategoryIcon(category.slug);
                            const isActive = category._id === activeCategoryId;
                            return (
                              <button
                                key={category._id}
                                onMouseEnter={() => setActiveCategoryId(category._id)}
                                className={cn(
                                  'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                                  isActive
                                    ? 'bg-white text-brand shadow-sm'
                                    : 'text-muted-foreground hover:bg-white/60 hover:text-brand'
                                )}
                              >
                                <Icon className="h-4 w-4 text-[#0868A0]" />
                                {category.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right content - Services for active category */}
                      <div className="flex-1 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="text-sm font-bold text-brand">
                            {activeCategory?.name || 'Services'}
                          </h4>
                          {activeCategory && (
                            <Link
                              href={`/services/category/${activeCategory.slug}`}
                              className="text-xs font-medium text-electric hover:underline"
                            >
                              View All
                            </Link>
                          )}
                        </div>
                        
                        {activeCategoryServices.length > 0 ? (
                          <div className="grid grid-cols-2 gap-2">
                            {activeCategoryServices.map((service) => (
                              <Link
                                key={service._id}
                                href={`/services/${service.slug}`}
                                className="group rounded-lg px-3 py-2.5 transition-colors hover:bg-sky/50"
                              >
                                <p className="text-sm font-medium text-brand group-hover:text-electric">
                                  {service.title}
                                </p>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground py-4">
                            No services available in this category.
                          </p>
                        )}

                        {/* Quick action */}
                        <div className="mt-4 border-t border-border pt-3">
                          <Link
                            href="/contact"
                            className="flex items-center justify-between text-sm font-semibold text-brand transition-colors hover:text-electric"
                          >
                            <span>Not sure which service you need? Get a free audit</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark sm:inline-flex"
            >
              Get Free Proposal
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[60] text-brand lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white px-4 pb-8 pt-4"
          style={{ top: scrolled ? '64px' : '104px' }}
          >
            {[
              {
                label: 'Company',
                items: [
                  { label: 'About Us', href: '/about-us' },
                  { label: 'Careers', href: '/careers' },
                ],
              },
              {
                label: 'Our Work',
                items: [
                  { label: 'Portfolio', href: '/our-work/portfolio' },
                  { label: 'Case Studies', href: '/our-work/case-studies' },
                  { label: 'Testimonials', href: '/our-work/testimonials' },
                ],
              },
            ].map((section) => (
              <div key={section.label} className="mb-2">
                <button
                  onClick={() =>
                    setMobileSubmenu(
                      mobileSubmenu === section.label ? null : section.label
                    )
                  }
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-brand"
                >
                  {section.label}
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 transition-transform',
                      mobileSubmenu === section.label && 'rotate-180'
                    )}
                  />
                </button>
                {mobileSubmenu === section.label && (
                  <div className="ml-4 border-l-2 border-sky pl-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-electric"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Industries - Dynamic */}
            <div className="mb-2">
              <button
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === 'Industries' ? null : 'Industries'
                  )
                }
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-brand"
              >
                Industries
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    mobileSubmenu === 'Industries' && 'rotate-180'
                  )}
                />
              </button>
              {mobileSubmenu === 'Industries' && (
                <div className="ml-4 grid grid-cols-2 gap-1 border-l-2 border-sky pl-2">
                  {loading ? (
                    <p className="col-span-2 px-4 py-2.5 text-sm text-muted-foreground">
                      Loading...
                    </p>
                  ) : (
                    industries.map((ind) => (
                      <Link
                        key={ind._id}
                        href={`/industries/${ind.slug}`}
                        className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-electric"
                      >
                        {ind.title}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>

            <Link
              href="/blogs"
              className="block rounded-lg px-4 py-3 text-base font-semibold text-brand"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-4 py-3 text-base font-semibold text-brand"
            >
              Contact
            </Link>

            {/* Services — Mobile menu from API */}
            <div className="mb-2 mt-2 border-t border-border pt-2">
              <button
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === 'Services' ? null : 'Services'
                  )
                }
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-brand"
              >
                Our Services
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    mobileSubmenu === 'Services' && 'rotate-180'
                  )}
                />
              </button>
              {mobileSubmenu === 'Services' && (
                <div className="ml-4 border-l-2 border-sky pl-2">
                  {menuCategories.map((category) => (
                    <div key={category._id} className="mb-1">
                      <button
                        onClick={() =>
                          setMobileServiceSubmenu(
                            mobileServiceSubmenu === category._id ? null : category._id
                          )
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold text-brand"
                      >
                        {category.name}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            mobileServiceSubmenu === category._id && 'rotate-180'
                          )}
                        />
                      </button>
                      {mobileServiceSubmenu === category._id && (
                        <div className="ml-4 border-l-2 border-sky/60 pl-2">
                          {category.services.length > 0 ? (
                            category.services.map((service) => (
                              <Link
                                key={service._id}
                                href={`/services/${service.slug}`}
                                className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-electric"
                              >
                                {service.title}
                              </Link>
                            ))
                          ) : (
                            <p className="px-4 py-2 text-sm text-muted-foreground">
                              No services available
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="mt-4 flex items-center justify-center bg-brand px-6 py-3 text-base font-semibold text-white shadow-glow"
            >
              Get Free Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}