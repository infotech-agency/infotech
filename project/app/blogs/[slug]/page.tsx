// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { notFound } from 'next/navigation';
// // // import type { Metadata } from 'next';
// // // import { Calendar, Clock, ArrowRight, ArrowLeft, List } from 'lucide-react';
// // // import PageHero from '@/components/common/PageHero';
// // // import CTABanner from '@/components/common/CTABanner';
// // // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // // import TableOfContents from '@/components/blogs/TableOfContents';
// // // import { blogPosts, getBlogPost } from '@/lib/blogs';


// // // export function generateStaticParams() {
// // //   return blogPosts.map((p) => ({ slug: p.slug }));


// // // }

// // // export function generateMetadata({
// // //   params,
// // // }: {
// // //   params: { slug: string };
// // // }): Metadata {
// // //   const post = getBlogPost(params.slug);
// // //   if (!post) return {};
// // //   return {
// // //     title: post.metaTitle,
// // //     description: post.metaDescription,
// // //     alternates: { canonical: `/blogs/${post.slug}` },
// // //     openGraph: {
// // //       title: post.metaTitle,
// // //       description: post.metaDescription,
// // //       url: `https://infotechagency.com/blogs/${post.slug}`,
// // //       images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
// // //     },
// // //   };
// // // }

// // // export default function BlogPostPage({
// // //   params,
// // // }: {
// // //   params: { slug: string };
// // // }) {
// // //   const post = getBlogPost(params.slug);
// // //   if (!post) notFound();

// // //   const headings = post.content
// // //     .filter((p) => p.startsWith('## '))
// // //     .map((p) => p.replace('## ', ''));

// // //   const related = blogPosts
// // //     .filter((p) => p.slug !== post.slug && p.category === post.category)
// // //     .slice(0, 3);

// // //   const renderContent = (paragraph: string, i: number) => {
// // //     if (paragraph.startsWith('## ')) {
// // //       const heading = paragraph.replace('## ', '');
// // //       const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
// // //       return (
// // //         <h2
// // //           key={i}
// // //           id={id}
// // //           className="mt-10 scroll-mt-32 text-2xl font-bold text-brand"
// // //         >
// // //           {heading}
// // //         </h2>
// // //       );
// // //     }
// // //     return (
// // //       <p key={i} className="mt-5 text-base leading-relaxed text-muted-foreground">
// // //         {paragraph}
// // //       </p>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       <PageHero
// // //         breadcrumb="Blog"
// // //         title={post.title}
// // //         description={post.excerpt}
// // //         image={post.image}
// // //       />

// // //       <section className="bg-white py-16 lg:py-24">
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
// // //             {/* Main content */}
// // //             <div className="max-w-3xl">
// // //               {/* Meta */}
// // //               <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
// // //                 <div className="relative h-12 w-12 overflow-hidden rounded-full">
// // //                   <Image
// // //                     src={post.authorImage}
// // //                     alt={post.author}
// // //                     fill
// // //                     className="object-cover"
// // //                     sizes="48px"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <p className="font-semibold text-brand">{post.author}</p>
// // //                   <div className="flex items-center gap-3 text-sm text-muted-foreground">
// // //                     <span className="flex items-center gap-1">
// // //                       <Calendar className="h-3.5 w-3.5" />
// // //                       {new Date(post.date).toLocaleDateString('en-US', {
// // //                         month: 'long',
// // //                         day: 'numeric',
// // //                         year: 'numeric',
// // //                       })}
// // //                     </span>
// // //                     <span className="flex items-center gap-1">
// // //                       <Clock className="h-3.5 w-3.5" />
// // //                       {post.readTime}
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Featured image */}
// // //               <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-premium-lg">
// // //                 <Image
// // //                   src={post.image}
// // //                   alt={post.title}
// // //                   fill
// // //                   className="object-cover"
// // //                   sizes="(max-width: 1024px) 100vw, 800px"
// // //                 />
// // //               </div>

// // //               {/* Content */}
// // //               <article>
// // //                 {post.content.map((para, i) => renderContent(para, i))}
// // //               </article>

// // //               {/* Tags */}
// // //               <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
// // //                 {post.tags.map((tag) => (
// // //                   <span
// // //                     key={tag}
// // //                     className="bg-sky px-4 py-2 text-sm font-medium text-brand"
// // //                   >
// // //                     #{tag}
// // //                   </span>
// // //                 ))}
// // //               </div>

// // //               {/* Back link */}
// // //               <Link
// // //                 href="/blogs"
// // //                 className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
// // //               >
// // //                 <ArrowLeft className="h-4 w-4" />
// // //                 Back to All Blogs
// // //               </Link>
// // //             </div>

// // //             {/* Sidebar - TOC */}
// // //             <aside className="lg:sticky lg:top-28 lg:self-start">
// // //               <div className="rounded-2xl border border-border bg-sky p-6 shadow-premium">
// // //                 <div className="mb-4 flex items-center gap-2">
// // //                   <List className="h-5 w-5 text-electric" />
// // //                   <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
// // //                     Table of Contents
// // //                   </h3>
// // //                 </div>
// // //                 <TableOfContents headings={headings} />
// // //               </div>

// // //               {/* CTA */}
// // //               <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-premium">
// // //                 <h3 className="text-base font-bold text-brand">
// // //                   Need Help with Your Marketing?
// // //                 </h3>
// // //                 <p className="mt-2 text-sm text-muted-foreground">
// // //                   Get a free proposal tailored to your goals.
// // //                 </p>
// // //                 <Link
// // //                   href="/contact"
// // //                   className="mt-4 inline-flex items-center gap-2 bg-ocean px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark"
// // //                 >
// // //                   Get Free Proposal
// // //                   <ArrowRight className="h-4 w-4" />
// // //                 </Link>
// // //               </div>
// // //             </aside>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Related Blogs */}
// // //       {related.length > 0 && (
// // //         <section className="bg-sky py-20 lg:py-28">
// // //           <div className="container mx-auto px-4">
// // //             <h2 className="text-2xl font-bold text-brand sm:text-3xl">
// // //               Related Articles
// // //             </h2>
// // //             <Stagger className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.1}>
// // //               {related.map((relPost) => (
// // //                 <StaggerItem key={relPost.slug}>
// // //                   <Link
// // //                     href={`/blogs/${relPost.slug}`}
// // //                     className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
// // //                   >
// // //                     <div className="relative h-44 overflow-hidden">
// // //                       <Image
// // //                         src={relPost.image}
// // //                         alt={relPost.title}
// // //                         fill
// // //                         className="object-cover transition-transform duration-500 group-hover:scale-110"
// // //                         sizes="(max-width: 768px) 100vw, 33vw"
// // //                       />
// // //                     </div>
// // //                     <div className="p-5">
// // //                       <span className="text-xs font-semibold text-electric">
// // //                         {relPost.category}
// // //                       </span>
// // //                       <h3 className="mt-2 text-base font-bold text-brand transition-colors group-hover:text-electric line-clamp-2">
// // //                         {relPost.title}
// // //                       </h3>
// // //                       <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-electric">
// // //                         Read More
// // //                         <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
// // //                       </div>
// // //                     </div>
// // //                   </Link>
// // //                 </StaggerItem>
// // //               ))}
// // //             </Stagger>
// // //           </div>
// // //         </section>
// // //       )}

// // //       <CTABanner />
// // //     </>
// // //   );
// // // }

// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { notFound } from 'next/navigation';
// // // import type { Metadata } from 'next';
// // // import { Calendar, Clock, ArrowRight, ArrowLeft, List } from 'lucide-react';
// // // import PageHero from '@/components/common/PageHero';
// // // import CTABanner from '@/components/common/CTABanner';
// // // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // // import TableOfContents from '@/components/blogs/TableOfContents';
// // // import { BASE_URL } from '@/utils/baseUrl';

// // // // ---------- helpers ----------

// // // function normalizeBlog(post: any) {
// // //   return {
// // //     id: post._id,
// // //     title: post.title,
// // //     slug: post.slug,
// // //     image: post.featuredImage?.secure_url || '/placeholder.jpg',
// // //     category: post.category,
// // //     excerpt: post.excerpt,
// // //     author: post.author,
// // //     authorImage: post.authorImage || '/default-avatar.png',
// // //     date: post.publishedDate || post.createdAt,
// // //     readTime: post.readTime || '5 min read',
// // //     tags: post.tags || [],
// // //     metaTitle: post.metaTitle || post.title,
// // //     metaDescription: post.metaDescription || post.excerpt,
// // //     status: post.status,
// // //     // API se HTML string aata hai (content field), isliye string treat karenge
// // //     content: post.content || '',
// // //   };
// // // }

