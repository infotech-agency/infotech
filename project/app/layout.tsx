// // import './globals.css';
// // import type { Metadata } from 'next';
// // import { Poppins } from 'next/font/google';
// // import Header from '@/components/layout/Header';
// // import Footer from '@/components/layout/Footer';
// // import AnnouncementBar from '@/components/layout/AnnouncementBar';

// // const poppins = Poppins({
// //   subsets: ['latin'],
// //   weight: ['300', '400', '500', '600', '700', '800'],
// //   variable: '--font-poppins',
// //   display: 'swap',
// // });

// // export const metadata: Metadata = {
// //   metadataBase: new URL('https://infotechagency.com'),
// //   title: {
// //     default: 'Infotech Agency | Digital Marketing, SEO & Web Development',
// //     template: '%s | Infotech Agency',
// //   },
// //   description:
// //     'Infotech Agency is a full-service digital marketing agency delivering SEO, PPC, web development, content marketing, and social media strategies that drive measurable growth for enterprise brands.',
// //   keywords: [
// //     'digital marketing agency',
// //     'SEO services',
// //     'PPC marketing',
// //     'web development',
// //     'content marketing',
// //     'social media marketing',
// //     'Infotech Agency',
// //   ],
// //   alternates: {
// //     canonical: '/',
// //   },
// //   openGraph: {
// //     type: 'website',
// //     locale: 'en_US',
// //     url: 'https://infotechagency.com',
// //     siteName: 'Infotech Agency',
// //     title: 'Infotech Agency | Digital Marketing, SEO & Web Development',
// //     description:
// //       'Full-service digital marketing agency driving measurable growth for enterprise brands.',
// //     images: [
// //       {
// //         url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
// //         width: 1200,
// //         height: 630,
// //         alt: 'Infotech Agency',
// //       },
// //     ],
// //   },
// //   twitter: {
// //     card: 'summary_large_image',
// //     title: 'Infotech Agency | Digital Marketing, SEO & Web Development',
// //     description:
// //       'Full-service digital marketing agency driving measurable growth for enterprise brands.',
// //     images: [
// //       'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
// //     ],
// //   },
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en" className={poppins.variable}>
// //       <body className="font-sans antialiased">
// //         <AnnouncementBar />
// //         <Header />
// //         <main>{children}</main>
// //         <Footer />
// //       </body>
// //     </html>
// //   );
// // }

// // import './globals.css';
// // import type { Metadata } from 'next';
// // import { Poppins } from 'next/font/google';
// // import Header from '@/components/layout/Header';
// // import Footer from '@/components/layout/Footer';
// // import AnnouncementBar from '@/components/layout/AnnouncementBar';

// // const poppins = Poppins({
// //   subsets: ['latin'],
// //   weight: ['300', '400', '500', '600', '700', '800'],
// //   variable: '--font-poppins',
// //   display: 'swap',
// // });


// // async function getSEOSettings() {
// //   try {
// //     const res = await fetch('http://localhost:5000/api/seo', {
// //       cache: 'no-store',
// //     });

// //     if (!res.ok) return null;

// //     const data = await res.json();
// //     return data.data;

// //   } catch (error) {
// //     console.log("SEO fetch error:", error);
// //     return null;
// //   }
// // }


// // // Home page schema
// // async function getHomeSchema() {
// //   try {
// //     const res = await fetch(
// //       'http://localhost:5000/api/pages/slug/home',
// //       {
// //         cache: 'no-store',
// //       }
// //     );

// //     if (!res.ok) return null;

// //     const data = await res.json();

// //     return data?.data?.schemaJson || null;

// //   } catch (error) {
// //     console.log("Schema fetch error:", error);
// //     return null;
// //   }
// // }


// // export const metadata: Metadata = {
// //   metadataBase: new URL('https://infotechagency.com'),
// //   title: {
// //     default: 'Infotech Agency | Digital Marketing, SEO & Web Development',
// //     template: '%s | Infotech Agency',
// //   },
// //   description:
// //     'Infotech Agency is a full-service digital marketing agency delivering SEO, PPC, web development, content marketing, and social media strategies.',
// // };


