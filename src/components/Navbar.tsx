"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // This hook detects if the user has scrolled down the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <span className="text-2xl font-semibold tracking-tight ml-2 text-white">Fluxora</span>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md">
          <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#ff3300] transition-colors">
            Features <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="/how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/product" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Product</Link>
          <Link href="/blogs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blogs</Link>
        </div>

        {/* CTA */}
        <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Get Started
        </button>
        
      </div>
    </nav>
  );
}