// // // async function getAllBlogs() {
// // //   try {
// // //     const res = await fetch(`${BASE_URL}/blogs`, { cache: 'no-store' });
// // //     if (!res.ok) return [];
// // //     const result = await res.json();
// // //     if (!result.success) return [];
// // //     return (result.data || [])
// // //       .filter((p: any) => p.status === 'published')
// // //       .map(normalizeBlog);
// // //   } catch (err) {
// // //     console.error('Failed to fetch blogs', err);
// // //     return [];
// // //   }
// // // }

// // // async function getBlogBySlug(slug: string) {
// // //   try {
// // //     // Agar backend single-blog endpoint deta hai (e.g. /blogs/:slug), wahi use karo —
// // //     // zyada efficient hai poori list fetch karne se.
// // //     const res = await fetch(`${BASE_URL}/blogs/${slug}`, { cache: 'no-store' });
// // //     if (res.ok) {
// // //       const result = await res.json();
// // //       if (result.success && result.data) return normalizeBlog(result.data);
// // //     }
// // //   } catch (err) {
// // //     console.error('Failed to fetch blog by slug', err);
// // //   }

// // //   // Fallback: agar single-slug endpoint nahi hai, poori list se find karo
// // //   const all = await getAllBlogs();
// // //   return all.find((p) => p.slug === slug) || null;
// // // }

// // // // ---------- static params ----------

// // // export async function generateStaticParams() {
// // //   const blogs = await getAllBlogs();
// // //   return blogs.map((p: any) => ({ slug: p.slug }));
// // // }

// // // // ---------- metadata ----------

// // // export async function generateMetadata({
// // //   params,
// // // }: {
// // //   params: { slug: string };
// // // }): Promise<Metadata> {
// // //   const post = await getBlogBySlug(params.slug);
// // //   if (!post) return {};
// // //   return {
// // //     title: post.metaTitle,
// // //     description: post.metaDescription,
// // //     alternates: { canonical: `/blogs/${post.slug}` },
// // //     openGraph: {
// // //       title: post.metaTitle,
// // //       description: post.metaDescription,
// // //       url: `https://infotechagency.com/blogs/${post.slug}`,
// // //       images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
// // //     },
// // //   };
// // // }

// // // // ---------- page ----------

// // // export default async function BlogPostPage({
// // //   params,
// // // }: {
// // //   params: { slug: string };
// // // }) {
// // //   const post = await getBlogBySlug(params.slug);
// // //   if (!post) notFound();

// // //   // content ab HTML string hai (DB se), array nahi — isliye TOC headings
// // //   // HTML se nikalne padenge, aur render dangerouslySetInnerHTML se hoga.
// // //   const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
// // //   const headings: string[] = [];
// // //   let match;
// // //   while ((match = headingRegex.exec(post.content)) !== null) {
// // //     headings.push(match[1].replace(/<[^>]+>/g, '').trim());
// // //   }

// // //   const allBlogs = await getAllBlogs();
// // //   const related = allBlogs
// // //     .filter((p: any) => p.slug !== post.slug && p.category === post.category)
// // //     .slice(0, 3);

// // //   return (
// // //     <>
// // //       <PageHero
// // //         breadcrumb="Blog"
// // //         title={post.title}
// // //         description={post.excerpt}
// // //         image={post.image}
// // //       />

// // //       <section className="bg-white py-16 lg:py-24">
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
// // //             {/* Main content */}
// // //             <div className="max-w-3xl">
// // //               {/* Meta */}
// // //               <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
// // //                 <div className="relative h-12 w-12 overflow-hidden rounded-full">
// // //                   <Image
// // //                     src={post.authorImage}
// // //                     alt={post.author}
// // //                     fill
// // //                     className="object-cover"
// // //                     sizes="48px"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <p className="font-semibold text-brand">{post.author}</p>
// // //                   <div className="flex items-center gap-3 text-sm text-muted-foreground">
// // //                     <span className="flex items-center gap-1">
// // //                       <Calendar className="h-3.5 w-3.5" />
// // //                       {new Date(post.date).toLocaleDateString('en-US', {
// // //                         month: 'long',
// // //                         day: 'numeric',
// // //                         year: 'numeric',
// // //                       })}
// // //                     </span>
// // //                     <span className="flex items-center gap-1">
// // //                       <Clock className="h-3.5 w-3.5" />
// // //                       {post.readTime}
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Featured image */}
// // //               <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-premium-lg">
// // //                 <Image
// // //                   src={post.image}
// // //                   alt={post.title}
// // //                   fill
// // //                   className="object-cover"
// // //                   sizes="(max-width: 1024px) 100vw, 800px"
// // //                 />
// // //               </div>

// // //               {/* Content - API se HTML string aata hai */}
// // //               <article
// // //                 className="prose-custom"
// // //                 dangerouslySetInnerHTML={{ __html: post.content }}
// // //               />

// // //               {/* Tags */}
// // //               {post.tags.length > 0 && (
// // //                 <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
// // //                   {post.tags.map((tag: string) => (
// // //                     <span
// // //                       key={tag}
// // //                       className="bg-sky px-4 py-2 text-sm font-medium text-brand"
// // //                     >
// // //                       #{tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {/* Back link */}
// // //               <Link
// // //                 href="/blogs"
// // //                 className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
// // //               >
// // //                 <ArrowLeft className="h-4 w-4" />
// // //                 Back to All Blogs
// // //               </Link>
// // //             </div>

// // //             {/* Sidebar - TOC */}
// // //             <aside className="lg:sticky lg:top-28 lg:self-start">
// // //               {headings.length > 0 && (
// // //                 <div className="rounded-2xl border border-border bg-sky p-6 shadow-premium">
// // //                   <div className="mb-4 flex items-center gap-2">
// // //                     <List className="h-5 w-5 text-electric" />
// // //                     <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
// // //                       Table of Contents
// // //                     </h3>
// // //                   </div>
// // //                   <TableOfContents headings={headings} />
// // //                 </div>
// // //               )}

// // //               {/* CTA */}
// // //               <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-premium">
// // //                 <h3 className="text-base font-bold text-brand">
// // //                   Need Help with Your Marketing?
// // //                 </h3>
// // //                 <p className="mt-2 text-sm text-muted-foreground">
// // //                   Get a free proposal tailored to your goals.
// // //                 </p>
// // //                 <Link
// // //                   href="/contact"
// // //                   className="mt-4 inline-flex items-center gap-2 bg-ocean px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark"
// // //                 >
// // //                   Get Free Proposal
// // //                   <ArrowRight className="h-4 w-4" />
// // //                 </Link>
// // //               </div>
// // //             </aside>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Related Blogs */}
// // //       {related.length > 0 && (
// // //         <section className="bg-sky py-20 lg:py-28">
// // //           <div className="container mx-auto px-4">
// // //             <h2 className="text-2xl font-bold text-brand sm:text-3xl">
// // //               Related Articles
// // //             </h2>
// // //             <Stagger className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.1}>
// // //               {related.map((relPost: any) => (
// // //                 <StaggerItem key={relPost.slug}>
// // //                   <Link
// // //                     href={`/blogs/${relPost.slug}`}
// // //                     className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
// // //                   >
// // //                     <div className="relative h-44 overflow-hidden">
// // //                       <Image
// // //                         src={relPost.image}
// // //                         alt={relPost.title}
// // //                         fill
// // //                         className="object-cover transition-transform duration-500 group-hover:scale-110"
// // //                         sizes="(max-width: 768px) 100vw, 33vw"
// // //                       />
// // //                     </div>
// // //                     <div className="p-5">
// // //                       <span className="text-xs font-semibold text-electric">
// // //                         {relPost.category}
// // //                       </span>
// // //                       <h3 className="mt-2 text-base font-bold text-brand transition-colors group-hover:text-electric line-clamp-2">
// // //                         {relPost.title}
// // //                       </h3>
// // //                       <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-electric">
// // //                         Read More
// // //                         <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
// // //                       </div>
// // //                     </div>
// // //                   </Link>
// // //                 </StaggerItem>
// // //               ))}
// // //             </Stagger>
// // //           </div>
// // //         </section>
// // //       )}

