/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Star, Zap, ChevronRight, ShieldCheck, CheckCircle, ThumbsUp, Quote, Sun, Moon, Lightbulb } from 'lucide-react';

const reviews = [
  {
    name: "Tina Garra",
    date: "a month ago",
    text: "We had a great experience with our electrician. He was on time, professional, and did amazing work in our home. Everything was done neatly and efficiently, and he left the area clean when he finished. It’s hard to find someone who is...",
    tags: ["Reasonable price"]
  },
  {
    name: "Irena Ciccone",
    date: "4 months ago",
    text: "I’m so pleased with Burgoyne and Sons Electric LLC and hope to have a longstanding relationship with them for multiple projects. My out-dated smoke/CO alarms have been brought up to code and properly relocated...",
    tags: ["Great price"]
  },
  {
    name: "F D",
    date: "2 years ago",
    text: "Andrew is a great electrician! He is always on time, pleasant and does not look to rob you like most other contractors. ...",
    tags: []
  },
  {
    name: "Kristen Nicholas",
    date: "7 years ago",
    text: "Andrew is the most fair, reliable electrician around. He’s so honest that he once gave us money back bc a job took him less time than he anticipated. Very neat work as well.",
    tags: ["Local Guide"]
  }
];

const features = [
  {
    icon: CheckCircle,
    title: "Multi-Generational Expertise",
    desc: "Decades of combined experience ensuring every project meets the highest standards."
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    desc: "Complete peace of mind knowing your property is protected and safe."
  },
  {
    icon: ThumbsUp,
    title: "Transparent, Fair Pricing",
    desc: "Honest quotes without hidden fees. We won't rob you like other contractors."
  },
  {
    icon: Zap,
    title: "Clean & Efficient",
    desc: "We leave the area pristine when finished, respecting your home."
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-amber-100 dark:selection:bg-amber-900/30 flex flex-col relative border-8 sm:border-[16px] border-zinc-50 dark:border-black transition-colors duration-300">
      {/* Navigation */}
      <header className="w-full px-6 sm:px-16 py-8 flex items-start justify-between flex-none">
        <div className="space-y-1 z-10">
          <h1 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Established LLC
          </h1>
          <p className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase leading-none mt-1">
            BURGOYNE & SONS
          </p>
        </div>
        <div className="text-right z-10 flex items-center gap-6">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-zinc-400 hover:text-amber-400 transition-colors" /> : <Moon className="w-4 h-4 text-zinc-400 hover:text-amber-400 transition-colors" />}
          </button>
          <a
            href="tel:2013908699"
            className="inline-flex flex-col items-end group mt-1"
          >
            <span className="text-sm font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-amber-500 dark:group-hover:text-amber-500">(201) 390-8699</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mt-1.5 flex items-center gap-1"><Phone className="w-3 h-3" /> Call Now</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center px-6 sm:px-16 py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-10 h-0.5 bg-amber-400 mb-8"></div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                Available for Installation
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-[-0.03em] leading-[0.9] text-zinc-900 dark:text-white uppercase mb-8 transition-colors">
                Electrical <br className="hidden sm:block" />
                precision for <br className="hidden sm:block" />
                your peace of mind.
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed uppercase tracking-wider mb-10 transition-colors">
                Expert electrical installation service based in Ringwood, New Jersey. 
                Delivering reliable, safe, and professional solutions for every project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="tel:2013908699"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-zinc-900 dark:text-white border-2 border-zinc-900 dark:border-white px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-colors"
                >
                  Call Now <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-zinc-500 dark:text-zinc-400 px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  View Details
                </a>
              </div>

              <div className="mt-12 flex flex-col justify-start border-l-4 border-amber-400 pl-6 dark:border-amber-400/80">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-lg leading-none flex gap-0.5 items-center">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </span>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest leading-none mt-1 pt-0.5 ml-2">5.0 Rating</span>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mt-1">Based on Google reviews</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center p-12 group"
            >
              <Lightbulb className="w-full h-full text-amber-400 opacity-60 dark:opacity-80 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-transform duration-700 group-hover:scale-105" strokeWidth={0.5} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features / Trust Section */}
      <section className="py-24 px-6 sm:px-16 border-t border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-950/20 flex-none overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="lg:w-1/3"
             >
               <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] uppercase text-zinc-900 dark:text-white mb-6 leading-none transition-colors">Why Choose <br className="hidden lg:block"/> Us.</h2>
               <div className="w-10 h-0.5 bg-amber-400 mb-6"></div>
               <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider leading-relaxed transition-colors">
                 We deliver high-quality craftsmanship, transparent pricing, and unwavering reliability for every electrical need.
               </p>
             </motion.div>
             
             <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 lg:w-2/3">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    className="group"
                  >
                     <div className="w-12 h-12 mb-6 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-amber-400 dark:group-hover:border-amber-400 transition-colors">
                       <f.icon className="w-5 h-5 text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-amber-500" />
                     </div>
                     <h3 className="uppercase text-[10px] font-bold tracking-[0.2em] text-zinc-900 dark:text-zinc-100 mb-3 transition-colors">{f.title}</h3>
                     <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed transition-colors">{f.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 sm:px-16 border-t border-zinc-100 dark:border-zinc-800/50 flex-none relative transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 flex flex-col items-center text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] uppercase text-zinc-900 dark:text-white mb-6 leading-none transition-colors">Client Trust.</h2>
            <div className="w-10 h-0.5 bg-amber-400"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {reviews.map((review, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                 className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between hover:border-amber-400 dark:hover:border-amber-400 transition-colors shadow-sm"
               >
                 <div>
                   <Quote className="w-6 h-6 text-amber-400/50 mb-6" />
                   <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 italic transition-colors">
                     "{review.text}"
                   </p>
                 </div>
                 
                 <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto transition-colors">
                   <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                   </div>
                   <div className="flex justify-between items-end">
                     <div>
                       <p className="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100 transition-colors">{review.name}</p>
                       <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mt-1 transition-colors">{review.date}</p>
                     </div>
                   </div>
                   {review.tags.length > 0 && (
                     <div className="flex flex-wrap gap-2 mt-4">
                       {review.tags.map(tag => (
                         <span key={tag} className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 bg-zinc-50 dark:bg-black text-zinc-500 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800 rounded-sm transition-colors">
                           {tag}
                         </span>
                       ))}
                     </div>
                   )}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="contact" className="py-24 px-6 sm:px-16 border-t border-zinc-100 dark:border-zinc-800/50 flex-none transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            
            {/* Address */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 flex items-center gap-2 transition-colors">
                <MapPin className="w-3 h-3 text-amber-400" /> Location
              </h3>
              <div>
                <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed uppercase tracking-wider mb-4 transition-colors">
                  15 Linnea Pl<br />
                  Ringwood, NJ 07456
                </p>
                <a 
                  href="https://maps.google.com/?q=15+Linnea+Pl,+Ringwood,+NJ+07456" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-900 dark:text-zinc-100 hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  Get Directions <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 flex items-center gap-2 transition-colors">
                <Clock className="w-3 h-3 text-amber-400" /> Hours of Operation
              </h3>
              <div className="grid grid-cols-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 gap-y-2 uppercase tracking-wider transition-colors">
                <span>Mon — Sat</span>
                <span className="text-zinc-900 dark:text-zinc-100">6AM – 5PM</span>
                <span>Sunday</span>
                <span className="text-zinc-400 dark:text-zinc-600">Closed</span>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 md:text-right"
            >
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 justify-start md:justify-end flex items-center gap-2 transition-colors">
                <Phone className="w-3 h-3 text-amber-400 md:hidden" /> Direct Contact
              </h3>
              <div>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-[0.2em] mb-2 transition-colors">
                  Call for Estimates
                </p>
                <a 
                  href="tel:2013908699"
                  className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-500 transition-colors inline-block tracking-tight"
                >
                  (201) 390-8699
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 sm:px-16 border-t border-zinc-100 dark:border-zinc-800/50 flex-none relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 transition-colors">
          <p className="z-10 bg-white dark:bg-zinc-950 px-2 py-1 transition-colors">© {new Date().getFullYear()} BURGOYNE & SONS ELECTRIC L.L.C. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 z-10 bg-white dark:bg-zinc-950 px-2 py-1 transition-colors">
            <span className="text-amber-400 shrink-0">FULLY LICENSED & INSURED</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.05] transition-opacity">
          <Zap className="w-64 h-64 sm:w-96 sm:h-96 text-zinc-900 dark:text-white" />
        </div>
      </footer>
    </div>
  );
}
