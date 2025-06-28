import {
  SectionHeader,
  StatCard,
  FeatureCard,
  RevealOnScroll,
} from "~/components/ui";
import Link from "next/link";

const marketStats = [
  {
    number: "$9.17",
    suffix: "B",
    label: "Total Addressable Market by 2030",
  },
  {
    number: "15",
    suffix: "%",
    label: "CAGR - Fastest Growing Segment",
  },
  {
    number: "87",
    suffix: "%",
    label: "Operators Unsatisfied with Current Tech",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "For small bars & cafes",
    popular: false,
    features: [
      "✓ Basic Inventory Tracking",
      "✓ Simple Recipe Costing",
      "✓ Mobile App Access",
      "✓ Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    period: "/mo",
    description: "The complete AI-powered platform",
    popular: true,
    features: [
      "✓ AI Invoice Scanning",
      "✓ POS Integration",
      "✓ AI Staff Training Tools",
      "✓ Advanced Analytics",
      "✓ Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$199+",
    period: "/mo",
    description: "For groups & large venues",
    popular: false,
    features: [
      "✓ Multi-Location Management",
      "✓ Custom Integrations & API",
      "✓ Advanced Reporting Suite",
      "✓ Dedicated Account Manager",
      "✓ White-Label Options",
    ],
  },
];

const revenueProjections = [
  {
    year: "Year 1",
    arr: "$135K ARR*",
    details: "150 customers × Est. $76 blended ARPA",
  },
  {
    year: "Year 2",
    arr: "$575k ARR*",
    details: "600 customers × Est. $76 blended ARPA",
  },
  {
    year: "Year 3",
    arr: "$1.5M ARR*",
    details: "1,500 customers × Est. $76 blended ARPA",
  },
];

export function MarketSection() {
  return (
    <section
      id="market"
      className="relative border-y border-gray-700 py-24 shadow-2xl"
    >
      <div className="mx-auto max-w-7xl px-5">
        <RevealOnScroll>
          <SectionHeader
            title="A Market Primed for Disruption"
            subtitle="We're entering the fastest-growing segment of restaurant tech, where a massive 87% of operators are dissatisfied with their current tools and actively seeking better solutions."
          />
        </RevealOnScroll>
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {marketStats.map((stat, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <StatCard
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                gradient="success"
                className="p-10"
              />
            </RevealOnScroll>
          ))}
        </div>{" "}
        <div className="flex flex-col items-center gap-4">
          <p className="FullReport text-p3 hover:text-p2 text-xl underline">
            <Link href="/market-research">
              View Full Market Research Report
            </Link>
          </p>
        </div>
        {/* Business Model */}
        <RevealOnScroll>
          <SectionHeader
            title="Simple, Scalable SaaS Model"
            subtitle="Our tiered subscription model provides an accessible entry point for small bars and a powerful, feature-rich platform for larger operations with predictable revenue growth."
            containerClassName="mx-auto mt-20 mb-16 max-w-4xl text-center"
          />
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <FeatureCard
                title={plan.name}
                description={plan.description}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                popular={plan.popular}
                variant="pricing"
                hoverEffect={true}
                gradientBar={false}
              />
            </RevealOnScroll>
          ))}
        </div>
        {/* Revenue Projections */}
        <RevealOnScroll>
          <div className="mt-16 text-center">
            <h3 className="mb-8 text-2xl font-bold text-[#F0F6FC]">
              Conservative Revenue Projections
            </h3>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8">
              {revenueProjections.map((projection, index) => (
                <div
                  key={index}
                  className="min-w-[200px] rounded-xl border border-[#30363D] bg-[#161B22] p-8 text-center"
                >
                  <div className="text-lg font-bold text-[#FF6B00]">
                    {projection.year}
                  </div>
                  <div className="my-3 text-xl font-bold text-[#F0F6FC]">
                    {projection.arr}
                  </div>
                  <div className="text-sm text-[#8B949E]">
                    {projection.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-g1 mt-12 text-center text-sm">
            *ARR - Annual Recurring Revenue
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
