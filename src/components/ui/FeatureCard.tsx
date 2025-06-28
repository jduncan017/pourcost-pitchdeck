interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  popular?: boolean;
  features?: string[];
  price?: string;
  period?: string;
  className?: string;
  hoverEffect?: boolean;
  gradientBar?: boolean;
  variant?: "default" | "pricing" | "highlight";
}

export function FeatureCard({
  title,
  description,
  icon,
  popular = false,
  features,
  price,
  period,
  className = "",
  hoverEffect = true,
  gradientBar = true,
  variant = "default",
}: FeatureCardProps) {
  const baseClasses =
    "rounded-xl border bg-[#161B22] p-8 transition-all duration-300 shadow-lg";
  const hoverClasses = hoverEffect
    ? "hover:-translate-y-2 hover:shadow-xl"
    : "";
  const groupClasses = gradientBar ? "group relative overflow-hidden" : "";

  let borderClasses = "border-[#30363D]";
  let containerClasses = "";

  // Handle pricing card variant
  if (variant === "pricing") {
    containerClasses = "text-center relative";
    if (popular) {
      borderClasses =
        "border-2 border-[#FF6B00] bg-gradient-to-br from-[#161B22] to-[#1a1f26] transform lg:scale-105";
    } else {
      borderClasses = "border-2 border-[#30363D]";
    }
  }

  // Handle highlight variant
  if (variant === "highlight") {
    borderClasses = "border-[#FF6B00]/30 bg-[#FF6B00]/10";
    containerClasses = "text-center min-w-[200px] max-w-[280px]";
  }

  const cardClasses = `${baseClasses} ${hoverClasses} ${groupClasses} ${borderClasses} ${containerClasses} ${className}`;

  return (
    <div className={cardClasses}>
      {/* Popular badge for pricing cards */}
      {popular && variant === "pricing" && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FFC300] px-5 py-2 text-sm font-bold text-[#0D1117]">
          Most Popular
        </div>
      )}

      {/* Gradient bar for hover effect */}
      {gradientBar && (
        <div className="absolute top-0 left-0 h-1 w-full -translate-x-full transform bg-gradient-to-r from-[#FF6B00] to-[#FFC300] transition-transform duration-300 group-hover:translate-x-0"></div>
      )}

      <div className="flex w-full items-start justify-start gap-2">
        {/* Icon */}
        {icon && <div className="mb-4 text-xl">{icon}</div>}

        {/* Title */}
        <h3
          className={`mb-4 bg-gradient-to-br from-[#FF6B00] to-[#e99000] bg-clip-text font-bold text-transparent ${variant === "pricing" ? "text-xl" : "text-xl"}`}
        >
          {title}
        </h3>
      </div>

      {/* Price for pricing cards */}
      {price && variant === "pricing" && (
        <div className="mb-3 text-5xl font-extrabold text-[#FF6B00]">
          {price}
          {period && <span className="text-base text-[#8B949E]">{period}</span>}
        </div>
      )}

      {/* Description */}
      <p
        className={`text-[#8B949E] ${variant === "pricing" ? "mb-8" : ""} ${variant === "highlight" ? "text-sm" : ""}`}
      >
        {description}
      </p>

      {/* Features list for pricing cards */}
      {features && variant === "pricing" && (
        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="text-[#F0F6FC]">
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
