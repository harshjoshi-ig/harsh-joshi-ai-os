interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'primary' | 'secondary';
}

const TechBadge = ({ name, variant = 'default' }: TechBadgeProps) => {
  const variantStyles = {
    default: 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary',
    primary: 'border-primary/50 text-primary bg-primary/10',
    secondary: 'border-secondary/50 text-secondary bg-secondary/10',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1.5
        text-xs font-medium tracking-wide
        rounded-full border
        bg-card/50
        transition-all duration-300
        hover:shadow-[0_0_10px_hsl(var(--primary)/0.2)]
        ${variantStyles[variant]}
      `}
    >
      {name}
    </span>
  );
};

export default TechBadge;
