import { 
  Brain, 
  Server, 
  Layout, 
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
      { name: 'OpenAI API', level: 90 },
      { name: 'Multi-Agent Systems', level: 92 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'RAG Systems', level: 85 },
      { name: 'LangGraph', level: 80 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    color: 'violet',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'FastAPI', level: 90 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 88 },
      { name: 'WebSockets', level: 82 },
      { name: 'MCP Protocol', level: 78 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layout,
    color: 'cyan',
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Next.js', level: 72 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'violet',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Linux', level: 82 },
      { name: 'CI/CD', level: 75 },
      { name: 'AWS Basics', level: 70 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    color: 'cyan',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'Vector DBs', level: 78 },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Tools',
    icon: Cog,
    color: 'violet',
    skills: [
      { name: 'Web Automation', level: 90 },
      { name: 'API Integration', level: 92 },
      { name: 'Data Processing', level: 85 },
      { name: 'Workflow Design', level: 88 },
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
          subtitle="Technical proficiencies and specialized skills"
        />

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Cpu, value: '15+', label: 'Technologies' },
            { icon: Code2, value: '5+', label: 'AI Projects' },
            { icon: Workflow, value: '3+', label: 'Agent Systems' },
            { icon: Terminal, value: '1+', label: 'Years Exp.' },
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
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`
                  p-3 rounded-lg border
                  ${category.color === 'cyan' ? 'bg-primary/10 border-primary/30' : 'bg-secondary/10 border-secondary/30'}
                `}>
                  <category.icon className={`w-6 h-6 ${category.color === 'cyan' ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-orbitron">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          category.color === 'cyan'
                            ? 'bg-gradient-to-r from-primary/50 to-primary'
                            : 'bg-gradient-to-r from-secondary/50 to-secondary'
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: category.color === 'cyan'
                            ? '0 0 10px hsl(var(--primary) / 0.5)'
                            : '0 0 10px hsl(var(--secondary) / 0.5)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </HoloCard>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-muted-foreground text-sm font-orbitron">
            <span className="text-primary">[ SYSTEM ]</span> Continuously expanding capabilities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
