import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white ${scrolled ? 'shadow-xl py-2' : 'py-4 border-b border-slate-100'}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between max-w-[1440px]">
        {/* Left: Logo Area */}
        <div className="flex-shrink-0">
          <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2 group outline-none">
            <div className="bg-cyan-500 p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-md">
              <Dumbbell className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold font-oswald tracking-tighter text-slate-900 hidden sm:inline-block">
              INFINITY <span className="text-cyan-600">FITNESS</span>
            </span>
          </button>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          <div className="flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-[13px] font-bold tracking-widest uppercase transition-colors hover:text-cyan-600 text-slate-600 outline-none relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: CTA Button (Desktop) */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <button 
            onClick={() => handleNavClick('plans')}
            className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-2.5 rounded-full font-black text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10 uppercase outline-none"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="text-lg font-oswald font-bold text-slate-900 hover:text-cyan-600 text-left py-2 border-b border-slate-50 outline-none"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('plans')}
                className="bg-cyan-500 text-white p-4 rounded-xl font-black uppercase shadow-lg shadow-cyan-500/20 text-center mt-4 outline-none"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;