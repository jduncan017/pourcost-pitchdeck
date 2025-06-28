"use client";

import { useScrollNavigation } from "~/hooks/useScrollNavigation";
import {
  Header,
  HeroSection,
  ExecutiveSummary,
  TheProblem,
  FoundationSection,
  SolutionSection,
  MarketSection,
  ReturnsSection,
  InvestmentAskSection,
  ContactSection,
  Footer,
} from "~/components/sections";

export default function HomePage() {
  const { isScrolled, activeSection, scrollToSection } = useScrollNavigation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0D1117] font-sans text-[#F0F6FC]">
      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main>
        <HeroSection onNavigate={scrollToSection} />
        <ExecutiveSummary />
        <TheProblem />
        <SolutionSection />
        <FoundationSection />
        <MarketSection />
        <ReturnsSection />
        <InvestmentAskSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
