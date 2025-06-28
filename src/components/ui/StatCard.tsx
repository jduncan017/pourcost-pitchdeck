interface StatCardProps {
  number: string;
  suffix?: string;
  label: string;
  description?: string;
  animated?: boolean;
  gradient?: "primary" | "success" | "revenue";
  delay?: number;
  className?: string;
}

export function StatCard({
  number,
  suffix,
  label,
  description,
  animated: _animated = false,
  gradient = "primary",
  delay: _delay = 0,
  className = "",
}: StatCardProps) {
  const gradientClasses = {
    primary: "bg-gradient-to-br from-p1 to-p3 bg-clip-text text-transparent",
    success: "bg-gradient-to-br from-p1 to-p2 bg-clip-text text-transparent",
    revenue: "text-p1",
  };

  const baseCardClasses =
    "rounded-xl border border-g3 bg-g4 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl";

  return (
    <div className={`${baseCardClasses} ${className}`}>
      <div
        className={`mb-3 text-5xl font-extrabold ${gradientClasses[gradient]} ${gradient === "success" ? "text-6xl" : ""}`}
      >
        {number}
        {suffix}
      </div>
      <div className="text-g1 font-semibold">{label}</div>
      {description && (
        <p className="text-g1 mt-2 text-sm opacity-80">{description}</p>
      )}
    </div>
  );
}
