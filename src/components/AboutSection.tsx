import { motion } from 'motion/react';
import { Download, Globe, Smartphone, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { jsPDF } from 'jspdf';

export default function AboutSection() {

  const downloadResume = () => {
    // Instantiate jsPDF with standard margins and professional styling
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const contentWidth = pageWidth - (margin * 2);
    let y = 30;

    // Custom utility for rendering section headers with a classic horizontal rule underneath
    const drawSectionHeader = (title: string) => {
      y += 12; // spacing above section (compact)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(title.toUpperCase(), margin, y);
      y += 3; // slight offset to horizontal line
      doc.setDrawColor(120, 120, 120);
      doc.setLineWidth(0.8);
      doc.line(margin, y, pageWidth - margin, y);
      y += 9; // spacing below line
    };

    // Custom utility to render a two-column row (item title on left, metadata like date/location on right)
    const drawTwoColumnHeader = (leftText: string, rightText: string, isBoldLeft = true, size = 9) => {
      doc.setFont('helvetica', isBoldLeft ? 'bold' : 'normal');
      doc.setFontSize(size);
      doc.text(leftText, margin, y);
      doc.setFont('helvetica', 'normal');
      doc.text(rightText, pageWidth - margin, y, { align: 'right' });
      y += 11;
    };

    // Custom bullet renderer that handles multi-line wrapping elegantly
    const drawBulletPoint = (text: string, indent = 15, size = 8.5) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(size);
      
      // Draw a perfect vector solid black dot bullet point using circle layout instead of unicode characters
      doc.setFillColor(60, 60, 60);
      doc.circle(margin + 8, y - 3, 1.8, 'F');
      
      const textWidth = contentWidth - indent;
      const lines: string[] = doc.splitTextToSize(text, textWidth);
      
      lines.forEach((line) => {
        doc.text(line, margin + indent, y);
        y += 10.5; // compact leading for clean visual rhythm
      });
      y += 2; // subtle separator space
    };

    // 1. PRIMARY CONTACT HEADER BLOCK (Centered, Helvetica, executive finish)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text("GOKUL L", pageWidth / 2, y, { align: 'center' });
    y += 14;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text("P: +91 9597025935 | gokulbontsk8@gmail.com", pageWidth / 2, y, { align: 'center' });
    y += 11;

    doc.text("www.linkedin.com/in/gokulbontsk8 | https://github.com/gokulsk8", pageWidth / 2, y, { align: 'center' });
    y += 10;

    // Helper to dynamically manage page overflow during text layout drawing
    const ensureSpace = (spaceNeeded: number) => {
      if (y + spaceNeeded > 780) {
        doc.addPage();
        y = 40;
      }
    };

    // 1.5 OBJECTIVES
    ensureSpace(120);
    drawSectionHeader("PROFESSIONAL OBJECTIVES");
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text("Career Objective:", margin, y);
    y += 11;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    const coLines = doc.splitTextToSize("To build a successful career in Artificial Intelligence and Data Science by leveraging my technical skills, continuous learning mindset, and passion for innovation to create impactful solutions.", contentWidth);
    coLines.forEach((line: string) => {
      doc.text(line, margin, y);
      y += 10.5;
    });
    y += 4;
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text("Professional Objective:", margin, y);
    y += 11;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    const poLines = doc.splitTextToSize("To contribute to organizational growth through problem-solving, technology, and innovation while continuously enhancing my expertise in AI, Data Science, and Software Development.", contentWidth);
    poLines.forEach((line: string) => {
      doc.text(line, margin, y);
      y += 10.5;
    });
    y += 6;


    // 2. EDUCATION SECTION
    ensureSpace(90);
    drawSectionHeader("EDUCATION");
    
    // KPR Institute Row
    drawTwoColumnHeader("KPR INSTITUTE OF ENGINEERING AND TECHNOLOGY", "Coimbatore, Tamil Nadu.", true, 9.5);
    drawTwoColumnHeader("B.Tech - Artificial Intelligence and Data Science", "2022 - 2026", false, 9);
    drawTwoColumnHeader("Cumulative GPA : 7.91", "Erode, Tamil Nadu.", false, 9);
    y += 4;

    // Saratha Matric Row
    drawTwoColumnHeader("SARATHA MATRIC HIGHER SECONDARY SCHOOL", "Erode, Tamil Nadu.", true, 9.5);
    drawTwoColumnHeader("HSC : 77.3%", "2021-2022", false, 9);
    drawTwoColumnHeader("SSLC : 89.8%", "2019-2020", false, 9);


    // 3. PROJECTS SECTION
    ensureSpace(120);
    drawSectionHeader("PROJECTS");
    
    // To Do Mobile App
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text("To Do Mobile App", margin, y);
    y += 12;
    drawBulletPoint("Developed a Task Management Web App using JavaScript, HTML, and CSS, enabling users to add, complete, and delete tasks while tracking progress with a dynamic progress bar. Converted the Web App into a Mobile Application, ensuring a responsive layout, interactive UI, and seamless task organization by due dates.");
    y += 3;

    // AI-Powered Recipe Chatbot
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text("AI-Powered Recipe Chatbot Web Application", margin, y);
    y += 12;
    drawBulletPoint("Built a full-stack chatbot app using HTML, CSS, JS, Node.js, and MongoDB, enabling users to generate recipes in Tamil and English via natural-language chat.");
    drawBulletPoint("Integrated Google OAuth for secure login and connected the Gemini API to generate AI-powered responses, while building a modern and responsive user interface to make the application user-friendly and efficient.");
    y += 3;

    // Food Order Website
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text("Food Order Website", margin, y);
    y += 12;
    drawBulletPoint("Developed a fully responsive food ordering website using HTML, CSS, and JavaScript, with features that allow users to browse menus, place and track orders, and manage payments, ensuring a smooth and user-friendly experience across devices.");
    drawBulletPoint("Designed an easy-to-use navigation system for quick browsing of food categories and menus.");


    // 4. TECHNICAL SKILLS SECTION
    ensureSpace(100);
    drawSectionHeader("TECHNICAL SKILLS");
    
    const drawTechnicalSkillLine = (category: string, skills: string) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text(category + ": ", margin, y);
      
      const labelWidth = doc.getTextWidth(category + ": ");
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      
      const limitW = contentWidth - labelWidth - 5;
      const lines: string[] = doc.splitTextToSize(skills, limitW);
      lines.forEach((line, idx) => {
        doc.text(line, margin + labelWidth + 5, y);
        if (idx < lines.length - 1) y += 11.5;
      });
      y += 12;
    };

    drawTechnicalSkillLine("Languages", "Python , SQL");
    drawTechnicalSkillLine("Frontend and Framework", "HTML, CSS, Figma");
    drawTechnicalSkillLine("Data Analysis / Visualization", "Numpy , Pandas , Keras , Matplotlib , Seaborn");
    drawTechnicalSkillLine("Tools Platforms", "VS Code , Git , Google Colab , GitHub , AWS (Lambda, EC2, IAM, S3, RDS)");
    drawTechnicalSkillLine("Machine learning / DL", "Supervised Learning, Unsupervised Learning, Neural networks (CNN, RNN)");


    // 5. INTERNSHIP SECTION
    ensureSpace(110);
    drawSectionHeader("INTERNSHIP");

    // AWS Cloud computing row
    drawTwoColumnHeader("OneData Solutions, Coimbatore AWS Cloud Computing Intern", "Jan 2024 - Feb 2024", true, 9.5);
    drawBulletPoint("Completed an internship in AWS Cloud Computing at One Data Solutions, gaining hands-on experience with core AWS services (EC2, S3, RDS, Lambda, IAM) to design and deploy scalable, cost-efficient, and secure cloud-based applications while implementing best practices in architecture, resource optimization, and compliance.");
    y += 4;

    // Krish Tec Row
    drawTwoColumnHeader("Krish Tec, Coimbatore Data Science Intern", "Aug 2023 - Sep 2023", true, 9.5);
    drawBulletPoint("Performed end-to-end data analysis and machine learning tasks, including preprocessing raw datasets (Pandas, NumPy), developing predictive models with feature selection and tuning, and creating insightful visualizations (Matplotlib, Seaborn) for improved decision-making.");


    // 6. ACHIEVEMENTS SECTION
    ensureSpace(80);
    drawSectionHeader("ACHIEVEMENTS");
    drawBulletPoint("Certifications: NASSCOM (Acquiring Data), Coursera (Python, HTML and CSS), Industrial 4.0 and Industrial of Things, NPTEL (Data Analytics with Python).");
    drawBulletPoint("Competitions and Workshops: All-India Inter University Roller Skating Championship - 2022, 2023, 2024, 2025 | TNSSCA National Championship - 2024, 2025 (Overall Championship) | Paper presentation on Next-Gen Website Development at CIT.");


    // 7. LEADERSHIP ACTIVITIES SECTION
    ensureSpace(50);
    drawSectionHeader("LEADERSHIP ACTIVITIES");
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    
    // Use drawing circles for clean bullet indicators
    doc.setFillColor(50, 50, 50);
    doc.circle(margin + 5, y - 3, 1.8, 'F');
    doc.text("District Team Captain - Sports (Skating)", margin + 12, y);

    doc.circle(pageWidth / 2 + 25, y - 3, 1.8, 'F');
    doc.text("Sports Event Organizer", pageWidth / 2 + 32, y);
    y += 14;


    // 8. DECLARATION SECTION
    ensureSpace(40);
    drawSectionHeader("DECLARATION");
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.text("I Gokul L, declare that the information stated above is accurate to the best of my knowledge.", margin, y);


    // Trigger direct in-browser download of the finalized PDF file
    doc.save('Gokul_L_Resume.pdf');
  };

  return (
    <div id="about-panel" className="py-0.5 select-none flex flex-col justify-center w-full max-w-full">
      {/* 1. Dashboard title in clean dashed border frame (strictly matches image draft with a simple, high-end professional feel) */}
      <div 
        id="about-dashed-header" 
        className="border-[1.5px] border-dashed border-neutral-400 bg-neutral-200/25 py-3 px-4 md:py-4 md:px-8 mb-3 rounded-none text-center select-none cursor-default"
      >
        <h3 className="font-sans font-black text-3.5xl sm:text-4.5xl md:text-[50px] text-black uppercase tracking-[0.22em] leading-none mb-0 select-none">
          ABOUT ME
        </h3>
      </div>

      {/* 2. Subtitle with clean formatting: Name, Role (strictly matches the uploaded image representation) */}
      <h4 id="about-subtitle" className="font-sans text-base sm:text-lg md:text-[19px] mb-3.5 leading-snug text-center sm:text-left select-none">
        <span className="text-black font-semibold">I'm </span>
        <span className="font-black text-black">Gokul L,</span>{" "}
        <span className="font-bold text-neutral-800">AI Engineer / Cloud Architect</span>
      </h4>

      {/* 3. Biography text block (enhanced layout for maximum visibility of these important 3 lines) */}
      <p id="about-bio-text" className="text-neutral-950 text-[13.5px] sm:text-base md:text-[16.5px] leading-relaxed mb-4.5 font-sans font-semibold text-center sm:text-left tracking-wide">
        {PERSONAL_INFO.fullBio}
      </p>

      {/* 4. Action Bar containing Resume PDF Download Button with Premium architectural 3D depth shadow */}
      <div id="about-action-bar" className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-neutral-300">
        <div>
          <motion.button
            onClick={downloadResume}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#E5A93C] hover:bg-neutral-950 text-neutral-950 hover:text-white py-2 px-5 sm:py-2.5 sm:px-6 rounded-none font-sans text-[11px] tracking-widest font-black uppercase transition-all duration-300 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer border border-neutral-900"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </motion.button>
        </div>
      </div>

      {/* 5. Dual split details (Metrics Box vs capabilities) */}
      <div id="about-split-details" className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
        
        {/* Left Side: Dark box containing Key Performance Metrics in 2x2 grid with divider lines (strictly sharp rounded-none block) */}
        <div id="about-metrics-col" className="md:col-span-12 lg:col-span-7 flex flex-col justify-stretch">
          <div className="bg-black text-white p-6 sm:p-8 rounded-none shadow-xl relative overflow-hidden flex-grow flex flex-col justify-center min-h-[220px] lg:min-h-0 border border-neutral-900">
            {/* Subtle mesh background visual dot pattern in gorgeous dark gold */}
            <div className="absolute inset-0 bg-[radial-gradient(#E5A93C_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-15 pointer-events-none" />
            
            {/* 2x2 Grid with absolute crosshair grid lines */}
            <div className="grid grid-cols-2 gap-y-7 gap-x-4 relative z-10 my-auto py-2">
              {/* Vertical Cross Divider */}
              <div className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-neutral-700/60 -translate-x-1/2" />
              {/* Horizontal Cross Divider */}
              <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-neutral-700/60 -translate-y-1/2" />
              
              {/* Metric 1 */}
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-[#E5A93C] font-sans font-black text-3.5xl sm:text-4.5xl lg:text-[46px] tracking-tight leading-none mb-1.5 select-none">
                  7.91
                </span>
                <span className="font-sans text-[8.5px] lg:text-[9.5px] tracking-[0.15em] text-neutral-300 font-bold uppercase leading-tight select-none">
                  B.Tech AI & DS GPA
                </span>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-[#E5A93C] font-sans font-black text-3.5xl sm:text-4.5xl lg:text-[46px] tracking-tight leading-none mb-1.5 select-none">
                  6+
                </span>
                <span className="font-sans text-[8.5px] lg:text-[9.5px] tracking-[0.15em] text-neutral-300 font-bold uppercase leading-tight select-none">
                  PROJECTS COMPLETED
                </span>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col items-center justify-center text-center p-2 pt-3">
                <span className="text-[#E5A93C] font-sans font-black text-3.5xl sm:text-4.5xl lg:text-[46px] tracking-tight leading-none mb-1.5 select-none">
                  8+
                </span>
                <span className="font-sans text-[8.5px] lg:text-[9.5px] tracking-[0.15em] text-neutral-300 font-bold uppercase leading-tight select-none">
                  AWS SERVICES USED
                </span>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col items-center justify-center text-center p-2 pt-3">
                <span className="text-[#E5A93C] font-sans font-black text-3.5xl sm:text-4.5xl lg:text-[46px] tracking-tight leading-none mb-1.5 select-none">
                  3
                </span>
                <span className="font-sans text-[8.5px] lg:text-[9.5px] tracking-[0.15em] text-neutral-300 font-bold uppercase leading-tight select-none">
                  PROF. INTERNSHIPS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: What I Do list */}
        <div id="about-info-col" className="md:col-span-12 lg:col-span-5 flex flex-col justify-center">
          <h5 className="font-sans font-black text-black text-[15px] sm:text-[17px] md:text-lg tracking-wide uppercase mb-3 pb-1 border-b-2 border-black/95 flex items-center justify-between select-none">
            <span>What I Do?</span>
          </h5>

          <div className="space-y-3">
            {/* Capability 1: WEB DEVELOPMENT */}
            <div className="flex items-start gap-3 p-1 rounded-none transition-all duration-300 group border border-transparent">
              <div className="p-0.5 text-neutral-950 rounded-none flex-shrink-0 group-hover:text-[#E5A93C] transition-colors duration-300">
                <Globe className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <div>
                <h6 className="font-sans font-black text-neutral-950 text-[11.5px] sm:text-xs md:text-[12.5px] tracking-wide uppercase mb-0.5 leading-tight">
                  Web Development
                </h6>
                <p className="text-neutral-900 text-[10.5px] sm:text-[11px] md:text-xs leading-relaxed font-medium">
                  Developing robust, fast, and responsive web systems using modern tools like React, Tailwind CSS, Python, and SQL databases, maintaining search engine optimization and premium styling.
                </p>
              </div>
            </div>

            {/* Capability 2: MOBILE APP DESIGN */}
            <div className="flex items-start gap-3 p-1 rounded-none transition-all duration-300 group border border-transparent">
              <div className="p-0.5 text-neutral-950 rounded-none flex-shrink-0 group-hover:text-[#E5A93C] transition-colors duration-300">
                <Smartphone className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <div>
                <h6 className="font-sans font-black text-neutral-950 text-[11.5px] sm:text-xs md:text-[12.5px] tracking-wide uppercase mb-0.5 leading-tight">
                  App Designing
                </h6>
                <p className="text-neutral-900 text-[10.5px] sm:text-[11px] md:text-xs leading-relaxed font-medium">
                  Designing highly intuitive user interface layouts on Figma, mobile-first layouts, and touch-screen targets with focus on eye safety, viewport parameters, and micro-interactive gestures.
                </p>
              </div>
            </div>

            {/* Capability 3: CLOUD & AI ENG */}
            <div className="flex items-start gap-3 p-1 rounded-none transition-all duration-300 group border border-transparent">
              <div className="p-0.5 text-neutral-950 rounded-none flex-shrink-0 group-hover:text-[#E5A93C] transition-colors duration-300">
                <Cpu className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <div>
                <h6 className="font-sans font-black text-neutral-950 text-[11.5px] sm:text-xs md:text-[12.5px] tracking-wide uppercase mb-0.5 leading-tight">
                  AI Systems & Cloud Architecture
                </h6>
                <p className="text-neutral-900 text-[10.5px] sm:text-[11px] md:text-xs leading-relaxed font-medium">
                  Leveraging deep algorithms to construct NLP bots using the Gemini API, alongside cloud architecture workflows in EC2, S3 bucket storage, serverless AWS Lambda, and secure IAM policies.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

