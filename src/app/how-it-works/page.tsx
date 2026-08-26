"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Process Data ---
const steps = [
  {
    id: "01",
    title: "Discovery & Audit",
    description: "We start by deep-diving into your current digital footprint. We analyze your past campaigns, audience demographics, and competitor landscape to identify untapped algorithmic potential and wasted ad spend.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    metric: "Data-Driven",
  },
  {
    id: "02",
    title: "Strategic Blueprint",
    description: "No guesswork. We engineer a decentralized, multi-channel architecture tailored to your goals. This blueprint dictates the creative direction, targeting parameters, and budget allocation required to dominate your niche.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    metric: "Precision",
  },
  {
    id: "03",
    title: "Creative Deployment",
    description: "Our production team executes the strategy, launching high-retention content and A/B tested ad creatives. We deploy across the selected networks, ensuring every touchpoint is optimized for maximum conversion.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    metric: "Execution",
  },
  {
    id: "04",
    title: "Optimization & Scale",
    description: "Once baseline data is established, the real work begins. We ruthlessly cut underperforming assets and aggressively scale the winners, compounding your ROAS and driving exponential revenue growth.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    metric: "Exponential",
  }
];

export default function HowItWorksPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[10%] left-0 w-[600px] h-[600px] bg-[#ff2a00] rounded-full blur-[200px] opacity-10 pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-[20%] right-0 w-[800px] h-[800px] bg-[#ff5f1f] rounded-full blur-[250px] opacity-5 pointer-events-none translate-x-1/3" />

      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            HEADER: Massive Brutalist Typography
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <h1 className="text-[14vw] md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter uppercase leading-[0.8] text-white m-0 p-0">
            THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
              PROCESS
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-sm md:pb-4 leading-relaxed">
            A transparent, relentless methodology designed to turn raw data into predictable, scalable revenue.
          </p>
        </motion.div>

        {/* =========================================
            STAGGERED TIMELINE SECTION
            ========================================= */}
        <div className="relative w-full pb-20">
          
          {/* Central Connecting Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#ff2a00] via-white/10 to-transparent" />

          <div className="flex flex-col gap-24 lg:gap-32 mt-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={step.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  
                  {/* Timeline Dot (Visible on Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#050505] border-2 border-[#ff2a00] rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(255,42,0,0.4)]">
                    <div className="w-3 h-3 bg-[#ff5f1f] rounded-full" />
                  </div>

                  {/* Text Content */}
                  <div className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:pr-12 lg:text-right lg:items-end' : 'lg:pl-12 lg:text-left lg:items-start'}`}>
                    <span className="text-[#ff5f1f] text-6xl md:text-8xl font-black tracking-tighter opacity-20 mb-[-20px] select-none">
                      {step.id}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 uppercase">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-8">
                      {step.description}
                    </p>
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 w-max">
                      {step.metric}
                    </div>
                  </div>

                  {/* Image Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden group border border-white/5 hover:border-[#ff2a00]/40 transition-colors duration-500">
                      {/* Orange Overlay */}
                      <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            FINAL CTA SECTION
            ========================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="w-full flex flex-col items-center justify-center text-center mt-32 border-t border-white/10 pt-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
            Ready to execute <br/> <span className="text-[#ff5f1f]">the blueprint?</span>
          </h2>
          <button className="px-10 py-5 bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,42,0,0.3)]">
            Start Your Campaign
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}