"use client";

import React, { useState, useEffect } from 'react';
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
  const [expandedIndex, setExpandedIndex] = useState<number>(3);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Safely check for window width to prevent Next.js SSR hydration errors
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full bg-[#0a0402] py-20 md:py-32 px-4 md:px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. Heading */}
      <div className="text-center mb-12 md:mb-16 z-20">
        <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tighter uppercase leading-[1.1] text-gray-200">
          Strategy, Production, Growth <br className="hidden md:block" />
          <span className="text-gray-400"> — We've got you covered.</span>
        </h2>
      </div>

      {/* 2. Overlapping Cards Container */}
      <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-6xl h-auto md:h-[400px] gap-4 md:gap-0 md:pl-12">
        
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={service.id}
              // Animate height on mobile, width on desktop
              animate={{ 
                width: !isMounted ? '100%' : isMobile ? '100%' : (isExpanded ? '550px' : '220px'),
                height: !isMounted ? 'auto' : isMobile ? (isExpanded ? '300px' : '150px') : '100%'
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              
              // Desktop interactions
              onMouseEnter={() => !isMobile && setExpandedIndex(index)}
              onMouseLeave={() => !isMobile && setExpandedIndex(3)}
              
              // Mobile touch interaction
              onClick={() => isMobile && setExpandedIndex(index)}
              
              className={`
                relative rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl cursor-pointer
                ${service.bg} ${service.text} ${service.zIndex}
                ${index !== 0 ? 'md:-ml-12' : ''} 
              `}
              // SSR initial styling fallback
              style={{ minHeight: !isMounted ? '150px' : 'auto' }}
            >
              {/* Card Title */}
              <h3 className="text-2xl lg:text-[2rem] font-black tracking-tighter leading-[0.95] whitespace-pre-line z-10">
                {service.title}
              </h3>

              {/* Card Description */}
              <div className="relative z-10 flex items-end h-full mt-4 md:mt-8">
                <motion.p 
                  animate={{ opacity: isExpanded ? 1 : (isMobile ? 0 : 0.6) }}
                  className="text-sm font-medium leading-relaxed max-w-[280px]"
                >
                  {service.desc}
                </motion.p>
              </div>

              {/* 3D Ring Image Placeholder for Card 4 */}
              {service.hasImage && (
                <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-80 pointer-events-none transition-transform duration-700 hover:rotate-12 hidden md:block">
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