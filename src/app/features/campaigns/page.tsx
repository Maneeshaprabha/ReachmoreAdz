"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

export default function SmartCampaignsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 md:pt-36 pb-16 md:pb-32 font-sans overflow-hidden">
      
      {/* Subtle, elegant ambient light (Not a techy glow, just a soft premium light) */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#ff2a00] rounded-full blur-[150px] md:blur-[250px] opacity-10 pointer-events-none" />

      <motion.div 
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            HERO SECTION (Massive & Minimal)
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-20 md:mb-32">
          <Link href="/" className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-12">
            &larr; Back to Features
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
            <h1 className="text-[16vw] md:text-[9rem] lg:text-[11rem] font-bold tracking-tighter uppercase leading-[0.8] text-white m-0 p-0">
              SMART <br/>
              <span className="text-gray-600">
                CAMPAIGNS
              </span>
            </h1>
            
            <p className="text-gray-400 text-sm md:text-lg lg:text-xl font-medium max-w-md leading-relaxed pb-2">
              Automated, self-optimizing digital infrastructure. Launch campaigns that dynamically shift budgets to the highest-performing assets.
            </p>
          </div>
        </motion.div>

        {/* =========================================
            THE INFRASTRUCTURE (Clean 3-Step Grid)
            ========================================= */}
        <motion.div variants={itemVariants} className="w-full mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-8 md:mb-12">
            The Infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* Step 1 Box */}
            <div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 transition-colors duration-500 flex flex-col justify-between min-h-[300px] md:min-h-[350px]">
              <span className="text-5xl md:text-6xl font-light text-gray-700 tracking-tighter mb-8 block">
                01
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">Audience Sync</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Real-time segmentation pulls high-intent profiles instantly, setting a pure baseline before launch.
                </p>
              </div>
            </div>

            {/* Step 2 Box (Highlighted subtly) */}
            <div className="bg-[#120805] hover:bg-[#1a0a06] border border-[#ff5f1f]/20 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 transition-colors duration-500 flex flex-col justify-between min-h-[300px] md:min-h-[350px] shadow-[0_20px_40px_rgba(255,95,31,0.05)]">
              <span className="text-5xl md:text-6xl font-light text-[#ff5f1f] tracking-tighter mb-8 block">
                02
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">Dynamic Creative</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A/B testing on autopilot. Over 50 variations of copy and visuals deploy simultaneously.
                </p>
              </div>
            </div>

            {/* Step 3 Box */}
            <div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 transition-colors duration-500 flex flex-col justify-between min-h-[300px] md:min-h-[350px]">
              <span className="text-5xl md:text-6xl font-light text-gray-700 tracking-tighter mb-8 block">
                03
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">Auto-Scaling</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Winning ads get exponential budget. Underperforming assets are instantly cut. Zero waste.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* =========================================
            BENTO GRID (Premium Modern Boxes)
            ========================================= */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-32"
        >
          {/* Bento Box 1: Cross-Platform */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between h-full min-h-[350px] md:min-h-[400px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Cross-Platform Sync
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                Launch a single campaign that automatically formats and deploys across YouTube, TikTok, Instagram, and LinkedIn seamlessly.
              </p>
            </div>
            
            {/* Elegant Pill Tags */}
            <div className="flex flex-wrap gap-3 mt-12">
              <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white">Meta</span>
              <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white">Google</span>
              <span className="px-5 py-2.5 bg-black border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white">TikTok</span>
            </div>
          </motion.div>

          {/* Bento Box 2: Budget Fluidity */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between h-full min-h-[350px] md:min-h-[400px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Budget Fluidity
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                Budgets shouldn't be static. If TikTok generates a lower CPL than Meta today, the system automatically routes the capital there in real-time.
              </p>
            </div>
            
            {/* Minimalist Data Representation */}
            <div className="mt-12 bg-black border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3">
                <span className="text-gray-500">Live Allocation</span>
                <span className="text-[#ff5f1f]">Dynamic</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden flex">
                 <div className="h-full bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] w-[70%]" />
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* =========================================
            FINAL CTA (Clean & Striking)
            ========================================= */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center text-center py-20 border-t border-white/5"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white">
            Ready to <span className="text-gray-500">scale?</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Stop managing ads manually. Deploy a smart campaign today and watch your acquisition costs drop while volume scales.
          </p>
          <button className="px-10 py-5 bg-white text-black rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Start Building
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}