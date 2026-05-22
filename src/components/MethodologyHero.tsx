"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function MethodologyHero() {
  // Brand color exactly matched to the vibrant safety-orange from the image
  const brandOrange = "#f23c13";
  const brandBlack = "#0a0a0a";

  return (
    <section className="w-full flex flex-col font-sans overflow-hidden">
      
      {/* =========================================
          TOP SECTION: Solid Orange Background
          ========================================= */}
      <div 
        className="w-full relative z-10 flex flex-col lg:flex-row pt-16 md:pt-24 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: brandOrange }}
      >
        
        {/* Left Column: Typography & Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex flex-col pb-16 lg:pr-16 z-20"
        >
          {/* Small Eyebrow Label */}
          <span className="uppercase text-xs md:text-sm font-bold tracking-widest text-white mb-8 md:mb-12">
            The Methodology
          </span>
          
          {/* Massive Bold Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold uppercase leading-[1.1] tracking-tight text-white mb-16 lg:mb-32 max-w-2xl">
            Data is the aesthetic of clarity and freedom. We create systems that become an extension of your brand, not just a metric.
          </h2>
          
          {/* Supporting Paragraph */}
          <p className="text-white font-medium text-sm md:text-base leading-relaxed max-w-md">
            Transparent strategies, bold algorithmic plays, and attention to detail make every campaign a reflection of true market potential. Inspired by pure data, we rethought the concept of agency partnerships—turning it into an engine capable of scaling your reach without limits.
          </p>
        </motion.div>

        {/* Right Column: The Silhouette Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[45%] flex items-end justify-end relative z-20 mb-8 lg:mb-0"
        >
          {/* Using a placeholder image from Unsplash that mimics the 
            orange silhouette vibe of your reference image. 
          */}
          <div className="w-full max-w-lg aspect-[4/3] lg:aspect-[4/5] bg-[#0a0402] relative overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1614850715649-1d0106293cb1?q=80&w=1500&auto=format&fit=crop" 
              alt="Brand Silhouette" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* =========================================
          BOTTOM SECTION: Solid Black Background 
          with Massive Orange Text
          ========================================= */}
      <div 
        className="w-full relative z-0 flex items-center justify-center pt-6 pb-12 md:pt-4 md:pb-16 overflow-hidden"
        style={{ backgroundColor: brandBlack }}
      >
        {/* The font size is set using 'vw' (viewport width) so it perfectly 
          scales and stretches from edge to edge on any screen size.
        */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-[19vw] leading-[0.75] font-black tracking-tighter text-center w-full select-none m-0 p-0"
          style={{ color: brandOrange }}
        >
          METHOD01
        </motion.h1>
      </div>

    </section>
  );
}