// // //       <CTABanner />
// // //     </>
// // //   );
// // // }


// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { notFound } from 'next/navigation';
// // import type { Metadata } from 'next';
// // import { Calendar, Clock, ArrowRight, ArrowLeft, List } from 'lucide-react';
// // import PageHero from '@/components/common/PageHero';
// // import CTABanner from '@/components/common/CTABanner';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // import TableOfContents from '@/components/blogs/TableOfContents';
// // import HtmlContent from '@/components/common/HtmlContent'; // ✅ Import HtmlContent
// // import { BASE_URL } from '@/utils/baseUrl';

// // // ---------- helpers ----------

// // function normalizeBlog(post: any) {
// //   return {
// //     id: post._id,
// //     title: post.title,
// //     slug: post.slug,
// //     image: post.featuredImage?.secure_url || '/placeholder.jpg',
// //     category: post.category,
// //     excerpt: post.excerpt,
// //     author: post.author,
// //     authorImage: post.authorImage || 'https://i.pinimg.com/1200x/37/6c/d3/376cd3cfce007e8dc0975fcc7469ec3d.jpg',
// //     date: post.publishedDate || post.createdAt,
// //     readTime: post.readTime || '5 min read',
// //     tags: post.tags || [],
// //     metaTitle: post.metaTitle || post.title,
// //     metaDescription: post.metaDescription || post.excerpt,
// //     status: post.status,
// //     content: post.content || '', // HTML string from React Quill
// //   };
// // }

// // async function getAllBlogs() {
// //   try {
// //     const res = await fetch(`${BASE_URL}/blogs`, { cache: 'no-store' });
// //     if (!res.ok) return [];
// //     const result = await res.json();
// //     if (!result.success) return [];
// //     return (result.data || [])
// //       .filter((p: any) => p.status === 'published')
// //       .map(normalizeBlog);
// //   } catch (err) {
// //     console.error('Failed to fetch blogs', err);
// //     return [];
// //   }
// // }

// // async function getBlogBySlug(slug: string) {
// //   try {
// //     const res = await fetch(`${BASE_URL}/blogs/${slug}`, { cache: 'no-store' });
// //     if (res.ok) {
// //       const result = await res.json();
// //       if (result.success && result.data) return normalizeBlog(result.data);
// //     }
// //   } catch (err) {
// //     console.error('Failed to fetch blog by slug', err);
// //   }

// //   const all = await getAllBlogs();
// //   return all.find((p) => p.slug === slug) || null;
// // }

// // // ---------- static params ----------

// // export async function generateStaticParams() {
// //   const blogs = await getAllBlogs();
// //   return blogs.map((p: any) => ({ slug: p.slug }));
// // }

// // // ---------- metadata ----------

// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: { slug: string };
// // }): Promise<Metadata> {
// //   const post = await getBlogBySlug(params.slug);
// //   if (!post) return {};
// //   return {
// //     title: post.metaTitle,
// //     description: post.metaDescription,
// //     alternates: { canonical: `/blogs/${post.slug}` },
// //     openGraph: {
// //       title: post.metaTitle,
// //       description: post.metaDescription,
// //       url: `https://infotechagency.com/blogs/${post.slug}`,
// //       images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
// //     },
// //   };
// // }

// // // ---------- page ----------

// // export default async function BlogPostPage({
// //   params,
// // }: {
// //   params: { slug: string };
// // }) {
// //   const post = await getBlogBySlug(params.slug);
// //   if (!post) notFound();

// //   // Extract headings from HTML for Table of Contents
// //   const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
// //   const headings: string[] = [];
// //   let match;
// //   while ((match = headingRegex.exec(post.content)) !== null) {
// //     headings.push(match[1].replace(/<[^>]+>/g, '').trim());
// //   }

// //   const allBlogs = await getAllBlogs();
// //   const related = allBlogs
// //     .filter((p: any) => p.slug !== post.slug && p.category === post.category)
// //     .slice(0, 3);

// //   return (
// //     <>
// //       <PageHero
// //         breadcrumb="Blog"
// //         title={post.title}
// //         description={post.excerpt}
// //         image={post.image}
// //       />

// //       <section className="bg-white py-16 lg:py-24">
// //         <div className="container mx-auto px-4">
// //           <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
// //             {/* Main content */}
// //             <div className="max-w-3xl">
// //               {/* Meta */}
// //               <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
// //                 <div className="relative h-12 w-12 overflow-hidden rounded-full">
// //                   <Image
// //                     src={post.authorImage}
// //                     alt={post.author}
// //                     fill
// //                     className="object-cover"
// //                     sizes="48px"
// //                   />
// //                 </div>
// //                 <div>
// //                   <p className="font-semibold text-brand">{post.author}</p>
// //                   <div className="flex items-center gap-3 text-sm text-muted-foreground">
// //                     <span className="flex items-center gap-1">
// //                       <Calendar className="h-3.5 w-3.5" />
// //                       {new Date(post.date).toLocaleDateString('en-US', {
// //                         month: 'long',
// //                         day: 'numeric',
// //                         year: 'numeric',
// //                       })}
// //                     </span>
// //                     <span className="flex items-center gap-1">
// //                       <Clock className="h-3.5 w-3.5" />
// //                       {post.readTime}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Featured image */}
// //               <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-premium-lg">
// //                 <Image
// //                   src={post.image}
// //                   alt={post.title}
// //                   fill
// //                   className="object-cover"
// //                   sizes="(max-width: 1024px) 100vw, 800px"
// //                 />
// //               </div>

// //               {/* ✅ Content - Using HtmlContent component instead of dangerouslySetInnerHTML */}
           
// //               <HtmlContent 
// //                 html={post.content} 
// //                 className="prose prose-lg max-w-none" 
// //               />

// //               {/* Tags */}
// //               {post.tags.length > 0 && (
// //                 <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
// //                   {post.tags.map((tag: string) => (
// //                     <span
// //                       key={tag}
// //                       className="bg-sky px-4 py-2 text-sm font-medium text-brand"
// //                     >
// //                       #{tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Back link */}
// //               <Link
// //                 href="/blogs"
// //                 className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
// //               >
// //                 <ArrowLeft className="h-4 w-4" />
// //                 Back to All Blogs
// //               </Link>
// //             </div>

// //             {/* Sidebar - TOC */}
// //             <aside className="lg:sticky lg:top-28 lg:self-start">
// //               {headings.length > 0 && (
// //                 <div className="rounded-2xl border border-border bg-sky p-6 shadow-premium">
// //                   <div className="mb-4 flex items-center gap-2">
// //                     <List className="h-5 w-5 text-electric" />
// //                     <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
// //                       Table of Contents
// //                     </h3>
// //                   </div>
// //                   <TableOfContents headings={headings} />
// //                 </div>
// //               )}

// //               {/* CTA */}
// //               <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-premium">
// //                 <h3 className="text-base font-bold text-brand">
// //                   Need Help with Your Marketing?
// //                 </h3>
// //                 <p className="mt-2 text-sm text-muted-foreground">
// //                   Get a free proposal tailored to your goals.
// //                 </p>
// //                 <Link
// //                   href="/contact"
// //                   className="mt-4 inline-flex items-center gap-2 bg-ocean px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark"
// //                 >
// //                   Get Free Proposal
// //                   <ArrowRight className="h-4 w-4" />
// //                 </Link>
// //               </div>
// //             </aside>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Related Blogs */}
// //       {related.length > 0 && (
// //         <section className="bg-sky py-20 lg:py-28">
// //           <div className="container mx-auto px-4">
// //             <h2 className="text-2xl font-bold text-brand sm:text-3xl">
// //               Related Articles
// //             </h2>
// //             <Stagger className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.1}>
// //               {related.map((relPost: any) => (
// //                 <StaggerItem key={relPost.slug}>
// //                   <Link
// //                     href={`/blogs/${relPost.slug}`}
// //                     className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg"
// //                   >
// //                     <div className="relative h-44 overflow-hidden">
// //                       <Image
// //                         src={relPost.image}
// //                         alt={relPost.title}
// //                         fill
// //                         className="object-cover transition-transform duration-500 group-hover:scale-110"
// //                         sizes="(max-width: 768px) 100vw, 33vw"
// //                       />
// //                     </div>
// //                     <div className="p-5">
// //                       <span className="text-xs font-semibold text-electric">
// //                         {relPost.category}
// //                       </span>
// //                       <h3 className="mt-2 text-base font-bold text-brand transition-colors group-hover:text-electric line-clamp-2">
// //                         {relPost.title}
// //                       </h3>
// //                       <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-electric">
// //                         Read More
// //                         <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
// //                       </div>
// //                     </div>
// //                   </Link>
// //                 </StaggerItem>
// //               ))}
// //             </Stagger>
// //           </div>
// //         </section>
// //       )}

