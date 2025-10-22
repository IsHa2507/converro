import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Homepage from "../about/Home";
import TermsAndCondition from "../about/TermsAndCondition";
import PrivacyPolicy from "../about/PrivacyAndPolicy";
import RefundPolicy from "../about/Refund";
import ContactUs from "../about/ContactUs";
import AboutUS from  "../about/AboutUs";
import Pricing from "../about/Pricing";
import IntegrationPage from "../about/IntegrationPage";
import CRMSection from "../Pages/CRMSectionIndus";
import CRMIndusFeatures from "../Pages/CRMfeatures";

// Global components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import ModalForm from "../about/ModalForm";
import ProductSection from "../Pages/ProductSection";
import ProductFeatures from "../Pages/ProductFeatures";
import FloatingWhatsApp from "../about/FloatingWhatsApp";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      {/* Navbar with modal trigger */}
      <Navbar onOpenModal={openModal} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/termsandconditions" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/integrationpage" element={<IntegrationPage />} />
        <Route path="/crmsections" element={<CRMSection/>} />
        <Route path="/productsection" element={<ProductSection/>}/>
      </Routes>

      {/* Footer always at bottom */}
     

      {/* Modal only shows if open */}
      {isModalOpen && <ModalForm onClose={closeModal} />}
    </Router>
  );
}

export default App;
