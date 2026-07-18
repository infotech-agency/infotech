// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import CTABanner from '@/components/common/CTABanner';
// import { Stagger, StaggerItem } from '@/components/common/Reveal';
// import { portfolioItems, portfolioCategories } from '@/lib/portfolio';
// import { cn } from '@/lib/utils';

// export default function PortfolioContent() {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filtered =
//     activeCategory === 'All'
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === activeCategory);

//   return (
//     <>
//       <PageHero
//         breadcrumb="Portfolio"
//         title="Our Work Speaks for Itself"
//         description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
//         image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//       />

//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           {/* Filters */}
//           <div className="mb-12 flex flex-wrap justify-center gap-3">
//             {portfolioCategories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={cn(
//                   'px-5 py-2.5 text-sm font-semibold transition-all',
//                   activeCategory === cat
//                     ? 'gradient-primary text-white shadow-glow'
//                     : 'border border-border bg-white text-brand hover:border-electric/30 hover:text-electric'
//                 )}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Grid */}
//           <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
//             {filtered.map((item) => (
//               <StaggerItem key={item.slug}>
//                 <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
//                   <div className="relative h-60 overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
//                     <div className="absolute left-4 top-4 bg-ocean px-3 py-1 text-xs font-semibold text-white">
//                       {item.service}
//                     </div>
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <p className="text-xs text-sky/80">{item.category}</p>
//                       <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <p className="text-sm leading-relaxed text-muted-foreground">
//                       {item.description}
//                     </p>
//                     <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
//                       <span className="text-sm font-bold gradient-text">
//                         {item.result}
//                       </span>
//                       <ArrowRight className="h-5 w-5 text-electric transition-transform group-hover:translate-x-1" />
//                     </div>
//                   </div>
//                 </div>
//               </StaggerItem>
//             ))}
//           </Stagger>
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import CTABanner from '@/components/common/CTABanner';
// import { Stagger, StaggerItem } from '@/components/common/Reveal';

// // Types based on your API response
// interface Project {
//   _id: string;
//   title: string;
//   slug: string;
//   clientName: string;
//   websiteUrl: string;
//   technology: string[];
//   description: string;
//   thumbnail: {
//     public_id: string;
//     secure_url: string;
//   };
//   completionDate: string;
//   featured: boolean;
//   metaTitle: string;
//   metaDescription: string;
//   status: string;
//   gallery: any[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export default function PortfolioContent() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch projects from API
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:5000/api/projects');
//         const result = await response.json();
        
//         if (result.success) {
//           // Filter only published projects
//           const publishedProjects = result.data.filter(
//             (project: Project) => project.status === 'published'
//           );
//           setProjects(publishedProjects);
//         } else {
//           setError('Failed to fetch projects');
//         }
//       } catch (err) {
//         setError('Error fetching projects');
//         console.error('Fetch error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // Loading state
//   if (loading) {
//     return (
//       <>
//         <PageHero
//           breadcrumb="Portfolio"
//           title="Our Work Speaks for Itself"
//           description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
//           image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//         />
//         <section className="bg-white py-20 lg:py-28">
//           <div className="container mx-auto px-4">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {[1, 2, 3, 4, 5, 6].map((i) => (
//                 <div key={i} className="animate-pulse">
//                   <div className="h-60 rounded-t-2xl bg-gray-200" />
//                   <div className="p-6 space-y-4">
//                     <div className="h-4 bg-gray-200 rounded w-3/4" />
//                     <div className="h-4 bg-gray-200 rounded w-1/2" />
//                     <div className="h-20 bg-gray-200 rounded" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <CTABanner />
//       </>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <>
//         <PageHero
//           breadcrumb="Portfolio"
//           title="Our Work Speaks for Itself"
//           description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
//           image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//         />
//         <section className="bg-white py-20 lg:py-28">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-md mx-auto">
//               <div className="text-red-500 text-6xl mb-4">⚠️</div>
//               <h2 className="text-2xl font-bold text-brand mb-2">Something went wrong</h2>
//               <p className="text-muted-foreground">{error}</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="mt-4 px-6 py-2 gradient-primary text-white rounded-lg hover:shadow-lg transition-shadow"
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         </section>
//         <CTABanner />
//       </>
//     );
//   }

//   return (
//     <>
//       <PageHero
//         breadcrumb="Portfolio"
//         title="Our Work Speaks for Itself"
//         description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
//         image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//       />

