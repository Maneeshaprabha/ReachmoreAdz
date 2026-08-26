"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data ---
const team = [
  {
    name: "Marcus Vance",
    role: "Head of Algorithmic Strategy",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "Chief Data Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Julian Hayes",
    role: "Director of Production",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Lead UI/UX Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  }
];

export default function StudioPage() {
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
      <div className="absolute top-[5%] right-0 w-[700px] h-[700px] bg-[#ff2a00] rounded-full blur-[200px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-[#ff5f1f] rounded-full blur-[200px] opacity-10 pointer-events-none -translate-x-1/2" />

      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            HEADER: Massive Brutalist Typography
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-20">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ff5f1f] mb-6 inline-block">
            Behind the Data
          </span>
          <h1 className="text-[14vw] md:text-[9rem] lg:text-[11rem] font-bold tracking-tighter uppercase leading-[0.85] text-white m-0 p-0">
            THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f]">
              STUDIO
            </span>
          </h1>
        </motion.div>

        {/* =========================================
            THE ENVIRONMENT (Image Grid)
            ========================================= */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32 h-auto md:h-[600px]">
          
          {/* Main Large Image */}
          <motion.div variants={itemVariants} className="md:col-span-8 relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2000&auto=format&fit=crop" 
              alt="Main Studio Space" 
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-2xl font-bold tracking-tight text-white uppercase">The Lab</h3>
              <p className="text-sm font-medium text-gray-300">London Headquarters</p>
            </div>
          </motion.div>

          {/* Side Images Stack */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
            <div className="relative h-1/2 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-30 group-hover:opacity-10 transition-opacity duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Data Center" 
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="relative h-1/2 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color z-10 opacity-30 group-hover:opacity-10 transition-opacity duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                alt="Production Gear" 
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

        </motion.div>

        {/* =========================================
            MANIFESTO / PHILOSOPHY
            ========================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white leading-none">
              Culture & <br/> <span className="text-gray-500">Manifesto</span>
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-400 font-light leading-relaxed">
            <div>
              <p className="mb-6">
                We don't believe in guessing. In a digital world oversaturated with subjective art, we anchor our creative process purely in data and mathematical predictability. 
              </p>
              <p>
                The studio is designed as a hybrid environment—half creative production house, half data science laboratory. We strip away the ego of traditional agency models and replace it with ruthless A/B testing and algorithmic reverse-engineering.
              </p>
            </div>
            <div>
              <p className="mb-6">
                Our team operates with a singular focus: compounding returns for our partners. Every designer, strategist, and producer is fluent in the language of retention graphs, click-through rates, and predictive modeling.
              </p>
              <p>
                This isn't just an agency. It's a high-performance engine built for brands that refuse to settle for baseline metrics.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            THE LEADERSHIP TEAM
            ========================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="w-full"
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">The Architects</h2>
            <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-[#ff5f1f]">
              Core Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container with Orange Hover Tint */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-white/5 transition-colors duration-300">
                  <div className="absolute inset-0 bg-[#ff2a00] mix-blend-color opacity-0 group-hover:opacity-40 z-10 transition-opacity duration-500" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient for text readability if we wanted text over image, but we put it below */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </div>
                
                {/* Member Info */}
                <h4 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-[#ff5f1f] transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}