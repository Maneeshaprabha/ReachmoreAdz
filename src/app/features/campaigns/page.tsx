"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- SVGs ---
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff5f1f]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V3L3 14.25h9v7.5L22.5 10.5h-9z" />
  </svg>
);

export default function SmartCampaignsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-[20%] left-0 w-[600px] h-[600px] bg-[#ff2a00] rounded-full blur-[250px] opacity-10 pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-[10%] right-0 w-[700px] h-[700px] bg-[#ff5f1f] rounded-full blur-[200px] opacity-5 pointer-events-none translate-x-1/3" />

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
              SMART <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
                CAMPAIGNS
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-sm md:pb-4 leading-relaxed">
              Automated, self-optimizing digital infrastructure. Launch multi-platform campaigns that automatically shift budget to the highest-performing assets in real-time.
            </p>
          </div>
        </motion.div>

        {/* =========================================
            NODE PIPELINE UI (Interactive Visual)
            ========================================= */}
        <motion.div variants={itemVariants} className="w-full mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white mb-4">The Deployment Pipeline</h2>
            <p className="text-gray-400 text-sm">How our system routes traffic and scales budget autonomously.</p>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Ambient internal glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff2a00]/5 to-transparent pointer-events-none" />

            {/* Node 1 */}
            <div className="relative z-10 w-full md:w-1/3 bg-[#111] border border-white/10 rounded-2xl p-6 shadow-lg group hover:border-[#ff5f1f]/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-gray-500 group-hover:bg-[#ff5f1f] transition-colors" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2">1. Audience Sync</h3>
              <p className="text-xs text-gray-400 leading-relaxed">API integrations pull real-time audience segments based on predictive intent data.</p>
            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="hidden md:flex relative z-10 text-gray-600">
              <ArrowRight />
            </div>

            {/* Node 2 */}
            <div className="relative z-10 w-full md:w-1/3 bg-[#111] border border-[#ff5f1f]/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,95,31,0.1)] group">
              <div className="w-10 h-10 rounded-full bg-[#ff5f1f]/20 flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f1f] animate-pulse" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2 text-white">2. Dynamic Creative</h3>
              <p className="text-xs text-gray-400 leading-relaxed">The engine A/B tests 50+ thumbnail and copy variations simultaneously.</p>
            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="hidden md:flex relative z-10 text-[#ff5f1f]">
              <ArrowRight />
            </div>

            {/* Node 3 */}
            <div className="relative z-10 w-full md:w-1/3 bg-[#111] border border-white/10 rounded-2xl p-6 shadow-lg group hover:border-[#ff5f1f]/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <ZapIcon />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2">3. Auto-Scaling</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Winning assets receive exponential budget increases. Losers are instantly killed.</p>
            </div>

          </div>
        </motion.div>

        {/* =========================================
            FEATURES GRID
            ========================================= */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32"
        >
          {/* Feature 1 */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Cross-Platform Sync</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Launch a single campaign that automatically formats and deploys across YouTube, TikTok, Instagram, and LinkedIn. Manage all platforms from one unified dashboard.
            </p>
            <div className="flex gap-4">
              <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest">Meta</div>
              <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest">Google</div>
              <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest">TikTok</div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Budget Fluidity</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Traditional budgets are static. Our campaigns are fluid. If TikTok is generating a lower Cost Per Lead (CPL) than Meta on a Tuesday, the system automatically shifts budget to TikTok in real-time.
            </p>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden flex">
               <div className="h-full bg-[#ff2a00] w-[70%]" />
               <div className="h-full bg-gray-600 w-[30%]" />
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <span>Optimized Spend</span>
              <span>Reserve</span>
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
          className="w-full bg-[#0a0a0a] border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#ff2a00]/20 to-transparent opacity-50 pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 relative z-10">Stop managing ads manually.</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 relative z-10">
            Let the algorithm do the heavy lifting. Deploy a smart campaign today and watch your acquisition costs drop while volume scales.
          </p>
          <button className="relative z-10 px-10 py-5 bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,42,0,0.4)]">
            Deploy Campaign Builder
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}