interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  sector?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, sector, align = 'center' }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {sector && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
          <span className="font-orbitron text-xs tracking-[0.3em] text-primary uppercase">
            {sector}
          </span>
          <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
        </div>
      )}
      
      <h2 className="section-title mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
