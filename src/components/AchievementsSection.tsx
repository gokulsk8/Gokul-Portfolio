import { motion } from 'motion/react';
import { Trophy, BookOpen, Medal, Sparkles } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <div id="achievements-panel" className="py-2 pr-0 select-none flex flex-col justify-center min-h-[70vh] md:min-h-[85vh]">
      <div id="achievements-header" className="mb-6">

        <h3 className="font-display font-extrabold text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
          HONORS & ACHIEVEMENTS
        </h3>
        <p className="text-neutral-500 text-sm mt-1 max-w-xl font-medium">
          A cohesive balance of rigorous technical intelligence and high-velocity athletic endurance.
        </p>
        <div className="w-12 h-1 bg-gold-400 mt-2.5 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full mt-4">
        {/* Card 1: Academic & Technical Triumphs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          whileHover={{ y: -4, scale: 1.015, borderColor: "#E5A93C", boxShadow: "0 25px 30px -10px rgba(0,0,0,0.08)" }}
          className="border-2 border-neutral-200 bg-neutral-50/50 hover:bg-white p-6 rounded-3xl relative transition-all duration-300 group shadow-md flex flex-col h-full"
        >
          <div className="absolute right-5 top-5 bg-gold-500/10 text-gold-500 p-3 rounded-xl shadow-sm border border-gold-300/30">
            <BookOpen className="w-5 h-5" />
          </div>

          <div className="flex mb-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-neutral-800 uppercase bg-neutral-200/60 px-3 py-1 rounded-full font-black">
              <Medal className="w-2.5 h-2.5 text-gold-500" />
              ACADEMICS & RESEARCH
            </span>
          </div>

          <h4 className="font-display font-black text-lg text-neutral-950 uppercase leading-snug group-hover:text-gold-500 transition-colors">
            Scholarly & Skill Certifications
          </h4>
          
          <p className="text-neutral-500 text-xs mt-1 uppercase tracking-wider font-bold">
            KPR IT & Professional Guilds
          </p>

          <div className="mt-5 pt-4 border-t border-neutral-200 space-y-3.5 flex-grow text-xs md:text-[13px]">
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
              <p className="text-neutral-950 leading-relaxed font-sans font-medium">
                <strong className="text-neutral-950 font-extrabold uppercase text-[11px] block text-gold-650">Paper Presentation at CIT</strong>
                Successfully presented a research paper on <span className="font-bold">"Next-Gen Website Development"</span> at the prestigious Coimbatore Institute of Technology.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
              <p className="text-neutral-950 leading-relaxed font-sans font-medium">
                <strong className="text-neutral-950 font-extrabold uppercase text-[11px] block text-gold-650">NASSCOM Certified</strong>
                Earned the coveted corporate verification for <span className="font-bold">"Acquiring Data"</span> metrics.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
              <p className="text-neutral-950 leading-relaxed font-sans font-medium">
                <strong className="text-neutral-950 font-extrabold uppercase text-[11px] block text-gold-650">NPTEL Certifications</strong>
                Completed elite-grade national courses in <span className="font-bold">"Data Analytics with Python"</span>, <span className="font-bold">"Large Language Models (LLMs)"</span>, and <span className="font-bold">"Introduction to Industry 4.0"</span>.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
              <p className="text-neutral-950 leading-relaxed font-sans font-medium">
                <strong className="text-neutral-950 font-extrabold uppercase text-[11px] block text-gold-650">Technical Credentials</strong>
                Achieved professional domain certifications in <span className="font-bold">Cloud Computing</span>, <span className="font-bold">Python Programming</span>, and <span className="font-bold">Data Science</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Sports & Athletic Triumphs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          whileHover={{ y: -4, scale: 1.015, borderColor: "#E5A93C", boxShadow: "0 25px 30px -10px rgba(0,0,0,0.08)" }}
          className="border-2 border-neutral-200 bg-neutral-50/50 hover:bg-white p-6 rounded-3xl relative transition-all duration-300 group shadow-md flex flex-col h-full"
        >
          <div className="absolute right-5 top-5 bg-gold-500/10 text-gold-500 p-3 rounded-xl shadow-sm border border-gold-300/30">
            <Trophy className="w-5 h-5" />
          </div>

          <div className="flex mb-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-neutral-800 uppercase bg-neutral-200/60 px-3 py-1 rounded-full font-black">
              <Sparkles className="w-2.5 h-2.5 text-gold-500" />
              SPORTS & ATHLETICS
            </span>
          </div>

          <h4 className="font-display font-black text-lg text-neutral-950 uppercase leading-snug group-hover:text-gold-500 transition-colors">
            Speed & Endurance Skating
          </h4>
          
          <p className="text-neutral-500 text-xs mt-1 uppercase tracking-wider font-bold">
            National & State Speed Skating
          </p>

          <div className="mt-5 pt-4 border-t border-neutral-200 space-y-3.5 flex-grow text-xs md:text-[13px]">
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-1.5 shrink-0" />
              <p className="text-neutral-950 leading-relaxed font-sans font-medium">
                <strong className="text-neutral-950 font-extrabold uppercase text-[11px] block text-gold-500">SSFI India Representation</strong>
                Selected to represent India in the prestigious <span className="font-bold">Speed Skating Federation Of India</span> in the years <span className="font-bold">2024</span> and <span className="font-bold">2026</span>.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-1.5 shrink-0" />
              <p className="text-neutral-950 leading-relaxed font-sans font-medium">
                <strong className="text-neutral-950 font-extrabold uppercase text-[11px] block text-gold-650">All-India Inter University</strong>
                Represented in the <span className="font-bold">All-India Inter University Roller Skating Championship</span> consecutively across <span className="font-bold">2022, 2023, 2024, and 2025</span>.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-1.5 shrink-0" />
              <p className="text-neutral-950 leading-relaxed font-sans font-medium">
                <strong className="text-neutral-950 font-extrabold uppercase text-[11px] block text-gold-650">National Overall Championship</strong>
                Won the <span className="font-bold">TNSSCA National Championship Overall Championship</span> title consecutively in <span className="font-bold">2024 and 2025</span>.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-1.5 shrink-0" />
              <p className="text-neutral-950 leading-relaxed font-sans font-medium">
                <strong className="text-neutral-950 font-extrabold uppercase text-[11px] block text-gold-650">Dynamic Kinetic Focus</strong>
                Dedicated track record requiring supreme pacing strategies, extreme spatial awareness, split-second reflexes, and physical endurance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
