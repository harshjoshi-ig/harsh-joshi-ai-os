import { Github, Download, ExternalLink, Mail, MessageCircle } from 'lucide-react';
import HoloCard from '@/components/HoloCard';
import SectionHeader from '@/components/SectionHeader';
import GlowingButton from '@/components/GlowingButton';

const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    description: 'View my repositories and open source contributions',
    icon: Github,
    url: 'https://github.com/harsh-joshi2211',
    username: '@harsh-joshi2211',
    color: 'cyan' as const,
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'Explore my AI models and datasets',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 1.5c4.694 0 8.5 3.806 8.5 8.5s-3.806 8.5-8.5 8.5S3.5 16.694 3.5 12 7.306 3.5 12 3.5zM8.5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7.5 6c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4h-9z"/>
      </svg>
    ),
    url: 'https://huggingface.co/harshjoshi2211',
    username: '@harshjoshi2211',
    color: 'violet' as const,
  },
];

const Connect = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          sector="Communication Hub"
          title="Neural Link"
          subtitle="Establish connection for collaboration opportunities"
        />

        {/* Connection Status */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-muted/30 border border-primary/30">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-green-400" />
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-400 animate-ping-slow" />
            </div>
            <span className="font-orbitron text-lg">
              <span className="text-primary">CONNECTION STATUS:</span>
              <span className="text-green-400 ml-2">ACTIVE</span>
            </span>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <HoloCard className="p-6 h-full transition-transform hover:scale-[1.02]" glowColor={link.color}>
                <div className="flex items-start gap-4">
                  <div className={`
                    p-4 rounded-xl border
                    ${link.color === 'cyan' ? 'bg-primary/10 border-primary/30' : 'bg-secondary/10 border-secondary/30'}
                  `}>
                    <link.icon className={`w-8 h-8 ${link.color === 'cyan' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-orbitron text-lg font-bold text-foreground">
                        {link.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-primary text-sm font-medium mb-2">{link.username}</p>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </div>
                </div>
              </HoloCard>
            </a>
          ))}
        </div>

        {/* Contact Actions */}
        <HoloCard className="p-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="max-w-xl mx-auto">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-orbitron text-2xl font-bold gradient-text mb-4">
              Initiate Contact
            </h3>
            <p className="text-muted-foreground mb-8">
              Interested in collaborating on AI projects, discussing multi-agent systems, 
              or exploring opportunities? Let's connect and build something intelligent together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowingButton
                variant="primary"
                size="lg"
                external
                href="mailto:harshjoshi2211@gmail.com"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </GlowingButton>

              <GlowingButton
                variant="outline"
                size="lg"
                external
                href="https://github.com/harsh-joshi2211"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </GlowingButton>
            </div>
          </div>
        </HoloCard>

        {/* Terminal-style footer */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-block text-left">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> echo "Looking forward to connecting!"
            </p>
            <p className="font-mono text-sm text-foreground mt-1">
              Looking forward to connecting!
              <span className="animate-blink text-primary ml-1">█</span>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="fixed bottom-8 right-8 hidden lg:block animate-float-slow">
          <div className="w-32 h-32 border border-primary/20 rounded-full flex items-center justify-center">
            <div className="w-20 h-20 border border-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
