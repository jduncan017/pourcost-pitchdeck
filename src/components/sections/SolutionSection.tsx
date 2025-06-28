import { SectionHeader, FeatureCard, RevealOnScroll } from "~/components/ui";

const solutionFeatures = [
  {
    icon: "📱",
    title: "Invoice to Inventory in a Snap",
    description:
      "Snap a photo of any supplier invoice and we'll instantly update every ingredient's cost and quantity across your entire system. Manual data entry is eliminated forever.",
  },
  {
    icon: "💰",
    title: "Profit on Every Pour",
    description:
      "Recipes and menu items update costs in real-time as supplier prices change. Know your exact margin on every cocktail, always—no more guesswork.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Staff Training",
    description:
      "Our AI generates instant training guides, tasting notes, and quizzes for any product. New hires are trained consistently in hours, not weeks.",
  },
  {
    icon: "📊",
    title: "POS Integration & Analytics",
    description:
      "POS integration reveals what's selling, what's not, and where shrinkage happens in real-time. Transform overwhelming data into clear business decisions.",
  },
  {
    icon: "🎯",
    title: "Intelligent Menu Engineering",
    description:
      "AI-powered pricing suggestions based on costs, margins, and market data to maximize profitability on every menu item.",
  },
  {
    icon: "🔮",
    title: "Predictive Ordering",
    description:
      "Machine learning algorithms forecast demand, optimize ordering schedules, and prevent costly stockouts before they happen.",
  },
];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative bg-gradient-to-br from-[#161B22] to-[#1c2128] py-24"
    >
      <div className="mx-auto max-w-7xl px-5">
        <RevealOnScroll>
          <SectionHeader
            title="Solution: The PourCost AI Platform"
            subtitle="An all-in-one command center that gives bar managers their time—and their profits—back through intelligent automation and AI-powered insights."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutionFeatures.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant="default"
                hoverEffect={true}
                gradientBar={true}
                className="h-full"
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
