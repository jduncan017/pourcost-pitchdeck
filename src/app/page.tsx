"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function RevealOnScroll({ children, className = "", delay = 0 }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0D1117] font-sans text-[#F0F6FC]">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 z-50 w-full py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D1117]/95 shadow-2xl backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 text-2xl font-extrabold text-[#F0F6FC] transition-colors hover:text-[#FF6B00]"
          >
            <Image
              src={"/PC-Logo.png"}
              alt="PourCost Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span>PourCost</span>
          </button>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {[
                { id: "foundation", label: "Foundation" },
                { id: "crisis", label: "The Crisis" },
                { id: "solution", label: "Solution" },
                { id: "market", label: "Market" },
                { id: "returns", label: "Returns" },
                { id: "ask", label: "Investment" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`font-semibold transition-colors ${
                      activeSection === item.id
                        ? "text-[#FF6B00]"
                        : "text-[#8B949E] hover:text-[#FF6B00]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center text-center"
          style={{
            background:
              "linear-gradient(rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 0.9)), url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80') no-repeat center center/cover",
          }}
        >
          <div className="mx-auto max-w-7xl px-5">
            <h1 className="animate-fade-in-up mb-5 bg-gradient-to-r from-[#FF6B00] to-[#FFC300] bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              The AI Co-Pilot for Bar Profitability
            </h1>
            <p className="animate-fade-in-up animation-delay-200 mx-auto mb-8 max-w-4xl text-xl text-[#8B949E]">
              We&apos;re transforming an established bar management tool with a loyal
              user base into an AI-powered platform that plugs the $46.8 billion
              hole in the industry&apos;s profits.
            </p>
            <button
              onClick={() => scrollToSection("ask")}
              className="animate-fade-in-up animation-delay-400 inline-block rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FFC300] px-8 py-4 text-lg font-bold text-[#0D1117] shadow-[#FF6B00]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              View Investment Opportunity
            </button>
          </div>
        </section>

        {/* Foundation Section */}
        <section id="foundation" className="relative py-24">
          <div className="mx-auto max-w-7xl px-5">
            <RevealOnScroll>
              <div className="mx-auto mb-16 max-w-4xl text-center">
                <h2 className="mb-5 text-4xl font-bold text-[#F0F6FC] md:text-5xl">
                  Built on a Proven Foundation
                </h2>
                <p className="text-lg text-[#8B949E]">
                  We&apos;re not starting from scratch. PourCost has 8+ years of
                  market presence with an established brand, active user base,
                  and proven demand. This isn&apos;t just an idea—it&apos;s
                  market-validated evolution.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "8",
                  label: "Years of Market Presence",
                  animated: true,
                },
                { number: "103", label: "5-Star User Reviews", animated: true },
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
              ].map((stat, index) => (
                <RevealOnScroll key={index} delay={index * 200}>
                  <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-3 text-5xl font-extrabold text-[#FF6B00]">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-[#8B949E]">
                      {stat.label}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="mt-10 rounded-r-xl border-l-4 border-[#FF6B00] bg-[#161B22] p-8">
                <p className="mb-4 text-lg text-[#F0F6FC] italic">
                  &quot;This app has saved me at least 10 hours per menu update. It&apos;s
                  an essential tool for any serious beverage program.&quot;
                </p>
                <footer className="text-right font-semibold text-[#8B949E]">
                  — Beverage Director, Existing PourCost User
                </footer>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Crisis Section */}
        <section id="crisis" className="relative py-24">
          <div className="mx-auto max-w-7xl px-5">
            <RevealOnScroll>
              <div className="mb-16 text-center">
                <h2 className="mb-5 text-4xl font-bold text-red-500 md:text-6xl">
                  The Crisis:
                </h2>
                <div className="mb-5 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-6xl font-extrabold text-transparent md:text-8xl">
                  $46.8B
                </div>
                <p className="mx-auto max-w-4xl text-xl text-[#F0F6FC]">
                  Annual profit hemorrhaging from four critical, interconnected
                  wounds that outdated tools can&apos;t solve
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  title: "Inventory Blindness",
                  description:
                    "Losing 15-25% of all stock to waste, theft, and overpouring. A silent profit killer with no real-time visibility into where money disappears.",
                },
                {
                  title: "Manual Time Drain",
                  description:
                    "Managers waste 10+ hours weekly on pen-and-paper inventory and tedious data entry instead of growing the business and improving customer experience.",
                },
                {
                  title: "The Revolving Door",
                  description:
                    "With 75-100% staff turnover, critical product knowledge and recipe consistency walks out the door every single year, requiring constant retraining.",
                },
                {
                  title: "Invisible Cost Creep",
                  description:
                    "Unseen supplier price hikes silently erode margins on every drink poured, making accurate profitability analysis impossible with current tools.",
                },
              ].map((crisis, index) => (
                <RevealOnScroll key={index} delay={index * 200}>
                  <div className="group relative overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute top-0 left-0 h-1 w-full -translate-x-full transform bg-gradient-to-r from-[#FF6B00] to-[#FFC300] transition-transform duration-300 group-hover:translate-x-0"></div>
                    <h3 className="mb-4 text-xl font-bold text-[#FF6B00]">
                      {crisis.title}
                    </h3>
                    <p className="text-[#8B949E]">{crisis.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section
          id="solution"
          className="relative bg-gradient-to-br from-[#161B22] to-[#1c2128] py-24"
        >
          <div className="mx-auto max-w-7xl px-5">
            <RevealOnScroll>
              <div className="mx-auto mb-16 max-w-4xl text-center">
                <h2 className="mb-5 text-4xl font-bold text-[#F0F6FC] md:text-5xl">
                  The PourCost AI Platform
                </h2>
                <p className="text-lg text-[#8B949E]">
                  An all-in-one command center that gives bar managers their
                  time—and their profits—back through intelligent automation and
                  AI-powered insights.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "📱",
                  title: "Invoice to Inventory in a Snap",
                  description:
                    "Snap a photo of any supplier invoice. Our AI instantly updates every ingredient's cost and quantity across your entire system. Manual data entry is eliminated forever.",
                },
                {
                  icon: "💰",
                  title: "Profit on Every Pour",
                  description:
                    "Recipes and menu items update costs in real-time as supplier prices change. Know your exact margin on every cocktail, always—no more guesswork.",
                },
                {
                  icon: "🤖",
                  title: "Your Best Bartender, Cloned",
                  description:
                    "Our AI generates instant training guides, tasting notes, and quizzes for any product. New hires are trained consistently in hours, not weeks.",
                },
                {
                  icon: "📊",
                  title: "Actionable Insights, Not Just Data",
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
              ].map((feature, index) => (
                <RevealOnScroll key={index} delay={index * 150}>
                  <div className="group relative overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute top-0 left-0 h-1 w-full -translate-x-full transform bg-gradient-to-r from-[#FF6B00] to-[#FFC300] transition-transform duration-300 group-hover:translate-x-0"></div>
                    <div className="mb-4 text-3xl">{feature.icon}</div>
                    <h3 className="mb-4 text-xl font-bold text-[#FF6B00]">
                      {feature.title}
                    </h3>
                    <p className="text-[#8B949E]">{feature.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Market Section */}
        <section id="market" className="relative py-24">
          <div className="mx-auto max-w-7xl px-5">
            <RevealOnScroll>
              <div className="mx-auto mb-16 max-w-4xl text-center">
                <h2 className="mb-5 text-4xl font-bold text-[#F0F6FC] md:text-5xl">
                  A Market Primed for Disruption
                </h2>
                <p className="text-lg text-[#8B949E]">
                  We&apos;re entering the fastest-growing segment of restaurant tech,
                  where a massive 87% of operators are dissatisfied with their
                  current tools and actively seeking better solutions.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
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
              ].map((stat, index) => (
                <RevealOnScroll key={index} delay={index * 200}>
                  <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-10 text-center">
                    <div className="mb-3 bg-gradient-to-r from-[#4ecdc4] to-[#96c93d] bg-clip-text text-6xl font-extrabold text-transparent">
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <div className="font-semibold text-[#8B949E]">
                      {stat.label}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Business Model */}
            <RevealOnScroll>
              <div className="mx-auto mt-20 mb-16 max-w-4xl text-center">
                <h2 className="mb-5 text-4xl font-bold text-[#F0F6FC] md:text-5xl">
                  Simple, Scalable SaaS Model
                </h2>
                <p className="text-lg text-[#8B949E]">
                  Our tiered subscription model provides an accessible entry
                  point for small bars and a powerful, feature-rich platform for
                  larger operations with predictable revenue growth.
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
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
              ].map((plan, index) => (
                <RevealOnScroll key={index} delay={index * 200}>
                  <div
                    className={`relative rounded-xl bg-[#161B22] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      plan.popular
                        ? "transform border-2 border-[#FF6B00] bg-gradient-to-br from-[#161B22] to-[#1a1f26] lg:scale-105"
                        : "border-2 border-[#30363D]"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FFC300] px-5 py-2 text-sm font-bold text-[#0D1117]">
                        Most Popular
                      </div>
                    )}
                    <h3 className="mb-4 text-xl font-bold">{plan.name}</h3>
                    <div className="mb-3 text-5xl font-extrabold text-[#FF6B00]">
                      {plan.price}
                      <span className="text-base text-[#8B949E]">
                        {plan.period}
                      </span>
                    </div>
                    <p className="mb-8 text-[#8B949E]">{plan.description}</p>
                    <ul className="mb-8 space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-[#F0F6FC]">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                  {[
                    {
                      year: "Year 1",
                      arr: "$380K ARR",
                      details: "500 customers × $63 avg",
                    },
                    {
                      year: "Year 2",
                      arr: "$1.6M ARR",
                      details: "2,000 customers × $67 avg",
                    },
                    {
                      year: "Year 3",
                      arr: "$3.6M ARR",
                      details: "5,000 customers × $72 avg",
                    },
                  ].map((projection, index) => (
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
            </RevealOnScroll>
          </div>
        </section>

        {/* Returns Section */}
        <section id="returns" className="relative py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-12 md:p-20">
              <RevealOnScroll>
                <div className="mb-12 text-center">
                  <h2 className="mb-5 text-4xl font-bold text-white md:text-6xl">
                    Exceptional Return Potential
                  </h2>
                  <p className="mx-auto max-w-3xl text-xl text-[#8B949E]">
                    Your $40,000 investment for 20% equity positions you for
                    extraordinary returns in the fastest-growing restaurant tech
                    segment.
                  </p>
                </div>
              </RevealOnScroll>

              <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {[
                  {
                    title: "Conservative Success",
                    color: "#4ecdc4",
                    multiplier: "3.6x",
                    value: "$144,000 stake value",
                    timeframe: "Years 2-3 | 53% annual ROI",
                    description:
                      "150 restaurants at $100/month average revenue",
                  },
                  {
                    title: "Strong Growth",
                    color: "#FF6B00",
                    multiplier: "12x",
                    value: "$480,000 stake value",
                    timeframe: "Year 4 | 86% annual ROI",
                    description:
                      "400 restaurants with tiered pricing expansion",
                  },
                  {
                    title: "Market Leader",
                    color: "#FFC300",
                    multiplier: "36x",
                    value: "$1,440,000 stake value",
                    timeframe: "Year 5 | 105% annual ROI",
                    description: "1,000+ restaurants with enterprise features",
                  },
                ].map((scenario, index) => (
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
                      <div className="mb-5 text-[#8B949E]">
                        {scenario.timeframe}
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
                  {[
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
                      return: "$480K-$1.4M",
                      color: "from-[#FF6B00] to-[#FFC300]",
                      highlight: true,
                    },
                  ].map((investment, index) => (
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
                  {[
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
                  ].map((reason, index) => (
                    <div key={index} className="rounded-xl bg-white/5 p-6">
                      <div className="mb-2 text-xl font-bold text-[#FF6B00]">
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

        {/* Investment Ask Section */}
        <section id="ask" className="relative py-24">
          <div className="mx-auto max-w-7xl px-5">
            <RevealOnScroll>
              <div className="mx-auto mb-16 max-w-4xl text-center">
                <h2 className="mb-5 text-4xl font-bold text-[#F0F6FC] md:text-5xl">
                  The Investment Opportunity
                </h2>
                <p className="text-lg text-[#8B949E]">
                  Join us in transforming the $9.17B restaurant tech market with
                  a proven foundation and clear path to exceptional returns.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <RevealOnScroll className="-translate-x-8 transform opacity-0 transition-all duration-700">
                <div className="text-center lg:text-left">
                  <div className="mb-3 bg-gradient-to-r from-[#FF6B00] to-[#FFC300] bg-clip-text text-6xl font-extrabold text-transparent md:text-8xl">
                    $40K
                  </div>
                  <div className="mb-8 text-2xl text-[#8B949E]">
                    for 20% Equity
                  </div>
                  <p className="mb-8 text-lg text-[#F0F6FC]">
                    We&apos;re seeking seed investment to accelerate our MVP
                    development and execute our go-to-market strategy, building
                    upon our established foundation.
                  </p>

                  <div className="my-8 flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-start">
                    <div className="text-center">
                      <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#4ecdc4] to-[#96c93d] text-lg font-bold text-white">
                        <div>
                          <div className="text-2xl">80%</div>
                          <div className="text-sm">Founder</div>
                        </div>
                      </div>
                      <div className="font-bold">I Retain Control</div>
                    </div>
                    <div className="text-3xl font-bold text-[#8B949E]">+</div>
                    <div className="text-center">
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
                        <div className="text-sm text-[#8B949E]">
                          $4K/month living expenses
                        </div>
                      </div>
                      <div className="font-bold text-[#FF6B00]">$20,000</div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <div>
                        <div className="font-bold text-[#F0F6FC]">
                          Marketing & Launch
                        </div>
                        <div className="text-sm text-[#8B949E]">
                          Customer acquisition, conferences
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
                        <div className="font-bold text-[#F0F6FC]">
                          12 Months
                        </div>
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
                  {[
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
                  ].map((phase, index) => (
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

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gradient-to-br from-[#0D1117] to-[#1a1f26] py-24 text-center"
        >
          <div className="mx-auto max-w-7xl px-5">
            <RevealOnScroll>
              <h2 className="mb-8 text-4xl font-bold text-[#F0F6FC] md:text-5xl">
                Let&apos;s Build the Future of Bar Management
              </h2>
              <p className="mx-auto mb-10 max-w-3xl text-xl text-[#8B949E]">
                We have the proven foundation, clear vision, and market insight.
                Let&apos;s partner to solve a multi-billion dollar problem and create
                exceptional returns.
              </p>

              <div className="mb-12 flex flex-wrap justify-center gap-8">
                {[
                  {
                    icon: "🚀",
                    title: "Proven Foundation",
                    description:
                      "8+ years of market validation with existing user base",
                  },
                  {
                    icon: "🤖",
                    title: "AI First-Mover",
                    description:
                      "Unique combination of inventory + AI training tools",
                  },
                  {
                    icon: "📈",
                    title: "Exceptional Returns",
                    description:
                      "12-36x potential in fastest-growing tech segment",
                  },
                ].map((highlight, index) => (
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

              <a
                href="mailto:contact@pourcost.com?subject=PourCost Investment Opportunity"
                className="inline-block rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FFC300] px-10 py-5 text-xl font-bold text-[#0D1117] shadow-[#FF6B00]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Start the Conversation
              </a>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#30363D] py-10 text-center text-sm text-[#8B949E]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Image
              src={"/PC-Logo.png"}
              alt="PourCost Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-bold text-[#F0F6FC]">PourCost</span>
          </div>
          <p>
            &copy; 2024 PourCost AI. All Rights Reserved. This is an investment
            presentation for discussion purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
