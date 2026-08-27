"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- SVG Icons ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<'project' | 'general'>('project');

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
  };

  return (
    <div className="relative min-h-screen bg-[#0a0402] text-white overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24 font-sans flex items-center">
      
      {/* Background Ambient Glows */}
      {/* Scaled down sizes on mobile to prevent visual overpowering */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff2a00] rounded-full blur-[100px] md:blur-[200px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ff5f1f] rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <motion.div 
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* TOP SECTION: Massive Typography & Floating Badge */}
        <motion.div variants={itemVariants} className="relative mb-12 md:mb-24 mt-8 md:mt-0">
          {/* text-[18vw] ensures it fills the screen perfectly on mobile, handing off to 8rem on tablet */}
          <h1 className="text-[18vw] sm:text-[12vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85] md:leading-[0.8] text-white">
            START <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              BUILDING
            </span>
          </h1>

          {/* Floating Glass Badge - Hidden on mobile, visible on sm and up */}
          <div className="absolute top-[10%] md:top-[20%] right-0 md:right-[10%] lg:right-[20%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 max-w-[200px] md:max-w-[250px] shadow-2xl hidden sm:block">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white mb-2">Connect</h3>
            <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed">
              Drop us a line to discuss scaling your digital presence, optimizing your channels, or general inquiries.
            </p>
          </div>
        </motion.div>


        {/* BOTTOM SECTION: Two Columns (Info & Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Toggles & Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col">
            
            {/* Pill Toggles */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
              <button 
                onClick={() => setInquiryType('project')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  inquiryType === 'project' 
                    ? 'bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white border border-transparent shadow-[0_0_20px_rgba(255,42,0,0.4)]' 
                    : 'bg-transparent text-gray-400 border border-white/20 hover:border-white/50 hover:text-white'
                }`}
              >
                New Project
              </button>
              <button 
                onClick={() => setInquiryType('general')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  inquiryType === 'general' 
                    ? 'bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white border border-transparent shadow-[0_0_20px_rgba(255,42,0,0.4)]' 
                    : 'bg-transparent text-gray-400 border border-white/20 hover:border-white/50 hover:text-white'
                }`}
              >
                General Inquiry
              </button>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 md:mb-12 max-w-md">
              Real words from real clients. Honest feedback on how we work and communicate, and what changed after launch. This is the experience behind the results.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h4 className="text-[#ff5f1f] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">Email Us</h4>
                <a href="mailto:hello@ReachMoreAdz.com" className="text-lg sm:text-xl md:text-2xl font-medium hover:text-[#ff5f1f] transition-colors break-all">
                  hello@ReachMoreAdz.com
                </a>
              </div>
              <div>
                <h4 className="text-[#ff5f1f] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">Call Us</h4>
                <a href="tel:+94761186751" className="text-lg sm:text-xl md:text-2xl font-medium hover:text-[#ff5f1f] transition-colors">
                  +94 (76) 118-6751
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Glowing Form Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            {/* Reduced padding on mobile (p-6) so inputs have more room */}
            <div className="relative bg-[#0d0503] border border-[#ff2a00]/20 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
              
              {/* Internal Glowing Orange Gradient */}
              <div className="absolute bottom-0 right-0 w-full h-3/4 bg-gradient-to-tl from-[#ff2a00]/40 via-[#ff5f1f]/10 to-transparent opacity-60 pointer-events-none blur-xl" />
              
              <form className="relative z-10 flex flex-col gap-6 md:gap-8" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                    {/* text-base prevents iOS Safari zoom on focus */}
                    <input 
                      type="text" 
                      placeholder="John"
                      className="bg-transparent border-b border-white/20 py-2 md:py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a00] transition-colors text-base md:text-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="bg-transparent border-b border-white/20 py-2 md:py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a00] transition-colors text-base md:text-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="bg-transparent border-b border-white/20 py-2 md:py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a00] transition-colors text-base md:text-lg"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">Tell us about your goals</label>
                  <textarea 
                    rows={4}
                    placeholder="I want to scale my channel to..."
                    className="bg-transparent border-b border-white/20 py-2 md:py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a00] transition-colors text-base md:text-lg resize-none"
                  />
                </div>

                <button className="group mt-2 md:mt-4 flex items-center justify-center w-full md:w-auto md:self-start px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-[#ff2a00] border border-white/10 hover:border-[#ff2a00] rounded-full transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_30px_rgba(255,42,0,0.5)]">
                  SUBMIT INQUIRY
                  <ArrowRightIcon />
                </button>
                
              </form>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}