import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ExternalLink, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-cyan-500 p-2 rounded-lg">
              <span className="text-slate-950 font-black">INF</span>
            </div>
            <span className="text-2xl font-bold font-oswald tracking-tighter">INFINITY FITNESS DEN</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8 uppercase text-[10px] font-black tracking-widest italic">
            Where Excellence Becomes Habit
          </p>
          <div className="flex space-x-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-cyan-500">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            {['About Us', 'Our Trainers', 'Membership Plans', 'Success Stories', 'Class Schedule', 'Careers', 'Privacy Policy', 'Terms of Service'].map((link) => (
              <li key={link}>
                <Link to="/" onClick={scrollToTop} className="hover:text-cyan-400 flex items-center group">
                  <span className="w-2 h-0.5 bg-cyan-500 mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-cyan-500">Contact Us</h4>
          <ul className="space-y-6 text-slate-400">
            <li className="flex items-start space-x-4">
              <MapPin className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
              <span>Plot No. 124, Sundarpada Square<br/>Bhubaneswar, Odisha 751002</span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="text-cyan-500 flex-shrink-0" size={20} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail className="text-cyan-500 flex-shrink-0" size={20} />
              <span>info@infinityden.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-cyan-500">Newsletter</h4>
          <p className="text-slate-400 mb-6 text-sm italic">Stay updated with training tips, nutrition advice, and exclusive member offers.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-4 pr-12 outline-none focus:border-cyan-500 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-500 p-2 rounded-lg text-slate-950">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
        <p>© 2024 Infinity Fitness Den. All rights reserved. | Designed for those who refuse to settle.</p>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-white flex items-center">
            View on Map <ExternalLink size={14} className="ml-1" />
          </a>
          <span>Sundarpada, Bhubaneswar</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
