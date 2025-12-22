import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Initialize', sector: 'HOME' },
  { path: '/about', label: 'AI Core', sector: 'IDENTITY' },
  { path: '/projects', label: 'Agent Nexus', sector: 'PROJECTS' },
  { path: '/skills', label: 'Systems Console', sector: 'SKILLS' },
  { path: '/experience', label: 'Mission Logs', sector: 'EXPERIENCE' },
  { path: '/connect', label: 'Neural Link', sector: 'CONNECT' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Cpu className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-neon-cyan" />
              <div className="absolute inset-0 blur-md bg-primary/30 group-hover:bg-neon-cyan/50 transition-all duration-300" />
            </div>
            <span className="font-orbitron font-bold text-lg tracking-wider">
              <span className="text-primary">HARSH</span>
              <span className="text-muted-foreground">.AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link font-orbitron text-xs tracking-widest ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                <span className="text-primary/50 mr-1">//</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 font-orbitron text-sm tracking-wider transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10 border-l-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary/50 mr-2">{`0${index + 1}`}</span>
                {item.label}
                <span className="float-right text-xs text-muted-foreground">{item.sector}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
