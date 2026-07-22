// // // "use client";
// // // import React, { useEffect, useRef, useState } from "react";

// // // export interface ScrollStackCard {
// // //   title: string;
// // //   subtitle?: string;
// // //   badge?: string;
// // //   backgroundImage?: string;
// // //   content?: React.ReactNode;
// // // }

// // // interface ScrollStackProps {
// // //   cards: ScrollStackCard[];
// // //   backgroundColor?: string;
// // //   cardHeight?: string;
// // //   animationDuration?: string;
// // //   className?: string;
// // // }

// // // const defaultBackgrounds = [
// // //   "https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg",
// // //   "https://images.pexels.com/photos/6985128/pexels-photo-6985128.jpeg",
// // //   "https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg",
// // // ];

// // // const ScrollStack: React.FC<ScrollStackProps> = ({
// // //   cards,
// // //   backgroundColor = "bg-transparent",
// // //   cardHeight = "350px",
// // //   animationDuration = "0.4s",
// // //   className = "",
// // // }) => {
// // //   const sectionRef = useRef<HTMLDivElement>(null);
// // //   const cardsContainerRef = useRef<HTMLDivElement>(null);
// // //   const [activeCardIndex, setActiveCardIndex] = useState(0);
// // //   // const cardCount = Math.min(cards?.length, 5);
// // //   const cardCount = cards.length;
// // //   const scrollAccumulator = useRef(0);
// // //   const scrollThreshold = 250; // Scroll distance (px) to switch cards (increased for slower, more professional pacing)
// // //   const touchStartY = useRef(0);

// // //   const cardStyle = {
// // //     height: cardHeight,
// // //     maxHeight: "600px",
// // //     borderRadius: "24px",
// // //     transition: `transform ${animationDuration} cubic-bezier(0.16, 1, 0.3, 1), opacity ${animationDuration} cubic-bezier(0.16, 1, 0.3, 1)`,
// // //     willChange: "transform, opacity",
// // //   };

// // //   useEffect(() => {
// // //     const handleWheel = (e: WheelEvent) => {
// // //       if (!sectionRef.current) return;

// // //       const rect = sectionRef.current.getBoundingClientRect();
// // //       const containerCenter = rect.top + rect.height / 2;
// // //       const viewportCenter = window.innerHeight / 2;

// // //       // Lock if component center is near viewport center (within 100px range)
// // //       const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

// // //       if (isCentered) {
// // //         // Scroll down
// // //         if (e.deltaY > 0) {
// // //           if (activeCardIndex < cardCount - 1) {
// // //             e.preventDefault();
// // //             scrollAccumulator.current += e.deltaY;
// // //             if (scrollAccumulator.current >= scrollThreshold) {
// // //               setActiveCardIndex((prev) => Math.min(prev + 1, cardCount - 1));
// // //               scrollAccumulator.current = 0;
// // //             }
// // //           }
// // //         }
// // //         // Scroll up
// // //         else if (e.deltaY < 0) {
// // //           if (activeCardIndex > 0) {
// // //             e.preventDefault();
// // //             scrollAccumulator.current += e.deltaY;
// // //             if (scrollAccumulator.current <= -scrollThreshold) {
// // //               setActiveCardIndex((prev) => Math.max(prev - 1, 0));
// // //               scrollAccumulator.current = 0;
// // //             }
// // //           }
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener("wheel", handleWheel, { passive: false });
// // //     return () => {
// // //       window.removeEventListener("wheel", handleWheel);
// // //     };
// // //   }, [activeCardIndex, cardCount]);

// // //   useEffect(() => {
// // //     const handleTouchStart = (e: TouchEvent) => {
// // //       touchStartY.current = e.touches[0].clientY;
// // //     };

// // //     const handleTouchMove = (e: TouchEvent) => {
// // //       if (!sectionRef.current) return;

// // //       const rect = sectionRef.current.getBoundingClientRect();
// // //       const containerCenter = rect.top + rect.height / 2;
// // //       const viewportCenter = window.innerHeight / 2;
// // //       const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

// // //       if (isCentered) {
// // //         const touchY = e.touches[0].clientY;
// // //         const deltaY = touchStartY.current - touchY;

