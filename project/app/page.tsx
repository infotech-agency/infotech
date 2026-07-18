import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import Achievements from '@/components/home/Achievements';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesGrid from '@/components/home/ServicesGrid';
import IndustryExpertise from '@/components/home/IndustryExpertise';
import FeaturedCaseStudies from '@/components/home/FeaturedCaseStudies';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import Process from '@/components/home/Process';
import ResultsStats from '@/components/home/ResultsStats';
import MarketingSolutions from '@/components/home/MarketingSolutions';
import TeamPreview from '@/components/home/TeamPreview';
import AwardsRecognition from '@/components/home/AwardsRecognition';
import LatestBlogs from '@/components/home/LatestBlogs';
import HomeFAQ from '@/components/home/HomeFAQ';
import CTABanner from '@/components/common/CTABanner';
import Delhi from '@/components/Delhi';
import Technologies from '@/components/home/Technologies';
import { File, Search, Settings } from "lucide-react"
import HangingIdCard from '@/components/ui/hanging-id-card';
import CareersCta from '@/components/home/Careercta';
import ScrollStack from '@/components/ui/scroll-stack';
import GlobalReach from '@/components/home/GlobalReach';
import WmeStyleHero from '@/components/common/WmeStyleHero';

export default function HomePage() {
  const cards = [
  {
  title: "Our Services",
  subtitle: "Scroll to explore the services we offer.",
  badge: "Services"
},
  {
    title: "Web Developement", 
    subtitle: "",
    backgroundImage: "https://brandripe.com/storage/media_files/blog6/1-%20Size%20and%20placement%20matter.jpg"
  },
  {
    title: "Social Media", 
    subtitle: "",
    backgroundImage: "https://cdn.prod.website-files.com/6242172a7e2e2ede634bba2f/66756e71925758d3eecf1278_social-media-marketing-strategy.jpg"
  },
  {
    title: "Digital Marketing", 
    subtitle: "",
    backgroundImage: "https://digitalpromenade.com/wp-content/uploads/2026/01/best-digital-marketing-agencies-in-mumbai.jpg"
  },
  {
    title: "Graphic Designing", 
    subtitle: "",
    backgroundImage: "https://www.admecindia.co.in/wp-content/uploads/2024/03/Ways-Photoshop-Benefit-a-Graphic-Design-Course.jpg"
  },
  {
    title: "Google & Meta Ads", 
    subtitle: "",
    backgroundImage: "https://zoople.in/wp-content/uploads/2024/03/Blog-Image_11-Mar-2024.jpg"
  }


];

  return (
    <>
      <Hero />
      {/* <WmeStyleHero/> */}
      <TrustedBy />

      <Achievements />
      <ScrollStack cards={cards}/>
      
      <WhyChooseUs />
      {/* <ServicesGrid /> */}
      <IndustryExpertise />
      <FeaturedCaseStudies />
      <TestimonialsSlider />
      <Process />
      <ResultsStats />
      <MarketingSolutions />
      {/* <TeamPreview /> */}
      <AwardsRecognition />
      <Delhi/>
      <LatestBlogs />
      <HomeFAQ />
      <GlobalReach/>
      <CareersCta/>
      <Technologies/>
      <CTABanner />
    </>
  );
}