// // export default async function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {

// //   const seo = await getSEOSettings();
// //   const schema = await getHomeSchema();


// //   return (
// //     <html lang="en" className={poppins.variable}>

// //       <head>

// //         {/* Header Scripts */}
// //         {seo?.headerScripts && (
// //           <script
// //             dangerouslySetInnerHTML={{
// //               __html: seo.headerScripts,
// //             }}
// //           />
// //         )}


// //         {/* Google Analytics */}
// //         {seo?.googleAnalytics && (
// //           <>
// //             <script
// //               async
// //               src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalytics}`}
// //             />

// //             <script
// //               dangerouslySetInnerHTML={{
// //                 __html: `
// //                   window.dataLayer = window.dataLayer || [];
// //                   function gtag(){dataLayer.push(arguments);}
// //                   gtag('js', new Date());
// //                   gtag('config','${seo.googleAnalytics}');
// //                 `,
// //               }}
// //             />
// //           </>
// //         )}

// // {/* 
// //         Schema JSON LD
// //         {schema && (
// //           <script
// //             type="application/ld+json"
// //             dangerouslySetInnerHTML={{
// //               __html: schema.replace(
// //                 /<script[^>]*>|<\/script>/g,
// //                 ''
// //               ),
// //             }}
// //           />
// //         )} */}

// // {schema?.map((item:any, index:number)=>{

// //   const scripts = item.split(
// //     /<script type="application\/ld\+json">|<\/script>/
// //   )
// //   .filter(Boolean)
// //   .map(s => s.trim())
// //   .filter(s => s.startsWith('{'));

// //   return scripts.map((json:string, i:number)=>(
// //     <script
// //       key={`${index}-${i}`}
// //       type="application/ld+json"
// //       dangerouslySetInnerHTML={{
// //         __html: json
// //       }}
// //     />
// //   ));

// // })}
// //       </head>


// //       <body className="font-sans antialiased">

// //         <AnnouncementBar />

// //         <Header />

// //         <main>
// //           {children}
// //         </main>

// //         <Footer />


// //         {seo?.footerScripts && (
// //           <script
// //             dangerouslySetInnerHTML={{
// //               __html: seo.footerScripts,
// //             }}
// //           />
// //         )}

// //       </body>

// //     </html>
// //   );
// // }


// import './globals.css';
// import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import AnnouncementBar from '@/components/layout/AnnouncementBar';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-poppins',
//   display: 'swap',
// });

// async function getSEOSettings() {
//   try {
//     const res = await fetch('http://localhost:5000/api/seo', {
//       cache: 'no-store',
//     });

//     if (!res.ok) return null;

//     const data = await res.json();
//     return data.data;
//   } catch (error) {
//     console.log("SEO fetch error:", error);
//     return null;
//   }
// }

// // Home page schema
// async function getHomeSchema() {
//   try {
//     const res = await fetch(
//       'http://localhost:5000/api/pages/slug/home',
//       {
//         cache: 'no-store',
//       }
//     );

//     if (!res.ok) return null;

//     const data = await res.json();

//     return data?.data?.schemaJson || null;
//   } catch (error) {
//     console.log("Schema fetch error:", error);
//     return null;
//   }
// }

// // Parses a raw HTML string containing one or more <script> tags
// // into individual { attrs, content } objects so each script
// // can be rendered as its own React <script> element.
// type ParsedScript = { attrs: string; content: string };

// function parseScripts(html?: string | null): ParsedScript[] {
//   if (!html) return [];

//   const scriptRegex = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
//   const scripts: ParsedScript[] = [];
//   let match: RegExpExecArray | null;

//   while ((match = scriptRegex.exec(html)) !== null) {
//     scripts.push({ attrs: match[1] || '', content: match[2] || '' });
//   }

//   return scripts;
// }

// // Extracts GTM container ID (e.g. GTM-XXXXXXX) from headerScripts
// // so we can render the required <noscript> iframe in <body>.
// function extractGTMId(html?: string | null): string | null {
//   if (!html) return null;
//   const match = html.match(/GTM-[A-Z0-9]+/);
//   return match ? match[0] : null;
// }

