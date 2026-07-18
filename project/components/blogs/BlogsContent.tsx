// 'use client';

// import { useState, useMemo, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import CTABanner from '@/components/common/CTABanner';
// import { Stagger, StaggerItem } from '@/components/common/Reveal';
// import { blogPosts, blogCategories } from '@/lib/blogs';
// import { cn } from '@/lib/utils';
// import { BASE_URL } from '@/utils/baseUrl';




// export default function BlogsContent() {
//   const [search, setSearch] = useState('');
//   const [category, setCategory] = useState('All');
//   const [blogs, setBlogs] = useState<any[]>([]);
//   const featured = blogPosts.find((p) => p.featured) || blogPosts[0];

//   const getAllBlogs = async () => {
//   try {
//     const res = await fetch(`${BASE_URL}/blogs`);
//     const result = await res.json();

//     console.log(result);

//     setBlogs(result.data); // ✅ sirf array store karo
//   } catch (err) {
//     console.error(err);
//   }
// };

//   useEffect(()=>{
//     getAllBlogs();
//   },[])
  

//   const filtered = useMemo(() => {
//     return blogPosts.filter((post) => {
//       const matchesSearch =
//         post.title.toLowerCase().includes(search.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(search.toLowerCase());
//       const matchesCategory = category === 'All' || post.category === category;
//       return matchesSearch && matchesCategory;
//     });
//   }, [search, category]);

//   return (
//     <>
//       <PageHero
//         breadcrumb="Blog"
//         title="Insights to Help You Grow"
//         description="Actionable digital marketing insights, strategies, and trends from our team of experts. Learn what works — and what does not — from real campaigns."
//         image="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//       />

//       {/* Featured Blog */}
//       <section className="bg-white py-16 lg:py-20">
//         <div className="container mx-auto px-4">
//           <Link
//             href={`/blogs/${featured.slug}`}
//             className="group grid overflow-hidden rounded-3xl border border-border shadow-premium-lg transition-all hover:shadow-glow lg:grid-cols-2"
//           >
//             <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
//               <Image
//                 src={featured.image}
//                 alt={featured.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />
//               <div className="absolute left-4 top-4 bg-ocean px-4 py-1.5 text-sm font-semibold text-white">
//                 Featured
//               </div>
//             </div>
//             <div className="flex flex-col justify-center p-8 lg:p-12">
//               <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                 <span className="bg-gradient-primary-soft px-3 py-1 text-xs font-semibold text-ocean">
//                   {featured.category}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Calendar className="h-3.5 w-3.5" />
//                   {new Date(featured.date).toLocaleDateString('en-US', {
//                     month: 'long',
//                     day: 'numeric',
//                     year: 'numeric',
//                   })}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Clock className="h-3.5 w-3.5" />
//                   {featured.readTime}
//                 </span>
//               </div>
//               <h2 className="mt-4 text-2xl font-bold text-brand transition-colors group-hover:text-electric lg:text-3xl">
//                 {featured.title}
//               </h2>
//               <p className="mt-4 text-base leading-relaxed text-muted-foreground">
//                 {featured.excerpt}
//               </p>
//               <div className="mt-6 flex items-center gap-3">
//                 <div className="relative h-10 w-10 overflow-hidden rounded-full">
//                   <Image
//                     src={featured.authorImage}
//                     alt={featured.author}
//                     fill
//                     className="object-cover"
//                     sizes="40px"
//                   />
//                 </div>
//                 <span className="text-sm font-semibold text-brand">
//                   {featured.author}
//                 </span>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </section>

