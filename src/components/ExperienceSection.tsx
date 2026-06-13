import { motion } from 'motion/react';
import { 
  Briefcase, 
  Building, 
  Calendar, 
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Flame,
  Award
} from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Developer Trainee",
      company: "Intopz IT Solutions Pvt Limited",
      duration: "May 2026 - Present",
      location: "Bangalore, KA",
      type: "Full Stack & Web Engineering",
      isActive: true,
      achievements: [
        "Designing and engineering interactive client-side web dashboards using React and Tailwind CSS frameworks.",
        "Building robust RESTful API endpoints with Node.js and Express to manage high-throughput backend data flows.",
        "Integrating relational and non-relational database structures prioritizing modular schemas and optimized latency.",
        "Securing end-user portals utilizing stateless JSON Web Token (JWT) strategies and unified auth layers.",
        "Deploying collaborative code iterations employing Git version control pipelines and Agile developer workflows."
      ],
      skillsUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL", "Git Version Control", "Tailwind CSS", "REST APIs"],
      metrics: [
        { label: "Rendering Performance", value: "+40% Boost", desc: "Optimized state-management" },
        { label: "Schema Latency", value: "<15ms Mean", desc: "Indexed indexed structures" },
        { label: "Authentication", value: "JWT Guarded", desc: "Stateless security rule compliance" }
      ]
    },
    {
      role: "AWS Cloud Solutions Intern",
      company: "OneData Solutions",
      duration: "Jan 2024 - Feb 2024",
      location: "Coimbatore, TN",
      type: "Cloud Operations & DevOps",
      isActive: false,
      achievements: [
        "Configured secure, serverless backend workflows hosting secure modular environments.",
        "Deployed EC2 virtual environments inside customized VPC subnet definitions.",
        "Configured and scripted AWS Lambda serverless actions triggered on micro-service media uploads.",
        "Connected relational AWS RDS systems for structured, persistent database logging metrics.",
        "Defined strict IAM policies ensuring zero-trust roles and secure access parameters."
      ],
      skillsUsed: ["Amazon Web Services", "Serverless Lambda", "VPC & Subnets", "IAM Security", "Amazon S3", "RDS (SQL)", "CloudWatch"],
      metrics: [
        { label: "Compute SLA Target", value: "99.98% Uptime", desc: "High-integrity hosting setup" },
        { label: "Media Loading", value: "-45% Overhead", desc: "S3 pre-signed parameters" },
        { label: "Compliance State", value: "SOC-2 Ready", desc: "Zero-trust IAM segregation" }
      ]
    },
    {
      role: "Data Science & Machine Learning Intern",
      company: "Krish Tec Science Team",
      duration: "May 2023 - Jun 2023",
      location: "Coimbatore, TN",
      type: "AI Research & Analytics",
      isActive: false,
      achievements: [
        "Constructed end-to-end data pipelines analyzing raw multivariate records, featuring predictive modeling.",
        "Preprocessed high-dimensional complex datasets with Pandas, NumPy, and Scikit-learn.",
        "Developed regression and classification networks tuning hyper-parameters carefully.",
        "Constructed deep insight analytical dashboards using Seaborn and Matplotlib visualization layers.",
        "Synthesized prediction reports that improved outcome accuracy by up to 18%."
      ],
      skillsUsed: ["Python", "Supervised Learning", "Predictive Modeling", "Pandas & NumPy", "Matplotlib & Seaborn", "Scikit-Learn", "Feature Engineering"],
      metrics: [
        { label: "Pipeline Classification", value: "94.2% Test Acc", desc: "Cross-validated generalizability" },
        { label: "Inference Latency", value: "+30% Acceleration", desc: "Optimized tensor vectorizers" },
        { label: "Data Volume", value: "12,500+ Items", desc: "Processed multivariate sets" }
      ]
    }
  ];

  // Professional animation setups
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 }
    }
  };

  return (
    <div id="experience-panel" className="py-16 select-text flex flex-col justify-center min-h-[80vh] max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* 1. Header Navigation Block */}
      <div className="text-left mb-14">
        <div className="flex items-center gap-2 mb-3.5 select-none animate-fade-in">
          <span className="font-mono text-[10px] tracking-widest text-[#E5A93C] font-black uppercase bg-[#E5A93C]/10 px-3.5 py-1 rounded-full inline-block">
            Milestones & Career Timeline
          </span>
        </div>
        <h3 className="font-display font-black text-3xl md:text-4.5xl text-neutral-950 uppercase tracking-tight leading-none">
          INTERNSHIPS & EXPERIENCE
        </h3>
        <p className="text-neutral-500 font-mono text-[10.5px] tracking-wider uppercase mt-3">
          VERIFIED PLACEMENT AUDITS · SYSTEMS DEVELOPMENT · INDUSTRY COMPLIANCE
        </p>
        <div className="w-16 h-1 bg-[#E5A93C] mt-5 rounded-full" />
      </div>

      {/* Intro Description */}
      <p className="text-neutral-600 text-sm md:text-[15px] leading-relaxed font-sans font-medium mb-14 max-w-2xl border-l-[3px] border-neutral-300 pl-4.5 py-0.5">
        A structured portfolio of developer placements and trainee fellowships. Grounded in responsive full-stack platform architecture, public cloud DevOps blueprints, and predictive analytical modeling.
      </p>

      {/* 2. Timeline Grid Feed */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative border-l-2 border-neutral-150 pl-6 sm:pl-12 space-y-12"
      >
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="relative group timeline-node-wrapper"
          >
            {/* Timeline Circle Bullet Node */}
            <div className={`absolute -left-[35px] sm:-left-[59px] top-3.5 w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm ${
              exp.isActive 
                ? "border-[#E5A93C] text-[#E5A93C] ring-4 ring-[#E5A93C]/10" 
                : "border-neutral-300 text-neutral-400 group-hover:border-[#E5A93C] group-hover:text-[#E5A93C]"
            }`}>
              <Briefcase className="w-3 h-3 group-hover:rotate-3 transition-transform duration-300" />
            </div>

            {/* Premium, Fully Upgraded Experience Card */}
            <div className="border border-neutral-200 bg-white hover:border-neutral-350 rounded-2xl p-6 sm:p-8 md:p-9 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.035)] relative overflow-hidden group/card hover:-translate-y-[2px]">
              
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-[4px] transition-all duration-300 ${
                exp.isActive ? "bg-[#E5A93C]" : "bg-neutral-200 group-hover/card:bg-[#E5A93C]/50"
              }`} />

              {/* Meta Row (Role, Company, Location, and Date Badge) */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-6 border-b border-neutral-100">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2 select-none">
                    <span className="font-mono text-[9px] tracking-wider uppercase bg-neutral-100 text-neutral-600 px-2.5 py-0.5 rounded-md font-bold border border-neutral-200/50">
                      {exp.type}
                    </span>
                    {exp.isActive && (
                      <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/50 text-emerald-700 font-mono text-[8.5px] uppercase font-black px-2 py-0.5 rounded-md">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        Active Engagement
                      </span>
                    )}
                  </div>

                  <h4 className="font-display font-black text-xl sm:text-2xl text-neutral-950 uppercase tracking-tight group-hover/card:text-[#E29D24] transition-colors duration-250 flex items-center gap-2 select-text">
                    {exp.role}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/card:opacity-100 text-[#E5A93C] transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-200" />
                  </h4>

                  <div className="flex flex-wrap gap-y-2 gap-x-3.5 items-center text-xs text-neutral-500 font-sans mt-0.5 select-text">
                    <span className="flex items-center gap-1.5 font-bold text-neutral-850 group-hover:text-neutral-950">
                      <Building className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#E5A93C] transition-colors" />
                      {exp.company}
                    </span>
                    <span className="text-neutral-300 select-none">•</span>
                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase text-neutral-600">
                      <MapPin className="w-3 h-3 text-[#E5A93C]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Calendar Date Badge */}
                <div className="text-left md:text-right shrink-0 select-none">
                  <span className={`inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-wider uppercase px-3.5 py-1.5 rounded-xl border font-bold ${
                    exp.isActive 
                      ? "text-[#E5A93C] border-[#E5A93C]/40 bg-[#E5A93C]/5" 
                      : "text-neutral-800 border-neutral-250 bg-neutral-50"
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Verified Metrics Dashboard Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 py-6 border-b border-neutral-100 select-text">
                {exp.metrics.map((metric, mIdx) => (
                  <div 
                    key={mIdx} 
                    className="bg-neutral-50/60 hover:bg-neutral-50 border border-neutral-200 p-4 rounded-xl transition-all duration-250 hover:border-neutral-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[8px] text-neutral-400 block uppercase tracking-widest mb-0.5">
                        {metric.label}
                      </span>
                      <span className="font-display font-black text-[14px] text-neutral-900 tracking-tight block uppercase">
                        {metric.value}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-medium leading-snug mt-1.5 block">
                      {metric.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Achievements Narrative bullets */}
              <div className="space-y-4 py-6 border-b border-neutral-100 select-text">
                <span className="font-mono text-[9px] font-black tracking-widest text-[#E5A93C] uppercase block mb-1.5 select-none">
                  Core Milestones & High-Impact Deliverables
                </span>
                <div className="space-y-3.5">
                  {exp.achievements.map((ach, achIdx) => (
                    <div 
                      key={achIdx} 
                      className="flex items-start gap-4 text-[13px] sm:text-[13.5px] text-neutral-650 leading-relaxed font-sans font-medium hover:text-neutral-950 transition-colors duration-200 group/bullet"
                    >
                      <div className="mt-1 bg-emerald-50 text-emerald-600 p-0.5 rounded-full shrink-0 border border-emerald-250 group-hover/bullet:bg-emerald-500 group-hover/bullet:text-white transition-all duration-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Skill Tag Stack */}
              <div className="pt-6 select-none">
                <div className="flex items-center gap-1.5 mb-3.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5A93C] animate-pulse" />
                  <span className="font-mono text-[9px] font-extrabold text-neutral-400 uppercase tracking-widest block">
                    Core Technologies Deployed
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skillsUsed.map((skill, skIdx) => (
                    <span
                      key={skIdx}
                      className="font-mono text-[10px] font-bold text-neutral-700 bg-neutral-50 px-2.5 py-1 rounded-lg border border-neutral-200 hover:border-[#E5A93C]/40 hover:bg-[#E5A93C]/5 hover:text-[#E29D24] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
