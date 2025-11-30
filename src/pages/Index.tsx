import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import WhatWeCreate from "@/components/WhatWeCreate";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import BookCallSection from "@/components/BookCallSection";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhySection />
      <WhatWeCreate />
      <HowItWorks />
      <VideoSection />
      <Features />
      <BookCallSection />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
