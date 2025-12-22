import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import TypewriterText from '@/components/TypewriterText';
import GlowingButton from '@/components/GlowingButton';

const Landing = () => {
  const [phase, setPhase] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => setShowContent(true), 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin-slow" />
        <div className="absolute w-[800px] h-[800px] border border-secondary/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        <div className="absolute w-[400px] h-[400px] border border-primary/5 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }} />
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-orbitron text-xs tracking-[0.3em] text-primary uppercase">
            System Active
          </span>
        </div>

        {/* Initialization sequence */}
        <div className="space-y-4 mb-12 min-h-[120px]">
          {phase >= 1 && (
            <p className="font-orbitron text-sm text-muted-foreground animate-fade-in">
              <TypewriterText text="> Initializing AI Systems..." delay={40} />
            </p>
          )}
          
          {phase >= 2 && (
            <p className="font-orbitron text-sm text-muted-foreground animate-fade-in">
              <TypewriterText text="> Loading Neural Networks..." delay={40} />
            </p>
          )}
          
          {phase >= 3 && (
            <p className="font-orbitron text-sm text-primary animate-fade-in">
              <TypewriterText text="> System Ready. Welcome." delay={40} />
            </p>
          )}
        </div>

        {/* Main heading */}
        {showContent && (
          <div className="animate-fade-in-up">
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="block text-foreground">HARSH</span>
              <span className="block gradient-text neon-text">JOSHI</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              AI & Multi-Agent Systems Engineer
            </p>

            <div className="flex items-center justify-center gap-2 text-primary/80 mb-12">
              <Sparkles className="w-4 h-4" />
              <span className="font-orbitron text-sm tracking-wider">
                Building Intelligent Systems That Scale
              </span>
              <Sparkles className="w-4 h-4" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowingButton
                onClick={() => navigate('/about')}
                variant="primary"
                size="lg"
              >
                Enter System
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </GlowingButton>

              <GlowingButton
                to="/projects"
                variant="outline"
                size="lg"
              >
                View Projects
              </GlowingButton>
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        {showContent && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="font-orbitron text-xs tracking-wider">Scroll to Explore</span>
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
    </div>
  );
};

export default Landing;
