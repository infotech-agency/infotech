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
    backgroundImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Social Media", 
    subtitle: "",
    backgroundImage: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Digital Marketing", 
    subtitle: "",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
