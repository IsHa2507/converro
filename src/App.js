import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import TermsAndCondition from "./components/TermsAndCondition";
// import PrivacyPolicy from "./PrivacyPolicy"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
function App() {
  return (
    <Router>
     
      <Navbar />
      <TermsAndCondition/>
      <CTA/>
      <Footer />
    </Router>
  );
}

export default App;