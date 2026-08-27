"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- SVGs ---
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff5f1f]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff5f1f]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75H3m18 0h-1.5m-9 4.5V21m-6-12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM14.25 9a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM5.25 18a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM14.25 18a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z" />
  </svg>
);

export default function AdvancedAnalysisPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
  };

  // Mock data for the animated chart
  const chartBars = [40, 65, 45, 80, 55, 90, 70, 100, 85, 95, 60, 75];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#ff2a00] rounded-full blur-[250px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[500px] bg-[#ff5f1f] rounded-full blur-[250px] opacity-5 pointer-events-none -translate-x-1/2" />

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
              DEEP <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
                ANALYSIS
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-sm md:pb-4 leading-relaxed">
              We strip away vanity metrics. Our proprietary auditing engine reverse-engineers algorithmic behavior to expose the exact data points driving conversion and retention.
            </p>
          </div>
        </motion.div>

        {/* =========================================
            SIMULATED DASHBOARD / CHART UI
            ========================================= */}
        <motion.div variants={itemVariants} className="w-full mb-32">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
            {/* Ambient internal glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff2a00]/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">Predictive ROAS Modeling</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Real-time Data Aggregation</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f1f] animate-pulse" />
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Live Sync</span>
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white">
                  LAST 30 DAYS
                </div>
              </div>
            </div>

            {/* CSS Animated Bar Chart Simulation */}
            <div className="h-64 md:h-80 w-full flex items-end justify-between gap-2 md:gap-4 relative z-10 border-b border-white/10 pb-4">
              {/* Y-Axis Guidelines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[100, 75, 50, 25, 0].map((line, i) => (
                  <div key={i} className="w-full h-px bg-white/5 flex items-center justify-start">
                    <span className="text-[10px] text-gray-600 font-bold -translate-y-3">{line}k</span>
                  </div>
                ))}
              </div>

              {/* Animated Bars */}
              {chartBars.map((height, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, type: "spring" }}
                  className="w-full bg-gradient-to-t from-[#ff2a00] to-[#ff5f1f] rounded-t-sm relative group cursor-pointer hover:brightness-125 transition-all"
                >
                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    ${(height * 1.2).toFixed(1)}k
                  </div>
                </motion.div>
              ))}
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
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Core Capabilities</h2>
          </div>

          {/* Capability 1 */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <TargetIcon />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 mt-8">Competitor Auditing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We scrape and analyze your top competitors’ digital footprints. We identify their highest-performing assets, dissect their hook structures, and map the exact gaps where your brand can steal market share.
            </p>
          </motion.div>

          {/* Capability 2 */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <NetworkIcon />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 mt-8">Retention Mapping</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stop wondering why viewers drop off. Our models generate precise retention graphs, identifying the exact micro-seconds where attention is lost, allowing us to engineer highly retentive content architectures.
            </p>
          </motion.div>

          {/* Capability 3 */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl group hover:border-[#ff2a00]/40 transition-colors duration-500 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold tracking-tight mb-4 mt-8 relative z-10">Algorithmic A/B Testing</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              We don't rely on gut feelings. Our system deploys simultaneous multivariate tests across thumbnails, headlines, and ad copy, using statistical significance to declare winners and scale them automatically.
            </p>
          </motion.div>

        </motion.div>

        {/* =========================================
            DATA METRICS BAR
            ========================================= */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-y border-white/10"
        >
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-black text-[#ff5f1f] tracking-tighter mb-2">2.4M+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Data Points Scanned / Hr</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10" />
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-black text-[#ff5f1f] tracking-tighter mb-2">98.4%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Predictive Accuracy</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10" />
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-black text-[#ff5f1f] tracking-tighter mb-2">&lt; 0.1s</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Optimization Latency</div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}