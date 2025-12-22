import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface GlowingButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  href?: string;
}

const GlowingButton = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external,
  href,
}: GlowingButtonProps) => {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    font-orbitron font-medium tracking-wider uppercase
    transition-all duration-300 ease-out
    overflow-hidden group
  `;

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantStyles = {
    primary: `
      bg-primary text-primary-foreground
      hover:bg-primary/90
      shadow-[0_0_20px_hsl(var(--primary)/0.3)]
      hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]
    `,
    secondary: `
      bg-secondary text-secondary-foreground
      hover:bg-secondary/90
      shadow-[0_0_20px_hsl(var(--secondary)/0.3)]
      hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)]
    `,
    outline: `
      bg-transparent text-primary border border-primary/50
      hover:bg-primary/10 hover:border-primary
      shadow-[0_0_10px_hsl(var(--primary)/0.2)]
      hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]
    `,
  };

  const combinedStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    rounded-lg
    ${className}
  `;

  const innerContent = (
    <>
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {innerContent}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {innerContent}
    </button>
  );
};

export default GlowingButton;
