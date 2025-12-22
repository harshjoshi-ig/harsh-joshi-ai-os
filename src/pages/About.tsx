import { User, GraduationCap, Briefcase, Target, Code2, Brain } from 'lucide-react';
import HoloCard from '@/components/HoloCard';
import SectionHeader from '@/components/SectionHeader';
import TechBadge from '@/components/TechBadge';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.E. Computer Engineering',
      detail: 'SAL College of Engineering • 3rd Year',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'AI/ML Intern',
      detail: 'Igenerate • 1 Year',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Multi-Agent AI Systems',
      detail: 'Orchestration & Architecture',
    },
  ];

  const coreValues = [
    { icon: Brain, label: 'Intelligent Design', description: 'Building AI systems that think and adapt' },
    { icon: Code2, label: 'Clean Architecture', description: 'Scalable, maintainable, production-ready' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          sector="Identity Module"
          title="AI Core"
          subtitle="The mind behind the systems"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <HoloCard className="p-8 h-full animate-fade-in" glowColor="mixed">
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 animate-pulse" />
                <div className="absolute inset-2 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center">
                  <User className="w-16 h-16 text-primary" />
                </div>
                {/* Status ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin-slow" />
              </div>

              <div className="text-center">
                <h3 className="font-orbitron text-2xl font-bold mb-2">
                  <span className="gradient-text">Harsh Joshi</span>
                </h3>
                <p className="text-muted-foreground mb-4">AI Systems Architect</p>

                {/* Status indicator */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-primary font-medium">Available for Opportunities</span>
                </div>
              </div>

              {/* Quick stats */}
              <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-orbitron text-2xl font-bold text-primary">1+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Year Experience</p>
                </div>
                <div>
                  <p className="font-orbitron text-2xl font-bold text-secondary">5+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">AI Projects</p>
                </div>
              </div>
            </HoloCard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <HoloCard className="p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-orbitron text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-muted-foreground">//</span> About Me
              </h4>
              <p className="text-foreground/90 leading-relaxed mb-4">
                I'm a passionate AI engineer specializing in building intelligent, autonomous systems 
                that solve real-world problems. With a deep focus on multi-agent architectures and 
                LLM-powered applications, I architect solutions that are not just functional—they're 
                scalable, secure, and production-ready.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My philosophy centers on creating AI systems that seamlessly integrate into existing 
                workflows, enhance human capabilities, and maintain the highest standards of security 
                and reliability.
              </p>
            </HoloCard>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <HoloCard
                  key={item.title}
                  className="p-6 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h5 className="font-orbitron text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h5>
                  <p className="text-primary text-sm font-medium mb-1">{item.description}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </HoloCard>
              ))}
            </div>

            {/* Core Values */}
            <HoloCard className="p-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h4 className="font-orbitron text-lg font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="text-muted-foreground">//</span> Core Principles
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {coreValues.map((value) => (
                  <div key={value.label} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{value.label}</h5>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </HoloCard>

            {/* Tech Focus */}
            <HoloCard className="p-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-orbitron text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-muted-foreground">//</span> Primary Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Multi-Agent Systems',
                  'LLM Engineering',
                  'LangChain',
                  'FastAPI',
                  'MongoDB',
                  'RBAC Security',
                  'Workflow Orchestration',
                  'API Development',
                ].map((tech) => (
                  <TechBadge key={tech} name={tech} variant="primary" />
                ))}
              </div>
            </HoloCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
