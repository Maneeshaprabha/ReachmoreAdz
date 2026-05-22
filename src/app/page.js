
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MethodologyHero from "@/components/MethodologyHero";
import MethodologySection from "@/components/MethodologySection";
import Navbar from "@/components/Navbar";
import ValueSection from "@/components/ValueSection";

import ContactSection from "@/components/ContactSection";

import Image from "next/image";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import AboutUs from "@/components/AboutUs";




export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Marquee/>
        <VideoSection/>
        <MethodologySection/>
    <AboutUs/>
    <ValueSection/>
    <MethodologyHero/>
    <FaqSection/>
    <ContactSection/>
    <Footer/>
      </main>
    </>
  );
}