// // Renders a list of parsed scripts as React <script> elements.
// // External scripts (with src) and inline scripts are both handled.
// function renderScripts(scripts: ParsedScript[], keyPrefix: string) {
//   return scripts.map((s, i) => {
//     const srcMatch = s.attrs.match(/src=["']([^"']+)["']/);
//     const isAsync = /\basync\b/.test(s.attrs);
//     const isDefer = /\bdefer\b/.test(s.attrs);
//     const typeMatch = s.attrs.match(/type=["']([^"']+)["']/);
//     const scriptType = typeMatch ? typeMatch[1] : undefined;

//     if (srcMatch) {
//       return (
//         <script
//           key={`${keyPrefix}-${i}`}
//           src={srcMatch[1]}
//           async={isAsync}
//           defer={isDefer}
//           type={scriptType}
//         />
//       );
//     }

//     return (
//       <script
//         key={`${keyPrefix}-${i}`}
//         type={scriptType}
//         dangerouslySetInnerHTML={{ __html: s.content }}
//       />
//     );
//   });
// }

// export const metadata: Metadata = {
//   metadataBase: new URL('https://infotechagency.com'),
//   title: {
//     default: 'Infotech Agency | Digital Marketing, SEO & Web Development',
//     template: '%s | Infotech Agency',
//   },
//   description:
//     'Infotech Agency is a full-service digital marketing agency delivering SEO, PPC, web development, content marketing, and social media strategies.',
// };

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const seo = await getSEOSettings();
//   const schema = await getHomeSchema();

//   const headerScripts = parseScripts(seo?.headerScripts);
//   const footerScripts = parseScripts(seo?.footerScripts);
//   const gtmId = extractGTMId(seo?.headerScripts);

//   return (
//     <html lang="en" className={poppins.variable}>
//       <head>
//         {/* Header Scripts (parsed individually — GTM, gtag, custom, etc.) */}
//         {renderScripts(headerScripts, 'header')}

//         {/* Google Analytics (only used if separate googleAnalytics field is set) */}
//         {seo?.googleAnalytics && (
//           <>
//             <script
//               async
//               src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalytics}`}
//             />
//             <script
//               dangerouslySetInnerHTML={{
//                 __html: `
//                   window.dataLayer = window.dataLayer || [];
//                   function gtag(){dataLayer.push(arguments);}
//                   gtag('js', new Date());
//                   gtag('config','${seo.googleAnalytics}');
//                 `,
//               }}
//             />
//           </>
//         )}

//         {/* Schema JSON-LD */}
//         {schema?.map((item: any, index: number) => {
//           const scripts = item
//             .split(/<script type="application\/ld\+json">|<\/script>/)
//             .filter(Boolean)
//             .map((s: string) => s.trim())
//             .filter((s: string) => s.startsWith('{'));

//           return scripts.map((json: string, i: number) => (
//             <script
//               key={`${index}-${i}`}
//               type="application/ld+json"
//               dangerouslySetInnerHTML={{
//                 __html: json,
//               }}
//             />
//           ));
//         })}
//       </head>

//       <body className="font-sans antialiased">
//         {/* GTM noscript fallback — required, goes right after <body> opens */}
//         {gtmId && (
//           <noscript>
//             <iframe
//               src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
//               height="0"
//               width="0"
//               style={{ display: 'none', visibility: 'hidden' }}
//             />
//           </noscript>
//         )}

//         <AnnouncementBar />

//         <Header />

//         <main>{children}</main>

//         <Footer />

//         {/* Footer Scripts (parsed individually) */}
//         {renderScripts(footerScripts, 'footer')}
//       </body>
//     </html>
//   );
// }


// import './globals.css';
// import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import AnnouncementBar from '@/components/layout/AnnouncementBar';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-poppins',
//   display: 'swap',
// });

// async function getSEOSettings() {
//   try {
//     const res = await fetch('http://localhost:5000/api/seo', {
//       cache: 'no-store',
//     });
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data.data;
//   } catch (error) {
//     console.log("SEO fetch error:", error);
//     return null;
//   }
// }

