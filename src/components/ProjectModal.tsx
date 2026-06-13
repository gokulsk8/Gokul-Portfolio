import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ArrowLeft,
  Calendar, 
  User, 
  ArrowUpRight, 
  CheckCircle2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Send, 
  Bot, 
  ChefHat, 
  Check, 
  Languages, 
  ChevronRight, 
  Clock, 
  Flame, 
  Plus, 
  RefreshCw, 
  Trash2,
  Terminal,
  Network,
  Database,
  Cpu,
  Layers,
  ShieldCheck,
  ShieldAlert,
  Sliders,
  Eye,
  Activity,
  ShoppingBag,
  CheckCircle,
  HelpCircle,
  Play
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// -------------------------------------------------------------
// BILINGUAL RECIPE DATABASE FOR PROJECT 1 LIVE CHATBOT SIMULATOR
// -------------------------------------------------------------
interface Recipe {
  title: string;
  titleTa: string;
  time: string;
  timeTa: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  difficultyTa: string;
  calories: string;
  caloriesTa: string;
  protein: string;
  carbs: string;
  ingredients: string[];
  ingredientsTa: string[];
  steps: string[];
  stepsTa: string[];
  tip: string;
  tipTa: string;
}

const RECIPES_DB: Record<string, Recipe> = {
  paneer_spinach: {
    title: "Amritsari Lakhnawi Palak Paneer",
    titleTa: "லக்னௌவி பாலக் பன்னீர் (Palak Paneer)",
    time: "25 mins",
    timeTa: "25 நிமிடங்கள்",
    difficulty: "Medium",
    difficultyTa: "மத்திமம்",
    calories: "320 kcal",
    caloriesTa: "320 கலோரிகள்",
    protein: "14g",
    carbs: "8g",
    ingredients: [
      "200g Fresh Indian Paneer (cottage cheese cubes)",
      "1 large bunch Fresh Palak (spinach leaves)",
      "2 medium onions & fresh garlic cloves (minced)",
      "1 tbsp Kasuri Methi (dried fenugreek)",
      "Gourmet spices: Garam masala, cumin, turmeric"
    ],
    ingredientsTa: [
      "200 கிராம் புதிய பன்னீர் துண்டுகள்",
      "1 கட்டு புதிய பாலக்கீரை (பசலைக்கீரை)",
      "2 பெரிய வெங்காயம் மற்றும் நறுக்கிய பூண்டு",
      "1 ஸ்பூன் கசூரி மேத்தி (உலர்ந்த வெந்தய இலைகள்)",
      "மசாலாக்கள்: கரம் மசாலா, சீரகம், மஞ்சள் தூள்"
    ],
    steps: [
      "Blanch spinach leaves in hot boiling water for 2 minutes, then plunge into cold water to maintain bright green color. Blend to a fine puree.",
      "Heat ghee in a pan, sauté onions, ginger-garlic paste until golden, and fold in tomatoes with dry spices.",
      "Pour the spinach puree, simmer on low heat for 5 minutes, and gently fold in the raw paneer cubes.",
      "Top with ghee, heavy cream, and toasted kasuri methi before serving with hot Naan or Jeera rice."
    ],
    stepsTa: [
      "பசலைக்கீரையை கொதிக்கும் நீரில் 2 நிமிடங்கள் வேகவைத்து, பின் குளிர்ந்த நீரில் அலசவும். இதனால் கீரையின் பசுமை நிறம் மாறாது. பின் அதனை நன்கு அரைத்துக் கொள்ளவும்.",
      "ஒரு வாணலியில் நெய் சூடாக்கி வெங்காயம், இஞ்சி-பூண்டு விழுது சேர்த்து பொன்னிறமாக வதக்கி, தக்காளி மற்றும் மசாலாக்களை சேர்க்கவும்.",
      "அரைத்த கீரை விழுதை வதக்கிய கலவையுடன் சேர்த்து 5 நிமிடங்கள் மிதமான தீயில் கொதிக்கவிடவும். அதன் பின் பன்னீர் துண்டுகளை மெதுவாகச் சேர்க்கவும்.",
      "இறுதியாக ஒரு ஸ்பூன் நெய், பிரெஷ் கிரீம் மற்றும் கசூரி மேத்தி தூவி இறக்கவும். சுவையான பாலக் பன்னீர் தயார்."
    ],
    tip: "To make paneer cubes exceptionally soft, soak them in hot water for 5 minutes before adding to the simmer!",
    tipTa: "பன்னீர் மிக மிருதுவாக இருக்க, சமைப்பதற்கு முன் அதனை 5 நிமிடங்கள் வெதுவெதுப்பான நன்னீரில் ஊற வையுங்கள்!"
  },
  chicken: {
    title: "Madurai Pepper Chicken Chettinad",
    titleTa: "மதுரை செட்டிநாடு மிளகு கோழி (Pepper Chicken)",
    time: "30 mins",
    timeTa: "30 நிமிடங்கள்",
    difficulty: "Medium",
    difficultyTa: "மத்திமம்",
    calories: "410 kcal",
    caloriesTa: "410 கலோரிகள்",
    protein: "28g",
    carbs: "5g",
    ingredients: [
      "350g Lean Chicken cuts",
      "2 tbsp Fresh black pepper (coarsely ground)",
      "10-12 Curry leaves & shallots (small onions)",
      "1 tbsp Fennel seeds and mustard seeds",
      "Fresh ginger-garlic paste & turmeric"
    ],
    ingredientsTa: [
      "350 கிராம் சிக்கன் துண்டுகள்",
      "2 ஸ்பூன் புதிய கருப்பு மிளகுத் தூள்",
      "12 கறிவேப்பிலை மற்றும் சின்ன வெங்காயம்",
      "1 ஸ்பூன் சோம்பு மற்றும் கடுகு",
      "புதிய இஞ்சி-பூண்டு விழுது மற்றும் மஞ்சள் தூள்"
    ],
    steps: [
      "Dry roast black peppercorns and fennel seeds together. Grind them into a coarse powder.",
      "Heat sesame oil in a heavy-bottom pan. Sauté mustard, curry leaves, and minced shallots until light brown.",
      "Add chicken thighs, ginger-garlic paste, salt and turmeric. Cover and let it sweat in its own juices for 12 minutes.",
      "Incorporate the ground pepper-fennel powder and roast dry on high heat for 5 minutes until dark gravy coat forms."
    ],
    stepsTa: [
      "மிளகு மற்றும் சோம்பை வெறும் வாணலியில் வறுத்து கரகரப்பாக பொடித்துக் கொள்ளவும்.",
      "வாணலியில் நல்லெண்ணெய் ஊற்றி கடுகு, கறிவேப்பிலை மற்றும் நறுக்கிய சின்ன வெங்காயம் சேர்த்து வதக்கவும்.",
      "சிக்கன், இஞ்சி-பூண்டு விழுது, உப்பு மற்றும் மஞ்சள் தூள் சேர்க்கவும். நீர் விடாமல் மூடி வைத்து 12 நிமிடங்கள் வேகவிடவும்.",
      "தற்போது அரைத்து வைத்துள்ள மிளகு-சோம்பு தூள் சேர்த்து, வறண்டு சுருண்டு வரும் வரை மிதமான தீயில் 5 நிமிடங்கள் வதக்கி இறக்கவும்."
    ],
    tip: "Using gingelly/sesame oil and shallots (small onions) is key to the true authentic Madurai pepper chicken heat!",
    tipTa: "சின்ன வெங்காயம் மற்றும் நல்லெண்ணெய் பயன்படுத்துவது செட்டிநாடு மிளகு வறுவலுக்கு அசல் சுவையைத் தரும்!"
  },
  mushroom: {
    title: "Tuscan Garlic Herb Butter Mushroom Sauté",
    titleTa: "பூண்டு வெண்ணெய் காளான் வதக்கல் (Garlic Mushroom)",
    time: "15 mins",
    timeTa: "15 நிமிடங்கள்",
    difficulty: "Easy",
    difficultyTa: "எளிது",
    calories: "180 kcal",
    caloriesTa: "180 கலோரிகள்",
    protein: "6g",
    carbs: "4g",
    ingredients: [
      "250g Fresh Button Mushrooms (halved)",
      "4 Cloves Garlic (minced)",
      "2 tbsp Unsalted Butter & Olive Oil",
      "1 tbsp Fresh Parsley or Rosemary",
      "Coarse Sea salt and black pepper"
    ],
    ingredientsTa: [
      "250 கிராம் புதிய காளான்கள் (இரு பாதியாக நறுக்கியது)",
      "4 பூண்டு பற்கள் (நறுக்கியது)",
      "2 ஸ்பூன் வெண்ணெய் மற்றும் ஆலிவ் எண்ணெய்",
      "1 ஸ்பூன் புதிய மல்லித்தழை அல்லது ரோஸ்மேரி",
      "தேவையான கல் உப்பு மற்றும் கருப்பு மிளகுத்தூள்"
    ],
    steps: [
      "Clean mushrooms thoroughly and pat dry. Any residual water will prevent proper caramelization.",
      "Melt butter and olive oil in a skillet. Once hot, add mushrooms in a single layer and pan-fry without stirring for 3 mins.",
      "Add minced garlic, rosemary, and salt. Flip and sauté for another 3-4 minutes until mushrooms are golden brown and tender.",
      "Turn off the heat and garnish with finely chopped parsley and freshly crushed black pepper."
    ],
    stepsTa: [
      "காளான்களை நன்கு சுத்தம் செய்து ஈரப்பதம் இல்லாமல் உலர வைக்கவும். ஈரம் இருந்தால் அவை மொறுமொறுப்பாக மாறாது.",
      "வாணலியில் ஆலிவ் எண்ணெய் மற்றும் வெண்ணெய் சேர்த்து சூடானதும் காளான்களை சேர்த்து 3 நிமிடங்கள் கிளறாமல் வறுக்கவும்.",
      "நறுக்கிய பூண்டு, ரோஸ்மேரி மற்றும் உப்பு சேர்க்கவும். மேலும் 3-4 நிமிடங்கள் திருப்பி வதக்கி பொன்னிறமாக வதக்கவும்.",
      "அடுப்பை அணைத்துவிட்டு, புதிய மல்லித்தழை மற்றும் கருப்பு மிளகுத் தூள் தூவி பரிமாறவும்."
    ],
    tip: "Do not crowd the skillet! If the mushrooms are packed too tightly, they will steam instead of caramelizing.",
    tipTa: "காளான்களை வாணலியில் அதிகமாக நெருக்கமாய் போட வேண்டாம், இல்லையெனில் அவை வறுபடுவதற்குப் பதிலாக வெந்து தண்ணீர் விட்டுவிடும்!"
  },
  default_curry: {
    title: "Malabar Coconut Milk Vegetable Curry",
    titleTa: "மலபார் தேங்காய் பால் காய்கறி கூட்டு (Vegetable Curry)",
    time: "20 mins",
    timeTa: "20 நிமிடங்கள்",
    difficulty: "Easy",
    difficultyTa: "எளிது",
    calories: "250 kcal",
    caloriesTa: "250 கலோரிகள்",
    protein: "4g",
    carbs: "12g",
    ingredients: [
      "2 cups Mixed vegetables (Carrots, Beans, Potatoes)",
      "1 cup Fresh thick Coconut milk",
      "1 stick Cinnamon & cardamom pod",
      "2 Green chilies (slit length-wise)",
      "Curry leaves and coconut oil"
    ],
    ingredientsTa: [
      "2 கப் நறுக்கிய காய்கறிகள் (கேரட், பீன்ஸ், உருளைக்கிழங்கு)",
      "1 கப் கெட்டியான பிரெஷ் தேங்காய் பால்",
      "1 பட்டை மற்றும் ஏலக்காய்",
      "2 பச்சை மிளகாய் (கீறியது)",
      "கறிவேப்பிலை மற்றும் தேங்காய் எண்ணெய்"
    ],
    steps: [
      "Boil the mixed vegetables with green chilies, turmeric, salt, and half cup of water until soft and fork-tender.",
      "Add thin coconut milk and simmer gently for 3 minutes on low heat so that the milk doesn't curdle.",
      "Pour thick coconut milk, turn down heat completely, and let it warm up for just 1 minute. Do not boil.",
      "Drizzle raw coconut oil and scatter fresh curry leaves. Cover with a lid and let it rest for 5 minutes before opening."
    ],
    stepsTa: [
      "கேரட், பீன்ஸ் உருளைக்கிழங்கு போன்ற காயறிகளை பச்சை மிளகாய், மஞ்சள் தூள், உப்பு மற்றும் அரை கப் நீர் சேர்த்து வேகவைக்கவும்.",
      "முதலில் இரண்டாவது தேங்காய் பால் சேர்த்து 3 நிமிடங்கள் மிதமான தீயில் கொதிக்கவிடவும்.",
      "இப்போது முதல் கெட்டியான தேங்காய் பாலை ஊற்றி, தீயை முற்றிலும் குறைக்கவும். 1 நிமிடம் மட்டும் லேசாக சூடானதும் அடுப்பை அணைக்கவும். கொதிக்க வைக்கக் கூடாது.",
      "இறுதியாக பச்சை தேங்காய் எண்ணெய் மற்றும் புதிய கறிவேப்பிலை தூவி மூடி வைக்கவும். 5 நிமிடம் கழித்து பரிமாறவும்."
    ],
    tip: "Always add the thick coconut milk at the very end and never let it boil, or the curry cream will split!",
    tipTa: "கெட்டியான தேங்காய் பாலை எப்போதும் இறுதியில் மட்டுமே சேர்க்க வேண்டும். அதனை கொதிக்க வைத்தால் கூட்டு முறிந்துவிடும்!"
  }
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'specs' | 'demo'>('specs');

  // ==========================================
  // STATION 01 STATES: AI Recipe Chatbot Demo
  // ==========================================
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['Paneer', 'Spinach']);
  const [chatbotLang, setChatbotLang] = useState<'EN' | 'TA'>('EN');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isChefSpicy, setIsChefSpicy] = useState(false);
  const [isBotCooking, setIsBotCooking] = useState(false);
  const [cookingLogs, setCookingLogs] = useState<string[]>([]);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);
  const [chatBubbles, setChatBubbles] = useState<Array<{ sender: 'user' | 'bot'; text: string; recipe?: Recipe }>>([
    { 
      sender: 'bot', 
      text: "Hello! Welcome to ChefGemini's Bilingual Smart Kitchen Sandbox 🧑‍🍳. Select food items from our pantry menu below or input details in English/Tamil, choose your language, and tap 'STREAM RECIPE' to generate beautiful step-by-step cooking cards with real-time vector macros!" 
    }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Available pantry chips
  const pantryIngredients = [
    { name: 'Paneer', icon: '🧀' },
    { name: 'Spinach', icon: '🥬' },
    { name: 'Chicken', icon: '🍗' },
    { name: 'Mushroom', icon: '🍄' },
    { name: 'Egg', icon: '🥚' },
    { name: 'Garlic', icon: '🧄' },
    { name: 'Onion', icon: '🧅' },
    { name: 'Tomato', icon: '🍅' },
    { name: 'Chili', icon: '🌶️' },
    { name: 'Coconut', icon: '🥥' }
  ];

  const toggleIngredient = (name: string) => {
    if (selectedIngredients.includes(name)) {
      setSelectedIngredients(prev => prev.filter(i => i !== name));
    } else {
      setSelectedIngredients(prev => [...prev, name]);
    }
  };

  const executeRecipeQuery = () => {
    if (isBotCooking) return;
    
    // Construct Query String
    let itemsString = selectedIngredients.join(', ');
    if (customPrompt.trim()) {
      itemsString = customPrompt;
    }
    
    if (!itemsString.trim()) {
      alert("Please select ingredients or type a custom prompt first!");
      return;
    }

    const queryText = chatbotLang === 'EN' 
      ? `Suggest a chef-gourmet recipe using: ${itemsString}. Preference: ${isChefSpicy ? 'Spicy Red Pepper' : 'Balanced Herb'}`
      : `சுவையான செய்முறை குறிப்பு வழங்கவும்: ${itemsString}. கார அளவு: ${isChefSpicy ? 'அதிக காரம்' : 'மிதமான காரம்'}`;

    // Append User Chat Bubble
    setChatBubbles(prev => [...prev, { sender: 'user', text: queryText }]);
    setCustomPrompt('');
    setIsBotCooking(true);
    setGeneratedRecipe(null);

    // Dynamic pipeline step compilation logs
    const steps = [
      chatbotLang === 'EN' ? "[LOAD] Slicing token weights and initializing translation dictionaries..." : "[LOAD] மொழிபெயர்ப்பு அகராதிகள் துவக்கப்படுகின்றன...",
      chatbotLang === 'EN' ? "[EMBEDDING] Mapping user parameters inside dense multi-dimensional matrices..." : "[EMBEDDING] உள்ளீட்டு கூறுகள் திசையன் வெக்டர்களாக மாற்றப்படுகின்றன...",
      chatbotLang === 'EN' ? "[LLM] Invoking Google Gemini 1.5 Pro inference engine..." : "[LLM] கூகுள் ஜெமினி-1.5-ப்ரோ மாடல் இணைக்கப்படுகிறது...",
      chatbotLang === 'EN' ? "[COMPILING] Translating culinary details into high-fidelity card layouts..." : "[COMPILING] செய்முறைக் குறிப்புகள் தமிழ் மொழியில் தொகுக்கப்படுகின்றன..."
    ];

    setCookingLogs([steps[0]]);

    setTimeout(() => {
      setCookingLogs(prev => [...prev, steps[1]]);
    }, 600);
    setTimeout(() => {
      setCookingLogs(prev => [...prev, steps[2]]);
    }, 1200);
    setTimeout(() => {
      setCookingLogs(prev => [...prev, steps[3]]);
    }, 1800);

    // Finish processing
    setTimeout(() => {
      // Find matching recipe
      const searchStr = itemsString.toLowerCase();
      let matchedRecipe: Recipe;

      if (searchStr.includes('paneer') || searchStr.includes('spinach') || searchStr.includes('பாலக்') || searchStr.includes('பன்னீர்')) {
        matchedRecipe = RECIPES_DB.paneer_spinach;
      } else if (searchStr.includes('chicken') || searchStr.includes('சிக்கன்') || searchStr.includes('கோழி')) {
        matchedRecipe = RECIPES_DB.chicken;
      } else if (searchStr.includes('mushroom') || searchStr.includes('காளான்')) {
        matchedRecipe = RECIPES_DB.mushroom;
      } else {
        // Build customized default recipe based on user inputs
        matchedRecipe = {
          ...RECIPES_DB.default_curry,
          title: `Chef's Custom ${selectedIngredients.length > 0 ? selectedIngredients.join(' & ') : 'Special'} Medley`,
          titleTa: `சுவையான ${selectedIngredients.length > 0 ? selectedIngredients.map(i => i === 'Paneer' ? 'பன்னீர்' : i === 'Spinach' ? 'கீரை' : i === 'Chicken' ? 'சிக்கன்' : i === 'Mushroom' ? 'காளான்' : i).join(' - ') : 'செஃப் ஸ்பெஷல்'} கூட்டு`
        };
      }

      setGeneratedRecipe(matchedRecipe);
      setIsBotCooking(false);
      setChatBubbles(prev => [
        ...prev, 
        { 
          sender: 'bot', 
          text: chatbotLang === 'EN' 
            ? `Here is your customized recipe! Compiled with zero-latency localization techniques.` 
            : `சுவையான செய்முறை குறிப்பு இதோ! கூகுள் ஜெமினி மூலம் தொகுக்கப்பட்டது.`,
          recipe: matchedRecipe
        }
      ]);
    }, 2500);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatBubbles, isBotCooking, cookingLogs]);

  // ==========================================
  // STATION 02 STATES: AWS Infrastructure Demo
  // ==========================================
  const [awsTerminalLogs, setAwsTerminalLogs] = useState<string[]>([
    "gokul-aws-terminal:~$ init-session --client='OneData Solutions'",
    "Initializing IAM validation protocol...",
    "ACCESS ROLE: Intern_Systems_Architect_Allowed",
    "gokul-aws-terminal:~$ _"
  ]);
  const [awsActiveSubnet, setAwsActiveSubnet] = useState<'IGW' | 'LAMBDA' | 'RDS' | 'S3'>('IGW');
  const [isAwsProbing, setIsAwsProbing] = useState(false);

  const executeAwsProbe = (node: 'IGW' | 'LAMBDA' | 'RDS' | 'S3') => {
    if (isAwsProbing) return;
    setAwsActiveSubnet(node);
    setIsAwsProbing(true);
    setAwsTerminalLogs(prev => [
      ...prev,
      `gokul-aws-terminal:~$ diagnostics-probe --node=${node.toLowerCase()}-service`,
      `[PING] Accessing AWS secure subnet gateway for ${node}...`,
      `Authorization Token: ARNs:10492-intern-gokul checked.`
    ]);

    setTimeout(() => {
      let specificLog = "";
      if (node === 'IGW') {
        specificLog = "[GATEWAY] Public interface 10.0.1.5 connected. IAM Rule verified. Route Tables allowing selective outside ingress.";
      } else if (node === 'LAMBDA') {
        specificLog = "[SERVERLESS] Elastic memory bounds checked. VPC link latency verified at 12ms. cold start bounds set to 120ms.";
      } else if (node === 'RDS') {
        specificLog = "[DATABASE] DB private cluster secured. B-Tree query partition initialized in 14ms. Ready for TLS transactions.";
      } else {
        specificLog = "[STORAGE] S3 Bucket 'pantry-inputs-prod' read-access verified. Ingress triggers online.";
      }

      setAwsTerminalLogs(prev => [
        ...prev,
        specificLog,
        `[STATUS] 200 OK. Node ${node} security compliance 100% stable.`,
        "gokul-aws-terminal:~$ _"
      ]);
      setIsAwsProbing(false);
    }, 1200);
  };

  // ==========================================
  // STATION 03 STATES: Predictive Analytics Demo
  // ==========================================
  const [epochsCount, setEpochsCount] = useState<5 | 10 | 15>(5);
  const [testTrainSplit, setTestTrainSplit] = useState<'80/20' | '70/30'>('80/20');
  const [mlAlgoType, setMlAlgoType] = useState<'RandomForest' | 'GradientBoost'>('RandomForest');
  const [isMlTraining, setIsMlTraining] = useState(false);
  const [mlEpochLog, setMlEpochLog] = useState<string[]>([]);
  const [trainedAccuracy, setTrainedAccuracy] = useState(0.812);
  const [trainedLoss, setTrainedLoss] = useState(0.442);

  const triggerMlTraining = () => {
    if (isMlTraining) return;
    setIsMlTraining(true);
    setMlEpochLog([`[START] Loading Pandas pipeline data... Split calculated at ${testTrainSplit}.`]);

    let count = 0;
    const interval = setInterval(() => {
      count++;
      const currentLoss = Math.max(0.012, Number((0.55 - (count * 0.08) - (Math.random() * 0.04)).toFixed(4)));
      const currentAcc = Math.min(0.985, Number((0.74 + (count * 0.04) + (Math.random() * 0.02)).toFixed(4)));
      
      setTrainedLoss(currentLoss);
      setTrainedAccuracy(currentAcc);
      setMlEpochLog(prev => [
        ...prev,
        `[EPOCH ${count}/${epochsCount}] GridSearch evaluating parameters... Current Loss: ${currentLoss} | Train Accuracy: ${(currentAcc * 100).toFixed(1)}%`
      ]);

      if (count >= epochsCount) {
        clearInterval(interval);
        setMlEpochLog(prev => [
          ...prev,
          `[SUCCESS] Gradient convergence achieved. Optimal parameters saved! Model Type: ${mlAlgoType}. Final ROC-AUC: ${Math.min(0.99, currentAcc + 0.015).toFixed(3)}.`,
          `Ready for production telemetry ingestion.`
        ]);
        setIsMlTraining(false);
      }
    }, 450);
  };

  // ==========================================
  // STATION 04 STATES: To Do Mobile App Simulator
  // ==========================================
  interface TaskItem {
    id: number;
    text: string;
    priority: 'High' | 'Medium' | 'Low';
    completed: boolean;
  }
  const [taskList, setTaskList] = useState<TaskItem[]>([
    { id: 1, text: "Configure AWS VPC and isolate sensitive subnets", priority: 'High', completed: true },
    { id: 2, text: "Interface Google Gemini 1.5 streaming recipe model", priority: 'High', completed: false },
    { id: 3, text: "Build Seaborn Heatmaps for data regression models", priority: 'Medium', completed: false }
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask: TaskItem = {
      id: Date.now(),
      text: newTaskText,
      priority: newTaskPriority,
      completed: false
    };
    setTaskList(prev => [...prev, newTask]);
    setNewTaskText('');
  };

  const toggleTaskCompleted = (id: number) => {
    setTaskList(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTask = (id: number) => {
    setTaskList(prev => prev.filter(t => t.id !== id));
  };

  const completedCount = taskList.filter(t => t.completed).length;
  const progressRatio = taskList.length > 0 ? (completedCount / taskList.length) * 100 : 0;

  // ==========================================
  // STATION 05 STATES: Food Order Cart Simulator
  // ==========================================
  interface FoodItem {
    id: string;
    name: string;
    price: number;
    desc: string;
  }
  const menuList: FoodItem[] = [
    { id: 'f1', name: "Chettinad Spicy Paneer Tikka Sourdough", price: 340, desc: "Bilingual dough recipe with roasted spices and fresh mint chutney" },
    { id: 'f2', name: "Tuscan Garlic Mushroom Butter Bowl", price: 220, desc: "Creamy whole sautéed wild mushrooms tossed with butter and rosemary" },
    { id: 'f3', name: "Madurai Pepper Crispy Salad Wrap", price: 180, desc: "Aromatic black pepper crunched garden vegetables in a spinach tortilla" }
  ];
  const [cartQuantities, setCartQuantities] = useState<Record<string, number>>({ 'f1': 1 });
  const [isOrderingFood, setIsOrderingFood] = useState(false);
  const [orderNotification, setOrderNotification] = useState<string | null>(null);

  const updateCartQty = (id: string, dir: number) => {
    setCartQuantities(prev => {
      const current = prev[id] || 0;
      const nextVal = Math.max(0, current + dir);
      return { ...prev, [id]: nextVal };
    });
  };

  const calculateFoodTotals = () => {
    let subtotal = 0;
    menuList.forEach(item => {
      const qty = cartQuantities[item.id] || 0;
      subtotal += item.price * qty;
    });
    const gstValue = Math.round(subtotal * 0.18);
    const delFee = subtotal > 0 ? 40 : 0;
    const grandTotal = subtotal + gstValue + delFee;
    return { subtotal, gstValue, delFee, grandTotal };
  };

  const { subtotal, gstValue, delFee, grandTotal } = calculateFoodTotals();

  const handlePlaceFoodOrder = () => {
    if (subtotal === 0) return;
    setIsOrderingFood(true);
    setTimeout(() => {
      setIsOrderingFood(false);
      setOrderNotification("Success! Chef is printing your order receipt. Currying started! 🧑‍🍳");
      setCartQuantities({});
      setTimeout(() => setOrderNotification(null), 4000);
    }, 1500);
  };

  // ==========================================
  // STATION 06 STATES: Secured Chat Simulator
  // ==========================================
  const [cryptType, setCryptType] = useState<'AES-256' | 'RSA-2048' | 'ROT-13'>('AES-256');
  const [secureMessageText, setSecureMessageText] = useState('');
  const [isEncryptingMessage, setIsEncryptingMessage] = useState(false);
  const [secureChatLogs, setSecureChatLogs] = useState<Array<{ sender: 'alice' | 'bob' | 'system'; text: string; hash: string; time: string }>>([
    { sender: 'system', text: "SECURE END-TO-END DUPLEX PORT 443 OPENED", hash: "[INITIALIZING INTERACTIVE CIPHER]", time: "10:14:00" },
    { sender: 'alice', text: "Is the AWS server logs database encrypted?", hash: "U2VjdXJlX0xvR3NfMTA0OTI==...", time: "10:14:15" },
    { sender: 'bob', text: "Yes, verified. Checked with SHA-256 checks and VPC TLS is active.", hash: "WjNqNGQ3Y2hlY2tzX2xvY2tlZA==...", time: "10:14:45" }
  ]);
  const [lastProcessedHash, setLastProcessedHash] = useState('U2VjdXJlX0xvR3NfMTA0OTI==...');
  const [sessionKey, setSessionKey] = useState('GOKUL_SESSION_ECDH_KEY_x791B');

  const handleSendSecureMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!secureMessageText.trim() || isEncryptingMessage) return;

    const plainText = secureMessageText;
    setSecureMessageText('');
    setIsEncryptingMessage(true);

    let generatedHash = "";
    try {
      generatedHash = btoa(plainText).substring(0, 22) + "==";
    } catch (err) {
      generatedHash = "ENC_ERR_" + Math.random().toString(36).substring(2, 6).toUpperCase();
    }

    setLastProcessedHash(generatedHash);
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

    setSecureChatLogs(prev => [...prev, {
      sender: 'alice',
      text: plainText,
      hash: generatedHash,
      time: currentTime
    }]);

    setTimeout(() => {
      setIsEncryptingMessage(false);
      const bobReplies = [
        "Symmetric cipher text match verified. Handshake verified.",
        "Decrypting blocks succeeded. All packets are encrypted over AES tunnel.",
        "Response authorized. Let's keep transmitting securely.",
        "Handshake signature remains stable. Access node parameters secured."
      ];
      const randReply = bobReplies[Math.floor(Math.random() * bobReplies.length)];
      let bobHash = "";
      try {
        bobHash = btoa(randReply).substring(0, 22) + "==";
      } catch (err) {
        bobHash = "ENC_BOB_ERR==";
      }

      setLastProcessedHash(bobHash);
      setSecureChatLogs(prev => [...prev, {
        sender: 'bob',
        text: randReply,
        hash: bobHash,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      }]);
    }, 1600);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <motion.div
      id="project-detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-neutral-950/90 backdrop-blur-md z-[9999] flex items-center justify-center p-3 md:p-6 select-none cursor-pointer"
    >
      <motion.div
        id="project-dialog-body"
        initial={{ scale: 0.96, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 15, opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-black max-w-5xl w-full rounded-3xl shadow-2xl relative max-h-[92vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border-2 border-neutral-200 cursor-default"
      >
        {/* Close Button rendered at the bottom for always-on-top rendering order */}

        {/* ========================================== */}
        {/* LEFT COLUMN: CONSISTENT MEDIA & REPO LINKS */}
        {/* ========================================== */}
        <div id="modal-image-panel" className="w-full md:w-[40%] bg-neutral-950 flex flex-col justify-start border-b md:border-b-0 md:border-r border-neutral-200 shrink-0 md:h-full md:overflow-hidden">
          <div className="relative aspect-video md:aspect-auto md:flex-grow md:flex-1 md:h-0 md:min-h-0 bg-neutral-100 overflow-hidden shrink-0">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-[600ms] hover:scale-105"
            />
            {/* Visual glow gradient on top slice */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
            
            {/* Text tags overlayed over Left Panel Image */}
            <div className="absolute left-5 bottom-5 text-left text-white space-y-1">
              <span className="bg-[#E5A93C] text-black py-0.5 px-2 text-[9px] font-mono tracking-widest uppercase rounded-sm font-black shadow-md block w-max">
                {project.category}
              </span>
              <p className="font-mono text-[8px] text-[#E5A93C]/90 tracking-widest font-extrabold">RELEASE // {project.year}</p>
              <h5 className="font-display font-black text-xl text-white uppercase tracking-tight leading-none mt-1">
                {project.title}
              </h5>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN: EXPERIMENTAL TABS SYSTEM */}
        {/* ========================================== */}
        <div id="modal-info-panel" className="w-full md:w-[60%] p-6 md:p-8 flex flex-col min-h-0 md:h-full md:overflow-hidden relative">
          
          {/* Segmented Tab Selectors */}
          <div className="flex flex-col sm:flex-row border-b border-[#E5A93C]/20 pb-2.5 mb-6 gap-3 sm:justify-between sm:items-center shrink-0">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-black tracking-widest uppercase transition-all cursor-pointer border-2 ${
                  activeTab === 'specs'
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900 border-transparent hover:bg-neutral-100'
                }`}
              >
                TECHNICAL SPECS
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-black tracking-widest uppercase transition-all cursor-pointer border-2 flex items-center gap-1.5 ${
                  activeTab === 'demo'
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900 border-transparent hover:bg-neutral-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                <span>LIVE PLAYGROUND</span>
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-black tracking-widest uppercase transition-all cursor-pointer border-2 bg-neutral-950 text-white border-neutral-950 hover:bg-[#E5A93C] hover:text-black hover:border-[#E5A93C] shadow-sm flex items-center gap-1.5 active:scale-95 duration-150"
                >
                  <Github className="w-3.5 h-3.5 shrink-0" />
                  <span>GITHUB SOURCE</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 opacity-80" />
                </a>
              )}
            </div>
          </div>

          {/* Scrollable content on desktop, flat on mobile to avoid nested scrolling */}
          <div id="modal-tab-content-scrollable" className="flex-1 flex flex-col min-h-0 md:overflow-y-auto md:pr-1 custom-scrollbar">
            <AnimatePresence mode="wait">
            
            {/* ========================================== */}
            {/* TAB CONTENT A: SPECIFICATIONS SHEET */}
            {/* ========================================== */}
            {activeTab === 'specs' && (
              <motion.div
                key="specs-tab"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Breadcrumb Info Row */}
                  <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-neutral-400 uppercase mb-2">
                    <span>ARCHIVE INDEX</span>
                    <span>/</span>
                    <span>{project.client}</span>
                  </div>

                  {/* Complete Title */}
                  <h4 className="font-display font-black text-2xl text-neutral-950 uppercase tracking-tight leading-none mb-4">
                    {project.title}
                  </h4>

                  {/* Structured Core Intro Description */}
                  <p className="text-neutral-700 text-sm font-medium leading-relaxed mb-6 border-l-2 border-gold-400 pl-4">
                    {project.description}
                  </p>

                  {/* Meta Tables */}
                  <div className="grid grid-cols-2 gap-3 mb-6 bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                    <div className="space-y-0.5 text-left">
                      <span className="flex items-center gap-1.5 text-neutral-450 text-[8.5px] font-mono tracking-wider font-extrabold uppercase">
                        <User className="w-3 h-3 text-gold-500" /> STAKEHOLDER / DECK
                      </span>
                      <p className="text-[12px] font-sans font-black text-neutral-900 uppercase">{project.client}</p>
                    </div>
                    <div className="space-y-0.5 text-left">
                      <span className="flex items-center gap-1.5 text-neutral-450 text-[8.5px] font-mono tracking-wider font-extrabold uppercase">
                        <Calendar className="w-3 h-3 text-gold-500" /> SYSTEM ARCHIVE
                      </span>
                      <p className="text-[12px] font-sans font-black text-neutral-900 uppercase">CALENDAR YEAR {project.year}</p>
                    </div>
                  </div>

                  {/* Dynamic checklist deliverables */}
                  <div className="space-y-2 mb-6">
                    <h5 className="font-mono text-[9px] tracking-widest text-[#E5A93C] uppercase font-black mb-3">
                      ➔ DELIVERABLES & VERIFIED CORE METRICS
                    </h5>
                    <div className="space-y-3">
                      {project.details.map((detailText, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-left text-neutral-800 text-[12.5px] font-medium leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{detailText}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sub Tags pills footer */}
                <div className="mt-auto pt-5 border-t border-neutral-150 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-2.5 py-1 rounded-lg text-[9px] font-mono uppercase tracking-widest"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ========================================== */}
            {/* TAB CONTENT B: DYNAMIC LIVE DEMO EXPERIMENT */}
            {/* ========================================== */}
            {activeTab === 'demo' && (
              <motion.div
                key="demo-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col pr-1"
              >
                {/* Dynamic Back Navigation & Live Status Bar */}
                <div className="flex items-center justify-between mb-4 bg-neutral-55 border border-neutral-200 rounded-xl p-2.5 shadow-sm text-xs shrink-0 select-none">
                  <span className="font-mono text-[9px] text-neutral-500 font-black tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    Interactive Sandbox Connected
                  </span>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className="flex items-center gap-1.5 px-3 py-1 bg-black hover:bg-[#E5A93C] text-white hover:text-black rounded-lg text-[10px] font-mono font-black transition-all cursor-pointer shadow-sm border border-transparent active:scale-95"
                    title="Return to technical documentation"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>BACK TO SPECS</span>
                  </button>
                </div>
                
                {/* ------------------------------------------------------------- */}
                {/* STATION 01 DEMO: AI RECIPE CHATBOT INTERACTIVE SANDBOX MOCK */}
                {/* ------------------------------------------------------------- */}
                {project.id === 'proj-1' && (
                  <div id="recipe-chatbot-simulation-station" className="flex flex-col flex-grow w-full min-h-[380px] md:min-h-[415px]">
                    <div className="bg-neutral-950 text-white rounded-2xl border-2 border-neutral-900 p-4 flex flex-col flex-grow overflow-hidden shadow-inner uppercase-none text-left relative">
                      
                      {/* Interactive header */}
                      <div className="flex justify-between items-center border-b border-neutral-850 pb-2 mb-3 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <ChefHat className="w-4.5 h-4.5 text-[#E5A93C] animate-pulse" />
                          <div>
                            <span className="text-[11px] font-display font-black tracking-tight block">CHEFGEMINI BILINGUAL AI v2.4</span>
                            <span className="text-[8px] font-mono text-emerald-400 font-bold block leading-none">● MODEL ONLINE // LIVE LATENCY 22ms</span>
                          </div>
                        </div>

                        {/* Languages Selection & Settings */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setChatbotLang(prev => prev === 'EN' ? 'TA' : 'EN')}
                            className="bg-neutral-900 hover:bg-neutral-850 px-2.5 py-1 border border-neutral-800 rounded-lg text-[9.5px] font-mono font-black flex items-center gap-1 text-[#E5A93C]"
                            title="Switch translation output language"
                          >
                            <Languages className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{chatbotLang === 'EN' ? 'ENG ➔ தமிழ்' : 'தமிழ் ➔ ENG'}</span>
                          </button>
                          
                          <button
                            onClick={() => setIsChefSpicy(!isChefSpicy)}
                            className={`px-2.5 py-1 border rounded-lg text-[9.5px] font-mono font-black flex items-center gap-1 transition-all ${
                              isChefSpicy ? 'bg-orange-500/10 border-orange-500 text-orange-400' : 'bg-neutral-900 border-neutral-800 text-neutral-450'
                            }`}
                            title="Chef spicy recipe multiplier"
                          >
                            <Flame className="w-3.5 h-3.5" />
                            <span>SPICY</span>
                          </button>
                        </div>
                      </div>

                      {/* Chat Bubbles Scroll container */}
                      <div className="flex-1 overflow-y-auto max-h-[190px] md:max-h-[220px] mb-3 space-y-2.5 pr-1.5 custom-scrollbar text-left text-xs text-white uppercase-none">
                        {chatBubbles.map((bubble, bIdx) => (
                          <div 
                            key={bIdx}
                            className={`flex flex-col max-w-[85%] ${bubble.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                          >
                            <div className={`p-3 rounded-2xl leading-relaxed font-sans font-medium select-text ${
                              bubble.sender === 'user' 
                                ? 'bg-neutral-900 text-[#E5A93C] rounded-tr-none border border-neutral-800' 
                                : 'bg-[#0e0f14] text-neutral-200 rounded-tl-none border border-neutral-900'
                            }`}>
                              {bubble.text}
                            </div>

                            {/* Embedded high fidelity recipe output logic results */}
                            {bubble.recipe && (
                              <div className="w-full mt-2 ring-2 ring-[#E5A93C]/30 bg-neutral-950 p-4 rounded-xl text-left border border-neutral-850 relative overflow-hidden shrink-0 mt-3">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5A93C]/5 rounded-full blur-2xl pointer-events-none" />
                                
                                {/* Recipe Top Specs info banner */}
                                <div className="flex justify-between items-start gap-2 border-b border-neutral-900 pb-2 mb-3">
                                  <div>
                                    <span className="text-[7.5px] font-mono text-neutral-500 block uppercase">RECOMMENDED CUISINE DISCOVERY</span>
                                    <h4 className="font-display font-black text-[13.5px] text-[#E5A93C] leading-tight select-text">
                                      {chatbotLang === 'EN' ? bubble.recipe.title : bubble.recipe.titleTa}
                                    </h4>
                                  </div>
                                  <div className="bg-neutral-900 p-1 rounded border border-neutral-800 shrink-0 text-center font-mono scale-90">
                                    <span className="text-[7px] text-neutral-500 block uppercase leading-none">CALORIES</span>
                                    <span className="text-[9.5px] text-white font-extrabold">{chatbotLang === 'EN' ? bubble.recipe.calories : bubble.recipe.caloriesTa}</span>
                                  </div>
                                </div>

                                {/* Macro blocks charts */}
                                <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-mono mb-3 bg-neutral-900/40 p-1.5 rounded-lg border border-neutral-900">
                                  <div className="space-y-0.5">
                                    <div className="text-[7.5px] text-neutral-500 uppercase">Prep Time</div>
                                    <p className="text-white font-bold flex items-center justify-center gap-1 leading-none">
                                      <Clock className="w-2.5 h-2.5 text-blue-400" />
                                      {chatbotLang === 'EN' ? bubble.recipe.time : bubble.recipe.timeTa}
                                    </p>
                                  </div>
                                  <div className="space-y-0.5">
                                    <div className="text-[7.5px] text-neutral-500 uppercase">Difficulty</div>
                                    <p className="text-[#E5A93C] font-bold uppercase leading-none">
                                      {chatbotLang === 'EN' ? bubble.recipe.difficulty : bubble.recipe.difficultyTa}
                                    </p>
                                  </div>
                                  <div className="space-y-0.5">
                                    <div className="text-[7.5px] text-neutral-500 uppercase">Nutrition</div>
                                    <p className="text-emerald-400 font-bold uppercase leading-none">
                                      P: {bubble.recipe.protein} | C: {bubble.recipe.carbs}
                                    </p>
                                  </div>
                                </div>

                                {/* Dynamic items checklist */}
                                <div className="space-y-1 mb-3 text-left">
                                  <span className="text-[8px] font-mono text-[#E5A93C] block uppercase font-bold">
                                    {chatbotLang === 'EN' ? "Ingredients Required:" : "தேவையான பொருட்கள்:"}
                                  </span>
                                  <div className="grid grid-cols-1 gap-1">
                                    {(chatbotLang === 'EN' ? bubble.recipe.ingredients : bubble.recipe.ingredientsTa).map((ing, iIdx) => (
                                      <div key={iIdx} className="flex items-center gap-1.5 text-[10px] text-neutral-300 font-medium select-text">
                                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                                        <span>{ing}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Recipe Steps blocks */}
                                <div className="space-y-2 text-left">
                                  <span className="text-[8px] font-mono text-[#E5A93C] block uppercase font-bold">
                                    {chatbotLang === 'EN' ? "Cooking Steps:" : "செய்முறை விளக்கம்:"}
                                  </span>
                                  <div className="space-y-1.5">
                                    {(chatbotLang === 'EN' ? bubble.recipe.steps : bubble.recipe.stepsTa).map((step, sIdx) => (
                                      <div key={sIdx} className="text-[10px] text-neutral-300 leading-relaxed font-sans font-medium flex gap-2 select-text">
                                        <span className="text-[#E5A93C] font-mono font-bold">{sIdx + 1}.</span>
                                        <span>{step}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Dynamic Warning or Chef tip */}
                                <div className="mt-3 pt-2.5 border-t border-neutral-900 text-[10px] text-amber-300/90 leading-snug italic flex items-start gap-1.5 bg-amber-500/5 p-2 rounded-lg select-text">
                                  <Sparkles className="w-3.5 h-3.5 text-[#E5A93C] shrink-0 mt-0.5 animate-pulse" />
                                  <span>
                                    <strong className="not-italic uppercase tracking-wider text-[8px] font-mono text-white block">CHEF MASTER TIP:</strong>
                                    {chatbotLang === 'EN' ? bubble.recipe.tip : bubble.recipe.tipTa}
                                  </span>
                                </div>
                              </div>
                            )}

                          </div>
                        ))}

                        {/* Animated streaming compile loader logs */}
                        {isBotCooking && (
                          <div className="mr-auto max-w-[85%] space-y-1">
                            <div className="p-3 bg-neutral-900 rounded-2xl rounded-tl-none border border-neutral-850 text-neutral-400 flex items-center gap-2">
                              <RefreshCw className="w-3.5 h-3.5 text-[#E5A93C] animate-spin" />
                              <span>Gemini model processing pantry vectors...</span>
                            </div>

                            {/* Step compiler prints */}
                            <div className="ml-1 pt-1 space-y-0.5">
                              {cookingLogs.map((logLine, idx) => (
                                <div key={idx} className="text-[8.5px] font-mono text-emerald-500 flex items-center gap-1">
                                  <Check className="w-2.5 h-2.5 text-emerald-500" />
                                  <span>{logLine}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <div ref={chatEndRef} />
                      </div>

                      {/* Pantry items selectors row */}
                      <div className="border-t border-neutral-900 pt-3 mb-2 shrink-0">
                        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest block mb-1.5 font-bold">
                          1. Pantry Items (Click to load inside prompt)
                        </span>
                        
                        <div className="flex flex-wrap gap-1">
                          {pantryIngredients.map((item) => {
                            const isSelected = selectedIngredients.includes(item.name);
                            return (
                              <button
                                key={item.name}
                                onClick={() => toggleIngredient(item.name)}
                                className={`px-2 py-1 rounded-xl text-[10px] font-mono font-bold flex items-center gap-1 transition-all cursor-pointer ${
                                  isSelected 
                                    ? 'bg-[#E5A93C] text-black border-2 border-[#E5A93C] scale-102' 
                                    : 'bg-neutral-900 text-neutral-400 border-2 border-neutral-850 hover:bg-neutral-850 hover:border-neutral-700'
                                }`}
                              >
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Text Send Form controls */}
                      <div className="flex gap-2 shrink-0 pt-1">
                        <input
                          type="text"
                          value={customPrompt}
                          onChange={(e) => setCustomPrompt(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && executeRecipeQuery()}
                          placeholder={chatbotLang === 'EN' ? "Type pantry list... (e.g. Eggs and paneer)" : "அலுவலக காய்கறி பட்டியல்... (எ.கா. தக்காளி, பன்னீர்)"}
                          className="bg-neutral-900 border-2 border-neutral-850 rounded-xl px-3 py-1.5 text-xs text-white placeholder-neutral-500 outline-none flex-1 focus:border-[#E5A93C]"
                        />
                        <button
                          onClick={executeRecipeQuery}
                          disabled={isBotCooking}
                          className="px-4 py-1.5 bg-[#E5A93C] text-black rounded-xl text-xs font-mono font-black active:scale-95 transition-transform disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                        >
                          <span>STREAM</span>
                          <Send className="w-3 h-3 fill-black shrink-0" />
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* STATION 02 DEMO: AWS CLOUD LOGS PROBI INTEGRATED MOCK */}
                {/* ------------------------------------------------------------- */}
                {project.id === 'proj-2' && (
                  <div id="aws-consoles-simulation" className="flex flex-col flex-grow w-full min-h-[380px] md:min-h-[415px]">
                    <div className="bg-neutral-950 p-4 rounded-3xl border-2 border-neutral-900 text-white font-mono text-[10px] flex-grow flex flex-col justify-between overflow-hidden relative select-text">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                      
                      {/* Terminal header */}
                      <div className="flex justify-between items-center bg-neutral-900 p-2.5 rounded-xl border border-neutral-800 text-[9px] mb-3 select-none">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-400" />
                          <span className="w-2 h-2 rounded-full bg-yellow-400" />
                          <span className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="text-blue-400 tracking-widest font-black uppercase">AWS SHELL TERMINAL v1.1 // ONE_DATA_ROLE</span>
                        </div>
                        <span className="animate-pulse text-emerald-400 font-extrabold">SECURE INGRESS OK</span>
                      </div>

                      {/* AWS schematic node array */}
                      <div className="bg-neutral-900/50 border border-neutral-850 p-3 rounded-xl mb-3 flex justify-between items-center text-center gap-2 select-none">
                        <button
                          onClick={() => executeAwsProbe('IGW')}
                          className={`flex-1 p-2 border-2 rounded-xl flex flex-col items-center justify-center transition-all ${
                            awsActiveSubnet === 'IGW' ? 'border-blue-500 bg-blue-500/15' : 'border-neutral-800 text-neutral-400'
                          }`}
                        >
                          <Network className="w-5 h-5 mb-1 text-blue-400" />
                          <span className="font-sans font-bold text-[8.5px]">Elastic IGW</span>
                          <span className="text-[7px]">Internet Gateway</span>
                        </button>
                        <button
                          onClick={() => executeAwsProbe('LAMBDA')}
                          className={`flex-1 p-2 border-2 rounded-xl flex flex-col items-center justify-center transition-all ${
                            awsActiveSubnet === 'LAMBDA' ? 'border-orange-500 bg-orange-500/15' : 'border-neutral-800 text-neutral-400'
                          }`}
                        >
                          <Cpu className="w-5 h-5 mb-1 text-orange-400" />
                          <span className="font-sans font-bold text-[8.5px]">AWS Lambda</span>
                          <span className="text-[7px]">Serverless Ingress</span>
                        </button>
                        <button
                          onClick={() => executeAwsProbe('RDS')}
                          className={`flex-1 p-2 border-2 rounded-xl flex flex-col items-center justify-center transition-all ${
                            awsActiveSubnet === 'RDS' ? 'border-emerald-500 bg-emerald-500/15' : 'border-neutral-80s text-neutral-400'
                          }`}
                        >
                          <Database className="w-5 h-5 mb-1 text-emerald-400" />
                          <span className="font-sans font-bold text-[8.5px]">RDS Postgres</span>
                          <span className="text-[7px]">Private Subnet</span>
                        </button>
                        <button
                          onClick={() => executeAwsProbe('S3')}
                          className={`flex-1 p-2 border-2 rounded-xl flex flex-col items-center justify-center transition-all ${
                            awsActiveSubnet === 'S3' ? 'border-pink-500 bg-pink-500/15' : 'border-neutral-800 text-neutral-400'
                          }`}
                        >
                          <Layers className="w-5 h-5 mb-1 text-pink-400" />
                          <span className="font-sans font-bold text-[8.5px]">S3 Buckets</span>
                          <span className="text-[7px]">Pantry Telemetry</span>
                        </button>
                      </div>

                      {/* Log output stream console box */}
                      <div className="bg-black border border-neutral-900 rounded-xl p-3 flex-1 overflow-y-auto max-h-[170px] space-y-1 custom-scrollbar text-left font-mono">
                        {awsTerminalLogs.map((log, idx) => {
                          let colStr = "text-neutral-300";
                          if (log.startsWith("gokul-aws-terminal")) colStr = "text-amber-500 font-bold";
                          else if (log.includes("Accessing") || log.includes("diagnostics")) colStr = "text-blue-400";
                          else if (log.includes("[STATUS]") || log.includes("Success")) colStr = "text-emerald-400 font-black";
                          
                          return (
                            <div key={idx} className={colStr}>
                              {log}
                            </div>
                          );
                        })}
                        {isAwsProbing && (
                          <div className="text-[#E5A93C] animate-pulse flex items-center gap-1.5 pt-1 font-bold select-none">
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            <span>PINGING ENDPOINTS... CHECKING VPC SECURITY POLICIES</span>
                          </div>
                        )}
                      </div>

                      {/* Quick shell clear */}
                      <div className="flex justify-end mt-2 select-none">
                        <button
                          onClick={() => setAwsTerminalLogs([`gokul-aws-terminal:~$ cleared console history`, `gokul-aws-terminal:~$ _`])}
                          className="px-2.5 py-1 text-[8.5px] bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded font-black cursor-pointer text-neutral-400 uppercase"
                        >
                          Clear Session Shell Log
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* STATION 03 DEMO: PREDICTIVE MACHINE LEARNING ANALYTICAL MOD */}
                {/* ------------------------------------------------------------- */}
                {project.id === 'proj-3' && (
                  <div id="ml-pipeline-simulation" className="flex flex-col flex-grow w-full min-h-[380px] md:min-h-[415px]">
                    <div className="bg-neutral-950 p-4 rounded-3xl border-2 border-neutral-900 text-white flex-grow flex flex-col justify-between text-left relative">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,169,60,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(229,169,60,0.012)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                      {/* Metrics Controls Grid */}
                      <div className="grid grid-cols-3 gap-2.5 mb-3 text-xs font-mono">
                        <div className="bg-neutral-905 p-2 bg-neutral-900 rounded-xl border border-neutral-800">
                          <span className="text-neutral-500 text-[8px] uppercase block">Epochs Boundary</span>
                          <div className="flex gap-1.5 mt-1">
                            {[5, 10, 15].map(v => (
                              <button
                                key={v}
                                onClick={() => setEpochsCount(v as any)}
                                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${epochsCount === v ? 'bg-[#E5A93C] text-black font-black' : 'bg-neutral-950 text-neutral-400'}`}
                              >
                                {v}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="bg-neutral-905 p-2 bg-neutral-900 rounded-xl border border-neutral-800">
                          <span className="text-neutral-500 text-[8px] uppercase block">Train Partition</span>
                          <div className="flex gap-1.5 mt-1">
                            {['80/20', '70/30'].map(v => (
                              <button
                                key={v}
                                onClick={() => setTestTrainSplit(v as any)}
                                className={`px-1 rounded text-[9.5px] font-bold ${testTrainSplit === v ? 'bg-[#E5A93C] text-black font-black' : 'bg-neutral-950 text-neutral-400'}`}
                              >
                                {v}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="bg-neutral-905 p-2 bg-neutral-900 rounded-xl border border-neutral-800">
                          <span className="text-neutral-500 text-[8px] uppercase block">Algorithm Module</span>
                          <select
                            value={mlAlgoType}
                            onChange={(e: any) => setMlAlgoType(e.target.value)}
                            className="bg-neutral-950 text-white font-bold p-0.5 rounded border border-neutral-800 mt-1 outline-none text-[9px] w-full"
                          >
                            <option value="RandomForest">RANDOM FOREST</option>
                            <option value="GradientBoost">XGBOOST REG</option>
                          </select>
                        </div>
                      </div>

                      {/* Metrics summary outcomes */}
                      <div className="grid grid-cols-2 gap-3 mb-3 bg-neutral-900/40 p-3 rounded-2xl border border-neutral-900 text-center font-mono">
                        <div>
                          <span className="text-[7.5px] text-neutral-500 uppercase">CALCULATED MSE LOSS</span>
                          <p className="text-red-400 text-lg font-black">{trainedLoss.toFixed(4)}</p>
                        </div>
                        <div>
                          <span className="text-[7.5px] text-neutral-500">VALIDATION ACCURACY (ROC-AUC)</span>
                          <p className="text-emerald-400 text-lg font-black">{(trainedAccuracy * 100).toFixed(1)}%</p>
                        </div>
                      </div>

                      {/* Training Logger Shell terminal output */}
                      <div className="bg-black border border-neutral-900 rounded-2xl p-3 flex-1 overflow-y-auto max-h-[140px] font-mono text-[9px] text-left">
                        {mlEpochLog.length === 0 ? (
                          <div className="text-neutral-550 italic">System ready to compile. Press "RUN GRIDSEARCH OPTIMIZER" below to trigger hyperparameter solver epochs loop.</div>
                        ) : (
                          mlEpochLog.map((log, lIdx) => (
                            <div key={lIdx} className="text-neutral-300">
                              <span className="text-amber-500 font-black">➔</span> {log}
                            </div>
                          ))
                        )}
                        {isMlTraining && (
                          <div className="text-blue-400 font-extrabold animate-pulse flex items-center gap-1.5 pt-1.5">
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            SHUFFLING GRADIENTS... EVALUATING CLASSIFICATION MATRICES
                          </div>
                        )}
                      </div>

                      {/* Action buttons slider */}
                      <div className="mt-3 flex justify-between items-center bg-neutral-900/60 p-2.5 rounded-xl border border-neutral-850">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest font-bold">TUNERS LINKED SYSTEM</span>
                        <button
                          onClick={triggerMlTraining}
                          disabled={isMlTraining}
                          className="px-4 py-1.5 bg-[#E5A93C] text-neutral-950 font-mono font-black text-xs rounded-lg active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>RUN GRIDSEARCH OPTIMIZER</span>
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* STATION 04 DEMO: INTERACTIVE TO DO CHECKLIST APP WIDGET */}
                {/* ------------------------------------------------------------- */}
                {project.id === 'proj-4' && (
                  <div id="todo-widget-simulation" className="flex flex-col flex-grow w-full min-h-[380px] md:min-h-[415px]">
                    <div className="bg-neutral-950 p-4 rounded-3xl border-2 border-neutral-900 text-white flex-grow flex flex-col justify-between text-left relative">
                      
                      {/* Widget Header with Progress bar */}
                      <div className="border-b border-neutral-900 pb-2.5 mb-3">
                        <div className="flex justify-between items-center mb-1 text-xs font-mono font-black uppercase text-[#E5A93C]">
                          <span>TO DO MOBILE SUITE SANDBOX</span>
                          <span>{completedCount}/{taskList.length} COMPLETED</span>
                        </div>
                        {/* Dynamic Progress Indicator */}
                        <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden border border-neutral-800">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-amber-500 to-[#E5A93C]"
                            animate={{ width: `${progressRatio}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      {/* Active Task Form Input */}
                      <form onSubmit={handleAddTask} className="flex gap-2 mb-3 bg-neutral-900 p-2 rounded-xl border border-neutral-850">
                        <input
                          type="text"
                          value={newTaskText}
                          onChange={(e) => setNewTaskText(e.target.value)}
                          placeholder="Create high-priority task..."
                          className="bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1 text-xs outline-none text-white flex-1 focus:border-[#E5A93C] placeholder-neutral-600"
                        />
                        <select
                          value={newTaskPriority}
                          onChange={(e: any) => setNewTaskPriority(e.target.value)}
                          className="bg-neutral-950 text-white font-mono text-[9px] p-1 border border-neutral-800 rounded-lg"
                        >
                          <option value="High">HIGH</option>
                          <option value="Medium">MED</option>
                          <option value="Low">LOW</option>
                        </select>
                        <button
                          type="submit"
                          className="px-3 bg-[#E5A93C] text-black font-black text-xs rounded-lg active:scale-95 transition-transform cursor-pointer"
                        >
                          ADD
                        </button>
                      </form>

                      {/* Active tasks checklists lists */}
                      <div className="flex-1 overflow-y-auto max-h-[170px] space-y-1.5 pr-1 custom-scrollbar text-xs">
                        {taskList.length === 0 ? (
                          <div className="text-neutral-500 italic text-center py-4">All tasks purged! Standard local checklist clear.</div>
                        ) : (
                          taskList.map(task => (
                            <div 
                              key={task.id}
                              className={`p-2.5 border rounded-xl flex items-center justify-between transition-all ${
                                task.completed 
                                  ? 'bg-neutral-950/20 border-neutral-900 text-neutral-500 line-through' 
                                  : 'bg-neutral-900/60 border-neutral-850 text-white'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                <button
                                  type="button"
                                  onClick={() => toggleTaskCompleted(task.id)}
                                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                                    task.completed ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-neutral-700 bg-neutral-950'
                                  }`}
                                >
                                  {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </button>
                                <span className="font-sans font-medium truncate pr-2">{task.text}</span>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className={`text-[8px] font-mono font-black px-1.5 py-0.2 rounded ${
                                  task.priority === 'High' ? 'bg-red-500/10 text-red-400' :
                                  task.priority === 'Medium' ? 'bg-amber-400/10 text-amber-400' :
                                  'bg-blue-400/10 text-blue-400'
                                }`}>
                                  {task.priority}
                                </span>
                                <button
                                  onClick={() => handleDeleteTask(task.id)}
                                  className="text-neutral-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                                  aria-label="Delete item"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                      {/* Zero Trust warning footer */}
                      <div className="border-t border-neutral-900 pt-3 mt-3 text-center text-[9px] font-mono text-neutral-500 uppercase block tracking-widest flex justify-between items-center">
                        <span>Offline LocalStorage Sync Stack</span>
                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active Stack State</span>
                      </div>

                    </div>
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* STATION 05 DEMO: FOOD ORDERING CHECKOUT CALCULATIVE PLAY */}
                {/* ------------------------------------------------------------- */}
                {project.id === 'proj-5' && (
                  <div id="food-ordering-simulation" className="flex flex-col flex-grow w-full min-h-[380px] md:min-h-[415px]">
                    <div className="bg-neutral-905 p-4 bg-neutral-950 rounded-3xl border-2 border-neutral-900 text-white flex-grow flex flex-col justify-between text-left relative">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.012)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                      {/* Display cart order status */}
                      {orderNotification && (
                        <div className="bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 p-3 rounded-xl text-center text-xs font-sans font-extrabold mb-3 select-text">
                          {orderNotification}
                        </div>
                      )}

                      {/* Curation Menu Items list */}
                      <div className="space-y-2 mb-3">
                        <span className="text-[8px] font-mono text-[#E5A93C] uppercase tracking-widest block font-bold">1. Premium Bilingual Food Cards</span>
                        
                        {menuList.map(item => {
                          const quantity = cartQuantities[item.id] || 0;
                          return (
                            <div key={item.id} className="bg-neutral-900/60 p-2.5 border border-neutral-850 rounded-xl flex items-center justify-between gap-3 text-left">
                              <div className="min-w-0">
                                <h6 className="font-sans font-black text-xs text-[#E5A93C] uppercase truncate">{item.name}</h6>
                                <p className="text-[9.5px] text-neutral-400 truncate font-sans font-medium">{item.desc}</p>
                              </div>

                              <div className="flex items-center gap-3 shrink-0">
                                <span className="font-mono text-xs font-black text-white">₹{item.price}</span>
                                
                                {/* Quantity controls */}
                                <div className="flex items-center gap-1.5 bg-neutral-950 px-2 py-1 rounded-lg border border-neutral-800">
                                  <button
                                    onClick={() => updateCartQty(item.id, -1)}
                                    className="text-[#E5A93C] hover:text-white font-mono text-xs font-bold leading-none px-1 h-max cursor-pointer"
                                  >
                                    -
                                  </button>
                                  <span className="font-mono text-xs font-extrabold text-white w-4 text-center">{quantity}</span>
                                  <button
                                    onClick={() => updateCartQty(item.id, 1)}
                                    className="text-[#E5A93C] hover:text-white font-mono text-xs font-bold leading-none px-1 h-max cursor-pointer"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Interactive Calculative Cart totals blocks */}
                      <div className="bg-neutral-900 border border-neutral-850 p-3 rounded-2xl space-y-1.5 font-mono text-[10px] text-left text-neutral-300">
                        <span className="text-[7.5px] text-neutral-500 uppercase tracking-widest block mb-1 font-bold">2. ACTIVE CALCULATOR TICKET</span>
                        
                        {subtotal === 0 ? (
                          <div className="text-neutral-500 italic text-center py-2">Cart empty. Click '+' modifiers to calculate billing totals.</div>
                        ) : (
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>FOOD SUB-TOTAL</span>
                              <span className="text-white">₹{subtotal}.00</span>
                            </div>
                            <div className="flex justify-between text-[#E5A93C]/80">
                              <span>SGST + CGST LOCAL TAX (18%)</span>
                              <span>₹{gstValue}.00</span>
                            </div>
                            <div className="flex justify-between text-blue-400">
                              <span>AMRITSARI DELIVERY SURCHARGE</span>
                              <span>₹{delFee}.00</span>
                            </div>
                            <div className="flex justify-between border-t border-neutral-800 pt-2 text-xs font-black text-emerald-400">
                              <span>GRAND TOTAL CALCULATED</span>
                              <span>₹{grandTotal}.00</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Checkout button click action */}
                      <div className="mt-3">
                        <button
                          onClick={handlePlaceFoodOrder}
                          disabled={isOrderingFood || subtotal === 0}
                          className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono font-black text-xs rounded-xl active:scale-98 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <ShoppingBag className="w-4 h-4 shrink-0 fill-current" />
                          <span>{isOrderingFood ? 'VALIDATING SECURITY TRANSACTIONS...' : 'CONFIRM & COMPILE PAYMENT ORDER ➔'}</span>
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* STATION 06 DEMO: SECURED CHAT MESSAGING SYSTEM INTERACTIVE */}
                {/* ------------------------------------------------------------- */}
                {project.id === 'proj-6' && (
                  <div id="secure-chat-simulation" className="flex flex-col flex-grow w-full min-h-[380px] md:min-h-[415px]">
                    <div className="bg-neutral-950 p-4 rounded-3xl border-2 border-neutral-900 text-white flex-grow flex flex-col justify-between text-left relative">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.012)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                      {/* Header containing crypt selections */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-900 pb-3 mb-3 shrink-0">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-emerald-400 animate-pulse" />
                          <div>
                            <span className="text-[11px] font-display font-black tracking-tight block">CRYPTOLAB E2EE SIMULATOR v1.0</span>
                            <span className="text-[8px] font-mono text-emerald-400 font-bold block leading-none">● ENCRYPTION LIVE (SSL/TLS v1.3)</span>
                          </div>
                        </div>

                        {/* Crypt Mode Switcher */}
                        <div className="flex items-center gap-1.5 self-stretch sm:self-auto">
                          {(['AES-256', 'RSA-2048', 'ROT-13'] as const).map((algo) => (
                            <button
                              key={algo}
                              type="button"
                              onClick={() => setCryptType(algo)}
                              className={`px-2 py-1 rounded text-[8px] font-mono font-black border transition-all cursor-pointer ${
                                cryptType === algo 
                                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold' 
                                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-850'
                              }`}
                              title={`Switch simulated protocol to ${algo}`}
                            >
                              {algo}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Side-by-Side Terminals Container */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-grow overflow-hidden mb-3">
                        
                        {/* Terminal 1: Alice (Sender) */}
                        <div className="bg-neutral-900/85 p-3 rounded-2xl border border-neutral-850 flex flex-col justify-between h-[155px] md:h-[185px]">
                          <div className="flex justify-between items-center border-b border-neutral-800 pb-1 mb-1.5 shrink-0 select-none">
                            <span className="text-[8.5px] font-mono font-bold text-gray-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                              NODE A: ALICE (SENDER)
                            </span>
                            <span className="text-[7.5px] font-mono text-gray-500 uppercase">TX Channel</span>
                          </div>

                          {/* Message Logs inside Terminal 1 */}
                          <div className="flex-grow overflow-y-auto space-y-1.5 pr-1 text-[9.5px] font-sans custom-scrollbar select-text leading-relaxed">
                            {secureChatLogs.filter(log => log.sender === 'alice' || log.sender === 'system').map((msg, idx) => (
                              <div key={idx} className={`p-1.5 rounded-lg ${msg.sender === 'system' ? 'bg-neutral-950/40 text-gray-500 font-mono text-[8px]' : 'bg-neutral-950/70 border border-neutral-800 text-white'}`}>
                                <div className="flex justify-between items-center text-[7.5px] font-mono text-neutral-500 select-none mb-0.5">
                                  <span>{msg.sender === 'system' ? 'SYSTEM' : 'ALICE'}</span>
                                  <span>{msg.time}</span>
                                </div>
                                <p className="font-semibold text-neutral-200">{msg.text}</p>
                                {msg.hash && (
                                  <div className="font-mono text-[7px] text-[#E5A93C] mt-1 shrink-0 flex items-center gap-1 opacity-90">
                                    <Layers className="w-2.5 h-2.5 shrink-0" />
                                    <span>Payload: {msg.hash}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Terminal 2: Bob (Receiver) */}
                        <div className="bg-neutral-900/85 p-3 rounded-2xl border border-neutral-850 flex flex-col justify-between h-[155px] md:h-[185px]">
                          <div className="flex justify-between items-center border-b border-neutral-800 pb-1 mb-1.5 shrink-0 select-none">
                            <span className="text-[8.5px] font-mono font-bold text-gray-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              NODE B: BOB (RECEIVER)
                            </span>
                            <span className="text-[7.5px] font-mono text-gray-500 uppercase">RX Decrypted</span>
                          </div>

                          {/* Message Logs inside Terminal 2 */}
                          <div className="flex-grow overflow-y-auto space-y-1.5 pr-1 text-[9.5px] font-sans custom-scrollbar select-text leading-relaxed">
                            {secureChatLogs.filter(log => log.sender === 'bob' || log.sender === 'alice' || log.sender === 'system').map((msg, idx) => {
                              const isSelf = msg.sender === 'bob';
                              const isSystem = msg.sender === 'system';
                              return (
                                <div key={idx} className={`p-1.5 rounded-lg ${isSystem ? 'bg-neutral-950/40 text-gray-500 font-mono text-[8px]' : isSelf ? 'bg-indigo-950/50 border border-indigo-900/60 text-white' : 'bg-emerald-950/20 border border-emerald-900/30 text-emerald-200'}`}>
                                  <div className="flex justify-between items-center text-[7.5px] font-mono text-neutral-500 select-none mb-0.5">
                                    <span>{isSystem ? 'SYSTEM' : isSelf ? 'BOB (SUPPORTNODE)' : 'ALICE (ENCRYPTED IN-FLIGHT)'}</span>
                                    <span>{msg.time}</span>
                                  </div>
                                  <div className="flex items-start gap-1 justify-between">
                                    <p className="font-semibold">{msg.text}</p>
                                    {!isSystem && (
                                      <ShieldCheck className="w-2.5 h-2.5 text-emerald-400 shrink-0 mt-0.5" />
                                    )}
                                  </div>
                                  {!isSystem && msg.hash && (
                                    <div className="font-mono text-[7px] text-indigo-400 mt-1 shrink-0 flex items-center gap-1 opacity-90">
                                      <Cpu className="w-2.5 h-2.5 shrink-0" />
                                      <span>Decrypted with ECDH Session Key</span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* Transmission channel diagnostic ticker */}
                      <div className="bg-neutral-950 border border-neutral-900 p-2 rounded-xl text-[8.5px] font-mono text-left space-y-1 select-none">
                        <div className="flex justify-between text-neutral-500 text-[7px]">
                          <span>SECURE TRANSMISSION TUNNEL WIRE MONITOR</span>
                          <span>{cryptType} BLOCK CIPHER ACTIVE</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-blue-400 truncate">
                          <span className="text-neutral-500 shrink-0">ECDH Session ID:</span>
                          <span className="text-white bg-neutral-900 px-1 py-0.5 rounded border border-neutral-850">{sessionKey}</span>
                          <span className="text-neutral-500 shrink-0 ml-1">Last Cipher Hex:</span>
                          <span className="text-emerald-400 truncate">{lastProcessedHash}</span>
                        </div>
                        {isEncryptingMessage && (
                          <div className="text-yellow-400 animate-pulse text-[8px] flex items-center gap-1">
                            <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                            <span>TRANSMITTING BLOCKS AND CALCULATING HMAC AUTHENTICATION TAGS...</span>
                          </div>
                        )}
                      </div>

                      {/* Input console */}
                      <form onSubmit={handleSendSecureMessage} className="mt-3 flex gap-2 shrink-0">
                        <input
                          type="text"
                          value={secureMessageText}
                          onChange={(e) => setSecureMessageText(e.target.value)}
                          placeholder="Type security message (e.g., 'Deploy production logs now')..."
                          disabled={isEncryptingMessage}
                          className="flex-1 bg-neutral-900 hover:bg-neutral-850 focus:bg-neutral-850 px-3 py-2 border border-neutral-800 rounded-xl text-[11px] text-white focus:outline-none focus:ring-1 focus:ring-[#E5A93C] transition-all placeholder-neutral-500"
                        />
                        <button
                          type="submit"
                          disabled={isEncryptingMessage || !secureMessageText.trim()}
                          className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black px-4 py-2 rounded-xl text-[11.5px] font-mono font-black tracking-wide shrink-0 transition-all flex items-center gap-1 active:scale-95 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5 shrink-0" />
                          <span>SEND SECURE</span>
                        </button>
                      </form>

                    </div>
                  </div>
                )}

              </motion.div>
            )}

            </AnimatePresence>
          </div>

        </div>

        {/* Persistent High-Visibility Float Close / Back Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          aria-label="Close details and back to work"
          className="absolute right-4 top-4 bg-neutral-900/95 border border-neutral-850 hover:bg-[#E5A93C] text-white hover:text-black p-2.5 rounded-full transition-all duration-200 z-[999] shadow-xl hover:scale-110 cursor-pointer flex items-center justify-center hover:shadow-[#E5A93C]/20"
          title="Go Back to Normal Page"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>
      </motion.div>
    </motion.div>,
    document.body
  );
}