// //       <CTABanner />
// //     </>
// //   );
// // }

// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { notFound } from 'next/navigation';
// // import type { Metadata } from 'next';
// // import { Calendar, Clock, ArrowRight, ArrowLeft, List, Grid3x3 } from 'lucide-react';
// // import PageHero from '@/components/common/PageHero';
// // import CTABanner from '@/components/common/CTABanner';
// // import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
// // import TableOfContents from '@/components/blogs/TableOfContents';
// // import HtmlContent from '@/components/common/HtmlContent';
// // import { BASE_URL } from '@/utils/baseUrl';

// // // ---------- helpers ----------

// // function normalizeBlog(post: any) {
// //   return {
// //     id: post._id,
// //     title: post.title,
// //     slug: post.slug,
// //     image: post.featuredImage?.secure_url || '/placeholder.jpg',

// //     category: post.category,
// //     excerpt: post.excerpt,
// //     author: post.author,
// //     authorImage: post.authorImage || 'https://i.pinimg.com/1200x/37/6c/d3/376cd3cfce007e8dc0975fcc7469ec3d.jpg',
// //     date: post.publishedDate || post.createdAt,
// //     readTime: post.readTime || '5 min read',
// //     tags: post.tags || [],
// //     metaTitle: post.metaTitle || post.title,
// //     metaDescription: post.metaDescription || post.excerpt,
// //     status: post.status,
// //     content: post.content || '',
// //     gallery: post.gallery || [],
// //   };
// // }

// // async function getAllBlogs() {
// //   try {
// //     const res = await fetch(`${BASE_URL}/blogs`, { cache: 'no-store' });
// //     if (!res.ok) return [];
// //     const result = await res.json();
// //     if (!result.success) return [];
// //     return (result.data || [])
// //       .filter((p: any) => p.status === 'published')
// //       .map(normalizeBlog);
// //   } catch (err) {
// //     console.error('Failed to fetch blogs', err);
// //     return [];
// //   }
// // }

// // async function getBlogBySlug(slug: string) {
// //   try {
// //     const res = await fetch(`${BASE_URL}/blogs/${slug}`, { cache: 'no-store' });
// //     if (res.ok) {
// //       const result = await res.json();
// //       if (result.success && result.data) return normalizeBlog(result.data);
// //     }
// //   } catch (err) {
// //     console.error('Failed to fetch blog by slug', err);
// //   }

// //   const all = await getAllBlogs();
// //   return all.find((p) => p.slug === slug) || null;
// // }

// // // ---------- static params ----------

// // export async function generateStaticParams() {
// //   const blogs = await getAllBlogs();
// //   return blogs.map((p: any) => ({ slug: p.slug }));
// // }

// // // ---------- metadata ----------

// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: { slug: string };
// // }): Promise<Metadata> {
// //   const post = await getBlogBySlug(params.slug);
// //   if (!post) return {};
// //   return {
// //     title: post.metaTitle,
// //     description: post.metaDescription,
// //     alternates: { canonical: `/blogs/${post.slug}` },
// //     openGraph: {
// //       title: post.metaTitle,
// //       description: post.metaDescription,
// //       url: `https://infotechagency.com/blogs/${post.slug}`,
// //       images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
// //     },
// //   };
// // }

// // // ---------- page ----------

// // export default async function BlogPostPage({
// //   params,
// // }: {
// //   params: { slug: string };
// // }) {
// //   const post = await getBlogBySlug(params.slug);
// //   if (!post) notFound();

// //   // Extract headings from HTML for Table of Contents
// //   const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
// //   const headings: string[] = [];
// //   let match;
// //   while ((match = headingRegex.exec(post.content)) !== null) {
// //     headings.push(match[1].replace(/<[^>]+>/g, '').trim());
// //   }

// //   const allBlogs = await getAllBlogs();
// //   const related = allBlogs
// //     .filter((p: any) => p.slug !== post.slug && p.category === post.category)
// //     .slice(0, 4);

// //   // Gallery images
// //   const galleryImages = post.gallery || [];

// //   return (
// //     <>
// //       <PageHero
// //         breadcrumb="Blog"
// //         title={post.title}
// //         description={post.excerpt}
// //         image={post.image}
// //       />

// //       <section className="bg-white py-16 lg:py-24">
// //         <div className="container mx-auto px-4">
// //           <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
// //             {/* Main content */}
// //             <div className="w-full max-w-3xl overflow-x-hidden">
// //               {/* Meta */}
// //               <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
// //                 <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
// //                   <Image
// //                     src={post.authorImage}
// //                     alt={post.author}
// //                     fill
// //                     className="object-cover"
// //                     sizes="48px"
// //                   />
// //                 </div>
// //                 <div>
// //                   <p className="font-semibold text-brand">{post.author}</p>
// //                   <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
// //                     <span className="flex items-center gap-1">
// //                       <Calendar className="h-3.5 w-3.5" />
// //                       {new Date(post.date).toLocaleDateString('en-US', {
// //                         month: 'long',
// //                         day: 'numeric',
// //                         year: 'numeric',
// //                       })}
// //                     </span>
// //                     <span className="flex items-center gap-1">
// //                       <Clock className="h-3.5 w-3.5" />
// //                       {post.readTime}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Featured image */}
// //               <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-premium-lg">
// //                 <Image
// //                   src={post.gallery[0]?.secure_url}
// //                   alt={post.title}
// //                   fill
// //                   className="object-cover"
// //                   sizes="(max-width: 1024px) 100vw, 800px"
// //                 />
// //               </div>

// //               {/* Content - overflow-safe, no cropped scrollbox */}
// //               <div className="relative w-full max-w-full overflow-x-hidden">
// //                 <HtmlContent
// //                   html={post.content}
// //                   className="prose prose-lg max-w-none break-words [overflow-wrap:anywhere]
// //                     prose-headings:text-brand prose-headings:scroll-mt-28
// //                     prose-a:text-electric prose-a:break-words hover:prose-a:underline
// //                     prose-strong:text-brand
// //                     prose-img:rounded-xl prose-img:w-full prose-img:h-auto prose-img:max-w-full
// //                     prose-video:w-full prose-video:rounded-xl
// //                     prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:bg-brand prose-pre:text-white
// //                     prose-code:break-words prose-code:whitespace-pre-wrap
// //                     prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-table:whitespace-nowrap
// //                     prose-iframe:w-full prose-iframe:rounded-xl"
// //                 />
// //               </div>

// //               {/* Gallery Section - Grid Layout */}
// //               {galleryImages.length > 0 && (
// //                 <div className="mt-12">
// //                   <div className="mb-6 flex items-center gap-3">
// //                     <Grid3x3 className="h-6 w-6 text-electric" />
// //                     <h3 className="text-xl font-bold text-brand">Project Gallery</h3>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
// //                     {galleryImages.map((img: any, index: number) => (
// //                       <div
// //                         key={index}
// //                         className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-sky transition-all hover:shadow-premium"
// //                       >
// //                         <Image
// //                           src={img.secure_url || img.url}
// //                           alt={`Gallery image ${index + 1}`}
// //                           fill
// //                           className="object-cover transition-transform duration-500 group-hover:scale-110"
// //                           sizes="(max-width: 768px) 50vw, 33vw"
// //                         />
// //                         {/* Overlay on hover */}
// //                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
// //                         <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
// //                           <p className="text-sm font-medium">View Image</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Related Articles - moved here, right after gallery */}
// //               {related.length > 0 && (
// //                 <div className="mt-12 border-t border-border pt-10">
// //                   <div className="mb-6 flex items-center justify-between">
// //                     <h3 className="text-xl font-bold text-brand">Related Articles</h3>
// //                     <Link
// //                       href="/blogs"
// //                       className="hidden items-center gap-1 text-sm font-semibold text-electric hover:underline sm:flex"
// //                     >
// //                       View All
// //                       <ArrowRight className="h-3.5 w-3.5" />
// //                     </Link>
// //                   </div>
// //                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// //                     {related.map((relPost: any) => (
// //                       <Link
// //                         key={relPost.slug}
// //                         href={`/blogs/${relPost.slug}`}
// //                         className="group flex items-center gap-4 rounded-xl border border-border bg-sky/30 p-3 transition-all hover:border-electric/30 hover:shadow-premium"
// //                       >
// //                         <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
// //                           <Image
// //                             src={relPost.image}
// //                             alt={relPost.title}
// //                             fill
// //                             className="object-cover transition-transform duration-300 group-hover:scale-110"
// //                             sizes="80px"
// //                           />
// //                         </div>
// //                         <div className="min-w-0 flex-1">
// //                           <p className="text-xs font-semibold text-electric">{relPost.category}</p>
// //                           <h4 className="line-clamp-2 text-sm font-medium text-brand transition-colors group-hover:text-electric">
// //                             {relPost.title}
// //                           </h4>
// //                         </div>
// //                         <ArrowRight className="h-4 w-4 flex-shrink-0 text-electric/50 transition-transform group-hover:translate-x-1 group-hover:text-electric" />
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Tags */}
// //               {post.tags.length > 0 && (
// //                 <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
// //                   {post.tags.map((tag: string) => (
// //                     <span
// //                       key={tag}
// //                       className="bg-sky px-4 py-2 text-sm font-medium text-brand"
// //                     >
// //                       #{tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Back link */}
// //               <Link
// //                 href="/blogs"
// //                 className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
// //               >
// //                 <ArrowLeft className="h-4 w-4" />
// //                 Back to All Blogs
// //               </Link>
// //             </div>

