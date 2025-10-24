import "../app/global.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import FloatingWhatsApp from "../Components/FloatingWhatsApp";
import ModalProvider from "../Components/ModalProvider"; // new wrapper for modal logic


export const metadata = {
  title: "Your App Name",
  description: "App description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
