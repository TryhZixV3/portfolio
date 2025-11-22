import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Mattéo Lopez - Portfolio",
  description: "Portfolio de Mattéo Lopez — Game Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="site-root">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