// //             {/* Sidebar - TOC + CTA only */}
// //             <aside className="lg:sticky lg:top-28 lg:self-start">
// //               {headings.length > 0 && (
// //                 <div className="rounded-2xl border border-border bg-sky p-6 shadow-premium">
// //                   <div className="mb-4 flex items-center gap-2">
// //                     <List className="h-5 w-5 text-electric" />
// //                     <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
// //                       Table of Contents
// //                     </h3>
// //                   </div>
// //                   <TableOfContents headings={headings} />
// //                 </div>
// //               )}

// //               {/* CTA */}
// //               <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-white to-sky p-6 shadow-premium">
// //                 <h3 className="text-base font-bold text-brand">
// //                   Get Expert Marketing Insights
// //                 </h3>
// //                 <p className="mt-2 text-sm text-muted-foreground">
// //                   Subscribe to our newsletter for the latest trends and strategies.
// //                 </p>
// //                 <Link
// //                   href="/contact"
// //                   className="mt-4 inline-flex items-center gap-2 bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-electric/90"
// //                 >
// //                   Subscribe Now
// //                   <ArrowRight className="h-4 w-4" />
// //                 </Link>
// //               </div>
// //             </aside>
// //           </div>
// //         </div>
// //       </section>

// //       <CTABanner />
// //     </>
// //   );
// // }

// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
// import { Calendar, Clock, ArrowRight, ArrowLeft, List, Grid3x3 } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import CTABanner from '@/components/common/CTABanner';
// import TableOfContents from '@/components/blogs/TableOfContents';
// import HtmlContent from '@/components/common/HtmlContent';
// import { BASE_URL } from '@/utils/baseUrl';

// // ---------- types ----------

// interface GalleryImage {
//   secure_url?: string;
//   url?: string;
// }

// interface NormalizedBlog {
//   id: string;
//   title: string;
//   slug: string;
//   image: string;
//   category: string;
//   excerpt: string;
//   author: string;
//   authorImage: string;
//   date: string;
//   readTime: string;
//   tags: string[];
//   metaTitle: string;
//   metaDescription: string;
//   status: string;
//   content: string;
//   gallery: GalleryImage[];
// }

// const DEFAULT_AVATAR =
//   'https://i.pinimg.com/1200x/37/6c/d3/376cd3cfce007e8dc0975fcc7469ec3d.jpg';

// // ---------- helpers ----------

// function normalizeBlog(post: any): NormalizedBlog {
//   return {
//     id: post._id,
//     title: post.title,
//     slug: post.slug,
//     image: post.featuredImage?.secure_url || '/placeholder.jpg',
//     category: post.category,
//     excerpt: post.excerpt,
//     author: post.author,
//     authorImage: post.authorImage || DEFAULT_AVATAR,
//     date: post.publishedDate || post.createdAt,
//     readTime: post.readTime || '5 min read',
//     tags: post.tags || [],
//     metaTitle: post.metaTitle || post.title,
//     metaDescription: post.metaDescription || post.excerpt,
//     status: post.status,
//     content: post.content || '',
//     gallery: post.gallery || [],
//   };
// }

// function formatDate(date: string) {
//   return new Date(date).toLocaleDateString('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   });
// }

// // Pulls plain-text H2 headings out of the rendered HTML for the table of contents.
// function extractHeadings(html: string): string[] {
//   const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
//   const headings: string[] = [];
//   let match;
//   while ((match = headingRegex.exec(html)) !== null) {
//     const text = match[1].replace(/<[^>]+>/g, '').trim();
//     if (text) headings.push(text);
//   }
//   return headings;
// }

// async function getAllBlogs(): Promise<NormalizedBlog[]> {
//   try {
//     const res = await fetch(`${BASE_URL}/blogs`, { cache: 'no-store' });
//     if (!res.ok) return [];
//     const result = await res.json();
//     if (!result.success) return [];
//     return (result.data || [])
//       .filter((p: any) => p.status === 'published')
//       .map(normalizeBlog);
//   } catch (err) {
//     console.error('Failed to fetch blogs', err);
//     return [];
//   }
// }

// async function getBlogBySlug(slug: string): Promise<NormalizedBlog | null> {
//   try {
//     const res = await fetch(`${BASE_URL}/blogs/${slug}`, { cache: 'no-store' });
//     if (res.ok) {
//       const result = await res.json();
//       if (result.success && result.data) return normalizeBlog(result.data);
//     }
//   } catch (err) {
//     console.error('Failed to fetch blog by slug', err);
//   }

//   // Fallback: some backends only expose the list endpoint reliably.
//   const all = await getAllBlogs();
//   return all.find((p) => p.slug === slug) || null;
// }

// // ---------- static params ----------

// export async function generateStaticParams() {
//   const blogs = await getAllBlogs();
//   return blogs.map((p) => ({ slug: p.slug }));
// }

// // ---------- metadata ----------

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const post = await getBlogBySlug(params.slug);
//   if (!post) return {};
//   return {
//     title: post.metaTitle,
//     description: post.metaDescription,
//     alternates: { canonical: `/blogs/${post.slug}` },
//     openGraph: {
//       title: post.metaTitle,
//       description: post.metaDescription,
//       url: `https://infotechagency.com/blogs/${post.slug}`,
//       images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
//     },
//   };
// }

// // ---------- page ----------

// export default async function BlogPostPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = await getBlogBySlug(params.slug);
//   if (!post) notFound();

//   const headings = extractHeadings(post.content);
//   const galleryImages = post.gallery;
//   // Use the first gallery image as the hero shot, but fall back to the
//   // featured image so the page never renders a broken <Image>.
//   const heroImage = galleryImages[0]?.secure_url || galleryImages[0]?.url || post.image;

//   const allBlogs = await getAllBlogs();
//   const related = allBlogs
//     .filter((p) => p.slug !== post.slug && p.category === post.category)
//     .slice(0, 4);

//   return (
//     <>
//       <PageHero
//         breadcrumb="Blog"
//         title={post.title}
//         description={post.excerpt}
//         image={post.image}
//       />

//       <section className="bg-white py-16 lg:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
//             {/* Main content */}
//             <article className="w-full max-w-3xl overflow-x-hidden">
//               {/* Meta */}
//               <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
//                 <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
//                   <Image
//                     src={post.authorImage}
//                     alt={post.author}
//                     fill
//                     className="object-cover"
//                     sizes="48px"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-brand">{post.author}</p>
//                   <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
//                     <span className="flex items-center gap-1">
//                       <Calendar className="h-3.5 w-3.5" />
//                       {formatDate(post.date)}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Clock className="h-3.5 w-3.5" />
//                       {post.readTime}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Featured image */}
//               <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-premium-lg">
//                 <Image
//                   src={heroImage}
//                   alt={post.title}
//                   fill
//                   priority
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 800px"
//                 />
//               </div>

