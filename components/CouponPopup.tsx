
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ticket, Copy, CheckCircle } from 'lucide-react';

const CouponPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const couponCode = "INFINITY25";

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('infinity_coupon_seen');
    
    if (hasSeenPopup) return;

    // Trigger 1: Time-based (8 seconds)
    const timer = setTimeout(() => {
      showPopup();
    }, 8000);

    // Trigger 2: Exit-intent (Mouse leaves window)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    const showPopup = () => {
      if (!sessionStorage.getItem('infinity_coupon_seen')) {
        setIsVisible(true);
        sessionStorage.setItem('infinity_coupon_seen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass-dark border-cyan-500/30 overflow-hidden rounded-[2.5rem] shadow-[0_0_50px_rgba(6,182,212,0.15)]"
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <div className="p-10 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-2xl mb-6 text-cyan-500">
                <Ticket size={40} className="animate-pulse" />
              </div>

              <h2 className="text-4xl font-black mb-3 tracking-tighter">
                WAIT! DON'T <span className="text-cyan-500">QUIT</span> YET!
              </h2>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                Take the first step towards your <span className="text-white font-bold italic underline decoration-cyan-500">Infinity Evolution</span> with a massive discount on any Elite or Premium plan.
              </p>

              <div className="bg-slate-900 border-2 border-dashed border-cyan-500/40 rounded-3xl p-8 mb-8 relative group overflow-hidden">
                <div className="text-sm font-black text-cyan-500/50 uppercase tracking-[0.3em] mb-2">Exclusive Discount Code</div>
                <div className="text-5xl font-black text-white tracking-widest mb-6">
                  25% OFF
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <div className="bg-slate-950 px-6 py-4 rounded-xl border border-white/5 font-mono text-xl tracking-widest text-cyan-400 flex-grow select-all">
                    {couponCode}
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className={`p-4 rounded-xl transition-all flex-shrink-0 ${
                      copied ? 'bg-emerald-500 text-slate-950' : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                    }`}
                  >
                    {copied ? <CheckCircle size={24} /> : <Copy size={24} />}
                  </button>
                </div>
                
                <div className="mt-4 text-[10px] text-slate-500 uppercase font-black tracking-widest">
                  * Valid for the first 50 new members this month
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/20"
                >
                  CLAIM MY DISCOUNT
                </button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-slate-500 text-xs uppercase font-black tracking-widest hover:text-slate-300 transition-colors"
                >
                  No thanks, I prefer paying full price
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CouponPopup;
