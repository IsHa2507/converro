"use client";

import Navbar from "../Components/Navbar";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import { FaStar } from "react-icons/fa"; // still fine to use
import StatsSection from "../Components/StatsSection";
import ParallaxSections from "../Components/ParallaxSections";
import FAQs from "../Components/FAQs";
import Integrations from "../Components/Integrations";
import BrandSlider from "../Components/BrandSlider";
import HeroSection from "../Components/HeroSection";
import FinanceSection from "../Components/FinanceSection";
import FloatingWhatsApp from "../Components/FloatingWhatsApp";

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
