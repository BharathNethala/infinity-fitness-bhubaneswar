import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Globe, Instagram, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div id="contact" className="bg-slate-950 pt-24">
      {/* Section Header */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic leading-none uppercase"
          >
            Begin Your <span className="text-cyan-500">Journey</span>
          </motion.h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto italic">
            Visit us for a facility tour, meet our coaches, and discover why Infinity Fitness Den is Sundarpada's premier training destination.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass p-8 rounded-[2rem] border border-white/5">
                <h3 className="text-2xl font-black mb-8 uppercase text-white italic">Visit Us</h3>
                <ul className="space-y-8">
                  <li className="flex items-start space-x-4 group">
                    <div className="bg-cyan-500/10 p-4 rounded-2xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-1">Infinity Fitness Den</div>
                      <p className="text-slate-300">Plot No. 124, Sundarpada Square<br/>Bhubaneswar, Odisha 751002</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <div className="bg-cyan-500/10 p-4 rounded-2xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-1">Operating Hours</div>
                      <p className="text-slate-300">Monday - Saturday: 5:00 AM - 11:00 PM<br/>Sunday: 7:00 AM - 10:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <div className="bg-cyan-500/10 p-4 rounded-2xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-1">Phone</div>
                      <p className="text-slate-300 font-bold">+91 98765 43210</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <div className="bg-cyan-500/10 p-4 rounded-2xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-1">Email</div>
                      <p className="text-slate-300">info@infinityden.com</p>
                    </div>
                  </li>
                </ul>
                
                <div className="flex space-x-4 mt-10">
                   <a href="#" className="p-3 bg-slate-900 rounded-xl hover:text-cyan-500 transition-colors"><Instagram size={20} /></a>
                   <a href="#" className="p-3 bg-slate-900 rounded-xl hover:text-cyan-500 transition-colors"><Facebook size={20} /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-dark p-10 rounded-[2.5rem] border border-white/10 shadow-2xl h-full">
                <h3 className="text-3xl font-black mb-8 uppercase text-white tracking-tighter italic">Contact Form</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Full Name</label>
                      <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 focus:border-cyan-500 outline-none transition-all text-white font-bold" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Email Address</label>
                      <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 focus:border-cyan-500 outline-none transition-all text-white font-bold" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 focus:border-cyan-500 outline-none transition-all text-white font-bold" placeholder="+91 XXXX XXXX" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Interest</label>
                      <select className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 focus:border-cyan-500 outline-none transition-all text-white font-bold appearance-none">
                        <option>Tour Booking</option>
                        <option>Membership Inquiry</option>
                        <option>Personal Training</option>
                        <option>Nutrition</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Message</label>
                    <textarea className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 focus:border-cyan-500 outline-none transition-all text-white h-40 resize-none font-bold" placeholder="How can we help you crush your goals?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] shadow-xl shadow-cyan-500/20">
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-7xl h-[400px] rounded-[3rem] overflow-hidden border border-white/5 relative group">
           <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
              <div className="text-center">
                 <MapPin size={48} className="text-cyan-500 mx-auto mb-4 animate-bounce" />
                 <p className="text-slate-400 font-bold uppercase tracking-widest">Google Maps Integration Placeholder</p>
                 <p className="text-slate-600 text-xs mt-2 italic">Find us at Sundarpada Square, Bhubaneswar</p>
                 <button className="mt-6 bg-slate-900 px-6 py-2 rounded-lg text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-950 transition-colors">Get Directions</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
