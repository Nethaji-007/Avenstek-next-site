import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional Construction Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}