//               {/* Content - overflow-safe, no cropped scrollbox */}
//               <div className="relative w-full max-w-full overflow-x-hidden">
//                 <HtmlContent
//                   html={post.content}
//                   className="prose prose-lg max-w-none break-words [overflow-wrap:anywhere]
//                     prose-headings:text-brand prose-headings:scroll-mt-28
//                     prose-a:text-electric prose-a:break-words hover:prose-a:underline
//                     prose-strong:text-brand
//                     prose-img:rounded-xl prose-img:w-full prose-img:h-auto prose-img:max-w-full
//                     prose-video:w-full prose-video:rounded-xl
//                     prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:bg-brand prose-pre:text-white
//                     prose-code:break-words prose-code:whitespace-pre-wrap
//                     prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-table:whitespace-nowrap
//                     prose-iframe:w-full prose-iframe:rounded-xl"
//                 />
//               </div>

//               {/* Gallery Section - Grid Layout */}
//               {galleryImages.length > 0 && (
//                 <div className="mt-12">
//                   <div className="mb-6 flex items-center gap-3">
//                     <Grid3x3 className="h-6 w-6 text-electric" />
//                     <h3 className="text-xl font-bold text-brand">Project Gallery</h3>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
//                     {galleryImages.map((img, index) => {
//                       const src = img.secure_url || img.url;
//                       if (!src) return null;
//                       return (
//                         <div
//                           key={src}
//                           className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-sky transition-all hover:shadow-premium"
//                         >
//                           <Image
//                             src={src}
//                             alt={`${post.title} — gallery image ${index + 1}`}
//                             fill
//                             className="object-cover transition-transform duration-500 group-hover:scale-110"
//                             sizes="(max-width: 768px) 50vw, 33vw"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                           <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                             <p className="text-sm font-medium">View Image</p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* Related Articles */}
//               {related.length > 0 && (
//                 <div className="mt-12 border-t border-border pt-10">
//                   <div className="mb-6 flex items-center justify-between">
//                     <h3 className="text-xl font-bold text-brand">Related Articles</h3>
//                     <Link
//                       href="/blogs"
//                       className="hidden items-center gap-1 text-sm font-semibold text-electric hover:underline sm:flex"
//                     >
//                       View All
//                       <ArrowRight className="h-3.5 w-3.5" />
//                     </Link>
//                   </div>
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     {related.map((relPost) => (
//                       <Link
//                         key={relPost.slug}
//                         href={`/blogs/${relPost.slug}`}
//                         className="group flex items-center gap-4 rounded-xl border border-border bg-sky/30 p-3 transition-all hover:border-electric/30 hover:shadow-premium"
//                       >
//                         <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
//                           <Image
//                             src={relPost.image}
//                             alt={relPost.title}
//                             fill
//                             className="object-cover transition-transform duration-300 group-hover:scale-110"
//                             sizes="80px"
//                           />
//                         </div>
//                         <div className="min-w-0 flex-1">
//                           <p className="text-xs font-semibold text-electric">{relPost.category}</p>
//                           <h4 className="line-clamp-2 text-sm font-medium text-brand transition-colors group-hover:text-electric">
//                             {relPost.title}
//                           </h4>
//                         </div>
//                         <ArrowRight className="h-4 w-4 flex-shrink-0 text-electric/50 transition-transform group-hover:translate-x-1 group-hover:text-electric" />
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Tags */}
//               {post.tags.length > 0 && (
//                 <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
//                   {post.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full bg-sky px-4 py-2 text-sm font-medium text-brand"
//                     >
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Back link */}
//               <Link
//                 href="/blogs"
//                 className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 Back to All Blogs
//               </Link>
//             </article>

//             {/* Sidebar - TOC + CTA only */}
//             <aside className="lg:sticky lg:top-28 lg:self-start">
//               {headings.length > 0 && (
//                 <div className="rounded-2xl border border-border bg-sky p-6 shadow-premium">
//                   <div className="mb-4 flex items-center gap-2">
//                     <List className="h-5 w-5 text-electric" />
//                     <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
//                       Table of Contents
//                     </h3>
//                   </div>
//                   <TableOfContents headings={headings} />
//                 </div>
//               )}

//               {/* CTA */}
//               <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-white to-sky p-6 shadow-premium">
//                 <h3 className="text-base font-bold text-brand">
//                   Get Expert Marketing Insights
//                 </h3>
//                 <p className="mt-2 text-sm text-muted-foreground">
//                   Subscribe to our newsletter for the latest trends and strategies.
//                 </p>
//                 <Link
//                   href="/contact"
//                   className="mt-4 inline-flex items-center gap-2 bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-electric/90"
//                 >
//                   Subscribe Now
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }

// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
// import {
//   Calendar,
//   Clock,
//   ArrowRight,
//   ArrowLeft,
//   List,
//   Grid3x3,
//   Linkedin,
//   Twitter,
//   Facebook,
//   BookOpen,
// } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import CTABanner from '@/components/common/CTABanner';
// import TableOfContents from '@/components/blogs/TableOfContents';
// import HtmlContent from '@/components/common/HtmlContent';
// import { BASE_URL } from '@/utils/baseUrl';

// // ---------- types ----------

// interface GalleryImage {
//   secure_url?: string;
//   url?: string;
// }

// interface NormalizedBlog {
//   id: string;
//   title: string;
//   slug: string;
//   image: string;
//   category: string;
//   excerpt: string;
//   author: string;
//   authorImage: string;
//   date: string;
//   readTime: string;
//   tags: string[];
//   metaTitle: string;
//   metaDescription: string;
//   status: string;
//   content: string;
//   gallery: GalleryImage[];
// }

// const DEFAULT_AVATAR =
//   'https://i.pinimg.com/1200x/37/6c/d3/376cd3cfce007e8dc0975fcc7469ec3d.jpg';

// // ---------- helpers ----------

// function normalizeBlog(post: any): NormalizedBlog {
//   return {
//     id: post._id,
//     title: post.title,
//     slug: post.slug,
//     image: post.featuredImage?.secure_url || '/placeholder.jpg',
//     category: post.category,
//     excerpt: post.excerpt,
//     author: post.author,
//     authorImage: post.authorImage || DEFAULT_AVATAR,
//     date: post.publishedDate || post.createdAt,
//     readTime: post.readTime || '5 min read',
//     tags: post.tags || [],
//     metaTitle: post.metaTitle || post.title,
//     metaDescription: post.metaDescription || post.excerpt,
//     status: post.status,
//     content: post.content || '',
//     gallery: post.gallery || [],
//   };
// }

// function formatDate(date: string) {
//   return new Date(date).toLocaleDateString('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   });
// }

// // Pulls plain-text H2 headings out of the rendered HTML for the table of contents.
// function extractHeadings(html: string): string[] {
//   const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
//   const headings: string[] = [];
//   let match;
//   while ((match = headingRegex.exec(html)) !== null) {
//     const text = match[1].replace(/<[^>]+>/g, '').trim();
//     if (text) headings.push(text);
//   }
//   return headings;
// }

// async function getAllBlogs(): Promise<NormalizedBlog[]> {
//   try {
//     const res = await fetch(`${BASE_URL}/blogs`, { cache: 'no-store' });
//     if (!res.ok) return [];
//     const result = await res.json();
//     if (!result.success) return [];
//     return (result.data || [])
//       .filter((p: any) => p.status === 'published')
//       .map(normalizeBlog);
//   } catch (err) {
//     console.error('Failed to fetch blogs', err);
//     return [];
//   }
// }

// async function getBlogBySlug(slug: string): Promise<NormalizedBlog | null> {
//   try {
//     const res = await fetch(`${BASE_URL}/blogs/${slug}`, { cache: 'no-store' });
//     if (res.ok) {
//       const result = await res.json();
//       if (result.success && result.data) return normalizeBlog(result.data);
//     }
//   } catch (err) {
//     console.error('Failed to fetch blog by slug', err);
//   }

//   // Fallback: some backends only expose the list endpoint reliably.
//   const all = await getAllBlogs();
//   return all.find((p) => p.slug === slug) || null;
// }

// // ---------- static params ----------

// export async function generateStaticParams() {
//   const blogs = await getAllBlogs();
//   return blogs.map((p) => ({ slug: p.slug }));
// }

