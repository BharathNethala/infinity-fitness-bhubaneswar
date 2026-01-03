import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import BMICalculator from './components/BMICalculator';
import Testimonials from './components/Testimonials';
import CouponPopup from './components/CouponPopup';
import TrainersPage from './components/TrainersPage';
import TrainerDetailPage from './components/TrainerDetailPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { SERVICES_CONTENT, PLANS, FAQ_DATA } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = React.useState(false);
  
  const getAnnualPrice = (monthlyPrice: number) => {
    // Specific annual pricing provided in prompt
    if (monthlyPrice === 999) return 9590;
    if (monthlyPrice === 1999) return 19190;
    if (monthlyPrice === 4999) return 47990;
    return Math.floor(monthlyPrice * 12 * 0.8);
  };

  return (
    <section id="plans" className="py-24 bg-slate-900 px-6 pt-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter italic leading-none">Investment in Your <span className="text-cyan-500">Best Self</span></h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto italic mb-8">Transparent pricing, zero hidden fees, maximum value. Choose the plan that aligns with your goals.</p>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className={!isYearly ? 'text-white font-bold' : 'text-slate-500'}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-slate-800 rounded-full relative p-1 transition-colors outline-none"
            >
              <div className={`w-6 h-6 bg-cyan-500 rounded-full transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={isYearly ? 'text-white font-bold' : 'text-slate-500'}>Annual <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded ml-2 font-bold">SAVE 20%</span></span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {PLANS.map((plan) => (
            <motion.div 
              key={plan.id}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl flex flex-col ${plan.isPopular ? 'bg-cyan-500 border-none scale-105 shadow-2xl shadow-cyan-500/20' : 'glass border-white/5'}`}
            >
              {plan.isPopular && <span className="bg-white text-slate-950 px-3 py-1 rounded-full text-[10px] font-black uppercase w-fit mb-4">MOST POPULAR</span>}
              <h3 className={`text-2xl font-black mb-2 ${plan.isPopular ? 'text-slate-950' : 'text-white'}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.isPopular ? 'text-slate-800' : 'text-slate-400'}`}>{plan.tagline}</p>
              <div className="flex items-baseline space-x-1 mb-8">
                <span className={`text-4xl font-black ${plan.isPopular ? 'text-slate-950' : 'text-white'}`}>₹{isYearly ? getAnnualPrice(plan.price) : plan.price}</span>
                <span className={`text-sm ${plan.isPopular ? 'text-slate-800' : 'text-slate-500'}`}>{isYearly ? '/year' : '/month'}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm">
                    <Check size={18} className={plan.isPopular ? 'text-slate-950' : 'text-cyan-500'} />
                    <span className={plan.isPopular ? 'text-slate-900' : 'text-slate-300'}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black transition-all outline-none uppercase tracking-widest ${plan.isPopular ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white/10 hover:bg-white/20'}`}>
                {plan.id === 'infinity' ? 'Unlock Potential' : (plan.id === 'elite' ? 'Start Transformation' : 'Begin Journey')}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="max-w-4xl mx-auto glass p-10 rounded-[2.5rem] border-white/5 text-center">
          <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-white italic">Add-On Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             <div className="p-4 bg-slate-950 rounded-2xl border border-white/5">
                <div className="text-cyan-500 font-black text-2xl mb-1">₹799</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Additional PT Session</div>
             </div>
             <div className="p-4 bg-slate-950 rounded-2xl border border-white/5">
                <div className="text-cyan-500 font-black text-2xl mb-1">₹4,999</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Nutrition Overhaul (4 weeks)</div>
             </div>
             <div className="p-4 bg-slate-950 rounded-2xl border border-white/5">
                <div className="text-cyan-500 font-black text-2xl mb-1">₹299</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Body Composition Scan</div>
             </div>
          </div>
          <p className="mt-8 text-slate-400 text-sm">Questions about plans? <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-cyan-500 font-bold border-b border-cyan-500">Schedule a consultation</button></p>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => (
  <section id="services" className="py-24 bg-slate-950 relative overflow-hidden pt-32">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-4xl md:text-6xl font-black leading-none mb-6 italic uppercase">{SERVICES_CONTENT.headline.split(' ')[0]} <br/><span className="text-cyan-500">{SERVICES_CONTENT.headline.split(' ')[2]}</span></h2>
          <p className="text-slate-400 mb-10 leading-relaxed italic">{SERVICES_CONTENT.subheadline}</p>
          <button className="text-cyan-500 font-bold flex items-center group uppercase tracking-widest text-sm outline-none">
            Explore All Features <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_CONTENT.features.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02 }}
              className="p-8 glass rounded-3xl hover:border-cyan-500/50 transition-all border border-white/5"
            >
              <div className="text-cyan-500 mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 uppercase">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-900/30 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter italic text-center">Common <span className="text-cyan-500">Questions</span></h2>
        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center outline-none group"
              >
                <span className="font-bold text-lg group-hover:text-cyan-400 transition-colors">{item.q}</span>
                <ChevronDown className={`text-cyan-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 bg-slate-950/20">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-slate-500 italic">Still have questions? <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-cyan-500 font-bold border-b border-cyan-500">Contact our team</button></p>
      </div>
    </section>
  );
};

const ResultsSection = () => (
  <div id="results">
    <BeforeAfter />
  </div>
);

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <Hero />
    <ServicesSection />
    <AboutPage />
    <Pricing />
    <TrainersPage />
    <BMICalculator />
    <ResultsSection />
    <Testimonials />
    <FAQSection />
    <ContactPage />
  </motion.div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers/:id" element={<TrainerDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <CouponPopup />
        
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </Router>
  );
};

export default App;
