import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  // Set once to false so it triggers every time it enters the viewport
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    } else {
      // Optional: Reset count to 0 when out of view so it restarts from zero next time
      setCount(0);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutPage: React.FC = () => {
  const stats = [
    { value: 2000, suffix: "+", label: "Members Transformed" },
    { value: 15, label: "Expert Coaches" },
    { value: 6, label: "Years of Excellence" },
    { value: 98, suffix: "%", label: "Member Retention Rate" },
  ];

  const philosophy = [
    { title: "Excellence as Standard", desc: "We believe mediocrity has no place in fitness. Every workout, every meal plan, every interaction reflects our commitment to the highest standards." },
    { title: "Precision Over Intensity", desc: "Effort matters, but intelligent effort matters more. We emphasize perfect form, progressive programming, and sustainable progress." },
    { title: "Community Amplifies Growth", desc: "You'll train alongside doctors, entrepreneurs, students, and athletes. Our diverse community creates an environment where everyone elevates each other." },
    { title: "Innovation Meets Tradition", desc: "We combine time-tested strength principles with cutting-edge technology—biometric tracking, body scans, and app-based programming." },
  ];

  return (
    <div id="about" className="bg-slate-950 pt-24">
      {/* Intro Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069" 
            alt="Gym Interior" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none italic uppercase">
              Built on a Foundation of <span className="text-cyan-500">Excellence</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed">
              Since 2018, Infinity Fitness Den has set the standard for high-performance training in Bhubaneswar. We're not just a gym—we're a performance facility where ambition meets infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">OUR <span className="text-cyan-500">MISSION</span></h3>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  We saw a gap in the market: expensive luxury gyms with minimal substance, and hardcore training centers with poor facilities.
                </p>
                <p>
                  We bridged that gap by creating an industrial-grade training environment with premium amenities—a place where serious athletes and beginners alike can pursue their potential without compromise.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="glass p-4 rounded-2xl">
                    <h4 className="text-white font-black uppercase text-xs mb-1">Infrastructure</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Commercial-grade & Climate-controlled</p>
                  </div>
                  <div className="glass p-4 rounded-2xl">
                    <h4 className="text-white font-black uppercase text-xs mb-1">Approach</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Science-First & Periodized</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-900 aspect-video lg:aspect-square"
            >
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070" alt="Gym" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-cyan-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center text-slate-950">
                <div className="text-4xl md:text-6xl font-black italic">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">OUR <span className="text-cyan-500">PHILOSOPHY</span></h3>
            <p className="text-slate-400">Proudly serving Sundarpada and greater Bhubaneswar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 glass rounded-[2.5rem] border border-white/5 group"
              >
                <div className="text-cyan-500 mb-6 font-black text-4xl italic opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                <h4 className="text-xl font-black mb-4 text-white uppercase">{v.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;