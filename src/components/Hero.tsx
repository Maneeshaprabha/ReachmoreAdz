import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import GetStartedButton from './GetStartedButton';

export default function Hero() {
  return (
    <div className="relative min-h-[100svh] bg-[#0a0402] text-white overflow-hidden font-sans flex flex-col justify-center">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 flex justify-evenly pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>

      {/* Massive Orange/Red Glows */}
      {/* Adjusted sizes and positions slightly for mobile screens */}
      <div className="absolute top-1/4 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff2a00] rounded-full blur-[100px] md:blur-[150px] opacity-40 pointer-events-none translate-x-1/4" />
      <div className="absolute bottom-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ff5a00] rounded-full blur-[120px] md:blur-[180px] opacity-30 pointer-events-none" />

      {/* --- MAIN HERO CONTENT --- */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-20 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* LEFT COLUMN: Typography & Main Stats */}
        <div className="lg:col-span-6 flex flex-col relative z-20 w-full">
          
         

          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[6.5rem] leading-[0.9] font-medium tracking-tight mb-6 md:mb-8">
            Technology <br />
            Crafted for All <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              Not Machines
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-md mb-8 md:mb-10 leading-relaxed">
            We create clear, intuitive, and accessible digital experiences shaped by real human behavior.
          </p>

          {/* CTA & Avatars Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12 md:mb-20">
            <div className="flex items-center gap-3 w-max">
              <GetStartedButton variant="primary" />
              {/* <div className="hidden sm:flex w-8 h-8 bg-white text-black rounded-full items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div> */}
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0a0402] bg-blue-900" />
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0a0402] bg-red-900" />
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0a0402] bg-cyan-500" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold">900+ Happy Clients</p>
                <p className="text-[10px] md:text-xs text-gray-400">Over 5 years</p>
              </div>
            </div>
          </div>

          {/* Stat Cards Row */}
          <div className="flex flex-wrap sm:flex-nowrap gap-4 relative">
            <div className="hidden md:block absolute -bottom-10 left-0 text-[8rem] font-bold text-white/5 pointer-events-none select-none tracking-tighter">
              AIM
            </div>
            
            <div className="flex-1 sm:flex-none bg-white/5 border border-white/10 backdrop-blur-md p-5 md:p-6 rounded-2xl md:rounded-3xl sm:w-48 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gray-400">*</div>
              <h3 className="text-3xl md:text-4xl font-light mb-1 md:mb-2">150+</h3>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Projects delivered</p>
            </div>
            
            <div className="flex-1 sm:flex-none bg-[#5a1000]/80 border border-[#ff2a00]/30 backdrop-blur-md p-5 md:p-6 rounded-2xl md:rounded-3xl sm:w-48 relative overflow-hidden">
               <div className="absolute top-4 right-4 text-white">*</div>
              <h3 className="text-3xl md:text-4xl font-light mb-1 md:mb-2">98%</h3>
              <p className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider">Client satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Glowing Image & Floating UI */}
        <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] lg:h-full lg:min-h-[600px] pointer-events-none mt-12 lg:mt-0 w-full">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {/* Glowing Visor Placeholder */}
            {/* We scale the height and adjust positioning for mobile to keep the hero image contained */}
            <div className="relative w-full h-full lg:h-[120%] lg:-top-10 bg-[url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-lighten opacity-80" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)' }} />
          </div>

          {/* Floating UI 1 (Chart) */}
          <div className="absolute top-4 md:top-20 right-0 z-20 bg-white/5 border border-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl w-32 md:w-48 scale-90 md:scale-100 origin-top-right">
             <div className="flex items-end gap-1 mb-2 h-8 md:h-12">
               <div className="w-2 md:w-3 bg-white/20 h-3 md:h-4 rounded-t-sm" />
               <div className="w-2 md:w-3 bg-white/40 h-4 md:h-6 rounded-t-sm" />
               <div className="w-2 md:w-3 bg-white/60 h-6 md:h-8 rounded-t-sm" />
               <div className="w-2 md:w-3 bg-white h-8 md:h-12 rounded-t-sm" />
             </div>
             <p className="text-xs md:text-sm font-medium">+42%</p>
             <p className="text-[8px] md:text-[10px] text-gray-400">Experience Performance</p>
          </div>

          {/* Floating UI 2 (Metrics Tracker) */}
          <div className="absolute bottom-10 md:top-1/2 left-0 md:left-auto md:right-10 z-20 bg-white/5 border border-white/10 backdrop-blur-md p-4 md:p-5 rounded-xl md:rounded-2xl w-40 md:w-auto max-w-[200px] scale-90 md:scale-100 origin-bottom-left">
             <h4 className="text-xs md:text-sm font-semibold mb-1">Measure Real Impact</h4>
             <p className="text-[8px] md:text-[10px] text-gray-400 leading-snug">Track progress through meaningful metrics and insights.</p>
             <div className="mt-3 md:mt-4 w-full h-4 md:h-8 border-t-2 border-[#ff2a00] border-dashed rounded-t-full opacity-50" />
          </div>
        </div>
      </main>

      {/* --- BOTTOM PARTNERS BAR --- */}
      {/* Hidden on mobile, only flexes on md and above screens */}
      <div className="absolute bottom-8 right-8 z-50 hidden lg:flex items-center gap-8">
        <span className="text-sm text-gray-400 font-medium">Our Partners</span>
        <div className="flex items-center gap-8 text-white/50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold"><span className="text-xl">&hearts;</span> BookStore</div>
          <div className="flex items-center gap-2 font-bold"><span className="text-xl">&#8921;</span> zantic</div>
          <div className="flex items-center gap-2 font-bold"><span className="text-xl">&#10022;</span> Crona</div>
        </div>
      </div>
      
    </div>
  );
}