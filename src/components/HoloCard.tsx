import { ReactNode, CSSProperties } from 'react';

interface HoloCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'mixed';
  hover?: boolean;
  style?: CSSProperties;
}

const HoloCard = ({ children, className = '', glowColor = 'cyan', hover = true, style }: HoloCardProps) => {
  const glowStyles = {
    cyan: 'hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]',
    violet: 'hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.15)]',
    mixed: 'hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1),0_0_60px_hsl(var(--secondary)/0.1)]',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl
        bg-gradient-to-b from-card to-card/80
        border border-border/50
        transition-all duration-500 ease-out
        ${hover ? glowStyles[glowColor] : ''}
        ${className}
      `}
      style={style}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30" />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-px bg-primary animate-[scan_8s_linear_infinite]" 
          style={{
            animation: 'scan 8s linear infinite',
          }}
        />
      </div>

      {children}

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default HoloCard;
