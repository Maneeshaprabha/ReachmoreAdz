"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans overflow-hidden">
      
      {/* Abstract Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#ff2a00] rounded-full blur-[250px] opacity-5 pointer-events-none -translate-x-1/3 -translate-y-1/4" />

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
          <h1 className="text-[12vw] md:text-[8rem] lg:text-[9.5rem] font-bold tracking-tighter uppercase leading-[0.85] text-white m-0 p-0">
            PRIVACY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              POLICY
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
          <div className="text-gray-300 font-light leading-relaxed">
            
            <p className="text-xl md:text-2xl text-white font-medium mb-12 leading-snug">
              At ReachMoreAdz, data is our foundation. We are committed to protecting your privacy and ensuring that your personal and proprietary data is handled with the highest level of security and transparency.
            </p>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">1. Information We Collect</h2>
            <p className="mb-4">
              To engineer and optimize your digital presence, we collect information across several operational layers:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 ml-4 text-gray-400">
              <li><strong className="text-white">Account Information:</strong> Name, email address, company details, and billing information provided during onboarding.</li>
              <li><strong className="text-white">Analytics & Performance Data:</strong> API integrations allow us to securely analyze metrics from your connected social and advertising channels (e.g., CTR, AVD, and conversion tracking).</li>
              <li><strong className="text-white">System Usage Data:</strong> Interactions with our platform, IP addresses, browser types, and session duration to improve our internal architecture.</li>
            </ul>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">2. How We Use Your Data</h2>
            <p className="mb-4">
              We do not sell your personal data. We utilize the information we collect exclusively to power our ecosystem and deliver results:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 ml-4 text-gray-400">
              <li>To deploy predictive AI models and optimize your ad spend.</li>
              <li>To construct and refine targeted algorithmic strategies for your brand.</li>
              <li>To process secure transactions and manage your subscription tiers.</li>
              <li>To communicate performance reports, system updates, and strategic insights.</li>
            </ul>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">3. Data Sharing & Third Parties</h2>
            <p className="mb-6">
              We only share data with vetted third-party sub-processors (such as secure cloud hosting providers, payment gateways, and verified analytics partners) necessary to run our infrastructure. All third parties are strictly bound by confidentiality agreements and robust data protection standards.
            </p>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">4. Data Security</h2>
            <p className="mb-6">
              We implement enterprise-grade security measures, including end-to-end encryption for API keys and secure socket layer (SSL) technology, to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no digital transmission is mathematically immune to interception, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mt-16 mb-6">5. Your Privacy Rights</h2>
            <p className="mb-6">
              Depending on your jurisdiction (including GDPR and CCPA regulations), you have the right to request access to, correction of, or deletion of your personal data stored within our systems. You may also withdraw API access to your social channels at any time via your command center dashboard.
            </p>

            {/* Bottom Contact Box */}
            <div className="mt-20 p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Data Protection Officer</h3>
              <p className="text-sm text-gray-400 mb-6">
                If you wish to exercise your data rights or have questions about how we process algorithmic data, please contact our Data Protection Officer directly.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-[#ff5f1f] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                Contact Privacy Team &rarr;
              </Link>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}