"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 0,
    title: "CHAN\nSTRAT\n& AUD",
    desc: "Deep channel audit to identify what will drive strategy until you scale.",
    bg: "bg-[#ff5f1f]",
    text: "text-black",
    zIndex: "z-10"
  },
  {
    id: 1,
    title: "CONT\nPROD\n& OPT",
    desc: "From thumbnails to production optimization to manage deadline.",
    bg: "bg-[#f4f4f5]",
    text: "text-black",
    zIndex: "z-20"
  },
  {
    id: 2,
    title: "FULL CO\nCREATIC\n& PRODU",
    desc: "We handle full content creation that elevate your brand",
    bg: "bg-[#1f1f1f]",
    text: "text-white",
    zIndex: "z-30"
  },
  {
    id: 3,
    title: "MULTI-\nCHANNEL\nNETWORK\nSTRATEGY",
    desc: "Ready to scale beyond one channel? We help you build and manage a network of channels that multiply your reach, revenue, and market dominance.",
    bg: "bg-[#050505] border border-white/10",
    text: "text-white",
    zIndex: "z-40",
    hasImage: true
  }
];

export default function ServicesSection() {
  // Default to 3 (the last card) being expanded, matching your image exactly
  const [expandedIndex, setExpandedIndex] = useState<number>(3);

  return (
    <section className="relative w-full bg-[#0a0402] py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. Heading */}
      <div className="text-center mb-16 z-20">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tighter uppercase leading-[1.1] text-gray-200">
          Strategy, Production, Growth <br />
          <span className="text-gray-400">—We've got you covered.</span>
        </h2>
      </div>

      {/* 2. Overlapping Cards Container */}
      <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-6xl h-auto md:h-[400px] gap-4 md:gap-0 md:pl-12">
        
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={service.id}
              // Animate width on desktop, keep it 100% on mobile
              animate={{ 
                width: typeof window !== 'undefined' && window.innerWidth >= 768 
                  ? (isExpanded ? '550px' : '220px') 
                  : '100%' 
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(3)} // Snaps back to image default when mouse leaves
              className={`
                relative h-full min-h-[300px] md:min-h-full rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl cursor-pointer
                ${service.bg} ${service.text} ${service.zIndex}
                ${index !== 0 ? 'md:-ml-12' : ''} 
              `}
            >
              {/* Card Title (whitespace-pre-line honors the \n in the string) */}
              <h3 className="text-3xl lg:text-[2rem] font-black tracking-tighter leading-[0.95] whitespace-pre-line z-10">
                {service.title}
              </h3>

              {/* Card Description */}
              <div className="relative z-10 flex items-end h-full mt-8">
                <motion.p 
                  animate={{ opacity: isExpanded ? 1 : 0.6 }}
                  className="text-xs md:text-sm font-medium leading-relaxed max-w-[280px]"
                >
                  {service.desc}
                </motion.p>
              </div>

              {/* 3D Ring Image Placeholder for Card 4 */}
              {service.hasImage && (
                <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-80 pointer-events-none transition-transform duration-700 hover:rotate-12 hidden md:block">
                  {/* If you have the actual 3D render, replace this div with an <img src="..." /> */}
                  <div className="w-48 h-48 border-[20px] border-gray-300 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[60deg] skew-x-12" style={{ borderStyle: 'ridge' }} />
                </div>
              )}
              
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}