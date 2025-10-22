"use client";

import Navbar from "../Components/Navbar";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import { FaStar } from "react-icons/fa"; // still fine to use
import StatsSection from "../about/StatsSection";
import ParallaxSections from "../about/ParallaxSections";
import FAQs from "../about/FAQs";
import Integrations from "../about/Integrations";
import BrandSlider from "../about/BrandSlider";
import HeroSection from "../about/HeroSection";
import FinanceSection from "../about/FinanceSection";
import FloatingWhatsApp from "../about/FloatingWhatsApp";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      <FinanceSection />
      <BrandSlider />
      <ParallaxSections />
      <Integrations />
      <FAQs />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