// // ---------- metadata ----------

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const post = await getBlogBySlug(params.slug);
//   if (!post) return {};
//   return {
//     title: post.metaTitle,
//     description: post.metaDescription,
//     alternates: { canonical: `/blogs/${post.slug}` },
//     openGraph: {
//       title: post.metaTitle,
//       description: post.metaDescription,
//       url: `https://infotechagency.com/blogs/${post.slug}`,
//       images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
//     },
//   };
// }

// // ---------- page ----------

// export default async function BlogPostPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = await getBlogBySlug(params.slug);
//   if (!post) notFound();

//   const headings = extractHeadings(post.content);
//   const galleryImages = post.gallery;
//   // Use the first gallery image as the hero shot, but fall back to the
//   // featured image so the page never renders a broken <Image>.
//   const heroImage = galleryImages[0]?.secure_url || galleryImages[0]?.url || post.image;

//   const allBlogs = await getAllBlogs();
//   const related = allBlogs
//     .filter((p) => p.slug !== post.slug && p.category === post.category)
//     .slice(0, 4);

//   return (
//     <>
//       <PageHero
//         breadcrumb="Blog"
//         title={post.title}
//         description={post.excerpt}
//         image={post.image}
//       />

//       <section className="bg-white py-16 lg:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
//             {/* Main content */}
//             <article className="w-full max-w-3xl overflow-x-hidden">
//               {/* Category badge */}
//               <span className="mb-5 inline-block bg-gradient-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ocean">
//                 {post.category}
//               </span>

//               {/* Meta card: author, date, read time, share */}
//               <div className="mb-10 flex flex-col gap-5 rounded-2xl border border-border bg-sky/40 p-5 sm:flex-row sm:items-center sm:justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-premium">
//                     <Image
//                       src={post.authorImage}
//                       alt={post.author}
//                       fill
//                       className="object-cover"
//                       sizes="48px"
//                     />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-brand">{post.author}</p>
//                     <div className="mt-0.5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
//                       <span className="flex items-center gap-1">
//                         <Calendar className="h-3.5 w-3.5" />
//                         {formatDate(post.date)}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Clock className="h-3.5 w-3.5" />
//                         {post.readTime}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Share links */}
//                 <div className="flex items-center gap-2 border-t border-border pt-4 sm:border-t-0 sm:pt-0">
//                   <span className="hidden text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:inline">
//                     Share
//                   </span>
//                   <a
//                     href={`https://www.linkedin.com/sharing/share-offsite/?url=https://infotechagency.com/blogs/${post.slug}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Share on LinkedIn"
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-brand transition-colors hover:border-electric/30 hover:text-electric"
//                   >
//                     <Linkedin className="h-4 w-4" />
//                   </a>
//                   <a
//                     href={`https://twitter.com/intent/tweet?url=https://infotechagency.com/blogs/${post.slug}&text=${encodeURIComponent(post.title)}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Share on X"
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-brand transition-colors hover:border-electric/30 hover:text-electric"
//                   >
//                     <Twitter className="h-4 w-4" />
//                   </a>
//                   <a
//                     href={`https://www.facebook.com/sharer/sharer.php?u=https://infotechagency.com/blogs/${post.slug}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Share on Facebook"
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-brand transition-colors hover:border-electric/30 hover:text-electric"
//                   >
//                     <Facebook className="h-4 w-4" />
//                   </a>
//                 </div>
//               </div>

//               {/* Featured image */}
//               <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-premium-lg">
//                 <Image
//                   src={heroImage}
//                   alt={post.title}
//                   fill
//                   priority
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 800px"
//                 />
//               </div>

//               {/* Content - overflow-safe, no cropped scrollbox */}
//               <div className="relative w-full max-w-full overflow-x-hidden">
//                 <HtmlContent
//                   html={post.content}
//                   className="prose prose-lg max-w-none break-words [overflow-wrap:anywhere]
//                     prose-headings:text-brand prose-headings:scroll-mt-28
//                     prose-a:text-electric prose-a:break-words hover:prose-a:underline
//                     prose-strong:text-brand
//                     prose-img:rounded-xl prose-img:w-full prose-img:h-auto prose-img:max-w-full
//                     prose-video:w-full prose-video:rounded-xl
//                     prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:bg-brand prose-pre:text-white
//                     prose-code:break-words prose-code:whitespace-pre-wrap
//                     prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-table:whitespace-nowrap
//                     prose-iframe:w-full prose-iframe:rounded-xl"
//                 />
//               </div>

//               {/* Gallery Section - Grid Layout */}
//               {galleryImages.length > 0 && (
//                 <div className="mt-14 border-t border-border pt-10">
//                   <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-electric">
//                     Visuals
//                   </p>
//                   <div className="mb-6 flex items-center gap-2">
//                     <Grid3x3 className="h-5 w-5 text-brand" />
//                     <h3 className="text-xl font-bold text-brand">Project Gallery</h3>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
//                     {galleryImages.map((img, index) => {
//                       const src = img.secure_url || img.url;
//                       if (!src) return null;
//                       return (
//                         <div
//                           key={src}
//                           className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-sky transition-all hover:shadow-premium-lg"
//                         >
//                           <Image
//                             src={src}
//                             alt={`${post.title} — gallery image ${index + 1}`}
//                             fill
//                             className="object-cover transition-transform duration-500 group-hover:scale-110"
//                             sizes="(max-width: 768px) 50vw, 33vw"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                           <div className="absolute bottom-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                             {index + 1}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* Tags */}
//               {post.tags.length > 0 && (
//                 <div className="mt-14 border-t border-border pt-10">
//                   <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-electric">
//                     Topics
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {post.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="rounded-full border border-border bg-sky px-4 py-2 text-sm font-medium text-brand transition-colors hover:border-electric/30"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Related Articles */}
//               {related.length > 0 && (
//                 <div className="mt-14 border-t border-border pt-10">
//                   <div className="mb-6 flex items-end justify-between">
//                     <div>
//                       <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric">
//                         <BookOpen className="h-3.5 w-3.5" />
//                         Keep Reading
//                       </p>
//                       <h3 className="text-xl font-bold text-brand">Related Articles</h3>
//                     </div>
//                     <Link
//                       href="/blogs"
//                       className="hidden items-center gap-1 text-sm font-semibold text-electric hover:underline sm:flex"
//                     >
//                       View All
//                       <ArrowRight className="h-3.5 w-3.5" />
//                     </Link>
//                   </div>
//                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                     {related.map((relPost) => (
//                       <Link
//                         key={relPost.slug}
//                         href={`/blogs/${relPost.slug}`}
//                         className="group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-premium-lg"
//                       >
//                         <div className="relative h-36 w-full overflow-hidden">
//                           <Image
//                             src={relPost.image}
//                             alt={relPost.title}
//                             fill
//                             className="object-cover transition-transform duration-500 group-hover:scale-110"
//                             sizes="(max-width: 640px) 100vw, 380px"
//                           />
//                         </div>
//                         <div className="p-4">
//                           <p className="text-xs font-semibold text-ocean">{relPost.category}</p>
//                           <h4 className="mt-1.5 line-clamp-2 text-sm font-semibold text-brand transition-colors group-hover:text-electric">
//                             {relPost.title}
//                           </h4>
//                           <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-electric">
//                             Read Article
//                             <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//                           </span>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Back link */}
//               <Link
//                 href="/blogs"
//                 className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 Back to All Blogs
//               </Link>
//             </article>

//             {/* Sidebar - TOC + CTA only */}
//             <aside className="lg:sticky lg:top-28 lg:self-start">
//               {/* {headings.length > 0 && (
//                 <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-premium">
//                   <div className="flex items-center gap-2 border-b border-border bg-sky/60 px-6 py-4">
//                     <List className="h-4 w-4 text-electric" />
//                     <h3 className="text-xs font-bold uppercase tracking-wider text-brand">
//                       In This Article
//                     </h3>
//                   </div>
//                   <div className="p-6">
//                     <TableOfContents headings={headings} />
//                   </div>
//                 </div>
//               )} */}

//               {/* CTA */}
//               <div className="relative mt-6 overflow-hidden rounded-2xl border border-border p-6 shadow-premium">
//                 <div className="absolute inset-0 gradient-primary opacity-95" />
//                 <div className="relative">
//                   <h3 className="text-base font-bold text-white">
//                     Get Expert Marketing Insights
//                   </h3>
//                   <p className="mt-2 text-sm text-white/80">
//                     Subscribe to our newsletter for the latest trends and strategies.
//                   </p>
//                   <Link
//                     href="/contact"
//                     className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-glow transition-transform hover:scale-105"
//                   >
//                     Subscribe Now
//                     <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }


