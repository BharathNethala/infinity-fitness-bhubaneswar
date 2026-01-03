import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';
import TrainerCard from './TrainerCard';
import { TRAINERS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const TrainersPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Strength', 'Yoga', 'HIIT', 'CrossFit', 'Nutrition'];

  const filteredTrainers = filter === 'All' 
    ? TRAINERS 
    : TRAINERS.filter(t => t.specialty.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div id="trainers" className="bg-slate-950 pt-32">
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 mb-6"
            >
              <Users size={16} className="text-cyan-500" />
              <span className="text-xs font-black uppercase tracking-widest text-cyan-500">Meet Your Transformation Team</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase italic">
              OUR <span className="text-cyan-500">COACHES</span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
              Our coaches aren't just certified—they're specialists. Each brings years of competitive experience and a proven track record of client results.
            </p>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all outline-none ${
                    filter === cat 
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105' 
                    : 'glass text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            key={filter} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          >
            {filteredTrainers.map(t => (
              <TrainerCard key={t.id} trainer={t} />
            ))}
          </motion.div>
          
          {filteredTrainers.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-xl font-medium italic">No trainers found for this category. Try another one!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 border-t border-white/5 bg-slate-900/30 relative overflow-hidden group">
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">Book Your <span className="text-cyan-500">Free Consultation</span></h3>
          <p className="text-slate-400 mb-10 text-lg italic">15-minute strategy session with the coach of your choice.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-cyan-500 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-cyan-500/20 outline-none flex items-center justify-center gap-3">
              <Calendar size={20} />
              Book Consultation
            </button>
            <button className="text-white hover:text-cyan-400 font-black uppercase tracking-widest text-sm border-b-2 border-white/20 hover:border-cyan-400 pb-1 transition-all outline-none">
              View Full Class Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainersPage;