// // //         if (deltaY > 0) {
// // //           if (activeCardIndex < cardCount - 1) {
// // //             e.preventDefault();
// // //             scrollAccumulator.current += deltaY * 2.5;
// // //             if (scrollAccumulator.current >= scrollThreshold) {
// // //               setActiveCardIndex((prev) => Math.min(prev + 1, cardCount - 1));
// // //               scrollAccumulator.current = 0;
// // //             }
// // //             touchStartY.current = touchY;
// // //           }
// // //         } else if (deltaY < 0) {
// // //           if (activeCardIndex > 0) {
// // //             e.preventDefault();
// // //             scrollAccumulator.current += deltaY * 2.5;
// // //             if (scrollAccumulator.current <= -scrollThreshold) {
// // //               setActiveCardIndex((prev) => Math.max(prev - 1, 0));
// // //               scrollAccumulator.current = 0;
// // //             }
// // //             touchStartY.current = touchY;
// // //           }
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener("touchstart", handleTouchStart, { passive: true });
// // //     window.addEventListener("touchmove", handleTouchMove, { passive: false });

// // //     return () => {
// // //       window.removeEventListener("touchstart", handleTouchStart);
// // //       window.removeEventListener("touchmove", handleTouchMove);
// // //     };
// // //   }, [activeCardIndex, cardCount]);

// // //   const getCardTransform = (index: number) => {
// // //     const isVisible = activeCardIndex >= index;
// // //     const isPrevious = activeCardIndex > index;

// // //     const baseScale = 0.95 + index * 0.015;
// // //     const scale = isVisible ? (isPrevious ? baseScale - 0.025 : baseScale) : 0.9;

// // //     let translateY = "100px";
// // //     if (isVisible) {
// // //       if (isPrevious) {
// // //         translateY = `${-30 * (activeCardIndex - index)}px`;
// // //       } else {
// // //         translateY = "0px";
// // //       }
// // //     }

// // //     return {
// // //       transform: `translateY(${translateY}) scale(${scale})`,
// // //       opacity: isVisible ? 1 : 0,
// // //       zIndex: 10 + index * 10,
// // //       pointerEvents: isVisible ? ("auto" as const) : ("none" as const),
// // //     };
// // //   };

// // //   return (
// // //     <div
// // //       ref={sectionRef}
// // //       className={`relative w-full py-12 flex items-center justify-center overflow-visible ${backgroundColor} ${className}`}
// // //     >
// // //       <div className="container px-6 lg:px-8 mx-auto flex flex-col justify-center">
// // //         <div
// // //           ref={cardsContainerRef}
// // //           className="relative w-full max-w-4xl mx-auto flex-shrink-0"
// // //           style={{ height: cardHeight }}
// // //         >
// // //           {cards.slice(0, 6).map((card, index) => {
// // //             const cardTransform = getCardTransform(index);
// // //             const backgroundImage =
// // //               card.backgroundImage ||
// // //               defaultBackgrounds[index % defaultBackgrounds.length];

// // //             return (
// // //               <div
// // //                 key={index}
// // //                 className="absolute left-0 right-0 overflow-hidden shadow-2xl transition-all border border-white/10"
// // //                 style={{
// // //                   ...cardStyle,
// // //                   transform: cardTransform.transform,
// // //                   opacity: cardTransform.opacity,
// // //                   zIndex: cardTransform.zIndex,
// // //                   pointerEvents: cardTransform.pointerEvents,
// // //                 }}
// // //               >
// // //                 <div
// // //                   className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 to-black/90"
// // //                   style={{
// // //                     backgroundImage: `url('${backgroundImage}')`,
// // //                     backgroundSize: "cover",
// // //                     backgroundPosition: "center",
// // //                     backgroundBlendMode: "overlay",
// // //                   }}
// // //                 />

// // //                 {card.badge && (
// // //                   <div className="absolute top-4 right-4 z-20">
// // //                     <div className="inline-flex items-center justify-center px-4 py-1.5 rounded bg-white/10 backdrop-blur-md text-white border border-white/10">
// // //                       <span className="text-xs font-semibold tracking-wider uppercase">
// // //                         {card.badge}
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex items-center">
// // //                   {card.content ? (
// // //                     card.content
// // //                   ) : (
// // //                     <div className="max-w-lg text-left">
// // //                       <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black leading-tight mb-3">
// // //                         {card.title}
// // //                       </h3>
// // //                       {card.subtitle && (
// // //                         <p className="text-sm md:text-base text-white/80 leading-relaxed">
// // //                           {card.subtitle}
// // //                         </p>
// // //                       )}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ScrollStack;


// // "use client";
// // import React, { useEffect, useRef, useState } from "react";
// // import { ChevronDown } from "lucide-react";

// // export interface ScrollStackCard {
// //   title: string;
// //   subtitle?: string;
// //   badge?: string;
// //   backgroundImage?: string;
// //   /** Optional gradient overlay, e.g. "linear-gradient(135deg, #0F1C4C, #0868A0)" */
// //   gradient?: string;
// //   content?: React.ReactNode;
// // }

// // interface ScrollStackProps {
// //   cards: ScrollStackCard[];
// //   backgroundColor?: string;
// //   cardHeight?: string;
// //   animationDuration?: string;
// //   className?: string;
// // }

// // const defaultBackgrounds = [
// //   "https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg",
// //   "https://images.pexels.com/photos/6985128/pexels-photo-6985128.jpeg",
// //   "https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg",
// // ];

// // // First-slide copy, written for a marketing agency. Swap freely per client.
// // const defaultFirstCard: ScrollStackCard = {
// //   badge: "Who We Are",
// //   title: "We turn attention into growth.",
// //   subtitle:
// //     "A full-stack marketing agency built for brands that refuse to blend in — strategy, design, and performance media under one roof.",
// //   gradient: "linear-gradient(135deg, #0F1C4C 0%, #0868A0 100%)",
// // };

// // const ScrollStack: React.FC<ScrollStackProps> = ({
// //   cards,
// //   backgroundColor = "bg-transparent",
// //   cardHeight = "350px",
// //   animationDuration = "0.4s",
// //   className = "",
// // }) => {
// //   const sectionRef = useRef<HTMLDivElement>(null);
// //   const cardsContainerRef = useRef<HTMLDivElement>(null);
// //   const [activeCardIndex, setActiveCardIndex] = useState(0);
// //   const cardCount = cards.length;
// //   const scrollAccumulator = useRef(0);
// //   const scrollThreshold = 250;
// //   const touchStartY = useRef(0);

// //   // Merge sensible defaults into the first card without forcing the caller to repeat them.
// //   const resolvedCards = cards.map((card, index) =>
// //     index === 0 ? { ...defaultFirstCard, ...card } : card
// //   );

// //   const cardStyle = {
// //     height: cardHeight,
// //     maxHeight: "600px",
// //     borderRadius: "0px", // sharp corners, no radius
// //     transition: `transform ${animationDuration} cubic-bezier(0.16, 1, 0.3, 1), opacity ${animationDuration} cubic-bezier(0.16, 1, 0.3, 1)`,
// //     willChange: "transform, opacity",
// //   };

// //   useEffect(() => {
// //     const handleWheel = (e: WheelEvent) => {
// //       if (!sectionRef.current) return;

// //       const rect = sectionRef.current.getBoundingClientRect();
// //       const containerCenter = rect.top + rect.height / 2;
// //       const viewportCenter = window.innerHeight / 2;
// //       const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

// //       if (isCentered) {
// //         if (e.deltaY > 0) {
// //           if (activeCardIndex < cardCount - 1) {
// //             e.preventDefault();
// //             scrollAccumulator.current += e.deltaY;
// //             if (scrollAccumulator.current >= scrollThreshold) {
// //               setActiveCardIndex((prev) => Math.min(prev + 1, cardCount - 1));
// //               scrollAccumulator.current = 0;
// //             }
// //           }
// //         } else if (e.deltaY < 0) {
// //           if (activeCardIndex > 0) {
// //             e.preventDefault();
// //             scrollAccumulator.current += e.deltaY;
// //             if (scrollAccumulator.current <= -scrollThreshold) {
// //               setActiveCardIndex((prev) => Math.max(prev - 1, 0));
// //               scrollAccumulator.current = 0;
// //             }
// //           }
// //         }
// //       }
// //     };

// //     window.addEventListener("wheel", handleWheel, { passive: false });
// //     return () => {
// //       window.removeEventListener("wheel", handleWheel);
// //     };
// //   }, [activeCardIndex, cardCount]);

