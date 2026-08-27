"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- SVGs ---
const CrosshairIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff5f1f]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff5f1f]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff5f1f]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
  </svg>
);

export default function TargetingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const,  stiffness: 80, damping: 20 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-[#ff2a00] rounded-full blur-[250px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-[#ff5f1f] rounded-full blur-[200px] opacity-5 pointer-events-none -translate-x-1/2" />

      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-20">
          <Link href="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-8">
            &larr; Back to Features
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.8] text-white m-0 p-0">
              PRECISION <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
                TARGETING
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-sm md:pb-4 leading-relaxed">
              Stop paying for empty clicks. Our engine filters vast audience datasets down to the highest-intent buyers before you spend a single ad dollar.
            </p>
          </div>
        </motion.div>

        {/* =========================================
            THE SEGMENTATION ENGINE (Visual UI)
            ========================================= */}
        <motion.div variants={itemVariants} className="w-full mb-32">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff2a00]/5 to-transparent pointer-events-none" />
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">The Filtration Matrix</h2>
              <p className="text-gray-400 text-sm">How we isolate high-LTV customers from the noise.</p>
            </div>

            {/* Funnel Visualization */}
            <div className="w-full max-w-3xl flex flex-col items-center gap-4 relative z-10">
              
              {/* Layer 1: Broad Audience */}
              <div className="w-full bg-[#111] border border-white/5 rounded-2xl p-6 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <UsersIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-tight text-sm">Total Addressable Market</h4>
                    <p className="text-xs text-gray-500">2.5M+ Potential Profiles</p>
                  </div>
                </div>
                <div className="text-[#ff5f1f] text-xs font-bold uppercase tracking-widest bg-[#ff5f1f]/10 px-3 py-1 rounded-full">
                  Raw Data
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-6 bg-gradient-to-b from-white/10 to-[#ff5f1f]/50" />

              {/* Layer 2: Behavioral Filter */}
              <div className="w-[85%] bg-[#111] border border-[#ff5f1f]/20 rounded-2xl p-6 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff5f1f]/10 flex items-center justify-center">
                    <FilterIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-tight text-sm">Intent & Behavioral Filter</h4>
                    <p className="text-xs text-gray-400">Filtering out low-engagement historical data</p>
                  </div>
                </div>
                <div className="text-white text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  Processing
                </div>
              </div>

              {/* Connector */}
              <div className="w-px h-6 bg-gradient-to-b from-[#ff5f1f]/50 to-[#ff2a00]" />

              {/* Layer 3: The Target */}
              <div className="w-[70%] bg-[#111] border border-[#ff2a00]/60 rounded-2xl p-6 flex items-center justify-between shadow-[0_0_40px_rgba(255,42,0,0.15)] group hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff2a00] flex items-center justify-center shadow-[0_0_15px_rgba(255,42,0,0.5)]">
                    <CrosshairIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-tight text-sm">High-Intent Core</h4>
                    <p className="text-xs text-[#ff5f1f]">85,000 Verified Buyers</p>
                  </div>
                </div>
                <div className="text-[#ff2a00] text-xs font-bold uppercase tracking-widest animate-pulse">
                  Target Acquired
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* =========================================
            BENTO GRID / CAPABILITIES
            ========================================= */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32"
        >
          
          <div className="lg:col-span-3 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Targeting Protocols</h2>
          </div>

          {/* Capability 1 */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500 relative overflow-hidden flex flex-col justify-end min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2a00] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative z-10 w-full md:w-3/4">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Lookalike AI 2.0</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Standard lookalike audiences rely on basic demographics. Our AI integrates over 500 semantic data points to find users who don't just look like your best customers, but who behave and consume content exactly like them.
              </p>
            </div>
          </motion.div>

          {/* Capability 2 */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500 relative overflow-hidden flex flex-col justify-end min-h-[300px]">
            <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold tracking-tight mb-4 relative z-10">Cross-Web Retargeting</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              When a user interacts with your brand, we deploy persistent, privacy-compliant tracking parameters to re-engage them across every major ad network automatically.
            </p>
          </motion.div>

          {/* Capability 3 */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500 relative overflow-hidden flex flex-col justify-end min-h-[300px]">
             <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold tracking-tight mb-4 relative z-10">Negative Filtering</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              We proactively build massive exclusion lists. By blocking bot traffic, known low-LTV segments, and serial complainers, your budget is mathematically protected.
            </p>
          </motion.div>
          
          {/* Capability 4 */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500 relative overflow-hidden flex flex-col justify-end min-h-[300px]">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff5f1f] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative z-10 w-full md:w-3/4">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Competitor Hijacking</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Legally and ethically siphon traffic from your biggest rivals. Our engine identifies users who are actively engaging with competitors' content and inserts your superior offer directly into their feed.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* =========================================
            FINAL CTA
            ========================================= */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center text-center mt-20 border-t border-white/10 pt-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
            Find your <span className="text-[#ff5f1f]">exact match.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10">
            Every day you delay is another day of budget wasted on unqualified traffic. Plug your data into the ReachMoreAdz matrix today.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,42,0,0.3)]">
            Analyze My Audience
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}