//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           {/* No Projects Message */}
//           {projects.length === 0 ? (
//             <div className="text-center py-12">
//               <div className="text-6xl mb-4">📁</div>
//               <h3 className="text-2xl font-bold text-brand mb-2">No Projects Found</h3>
//               <p className="text-muted-foreground">No published projects available at the moment.</p>
//             </div>
//           ) : (
//             /* Grid */
//             <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
//               {projects.map((project) => (
//                 <StaggerItem key={project._id}>
//                   <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
//                     <div className="relative h-60 overflow-hidden">
//                       <Image
//                         src={project.thumbnail?.secure_url || '/placeholder-project.jpg'}
//                         alt={project.title}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-110"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         onError={(e) => {
//                           // Fallback if image fails to load
//                           (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
//                       <div className="absolute left-4 top-4 bg-ocean px-3 py-1 text-xs font-semibold text-white">
//                         {project.technology?.[0] || 'Web Development'}
//                       </div>
//                       <div className="absolute bottom-4 left-4 right-4">
//                         <p className="text-xs text-sky/80">{project.clientName || 'Client'}</p>
//                         <h3 className="mt-1 text-lg font-bold text-white">{project.title}</h3>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
//                         {project.description}
//                       </p>
//                       <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
//                         <span className="text-sm font-bold gradient-text">
//                           {project.featured ? '⭐ Featured Project' : 'View Project'}
//                         </span>
//                         <ArrowRight className="h-5 w-5 text-electric transition-transform group-hover:translate-x-1" />
//                       </div>
//                       {/* Show technologies */}
//                       {project.technology && project.technology.length > 0 && (
//                         <div className="mt-3 flex flex-wrap gap-1">
//                           {project.technology.slice(0, 3).map((tech, idx) => (
//                             <span
//                               key={idx}
//                               className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                           {project.technology.length > 3 && (
//                             <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
//                               +{project.technology.length - 3}
//                             </span>
//                           )}
//                         </div>
//                       )}
//                       {/* Show completion date */}
//                       {project.completionDate && (
//                         <div className="mt-2 text-xs text-muted-foreground">
//                           Completed: {new Date(project.completionDate).toLocaleDateString('en-US', {
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric'
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </StaggerItem>
//               ))}
//             </Stagger>
//           )}
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, AlertCircle, FolderOpen, Star } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import CTABanner from '@/components/common/CTABanner';
import { Stagger, StaggerItem } from '@/components/common/Reveal';

// Types based on your API response
interface Project {
  _id: string;
  title: string;
  slug: string;
  clientName: string;
  websiteUrl: string;
  technology: string[];
  description: string;
  thumbnail: {
    public_id: string;
    secure_url: string;
  };
  completionDate: string;
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
  status: string;
  gallery: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function PortfolioContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/projects');
        const result = await response.json();
        
        if (result.success) {
          const publishedProjects = result.data.filter(
            (project: Project) => project.status === 'published'
          );
          setProjects(publishedProjects);
        } else {
          setError('Failed to fetch projects');
        }
      } catch (err) {
        setError('Error fetching projects');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Loading state
  if (loading) {
    return (
      <>
        <PageHero
          breadcrumb="Portfolio"
          title="Our Work Speaks for Itself"
          description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
          image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
        />
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse border border-slate-200 bg-white shadow-sm">
                  <div className="h-64 bg-slate-200" />
                  <div className="space-y-4 p-6">
                    <div className="h-4 w-3/4 bg-slate-200" />
                    <div className="h-4 w-1/2 bg-slate-200" />
                    <div className="h-20 bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTABanner />
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <PageHero
          breadcrumb="Portfolio"
          title="Our Work Speaks for Itself"
          description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
          image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
        />
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-md border border-red-200 bg-white p-8 shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-red-50">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-brand">Something went wrong</h2>
              <p className="mt-2 text-sm text-slate-500">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 inline-flex items-center gap-2 border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
        <CTABanner />
      </>
    );
  }

  return (
    <>
      <PageHero
        breadcrumb="Portfolio"
        title="Our Work Speaks for Itself"
        description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        {/* Premium Background: Sharp Box Grid + Mesh Glow */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          {/* No Projects Message */}
          {projects.length === 0 ? (
            <div className="mx-auto max-w-md border border-slate-200 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-slate-50">
                <FolderOpen className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-brand">No Projects Found</h3>
              <p className="mt-2 text-sm text-slate-500">No published projects available at the moment. Please check back later.</p>
            </div>
          ) : (
            /* Grid */
            <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {projects.map((project) => (
                <StaggerItem key={project._id}>
                  <div className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-slate-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                    
                    {/* Hover Top Accent Line */}
                    <div className="absolute top-0 left-1/2 z-20 h-1 w-0 -translate-x-1/2 bg-electric transition-all duration-500 group-hover:w-1/2"></div>

                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.thumbnail?.secure_url || '/placeholder-project.jpg'}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Cinematic Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      
                      {/* Featured Badge (Top Right) */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-electric px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </div>
                      )}

                      {/* Primary Technology Tag (Top Left) */}
                      <div className="absolute top-4 left-4 border-l-2 border-white/50 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        {project.technology?.[0] || 'Web Dev'}
                      </div>

                      {/* Client & Title (Bottom of Image) */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-300">
                          {project.clientName || 'Confidential Client'}
                        </p>
                        <h3 className="mt-1 text-xl font-extrabold tracking-tight text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Technology Stack Tags */}
                      {project.technology && project.technology.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.technology.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technology.length > 3 && (
                            <span className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                              +{project.technology.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Footer: Date & CTA */}
                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                        {project.completionDate ? (
                          <span className="text-xs font-medium text-slate-400">
                            {new Date(project.completionDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                            })}
                          </span>
                        ) : (
                          <span />
                        )}
                        <span className="flex items-center gap-2 text-sm font-bold text-brand transition-colors group-hover:text-electric">
                          View Project
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}