"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- SVGs ---
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white ml-2">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function VideoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      } 
    },
  };

  return (
    <section className="relative w-full bg-[#0a0402] py-32 px-6 flex flex-col items-center justify-center overflow-hidden z-10">
      
      {/* Background Cinematic Glow - Made slightly larger to match the new video size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff2a00] rounded-full blur-[250px] opacity-15 pointer-events-none" />

      {/* Main Content Container - Increased from max-w-5xl to max-w-7xl */}
      <motion.div 
        className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* 1. Heading & Typography */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight uppercase leading-[1.1] mb-6 text-white">
            Data Scales. <br />
            <span className="text-gray-400 font-serif italic normal-case tracking-normal">Gut feeling doesn't.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We've generated millions in revenue by understanding what the algorithm actually wants. No guesswork, just proven strategies that deliver real growth.
          </p>
        </motion.div>

        {/* 2. Video Player Container - Increased to max-w-6xl for a massive, cinematic feel */}
        <motion.div 
          variants={itemVariants} 
          className="relative w-full max-w-6xl aspect-video rounded-[2rem] overflow-hidden group cursor-pointer border border-white/10 bg-[#111]"
        >
          {/* Ambient shadow that grows on hover */}
          <div className="absolute inset-0 shadow-[0_0_50px_rgba(255,42,0,0.1)] group-hover:shadow-[0_0_80px_rgba(255,42,0,0.3)] transition-shadow duration-500 rounded-[2rem]" />
          
          {/* Thumbnail Image */}
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Video Thumbnail" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105 mix-blend-luminosity"
          />
          
          {/* Overlay Gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0402] via-transparent to-transparent opacity-90" />

          {/* Centered Play Button - Slightly larger to scale with the new video size */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-28 h-28 bg-[#ff2a00] rounded-full shadow-[0_0_30px_rgba(255,42,0,0.5)] group-hover:scale-110 transition-transform duration-500 ease-out">
              {/* Pulsing ring effect on hover */}
              <div className="absolute inset-0 rounded-full border border-[#ff2a00] animate-ping opacity-20 group-hover:opacity-100" />
              <PlayIcon />
            </div>
          </div>
        </motion.div>
        
        {/* 3. Call to Action Button */}
        <motion.div variants={itemVariants} className="mt-16">
          <button className="group flex items-center px-8 py-4 text-sm font-bold text-white bg-white/5 border border-white/10 hover:border-[#ff2a00] hover:bg-[#ff2a00]/10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
            START NOW 
            <ArrowRightIcon />
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}