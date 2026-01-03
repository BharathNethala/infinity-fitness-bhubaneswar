
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, Award, Quote, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Trainer } from '../types';

interface TrainerCardProps {
  trainer: Trainer;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="glass rounded-[2rem] overflow-hidden group flex flex-col h-full border border-white/5 hover:border-cyan-500/30 transition-all duration-500 bg-slate-900/40"
    >
      <Link to={`/trainers/${trainer.id}`} className="relative h-72 overflow-hidden block">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        
        <div className="absolute top-4 left-4">
          <span className="bg-cyan-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            {trainer.specialty}
          </span>
        </div>
      </Link>

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-3xl font-black font-oswald text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {trainer.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-6 text-cyan-500/60">
          <Award size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Elite Level Coach</span>
        </div>

        {/* Bio Section with Expand/Collapse */}
        <div 
          className="relative mb-6 flex-1 cursor-pointer select-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Quote className="absolute -top-3 -left-3 text-cyan-500/10 w-10 h-10 -z-0" />
          
          <div className="relative z-10">
            <motion.div
              layout
              initial={false}
              className="overflow-hidden"
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className={`text-slate-400 text-sm leading-relaxed italic transition-all duration-300 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                {trainer.bio}
              </p>
            </motion.div>

            <div className="flex items-center space-x-2 mt-3 text-cyan-500 group/read">
              <span 
                className="text-[10px] font-black uppercase tracking-[0.2em] transition-all group-hover/read:tracking-[0.3em]"
                style={{
                  textShadow: '0 0 15px rgba(6, 182, 212, 0.4)'
                }}
              >
                {isExpanded ? 'Show Less' : 'Read Bio'}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0, y: isExpanded ? 0 : [0, 2, 0] }}
                transition={isExpanded ? { duration: 0.3 } : { y: { repeat: Infinity, duration: 2 } }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex justify-between items-center">
          <div className="flex space-x-3">
            {trainer.socials.instagram && (
              <a
                href={trainer.socials.instagram}
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 glass rounded-xl hover:bg-cyan-500 hover:text-slate-950 transition-all transform hover:scale-110 border border-white/5"
                aria-label={`${trainer.name} Instagram`}
              >
                <Instagram size={18} />
              </a>
            )}
            {trainer.socials.twitter && (
              <a
                href={trainer.socials.twitter}
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 glass rounded-xl hover:bg-cyan-500 hover:text-slate-950 transition-all transform hover:scale-110 border border-white/5"
                aria-label={`${trainer.name} Twitter`}
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
          <Link 
            to={`/trainers/${trainer.id}`}
            className="flex items-center space-x-1 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <User size={12} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
