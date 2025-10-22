"use client";

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import ModalForm from "../Components/ModalForm";
import FloatingWhatsApp from "../Components/FloatingWhatsApp";
import "../app/global.css";

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <html lang="en">
      <body>
        <Navbar onOpenModal={openModal} /> 
        <main>{children}</main>
        <CTA />
        <Footer />
        <FloatingWhatsApp />
        {isModalOpen && <ModalForm onClose={closeModal} />}
      </body>
    </html>
  );
}
