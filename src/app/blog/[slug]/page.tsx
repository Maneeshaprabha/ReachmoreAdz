"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- Icons ---
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export default function SingleBlogPost() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
  };

  return (
    <article className="min-h-screen bg-[#050505] text-white pt-32 pb-32 font-sans overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-[#ff2a00] rounded-full blur-[250px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <motion.div 
        className="max-w-[1200px] mx-auto px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            BACK BUTTON & METADATA
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-12">
          <Link href="/blogs" className="group flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-12 w-max">
            <ArrowLeftIcon /> Back to Journal
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#ff2a00]/10 border border-[#ff2a00]/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ff5f1f]">
              Methodology
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              October 14, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              5 Min Read
            </span>
          </div>
        </motion.div>

        {/* =========================================
            MASSIVE ARTICLE HEADER
            ========================================= */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter uppercase leading-[1.05] text-white mb-8 max-w-5xl"
        >
          The Architecture of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
            Algorithmic Dominance
          </span>
        </motion.h1>

        {/* Author Block */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 grayscale">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">David Reynolds</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">Lead Strategist</p>
          </div>
        </motion.div>

        {/* =========================================
            CINEMATIC FEATURED IMAGE
            ========================================= */}
        <motion.div 
          variants={itemVariants}
          className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden relative mb-20 border border-white/10 shadow-2xl"
        >
          {/* Orange Overlay Effect */}
          <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-40" />
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Featured Article" 
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* =========================================
            ARTICLE BODY CONTENT
            ========================================= */}
        {/* We use a narrower max-width for the text to ensure perfect reading ergonomics */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-8 font-light">
            
            <p className="text-2xl md:text-3xl font-medium text-white leading-snug mb-10">
              Stop guessing what the algorithm wants. Discover the exact structural blueprints we use to scale brands from baseline to multi-million view months using data-driven design.
            </p>

            <p>
              In the modern digital landscape, virality is rarely an accident. Behind every massive spike in engagement, there is an underlying architecture—a set of engineered parameters designed specifically to feed machine learning algorithms exactly what they crave.
            </p>

            <p>
              Most brands fail because they treat content creation as an art form rather than a data-driven science. They focus entirely on the subjective quality of the production, ignoring the objective metrics that dictate distribution: Click-Through Rate (CTR) and Average View Duration (AVD).
            </p>

            <h2 className="text-3xl font-bold uppercase tracking-tight text-white mt-16 mb-6">
              The Two Pillars of Scale
            </h2>

            <p>
              To dominate any niche, you must master the intersection of packaging and retention. Packaging (your thumbnail and hook) is responsible for the click. Retention is responsible for the session time. 
            </p>

            {/* Brutalist Blockquote */}
            <blockquote className="border-l-4 border-[#ff5f1f] pl-6 py-2 my-12 bg-white/[0.02] rounded-r-lg">
              <p className="text-2xl font-bold text-white italic tracking-tight m-0">
                "The algorithm doesn't care about your brand guidelines. It cares about user satisfaction. Optimize for the user, and the algorithm will reward you."
              </p>
            </blockquote>

            <p>
              Once you establish a baseline of data, the scaling process becomes mathematical. You deploy A/B tests on your packaging, ruthlessly cut underperforming assets, and double down on the variants that exceed your target metrics. This is not marketing; this is systems engineering.
            </p>

            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mt-12 mb-4">
              Executing the Blueprint
            </h3>

            <ul className="list-disc list-inside space-y-4 text-gray-300 ml-4 mb-8">
              <li><strong className="text-white">Audit:</strong> Analyze historical data to find audience drop-off points.</li>
              <li><strong className="text-white">Formulate:</strong> Create a highly targeted brief based on search intent.</li>
              <li><strong className="text-white">Test:</strong> Launch 3-5 variations of packaging for every piece of core content.</li>
            </ul>

            <p>
              Ready to stop guessing and start scaling? Our methodology takes the emotion out of growth, replacing it with predictable, compounding data models.
            </p>

          </div>

          {/* =========================================
              SHARE & CTA BOTTOM BAR
              ========================================= */}
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Share Article</span>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">X</button>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">in</button>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,42,0,0.3)]">
              Apply This Strategy to Your Brand
            </button>

          </div>
        </motion.div>

      </motion.div>
    </article>
  );
}