//       {/* Search + Categories + Posts */}
//       <section className="bg-sky py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           {/* Search */}
//           <div className="mx-auto mb-10 max-w-xl">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search articles..."
//                 className="w-full rounded-full border border-border bg-white py-3.5 pl-12 pr-4 text-brand placeholder:text-muted-foreground focus:border-electric focus:outline-none"
//               />
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="mb-12 flex flex-wrap justify-center gap-3">
//             {blogCategories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setCategory(cat)}
//                 className={cn(
//                   'px-5 py-2.5 text-sm font-semibold transition-all',
//                   category === cat
//                     ? 'gradient-primary text-white shadow-glow'
//                     : 'border border-border bg-white text-brand hover:border-electric/30 hover:text-electric'
//                 )}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Posts grid */}
//           {filtered.length > 0 ? (
//             <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
//               {filtered.map((post) => (
//                 <StaggerItem key={post.slug}>
//                   <Link
//                     href={`/blogs/${post.slug}`}
//                     className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
//                   >
//                     <div className="relative h-52 overflow-hidden">
//                       <Image
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-110"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />
//                       <div className="absolute left-4 top-4 bg-ocean px-3 py-1 text-xs font-semibold text-white">
//                         {post.category}
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center gap-4 text-xs text-muted-foreground">
//                         <span className="flex items-center gap-1">
//                           <Calendar className="h-3.5 w-3.5" />
//                           {new Date(post.date).toLocaleDateString('en-US', {
//                             month: 'short',
//                             day: 'numeric',
//                           })}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Clock className="h-3.5 w-3.5" />
//                           {post.readTime}
//                         </span>
//                       </div>
//                       <h3 className="mt-3 text-lg font-bold text-brand transition-colors group-hover:text-electric line-clamp-2">
//                         {post.title}
//                       </h3>
//                       <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
//                         {post.excerpt}
//                       </p>
//                       <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-electric">
//                         Read More
//                         <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </div>
//                     </div>
//                   </Link>
//                 </StaggerItem>
//               ))}
//             </Stagger>
//           ) : (
//             <div className="py-20 text-center">
//               <p className="text-lg text-muted-foreground">
//                 No articles found. Try a different search or category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }


'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import CTABanner from '@/components/common/CTABanner';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { blogCategories } from '@/lib/blogs'; // categories abhi bhi static rakh sakte ho
import { cn } from '@/lib/utils';
import { BASE_URL } from '@/utils/baseUrl';

// API se aane wale raw blog ko UI-friendly shape mein convert karne ke liye
function normalizeBlog(post: any) {
  return {
    id: post._id,
    title: post.title,
    slug: post.slug,
    image: post.featuredImage?.secure_url || '/placeholder.jpg',
    category: post.category,
    excerpt: post.excerpt,
    author: post.author,
    authorImage: post.authorImage || '/default-avatar.png',
    date: post.publishedDate || post.createdAt,
    readTime: post.readTime || '5 min read', // API mein nahi hai, fallback
    status: post.status,
    featured: post.featured || false,
  };
}

export default function BlogsContent() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(blogs)
  const getAllBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/blogs`);
      const result = await res.json();

      if (!result.success) throw new Error(result.message || 'Failed to fetch blogs');

      // sirf published posts UI par dikhane chahiye
      const published = (result.data || [])
        .filter((p: any) => p.status === 'published')
        .map(normalizeBlog);

      setBlogs(published);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  // featured: jise explicitly featured=true mark kiya ho, warna pehla post
  const featured = useMemo(() => {
    if (blogs.length === 0) return null;
    return blogs.find((p) => p.featured) || blogs[0];
  }, [blogs]);

  const filtered = useMemo(() => {
    return blogs.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || post.category === category;
      // featured post ko grid mein dobara mat dikhao
      return matchesSearch && matchesCategory && post.slug !== featured?.slug;
    });
  }, [search, category, blogs, featured]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <PageHero
        breadcrumb="Blog"
        title="Insights to Help You Grow"
        description="Actionable digital marketing insights, strategies, and trends from our team of experts. Learn what works — and what does not — from real campaigns."
        image="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      {/* Featured Blog */}
      {featured && (
        <section className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <Link
              href={`/blogs/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-border shadow-premium-lg transition-all hover:shadow-glow lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 bg-ocean px-4 py-1.5 text-sm font-semibold text-white">
                  Featured
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="bg-gradient-primary-soft px-3 py-1 text-xs font-semibold text-ocean">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(featured.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-brand transition-colors group-hover:text-electric lg:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://i.pinimg.com/1200x/37/6c/d3/376cd3cfce007e8dc0975fcc7469ec3d.jpg"
                      alt={featured.author}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <span className="text-sm font-semibold text-brand">
                    {featured.author}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Search + Categories + Posts */}
      <section className="bg-sky py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* Search */}
          <div className="mx-auto mb-10 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-border bg-white py-3.5 pl-12 pr-4 text-brand placeholder:text-muted-foreground focus:border-electric focus:outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  'px-5 py-2.5 text-sm font-semibold transition-all',
                  category === cat
                    ? 'gradient-primary text-white shadow-glow'
                    : 'border border-border bg-white text-brand hover:border-electric/30 hover:text-electric'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          {filtered.length > 0 ? (
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {filtered.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute left-4 top-4 bg-ocean px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-brand transition-colors group-hover:text-electric line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-electric">
                        Read More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No articles found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}