// app/layout.jsx
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
