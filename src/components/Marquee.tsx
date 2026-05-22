import React from 'react';

// The list of words you want to display.
// You can replace these with actual image logos if you prefer.
const marqueeItems = [
  "Real Estate", 
  "E-Commerce", 
  "Education", 
  "Healthcare", 
  "Finance", 
  "Web3",
  "Technology"
];

export default function Marquee() {
  return (
    <section className="w-full bg-[#0a0402] border-y border-white/5 py-8 overflow-hidden relative flex items-center">
      
      {/* Optional: Add gradient fades on the left and right edges so the text fades in/out smoothly */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0402] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0402] to-transparent z-10 pointer-events-none" />

      {/* The Scrolling Container */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        
        {/* We map the array TWICE to create a seamless infinite loop */}
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            
            {/* Text */}
            <span className="text-xl md:text-2xl font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap px-8 transition-colors hover:text-white cursor-default">
              {item}
            </span>
            
            {/* Separator */}
            <span className="text-[#ff2a00] opacity-60 text-lg shadow-[0_0_10px_rgba(255,42,0,0.5)]">
              ✦
            </span>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}