// async function getHomeSchema() {
//   try {
//     const res = await fetch('http://localhost:5000/api/pages/slug/home', {
//       cache: 'no-store',
//     });
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data?.data?.schemaJson || null;
//   } catch (error) {
//     console.log("Schema fetch error:", error);
//     return null;
//   }
// }

// // ---------- Generic <head> HTML parser ----------
// // Parses a raw HTML string that may contain <script>, <meta>, <link>,
// // and <noscript> tags (in any combination/order) into structured nodes
// // so each can be rendered as its own React element.

// type HeadNode =
//   | { type: 'script'; attrs: string; content: string }
//   | { type: 'meta'; attrs: string }
//   | { type: 'link'; attrs: string }
//   | { type: 'noscript'; content: string };

// function parseHeadElements(html?: string | null): HeadNode[] {
//   if (!html) return [];

//   const nodes: HeadNode[] = [];
//   // Order matters: script/noscript (with closing tags) checked first,
//   // then void-ish tags like meta/link.
//   const regex =
//     /<script([^>]*)>([\s\S]*?)<\/script>|<noscript>([\s\S]*?)<\/noscript>|<meta([^>]*?)\/?>|<link([^>]*?)\/?>/gi;

//   let match: RegExpExecArray | null;
//   while ((match = regex.exec(html)) !== null) {
//     if (match[1] !== undefined) {
//       nodes.push({ type: 'script', attrs: match[1] || '', content: match[2] || '' });
//     } else if (match[3] !== undefined) {
//       nodes.push({ type: 'noscript', content: match[3] || '' });
//     } else if (match[4] !== undefined) {
//       nodes.push({ type: 'meta', attrs: match[4] || '' });
//     } else if (match[5] !== undefined) {
//       nodes.push({ type: 'link', attrs: match[5] || '' });
//     }
//   }

//   return nodes;
// }

// // Parses an attribute string like: name="foo" content="bar" async
// // into a plain object: { name: "foo", content: "bar", async: true }
// function parseAttrs(attrString: string): Record<string, string | boolean> {
//   const attrs: Record<string, string | boolean> = {};
//   const attrRegex = /([a-zA-Z0-9_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'))?/g;
//   let m: RegExpExecArray | null;

//   while ((m = attrRegex.exec(attrString)) !== null) {
//     const key = m[1];
//     if (!key) continue;
//     const value = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : true;
//     attrs[key] = value;
//   }

//   return attrs;
// }

// function extractGTMId(html?: string | null): string | null {
//   if (!html) return null;
//   const match = html.match(/GTM-[A-Z0-9]+/);
//   return match ? match[0] : null;
// }

// // Renders an array of parsed head nodes as React elements.
// function renderHeadElements(nodes: HeadNode[], keyPrefix: string) {
//   return nodes.map((node, i) => {
//     const key = `${keyPrefix}-${i}`;

//     if (node.type === 'meta') {
//       const attrs = parseAttrs(node.attrs) as any;
//       return <meta key={key} {...attrs} />;
//     }

//     if (node.type === 'link') {
//       const attrs = parseAttrs(node.attrs) as any;
//       return <link key={key} {...attrs} />;
//     }

//     if (node.type === 'noscript') {
//       // May contain raw HTML like <img .../> (e.g. Facebook Pixel fallback)
//       return (
//         <noscript key={key} dangerouslySetInnerHTML={{ __html: node.content }} />
//       );
//     }

//     // script
//     const attrs = parseAttrs(node.attrs);
//     const srcMatch = node.attrs.match(/src=["']([^"']+)["']/);
//     const isAsync = !!attrs.async;
//     const isDefer = !!attrs.defer;
//     const scriptType = typeof attrs.type === 'string' ? attrs.type : undefined;

//     if (srcMatch) {
//       return (
//         <script
//           key={key}
//           src={srcMatch[1]}
//           async={isAsync}
//           defer={isDefer}
//           type={scriptType}
//         />
//       );
//     }

//     return (
//       <script
//         key={key}
//         type={scriptType}
//         dangerouslySetInnerHTML={{ __html: node.content }}
//       />
//     );
//   });
// }

