import "./global.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import FloatingWhatsApp from "../Components/FloatingWhatsApp";
import ModalProvider from "../Components/ModalProvider";
import { Bricolage_Grotesque } from "next/font/google"; // ✅ import the font

// ✅ Configure the font weights and subsets
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Your App Name",
  description: "App description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ✅ Apply font globally */}
      <body className={bricolage.className}>
        <ModalProvider>
          <Navbar />
          <main>{children}</main>
          <CTA />
          <Footer />
          <FloatingWhatsApp />
        </ModalProvider>
      </body>
    </html>
  );
}
