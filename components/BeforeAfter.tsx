import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Scale, Clock, Zap, ArrowRight } from 'lucide-react';

const RESULTS_DATA = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
    name: "Sumit's Journey",
    stat1: "12 KG",
    label1: "Lost",
    stat2: "4 MONTHS",
    label2: "Timeframe",
    coach: "Rahul Das",
    plan: "Elite Plan",
    focus: "HIIT training + nutrition overhaul",
    quote: "I never thought I could transform this quickly. The combination of structured training and nutrition coaching changed everything."
  },
  // Keep others but prioritize user's specific story
];

const BeforeAfter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const currentResult = RESULTS_DATA[0]; // Focusing on Sumit's Journey as requested

  return (
    <section id="results" className="py-24 bg-slate-900 overflow-hidden relative pt-32">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter italic leading-none">
          Transformation Speaks <span className="text-cyan-500">Louder Than Words</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic">
          Real members. Real results. Real commitment.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Comparison Slider */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-800 select-none bg-slate-800">
            {/* After Image */}
            <img 
              src={currentResult.after} 
              alt="After" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src={currentResult.before} 
                alt="Before" 
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-cyan-500 z-10 cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-3 bg-slate-900 rounded-full"></div>
                  <div className="w-0.5 h-3 bg-slate-900 rounded-full"></div>
                </div>
              </div>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos}
              onChange={(e) => setSliderPos(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            <div className="absolute top-4 left-4 bg-slate-950/80 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">BEFORE</div>
            <div className="absolute top-4 right-4 bg-cyan-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-950">AFTER</div>
          </div>

          {/* Result Content */}
          <div className="space-y-8">
            <h3 className="text-4xl font-black italic uppercase">{currentResult.name}</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border-white/5">
                <div className="text-4xl font-black text-cyan-500">{currentResult.stat1}</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{currentResult.label1}</div>
              </div>
              <div className="glass p-6 rounded-2xl border-white/5">
                <div className="text-4xl font-black text-white">{currentResult.stat2}</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{currentResult.label2}</div>
              </div>
            </div>

            <div className="space-y-4 text-slate-400">
               <div className="flex justify-between items-center border-b border-white/5 pb-2">
                 <span className="text-xs uppercase font-black tracking-widest">Coach</span>
                 <span className="text-white font-bold">{currentResult.coach}</span>
               </div>
               <div className="flex justify-between items-center border-b border-white/5 pb-2">
                 <span className="text-xs uppercase font-black tracking-widest">Program</span>
                 <span className="text-white font-bold">{currentResult.plan}</span>
               </div>
               <div className="flex justify-between items-center border-b border-white/5 pb-2">
                 <span className="text-xs uppercase font-black tracking-widest">Key Focus</span>
                 <span className="text-white font-bold text-right ml-4">{currentResult.focus}</span>
               </div>
            </div>

            <div className="relative pt-6">
              <Zap className="absolute -top-2 -left-4 text-cyan-500/10 w-12 h-12" />
              <p className="text-lg italic leading-relaxed text-slate-300">
                "{currentResult.quote}"
              </p>
            </div>

            <button className="flex items-center space-x-2 text-cyan-500 font-black uppercase tracking-widest text-sm group">
              <span>View More Transformations</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