// //   useEffect(() => {
// //     const handleTouchStart = (e: TouchEvent) => {
// //       touchStartY.current = e.touches[0].clientY;
// //     };

// //     const handleTouchMove = (e: TouchEvent) => {
// //       if (!sectionRef.current) return;

// //       const rect = sectionRef.current.getBoundingClientRect();
// //       const containerCenter = rect.top + rect.height / 2;
// //       const viewportCenter = window.innerHeight / 2;
// //       const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

// //       if (isCentered) {
// //         const touchY = e.touches[0].clientY;
// //         const deltaY = touchStartY.current - touchY;

// //         if (deltaY > 0) {
// //           if (activeCardIndex < cardCount - 1) {
// //             e.preventDefault();
// //             scrollAccumulator.current += deltaY * 2.5;
// //             if (scrollAccumulator.current >= scrollThreshold) {
// //               setActiveCardIndex((prev) => Math.min(prev + 1, cardCount - 1));
// //               scrollAccumulator.current = 0;
// //             }
// //             touchStartY.current = touchY;
// //           }
// //         } else if (deltaY < 0) {
// //           if (activeCardIndex > 0) {
// //             e.preventDefault();
// //             scrollAccumulator.current += deltaY * 2.5;
// //             if (scrollAccumulator.current <= -scrollThreshold) {
// //               setActiveCardIndex((prev) => Math.max(prev - 1, 0));
// //               scrollAccumulator.current = 0;
// //             }
// //             touchStartY.current = touchY;
// //           }
// //         }
// //       }
// //     };

// //     window.addEventListener("touchstart", handleTouchStart, { passive: true });
// //     window.addEventListener("touchmove", handleTouchMove, { passive: false });

// //     return () => {
// //       window.removeEventListener("touchstart", handleTouchStart);
// //       window.removeEventListener("touchmove", handleTouchMove);
// //     };
// //   }, [activeCardIndex, cardCount]);

// //   const getCardTransform = (index: number) => {
// //     const isVisible = activeCardIndex >= index;
// //     const isPrevious = activeCardIndex > index;

// //     const baseScale = 0.95 + index * 0.015;
// //     const scale = isVisible ? (isPrevious ? baseScale - 0.025 : baseScale) : 0.9;

// //     let translateY = "100px";
// //     if (isVisible) {
// //       if (isPrevious) {
// //         translateY = `${-30 * (activeCardIndex - index)}px`;
// //       } else {
// //         translateY = "0px";
// //       }
// //     }

// //     return {
// //       transform: `translateY(${translateY}) scale(${scale})`,
// //       opacity: isVisible ? 1 : 0,
// //       zIndex: 10 + index * 10,
// //       pointerEvents: isVisible ? ("auto" as const) : ("none" as const),
// //     };
// //   };

// //   return (
// //     <div
// //       ref={sectionRef}
// //       className={`relative w-full py-12 flex items-center justify-center overflow-visible ${backgroundColor} ${className}`}
// //     >
// //       <div className="container px-6 lg:px-8 mx-auto flex flex-col justify-center">
// //         <div
// //           ref={cardsContainerRef}
// //           className="relative w-full max-w-4xl mx-auto flex-shrink-0"
// //           style={{ height: cardHeight }}
// //         >
// //           {resolvedCards.slice(0, 6).map((card, index) => {
// //             const cardTransform = getCardTransform(index);
// //             const backgroundImage =
// //               card.backgroundImage ||
// //               defaultBackgrounds[index % defaultBackgrounds.length];

// //             return (
// //               <div
// //                 key={index}
// //                 className="absolute left-0 right-0 overflow-hidden shadow-2xl transition-all border border-white/10"
// //                 style={{
// //                   ...cardStyle,
// //                   transform: cardTransform.transform,
// //                   opacity: cardTransform.opacity,
// //                   zIndex: cardTransform.zIndex,
// //                   pointerEvents: cardTransform.pointerEvents,
// //                 }}
// //               >
// //                 {/* Background image layer — always full-bleed, fully covers the card */}
// //                 <div
// //                   className="absolute inset-0 z-0 h-full w-full bg-center bg-cover bg-no-repeat"
// //                   style={{
// //                     backgroundImage: `url('${backgroundImage}')`,
// //                   }}
// //                 />

