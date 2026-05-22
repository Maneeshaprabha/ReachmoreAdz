import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#0a0402] text-white overflow-hidden font-sans">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 flex justify-evenly pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>

      {/* Massive Orange/Red Glows */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#ff2a00] rounded-full blur-[150px] opacity-40 pointer-events-none translate-x-1/4" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#ff5a00] rounded-full blur-[180px] opacity-30 pointer-events-none" />

      {/* --- MAIN HERO CONTENT --- */}
      {/* Note the pt-32 to push content down below the absolute navbar */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-8 pt-32 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-screen items-center">
        
        {/* LEFT COLUMN: Typography & Main Stats */}
        <div className="lg:col-span-6 flex flex-col relative z-20">
          
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-5 h-5 text-gray-400" />
            <p className="text-xs text-gray-400 max-w-[150px] leading-tight">
              Hub support peoples from all over the world
            </p>
          </div>

          <h1 className="text-[5rem] lg:text-[6.5rem] leading-[0.9] font-medium tracking-tight mb-8">
            Technology <br />
            Crafted for All <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              Not Machines
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-md mb-10 leading-relaxed">
            We create clear, intuitive, and accessible digital experiences shaped by real human behavior.
          </p>

          <div className="flex items-center gap-6 mb-20">
            <button className="flex items-center gap-4 bg-[#ff2a00] hover:bg-[#ff4500] text-white px-8 py-3.5 rounded-full font-medium transition-colors">
              Get started
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0402] bg-blue-900" />
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0402] bg-red-900" />
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0402] bg-cyan-500" />
              </div>
              <div>
                <p className="text-sm font-semibold">900+ Happy Clients</p>
                <p className="text-xs text-gray-400">Over 5 years</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 relative">
            <div className="absolute -bottom-10 left-0 text-[8rem] font-bold text-white/5 pointer-events-none select-none tracking-tighter">
              AIM
            </div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl w-48 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gray-400">*</div>
              <h3 className="text-4xl font-light mb-2">150+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Projects delivered</p>
            </div>
            
            <div className="bg-[#5a1000]/80 border border-[#ff2a00]/30 backdrop-blur-md p-6 rounded-3xl w-48 relative overflow-hidden">
               <div className="absolute top-4 right-4 text-white">*</div>
              <h3 className="text-4xl font-light mb-2">98%</h3>
              <p className="text-xs text-gray-300 uppercase tracking-wider">Client satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Glowing Image & Floating UI */}
        <div className="lg:col-span-6 relative h-full min-h-[600px] pointer-events-none">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {/* Glowing Visor Placeholder */}
            <div className="relative w-full h-[120%] -top-10 bg-[url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-lighten opacity-80" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)' }} />
          </div>

          <div className="absolute top-20 right-0 z-20 bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl w-48">
             <div className="flex items-end gap-1 mb-2 h-12">
               <div className="w-3 bg-white/20 h-4 rounded-t-sm" />
               <div className="w-3 bg-white/40 h-6 rounded-t-sm" />
               <div className="w-3 bg-white/60 h-8 rounded-t-sm" />
               <div className="w-3 bg-white h-12 rounded-t-sm" />
             </div>
             <p className="text-sm font-medium">+42%</p>
             <p className="text-[10px] text-gray-400">Experience Performance</p>
          </div>

          <div className="absolute top-1/2 right-10 z-20 bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl max-w-[200px]">
             <h4 className="text-sm font-semibold mb-1">Measure Real Impact</h4>
             <p className="text-[10px] text-gray-400">Track progress through meaningful metrics and insights.</p>
             <div className="mt-4 w-full h-8 border-t-2 border-[#ff2a00] border-dashed rounded-t-full opacity-50" />
          </div>
        </div>
      </main>

      {/* --- BOTTOM PARTNERS BAR --- */}
      <div className="absolute bottom-8 right-8 z-50 flex items-center gap-8 hidden md:flex">
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