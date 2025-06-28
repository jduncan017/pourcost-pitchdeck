import { GradientButton, RevealOnScroll } from "~/components/ui";

const highlights = [
  {
    icon: "🚀",
    title: "Proven Foundation",
    description: "8+ years of market validation with existing user base",
  },
  {
    icon: "🤖",
    title: "AI First-Mover",
    description: "Unique combination of inventory + AI training tools",
  },
  {
    icon: "📈",
    title: "Exceptional Returns",
    description: "12-36x potential in fastest-growing tech segment",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0D1117] to-[#1a1f26] py-24 text-center"
    >
      <div className="mx-auto max-w-7xl px-5">
        <RevealOnScroll>
          <h2 className="mb-8 text-4xl font-bold text-[#F0F6FC] md:text-5xl">
            Let&apos;s Build the Future of Bar Management
          </h2>
          <p className="mx-auto mb-10 max-w-[720px] text-xl text-[#8B949E]">
            We have the proven foundation, clear vision, and market insight.
            Let&apos;s partner to solve a multi-billion dollar problem and
            create exceptional returns.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="max-w-[280px] min-w-[200px] rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-8 text-center"
              >
                <div className="mb-3 text-3xl">{highlight.icon}</div>
                <h4 className="mb-4 font-bold text-[#FF6B00]">
                  {highlight.title}
                </h4>
                <p className="text-sm text-[#8B949E]">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <GradientButton
            href="mailto:josh@digitalnovastudio.com?subject=PourCost Investment Opportunity"
            size="lg"
          >
            Start the Conversation
          </GradientButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
