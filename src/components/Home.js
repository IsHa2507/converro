import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa"; // React Star Icon

import StatsSection from "./StatsSection";
import ParallaxSections from "./ParallaxSections";
import FAQs from "./FAQs";
import Integrations from "./Integrations";
import BrandSlider from "./BrandSlider";
import HeroSection from "./Herosection";
import FinanceSection from "./FinanceSection";



const Homepage = () => {
  return (
    <>
  <Navbar />
  <HeroSection/>

  

         

    {/* Stats Section */}
    <StatsSection />
     
     <FinanceSection/>
     <BrandSlider/>
    <ParallaxSections/>

    <Integrations/>
   
   
    <FAQs/>
  

  <CTA />
  <Footer />
</>
  );
};

export default Homepage;

