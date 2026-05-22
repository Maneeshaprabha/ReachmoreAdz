"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 1,
    question: "What is the core Netxium Design methodology?",
    answer: "We prioritize clean architecture and fluid user experiences. By bridging modern UI components with robust front-end frameworks, we ensure every digital touchpoint is both aesthetically striking and highly performant."
  },
  {
    id: 2,
    question: "How do you handle transition logic and animations?",
    answer: "Animations should serve a purpose, not just decorate a page. We utilize physics-based transition logic (like spring animations) to ensure interactions feel natural, responsive, and deeply integrated into the user journey."
  },
  {
    id: 3,
    question: "What tech stack powers your implementations?",
    answer: "Our ecosystem is built on modern foundations. We heavily leverage Next.js for server-side rendering and routing, React for component architecture, Tailwind CSS for utility-first styling, and Framer Motion for complex visual states."
  },
  {
    id: 4,
    question: "How do we begin a new project scope?",
    answer: "Every collaboration begins with a structural audit. We map out the required file structures, component hierarchies, and interactive states before writing a single line of code, ensuring the final product scales effortlessly."
  }
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    },
  };

  return (
    <section className="relative w-full bg-[#050505] py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        className="max-w-3xl w-full mx-auto relative z-20"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* NEW HEADER SECTION */}
        <motion.div variants={itemVariants} className="text-center mb-16 z-20 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tighter uppercase leading-[1.1] text-gray-200">
            System Queries <br />
            <span className="text-gray-400">—Everything you need to know.</span>
          </h2>
        </motion.div>

        {/* Animated FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isActive = activeId === faq.id;

            return (
              <motion.div 
                key={faq.id} 
                variants={itemVariants}
                className={`
                  overflow-hidden rounded-xl transition-all duration-500
                  ${isActive ? 'bg-white/[0.03] border border-white/10' : 'bg-transparent border border-white/[0.02] hover:bg-white/[0.02]'}
                `}
              >
                <button
                  onClick={() => setActiveId(isActive ? null : faq.id)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none group"
                >
                  <span className={`text-base md:text-lg tracking-wide transition-colors duration-300 ${isActive ? 'text-white font-medium' : 'text-gray-400 font-normal group-hover:text-gray-200'}`}>
                    {faq.question}
                  </span>
                  
                  <div className="relative flex items-center justify-center w-8 h-8 ml-4">
                    <motion.div 
                      className="flex gap-1"
                      animate={isActive ? "active" : "inactive"}
                      variants={{
                        active: { rotate: 90, gap: "6px" },
                        inactive: { rotate: 0, gap: "4px" }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.div 
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-white' : 'bg-gray-600 group-hover:bg-gray-400'}`}
                        variants={{ active: { scale: 1.2, opacity: 1 }, inactive: { scale: 1, opacity: 0.7 } }}
                      />
                      <motion.div 
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-white' : 'bg-gray-600 group-hover:bg-gray-400'}`}
                        variants={{ active: { scale: 0.8, opacity: 0.5 }, inactive: { scale: 1, opacity: 0.7 } }}
                      />
                      <motion.div 
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-white' : 'bg-gray-600 group-hover:bg-gray-400'}`}
                        variants={{ active: { scale: 1.2, opacity: 1 }, inactive: { scale: 1, opacity: 0.7 } }}
                      />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}