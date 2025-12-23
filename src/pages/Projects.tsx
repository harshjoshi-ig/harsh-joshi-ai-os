import { useState } from 'react';
import { 
  Network, 
  Shield, 
  Database, 
  Eye, 
  Gamepad2, 
  Cpu,
  ChevronDown, 
  ChevronUp,
  GitBranch,
  Search,
  Zap,
  Lock,
  Workflow,
  Brain,
  Heart,
  Mail,
  Activity,
  Music,
  ShoppingCart,
  Image,
  MessageSquare
} from 'lucide-react';
import HoloCard from '@/components/HoloCard';
import SectionHeader from '@/components/SectionHeader';
import TechBadge from '@/components/TechBadge';

interface Project {
  id: string;
  category: 'AI SYSTEMS' | 'COMPUTER VISION' | 'GAMES';
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: 'cyan' | 'violet' | 'mixed';
  description: string;
  features: { icon: React.ElementType; title: string; description: string }[];
  techStack: string[];
}

const projects: Project[] = [
  // --- AI SYSTEMS CATEGORY ---
  {
    id: 'employee-ai',
    category: 'AI SYSTEMS',
    title: 'AI-Powered Employee Management',
    subtitle: 'Enterprise HR Automation Platform',
    icon: Workflow,
    color: 'mixed',
    description: 'A modern, enterprise-ready HR platform integrating a FastAPI backend with Groq-powered AI to automate hiring, payroll, and attendance through natural language.',
    features: [
      { icon: Zap, title: 'Stateful AI Assistant', description: 'Groq Llama 3.3 integration with a custom multi-step intent router.' },
      { icon: Shield, title: 'Granular RBAC', description: 'JWT-based security with fine-grained permissions (e.g., employee:read_all).' },
      { icon: Lock, title: 'Audit-First Design', description: 'Middleware capturing all mutating requests for compliance tracking.' },
      { icon: Database, title: 'Global Payroll', description: 'Centralized compensation logic for diverse country datasets.' },
    ],
    techStack: ['FastAPI', 'Groq (Llama 3.3)', 'MongoDB', 'React', 'Docker Compose', 'Pydantic'],
  },
  {
    id: 'nurse-assistant',
    category: 'AI SYSTEMS',
    title: 'Hospital Nurse Assistant',
    subtitle: 'Post-Discharge Care Ecosystem',
    icon: Heart,
    color: 'cyan',
    description: 'A multi-agent healthcare system designed to provide patient support after discharge, handling medicine queries, recovery guidance, and appointment management.',
    features: [
      { icon: GitBranch, title: 'Multi-Agent Router', description: 'Decomposes complex queries into specialized medical tasks.' },
      { icon: MessageSquare, title: 'Contextual Intelligence', description: 'Maintains long-term patient history for personalized recovery advice.' },
      { icon: Activity, title: 'Recovery Summaries', description: 'Generates doctor-friendly summaries of patient recovery and concerns.' },
      { icon: Zap, title: 'Voice Interaction', description: 'Integrated real-time speech-to-text and specialized medical TTS.' },
    ],
    techStack: ['LLaMA 3.1', 'Ollama', 'Python', 'MongoDB', 'Web Speech API', 'MongoEngine'],
  },
  {
    id: 'mcp-recipe-nexus',
    category: 'AI SYSTEMS',
    title: 'Nexus-Cook: MCP Recipe System',
    subtitle: 'Decoupled Agentic Architecture',
    icon: Cpu,
    color: 'mixed',
    description: 'Cutting-edge implementation of the Model Context Protocol (MCP) to separate conversational intent from specialized culinary data generation.',
    features: [
      { icon: Workflow, title: 'Router-Expert Pattern', description: 'Strict separation between intent routing and expert content generation.' },
      { icon: Zap, title: 'FastMCP Integration', description: 'Standardized tool discovery using the industry-standard MCP protocol.' },
      { icon: Network, title: 'Dynamic Routing', description: 'LangChain client that discovers and binds server tools in real-time.' },
    ],
    techStack: ['FastMCP', 'LangChain', 'OpenAI API', 'Python', 'SSE', 'ngrok'],
  },
  {
    id: 'email-mcp-agent',
    category: 'AI SYSTEMS',
    title: 'AI Email Orchestration',
    subtitle: 'Secure Communication Automation',
    icon: Mail,
    color: 'cyan',
    description: 'An MCP-based automation server enabling AI agents to securely manage Gmail inboxes and send encrypted communications.',
    features: [
      { icon: Lock, title: 'OAuth 2.0 Security', description: 'Secure token management for Gmail API interaction.' },
      { icon: Search, title: 'Inbox Intelligence', description: 'Standardized tools for fetching snippets and message summaries.' },
      { icon: Zap, title: 'SMTP Tooling', description: 'Encrypted outgoing email engine using STARTTLS and custom templates.' },
    ],
    techStack: ['FastMCP', 'Google API', 'OAuth 2.0', 'Python', 'SMTPLib'],
  },
  {
    id: 'reddit-intel-engine',
    category: 'AI SYSTEMS',
    title: 'Reddit Intelligence Suite',
    subtitle: 'Semantic Data Orchestration',
    icon: Database,
    color: 'mixed',
    description: 'A data engineering solution for harvesting community insights, transforming unstructured social data into persistent knowledge bases.',
    features: [
      { icon: Search, title: 'Question Mining', description: 'Automated extraction of high-engagement Q&A pairs via Reddit API.' },
      { icon: Network, title: 'Global Trend Analysis', description: 'Real-time identification of significant community discussions.' },
      { icon: Database, title: 'Cloud Persistence', description: 'Deep integration with MongoDB Atlas for structured insight archiving.' },
    ],
    techStack: ['PRAW', 'MongoDB Atlas', 'Streamlit', 'Python', 'Regex'],
  },
  {
    id: 'marketplace-aggregator',
    category: 'AI SYSTEMS',
    title: 'Food Delivery Marketplace Suite',
    subtitle: 'Multi-Platform Integration Engine',
    icon: ShoppingCart,
    color: 'cyan',
    description: 'High-performance data engines for Talabat, Deliveroo, and NoonFood, normalizing complex menu hierarchies across the Middle East.',
    features: [
      { icon: GitBranch, title: 'Deep Menu Parsing', description: 'Reverse-engineered API handlers for nested choice sections and pricing.' },
      { icon: Network, title: 'GraphQL Scraper', description: 'Deliveroo-specific data fusion combining GraphQL and web scraping.' },
      { icon: Zap, title: 'Parallel Execution', description: 'ThreadPoolExecutor implementation for high-volume catalog sync.' },
    ],
    techStack: ['Python', 'GraphQL', 'httpx', 'Asyncio', 'BeautifulSoup4'],
  },
  {
    id: 'voice-ai-tts',
    category: 'AI SYSTEMS',
    title: 'LiveKit Voice AI Framework',
    subtitle: 'Privacy-First Speech Synthesis',
    icon: Zap,
    color: 'mixed',
    description: 'Real-time voice assistant implementation featuring custom offline Text-to-Speech engines for high-performance interaction.',
    features: [
      { icon: Shield, title: 'Offline TTS', description: 'Privacy-focused speech synthesis using custom pyttsx3 integration.' },
      { icon: Activity, title: 'Low-Latency Audio', description: 'Optimized voice pipeline for 24kHz high-fidelity output.' },
      { icon: Network, title: 'LiveKit SDK', description: 'Seamless integration with real-time communication infrastructure.' },
    ],
    techStack: ['LiveKit Agents', 'Pyttsx3', 'PyAudio', 'Python'],
  },
  {
    id: 'spotify-recommender',
    category: 'AI SYSTEMS',
    title: 'Spotify Audio Recommender',
    subtitle: 'Clustering-Based Discovery Engine',
    icon: Music,
    color: 'cyan',
    description: 'Content-based music recommendation engine using Spotify audio features and K-Means clustering to discover similar tracks.',
    features: [
      { icon: Brain, title: 'K-Means Clustering', description: 'Groups tracks based on valence, danceability, and energy profiles.' },
      { icon: Search, title: 'API Discovery', description: 'Spotipy integration to fetch missing audio features in real-time.' },
      { icon: Zap, title: 'Cosine Similarity', description: 'Precision matching for song-to-song recommendation generation.' },
    ],
    techStack: ['Scikit-learn', 'Spotipy', 'Pandas', 'Streamlit', 'Numpy'],
  },
  {
    id: 'slack-rag-assistant',
    category: 'AI SYSTEMS',
    title: 'Llama-2 Slack Intelligence',
    subtitle: 'RAG-Powered Workspace Bot',
    icon: Network,
    color: 'mixed',
    description: 'Enterprise Slack integration utilizing Retrieval-Augmented Generation (RAG) and FAISS for real-time knowledge retrieval.',
    features: [
      { icon: Search, title: 'FAISS Search', description: 'High-speed semantic search across historical knowledge bases.' },
      { icon: Lock, title: 'Socket Mode', description: 'Secure real-time event listening without public HTTP endpoints.' },
      { icon: Brain, title: 'Llama-2 Integration', description: 'Context-aware conversational intelligence within team threads.' },
    ],
    techStack: ['Llama-2', 'FAISS', 'Slack SDK', 'PyMongo', 'Transformers'],
  },

  // --- COMPUTER VISION CATEGORY ---
  {
    id: 'smartcrop-ai',
    category: 'COMPUTER VISION',
    title: 'SmartCrop AI Engine',
    subtitle: 'Automated Face Extraction',
    icon: Eye,
    color: 'violet',
    description: 'Enterprise-grade computer vision solution for automating individual headshot generation from group photography.',
    features: [
      { icon: Brain, title: 'ResNet-10 Detection', description: 'High-precision deep learning model for detecting multiple faces.' },
      { icon: Zap, title: 'Workflow Automation', description: 'Reduces manual cropping time by 95% using intelligent segmentation.' },
      { icon: Database, title: 'Automated Archiving', description: 'Structured file management with integrated ZIP processing.' },
    ],
    techStack: ['OpenCV', 'ResNet-10', 'Flask', 'Tailwind CSS', 'MongoDB'],
  },
  {
    id: 'bg-removal-precise',
    category: 'COMPUTER VISION',
    title: 'AI Background Removal',
    subtitle: 'High-Fidelity Edge Preservation',
    icon: Image,
    color: 'violet',
    description: 'Advanced segmentation pipeline combining Deep Learning with iterative GrabCut refinement for hair-level detail preservation.',
    features: [
      { icon: Lock, title: 'Anatomical Validation', description: 'Enforces shoulder and face visibility checks via MediaPipe Pose.' },
      { icon: Image, title: 'GrabCut Refinement', description: 'Iterative edge refinement for superior boundary fidelity.' },
      { icon: Eye, title: 'Ocular Protection', description: 'Face Mesh landmark tracking to preserve eye clarity and reflection.' },
    ],
    techStack: ['OpenCV', 'MediaPipe', 'GrabCut', 'NumPy', 'cvzone'],
  },
  {
    id: 'biometric-health-vision',
    category: 'COMPUTER VISION',
    title: 'Biometric Vision Monitor',
    subtitle: 'Contactless Health Tracking',
    icon: Activity,
    color: 'violet',
    description: 'Non-invasive vision-based system for real-time heart rate and respiratory tracking through facial color analysis.',
    features: [
      { icon: Activity, title: 'ROI Analysis', description: 'Isolates specific facial regions for high-sensitivity color tracking.' },
      { icon: Search, title: 'Signal Processing', description: 'Amplitude analysis to detect heart rate and breathing cycles.' },
      { icon: Image, title: 'Live Visualization', description: 'Real-time biometric data trending using Matplotlib.' },
    ],
    techStack: ['OpenCV', 'Haar Cascades', 'NumPy', 'Matplotlib'],
  },
  {
    id: 'vision-interaction-suite',
    category: 'COMPUTER VISION',
    title: 'Multi-Modal Vision Suite',
    subtitle: 'Interactive Interaction Platform',
    icon: Zap,
    color: 'violet',
    description: 'A suite of specialized vision tools for ocular tracking, fatigue monitoring, and sound-triggered automation.',
    features: [
      { icon: Eye, title: 'EAR Blink Tracking', description: 'Eye Aspect Ratio tracking for blink counting and fatigue analysis.' },
      { icon: Search, title: 'Eyewear Recognition', description: 'Detects presence of glasses via nose bridge landmark analysis.' },
      { icon: Zap, title: 'Clap-to-Screenshot', description: 'Audio-visual automation combining PyAudio and OpenCV.' },
    ],
    techStack: ['MediaPipe', 'PyAudio', 'OpenCV', 'NumPy'],
  },
  {
    id: 'spatial-landmark-analytics',
    category: 'COMPUTER VISION',
    title: 'Spatial Landmark Analytics',
    subtitle: 'Real-time Interaction Engine',
    icon: Brain,
    color: 'violet',
    description: 'High-performance landmark detection suite for simultaneous face and hand tracking with confidence scoring.',
    features: [
      { icon: Network, title: 'Dual-Detection', description: 'Simultaneous 21-point hand tracking and face bounding box analysis.' },
      { icon: Zap, title: 'FPS Optimization', description: 'Optimized for high-speed performance on standard hardware.' },
      { icon: Shield, title: 'Confidence Scoring', description: 'Real-time reliability metrics for spatial detection points.' },
    ],
    techStack: ['MediaPipe', 'OpenCV', 'Python'],
  },

  // --- GAMES CATEGORY ---
  {
    id: 'snake-arcade-pygame',
    category: 'GAMES',
    title: 'Retro Arcade Snake',
    subtitle: 'Optimized Physics Implementation',
    icon: Gamepad2,
    color: 'cyan',
    description: 'High-fidelity implementation of the classic arcade game with optimized grid-based logic and dynamic scaling.',
    features: [
      { icon: Zap, title: 'Difficulty Scaling', description: 'Progressive speed-scaling engine based on score performance.' },
      { icon: Shield, title: 'Grid-Aligned Collision', description: 'Precise cell-size logic for movement and collision detection.' },
      { icon: Image, title: 'Asset-Driven UI', description: 'Custom textures and directional animations for snake mechanics.' },
    ],
    techStack: ['Pygame', 'Python', 'Asset Management'],
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(projects[0].id);

  const categories: ('AI SYSTEMS' | 'COMPUTER VISION' | 'GAMES')[] = ['AI SYSTEMS', 'COMPUTER VISION', 'GAMES'];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          sector="Project Repository"
          title="Agent Nexus"
          subtitle="Mission logs of deployed intelligent systems"
        />

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="font-orbitron text-sm tracking-[0.4em] text-primary/60 mb-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary/30" />
              {cat}
            </h2>
            <div className="space-y-6">
              {projects.filter(p => p.category === cat).map((project) => (
                <HoloCard key={project.id} className="overflow-hidden animate-fade-in" glowColor={project.color}>
                  <button onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)} className="w-full p-6 flex items-center gap-6 text-left hover:bg-muted/20">
                    <div className={`p-4 rounded-xl border ${project.color === 'violet' ? 'bg-secondary/10 border-secondary/30' : 'bg-primary/10 border-primary/30'}`}>
                      <project.icon className={`w-8 h-8 ${project.color === 'violet' ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-orbitron text-xl font-bold text-foreground mb-1">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                    </div>
                    <div>{expandedProject === project.id ? <ChevronUp /> : <ChevronDown />}</div>
                  </button>
                  {expandedProject === project.id && (
                    <div className="px-6 pb-6 border-t border-border/50 animate-fade-in">
                      <p className="pt-6 text-foreground/80 mb-6">{project.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {project.features.map((f) => (
                          <div key={f.title} className="p-4 rounded-lg bg-muted/30 border border-border/30">
                            <div className="flex items-start gap-3">
                              <f.icon className="w-5 h-5 text-primary mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                                <p className="text-xs text-muted-foreground">{f.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => <TechBadge key={tech} name={tech} />)}
                      </div>
                    </div>
                  )}
                </HoloCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;