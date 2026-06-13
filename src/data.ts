import { Project, SkillCategory, Testimonial } from './types';

export const PERSONAL_INFO = {
  firstName: "Gokul",
  lastName: "L",
  fullName: "GOKUL",
  profession: "AI ENGINEER / CLOUD ENGINEER",
  shortSummary: "Merging academic rigor in Artificial Intelligence with hands-on AWS cloud systems deployment. Building predictive machine learning architectures, secure serverless pipelines, and responsive software applications.",
  fullBio: "I am a B.Tech graduate in Artificial Intelligence and Data Science from the KPR Institute of Engineering and Technology (GPA: 7.91). With dual internships across AWS cloud environments and deep predictive data modeling, I specialize in designing end-to-end pipelines that transform raw metrics into beautiful, actionable business solutions. Driven by performance, verified by sportsmanship.",
  address: "Coimbatore, Tamil Nadu",
  email: "gokulbontsk8@gmail.com",
  phone: "+91 9597025935",
  availablity: "Available for select partnerships & cloud innovation briefs",
  stats: [
    { label: "B.Tech AI & DS GPA", value: "7.91" },
    { label: "Projects Done", value: "6+" },
    { label: "AWS Services Mastered", value: "6+" },
    { label: "Professional Internships", value: "3" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "AI-Powered Recipe Chatbot",
    category: "AI & ML Systems",
    description: "A full-stack bilingual recipe discovery application built with custom layouts, natural language chat, and translated step instructions.",
    details: [
      "Connected Google Gemini API for streaming recipe instructions based on pantry items",
      "Integrated secure user authentication using Google OAuth validation",
      "Engineered multilingual localization support covering both English and Tamil query translation",
      "Constructed custom styling to make the chat experience interactive and eye-safe"
    ],
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    tags: ["Gemini API", "Google OAuth", "Node.js", "AI Assistant"],
    year: "2025",
    client: "Academic Capstone",
    githubUrl: "https://github.com/gokulsk8/Recipechatbot",
    demoUrl: "#recipe-chatbot-demo"
  },
  {
    id: "proj-2",
    title: "AWS Cloud Infrastructure Deployment",
    category: "Cloud Operations",
    description: "Configured secure, serverless backend workflows hosting secure modular environments.",
    details: [
      "Deployed EC2 virtual environments inside customized VPC subnet definitions",
      "Scripted AWS Lambda serverless actions triggered on micro-service media uploads",
      "Connected relational AWS RDS systems for structured, persistent logging metrics",
      "Defined strict IAM policies ensuring zero-trust roles and access parameters"
    ],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["AWS S3", "AWS Lambda", "IAM Policy", "Secure VPC"],
    year: "2024",
    client: "OneData Solutions Intern",
    githubUrl: "https://github.com/gokulbontsk8/aws-cloud-infrastructure"
  },
  {
    id: "proj-3",
    title: "Predictive Data Analysis Engine",
    category: "AI & ML Systems",
    description: "End-to-end data pipelines analyzing raw multivariate records, featuring predictive modeling.",
    details: [
      "Preprocessed high-dimensional datasets with Pandas, NumPy and Scikit-learn",
      "Developed regression and classification networks tuning hyper-parameters carefully",
      "Constructed deep insight analytical charts using Seaborn and Matplotlib visualization layers",
      "Synthesized prediction reports that improved outcome accuracy by up to 18%"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Supervised Learning", "Seaborn", "Data Ingestion", "Analytics Pipeline"],
    year: "2023",
    client: "Krish Tec Science Team",
    githubUrl: "https://github.com/gokulsk8/Novintix-Tasks-"
  },
  {
    id: "proj-4",
    title: "To Do Mobile Application",
    category: "Web Projects",
    description: "A highly intuitive task organization suite featuring automatic prioritization, calendar logs, and progress metrics.",
    details: [
      "Authored custom vanilla JavaScript task engines running offline local states",
      "Integrated a dynamic progress bar that animates instantly upon checkbox toggle",
      "Created highly responsive layout blocks that adapt beautifully to different hand-held screen dimensions",
      "Organized active projects automatically by proximity of due dates and flag weights"
    ],
    imageUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile First", "Vanilla JS", "Local Storage", "Interactive UI"],
    year: "2023",
    client: "Personal Utility Studio",
    githubUrl: "https://github.com/gokulsk8/TO-DO-LIST"
  },
  {
    id: "proj-5",
    title: "High-Performance Food Order Website",
    category: "Web Projects",
    description: "Fully responsive online food curation platform incorporating custom menus, card layouts, and responsive actions.",
    details: [
      "Built clean navigation schemas supporting quick food category filters and items counters",
      "Engineered animated layouts that look premium on mobile screens, tablets, and wide monitors",
      "Written semantic HTML5 code ensuring perfect structural search engine optimization"
    ],
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    tags: ["Responsive Design", "Checkout Flow", "Interactive Menu", "SEO Architecture"],
    year: "2023",
    client: "Commercial Brief",
    githubUrl: "https://github.com/gokulsk8/Food-Order-App"
  },
  {
    id: "proj-6",
    title: "Secured Chat Messaging System",
    category: "Web Projects",
    description: "A dual-terminal secure messaging console highlighting symmetric cryptosystems, live hashing transformations, and end-to-end handshaking.",
    details: [
      "Engineered client-side end-to-end encryption mechanics simulating military-grade AES-256 and custom rotational keys",
      "Constructed a high-fidelity live dual-terminal view (Alice & Bob) to demonstrate transmission and automatic decryption side-by-side",
      "Designed dynamic cipher-text animations illustrating exact moment-by-moment binary and hexadecimal payload encoding",
      "Developed secure signature logs, handshake indicators, and network telemetry outputs ensuring extreme realism"
    ],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Cryptography", "AES-256", "Real-time", "Zero Trust"],
    year: "2025",
    client: "Independent Security Lab",
    githubUrl: "https://github.com/gokulsk8/-secure-chat-messaging-system",
    demoUrl: "#secured-chat-demo"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI, Machine Learning & Analytics",
    skills: [
      { name: "Supervised & Unsupervised Models", level: 88 },
      { name: "Neural Networks (CNN, RNN)", level: 82 },
      { name: "Data Science (Pandas, Numpy)", level: 85 },
      { name: "Visualizations (Matplotlib, Seaborn)", level: 89 }
    ]
  },
  {
    title: "Cloud Infrastructure & Platforms",
    skills: [
      { name: "AWS S3, EC2 & Serverless Lambda", level: 88 },
      { name: "IAM & VPC Network Architecture", level: 78 },
      { name: "SQL & Structured Databases", level: 84 },
      { name: "Git, GitHub & Version Control", level: 76 }
    ]
  },
  {
    title: "Programming & Frontend",
    skills: [
      { name: "Python Programming", level: 80 },
      { name: "HTML & CSS Core Architecture", level: 74 },
      { name: "Figma UI Prototyping", level: 70 },
      { name: "Responsive Web Engineering", level: 72 }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Gokul L showed outstanding commitment during our AWS Cloud internship. His capacity to write clean IAM rules and map RDS databases inside public/private subnets was exemplary.",
    author: "Technical Lead",
    role: "Senior Cloud Solutions Architect",
    company: "OneData Solutions"
  },
  {
    quote: "During his Data Science internship, Gokul developed robust hyper-parameter tuning scripts. He transformed noise into highly clean Seaborn dashboards that made decision-making simple.",
    author: "Senior Data Scientist",
    role: "Research Director",
    company: "Krish Tec Science Team"
  }
];