// //                 {/* Overlay: custom gradient (e.g. brand navy → blue on card 1),
// //                     or the default dark scrim so text stays legible on any photo */}
// //                 <div
// //                   className="absolute inset-0 z-0"
// //                   style={{
// //                     background:
// //                       card.gradient ??
// //                       "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
// //                     opacity: card.gradient ? 0.88 : 1,
// //                     mixBlendMode: card.gradient ? "normal" : "normal",
// //                   }}
// //                 />

// //                 {card.badge && (
// //                   <div className="absolute top-4 right-4 z-20">
// //                     <div className="inline-flex items-center justify-center px-4 py-1.5 bg-white/10 backdrop-blur-md text-white border border-white/10">
// //                       <span className="text-xs font-semibold tracking-wider uppercase">
// //                         {card.badge}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 )}

// //                 <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex items-center">
// //                   {card.content ? (
// //                     card.content
// //                   ) : (
// //                     <div className="max-w-lg text-left">
// //                       <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
// //                         {card.title}
// //                       </h3>
// //                       {card.subtitle && (
// //                         <p className="text-sm md:text-base text-white/80 leading-relaxed">
// //                           {card.subtitle}
// //                         </p>
// //                       )}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* Scroll indicator — only shown while there are more cards ahead */}
// //         {activeCardIndex < cardCount - 1 && (
// //           <div className="mt-8 flex flex-col items-center justify-center gap-1.5 select-none">
// //             <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
// //               Scroll to explore
// //             </span>
// //             <ChevronDown className="h-4 w-4 text-muted-foreground animate-bounce" />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScrollStack;


// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { ChevronDown } from "lucide-react";

// export interface ScrollStackCard {
//   title: string;
//   subtitle?: string;
//   badge?: string;
//   backgroundImage?: string;
//   /** Optional gradient overlay, e.g. "linear-gradient(135deg, #0F1C4C, #0868A0)" */
//   gradient?: string;
//   content?: React.ReactNode;
// }

// interface ScrollStackProps {
//   cards: ScrollStackCard[];
//   backgroundColor?: string;
//   cardHeight?: string;
//   animationDuration?: string;
//   className?: string;
// }

// const defaultBackgrounds = [
//   "https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg",
//   "https://images.pexels.com/photos/6985128/pexels-photo-6985128.jpeg",
//   "https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg",
// ];

// // First-slide copy, written for a marketing agency.
// const defaultFirstCard: ScrollStackCard = {
//   badge: "Who We Are",
//   title: "We turn attention into growth.",
//   subtitle:
//     "A full-stack marketing agency built for brands that refuse to blend in — strategy, design, and performance media under one roof.",
//   gradient: "linear-gradient(135deg, #0F1C4C 0%, #0868A0 100%)",
// };

// const ScrollStack: React.FC<ScrollStackProps> = ({
//   cards,
//   backgroundColor = "bg-transparent",
//   cardHeight = "350px",
//   animationDuration = "0.4s",
//   className = "",
// }) => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const cardsContainerRef = useRef<HTMLDivElement>(null);
//   const [activeCardIndex, setActiveCardIndex] = useState(0);
//   const cardCount = cards.length;
//   const scrollAccumulator = useRef(0);
//   const scrollThreshold = 250;
//   const touchStartY = useRef(0);

//   const resolvedCards = cards.map((card, index) =>
//     index === 0 ? { ...defaultFirstCard, ...card } : card
//   );

//   const cardStyle = {
//     height: cardHeight,
//     maxHeight: "600px",
//     borderRadius: "0px", // Sharp corners
//     transition: `transform ${animationDuration} cubic-bezier(0.16, 1, 0.3, 1), opacity ${animationDuration} cubic-bezier(0.16, 1, 0.3, 1)`,
//     willChange: "transform, opacity",
//   };

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const containerCenter = rect.top + rect.height / 2;
//       const viewportCenter = window.innerHeight / 2;
//       const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

