"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import GetStartedButton from './GetStartedButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
  
  // Ref to detect clicks outside the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Helper to close mobile menu on link click
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileFeaturesOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#0a0402]/30 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group z-50" onClick={closeMobileMenu}>
            <div className="w-7 h-7 md:w-8 md:h-8 bg-[#ff2a00] grid grid-cols-2 gap-0.5 p-1 rounded-sm rotate-45 transition-transform group-hover:rotate-90 duration-500">
              <div className="bg-[#0a0402]" />
              <div className="bg-[#0a0402]" />
              <div className="bg-[#0a0402]" />
              <div className="bg-[#0a0402]" />
            </div>
            <span className="text-xl md:text-2xl font-semibold tracking-tight ml-2 text-white">ReachMoreAdz</span>
          </Link>

          {/* Desktop Links (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
            
            {/* Features Dropdown Wrapper */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isFeaturesOpen ? 'text-[#ff2a00]' : 'text-white hover:text-[#ff2a00]'
                }`}
              >
                Features 
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Desktop Dropdown Menu */}
              <AnimatePresence>
                {isFeaturesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 bg-[#0a0402]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-1"
                  >
                    <Link href="/features/analytics" onClick={() => setIsFeaturesOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors">
                      Advanced Analytics
                    </Link>
                    <Link href="/features/campaigns" onClick={() => setIsFeaturesOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors">
                      Smart Campaigns
                    </Link>
                    <Link href="/features/targeting" onClick={() => setIsFeaturesOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors">
                      Audience Targeting
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How It Works</Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/product" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Product</Link>
            <Link href="/blogs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blogs</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Show GetStartedButton only on desktop top-bar */}
            <div className="hidden lg:block">
              <GetStartedButton variant="secondary" />
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="lg:hidden text-white p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================
          MOBILE MENU OVERLAY
          ========================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0402] pt-28 pb-8 px-6 flex flex-col h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              
              <Link href="/" onClick={closeMobileMenu} className="text-2xl font-bold text-white py-4 border-b border-white/10">Home</Link>
              
              {/* Mobile Features Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileFeaturesOpen(!isMobileFeaturesOpen)}
                  className="flex items-center justify-between text-2xl font-bold text-white py-4 border-b border-white/10"
                >
                  Features
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileFeaturesOpen ? 'rotate-180 text-[#ff2a00]' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileFeaturesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-4 overflow-hidden mt-4 pl-4 border-l-2 border-[#ff2a00]/30 mb-4"
                    >
                      <Link href="/features/analytics" onClick={closeMobileMenu} className="text-lg font-medium text-gray-400 hover:text-white">Advanced Analytics</Link>
                      <Link href="/features/campaigns" onClick={closeMobileMenu} className="text-lg font-medium text-gray-400 hover:text-white">Smart Campaigns</Link>
                      <Link href="/features/targeting" onClick={closeMobileMenu} className="text-lg font-medium text-gray-400 hover:text-white">Audience Targeting</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/how-it-works" onClick={closeMobileMenu} className="text-2xl font-bold text-white py-4 border-b border-white/10">How It Works</Link>
              <Link href="/about" onClick={closeMobileMenu} className="text-2xl font-bold text-white py-4 border-b border-white/10">About</Link>
              <Link href="/product" onClick={closeMobileMenu} className="text-2xl font-bold text-white py-4 border-b border-white/10">Product</Link>
              <Link href="/blogs" onClick={closeMobileMenu} className="text-2xl font-bold text-white py-4 border-b border-white/10">Blogs</Link>
              <Link href="/contact" onClick={closeMobileMenu} className="text-2xl font-bold text-white py-4 border-b border-white/10">Contact</Link>
            </div>

            {/* Mobile Bottom CTA */}
            <div className="mt-auto pt-12 flex flex-col gap-6 w-full pb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 text-center">Ready to engineer your growth?</p>
              <div onClick={closeMobileMenu} className="w-full flex justify-center">
                {/* We use your secondary style but make it wider for mobile */}
                <GetStartedButton variant="secondary" className="w-full py-4 text-lg" />
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}