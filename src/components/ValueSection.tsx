"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ValueSection() {
  // Staggered animation for the columns
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    },
  };

  return (
    <section className="relative w-full bg-[#0a0402] py-32 px-4 md:px-8 flex flex-col items-center overflow-hidden z-10">
      
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* 1. THE HEADING (Matching the mix of strong sans-serif and cursive/italic) */}
        <div className="text-center mb-20 z-20">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter uppercase leading-[1.1] text-white">
            A Strong Strategy Changes <br />
            <span className="font-serif italic tracking-normal text-gray-400 lowercase text-5xl md:text-6xl lg:text-[5rem] pr-4">the trajectory</span> 
            Of Brands
          </h2>
        </div>

        {/* 2. THE PARTITIONED GRID */}
        {/* We use divide-x to create those sharp vertical lines between columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-5 w-full border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 min-h-[600px]"
        >
          
          {/* COLUMN 1: Orange, Top-Aligned, Rounded Bottom Right */}
          <motion.div variants={columnVariants} className="flex flex-col justify-start h-full p-4 md:p-6 group">
            <div className="bg-[#ff2a00] p-8 md:p-10 h-[70%] rounded-br-[4rem] transition-transform duration-500 group-hover:-translate-y-2 shadow-[0_20px_40px_rgba(255,42,0,0.2)]">
              <span className="text-white/80 font-medium text-sm tracking-widest mb-4 block">01</span>
              <h3 className="text-white font-bold text-xl uppercase mb-4 leading-tight tracking-tight">More Visual <br/> Attention</h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                A dominant digital footprint creates a visual anchor that allows audiences to immediately recognize and remember your brand in a crowded feed.
              </p>
            </div>
          </motion.div>

          {/* COLUMN 2: Dark with Glowing Center, Middle-Aligned */}
          <motion.div variants={columnVariants} className="flex flex-col justify-center h-full p-4 md:p-6 group">
             <div className="bg-[#111] border border-white/5 p-8 md:p-10 rounded-3xl relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
               {/* Abstract Glowing "Flower" Effect from your image */}
               <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-screen">
                  <div className="absolute w-24 h-48 bg-[#ff5f1f] rounded-full blur-[30px] rotate-45" />
                  <div className="absolute w-24 h-48 bg-[#ff5f1f] rounded-full blur-[30px] -rotate-45" />
                  <div className="absolute w-48 h-24 bg-[#ff5f1f] rounded-full blur-[30px]" />
               </div>
               
               <div className="relative z-10 text-center mt-12">
                 <span className="text-white/60 font-medium text-sm tracking-widest mb-4 block">02</span>
                 <h3 className="text-white font-bold text-xl uppercase mb-4 leading-tight tracking-tight">Manages User <br/> Behavior</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   Creates areas of algorithmic attraction; users are more likely to engage, stay longer, and treat the content exactly as the funnel intends.
                 </p>
               </div>
             </div>
          </motion.div>

          {/* COLUMN 3: Dark Grey, Floating Top/Middle */}
          <motion.div variants={columnVariants} className="flex flex-col justify-start pt-16 h-full p-4 md:p-6 group">
             <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl transition-transform duration-500 group-hover:-translate-y-2">
               <div className="text-center">
                 <span className="text-white/60 font-medium text-sm tracking-widest mb-4 block">03</span>
                 <h3 className="text-white font-bold text-xl uppercase mb-4 leading-tight tracking-tight">Generates Viral <br/> Momentum</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   High-retention content becomes a natural sharing point — viewers create organic distribution themselves and bring in entirely new audiences.
                 </p>
               </div>
             </div>
          </motion.div>

          {/* COLUMN 4: Orange, Bottom-Aligned, Rounded opposite corners */}
          <motion.div variants={columnVariants} className="flex flex-col justify-end h-full p-4 md:p-6 group">
             <div className="bg-[#ff2a00] p-8 md:p-10 h-[65%] rounded-tl-[3rem] rounded-br-[3rem] transition-transform duration-500 group-hover:-translate-y-2 shadow-[0_20px_40px_rgba(255,42,0,0.2)]">
               <div className="text-center mt-8">
                 <span className="text-white/80 font-medium text-sm tracking-widest mb-4 block">04</span>
                 <h3 className="text-white font-bold text-xl uppercase mb-4 leading-tight tracking-tight">Increases The <br/> Premium Feel</h3>
                 <p className="text-white/90 text-sm leading-relaxed font-medium">
                   One expressive channel enhances the perception of the level of the entire brand and helps to justify a significantly higher conversion value.
                 </p>
               </div>
             </div>
          </motion.div>

          {/* COLUMN 5: Image Card, Middle-Aligned */}
          <motion.div variants={columnVariants} className="flex flex-col justify-center h-full p-4 md:p-6 group">
             <div className="relative w-full h-[60%] rounded-[2rem] overflow-hidden border border-white/10 transition-transform duration-500 group-hover:-translate-y-2">
               {/* Replace src with your actual image */}
               <img 
                 src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                 alt="Premium Visual" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-110 transition-transform duration-700 group-hover:mix-blend-normal"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0402] via-transparent to-transparent opacity-80" />
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}