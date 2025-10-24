"use client";

import React, { useState } from "react";
import ModalForm from "./ModalForm";
import Navbar from "./Navbar";

export default function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Separate Navbar to pass modal prop
  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Navbar) {
      return React.cloneElement(child, { onOpenModal: openModal });
    }
    return child;
  });

  return (
    <>
      {modifiedChildren}
      {isModalOpen && <ModalForm onClose={closeModal} />}
    </>
  );
}
