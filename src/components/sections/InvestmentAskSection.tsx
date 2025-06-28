import { GradientButton, RevealOnScroll } from "~/components/ui";

const timeline = [
  {
    month: "Month 1: Foundation & Design",
    description:
      "Enhanced brand identity, professional landing page, technical architecture, and detailed MVP wireframes using AI-accelerated design tools.",
    deliverables:
      "Complete brand refresh, functional website, technical specs, investor-ready wireframes",
  },
  {
    month: "Month 2-4: Core Platform Development",
    description:
      "AI-powered invoice scanning, automated inventory management, real-time recipe costing, and secure user authentication systems.",
    deliverables:
      "Functional MVP with core features, user dashboard, basic POS integrations, beta testing",
  },
  {
    month: "Month 5: AI Features & Market Launch",
    description:
      "AI staff training tools, automated quiz generation, advanced analytics, comprehensive testing, and coordinated market launch.",
    deliverables:
      "Complete platform with AI features, customer onboarding system, marketing campaign launch",
  },
];

export function InvestmentAskSection() {
  return (
    <section id="ask" className="relative px-20 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <RevealOnScroll>
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="mb-5 text-4xl font-bold text-[#F0F6FC] md:text-5xl">
              The Investment Opportunity
            </h2>
            <p className="mx-auto max-w-[720px] text-lg text-[#8B949E]">
              Join us in transforming the $9.17B restaurant tech market with a
              proven foundation and clear path to exceptional returns.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <RevealOnScroll className="-translate-x-8 transform opacity-0 transition-all duration-700">
            <div className="text-center lg:text-left">
              <div className="mb-3 bg-gradient-to-r from-[#FF6B00] to-[#FFC300] bg-clip-text text-6xl font-extrabold text-transparent md:text-8xl">
                $40K
              </div>
              <div className="mb-8 text-2xl text-[#8B949E]">for 20% Equity</div>
              <p className="mb-8 text-lg text-[#F0F6FC]">
                We&apos;re seeking seed investment to accelerate our MVP
                development and execute our go-to-market strategy, building upon
                our established foundation.
              </p>

              <div className="my-8 flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-start">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#4ecdc4] to-[#96c93d] text-lg font-bold text-white">
                    <div>
                      <div className="text-2xl">80%</div>
                      <div className="text-sm">Founder</div>
                    </div>
                  </div>
                  <div className="font-bold">Founder Managed</div>
                </div>
                <div className="text-3xl font-bold text-[#8B949E]">+</div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFC300] text-lg font-bold text-white">
                    <div>
                      <div className="text-2xl">20%</div>
                      <div className="text-sm">Investor</div>
                    </div>
                  </div>
                  <div className="font-bold">Your Ownership</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="translate-x-8 transform opacity-0 transition-all duration-700">
            <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-8">
              <h3 className="mb-6 text-xl font-bold text-[#FF6B00]">
                Use of Funds
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#30363D] py-4">
                  <div>
                    <div className="font-bold text-[#F0F6FC]">
                      Founder Salary (5 months)
                    </div>
                    <div className="text-sm text-[#8B949E]">$4K/month</div>
                  </div>
                  <div className="font-bold text-[#FF6B00]">$20,000</div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <div className="font-bold text-[#F0F6FC]">
                      Marketing & Launch
                    </div>
                    <div className="text-sm text-[#8B949E]">
                      Customer acquisition & digital marketing costs
                    </div>
                  </div>
                  <div className="font-bold text-[#FF6B00]">$20,000</div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-6">
                <h4 className="mb-4 font-bold text-[#FF6B00]">
                  Key Milestones
                </h4>
                <div className="flex flex-col justify-between gap-4 text-sm md:flex-row">
                  <div className="text-center">
                    <div className="font-bold text-[#F0F6FC]">4 Months</div>
                    <div className="text-[#8B949E]">MVP Launch</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#F0F6FC]">6 Months</div>
                    <div className="text-[#8B949E]">50 Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#F0F6FC]">12 Months</div>
                    <div className="text-[#8B949E]">500 Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Development Timeline */}
        <div className="mt-20">
          <RevealOnScroll>
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <h3 className="mb-5 text-3xl font-bold text-[#F0F6FC]">
                Accelerated 5-Month Development Timeline
              </h3>
              <p className="text-lg text-[#8B949E]">
                Leveraging AI tools and established foundation for rapid,
                efficient deployment
              </p>
            </div>
          </RevealOnScroll>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-[#FF6B00] to-[#4ecdc4]"></div>

            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <RevealOnScroll key={index} delay={index * 300}>
                  <div
                    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="w-5/12"></div>
                    <div className="relative flex w-2/12 justify-center">
                      <div className="h-5 w-5 rounded-full border-4 border-[#0D1117] bg-gradient-to-r from-[#FF6B00] to-[#FFC300] shadow-lg"></div>
                    </div>
                    <div className="w-5/12">
                      <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-8 shadow-xl">
                        <h4 className="mb-4 text-lg font-bold text-[#FF6B00]">
                          {phase.month}
                        </h4>
                        <p className="mb-4 text-[#8B949E]">
                          {phase.description}
                        </p>
                        <div className="rounded-lg bg-[#FF6B00]/10 p-4 text-sm">
                          <strong className="text-[#FF6B00]">
                            Deliverables:
                          </strong>{" "}
                          {phase.deliverables}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