// export const metadata: Metadata = {
//   metadataBase: new URL('https://infotechagency.com'),
//   title: {
//     default: 'Infotech Agency | Digital Marketing, SEO & Web Development',
//     template: '%s | Infotech Agency',
//   },
//   description:
//     'Infotech Agency is a full-service digital marketing agency delivering SEO, PPC, web development, content marketing, and social media strategies.',
// };

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const seo = await getSEOSettings();
//   const schema = await getHomeSchema();

//   const headerNodes = parseHeadElements(seo?.headerScripts);
//   const footerNodes = parseHeadElements(seo?.footerScripts);
//   const gtmId = extractGTMId(seo?.headerScripts);

//   return (
//     <html lang="en" className={poppins.variable}>
//       <head>
//         {/* Header Scripts + Meta tags (GTM, gtag, FB Pixel, Google verification, etc.) */}
//         {renderHeadElements(headerNodes, 'header')}

//         {/* Google Analytics (only used if separate googleAnalytics field is set) */}
//         {seo?.googleAnalytics && (
//           <>
//             <script
//               async
//               src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalytics}`}
//             />
//             <script
//               dangerouslySetInnerHTML={{
//                 __html: `
//                   window.dataLayer = window.dataLayer || [];
//                   function gtag(){dataLayer.push(arguments);}
//                   gtag('js', new Date());
//                   gtag('config','${seo.googleAnalytics}');
//                 `,
//               }}
//             />
//           </>
//         )}

//         {/* Schema JSON-LD */}
//         {schema?.map((item: any, index: number) => {
//           const scripts = item
//             .split(/<script type="application\/ld\+json">|<\/script>/)
//             .filter(Boolean)
//             .map((s: string) => s.trim())
//             .filter((s: string) => s.startsWith('{'));

//           return scripts.map((json: string, i: number) => (
//             <script
//               key={`${index}-${i}`}
//               type="application/ld+json"
//               dangerouslySetInnerHTML={{ __html: json }}
//             />
//           ));
//         })}
//       </head>

//       <body className="font-sans antialiased">
//         {/* GTM noscript fallback — required, goes right after <body> opens */}
//         {gtmId && (
//           <noscript>
//             <iframe
//               src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
//               height="0"
//               width="0"
//               style={{ display: 'none', visibility: 'hidden' }}
//             />
//           </noscript>
//         )}

//         <AnnouncementBar />
//         <Header />
//         <main>{children}</main>
//         <Footer />

//         {/* Footer Scripts */}
//         {renderHeadElements(footerNodes, 'footer')}
//       </body>
//     </html>
//   );
// }


// import './globals.css';
// import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import AnnouncementBar from '@/components/layout/AnnouncementBar';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-poppins',
//   display: 'swap',
// });

// async function getSEOSettings() {
//   try {
//     const res = await fetch('http://localhost:5000/api/seo', {
//       cache: 'no-store',
//     });
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data.data;
//   } catch (error) {
//     console.log("SEO fetch error:", error);
//     return null;
//   }
// }

// async function getHomeSchema() {
//   try {
//     const res = await fetch('http://localhost:5000/api/pages/slug/home', {
//       cache: 'no-store',
//     });
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data?.data?.schemaJson || null;
//   } catch (error) {
//     console.log("Schema fetch error:", error);
//     return null;
//   }
// }

// // ---------- Generic <head> HTML parser ----------
// // Parses a raw HTML string that may contain <script>, <meta>, <link>,
// // and <noscript> tags (in any combination/order) into structured nodes
// // so each can be rendered as its own React element.

// type HeadNode =
//   | { type: 'script'; attrs: string; content: string }
//   | { type: 'meta'; attrs: string }
//   | { type: 'link'; attrs: string }
//   | { type: 'noscript'; content: string };

// function parseHeadElements(html?: string | null): HeadNode[] {
//   if (!html) return [];

//   const nodes: HeadNode[] = [];
//   // Order matters: script/noscript (with closing tags) checked first,
//   // then void-ish tags like meta/link.
//   const regex =
//     /<script([^>]*)>([\s\S]*?)<\/script>|<noscript>([\s\S]*?)<\/noscript>|<meta([^>]*?)\/?>|<link([^>]*?)\/?>/gi;