//       if (isCentered) {
//         if (e.deltaY > 0) {
//           if (activeCardIndex < cardCount - 1) {
//             e.preventDefault();
//             scrollAccumulator.current += e.deltaY;
//             if (scrollAccumulator.current >= scrollThreshold) {
//               setActiveCardIndex((prev) => Math.min(prev + 1, cardCount - 1));
//               scrollAccumulator.current = 0;
//             }
//           }
//         } else if (e.deltaY < 0) {
//           if (activeCardIndex > 0) {
//             e.preventDefault();
//             scrollAccumulator.current += e.deltaY;
//             if (scrollAccumulator.current <= -scrollThreshold) {
//               setActiveCardIndex((prev) => Math.max(prev - 1, 0));
//               scrollAccumulator.current = 0;
//             }
//           }
//         }
//       }
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [activeCardIndex, cardCount]);

//   useEffect(() => {
//     const handleTouchStart = (e: TouchEvent) => {
//       touchStartY.current = e.touches[0].clientY;
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const containerCenter = rect.top + rect.height / 2;
//       const viewportCenter = window.innerHeight / 2;
//       const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

//       if (isCentered) {
//         const touchY = e.touches[0].clientY;
//         const deltaY = touchStartY.current - touchY;

//         if (deltaY > 0) {
//           if (activeCardIndex < cardCount - 1) {
//             e.preventDefault();
//             scrollAccumulator.current += deltaY * 2.5;
//             if (scrollAccumulator.current >= scrollThreshold) {
//               setActiveCardIndex((prev) => Math.min(prev + 1, cardCount - 1));
//               scrollAccumulator.current = 0;
//             }
//             touchStartY.current = touchY;
//           }
//         } else if (deltaY < 0) {
//           if (activeCardIndex > 0) {
//             e.preventDefault();
//             scrollAccumulator.current += deltaY * 2.5;
//             if (scrollAccumulator.current <= -scrollThreshold) {
//               setActiveCardIndex((prev) => Math.max(prev - 1, 0));
//               scrollAccumulator.current = 0;
//             }
//             touchStartY.current = touchY;
//           }
//         }
//       }
//     };

//     window.addEventListener("touchstart", handleTouchStart, { passive: true });
//     window.addEventListener("touchmove", handleTouchMove, { passive: false });
//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [activeCardIndex, cardCount]);

//   const getCardTransform = (index: number) => {
//     const isVisible = activeCardIndex >= index;
//     const isPrevious = activeCardIndex > index;

//     const baseScale = 0.95 + index * 0.015;
//     const scale = isVisible ? (isPrevious ? baseScale - 0.025 : baseScale) : 0.9;

//     let translateY = "100px";
//     if (isVisible) {
//       translateY = isPrevious ? `${-30 * (activeCardIndex - index)}px` : "0px";
//     }

//     return {
//       transform: `translateY(${translateY}) scale(${scale})`,
//       opacity: isVisible ? 1 : 0,
//       zIndex: 10 + index * 10,
//       pointerEvents: isVisible ? ("auto" as const) : ("none" as const),
//     };
//   };

//   return (
//     <div
//       ref={sectionRef}
//       className={`relative w-full py-16 flex items-center justify-center overflow-visible ${backgroundColor} ${className}`}
//     >
//       <div className="container px-6 lg:px-8 mx-auto flex flex-col justify-center">
//         <div
//           ref={cardsContainerRef}
//           className="relative w-full max-w-5xl mx-auto flex-shrink-0"
//           style={{ height: cardHeight }}
//         >
//           {resolvedCards.slice(0, 6).map((card, index) => {
//             const cardTransform = getCardTransform(index);
//             const backgroundImage =
//               card.backgroundImage ||
//               defaultBackgrounds[index % defaultBackgrounds.length];

//             return (
//               <div
//                 key={index}
//                 className="absolute left-0 right-0 overflow-hidden border border-white/10 transition-all shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]"
//                 style={{
//                   ...cardStyle,
//                   transform: cardTransform.transform,
//                   opacity: cardTransform.opacity,
//                   zIndex: cardTransform.zIndex,
//                   pointerEvents: cardTransform.pointerEvents,
//                 }}
//               >
//                 {/* Background image layer */}
//                 <div
//                   className="absolute inset-0 z-0 h-full w-full bg-center bg-cover bg-no-repeat"
//                   style={{ backgroundImage: `url('${backgroundImage}')` }}
//                 />

