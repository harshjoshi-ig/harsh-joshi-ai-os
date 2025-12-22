import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import HoloCard from '@/components/HoloCard';
import SectionHeader from '@/components/SectionHeader';
import TechBadge from '@/components/TechBadge';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'igenerate',
    role: 'AI/ML Intern',
    company: 'Igenerate',
    location: 'Remote',
    period: '2023 - 2024',
    duration: '1 Year',
    description: 'Developed and deployed AI-powered automation solutions for enterprise clients, focusing on data engineering and intelligent workflow optimization.',
    achievements: [
      'Architected automated data collection pipelines handling 10,000+ records daily',
      'Built intelligent API integration systems for seamless data synchronization',
      'Designed and implemented production-grade automation tooling',
      'Created custom AI models for data classification and extraction',
      'Optimized data processing workflows reducing manual effort by 70%',
    ],
    technologies: ['Python', 'FastAPI', 'MongoDB', 'Docker', 'REST APIs', 'Automation'],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          sector="Career Timeline"
          title="Mission Logs"
          subtitle="Professional journey and key milestones"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full border-2 border-primary bg-background hidden md:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="md:ml-16">
                  <HoloCard className="p-0 overflow-hidden" glowColor="cyan">
                    {/* Header */}
                    <div className="p-6 bg-gradient-to-r from-primary/10 to-transparent border-b border-border/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-orbitron text-xl font-bold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-orbitron text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          KEY ACHIEVEMENTS
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-orbitron text-sm font-semibold text-muted-foreground mb-3">
                          TECHNOLOGIES USED
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <TechBadge key={tech} name={tech} variant="primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </HoloCard>
                </div>
              </div>
            ))}

            {/* Education Entry */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full border-2 border-secondary bg-background hidden md:flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              </div>

              <div className="md:ml-16">
                <HoloCard className="p-6" glowColor="violet">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30">
                      <Briefcase className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-lg font-bold text-foreground mb-1">
                        B.E. Computer Engineering
                      </h3>
                      <p className="text-secondary font-semibold mb-2">SAL College of Engineering</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          2022 - Present (3rd Year)
                        </span>
                      </div>
                    </div>
                  </div>
                </HoloCard>
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/30 border border-border">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-orbitron text-sm text-muted-foreground">
              <span className="text-primary">STATUS:</span> Open to new opportunities
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
