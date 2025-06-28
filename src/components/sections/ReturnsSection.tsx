import { RevealOnScroll } from "~/components/ui";

const scenarios = [
  {
    title: "Conservative Success",
    color: "#4ecdc4",
    multiplier: "30x",
    value: "$1,200,000 stake value",
    description:
      "Calculation: $1.5M ARR x 4x Multiple. This is a typicle multiple for a stable, early-stage SaaS company with provend product-market fit.",
  },
  {
    title: "Strong Growth",
    color: "#FF6B00",
    multiplier: "45x",
    value: "$1,800,000 stake value",
    description:
      "Calculation: $1.5M ARR × 6x Multiple. This is a standard multiple for a high-growth company with over $1M in revenue and a strong market position.",
  },
  {
    title: "Market Leader",
    color: "#FFC300",
    multiplier: "60x",
    value: "$2,400,000 stake value",
    description:
      "Calculation: $1.5M ARR × 8x Multiple. This is an achievable multiple if we dominate our niche, demonstrating high-profit margins and strong competitive moats.",
  },
];

const investments = [
  {
    name: "S&P 500",
    height: "h-10",
    return: "1.6x | $64,420",
    color: "from-gray-500 to-gray-400",
  },
  {
    name: "Real Estate",
    height: "h-12",
    return: "1.5x | $58,773",
    color: "from-purple-500 to-purple-400",
  },
  {
    name: "Tech Startup Avg",
    height: "h-20",
    return: "3.1x | $122,070",
    color: "from-cyan-500 to-cyan-400",
  },
  {
    name: "PourCost",
    height: "h-48",
    return: "$1.2M-$2.4M",
    color: "from-[#FF6B00] to-[#FFC300]",
    highlight: true,
  },
];

const reasons = [
  {
    stat: "15% CAGR",
    label: "Compound Annual Growth Rate",
    description: "Fastest growing restaurant tech segment",
  },
  {
    stat: "87% Unsatisfied",
    description: "Massive opportunity gap",
  },
  {
    stat: "8+ Years",
    description: "Proven market validation",
  },
  { stat: "AI Moat", description: "First-mover advantage" },
];

export function ReturnsSection() {
  return (
    <section id="returns" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-12 md:p-20">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-5 text-4xl font-bold text-white md:text-6xl">
                Exceptional Return Potential
              </h2>
              <p className="mx-auto max-w-[720px] text-xl text-[#8B949E]">
                Return projections are based on our Year 3 revenue target of
                $1.5M ARR and standard, defensible SaaS valuation multiples.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {scenarios.map((scenario, index) => (
              <RevealOnScroll key={index} delay={index * 200}>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                  <h4
                    className="mb-5 text-lg font-bold"
                    style={{ color: scenario.color }}
                  >
                    {scenario.title}
                  </h4>
                  <div className="mb-4 bg-gradient-to-r from-[#FF6B00] to-[#4ecdc4] bg-clip-text text-6xl font-extrabold text-transparent">
                    {scenario.multiplier}
                  </div>
                  <div className="mb-3 text-xl text-[#F0F6FC]">
                    {scenario.value}
                  </div>
                  <p className="text-sm text-[#8B949E] opacity-80">
                    {scenario.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Comparison Chart */}
          <div className="mt-16">
            <h4 className="mb-10 text-center text-2xl font-bold text-white">
              vs. Alternative Investments (5 Years)
            </h4>
            <div className="flex min-h-[300px] flex-wrap items-end justify-center gap-8 rounded-2xl bg-white/5 p-10">
              {investments.map((investment, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 bg-gradient-to-t ${investment.color} rounded ${investment.height} relative mx-auto mb-4`}
                  >
                    {investment.highlight && (
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 transform text-xs font-bold text-white">
                        12-36x
                      </div>
                    )}
                  </div>
                  <div
                    className={`mb-1 text-sm ${investment.highlight ? "font-bold text-white" : "text-[#8B949E]"}`}
                  >
                    {investment.name}
                  </div>
                  <div
                    className={`text-xs ${investment.highlight ? "text-[#4ecdc4]" : "text-[#8B949E]"}`}
                  >
                    {investment.return}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h4 className="mb-8 text-xl font-bold text-white">
              Why These Projections Are Realistic
            </h4>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, index) => (
                <div key={index} className="rounded-xl bg-white/5 p-6">
                  <div className="from-p1 to-p3 mb-2 bg-gradient-to-br bg-clip-text text-xl font-bold text-transparent">
                    {reason.stat}
                  </div>
                  {reason.label && (
                    <div className="mb-1 text-xs text-[#8B949E]">
                      {reason.label}
                    </div>
                  )}
                  <div className="text-sm text-[#F0F6FC] opacity-90">
                    {reason.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
