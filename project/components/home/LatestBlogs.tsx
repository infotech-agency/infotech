
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { BASE_URL } from '@/utils/baseUrl';

// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  featuredImage: {
    public_id: string;
    secure_url: string;
  };
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  author: string;
  views: number;
  publishedDate: string | null;
  createdAt: string;
  updatedAt: string;
  status: string;
  metaTitle: string;
  metaDescription: string;
}

export default function LatestBlogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/blogs?status=published&limit=3`);
        const data = await response.json();
        
        if (data.success && data.data) {
          setPosts(data.data);
        } else {
          setError('Failed to fetch blogs');
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Recent';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return 'Recent';
    }
  };

  // Calculate read time (approx 200 words per minute)
  const getReadTime = (content: string) => {
    if (!content) return '2 min read';
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
  };

  // Get fallback image if featured image is not available
  const getImageUrl = (post: BlogPost) => {
    if (post.featuredImage?.secure_url) {
      return post.featuredImage.secure_url;
    }
    // Fallback image
    return 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'technology': 'bg-blue-600',
      'tech': 'bg-blue-600',
      'marketing': 'bg-green-600',
      'seo': 'bg-purple-600',
      'web development': 'bg-orange-600',
      'digital marketing': 'bg-red-600',
      'business': 'bg-indigo-600',
      'design': 'bg-pink-600',
    };
    return colors[category.toLowerCase()] || 'bg-ocean';
  };

  if (loading) {
    return (
      <section className="bg-white py-20 lg:py-28">

        <div className="container mx-auto px-4">
           

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
            
            <SectionHeading
              align="left"
              eyebrow="Latest Blogs"
              title="Insights to Help You Grow"
              description="Actionable digital marketing insights, trends, and strategies from our team of experts."
              className="lg:mb-0"
            />
            <div className="h-12 w-40 animate-pulse rounded bg-gray-200">
              <DotLottieReact
    src="/animations/blogs.lottie"
    autoplay
    loop
    className="h-44 w-44 transition-transform duration-500 group-hover:scale-110"
  />
            </div>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-52 rounded bg-gray-200"></div>
                <div className="rounded-b-2xl border border-border bg-white p-6">
                  <div className="flex gap-4">
                    <div className="h-4 w-20 rounded bg-gray-200"></div>
                    <div className="h-4 w-16 rounded bg-gray-200"></div>
                  </div>
                  <div className="mt-3 h-6 w-3/4 rounded bg-gray-200"></div>
                  <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>
                  <div className="mt-3 h-4 w-2/3 rounded bg-gray-200"></div>
                  <div className="mt-5 h-4 w-24 rounded bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return (
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Latest Blogs"
              title="Insights to Help You Grow"
              description="Actionable digital marketing insights, trends, and strategies from our team of experts."
              className="lg:mb-0"
            />
            <Link
              href="/blogs"
              className="inline-flex flex-shrink-0 items-center gap-2 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-ocean hover:border-ocean hover:text-white"
            >
              View All Blogs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 text-center">
            <p className="text-muted-foreground">
              {error || 'No blog posts available at the moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Latest Blogs"
            title="Insights to Help You Grow"
            description="Actionable digital marketing insights, trends, and strategies from our team of experts."
            className="lg:mb-0"
          />
          <Link
            href="/blogs"
            className="inline-flex flex-shrink-0 items-center gap-2 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-ocean hover:border-ocean hover:text-white"
          >
            View All Blogs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {posts.map((post) => (
            <StaggerItem key={post._id}>
              <Link
                href={`/blogs/${post.slug}`}
                className="group block h-full overflow-hidden rounded border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={getImageUrl(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  {post.category && (
                    <div className={`absolute left-4 top-4 ${getCategoryColor(post.category)} px-3 py-1 text-xs font-semibold text-white`}>
                      {post.category}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.publishedDate || post.createdAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {getReadTime(post.content)}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-brand transition-colors group-hover:text-electric line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center bg-brand gap-2 px-6 py-2 text-sm font-semibold text-white">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    {post.author && (
                      <span className="text-xs text-muted-foreground">
                        By {post.author}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}