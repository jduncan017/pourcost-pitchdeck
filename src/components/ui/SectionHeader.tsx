interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  titleClassName = "mb-5 text-4xl font-bold text-[#F0F6FC] md:text-5xl",
  subtitleClassName = "max-w-[720px] mx-auto text-lg text-[#8B949E]",
  containerClassName = "mx-auto mb-16 max-w-4xl text-center",
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${containerClassName} ${centered ? "text-center" : ""}`}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </div>
  );
}
