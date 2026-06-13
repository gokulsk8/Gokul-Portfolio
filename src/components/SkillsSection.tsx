import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Settings, 
  ArrowUpRight, 
  CheckCircle2, 
  Award 
} from 'lucide-react';

interface TechSkill {
  name: string;
  level: number;
  color: string;
  desc: string;
  category: 'Languages' | 'Frontend' | 'Data Science' | 'Cloud & Backend' | 'Workflow';
  tags: string[];
  logo: ReactNode;
}

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(null);

  const techSkills: TechSkill[] = [
    {
      name: "PYTHON",
      level: 93,
      color: "#FFE873",
      category: "Languages",
      tags: ["Data Analysis", "Predictive Modeling", "Automation Scripts", "Algorithms"],
      desc: "Core programming language for machine learning pipelines, predictive modeling, automation scripts, and server-side logic APIs. Certified by Coursera.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9 2h-.8v3.6H7.5c-1.33 0-2.4 1.07-2.4 2.4s1.07 2.4 2.4 2.4h1.6v.8c0 1.33 1.07 2.4 2.4 2.4h3.6c1.33 0 2.4-1.07 2.4-2.4V7.6c0-1.33-1.07-2.4-2.4-2.4H11.9V2z" fill="#3776AB"/>
          <path d="M12.1 22h.8V18.4h3.6c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4h-1.6v-.8c0-1.33-1.07-2.4-2.4-2.4H8.9C7.57 10.4 6.5 11.47 6.5 12.8v3.6c0 1.33 1.07 2.4 2.4 2.4H12.1V22z" fill="#FFE873"/>
          <circle cx="9.5" cy="6.5" r="0.65" fill="#FFFFFF"/>
          <circle cx="14.5" cy="17.5" r="0.65" fill="#0b132c"/>
        </svg>
      )
    },
    {
      name: "SQL",
      level: 90,
      color: "#00758F",
      category: "Languages",
      tags: ["AWS RDS", "Relational Database", "Query Optimization", "Schema Structuring"],
      desc: "Architecting entity relational models, writing optimized analytics reports queries, and structuring robust SQL database integrations including Amazon RDS schemas.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2.02-10-4.5v-3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v3c0 2.48-4.48 4.5-10 4.5zm0-6c-5.52 0-10-2.02-10-4.5v-3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v3c0 2.48-4.48 4.5-10 4.5z" fill="#00758F"/>
        </svg>
      )
    },
    {
      name: "HTML",
      level: 95,
      color: "#E34F26",
      category: "Frontend",
      tags: ["Semantic Markup", "SEO Protocols", "W3C Compliance", "DOM Structure"],
      desc: "Delivering fully accessible high-performance web structure with standard layouts, optimized semantic markup tags, and SEO configurations.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0z" fill="#E34F26"/>
          <path d="M12 2.18v19.467l6.61-1.875L20.207 4h-8.21z" fill="#EF652A"/>
          <path d="M12 9.423H8.384l-.254-2.855H12V4H5.267l.764 8.577H12v-3.154zM12 16.57v3.13l-.037.01-4.723-1.275-.302-3.385h-3.13l.53 5.95 7.625 2.12v-6.55z" fill="#EAEAEA"/>
          <path d="M12 9.423v3.154h4.484l-.426 4.775L12 18.627v-3.13l2.846-.77L15.15 11h-3.15v1.577z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "CSS",
      level: 92,
      color: "#1572B6",
      category: "Frontend",
      tags: ["Responsive Artboards", "Flexbox & Grid", "Interactive Themes", "Transitions"],
      desc: "Drafting scalable CSS custom styling, layout properties, keyframe transition behaviors, responsive design structures, and tailwind variables templates.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0z" fill="#1572B6"/>
          <path d="M12 2.18v19.467l6.61-1.875L20.207 4h-8.21z" fill="#33A9DC"/>
          <path d="M12 9.423H8.384l-.254-2.855H12V4H5.267l.764 8.577H12v-3.154zM12 16.57v3.13l-.037.01-4.723-1.275-.302-3.385h-3.13l.53 5.95 7.625 2.12v-6.55z" fill="#EAEAEA"/>
          <path d="M12 9.423v3.154h4.484l-.426 4.775L12 18.627v-3.13l2.846-.77L15.15 11h-3.15v1.577z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "FIGMA",
      level: 82,
      color: "#FF7262",
      category: "Frontend",
      tags: ["Atomic UI Design", "Vector Prototypes", "Wireframing", "Component States"],
      desc: "Creating high-fidelity vector UI/UX wireframes, interactive prototype outlines, reusable design kits, style constants, and user workflows.",
      logo: (
        <svg className="w-16 h-16 bg-white rounded-xl p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0a4 4 0 00-4 4 4 4 0 004 4h4V0H8z" fill="#F24E1E"/>
          <path d="M12 0h4a4 4 0 010 8h-4V0z" fill="#FF7262"/>
          <path d="M8 8a4 4 0 00-4 4 4 4 0 004 4h4V8H8z" fill="#A259FF"/>
          <path d="M12 12a4 4 0 014-4 4 4 0 010 8h-4V12z" fill="#1ABCFE"/>
          <path d="M8 16a4 4 0 00-4 4 4 4 0 004 4a4 4 0 004-4v-4H8z" fill="#0ACF83"/>
        </svg>
      )
    },
    {
      name: "AWS",
      level: 88,
      color: "#FF9900",
      category: "Cloud & Backend",
      tags: ["EC2 & S3", "AWS Lambda", "AWS RDS", "IAM Compliance"],
      desc: "Gained AWS Cloud Computing internship training at OneData Solutions. Provisioned scalable architectures with Lambda, EC2, Cloud S3 bucket storage, and IAM policies.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="112" height="112" rx="24" fill="#0F172A" />
          <path d="M78.5 75.2c-5.1 4.5-12.8 6.8-21.2 6.8c-10.4 0-18.1-3.6-21.2-10c-1.1-2.2-1.3-4.1-.3-5.3c1-1.2 3.1-.7 4.9.4c1.2.7 2.2 2 3.1 3.5c2.6 4.3 7.8 6.5 14.8 6.5c6.3 0 11.2-1.5 14.5-4.2c2.1-1.7 3.2-3.8 3.2-6.1c0-3.6-2.6-6-8.9-8.4l-5.6-2.1c-10.6-4-15.6-9.1-15.6-17.2c0-8.9 7-15.7 19-15.7c8.5 0 15 2.1 19.3 5.9c1.6 1.4 1.8 3.3.6 4.6c-1.1 1.2-3.1 1-4.7-.2c-3.1-2.4-7.5-3.8-13.6-3.8c-6.1 0-10.1 1.4-12.4 4c-1.5 1.7-2.1 3.2-2.1 5.1c0 3.1 2.3 5.1 8 7.3l5.3 2c12 4.5 16.9 9.9 16.9 18.5c-.1 6.1-2.9 10.9-7.8 14.6z" fill="#FF9900" />
          <path d="M33 87.2c16 11 41 11.8 59 3.5c2.3-1 4.2 1.5 2.1 3.1c-17.5 13-46 11.2-63-3.6c-1.7-1.5-.1-3.9 1.9-3z" fill="#FF9900" />
          <path d="M90.5 83.2L96 85l1.6 5.8c.4 1.5-1.1 2.5-2.2 1.4L90.5 87l-4.9 5.2c-1.1 1.1-2.6-.1-2.2-1.4l1.6-5.8l5.5-1.8z" fill="#FF9900" />
        </svg>
      )
    },
    {
      name: "PANDAS & NUMPY",
      level: 91,
      color: "#150458",
      category: "Data Science",
      tags: ["Data Wrangling", "Exploratory EDA", "Matrix Arrays", "Dataframes"],
      desc: "Core pipelines for data pre-processing, filtering tabular databases, running numerical computations, and cleaning datasets during Krish Tec Data Science internship.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#4DABCF" />
          <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#150458" />
          <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#FF8000" />
          <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#E20438" />
          <circle cx="6.5" cy="6.5" r="1.5" fill="white" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          <circle cx="6.5" cy="17.5" r="1.5" fill="white" />
          <circle cx="17.5" cy="17.5" r="1.5" fill="white" />
        </svg>
      )
    },
    {
      name: "MATPLOTLIB",
      level: 88,
      color: "#8B5CF6",
      category: "Data Science",
      tags: ["Data Visualization", "Exploratory Plots", "Seaborn Graphs", "Insight Analysis"],
      desc: "Creating rich exploratory layouts, distribution charts, correlation heatmaps, and customizable statistical dashboards to drive data analysis discoveries.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2v19h19" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 14.5c2-2.5 4-4.5 6-1.5s4 4.5 6 1.5 4-4 6-4" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 10.5c2-1.5 4-3.5 6-.5s4 3.5 6 .5 4-3 6-3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          <circle cx="10" cy="13" r="2.5" fill="#60A5FA" />
          <circle cx="16" cy="16" r="2.5" fill="#F43F5E" />
        </svg>
      )
    },
    {
      name: "DEEP LEARNING",
      level: 86,
      color: "#D00000",
      category: "Data Science",
      tags: ["Neural Networks", "CNN Models", "RNN Sequences", "Keras Modeling"],
      desc: "Structuring Artificial Neural Networks (ANN), Convolutional Networks (CNN) for computer vision, and Recurrent Neural Networks (RNN) using Keras packages.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="4" y1="12" x2="10" y2="6" stroke="#D00000" strokeWidth="1.5" />
          <line x1="4" y1="12" x2="10" y2="12" stroke="#D00000" strokeWidth="1.5" />
          <line x1="4" y1="12" x2="10" y2="18" stroke="#D00000" strokeWidth="1.5" />
          <line x1="10" y1="6" x2="18" y2="9" stroke="#D00000" strokeWidth="1.5" />
          <line x1="10" y1="12" x2="18" y2="9" stroke="#D00000" strokeWidth="1.5" />
          <line x1="10" y1="12" x2="18" y2="15" stroke="#D00000" strokeWidth="1.5" />
          <line x1="10" y1="18" x2="18" y2="15" stroke="#D00000" strokeWidth="1.5" />
          <circle cx="4" cy="12" r="2.5" fill="#FFEAE6" stroke="#D00000" strokeWidth="2"/>
          <circle cx="10" cy="6" r="2.5" fill="#FFEAE6" stroke="#D00000" strokeWidth="2"/>
          <circle cx="10" cy="12" r="2.5" fill="#FFEAE6" stroke="#D00000" strokeWidth="2"/>
          <circle cx="10" cy="18" r="2.5" fill="#FFEAE6" stroke="#D00000" strokeWidth="2"/>
          <circle cx="18" cy="9" r="3" fill="#D00000"/>
          <circle cx="18" cy="15" r="3" fill="#D00000"/>
        </svg>
      )
    },
    {
      name: "DEVELOPMENT",
      level: 89,
      color: "#F7DF1E",
      category: "Cloud & Backend",
      tags: ["JavaScript", "Node.js", "MongoDB", "Express API"],
      desc: "Assembling robust web apps using JS, Node.js, and MongoDB. Integrating secure OAuth systems, and linking third-party AI APIs like Gemini to power full-stack chatbots.",
      logo: (
        <svg className="w-16 h-16 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="#0F172A" stroke="#F7DF1E" strokeWidth="1.5" />
          <text x="4" y="16" fill="#F7DF1E" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="bold">JS</text>
          <text x="13" y="16" fill="#68A063" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="bold">N</text>
        </svg>
      )
    },
    {
      name: "MACHINE LEARNING",
      level: 90,
      color: "#4E9F3D",
      category: "Data Science",
      tags: ["Supervised ML", "Unsupervised Cluster", "Model Tuning", "Feature Engineering"],
      desc: "Delivering analytical pipelines, predictive models with custom tuning, feature selection optimizations, and unsupervised data clustering setups.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a5 5 0 00-5 5c0 2.5 1.5 3.5 1.5 5.5v1.5a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-1.5c0-2 1.5-3 1.5-5.5a5 5 0 00-5-5z" stroke="#4E9F3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 18h5M10.5 21h3" stroke="#4E9F3D" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="7.5" r="2" fill="#4E9F3D" />
        </svg>
      )
    },
    {
      name: "GIT & GITHUB",
      level: 92,
      color: "#FFFFFF",
      category: "Workflow",
      tags: ["Branch Systems", "Version Locking", "Pull Requests", "VS Code & Colab"],
      desc: "Maintaining clean branch histories, push protocols, collaborative review reviews, code updates, and utilizing Git version management securely.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" fill="#FFFFFF"/>
        </svg>
      )
    }
  ];

  return (
    <div id="skills-brand-showcase" className="w-full max-w-6xl mx-auto py-10 px-4 select-none relative text-left">
      
      {/* 1. Header Specifying Title */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#E5A93C] font-bold uppercase block mb-1">
            02 / TECH MATRIX
          </span>
          <h3 className="font-sans font-black text-3xl md:text-5xl text-neutral-950 uppercase tracking-tight leading-none">
            TECHNICAL EXPERTISE
          </h3>
          <p className="font-sans text-neutral-700 text-sm md:text-[15px] mt-3.5 max-w-2xl leading-relaxed font-semibold pl-3 border-l-2 border-[#E5A93C]">
            Tap on any technology tile inside the brand catalog block to review full execution contexts, capability stats, and specialized development parameters.
          </p>
        </div>
      </div>

      {/* 2. Brand Grid Layout Matching Referenced Image Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {techSkills.map((tech) => (
          <motion.div
            key={tech.name}
            onClick={() => setSelectedSkill(tech)}
            whileHover={{ y: -4, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative bg-[#0a1128] border-2 border-[#15234f] rounded-lg p-6 hover:bg-[#0f1d46] hover:border-[#1e3477] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center justify-center min-h-[160px] shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            style={{
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.03)`
            }}
          >
            {/* Top-Right Mini Status Dot indicator */}
            <div className="absolute top-2 right-2.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[7.5px] font-mono tracking-widest text-[#38bdf8] font-bold">INFO</span>
            </div>

            {/* Centered High Fidelity Logo */}
            <div className="flex-1 flex items-center justify-center pb-5 pt-2">
              <div className="transition-transform duration-300">
                {tech.logo}
              </div>
            </div>

            {/* Bottom-Left technology text matching image layout design */}
            <span className="absolute bottom-3.5 left-4 text-[11px] font-mono font-black tracking-widest text-[#7E8FBA] group-hover:text-white transition-colors uppercase select-none">
              {tech.name}
            </span>

            {/* Card inner subtle glowing halo */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.14] transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 75%)`
              }} 
            />
          </motion.div>
        ))}
      </div>

      {/* 3. Futuristic Glass-Morphism Specification Overlay Panel */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div 
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#0b1430] border-2 border-[#1c2e64] p-6 sm:p-8 rounded-[28px] max-w-lg w-full relative overflow-hidden shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Overlay engineering blueprints */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4.5 right-4.5 p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Specification Header */}
              <div className="flex items-center gap-4.5 border-b border-[#13224f]/60 pb-5 mb-5 select-none">
                <div className="p-2 bg-[#060b1b] border border-[#1b2f67] rounded-xl shrink-0">
                  {selectedSkill.logo}
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#38bdf8] font-black block mb-0.5">
                    {selectedSkill.category} System Calibration
                  </span>
                  <h4 className="font-sans font-black text-2.5xl text-white tracking-tight uppercase leading-none mt-1">
                    {selectedSkill.name}
                  </h4>
                </div>
              </div>

              {/* Level indicator slider metrics */}
              <div className="mb-5 select-none">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-black">
                    Expertise Calibration Meter
                  </span>
                  <span className="font-mono text-xl text-[#38bdf8] font-extrabold">{selectedSkill.level}%</span>
                </div>
                <div className="w-full bg-[#060b1b] h-2.5 rounded-full overflow-hidden border border-[#1b2a56]">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: selectedSkill.color }}
                  />
                </div>
              </div>

              {/* Descriptive deployment specifications */}
              <div className="space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-extrabold block">Deployment Context</span>
                <p className="text-neutral-300 font-sans text-sm leading-relaxed font-semibold">
                  {selectedSkill.desc}
                </p>
              </div>

              {/* Associated Tags list */}
              <div className="space-y-2 mt-5 select-none">
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-extrabold block">Associated Tools</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSkill.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono text-neutral-200 bg-[#060c1d] border border-[#162758] px-2.5 py-1 rounded-lg font-bold"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom footer button actions */}
              <div className="border-t border-[#13224f]/60 pt-5 mt-6 flex justify-between items-center text-[10.5px] font-mono select-none">
                <span className="text-neutral-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> REPOSITORY STABLE
                </span>
                <span className="text-[#38bdf8] font-black uppercase tracking-wider flex items-center gap-0.5">
                  READY <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Minimal Decorative Bottom Sub-indicator Footnote */}
      <footer className="relative z-10 p-4.5 bg-[#0a112f]/80 border border-[#1a2b64]/60 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-left">
        <div className="flex items-center gap-2.5">
          <Settings className="w-4 h-4 text-blue-500 hidden sm:block shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
          <p className="text-[12px] font-sans text-neutral-400 font-medium">
            Brand directory is built using high-performance vector graphics rendering directly onto modern layout grids.
          </p>
        </div>
        <span className="text-[9px] uppercase font-mono tracking-widest font-black text-[#38bdf8] bg-[#060b1b] border border-[#1c2e64] px-3 py-1.5 rounded-lg inline-block shrink-0 select-none">
          ESTABLISHED STANDARD
        </span>
      </footer>

    </div>
  );
}
