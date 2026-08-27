"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- SVGs ---
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ff5f1f]">
    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
  </svg>
);

export default function ProductPage() {
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
      <div className="absolute top-[10%] left-1/2 w-[800px] h-[500px] bg-[#ff2a00] rounded-full blur-[250px] opacity-10 pointer-events-none -translate-x-1/2" />
      
      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            HEADER: Massive Brutalist Typography
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-20 text-center flex flex-col items-center">
          <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#ff5f1f] mb-6">
            The Platform
          </span>
          <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85] text-white mb-6 m-0 p-0">
            SYSTEM <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
              OVERVIEW
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl leading-relaxed mt-6">
            A proprietary ecosystem designed for absolute digital dominance. We combine real-time analytics, automated campaign deployment, and predictive algorithmic targeting into one centralized engine.
          </p>
        </motion.div>

        {/* =========================================
            BENTO GRID OVERVIEW (Features)
            ========================================= */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
          
          {/* Large Main Feature */}
          <motion.div variants={itemVariants} className="lg:col-span-2 relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden group min-h-[400px] flex flex-col justify-end p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff2a00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2a00] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            
            <div className="relative z-10 w-full md:w-2/3">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Command Center</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Monitor all cross-channel campaigns in real-time. Our central dashboard aggregates data from every platform, giving you a top-down view of ROAS, CPL, and algorithmic traction.
              </p>
            </div>
          </motion.div>

          {/* Square Feature 1 */}
          <motion.div variants={itemVariants} className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden group min-h-[400px] flex flex-col justify-end p-8">
            <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold tracking-tight mb-3">Predictive AI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Stop guessing. Our models analyze historical data to predict which creative variants will drive the lowest acquisition costs before you spend a dime.
              </p>
            </div>
          </motion.div>

          {/* Square Feature 2 */}
          <motion.div variants={itemVariants} className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden group min-h-[400px] flex flex-col justify-end p-8">
            <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold tracking-tight mb-3">Automated Scaling</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                When a campaign hits the target ROAS threshold, the system automatically allocates more budget, scaling winners instantly without manual intervention.
              </p>
            </div>
          </motion.div>

          {/* Large Bottom Feature */}
          <motion.div variants={itemVariants} className="lg:col-span-2 relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden group min-h-[400px] flex flex-col justify-end p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff2a00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full md:w-2/3">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Creative Library</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Store, tag, and deploy thousands of assets. The engine auto-generates combinations of hooks, bodies, and CTAs to find the perfect converting advertisement.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* =========================================
            PRICING / ACCESS TIERS
            ========================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="w-full pt-16 border-t border-white/10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Platform Access</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Tier 1 */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Growth Blueprint</h3>
              <p className="text-gray-400 text-sm mb-8">For emerging brands ready to scale their initial data sets.</p>
              
              <div className="text-4xl font-black tracking-tighter mb-8">$2,500 <span className="text-lg text-gray-500 font-medium">/mo</span></div>
              
              <div className="flex flex-col gap-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckIcon /> Full Analytics Dashboard</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckIcon /> Core Campaign Automation</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckIcon /> Up to $50k Ad Spend Managed</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckIcon /> Weekly Strategy Reports</div>
              </div>

              <button className="w-full py-4 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Select Plan
              </button>
            </motion.div>

            {/* Tier 2 (Highlighted) */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-[#ff5f1f]/50 rounded-3xl p-8 lg:p-10 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(255,42,0,0.1)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]" />
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-[#ff5f1f]">Ecosystem Dominance</h3>
              <p className="text-gray-400 text-sm mb-8">Full-stack digital architecture for enterprise-level scaling.</p>
              
              <div className="text-4xl font-black tracking-tighter mb-8">$8,000 <span className="text-lg text-gray-500 font-medium">/mo</span></div>
              
              <div className="flex flex-col gap-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckIcon /> Everything in Growth</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckIcon /> Predictive AI Engine Access</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckIcon /> Unlimited Ad Spend Managed</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckIcon /> Dedicated Growth Architect</div>
              </div>

              <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,42,0,0.4)]">
                Get Started
              </button>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}