//                 {/* Premium Cinematic Overlay: Left-to-Right fade for text readability */}
//                 <div
//                   className="absolute inset-0 z-0"
//                   style={{
//                     background:
//                       card.gradient ??
//                       "linear-gradient(110deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.2) 100%)",
//                     opacity: card.gradient ? 0.9 : 1,
//                   }}
//                 />

//                 {/* Sharp Glassmorphism Badge */}
//                 {card.badge && (
//                   <div className="absolute top-0 right-0 z-20">
//                     <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white border-l-2 border-electric rounded-none">
//                       <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
//                         {card.badge}
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Content Layout */}
//                 <div className="relative z-10 p-8 sm:p-10 md:p-12 h-full flex items-center">
//                   {card.content ? (
//                     card.content
//                   ) : (
//                     <div className="max-w-xl text-left flex flex-col">
//                       {/* Accent Line */}
//                       <div className="h-1 w-12 bg-electric mb-5"></div>
                      
//                       <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
//                         {card.title}
//                       </h3>
//                       {card.subtitle && (
//                         <p className="text-sm md:text-base text-white/70 leading-relaxed font-light max-w-md">
//                           {card.subtitle}
//                         </p>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Premium Scroll Indicator */}
//         {activeCardIndex < cardCount - 1 && (
//           <div className="mt-10 flex flex-col items-center justify-center gap-2 select-none">
//             <div className="border border-slate-300 px-4 py-2 flex flex-col items-center gap-1 bg-white/5 backdrop-blur-sm">
//               <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-600">
//                 Scroll to explore
//               </span>
//               <ChevronDown className="h-4 w-4 text-electric animate-bounce" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ScrollStack;


"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface ScrollStackCard {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  /** Optional gradient overlay, e.g. "linear-gradient(135deg, #0F1C4C, #0868A0)" */
  gradient?: string;
  content?: React.ReactNode;
}

interface ScrollStackProps {
  cards: ScrollStackCard[];
  backgroundColor?: string;
  cardHeight?: string;
  animationDuration?: string;
  className?: string;
}

const defaultBackgrounds = [
  "https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg",
  "https://images.pexels.com/photos/6985128/pexels-photo-6985128.jpeg",
  "https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg",
];

