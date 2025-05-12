
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import VisionSection from "../components/home/VisionSection";
import PropertyCarousel from "../components/home/PropertyCarousel";
import ExceptionalLivingSection from "../components/home/ExceptionalLivingSection";
import InsightsSection from "../components/home/InsightsSection";
import FaqSection from "../components/home/FaqSection";
import ContactCta from "../components/home/ContactCta";
import Footer from "../components/layout/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <PropertyCarousel />
      <ExceptionalLivingSection />
      <InsightsSection />
      <FaqSection />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default Index;
