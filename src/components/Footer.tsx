"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  // Staggered animation for elements appearing on scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: {type: "spring" as const,  stiffness: 100, damping: 20 } },
  };

  return (
    <footer className="w-full bg-[#050505] text-white pt-16 md:pt-20 overflow-hidden">
      <motion.div 
        className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* =========================================
            TOP SECTION: Images, Email, and Links
            ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 w-full">
          
          {/* LEFT SIDE: Image Container & Email */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8 md:gap-10 w-full lg:w-auto">
            
            {/* The Split Image Container */}
            {/* Scaled down slightly on mobile to prevent overflow */}
            <div className="border-[2px] md:border-[3px] border-white rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 flex gap-1.5 md:gap-2 w-fit bg-black">
              {/* Left Image (Red Tint) */}
              <div className="relative w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-80" />
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
                  alt="Portrait" 
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
              </div>
              {/* Right Image (Black & White Team) */}
              <div className="relative w-32 sm:w-40 md:w-56 h-24 sm:h-32 md:h-40 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden grayscale">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                  alt="Team" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Massive Email Link with Underline */}
            {/* Uses text-[8vw] on tiny screens to ensure it doesn't wrap awkwardly, handing off to fixed sizes on sm+ */}
            <div>
              <a 
                href="mailto:info@ReachMoreAdz.com" 
                className="text-[7vw] sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter inline-block border-b-[3px] md:border-b-[4px] border-white pb-1 md:pb-2 hover:text-gray-300 hover:border-gray-300 transition-colors break-all md:break-normal"
              >
                info@ReachMoreAdz.com
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Navigation & Social Links */}
          <motion.div variants={itemVariants} className="flex gap-12 sm:gap-16 md:gap-24 lg:pt-4 w-full lg:w-auto">
            
            {/* Navigation Column */}
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-gray-500 text-[10px] md:text-xs font-medium mb-1 md:mb-2 uppercase tracking-widest">Navigation</span>
              <Link href="/" className="text-lg md:text-xl lg:text-2xl font-light tracking-wide hover:text-gray-400 transition-colors">Home</Link>
              <Link href="/studio" className="text-lg md:text-xl lg:text-2xl font-light tracking-wide hover:text-gray-400 transition-colors">Studio</Link>
              <Link href="/product" className="text-lg md:text-xl lg:text-2xl font-light tracking-wide hover:text-gray-400 transition-colors">Projects</Link>
              <Link href="/blogs" className="text-lg md:text-xl lg:text-2xl font-light tracking-wide hover:text-gray-400 transition-colors">Blog</Link>
            </div>

            {/* Social Media Column */}
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-gray-500 text-[10px] md:text-xs font-medium mb-1 md:mb-2 uppercase tracking-widest">Social media</span>
              <a href="#" className="text-lg md:text-xl lg:text-2xl font-light tracking-wide hover:text-gray-400 transition-colors">Twitter</a>
              <a href="#" className="text-lg md:text-xl lg:text-2xl font-light tracking-wide hover:text-gray-400 transition-colors">Dribbble</a>
              <a href="#" className="text-lg md:text-xl lg:text-2xl font-light tracking-wide hover:text-gray-400 transition-colors">Instagram</a>
              <a href="#" className="text-lg md:text-xl lg:text-2xl font-light tracking-wide hover:text-gray-400 transition-colors">Facebook</a>
            </div>
            
          </motion.div>
        </div>

        {/* =========================================
            MIDDLE SECTION: Divider & Legal Links
            ========================================= */}
        <motion.div variants={itemVariants} className="w-full mt-16 md:mt-20 mb-6 md:mb-8">
          <hr className="border-white/10 mb-6 md:mb-8" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] md:text-xs font-medium text-gray-400">
            <p>© 2026 ReachMoreAdz Studio. All Rights Reserved</p>
            <div className="flex gap-6 md:gap-8">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* =========================================
          BOTTOM SECTION: Giant Edge-to-Edge Text
          ========================================= */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex justify-center items-end mt-2 md:mt-4 overflow-hidden pointer-events-none"
      >
        {/* Using viewport width (vw) so the text scales perfectly to the edges on any device */}
        {/* Added whitespace-nowrap to prevent the text from breaking into two lines on ultra-narrow phones */}
        <h1 className="text-[10.5vw] leading-[0.72] font-light tracking-tighter text-white m-0 p-0 select-none whitespace-nowrap">
          REACHMORE ADZ
        </h1>
      </motion.div>
      
    </footer>
  );
}