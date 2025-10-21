"use client";

import Navbar from "../Components/Navbar";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import { FaStar } from "react-icons/fa"; // still fine to use
import StatsSection from "../components/StatsSection";
import ParallaxSections from "../components/ParallaxSections";
import FAQs from "../components/FAQs";
import Integrations from "../components/Integrations";
import BrandSlider from "../components/BrandSlider";
import HeroSection from "../components/HeroSection";
import FinanceSection from "../components/FinanceSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

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
