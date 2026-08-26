"use client";

import React from 'react';
import Link from 'next/link';

// --- SVG Arrow Icon ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function GetStartedButton({ 
  variant = 'primary', 
  // Default WhatsApp link (Replace with your actual number and message)
  href = "https://wa.me/1234567890?text=Hi%20ReachMoreAdz,%20I'm%20ready%20to%20scale%20my%20brand!", 
  className = "",
  children = "Get Started"
}: ButtonProps) {
  
  // Base classes that apply to all buttons
  const baseClasses = "group inline-flex items-center justify-center rounded-full transition-all duration-300";

  // Different style variants
  const variants = {
    primary: "px-10 py-4 bg-gradient-to-r from-[#ff2a00] to-[#ff5f1f] text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:scale-105 shadow-[0_0_30px_rgba(255,42,0,0.3)] hover:shadow-[0_0_40px_rgba(255,42,0,0.5)]",
    secondary: "px-6 py-2.5 bg-white text-black text-sm font-semibold hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    outline: "px-10 py-4 bg-white/5 border border-white/20 text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:border-[#ff2a00] hover:bg-[#ff2a00]/10 backdrop-blur-md"
  };

  return (
    <Link 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
      {/* Only show the arrow on Primary and Outline variants to keep the Navbar clean */}
      {variant !== 'secondary' && <ArrowRightIcon />}
    </Link>
  );
}