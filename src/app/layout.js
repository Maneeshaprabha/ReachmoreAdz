import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reach More",
  description: "Reach More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-white antialiased selection:bg-[#ff2a00] selection:text-white`}
      >
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}