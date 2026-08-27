"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// --- SVG Icons ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// --- Dummy Blog Data ---
const blogPosts = [
  {
    id: 1,
    slug: "algorithmic-dominance", // This links to /blog/algorithmic-dominance
    title: "The Architecture of Algorithmic Dominance",
    excerpt: "Stop guessing what the algorithm wants. Discover the exact structural blueprints we use to scale brands from baseline to multi-million view months.",
    category: "Methodology",
    date: "Oct 14, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    slug: "retention-graphs",
    title: "Decoding Retention: Why the First 3 Seconds Don't Matter Anymore",
    excerpt: "Everyone optimizes for the hook, but scaling happens in the mid-roll. Here is how we map and manipulate viewer retention.",
    category: "Analytics",
    date: "Sep 28, 2026",
    readTime: "4 Min Read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: 3,
    slug: "competitor-hijacking",
    title: "Competitor Hijacking: Ethical Growth Hacking",
    excerpt: "How to legally and ethically siphon high-intent traffic from your biggest rivals using advanced negative filtering and AI lookalike models.",
    category: "Strategy",
    date: "Sep 12, 2026",
    readTime: "7 Min Read",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: 4,
    slug: "scaling-beyond-roas",
    title: "Scaling Beyond ROAS: The New Metrics for 2027",
    excerpt: "Return on Ad Spend is a flawed metric for brand builders. We break down the proprietary equations we use to measure true algorithmic momentum.",
    category: "Data Science",
    date: "Aug 30, 2026",
    readTime: "6 Min Read",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    featured: false
  }
];

export default function BlogListingPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="relative min-h-screen bg-[#0a0402] text-white overflow-hidden pt-28 md:pt-36 pb-20 md:pb-32 font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ff2a00] rounded-full blur-[150px] md:blur-[250px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-[#ff5f1f] rounded-full blur-[200px] opacity-5 pointer-events-none -translate-x-1/2" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <motion.div 
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-20">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#ff5f1f] mb-6 inline-block">
            Intelligence
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 border-b border-white/10 pb-8 md:pb-12">
            <h1 className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.8] text-white m-0 p-0">
              THE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
                JOURNAL
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-sm md:pb-4 leading-relaxed">
              Data-driven insights, algorithm teardowns, and growth methodologies directly from the ReachMoreAdz studio.
            </p>
          </div>
        </motion.div>

        {/* =========================================
            FEATURED POST (Hero Card)
            ========================================= */}
        {featuredPost && (
          <motion.div variants={itemVariants} className="mb-8 md:mb-16">
            {/* The Link routes them to the dynamic single blog post page */}
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#0d0503] border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-[#ff5f1f]/50 transition-colors duration-500">
                
                {/* Image Side */}
                <div className="relative w-full aspect-square md:aspect-video lg:aspect-auto h-full overflow-hidden">
                  <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff5f1f] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex flex-wrap items-center gap-3 mb-6 relative z-10">
                    <span className="text-[#ff5f1f] text-[10px] md:text-xs font-bold uppercase tracking-widest bg-[#ff5f1f]/10 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{featuredPost.date}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 relative z-10 group-hover:text-[#ff5f1f] transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 relative z-10">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center text-xs md:text-sm font-bold uppercase tracking-widest text-white relative z-10">
                    READ ARTICLE <ArrowRightIcon />
                  </div>
                </div>

              </div>
            </Link>
          </motion.div>
        )}

        {/* =========================================
            REGULAR POSTS GRID
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-[#0d0503] border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 h-full flex flex-col hover:border-[#ff2a00]/40 transition-colors duration-500 relative overflow-hidden">
                  
                  {/* Card Image */}
                  <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#ff5f1f] text-[10px] font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-700" />
                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug mb-3 group-hover:text-[#ff5f1f] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* READ ARTICLE Button */}
                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#ff2a00] transition-colors flex items-center">
                      READ ARTICLE <ArrowRightIcon />
                    </span>
                    <span className="text-gray-600 text-[10px] font-medium">{post.date}</span>
                  </div>
                  
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}