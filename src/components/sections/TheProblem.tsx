import { RevealOnScroll } from "~/components/ui";

const problemCards = [
  {
    icon: "💸",
    title: "Massive Losses",
    description:
      "Bars lose 15-25% of inventory to shrinkage, resulting in annual losses of $46B+ across the U.S.",
    highlight: "15-25% of inventory",
  },
  {
    icon: "⏰",
    title: "Wasted Time",
    description:
      "Hours wasted on manual inventory counts that are prone to human error.",
    highlight: "Hours wasted on manual inventory counts",
  },
  {
    icon: "🔄",
    title: "Staff Turnover",
    description:
      "75-100% annual turnover requiring constant retraining and knowledge transfer.",
    highlight: "75-100% annual turnover",
  },
  {
    icon: "📊",
    title: "Difficult Cost Tracking",
    description:
      "Fluctuating supplier prices make it difficult to calculate accurate menu profitability.",
    highlight: "accurate menu profitability",
  },
];

export function TheProblem() {
  return (
    <section
      id="problem"
      className="relative border-y border-gray-700 py-24 shadow-2xl"
    >
      <div className="mx-auto max-w-7xl px-5">
        <RevealOnScroll>
          <RevealOnScroll>
            <div className="mb-16 text-center">
              <h2 className="mb-5 text-4xl font-bold text-white md:text-6xl">
                The Crisis:
              </h2>
              <div className="mb-5 bg-gradient-to-br from-red-600 to-orange-300 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                $46.8B
              </div>
              <p className="mx-auto max-w-2xl text-xl text-[#F0F6FC]">
                In an industry where 95% of operators already use AI tools,
                stemming from four critical issues that outdated tools
                can&apos;t solve.
              </p>
            </div>
          </RevealOnScroll>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <div className="ProblemCard h-full rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                <div className="mb-6 text-4xl">{card.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-[#F0F6FC]">
                  {card.title}
                </h3>
                <p className="text-[#8B949E]">
                  {card.description
                    .split(card.highlight)
                    .map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold text-[#FF6B00]">
                            {card.highlight}
                          </span>
                        )}
                      </span>
                    ))}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
