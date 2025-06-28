import { SectionHeader, RevealOnScroll } from "~/components/ui";

export function ExecutiveSummary() {
  return (
    <section id="summary" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <RevealOnScroll>
          <SectionHeader
            title="Executive Summary"
            subtitle="PourCost transforms manual, error-prone bar operations into automated, data-driven systems that reduce costs, save time, and improve profitability in an industry where 95% of operators already use AI tools."
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mx-auto mt-12 max-w-4xl text-center">
            <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-12">
              <p className="text-xl leading-relaxed text-[#8B949E]">
                Our platform addresses the{" "}
                <span className="font-bold text-[#FF6B00]">
                  $46.8 billion in annual losses
                </span>{" "}
                due to inventory shrinkage while streamlining operations for
                over{" "}
                <span className="font-bold text-[#4ecdc4]">
                  700,000 U.S. restaurant establishments
                </span>{" "}
                through AI-powered solutions that competitors simply don&apos;t
                offer.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
