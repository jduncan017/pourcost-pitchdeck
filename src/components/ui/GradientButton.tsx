interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "secondary";
}

export function GradientButton({
  children,
  onClick,
  href,
  size = "md",
  className = "",
  variant = "primary",
}: GradientButtonProps) {
  const baseClasses = "inline-block rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";
  
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-[#FF6B00] to-[#FFC300] text-[#0D1117] shadow-[#FF6B00]/30",
    secondary: "bg-gradient-to-r from-[#4ecdc4] to-[#96c93d] text-[#0D1117] shadow-[#4ecdc4]/30",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}