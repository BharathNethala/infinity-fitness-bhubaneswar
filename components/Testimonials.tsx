import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Trophy } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const displayTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter italic leading-none">
            Voices from the <span className="text-cyan-500">Community</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic">
            Real feedback from the iron-willed members of Infinity Fitness Den. No filters, just hard work and results.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-6 py-10"
            animate={{
              x: [0, -3840],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {displayTestimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="w-[350px] md:w-[420px] flex-shrink-0 p-8 glass-dark rounded-[2rem] border border-white/5 relative group hover:border-cyan-500/50 hover:bg-slate-900/40 transition-all duration-500 hover:-translate-y-2 shadow-xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < t.rating ? 'fill-cyan-500 text-cyan-500' : 'text-slate-700'} transition-colors`} 
                      />
                    ))}
                  </div>
                  <Quote size={32} className="text-cyan-500/10 group-hover:text-cyan-500/30 transition-colors" />
                </div>

                <div className="min-h-[120px]">
                  <p className="text-slate-300 italic text-lg leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-white/5">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full border-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-white group-hover:text-cyan-400 transition-colors uppercase">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <button className="text-cyan-500 font-black uppercase tracking-[0.2em] text-xs border-b border-cyan-500 pb-1 hover:text-white hover:border-white transition-all outline-none">
          Read All Success Stories
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
