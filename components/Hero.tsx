import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" 
          alt="Gym Hero" 
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 hero-gradient" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-black mb-6 leading-none tracking-tighter text-white uppercase italic">
            Redefine Your <span className="text-cyan-500">Limits.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed italic">
            Where precision meets performance. Sundarpada's most advanced training facility, engineered for those who demand excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-[0.2em] text-cyan-500/80">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Trusted by 2,000+ members</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> ACE & NASM Certified Trainers</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> 24/7 Access Available</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee/Ribbon */}
      <div className="absolute bottom-0 left-0 w-full bg-cyan-500 py-4 -rotate-2 origin-bottom-left z-20 overflow-hidden shadow-2xl">
        <div className="whitespace-nowrap flex animate-marquee text-slate-950 font-black text-2xl uppercase">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-10 flex items-center">
              Elite Training ✦ Premium Equipment ✦ Results Driven ✦ Community Focused ✦ Sundarpada's Finest
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;