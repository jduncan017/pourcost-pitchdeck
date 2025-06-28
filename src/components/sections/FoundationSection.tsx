import { SectionHeader, StatCard, RevealOnScroll } from "~/components/ui";

const foundationStats = [
  {
    number: "8+",
    label: "Years of Market Presence",
    animated: true,
  },
  {
    number: "200+",
    label: "5-Star User Reviews",
    animated: true,
  },
  {
    number: "Active",
    label: "User Base of Bar Managers",
    animated: false,
  },
  {
    number: "Known",
    label: "Brand in the Industry",
    animated: false,
  },
];

export function FoundationSection() {
  return (
    <section
      id="foundation"
      className="relative flex flex-col items-center py-24"
    >
      <div className="mx-auto max-w-7xl px-5">
        <RevealOnScroll>
          <SectionHeader
            title="Built on a Proven Foundation"
            subtitle="We're not starting from scratch. PourCost has 8+ years of market presence with an established brand, active user base, and proven demand."
          />
        </RevealOnScroll>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {foundationStats.map((stat, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <StatCard
                number={stat.number}
                label={stat.label}
                animated={stat.animated}
                gradient="primary"
              />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="flex flex-col items-center">
            <div className="border-p1 bg-g4 mt-10 max-w-2xl rounded-xl border-l-4 p-8 shadow-xl">
              <p className="text-n2 mb-4 text-lg tracking-wide italic">
                &quot;This app has saved me at leassst 10 hours per menu, that
                plus saving my headache for costing it out. It&apos;s amazing.
                Just get it.&quot;
              </p>
              <p className="text-right font-semibold text-[#8B949E]">
                — Beverage Director & Existing PourCost User (Apple App Store)
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