//   let match: RegExpExecArray | null;
//   while ((match = regex.exec(html)) !== null) {
//     if (match[1] !== undefined) {
//       nodes.push({ type: 'script', attrs: match[1] || '', content: match[2] || '' });
//     } else if (match[3] !== undefined) {
//       nodes.push({ type: 'noscript', content: match[3] || '' });
//     } else if (match[4] !== undefined) {
//       nodes.push({ type: 'meta', attrs: match[4] || '' });
//     } else if (match[5] !== undefined) {
//       nodes.push({ type: 'link', attrs: match[5] || '' });
//     }
//   }

//   return nodes;
// }

// // Parses an attribute string like: name="foo" content="bar" async
// // into a plain object: { name: "foo", content: "bar", async: true }
// function parseAttrs(attrString: string): Record<string, string | boolean> {
//   const attrs: Record<string, string | boolean> = {};
//   const attrRegex = /([a-zA-Z0-9_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'))?/g;
//   let m: RegExpExecArray | null;

//   while ((m = attrRegex.exec(attrString)) !== null) {
//     const key = m[1];
//     if (!key) continue;
//     const value = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : true;
//     attrs[key] = value;
//   }

//   return attrs;
// }

// // Checks both header and footer script blocks for a GTM container ID,
// // since GTM can legitimately be placed in either location.
// function extractGTMId(...htmlBlocks: (string | null | undefined)[]): string | null {
//   for (const html of htmlBlocks) {
//     if (!html) continue;
//     const match = html.match(/GTM-[A-Z0-9]+/);
//     if (match) return match[0];
//   }
//   return null;
// }

// // Renders an array of parsed head nodes as React elements.
// function renderHeadElements(nodes: HeadNode[], keyPrefix: string) {
//   return nodes.map((node, i) => {
//     const key = `${keyPrefix}-${i}`;

//     if (node.type === 'meta') {
//       const attrs = parseAttrs(node.attrs) as any;
//       return <meta key={key} {...attrs} />;
//     }

//     if (node.type === 'link') {
//       const attrs = parseAttrs(node.attrs) as any;
//       return <link key={key} {...attrs} />;
//     }

//     if (node.type === 'noscript') {
//       // May contain raw HTML like <img .../> (e.g. Facebook Pixel fallback)
//       return (
//         <noscript key={key} dangerouslySetInnerHTML={{ __html: node.content }} />
//       );
//     }

//     // script
//     const attrs = parseAttrs(node.attrs);
//     const srcMatch = node.attrs.match(/src=["']([^"']+)["']/);
//     const isAsync = !!attrs.async;
//     const isDefer = !!attrs.defer;
//     const scriptType = typeof attrs.type === 'string' ? attrs.type : undefined;

//     if (srcMatch) {
//       return (
//         <script
//           key={key}
//           src={srcMatch[1]}
//           async={isAsync}
//           defer={isDefer}
//           type={scriptType}
//         />
//       );
//     }

//     return (
//       <script
//         key={key}
//         type={scriptType}
//         dangerouslySetInnerHTML={{ __html: node.content }}
//       />
//     );
//   });
// }

// export const metadata: Metadata = {
//   metadataBase: new URL('https://infotechagency.com'),
//   title: {
//     default: 'Infotech Agency | Digital Marketing, SEO & Web Development',
//     template: '%s | Infotech Agency',
//   },
//   description:
//     'Infotech Agency is a full-service digital marketing agency delivering SEO, PPC, web development, content marketing, and social media strategies.',
// };

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const seo = await getSEOSettings();
//   const schema = await getHomeSchema();

//   const headerNodes = parseHeadElements(seo?.headerScripts);
//   const footerNodes = parseHeadElements(seo?.footerScripts);

//   // Check both header AND footer scripts for GTM ID,
//   // since GTM script could be placed in either location
//   const gtmId = extractGTMId(seo?.headerScripts, seo?.footerScripts);

