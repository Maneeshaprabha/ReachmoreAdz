"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// --- Data for the Interactive Stats ---
const growthData = {
  agency: {
    projects: "250+",
    revenue: "$50M+",
    subs: "10M+",
    satisfaction: "98%"
  },
  realEstate: {
    projects: "45+",
    revenue: "$12M+",
    subs: "850K+",
    satisfaction: "99%"
  },
  education: {
    projects: "80+",
    revenue: "$15M+",
    subs: "5.2M+",
    satisfaction: "97%"
  },
  ecommerce: {
    projects: "120+",
    revenue: "$23M+",
    subs: "3.9M+",
    satisfaction: "96%"
  }
};

type NicheKey = keyof typeof growthData;

export default function AboutUs() {
  const [activeNiche, setActiveNiche] = useState<NicheKey>('agency');

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden pt-32 pb-20 flex items-center">
      
      {/* 1. BACKGROUND GLOWS (Fluxora aesthetic) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#ff2a00]/40 via-[#ff5f1f]/20 to-transparent rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ff5f1f]/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 translate-y-1/3" />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 flex justify-between px-12 pointer-events-none opacity-20">
         <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
         <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
         <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
         <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* 2. LEFT COLUMN: Upgraded Typography & CTAs */}
        <div className="flex flex-col items-start pt-10 lg:pr-8">
          
          {/* Glassmorphic Pill Badge */}
     
          
          {/* Enhanced Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.85] mb-8 text-white">
            Growth <br />
            <span className="text-gray-500">Crafted for</span> <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
              Not Guesses.
            </span>
          </h1>
          
          {/* Accent-bordered Paragraph */}
          <p className="text-gray-400 text-lg md:text-xl max-w-md mb-10 leading-relaxed font-light border-l-2 border-[#ff5f1f]/50 pl-5">
            We create clear, data-driven, and explosive digital scaling experiences shaped by real human behavior and algorithm mastery.
          </p>
          
          {/* Upgraded CTA Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
            <button className="group relative flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,95,31,0.3)]">
              Start Scaling
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center transition-transform group-hover:-rotate-45">
                &rarr;
              </div>
            </button>
            
            {/* Frosted Glass Avatar Group */}
      
          </div>
        </div>

        {/* 3. RIGHT COLUMN: Visual & Interactive Stats (UNCHANGED) */}
        <div className="relative h-[600px] w-full flex flex-col justify-end">
          
          {/* Main Visual Placeholder (Replace with your actual image/3D render) */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Abstract Tech" 
            className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-60 mix-blend-luminosity"
          />
          {/* Overlay glow for the image */}
          <div className="absolute inset-0 bg-[#ff5f1f]/20 mix-blend-overlay rounded-3xl" />

          {/* Interactive UI Overlaid on Image */}
          <div className="relative z-20 p-6 md:p-10 w-full">
            
            {/* Niche Selector */}
            <div className="flex flex-wrap gap-2 mb-6 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10 w-max">
              {[
                { id: 'agency', label: 'Agency Total' },
                { id: 'realEstate', label: 'Real Estate' },
                { id: 'education', label: 'Education' },
                { id: 'ecommerce', label: 'E-Commerce' }
              ].map((niche) => (
                <button
                  key={niche.id}
                  onClick={() => setActiveNiche(niche.id as NicheKey)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeNiche === niche.id 
                      ? 'bg-[#ff5f1f] text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {niche.label}
                </button>
              ))}
            </div>

            {/* Glassmorphic Stat Cards (Bento Style) */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="bg-[#1a0b05]/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff5f1f]/20 blur-2xl rounded-full" />
                <h3 className="text-gray-400 text-sm mb-2 font-medium">Revenue Scaled</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNiche + 'rev'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-4xl md:text-5xl font-normal tracking-tight text-white"
                  >
                    {growthData[activeNiche].revenue}
                  </motion.div>
                </AnimatePresence>
                <div className="absolute top-4 right-4 text-[#ff5f1f]">*</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden">
                <h3 className="text-gray-400 text-sm mb-2 font-medium">Subscribers</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNiche + 'subs'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-4xl md:text-5xl font-normal tracking-tight text-white"
                  >
                    {growthData[activeNiche].subs}
                  </motion.div>
                </AnimatePresence>
                <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    key={activeNiche + 'bar'}
                    initial={{ width: 0 }}
                    animate={{ width: activeNiche === 'agency' ? '100%' : '75%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]" 
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}