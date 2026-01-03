
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TRAINERS } from '../constants';
import { Instagram, Twitter, Award, CheckCircle, ArrowLeft, Calendar, ShieldCheck, Zap } from 'lucide-react';

const TrainerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trainer = TRAINERS.find(t => t.id === parseInt(id || '0'));

  if (!trainer) {
    return <Navigate to="/trainers" />;
  }

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      {/* Dynamic Header/Hero */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 z-10" />
          <img 
            src={trainer.image} 
            alt={trainer.name} 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto relative z-20">
          <Link to="/trainers" className="inline-flex items-center space-x-2 text-cyan-500 hover:text-cyan-400 mb-8 font-black uppercase tracking-widest text-xs group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Roster</span>
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-64 h-64 lg:w-96 lg:h-[30rem] rounded-[2.5rem] overflow-hidden border-4 border-slate-900 shadow-2xl"
            >
              <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-cyan-500 text-slate-950 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                EXPERIENCE: {trainer.experience}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <span className="text-cyan-500 text-sm font-black uppercase tracking-[0.3em] mb-4 block">{trainer.specialty}</span>
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none italic uppercase">
                {trainer.name}
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-light italic leading-relaxed max-w-2xl mb-8">
                "{trainer.philosophy}"
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/20 flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>Book a Session</span>
                </button>
                <div className="flex space-x-3">
                  <a href={trainer.socials.instagram} className="p-4 glass rounded-xl hover:bg-white/10 transition-all text-white border border-white/5">
                    <Instagram size={20} />
                  </a>
                  <a href={trainer.socials.twitter} className="p-4 glass rounded-xl hover:bg-white/10 transition-all text-white border border-white/5">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-black mb-6 uppercase tracking-widest flex items-center space-x-3">
                   <ShieldCheck className="text-cyan-500" />
                   <span>About the Coach</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed whitespace-pre-line">
                  {trainer.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass p-8 rounded-[2rem] border border-white/5">
                   <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-cyan-500 flex items-center space-x-2">
                      <Award size={20} />
                      <span>Qualifications</span>
                   </h3>
                   <ul className="space-y-4">
                      {trainer.qualifications.map((q, i) => (
                        <li key={i} className="flex items-center space-x-3 text-slate-300">
                           <CheckCircle size={16} className="text-cyan-500 flex-shrink-0" />
                           <span className="font-bold">{q}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                
                <div className="glass p-8 rounded-[2rem] border border-white/5 bg-cyan-500/5">
                   <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-white flex items-center space-x-2">
                      <Zap size={20} className="text-cyan-500" />
                      <span>Training Style</span>
                   </h3>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm font-black uppercase tracking-widest text-slate-500">
                        <span>Intensity</span>
                        <span className="text-cyan-500">High</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 w-[90%] h-full" />
                      </div>
                      <div className="flex justify-between items-center text-sm font-black uppercase tracking-widest text-slate-500">
                        <span>Discipline</span>
                        <span className="text-cyan-500">Strict</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 w-[95%] h-full" />
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
               <div className="sticky top-40 glass-dark p-8 rounded-[2.5rem] border border-cyan-500/20 shadow-2xl">
                  <h3 className="text-2xl font-black mb-8 uppercase text-center tracking-tighter">
                    Personal <span className="text-cyan-500">Training</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 rounded-2xl glass border-white/5">
                      <span className="text-slate-400 font-bold">1 Session</span>
                      <span className="text-white font-black">₹1,200</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-2xl glass border-white/5">
                      <span className="text-slate-400 font-bold">12 Sessions</span>
                      <span className="text-white font-black">₹12,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-2xl glass bg-cyan-500/10 border-cyan-500/20">
                      <span className="text-cyan-500 font-bold uppercase tracking-widest text-xs">Best Value</span>
                      <span className="text-white font-black">₹20,000 / 24 Sessions</span>
                    </div>
                  </div>
                  <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest mt-10 transition-all shadow-xl shadow-cyan-500/20">
                    Get Free Quote
                  </button>
                  <p className="text-[10px] text-center text-slate-600 uppercase font-black mt-4 tracking-widest">
                    * Available for Elite & Infinity Members only
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainerDetailPage;