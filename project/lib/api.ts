// lib/api.ts
export interface BannerImage {
  public_id: string;
  secure_url: string;
}

export interface Thumbnail {
  public_id: string;
  secure_url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CTA {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  category: string;
  bannerImage: BannerImage;
  thumbnail: Thumbnail;
  shortDescription: string;
  overview: string;
  mainContent: string;
  features: string[];
  benefits: string[];
  process: any[];
  faq: FAQ[];
  cta: CTA;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  schemaJson: string;
  featured: boolean;
  status: string;
  gallery: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Fetch a single service by slug
export async function fetchServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await fetch(`${API_URL}/api/services/slug/${slug}`, {
      next: {
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch service: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// Get all service slugs for static generation
export async function getAllServiceSlugs(): Promise<string[]> {
  try {
    const response = await fetch(`${API_URL}/api/services`, {
      next: {
        revalidate: 300 // Revalidate every 5 minutes
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }
    
    const data = await response.json();
    const services = data.data || [];
    return services.map((service: any) => service.slug);
  } catch (error) {
    console.error('Error fetching service slugs:', error);
    return [];
  }
}

// Fetch all services (optional)
export async function fetchAllServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_URL}/api/services`, {
      next: {
        revalidate: 300
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching all services:', error);
    return [];
  }
}