import { Home, User, Briefcase, Code2, Milestone, GraduationCap, Trophy, Send, Menu, X } from 'lucide-react';
import { ActiveSection } from '../types';
import { motion, AnimatePresence } from 'motion/react';

import benjaminPortrait from '../assets/images/hero.png';

interface NavigationProps {
  activeSection: ActiveSection;
  onSetSection: (section: ActiveSection) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function Navigation({ activeSection, onSetSection, mobileOpen, setMobileOpen }: NavigationProps) {
  const navItems = [
    { id: 'home' as ActiveSection, label: 'HOME', icon: Home },
    { id: 'about' as ActiveSection, label: 'ABOUT ME', icon: User },
    { id: 'skills' as ActiveSection, label: 'SKILLS', icon: Code2 },
    { id: 'projects' as ActiveSection, label: 'PROJECTS', icon: Briefcase },
    { id: 'experience' as ActiveSection, label: 'EXPERIENCE', icon: Milestone },
    { id: 'education' as ActiveSection, label: 'EDUCATION', icon: GraduationCap },
    { id: 'achievements' as ActiveSection, label: 'ACHIEVEMENTS', icon: Trophy },
    { id: 'contact' as ActiveSection, label: 'CONTACT', icon: Send },
  ];

  const handleNavClick = (sectionId: ActiveSection) => {
    onSetSection(sectionId);
    setMobileOpen(false);
    // Smooth scroll content area back to top
    const contentCol = document.getElementById('scrollable-content-col');
    if (contentCol) {
      contentCol.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const SidebarContent = () => (
    <div id="sidebar-nav-container" className="flex flex-col h-full w-full select-none overflow-y-auto custom-scrollbar-none">
      {/* 1. TOP PORTRAIT CARD FRAME */}
      <div id="sidebar-portrait-frame" className="w-full h-32 sm:h-36 xl:h-40 bg-neutral-900 relative overflow-hidden flex-shrink-0 border-b-2 border-white/10 group">
        {/* Grayscale portrait with dynamic zoom on hover */}
        <img
          src={benjaminPortrait}
          alt="Gokul L Portrait"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
        />
        {/* Subtle premium cover gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-3 left-4 z-20">
          <span className="font-mono text-[9px] tracking-[0.25em] text-white/50 uppercase block font-light">COIMBATORE, TN</span>
          <span className="font-display font-black text-xs text-white uppercase tracking-wider">Gokul L</span>
        </div>
      </div>

      {/* 2. BOTTOM GOLD NAVIGATION SECTION */}
      <div id="sidebar-gold-menu" className="bg-[#E5A93C] flex-grow flex flex-col justify-between py-5 px-4 shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,0.2)]">
        
        {/* Nav Links List */}
        <div className="relative flex flex-col justify-between items-center py-4 flex-grow w-full">
          
          {/* Vertical Connecting Line (Dashed matching absolute center of screenshot) */}
          <div className="absolute top-6 bottom-6 w-[2px] border-l-2 border-dashed border-black/20 z-0 left-1/2 -translate-x-1/2" />

          {/* Top Connecting Node Dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-black z-10" />

          <nav className="w-full space-y-5 py-3 relative z-10 flex flex-col items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  id={`side-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-center py-1 transition-all duration-300 relative group cursor-pointer"
                >
                  {/* Highly polished centered classic display header with solid background mask for the connection line */}
                  <span className={`font-sans font-extrabold text-[10.5px] sm:text-xs tracking-[0.25em] inline-block transition-all duration-300 uppercase bg-[#E5A93C] px-3.5 py-1 rounded-full select-none ${
                    isActive
                      ? 'text-white font-black drop-shadow-sm scale-105'
                      : 'text-black/70 hover:text-white hover:scale-105'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Connecting Node Dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-black z-10" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP STICKY LEFT COLUMN */}
      <aside 
        id="desktop-sidebar-pane"
        className="hidden lg:flex flex-col w-64 xl:w-72 h-screen sticky top-0 bg-neutral-950 border-r border-neutral-100/10 z-40 select-none flex-shrink-0"
      >
        <SidebarContent />
      </aside>

      {/* MOBILE HEADER BAR */}
      <div 
        id="mobile-navigation-topbar" 
        className="lg:hidden w-full h-16 bg-neutral-900 border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-40"
      >
        <div className="flex items-center gap-2">
          <span className="font-display font-black tracking-widest text-white uppercase text-sm">
            GOKUL L.
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
        </div>

        {/* Toggle Burger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE DRAWER OVERLAY PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Modal opaque background block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-45"
            />

            {/* Sliding yellow drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="lg:hidden fixed top-0 bottom-0 left-0 w-72 bg-neutral-950 z-50 flex"
            >
              <SidebarContent />
              
              {/* Floating Close Anchor within drawer */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-[-48px] bg-gold-500 text-black p-2.5 rounded-r-lg shadow-lg"
                aria-label="Close navigation panel"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
