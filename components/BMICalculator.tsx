import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Calendar } from 'lucide-react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const result = w / (h * h);
      setBmi(parseFloat(result.toFixed(1)));
      if (result < 18.5) setMessage('Underweight - Consider focusing on lean bulk.');
      else if (result < 25) setMessage('Normal Range - Looking good! Keep up the maintenance.');
      else if (result < 30) setMessage('Overweight - Time for some intense metabolic conditioning.');
      else setMessage('Obese - Let\'s start a science-backed transformation journey!');
    }
  };

  return (
    <section id="bmi" className="py-24 px-6 bg-slate-950 pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tighter italic leading-none uppercase"
          >
            Know Your <span className="text-cyan-500">Numbers</span>
          </motion.h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto italic">
            Understanding your baseline is the first step to transformation. Calculate your BMI below, then book a comprehensive body assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-widest">BMI <span className="text-cyan-500">CATEGORIES</span></h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-xl glass">
                <span className="font-bold">Underweight</span>
                <span className="text-cyan-400 font-black">&lt; 18.5</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl glass border-cyan-500/30">
                <span className="font-bold">Normal Range</span>
                <span className="text-emerald-400 font-black">18.5 - 24.9</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl glass">
                <span className="font-bold">Overweight</span>
                <span className="text-yellow-400 font-black">25 - 29.9</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl glass">
                <span className="font-bold">Obese</span>
                <span className="text-rose-400 font-black">≥ 30</span>
              </div>
            </div>
            
            <p className="mt-8 text-xs text-slate-500 italic leading-relaxed">
              Note: BMI is one metric among many. For a complete health assessment including body composition, muscle mass, and metabolic rate, book an in-person evaluation.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="mt-6 flex items-center space-x-2 text-cyan-500 font-black uppercase tracking-widest text-xs border-b border-cyan-500 pb-1"
            >
              <Calendar size={14} />
              <span>Schedule Full Assessment</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl glass-dark border-cyan-500/20 shadow-2xl"
          >
            <h4 className="text-xl font-black mb-6 uppercase tracking-tighter italic">Body Mass Index Calculator</h4>
            <form onSubmit={calculate} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 75"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:border-cyan-500 outline-none transition-all text-white font-bold"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 175"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:border-cyan-500 outline-none transition-all text-white font-bold"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-5 rounded-xl font-black flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] outline-none tracking-widest"
              >
                <Calculator size={20} />
                <span>CALCULATE</span>
              </button>
            </form>

            {bmi !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center"
              >
                <h3 className="text-3xl font-black mb-2 text-white">RESULT: <span className="text-cyan-400">{bmi}</span></h3>
                <p className="text-slate-300 italic">"{message}"</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
