import { GradientButton } from "~/components/ui";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center text-center"
      style={{
        background:
          "linear-gradient(rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 0.9)), url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80') no-repeat center center/cover",
      }}
    >
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="animate-fade-in-up mx-auto mb-5 max-w-[960px] bg-gradient-to-r from-[#FF6B00] to-[#FFC300] bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          The AI Co-Pilot for Modern Bar Management
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mx-auto mb-8 max-w-[800px] text-xl text-[#bbc2ca]">
          We&apos;re transforming bar management with an AI-powered platform
          that plugs the $46.8 billion hole in hospitality profits.
        </p>
        <GradientButton
          onClick={() => onNavigate("ask")}
          size="md"
          className="animate-fade-in-up animation-delay-400"
        >
          View Investment Opportunity
        </GradientButton>
      </div>
    </section>
  );
}
