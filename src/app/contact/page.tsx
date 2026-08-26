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
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden pt-32 pb-24 font-sans flex items-center">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff2a00] rounded-full blur-[200px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ff5f1f] rounded-full blur-[150px] opacity-5 pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      {/* Subtle Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            TOP SECTION: Massive Typography 
            ========================================= */}
        <motion.div variants={itemVariants} className="relative mb-16 md:mb-24">
          <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85] text-white">
            START <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              BUILDING
            </span>
          </h1>

          {/* Floating Glass Badge (Desktop Only) */}
          <div className="absolute top-[10%] md:top-[20%] right-[5%] md:right-[15%] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 max-w-[200px] md:max-w-[250px] shadow-2xl hidden sm:block">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white mb-2">Connect</h3>
            <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed">
              Drop us a line to discuss scaling your digital presence, optimizing your ad channels, or general platform inquiries.
            </p>
          </div>
        </motion.div>


        {/* =========================================
            BOTTOM SECTION: Info & Form Grid
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Toggles & Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col">
            
            {/* Pill Toggles */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button 
                onClick={() => setInquiryType('project')}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  inquiryType === 'project' 
                    ? 'bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white border border-transparent shadow-[0_0_20px_rgba(255,42,0,0.4)]' 
                    : 'bg-transparent text-gray-400 border border-white/20 hover:border-white/50 hover:text-white'
                }`}
              >
                New Campaign
              </button>
              <button 
                onClick={() => setInquiryType('general')}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  inquiryType === 'general' 
                    ? 'bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white border border-transparent shadow-[0_0_20px_rgba(255,42,0,0.4)]' 
                    : 'bg-transparent text-gray-400 border border-white/20 hover:border-white/50 hover:text-white'
                }`}
              >
                General Inquiry
              </button>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-md">
              Whether you are looking to architect a new digital ecosystem from the ground up or scale your current ad spend, our strategy team is ready to analyze your data.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-[#ff5f1f] text-xs font-bold tracking-widest uppercase mb-2">Email Us</h4>
                <a href="mailto:hello@reachmoreadz.com" className="text-xl md:text-2xl font-medium hover:text-[#ff5f1f] transition-colors">
                  hello@reachmoreadz.com
                </a>
              </div>
              <div>
                <h4 className="text-[#ff5f1f] text-xs font-bold tracking-widest uppercase mb-2">Call Us</h4>
                <a href="tel:+18001234567" className="text-xl md:text-2xl font-medium hover:text-[#ff5f1f] transition-colors">
                  +1 (800) 123-4567
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Glowing Form Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl group hover:border-[#ff2a00]/30 transition-colors duration-500">
              
              {/* Internal Glowing Orange Gradient (Activates heavily on hover) */}
              <div className="absolute bottom-0 right-0 w-full h-3/4 bg-gradient-to-tl from-[#ff2a00]/20 via-[#ff5f1f]/5 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none blur-3xl" />
              
              <form className="relative z-10 flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John"
                      className="bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a00] transition-colors text-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a00] transition-colors text-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a00] transition-colors text-lg"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Tell us about your goals</label>
                  <textarea 
                    rows={4}
                    placeholder={inquiryType === 'project' ? "I want to scale my campaigns to..." : "How can we help you?"}
                    className="bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a00] transition-colors text-lg resize-none"
                  />
                </div>

                <button className="mt-4 flex items-center justify-center w-full md:w-max px-10 py-4 text-xs font-bold tracking-widest uppercase text-white bg-white/5 hover:bg-[#ff2a00] border border-white/10 hover:border-[#ff2a00] rounded-full transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_30px_rgba(255,42,0,0.5)]">
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