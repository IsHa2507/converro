// components/ClientWrapper.jsx
"use client";

import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import ModalForm from "../Components/ModalForm";
import FloatingWhatsApp from "../Components/FloatingWhatsApp";

export default function ClientWrapper({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <main>{children}</main>
      <CTA />
      <Footer />
      <FloatingWhatsApp />
      {isModalOpen && <ModalForm onClose={closeModal} />}
    </>
  );
}
