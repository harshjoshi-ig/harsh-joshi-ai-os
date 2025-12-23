import { 
  Brain, 
  Server, 
  Cloud, 
  Cog,
  Cpu,
  Database,
  Code2,
  Workflow,
  Terminal
} from 'lucide-react';
import HoloCard from '@/components/HoloCard';
import SectionHeader from '@/components/SectionHeader';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: 'cyan' | 'violet';
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'ai',
    title: 'AI / LLMs',
    icon: Brain,
    color: 'cyan',
    skills: [
      { name: 'LangChain', level: 95 },
      { name: 'OpenAI & Groq API', level: 92 },
      { name: 'Multi-Agent Systems', level: 92 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'RAG Systems', level: 85 },
      { name: 'LangGraph', level: 80 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Architecture',
    icon: Server,
    color: 'violet',
    skills: [
      { name: 'Python (FastAPI/Pydantic)', level: 94 },
      { name: 'Node.js', level: 75 },
      { name: 'REST & WebSockets', level: 88 },
      { name: 'MCP Protocol', level: 82 },
      { name: 'RBAC & JWT Security', level: 90 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Orchestration',
    icon: Cloud,
    color: 'cyan',
    skills: [
      { name: 'Docker & Docker Compose', level: 90 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Linux System Admin', level: 82 },
      { name: 'CI/CD Pipelines', level: 78 },
      { name: 'AWS Cloud Basics', level: 70 },
    ],
  },
  {
    id: 'databases',
    title: 'Data Infrastructure',
    icon: Database,
    color: 'violet',
    skills: [
      { name: 'MongoDB (Motor/Async)', level: 92 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis (Caching)', level: 85 },
      { name: 'Vector DBs (Pinecone/Chroma)', level: 78 },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Intelligence',
    icon: Cog,
    color: 'cyan',
    skills: [
      { name: 'High-Scale Web Scrapers', level: 95 },
      { name: 'Market Intelligence Tools', level: 90 },
      { name: 'Workflow Design', level: 88 },
      { name: 'API Integration', level: 92 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          sector="Capabilities Matrix"
          title="Systems Console"
          subtitle="Core Technical Proficiencies [Frontend Disabled]"
        />

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Cpu, value: '20+', label: 'Backend Tools' },
            { icon: Code2, value: '8+', label: 'AI Projects' },
            { icon: Workflow, value: '5+', label: 'Agent Systems' },
            { icon: Terminal, value: '1', label: 'Year Exp.' },
          ].map((stat, index) => (
            <HoloCard
              key={stat.label}
              className="p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-orbitron text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </HoloCard>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <HoloCard
              key={category.id}
              className="p-6 animate-fade-in"
              glowColor={category.color}
              style={{ animationDelay: `${0.4 + catIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg border ${category.color === 'cyan' ? 'bg-primary/10 border-primary/30' : 'bg-secondary/10 border-secondary/30'}`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'cyan' ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-orbitron">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${category.color === 'cyan' ? 'bg-gradient-to-r from-primary/50 to-primary' : 'bg-gradient-to-r from-secondary/50 to-secondary'}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </HoloCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;