import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import TypewriterText from '@/components/TypewriterText';
import GlowingButton from '@/components/GlowingButton';

// Import other sections to build a Single Page Application
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Connect from './Connect';

const Landing = () => {
  const [phase, setPhase] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500), // Sped up for better UX
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setShowContent(true), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        
        {/* Orbital rings background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin-slow" />
          <div className="absolute w-[800px] h-[800px] border border-secondary/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          
          {/* Status Badge */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-orbitron text-xs tracking-[0.3em] text-primary uppercase">
              System Online
            </span>
          </div>

          {/* Initialization Text (Terminal Effect) */}
          <div className="space-y-2 mb-8 h-[80px] flex flex-col justify-center">
            {phase >= 1 && (
              <p className="font-orbitron text-sm text-muted-foreground/60">
                <TypewriterText text="> Initializing Neural Interface..." delay={20} />
              </p>
            )}
            {phase >= 3 && (
              <p className="font-orbitron text-sm text-primary">
                <TypewriterText text="> Identity Verified: HARSH JOSHI" delay={20} />
              </p>
            )}
          </div>

          {showContent && (
            <div className="animate-fade-in-up flex flex-col items-center">
              
              {/* NEW: PROFILE PHOTO SECTION */}
              <div className="relative w-40 h-40 mb-8 group cursor-pointer">
                {/* Rotating rings around photo */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-t-primary animate-spin-slow group-hover:pause" />
                <div className="absolute inset-2 rounded-full border border-secondary/30 border-b-secondary animate-spin-reverse-slow" />
                
                {/* Photo Container */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/50 bg-black/50 backdrop-blur-sm">
                   <img 
                    src="/profile.jpg" 
                    alt="Harsh Joshi" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* Main Title */}
              <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className="block text-foreground">HARSH</span>
                <span className="block gradient-text neon-text">JOSHI</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl">
                AI & Multi-Agent Systems Engineer building intelligent architectures that scale.
              </p>

              {/* Navigation Buttons (Scroll instead of Navigate) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <GlowingButton
                  onClick={() => scrollToSection('projects')}
                  variant="primary"
                  size="lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Explore Systems
                </GlowingButton>

                <GlowingButton
                  onClick={() => scrollToSection('connect')}
                  variant="outline"
                  size="lg"
                >
                  Initiate Contact
                </GlowingButton>
              </div>

              {/* Scroll Indicator */}
              <div 
                className="animate-bounce cursor-pointer hover:text-primary transition-colors"
                onClick={() => scrollToSection('about')}
              >
                <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- SECTIONS STACK --- */}
      {/* We wrap these in divs with IDs for scrolling */}
      
      <div id="about" className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <About />
      </div>

      <div id="skills" className="relative z-10 border-t border-white/5">
        <Skills />
      </div>

      <div id="projects" className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <Projects />
      </div>

      <div id="experience" className="relative z-10 border-t border-white/5">
        <Experience />
      </div>

      <div id="connect" className="relative z-10 border-t border-white/5 bg-gradient-to-b from-black/0 to-primary/5">
        <Connect />
      </div>

      {/* Background Grid Overlay (Persistent) */}
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none -z-10" />
    </div>
  );
};

export default Landing;