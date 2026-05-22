"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Blog Data ---
const featuredPost = {
  category: "Methodology",
  date: "October 14, 2026",
  title: "The Architecture of Algorithmic Dominance",
  excerpt: "Stop guessing what the algorithm wants. Discover the exact structural blueprints we use to scale brands from baseline to multi-million view months using data-driven design.",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
};

const posts = [
  {
    id: 1,
    category: "Design Systems",
    date: "September 28, 2026",
    title: "Why Minimalist UI Converts Better in Web3",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Engineering",
    date: "September 15, 2026",
    title: "Mastering Framer Motion: Physics over Keyframes",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Strategy",
    date: "August 30, 2026",
    title: "The Death of the Traditional Funnel",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Case Study",
    date: "August 12, 2026",
    title: "Scaling 'Bright Culture' by 11.11x ROAS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  }
];

// --- Icons ---
const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

export default function BlogPage() {
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
      
      {/* Abstract Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff2a00] rounded-full blur-[200px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/4" />

      <motion.div 
        className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            HEADER: Massive Brutalist Typography
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h1 className="text-[14vw] md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter uppercase leading-[0.8] text-white m-0 p-0">
            THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
              JOURNAL
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-xs md:pb-4">
            Thoughts, strategies, and methodologies on engineering digital dominance and UI architecture.
          </p>
        </motion.div>

        {/* =========================================
            FEATURED POST (Matches the split-card vibe)
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-24 group cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-[2rem] overflow-hidden bg-black hover:border-[#ff2a00]/50 transition-colors duration-500">
            
            {/* Featured Image with Brand Tint */}
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-full overflow-hidden">
              {/* Red Overlay Effect */}
              <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Featured Content */}
            <div className="p-8 md:p-16 flex flex-col justify-center relative">
              {/* Ambient inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ff5f1f]">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500 text-xs font-medium tracking-wider uppercase">
                  {featuredPost.date}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] relative z-10">
                {featuredPost.title}
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 relative z-10 max-w-md">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center text-[#ff5f1f] text-sm font-bold uppercase tracking-widest relative z-10">
                READ ARTICLE <ArrowUpRightIcon />
              </div>
            </div>

          </div>
        </motion.div>

        {/* =========================================
            LATEST POSTS GRID
            ========================================= */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12">
            <h3 className="text-xl md:text-2xl font-light tracking-wide">Latest Insights</h3>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">({posts.length}) Articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <motion.div 
                key={post.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5 group-hover:border-[#ff2a00]/30 transition-colors duration-300">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent z-10 transition-colors duration-300" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Metadata */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#ff5f1f] text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold tracking-tight leading-snug group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================
            LOAD MORE CTA
            ========================================= */}
        <motion.div variants={itemVariants} className="w-full flex justify-center mt-20">
          <button className="px-10 py-4 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300">
            Load More Articles
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}