// First-slide copy, written for a marketing agency.
const defaultFirstCard: ScrollStackCard = {
  badge: "Who We Are",
  title: "We turn attention into growth.",
  subtitle:
    "A full-stack marketing agency built for brands that refuse to blend in — strategy, design, and performance media under one roof.",
  gradient: "linear-gradient(135deg, #0F1C4C 0%, #0868A0 100%)",
};

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,
  backgroundColor = "bg-white",
  cardHeight = "500px",
  animationDuration = "0.5s",
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardCount = cards.length;
  const scrollAccumulator = useRef(0);
  const scrollThreshold = 250;
  const touchStartY = useRef(0);

  const resolvedCards = cards.map((card, index) =>
    index === 0 ? { ...defaultFirstCard, ...card } : card
  );

  const cardStyle = {
    height: cardHeight,
    maxHeight: "700px",
    borderRadius: "16px",
    transition: `transform ${animationDuration} cubic-bezier(0.16, 1, 0.3, 1), opacity ${animationDuration} cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "transform, opacity",
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const containerCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

      if (isCentered) {
        if (e.deltaY > 0) {
          if (activeCardIndex < cardCount - 1) {
            e.preventDefault();
            scrollAccumulator.current += e.deltaY;
            if (scrollAccumulator.current >= scrollThreshold) {
              setActiveCardIndex((prev) => Math.min(prev + 1, cardCount - 1));
              scrollAccumulator.current = 0;
            }
          }
        } else if (e.deltaY < 0) {
          if (activeCardIndex > 0) {
            e.preventDefault();
            scrollAccumulator.current += e.deltaY;
            if (scrollAccumulator.current <= -scrollThreshold) {
              setActiveCardIndex((prev) => Math.max(prev - 1, 0));
              scrollAccumulator.current = 0;
            }
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeCardIndex, cardCount]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const containerCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const isCentered = Math.abs(containerCenter - viewportCenter) < 100;

      if (isCentered) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;

        if (deltaY > 0) {
          if (activeCardIndex < cardCount - 1) {
            e.preventDefault();
            scrollAccumulator.current += deltaY * 2.5;
            if (scrollAccumulator.current >= scrollThreshold) {
              setActiveCardIndex((prev) => Math.min(prev + 1, cardCount - 1));
              scrollAccumulator.current = 0;
            }
            touchStartY.current = touchY;
          }
        } else if (deltaY < 0) {
          if (activeCardIndex > 0) {
            e.preventDefault();
            scrollAccumulator.current += deltaY * 2.5;
            if (scrollAccumulator.current <= -scrollThreshold) {
              setActiveCardIndex((prev) => Math.max(prev - 1, 0));
              scrollAccumulator.current = 0;
            }
            touchStartY.current = touchY;
          }
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeCardIndex, cardCount]);

  const getCardTransform = (index: number) => {
    const isVisible = activeCardIndex >= index;
    const isPrevious = activeCardIndex > index;

    const baseScale = 0.92 + index * 0.02;
    const scale = isVisible ? (isPrevious ? baseScale - 0.03 : baseScale) : 0.88;

    let translateY = "120px";
    if (isVisible) {
      translateY = isPrevious ? `${-35 * (activeCardIndex - index)}px` : "0px";
    }

    return {
      transform: `translateY(${translateY}) scale(${scale})`,
      opacity: isVisible ? 1 : 0,
      zIndex: 10 + index * 10,
      pointerEvents: isVisible ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <div
      ref={sectionRef}
      className={`relative w-full py-20 flex items-center justify-center overflow-hidden ${backgroundColor} ${className}`}
      // style={{
      //   background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
      // }}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-6 lg:px-8 mx-auto flex flex-col justify-center relative z-10">
        <div
          ref={cardsContainerRef}
          className="relative w-full max-w-6xl mx-auto flex-shrink-0"
          style={{ height: cardHeight }}
        >
          {resolvedCards.slice(0, 6).map((card, index) => {
            const cardTransform = getCardTransform(index);
            const backgroundImage =
              card.backgroundImage ||
              defaultBackgrounds[index % defaultBackgrounds.length];

            return (
              <div
                key={index}
                className="absolute left-0 right-0 overflow-hidden border border-white/5 transition-all shadow-2xl hover:shadow-3xl hover:border-white/10 group"
                style={{
                  ...cardStyle,
                  transform: cardTransform.transform,
                  opacity: cardTransform.opacity,
                  zIndex: cardTransform.zIndex,
                  pointerEvents: cardTransform.pointerEvents,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Background image layer with zoom effect */}
                <div
                  className="absolute inset-0 z-0 h-full w-full bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${backgroundImage}')` }}
                />

                {/* Premium Cinematic Overlay: Enhanced gradient for modern look */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    background:
                      card.gradient ??
                      "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.15) 100%)",
                    opacity: card.gradient ? 0.95 : 1,
                  }}
                />

                {/* Modern Glassmorphism Badge */}
                {card.badge && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-xl text-white border border-white/15 rounded-lg shadow-lg hover:bg-white/12 transition-all">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                      <span className="text-xs font-semibold tracking-widest uppercase">
                        {card.badge}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content Layout */}
                <div className="relative z-10 p-8 sm:p-12 md:p-16 h-full flex items-center">
                  {card.content ? (
                    card.content
                  ) : (
                    <div className="max-w-2xl text-left flex flex-col">
                      {/* Modern Accent Line */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"></div>
                        <div className="h-px w-8 bg-white/20"></div>
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className="text-sm md:text-lg text-white/70 leading-relaxed font-light max-w-lg">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern Scroll Indicator */}
        {activeCardIndex < cardCount - 1 && (
          <div className="mt-16 flex flex-col items-center justify-center gap-3 select-none">
            <div className="border border-white/20 px-5 py-3 flex flex-col items-center gap-2 bg-white/5 backdrop-blur-md rounded-lg hover:bg-white/10 transition-all shadow-lg">
              <span className="text-xs font-semibold tracking-widest uppercase text-black">
                Scroll to explore
              </span>
              <div className="flex flex-col gap-1">
                <ChevronDown className="h-5 w-5 text-cyan-400 animate-bounce" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollStack;