import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  List,
  Grid3x3,
  Linkedin,
  Twitter,
  Facebook,
  BookOpen,
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import CTABanner from '@/components/common/CTABanner';
import TableOfContents from '@/components/blogs/TableOfContents';
import HtmlContent from '@/components/common/HtmlContent';
import { BASE_URL } from '@/utils/baseUrl';

// ---------- types ----------

interface GalleryImage {
  secure_url?: string;
  url?: string;
}

interface NormalizedBlog {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  status: string;
  content: string;
  gallery: GalleryImage[];
}

const DEFAULT_AVATAR =
  'https://i.pinimg.com/1200x/37/6c/d3/376cd3cfce007e8dc0975fcc7469ec3d.jpg';

// ---------- helpers ----------

function normalizeBlog(post: any): NormalizedBlog {
  return {
    id: post._id,
    title: post.title,
    slug: post.slug,
    image: post.featuredImage?.secure_url || '/placeholder.jpg',
    category: post.category,
    excerpt: post.excerpt,
    author: post.author,
    authorImage: post.authorImage || DEFAULT_AVATAR,
    date: post.publishedDate || post.createdAt,
    readTime: post.readTime || '5 min read',
    tags: post.tags || [],
    metaTitle: post.metaTitle || post.title,
    metaDescription: post.metaDescription || post.excerpt,
    status: post.status,
    content: post.content || '',
    gallery: post.gallery || [],
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function extractHeadings(html: string): string[] {
  const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings: string[] = [];
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, '').trim();
    if (text) headings.push(text);
  }
  return headings;
}

async function getAllBlogs(): Promise<NormalizedBlog[]> {
  try {
    const res = await fetch(`${BASE_URL}/blogs`, { cache: 'no-store' });
    if (!res.ok) return [];
    const result = await res.json();
    if (!result.success) return [];
    return (result.data || [])
      .filter((p: any) => p.status === 'published')
      .map(normalizeBlog);
  } catch (err) {
    console.error('Failed to fetch blogs', err);
    return [];
  }
}

async function getBlogBySlug(slug: string): Promise<NormalizedBlog | null> {
  try {
    const res = await fetch(`${BASE_URL}/blogs/${slug}`, { cache: 'no-store' });
    if (res.ok) {
      const result = await res.json();
      if (result.success && result.data) return normalizeBlog(result.data);
    }
  } catch (err) {
    console.error('Failed to fetch blog by slug', err);
  }

  const all = await getAllBlogs();
  return all.find((p) => p.slug === slug) || null;
}

// ---------- static params ----------

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((p) => ({ slug: p.slug }));
}

// ---------- metadata ----------

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://infotechagency.com/blogs/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
    },
  };
}

// ---------- page ----------

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogBySlug(params.slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const galleryImages = post.gallery;
  const heroImage = galleryImages[0]?.secure_url || galleryImages[0]?.url || post.image;

  const allBlogs = await getAllBlogs();
  const related = allBlogs
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 4);

  return (
    <>
      <PageHero
        breadcrumb="Blog"
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />

      <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
        {/* Premium Background: Sharp Box Grid + Mesh Glow */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            
            {/* Main content */}
            <article className="w-full max-w-3xl overflow-x-hidden">
              
              {/* Category badge */}
              <span className="mb-6 inline-block border-l-2 border-electric bg-electric/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-electric">
                {post.category}
              </span>

              {/* Meta card: author, date, read time, share */}
              <div className="mb-12 flex flex-col gap-6 border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden border border-slate-200 shadow-sm">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold tracking-tight text-brand">{post.author}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-electric" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-electric" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Share links */}
                <div className="flex items-center gap-2 border-t border-slate-100 pt-4 sm:border-t-0 sm:pt-0">
                  <span className="hidden text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:inline">
                    Share
                  </span>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://infotechagency.com/blogs/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://infotechagency.com/blogs/${post.slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                    className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://infotechagency.com/blogs/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Featured image */}
              <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden border border-slate-200 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)]">
                <Image
                  src={heroImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              {/* Content - Premium Typography */}
              <div className="relative w-full max-w-full overflow-x-hidden">
                <HtmlContent
                  html={post.content}
                  className="prose prose-lg max-w-none break-words [overflow-wrap:anywhere]
                    prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:scroll-mt-28 prose-headings:text-brand
                    prose-h1:text-3xl prose-h1:mb-6
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-electric prose-a:font-semibold prose-a:break-words hover:prose-a:underline
                    prose-strong:text-brand prose-strong:font-bold
                    prose-blockquote:border-l-4 prose-blockquote:border-electric prose-blockquote:bg-electric/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-slate-700 prose-blockquote:not-italic
                    prose-img:rounded-none prose-img:border prose-img:border-slate-200 prose-img:w-full prose-img:h-auto prose-img:max-w-full
                    prose-video:w-full prose-video:rounded-none
                    prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:rounded-none prose-pre:bg-brand prose-pre:text-white
                    prose-code:break-words prose-code:whitespace-pre-wrap prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none prose-code:text-electric
                    prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-table:whitespace-nowrap
                    prose-iframe:w-full prose-iframe:h-[450px] prose-iframe:border-0"
                />
              </div>

              {/* Gallery Section */}
              {galleryImages.length > 0 && (
                <div className="mt-16 border-t border-slate-200 pt-10">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-electric">
                    Visuals
                  </p>
                  <div className="mb-6 flex items-center gap-2">
                    <Grid3x3 className="h-5 w-5 text-brand" />
                    <h3 className="text-xl font-extrabold tracking-tight text-brand">Project Gallery</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {galleryImages.map((img, index) => {
                      const src = img.secure_url || img.url;
                      if (!src) return null;
                      return (
                        <div
                          key={src}
                          className="group relative aspect-square overflow-hidden border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
                        >
                          <Image
                            src={src}
                            alt={`${post.title} — gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="absolute bottom-3 left-3 flex h-7 w-7 items-center justify-center bg-white text-xs font-extrabold text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {index + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-16 border-t border-slate-200 pt-10">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-electric">
                    Topics Covered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-brand"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Articles */}
              {related.length > 0 && (
                <div className="mt-16 border-t border-slate-200 pt-10">
                  <div className="mb-8 flex items-end justify-between">
                    <div>
                      <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-electric">
                        <BookOpen className="h-3.5 w-3.5" />
                        Keep Reading
                      </p>
                      <h3 className="text-2xl font-extrabold tracking-tight text-brand">Related Articles</h3>
                    </div>
                    <Link
                      href="/blogs"
                      className="hidden items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-electric sm:flex"
                    >
                      View All
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {related.map((relPost) => (
                      <Link
                        key={relPost.slug}
                        href={`/blogs/${relPost.slug}`}
                        className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-md"
                      >
                        {/* Hover Top Accent */}
                        <div className="absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-electric transition-all duration-500 group-hover:w-1/2"></div>
                        
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={relPost.image}
                            alt={relPost.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, 380px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-electric">{relPost.category}</p>
                          <h4 className="mt-2 flex-1 text-base font-extrabold tracking-tight text-brand transition-colors group-hover:text-electric">
                            {relPost.title}
                          </h4>
                          <span className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                            Read Article
                            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back link */}
              <Link
                href="/blogs"
                className="mt-12 inline-flex items-center gap-2 border border-slate-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-colors hover:bg-slate-900 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Blogs
              </Link>
            </article>

            {/* Sidebar - TOC + CTA */}
            <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
              {/* Restored Table of Contents */}
              {headings.length > 0 && (
                <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/80 px-5 py-4">
                    <List className="h-4 w-4 text-electric" />
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand">
                      Table of Contents
                    </h3>
                  </div>
                  <div className="p-5">
                    <TableOfContents headings={headings} />
                  </div>
                </div>
              )}

              {/* Premium CTA */}
              <div className="relative overflow-hidden border border-slate-900 bg-brand p-6 text-white shadow-md">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-ocean via-electric to-leaf"></div>
                
                {/* Background Grid */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

                <div className="relative">
                  <h3 className="text-lg font-extrabold tracking-tight">
                    Get Expert Marketing Insights
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Subscribe to our newsletter for the latest trends and proven growth strategies.
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-brand transition-colors hover:bg-electric hover:text-white"
                  >
                    Subscribe Now
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}