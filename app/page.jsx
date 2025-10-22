"use client";

import HeroSection from "../about/HeroSection";
import StatsSection from "../about/StatsSection";
import FinanceSection from "../about/FinanceSection";
import BrandSlider from "../about/BrandSlider";
import ParallaxSections from "../about/ParallaxSections";
import Integrations from "../about/Integrations";
import FAQs from "../Components/FAQs";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FinanceSection />
      <BrandSlider />
      <ParallaxSections />
      <Integrations />
      <FAQs />
    </>
  );
}
