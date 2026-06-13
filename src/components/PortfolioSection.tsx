import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Github } from 'lucide-react';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AI & ML Systems' | 'Cloud Operations' | 'Web Projects'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'AI & ML Systems' | 'Cloud Operations' | 'Web Projects')[] = [
    'All',
    'AI & ML Systems',
    'Cloud Operations',
    'Web Projects'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div id="portfolio-panel" className="py-2 pr-0 select-none flex flex-col justify-center min-h-[70vh] md:min-h-[85vh]">
      {/* Portfolio Title Section */}
      <div id="portfolio-header" className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#E5A93C] font-bold uppercase block mb-1">
            03 / ARCHIVE
          </span>
          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
            SELECTED WORKS
          </h3>
          <div className="w-12 h-1 bg-gold-400 mt-2.5 rounded-full" />
        </div>

        {/* Filter Category Chips with bright contrast and high visual priority */}
        <div className="flex flex-wrap gap-2 pt-2 sm:pt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`cat-chip-${cat.replace(' ', '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-[9px] tracking-widest uppercase px-3.5 py-2 rounded-full transition-all duration-300 border-2 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-950 text-white border-neutral-950 shadow-md scale-102 font-black'
                  : 'text-neutral-950 hover:text-white hover:bg-[#E5A93C] border-neutral-300 hover:border-[#E5A93C] font-extrabold shadow-sm'
              }`}
            >
              {cat === 'All' ? 'ALL ARCHIVE' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div
        id="projects-container-grid"
        className="w-full relative min-h-[500px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: Math.min(index * 0.04, 0.24) }}
                whileHover={{ y: -6, scale: 1.02 }}
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative bg-neutral-950 aspect-[5/4] rounded-3xl overflow-hidden shadow-lg border-2 border-neutral-200 hover:border-[#E5A93C] transition-all duration-300"
              >
                {/* Card visual background image */}
                <div className="absolute inset-0 z-0 bg-neutral-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-110 group-hover:opacity-60 opacity-80"
                  />
                </div>

                {/* Minimalist Top Bar Details inside image */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-md text-[#111111] text-[9.5px] font-mono tracking-widest uppercase font-black py-1 px-3 rounded-md shadow-md border border-neutral-100">
                    {project.category}
                  </span>
                </div>

                {/* Elegant Hover Overlay container */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 sm:opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="translate-y-0 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[9.5px] text-gold-400 tracking-wider mb-1 font-black">{project.year} / {project.client}</p>
                        <h4 className="font-display font-black text-white text-base md:text-lg tracking-tight uppercase leading-tight group-hover:text-gold-400 transition-colors duration-300">
                          {project.title}
                        </h4>
                      </div>
                      {/* Circle icon with diagonal indicator and direct github access */}
                      <div className="flex items-center gap-2.5">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-neutral-900 border border-neutral-800 text-white hover:bg-[#E5A93C] hover:text-black p-2.5 rounded-full shadow-xl transition-all duration-350 transform scale-90 hover:scale-105 cursor-pointer z-35 flex items-center justify-center hover:shadow-[#E5A93C]/20 hover:shadow-lg"
                            title="Open GitHub Repository"
                          >
                            <Github className="w-4 h-4 shrink-0" />
                          </a>
                        )}
                        <div className="bg-[#E5A93C] text-black p-2.5 rounded-full shadow-xl opacity-100 sm:opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 transform scale-90 group-hover:scale-100">
                          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Render detailed pop-up overlay if requested */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