//   return (
//     <html lang="en" className={poppins.variable}>
//       <head>
//         {/* Header Scripts + Meta tags (GTM, gtag, FB Pixel, Google verification, etc.) */}
//         {renderHeadElements(headerNodes, 'header')}

//         {/* Google Analytics (only used if separate googleAnalytics field is set) */}
//         {seo?.googleAnalytics && (
//           <>
//             <script
//               async
//               src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalytics}`}
//             />
//             <script
//               dangerouslySetInnerHTML={{
//                 __html: `
//                   window.dataLayer = window.dataLayer || [];
//                   function gtag(){dataLayer.push(arguments);}
//                   gtag('js', new Date());
//                   gtag('config','${seo.googleAnalytics}');
//                 `,
//               }}
//             />
//           </>
//         )}

//         {/* Schema JSON-LD */}
//         {schema?.map((item: any, index: number) => {
//           const scripts = item
//             .split(/<script type="application\/ld\+json">|<\/script>/)
//             .filter(Boolean)
//             .map((s: string) => s.trim())
//             .filter((s: string) => s.startsWith('{'));

//           return scripts.map((json: string, i: number) => (
//             <script
//               key={`${index}-${i}`}
//               type="application/ld+json"
//               dangerouslySetInnerHTML={{ __html: json }}
//             />
//           ));
//         })}
//       </head>

//       <body className="font-sans antialiased">
//         {/* GTM noscript fallback — required, goes right after <body> opens.
//             Works whether GTM script lives in headerScripts or footerScripts. */}
//         {gtmId && (
//           <noscript>
//             <iframe
//               src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
//               height="0"
//               width="0"
//               style={{ display: 'none', visibility: 'hidden' }}
//             />
//           </noscript>
//         )}

//         <AnnouncementBar />
//         <Header />
//         <main>{children}</main>
//         <Footer />

//         {/* Footer Scripts */}
//         {renderHeadElements(footerNodes, 'footer')}
//       </body>
//     </html>
//   );
// }


import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import { BASE_URL } from '@/utils/baseUrl';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

