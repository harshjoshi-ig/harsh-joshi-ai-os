import { useState } from 'react';
import { 
  Network, 
  Stethoscope, 
  ChefHat, 
  ChevronDown, 
  ChevronUp,
  GitBranch,
  Shield,
  Database,
  MessageSquare,
  Calendar,
  Route,
  Zap
} from 'lucide-react';
import HoloCard from '@/components/HoloCard';
import SectionHeader from '@/components/SectionHeader';
import TechBadge from '@/components/TechBadge';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: 'cyan' | 'violet' | 'mixed';
  description: string;
  features: { icon: React.ElementType; title: string; description: string }[];
  techStack: string[];
}

const projects: Project[] = [
  {
    id: 'enterprise-ai',
    title: 'Multi-Agent Enterprise AI System',
    subtitle: 'Intelligent Orchestration Platform',
    icon: Network,
    color: 'cyan',
    description: 'A sophisticated multi-agent system designed for enterprise-grade AI workflows. Features intelligent agent orchestration, dynamic routing, and secure role-based access control.',
    features: [
      { icon: GitBranch, title: 'Agent Orchestrator', description: 'Central coordination of multiple specialized AI agents' },
      { icon: Route, title: 'Router Agent', description: 'Intelligent request routing based on context and intent' },
      { icon: Database, title: 'Stateful Workflows', description: 'Persistent conversation and process state management' },
      { icon: Shield, title: 'RBAC Security', description: 'Role-based access control for secure multi-tenant operation' },
    ],
    techStack: ['LangChain', 'FastAPI', 'MongoDB', 'OpenAI', 'Docker', 'Redis'],
  },
  {
    id: 'nurse-assistant',
    title: 'Hospital Nurse Assistant',
    subtitle: 'Healthcare Multi-Agent System',
    icon: Stethoscope,
    color: 'violet',
    description: 'An intelligent healthcare assistant leveraging multi-agent architecture to support nursing staff with patient care, scheduling, and real-time information management.',
    features: [
      { icon: MessageSquare, title: 'Voice Interaction', description: 'Natural language voice interface for hands-free operation' },
      { icon: Database, title: 'Patient Memory', description: 'Contextual patient history and preference tracking' },
      { icon: Calendar, title: 'Smart Scheduling', description: 'AI-powered appointment and task scheduling' },
      { icon: Zap, title: 'Real-time Alerts', description: 'Instant notifications for critical patient updates' },
    ],
    techStack: ['LangChain', 'FastAPI', 'PostgreSQL', 'Whisper AI', 'WebSocket', 'React'],
  },
  {
    id: 'recipe-system',
    title: 'MCP-Based Agentic Recipe System',
    subtitle: 'Decoupled Router-Expert Architecture',
    icon: ChefHat,
    color: 'mixed',
    description: 'A modular recipe recommendation system built on the Model Context Protocol (MCP), featuring decoupled router-expert architecture for scalable and maintainable AI services.',
    features: [
      { icon: Route, title: 'Router-Expert Pattern', description: 'Decoupled architecture for modular AI components' },
      { icon: Network, title: 'MCP / FastMCP', description: 'Model Context Protocol for standardized AI communication' },
      { icon: GitBranch, title: 'LangChain Integration', description: 'Advanced chain-of-thought reasoning capabilities' },
      { icon: Zap, title: 'SSE Communication', description: 'Real-time streaming via Server-Sent Events' },
    ],
    techStack: ['MCP', 'FastMCP', 'LangChain', 'FastAPI', 'SSE', 'Python'],
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(projects[0].id);

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          sector="Project Repository"
          title="Agent Nexus"
          subtitle="Explore the intelligent systems I've architected"
        />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <HoloCard
              key={project.id}
              className="overflow-hidden animate-fade-in"
              glowColor={project.color}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header - Always visible */}
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full p-6 flex items-center gap-6 text-left transition-colors hover:bg-muted/20"
              >
                {/* Icon */}
                <div className={`
                  p-4 rounded-xl border
                  ${project.color === 'cyan' ? 'bg-primary/10 border-primary/30' : ''}
                  ${project.color === 'violet' ? 'bg-secondary/10 border-secondary/30' : ''}
                  ${project.color === 'mixed' ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20' : ''}
                `}>
                  <project.icon className={`w-8 h-8 ${project.color === 'violet' ? 'text-secondary' : 'text-primary'}`} />
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="font-orbitron text-xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                </div>

                {/* Expand indicator */}
                <div className="text-muted-foreground">
                  {expandedProject === project.id ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {expandedProject === project.id && (
                <div className="px-6 pb-6 border-t border-border/50 animate-fade-in">
                  <div className="pt-6">
                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {project.features.map((feature) => (
                        <div
                          key={feature.title}
                          className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <feature.icon className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-foreground text-sm mb-1">
                                {feature.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-orbitron text-sm font-semibold text-muted-foreground mb-3">
                        TECHNOLOGY STACK
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </HoloCard>
          ))}
        </div>

        {/* Architecture diagram hint */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-orbitron">NOTE:</span> Each system is built with 
            scalability, security, and production-readiness in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
