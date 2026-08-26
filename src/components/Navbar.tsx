"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  
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

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0402]/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-[#ff2a00] grid grid-cols-2 gap-0.5 p-1 rounded-sm rotate-45 transition-transform group-hover:rotate-90 duration-500">
            <div className="bg-[#0a0402]" />
            <div className="bg-[#0a0402]" />
            <div className="bg-[#0a0402]" />
            <div className="bg-[#0a0402]" />
          </div>
          <span className="text-2xl font-semibold tracking-tight ml-2 text-white">ReachMoreAdz</span>
        </Link>

        {/* Links */}
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

            

            {/* Dropdown Menu */}
            {isFeaturesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 bg-[#0a0402]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link 
                  href="/features/analytics" 
                  onClick={() => setIsFeaturesOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors"
                >
                  Advanced Analytics
                </Link>
                <Link 
                  href="/features/campaigns" 
                  onClick={() => setIsFeaturesOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors"
                >
                  Smart Campaigns
                </Link>
                <Link 
                  href="/features/targeting" 
                  onClick={() => setIsFeaturesOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors"
                >
                  Audience Targeting
                </Link>
              </div>
            )}
          </div>
         
          <Link href="/how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/product" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Product</Link>
          <Link href="/blogs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blogs</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* CTA */}
        <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Get Started
        </button>
        
      </div>
    </nav>
  );
}