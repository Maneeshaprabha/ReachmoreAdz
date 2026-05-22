"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const brandOrange = "#ff5f1f";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <section className="relative w-full bg-[#0a0402] text-white pt-24 pb-20 px-6 md:px-12 flex flex-col items-center overflow-hidden font-sans selection:bg-[#ff2a00] selection:text-white">
      
      {/* =========================================
          TOP SECTION: Overlapping images
          ========================================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1600px] flex flex-col relative mb-12"
      >
        <div className="flex justify-center items-center relative h-[400px] md:h-[500px] pointer-events-none mb-12">
          
          <div className="absolute inset-x-0 mx-auto w-[60%] h-full z-10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[#ff5f1f]/60 mix-blend-color z-10 pointer-events-none" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)' }} />
            <img 
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop" 
              alt="Central Video" 
              className="w-full h-full object-cover grayscale mix-blend-lighten opacity-80"
              style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)' }}
            />
          </div>

          {/* FLANKING IMAGES */}
          <div className="absolute top-0 left-0 w-32 md:w-48 h-32 md:h-48 z-0 rounded-lg overflow-hidden grayscale">
             <div className="absolute inset-0 bg-[#ff5f1f]/40 mix-blend-color z-10 pointer-events-none" />
             <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" alt="Portrait" className="absolute inset-0 w-full h-full object-cover"/>
          </div>
          <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 z-0 rounded-lg overflow-hidden grayscale">
             <div className="absolute inset-0 bg-[#ff5f1f]/40 mix-blend-color z-10 pointer-events-none" />
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Team" className="absolute inset-0 w-full h-full object-cover"/>
          </div>
        </div>

        <motion.h1 
          variants={itemVariants}
          className="text-[14vw] md:text-[10rem] lg:text-[12rem] leading-[0.8] font-bold tracking-tighter uppercase text-center w-full select-none"
        >
          about us
        </motion.h1>
      </motion.div>


      {/* =========================================
          BODY TEXT SECTION
          ========================================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto w-full text-center mb-32 z-10 relative flex flex-col items-center"
      >
        <span className="text-gray-400 font-medium text-sm tracking-wider mb-8 block">
          Based in London, operating worldwide
        </span>
        
        <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-bold uppercase leading-[0.9] tracking-tight mb-12 text-[#ff5f1f]">
          we are a creative collective of event producers, marketing specialists, art directors, designers, and strategic analysts.
        </h2>
        
        <p className="text-gray-400 max-w-2xl text-base leading-relaxed mb-12">
          Together, we create bespoke solutions for each brand, embracing high-impact creativity to craft memorable, innovative experiences. Our diverse expertise allows us to approach each project with fresh eyes and deliver exceptional results. People don't just attend events—they talk about them.
        </p>
      </motion.div>


      {/* =========================================
          ANIMATED PROCESS FLOW 
          ========================================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        className="w-full max-w-5xl mx-auto z-10 relative h-[1000px] flex flex-col" // Increased height to 1000px
      >
        {/* Animated SVG Path */}
        <svg viewBox="0 0 1000 1000" fill="none" className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none preserve-3d" preserveAspectRatio="none">
          <motion.path 
            d="M500,0 C300,200 800,400 500,600 S200,800 500,1000" 
            stroke={brandOrange}
            strokeWidth="3" 
            strokeLinecap="round"
            // The magic: animates from 0% drawn to 100% drawn
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </svg>

        {/* point 01 */}
        <motion.div variants={itemVariants} className="absolute top-[10%] left-[10%] text-center p-4">
          <span className="text-5xl font-bold text-[#ff5f1f] mb-3 block">01</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5f1f]">analysis</span>
          <p className="text-gray-400 text-[10px] max-w-[120px] leading-relaxed mt-1">
             We analyse your brand to identify the core message.
          </p>
        </motion.div>

        {/* process marker */}
        <motion.div variants={itemVariants} className="absolute top-[30%] left-[50%] -translate-x-1/2 p-2 rounded-full flex gap-1 bg-[#0a0402]">
           <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: brandOrange }}/>
           <span className="text-xs font-bold uppercase tracking-widest text-[#ff5f1f]">process</span>
        </motion.div>

        {/* point 02 */}
        <motion.div variants={itemVariants} className="absolute top-[45%] right-[15%] text-center p-4">
          <span className="text-5xl font-bold text-[#ff5f1f] mb-3 block">02</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5f1f]">concept</span>
          <p className="text-gray-400 text-[10px] max-w-[120px] leading-relaxed mt-1">
              We create unique concepts bringing ideas to life.
          </p>
        </motion.div>

        {/* point 03 */}
        <motion.div variants={itemVariants} className="absolute top-[70%] left-[15%] text-center p-4">
          <span className="text-5xl font-bold text-[#ff5f1f] mb-3 block">03</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5f1f]">visuals</span>
          <p className="text-gray-400 text-[10px] max-w-[120px] leading-relaxed mt-1">
             We provide 3D visualisations to convey the key message.
          </p>
        </motion.div>

        {/* point 04 */}
        <motion.div variants={itemVariants} className="absolute bottom-[5%] right-[20%] text-center p-4">
          <span className="text-5xl font-bold text-[#ff5f1f] mb-3 block">04</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5f1f]">budgeting</span>
          <p className="text-gray-400 text-[10px] max-w-[120px] leading-relaxed mt-1">
              We offer transparent pricing with no hidden costs.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}