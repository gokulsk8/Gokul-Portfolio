import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ActiveSection } from '../types';

interface HomeSectionProps {
  onSetSection: (section: ActiveSection) => void;
}

const ROLES = [
  "AI ENGINEER",
  "CLOUD ENGINEER",
  "FRONTEND DEVELOPER",
  "DATA ANALYST"
];

export default function HomeSection({ onSetSection }: HomeSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      id="home-intro-panel" 
      className="select-none text-black flex flex-col justify-center w-full py-4 sm:py-8 relative overflow-hidden"
    >
      {/* Background Animated Decorative Ambient Polygons/Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-gold-100/30 to-gold-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-neutral-50 to-gold-50/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Large Greeting with staggering entrance */}
      <motion.h1
        id="heading-hi"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
        className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-neutral-950 tracking-tight leading-none mb-2"
      >
        HI THERE!
      </motion.h1>

      {/* Structured Branding Name Layer */}
      <motion.h2
        id="heading-name"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
        className="font-syne font-black text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[3.8vw] xl:text-[4.2vw] tracking-tight leading-[0.9] flex flex-row flex-nowrap items-baseline gap-x-2 sm:gap-x-3 mb-6 uppercase whitespace-nowrap"
      >
        <span className="text-neutral-950">I'M</span>
        <span className="text-outline text-gold-500 tracking-normal hover:scale-[1.02] transition-transform duration-500 cursor-default">
          {PERSONAL_INFO.fullName}
        </span>
      </motion.h2>

      {/* Profession Badge/Banner with upgraded animated role rotation (cool 3D flip effect on exit) */}
      <div id="profession-badge-container" className="h-[42px] flex items-center mb-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={roleIndex}
            id="profession-badge"
            initial={{ opacity: 0, rotateX: -90, y: 15 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: 90, y: -15 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 120, damping: 12 }}
            className="inline-block bg-neutral-950 text-[#E5A93C] font-mono text-xs font-black px-4.5 py-2 rounded-xl shadow-lg border border-neutral-800 tracking-[0.2em] whitespace-nowrap hover:bg-[#E5A93C] hover:text-black hover:border-[#E5A93C] transition-all duration-300 transform-gpu cursor-default"
          >
            {ROLES[roleIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Short Summary Description (Brighter/crisper contrast utilizing neutral-800/900 level text color) */}
      <motion.p
        id="intro-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.4 }}
        className="text-neutral-850 text-base md:text-lg leading-relaxed font-sans font-medium max-w-lg mb-10 text-pretty"
      >
        {PERSONAL_INFO.shortSummary}
      </motion.p>

      {/* Call to Actions bar */}
      <motion.div
        id="cta-buttons-bar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.5 }}
        className="flex flex-wrap items-center gap-4"
      >
        {/* Core Yellow Button */}
        <motion.button
          id="cta-about-btn"
          onClick={() => onSetSection('about')}
          whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 25px -5px rgba(229, 169, 60, 0.25)" }}
          whileTap={{ scale: 0.98 }}
          className="group bg-gold-400 hover:bg-neutral-950 text-black hover:text-white px-8 py-4.5 rounded-full font-mono text-[11.5px] font-extrabold tracking-widest uppercase transition-all duration-300 flex items-center gap-3.5 shadow-xl shadow-gold-400/20 cursor-pointer"
        >
          <span>MORE ABOUT ME</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-current" />
        </motion.button>

        {/* Secondary Glass Border Button */}
        <motion.button
          id="cta-projects-btn"
          onClick={() => onSetSection('projects')}
          whileHover={{ scale: 1.05, y: -2, borderColor: "#000000", backgroundColor: "#FAF9F5" }}
          whileTap={{ scale: 0.98 }}
          className="group border-2 border-neutral-300 px-7 py-4 rounded-full font-mono text-[11.5px] font-extrabold tracking-widest uppercase text-neutral-950 transition-all duration-300 flex items-center gap-3 cursor-pointer"
        >
          <span>VIEW WORK</span>
          <Eye className="w-4 h-4 group-hover:rotate-6 transition-transform duration-300 text-neutral-600 group-hover:text-black" />
        </motion.button>
      </motion.div>


    </div>
  );
}