async function getSEOSettings() {
  try {
    const res = await fetch(`${BASE_URL}/seo`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("SEO fetch error:", error);
    return null;
  }
}

async function getHomeSchema() {
  try {
    // http://localhost:5000/api/pages/slug/home
    const res = await fetch(`${BASE_URL}/pages/slug/home`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data?.schemaJson || null;
  } catch (error) {
    console.log("Schema fetch error:", error);
    return null;
  }
}

// ---------- Generic <head> HTML parser ----------
// Parses a raw HTML string that may contain <script>, <meta>, <link>,
// and <noscript> tags (in any combination/order) into structured nodes
// so each can be rendered as its own React element.

type HeadNode =
  | { type: 'script'; attrs: string; content: string }
  | { type: 'meta'; attrs: string }
  | { type: 'link'; attrs: string }
  | { type: 'noscript'; content: string };

function parseHeadElements(html?: string | null): HeadNode[] {
  if (!html) return [];

  const nodes: HeadNode[] = [];
  // Order matters: script/noscript (with closing tags) checked first,
  // then void-ish tags like meta/link.
  const regex =
    /<script([^>]*)>([\s\S]*?)<\/script>|<noscript>([\s\S]*?)<\/noscript>|<meta([^>]*?)\/?>|<link([^>]*?)\/?>/gi;

  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    if (match[1] !== undefined) {
      nodes.push({ type: 'script', attrs: match[1] || '', content: match[2] || '' });
    } else if (match[3] !== undefined) {
      nodes.push({ type: 'noscript', content: match[3] || '' });
    } else if (match[4] !== undefined) {
      nodes.push({ type: 'meta', attrs: match[4] || '' });
    } else if (match[5] !== undefined) {
      nodes.push({ type: 'link', attrs: match[5] || '' });
    }
  }

  return nodes;
}

// Parses an attribute string like: name="foo" content="bar" async
// into a plain object: { name: "foo", content: "bar", async: true }
function parseAttrs(attrString: string): Record<string, string | boolean> {
  const attrs: Record<string, string | boolean> = {};
  const attrRegex = /([a-zA-Z0-9_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'))?/g;
  let m: RegExpExecArray | null;

  while ((m = attrRegex.exec(attrString)) !== null) {
    const key = m[1];
    if (!key) continue;
    const value = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : true;
    attrs[key] = value;
  }

  return attrs;
}

// Checks header, body, and footer script blocks for a GTM container ID,
// since GTM can legitimately be placed in any of these locations.
function extractGTMId(...htmlBlocks: (string | null | undefined)[]): string | null {
  for (const html of htmlBlocks) {
    if (!html) continue;
    const match = html.match(/GTM-[A-Z0-9]+/);
    if (match) return match[0];
  }
  return null;
}

// Renders an array of parsed head nodes as React elements.
function renderHeadElements(nodes: HeadNode[], keyPrefix: string) {
  return nodes.map((node, i) => {
    const key = `${keyPrefix}-${i}`;

    if (node.type === 'meta') {
      const attrs = parseAttrs(node.attrs) as any;
      return <meta key={key} {...attrs} />;
    }

    if (node.type === 'link') {
      const attrs = parseAttrs(node.attrs) as any;
      return <link key={key} {...attrs} />;
    }

    if (node.type === 'noscript') {
      // May contain raw HTML like <img .../> (e.g. Facebook Pixel fallback)
      return (
        <noscript key={key} dangerouslySetInnerHTML={{ __html: node.content }} />
      );
    }

    // script
    const attrs = parseAttrs(node.attrs);
    const srcMatch = node.attrs.match(/src=["']([^"']+)["']/);
    const isAsync = !!attrs.async;
    const isDefer = !!attrs.defer;
    const scriptType = typeof attrs.type === 'string' ? attrs.type : undefined;

    if (srcMatch) {
      return (
        <script
          key={key}
          src={srcMatch[1]}
          async={isAsync}
          defer={isDefer}
          type={scriptType}
        />
      );
    }

    return (
      <script
        key={key}
        type={scriptType}
        dangerouslySetInnerHTML={{ __html: node.content }}
      />
    );
  });
}

export const metadata: Metadata = {
  metadataBase: new URL('https://infotechagency.com'),
  title: {
    default: 'Infotech Agency | Digital Marketing, SEO & Web Development',
    template: '%s | Infotech Agency',
  },
  description:
    'Infotech Agency is a full-service digital marketing agency delivering SEO, PPC, web development, content marketing, and social media strategies.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const seo = await getSEOSettings();
  const schema = await getHomeSchema();

  const headerNodes = parseHeadElements(seo?.headerScripts);
  const bodyNodes = parseHeadElements(seo?.bodyScripts);
  const footerNodes = parseHeadElements(seo?.footerScripts);

  // Check header, body, AND footer scripts for GTM ID,
  // since GTM script could be placed in any of these locations
  const gtmId = extractGTMId(seo?.headerScripts, seo?.bodyScripts, seo?.footerScripts);

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Header Scripts + Meta tags (GTM, gtag, FB Pixel, Google verification, etc.) */}
        {renderHeadElements(headerNodes, 'header')}

        {/* Google Analytics (only used if separate googleAnalytics field is set) */}
        {seo?.googleAnalytics && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalytics}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config','${seo.googleAnalytics}');
                `,
              }}
            />
          </>
        )}

        {/* Schema JSON-LD */}
        {schema?.map((item: any, index: number) => {
          const scripts = item
            .split(/<script type="application\/ld\+json">|<\/script>/)
            .filter(Boolean)
            .map((s: string) => s.trim())
            .filter((s: string) => s.startsWith('{'));

          return scripts.map((json: string, i: number) => (
            <script
              key={`${index}-${i}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: json }}
            />
          ));
        })}
      </head>

      <body className="font-sans antialiased">
        {/* GTM noscript fallback — required, goes right after <body> opens.
            Works whether GTM script lives in headerScripts, bodyScripts, or footerScripts. */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Body Scripts — rendered right after <body> opens */}
        {renderHeadElements(bodyNodes, 'body')}

        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Footer Scripts */}
        {renderHeadElements(footerNodes, 'footer')}
      </body>
    </html>
  );
}