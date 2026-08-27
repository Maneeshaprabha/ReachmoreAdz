"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfUsePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans overflow-hidden">
      
      {/* Abstract Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff2a00] rounded-full blur-[250px] opacity-5 pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* =========================================
            MASSIVE HEADER
            ========================================= */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-24 border-b border-white/10 pb-12">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ff5f1f] mb-6 inline-block">
            Legal Information
          </span>
          <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85] text-white m-0 p-0">
            TERMS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              OF USE
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-medium mt-8 uppercase tracking-widest">
            Last Updated: August 26, 2026
          </p>
        </motion.div>

        {/* =========================================
            DOCUMENT CONTENT
            ========================================= */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg text-gray-300 font-light leading-relaxed">
            
            <p className="text-xl md:text-2xl text-white font-medium mb-12 leading-snug">
              These Terms of Use govern your access to and use of the ReachMoreAdz platform and digital ecosystems. By accessing our systems, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing, browsing, or using the ReachMoreAdz website and associated services (the "Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Platform.
            </p>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">2. Intellectual Property Rights</h2>
            <p className="mb-4">
              All content, features, and functionality available on the Platform—including but not limited to design, methodology, text, graphics, data models, and proprietary algorithms—are the exclusive property of ReachMoreAdz and are protected by international copyright, trademark, and intellectual property laws.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 ml-4 text-gray-400">
              <li>You may not reproduce, distribute, or modify our proprietary systems.</li>
              <li>Case study data and strategies remain our intellectual property unless explicitly licensed.</li>
              <li>Unauthorized use of our trademarks is strictly prohibited.</li>
            </ul>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">3. User Obligations</h2>
            <p className="mb-6">
              When utilizing our Platform or partnering with our agency, you agree to provide accurate and complete data. You are strictly prohibited from using our infrastructure to transmit malicious code, manipulate algorithmic data artificially, or conduct any activities that violate applicable local or international laws.
            </p>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">4. Limitation of Liability</h2>
            <p className="mb-6">
              While our methodologies are data-driven and historically proven, digital algorithms are subject to third-party changes. ReachMoreAdz shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or digital asset valuation, resulting from your use of our Platform.
            </p>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">5. Governing Law</h2>
            <p className="mb-6">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which ReachMoreAdz is headquartered, without regard to its conflict of law provisions. Any dispute arising from these terms will be resolved exclusively in the designated courts of that jurisdiction.
            </p>

            <div className="mt-20 p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Questions regarding these terms?</h3>
              <p className="text-sm text-gray-400 mb-6">
                If you have any questions about this document or require further clarification regarding our operational policies, please reach out to our legal department.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-[#ff5f1f] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                Contact Legal Team &rarr;
              </Link>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}