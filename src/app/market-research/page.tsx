"use client";

import Link from "next/link";
import Image from "next/image";
import { GradientButton } from "~/components/ui";
import { Footer } from "~/components/sections/Footer";
import { RevealOnScroll } from "~/hooks/revealOnScroll";

export default function PourCostMarketResearch() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0D1117] font-sans text-[#F0F6FC]">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-[#30363D] bg-[#0D1117]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/PC-Logo.png"
              alt="PourCost Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-bold text-[#F0F6FC]">PourCost</span>
          </div>
          <GradientButton href="/" size="sm">
            Back to Pitch Deck
          </GradientButton>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="mx-auto max-w-4xl px-5">
            <RevealOnScroll>
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-bold text-[#F0F6FC] md:text-6xl">
                  Market Opportunity for AI-Driven Bar & Restaurant Inventory
                  Management
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-[#8B949E]">
                  Comprehensive market analysis of the $9.17B restaurant
                  inventory management software segment with 15% CAGR growth
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Total Addressable Market Section */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-5">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-12">
                <h2 className="mb-8 text-3xl font-bold text-[#F0F6FC] md:text-4xl">
                  Total Addressable Market (TAM)
                </h2>

                <div className="space-y-6 text-[#8B949E]">
                  <p className="text-lg leading-relaxed">
                    The foodservice industry is enormous, providing a broad base
                    of potential customers for a bar and restaurant inventory
                    management solution. In the United States alone, there are
                    over{" "}
                    <Link
                      href="https://www.zippia.com/restaurant-manager-jobs/trends/"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      700,000 restaurant establishments
                    </Link>
                    . This includes a substantial number of bars and drinking
                    places – approximately{" "}
                    <Link
                      href="https://www.ibisworld.com/united-states/market-research-reports/bar-nightclub-industry/"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      67,800 bars and nightclubs nationwide
                    </Link>{" "}
                    – which would be primary targets for a liquor inventory and
                    menu management platform. Full-service restaurants (both
                    independent and chains) number around{" "}
                    <Link
                      href="https://www.ibisworld.com/industry-statistics/number-of-businesses/full-service-restaurants-united-states/"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      287,600 in the U.S.
                    </Link>{" "}
                    and often have significant beverage programs, indicating a
                    large addressable market of venues that manage alcohol
                    inventory.
                  </p>

                  <p className="text-lg leading-relaxed">
                    On a revenue basis, the market for restaurant management and
                    inventory software is also sizeable and growing. The{" "}
                    <Link
                      href="https://www.businessresearchinsights.com/market-reports/restaurant-management-software-market-105564"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      global restaurant management software market
                    </Link>{" "}
                    (covering POS, inventory, etc.) was valued around $2.72
                    billion in 2024 and is projected to reach $6.11 billion by
                    2033. Focusing specifically on back-of-house operations like
                    inventory and purchasing, the{" "}
                    <Link
                      href="https://www.globenewswire.com/en/news-release/2023/11/13/2780599/0/en/Restaurant-Inventory-Management-Purchasing-Software-Market-to-Reach-USD-9-17-Billion-by-2030.html"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      restaurant inventory management software segment
                    </Link>{" "}
                    grew from about $3.45 billion in 2023 to $3.95 billion in
                    2024, and is expected to surge to $9.17 billion by 2030
                    (nearly 15% CAGR). These figures suggest a rapidly expanding
                    market for solutions that help food and beverage businesses
                    track stock, control costs, and streamline operations.
                  </p>

                  <p className="text-lg leading-relaxed">
                    While our initial target market is U.S. bars and
                    restaurants, this segment is part of a global trend. The
                    U.S. is one of the largest contributors to restaurant tech
                    spending, with the restaurant industry projected to generate{" "}
                    <Link
                      href="https://restaurant.org/research-and-media/research/research-reports/state-of-the-restaurant-industry"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      $1.5 trillion in sales in 2025
                    </Link>
                    . This provides a strong foundation for a subscription-based
                    software service. If even a fraction of the hundreds of
                    thousands of U.S. establishments adopt a monthly SaaS
                    product to manage their beverage program, the annual revenue
                    potential is in the billions. In summary, the TAM
                    encompasses hundreds of thousands of hospitality venues in
                    the U.S. (and millions globally) and a multi-billion dollar
                    software market – a robust opportunity for a new inventory
                    and menu management platform.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Market Growth Section */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-5">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-12">
                <h2 className="mb-8 text-3xl font-bold text-[#F0F6FC] md:text-4xl">
                  Market Growth and Tech Adoption Trends
                </h2>

                <div className="space-y-6 text-[#8B949E]">
                  <p className="text-lg leading-relaxed">
                    The restaurant and bar industry is undergoing rapid digital
                    transformation, which bodes well for adoption of an
                    AI-driven inventory management app. Restaurants are
                    investing in technology at unprecedented rates:{" "}
                    <Link
                      href="https://www.restroworks.com/blog/restaurant-technology-statistics/"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      51% of operators invested in new tech in 2023
                    </Link>{" "}
                    to boost efficiency, and 55% plan to invest more in 2024.
                    According to the National Restaurant Association, a large
                    majority of operators (76%) agree that using technology
                    provides a competitive advantage, yet only 13% are fully
                    satisfied with their existing tech stack. This gap
                    highlights demand for better solutions that address unmet
                    needs in operations.
                  </p>

                  <p className="text-lg leading-relaxed">
                    One of the fastest-growing tech categories for restaurants
                    is inventory management systems. Many businesses are
                    abandoning manual inventory tracking in favor of smart
                    systems that monitor stock levels, reduce waste, and control
                    costs in real time. Globally, the{" "}
                    <Link
                      href="https://www.globenewswire.com/en/news-release/2023/11/13/2780599/0/en/Restaurant-Inventory-Management-Purchasing-Software-Market-to-Reach-USD-9-17-Billion-by-2030.html"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      restaurant inventory software market
                    </Link>{" "}
                    is on a strong growth trajectory, climbing from about $3.95B
                    in 2024 to an estimated $9.17B by 2030. Drivers behind this
                    growth include the rising adoption of cloud-based tools and
                    the need for streamlined back-of-house operations in an
                    omnichannel dining environment. Restaurants increasingly
                    seek integrated platforms that can handle ordering,
                    inventory, menu management, and analytics in one place.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Another major trend is the incorporation of artificial
                    intelligence (AI) and automation in restaurant operations.
                    AI is moving into back-of-house tasks like demand
                    forecasting, inventory optimization, and labor scheduling.
                    In fact,{" "}
                    <Link
                      href="https://www.touchbistro.com/blog/restaurant-technology-statistics/"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      95% of surveyed independent restaurants
                    </Link>{" "}
                    report using some form of AI in their operations – with
                    AI-assisted inventory management, menu optimization, and
                    reservation systems being common applications. This shows
                    that even smaller restaurant operators are open to AI-driven
                    solutions that can improve efficiency. Predictive analytics
                    is a key innovation: modern platforms use AI to analyze
                    sales patterns, local events, and other data to forecast
                    inventory needs and recommend optimal stock levels. Industry
                    experts predict &ldquo;accelerated back-of-house
                    automation&rdquo; in areas like inventory tracking and cost
                    control as a top trend going forward.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Overall, the market climate is very favorable. Digital tools
                    are now central to how restaurants run – from POS systems
                    and online ordering to inventory and analytics. The{" "}
                    <Link
                      href="https://www.businessresearchinsights.com/market-reports/restaurant-technology-market-106661"
                      target="_blank"
                      className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                    >
                      global restaurant technology market
                    </Link>{" "}
                    was estimated at $59.3 billion in 2024 and is projected to
                    reach an astounding $314.8 billion by 2033 (16% CAGR),
                    underscoring how rapidly restaurants are embracing tech
                    across the board. Within this, back-office and inventory
                    solutions are a priority: about 52% of operators plan to use
                    technology for back-office tasks like inventory, accounting,
                    and compliance. The post-pandemic era has only accelerated
                    these trends, as 73% of restaurants say their productivity
                    improved after adopting new tech tools. In summary,
                    restaurants know they must digitize to remain competitive,
                    and they are actively looking for effective platforms –
                    especially in areas (like inventory management and training)
                    where current tools have left them unsatisfied.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-5">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-12">
                <h2 className="mb-8 text-3xl font-bold text-[#F0F6FC] md:text-4xl">
                  Key Pain Points in Bar & Beverage Management
                </h2>

                <div className="space-y-6 text-[#8B949E]">
                  <p className="text-lg leading-relaxed">
                    Despite the industry&apos;s size and growth, bars and
                    restaurants continue to struggle with fundamental
                    operational challenges that our proposed solution is
                    designed to solve. Some of the key pain points in managing a
                    bar or beverage program include:
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Inventory Shrinkage and Losses
                      </h3>
                      <p className="text-[#8B949E]">
                        One of the biggest profit killers in bars is inventory
                        &ldquo;shrinkage&rdquo; – losses due to overpouring,
                        spillage, theft, and waste. Industry studies find that
                        many bars lose about 15–20% of their potential profits
                        to employee theft or careless over-pouring.{" "}
                        <Link
                          href="https://www.bar-i.com/blog/how-much-liquor-do-bars-lose-during-inventory-audits"
                          target="_blank"
                          className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                        >
                          Bar-i
                        </Link>{" "}
                        estimates many bars lose 15–20% of profits to theft or
                        over-pouring.{" "}
                        <Link
                          href="https://www.barminder.com/blog/restaurant-inventory-management"
                          target="_blank"
                          className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                        >
                          BarMinder
                        </Link>{" "}
                        reports rates as high as 25%. In fact, average shrinkage
                        rates across the bar industry have been estimated as
                        high as 25% of inventory (representing roughly $46.8
                        billion in lost revenue in the U.S. in 2018). This level
                        of loss is enormous, and it happens largely because
                        owners lack visibility into usage and variance.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Time-Consuming Manual Processes
                      </h3>
                      <p className="text-[#8B949E]">
                        Many establishments still rely on manual methods (pen,
                        paper, and spreadsheets) to track stock and costs. The
                        &ldquo;industry standard&rdquo; for inventory counting
                        is roughly 2 hours of staff time with a clipboard in the
                        back room. Not only is this labor-intensive, it&apos;s
                        prone to human error and often done inconsistently.
                        Staff are usually busy with service, so counts get
                        rushed or skipped, leading to inaccurate data.
                        Afterwards, managers must re-enter that data into
                        spreadsheets or ordering systems, doubling the workload.
                        This archaic process means managers lack real-time
                        inventory data and spend many hours on administrative
                        work.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Cost Management and Menu Pricing
                      </h3>
                      <p className="text-[#8B949E]">
                        Bars and restaurants face constant fluctuations in
                        supplier prices for liquor and ingredients. Without a
                        good system, it&apos;s hard to keep track of changing
                        unit costs from distributors and how those impact pour
                        costs or menu item profitability. Operators may not
                        realize when an ingredient&apos;s cost has risen,
                        hurting margins on a drink. Additionally, calculating
                        the exact cost per cocktail (and ideal selling price)
                        can be tedious if done by hand. An integrated platform
                        that ingests purchase prices from invoices and links to
                        recipes can give owners instant insight into recipe
                        costs, margin, and suggested pricing for menu items.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Staff Training and Knowledge Retention
                      </h3>
                      <p className="text-[#8B949E]">
                        High employee turnover in hospitality exacerbates
                        training challenges. Full-service restaurants typically
                        see{" "}
                        <Link
                          href="https://www.paytronix.com/resources/articles/paytronix-annual-restaurant-franchise-report-2024/"
                          target="_blank"
                          className="text-[#4ecdc4] underline transition-colors hover:text-[#FF6B00]"
                        >
                          75%–100% staff turnover annually
                        </Link>{" "}
                        (and quick-service restaurants have 130%+ turnover).
                        This means bar managers are constantly training new
                        bartenders and servers on the menu, recipes, and product
                        knowledge. Training is time-consuming and inconsistent;
                        new staff often make mistakes like improper pours or
                        lack the knowledge to sell a drink effectively.
                        Consistency suffers when each bartender makes a cocktail
                        slightly differently. There&apos;s a need for tools to
                        standardize and simplify training, such as automatically
                        generated recipe cards, tasting notes, and even quizzes
                        for staff.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Lack of Data-Driven Insights
                      </h3>
                      <p className="text-[#8B949E]">
                        Many independent bars and restaurants do not analyze
                        their sales and inventory data deeply, which leads to
                        missed opportunities. For example, without integration
                        to the POS, a manager might not easily see that a
                        certain cocktail is underperforming or that an
                        ingredient is sitting on the shelf too long. Questions
                        like &ldquo;What are my highest pour-cost items?&rdquo;
                        or &ldquo;Which menu item has the best margin?&rdquo;
                        are hard to answer without consolidating data. Real-time
                        analytics and AI-driven insights can address this by
                        identifying trends (e.g. a spirit that isn&apos;t
                        selling, or comparisons of actual usage vs. theoretical
                        usage). Operators increasingly want actionable
                        suggestions to improve their bar program – whether
                        it&apos;s optimizing pricing, eliminating waste, or
                        tweaking the menu – but they need a system that can
                        crunch the numbers for them.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    In summary, the status quo for many bar programs is
                    inefficient and costly: significant revenue leaks from
                    inventory shrinkage, hours of manager time lost to manual
                    inventory counts, difficulty in keeping pricing up-to-date,
                    and continuous retraining of staff with varying results.
                    Each of these pain points represents a problem that a
                    well-designed application (with features like invoice
                    scanning, dynamic cost tracking, recipe management, and
                    AI-driven training content) can solve.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Opportunity Section */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-5">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-12">
                <h2 className="mb-8 text-3xl font-bold text-[#F0F6FC] md:text-4xl">
                  Opportunity for an AI-Driven Solution
                </h2>

                <div className="space-y-6 text-[#8B949E]">
                  <p className="text-lg leading-relaxed">
                    Given the large market and the pain points above, there is a
                    timely opportunity to introduce an AI-driven inventory and
                    menu management platform tailored for bars and restaurants.
                    Such a solution directly addresses the industry&apos;s needs
                    and aligns with current technology trends:
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Reducing Shrinkage and Waste
                      </h3>
                      <p className="text-[#F0F6FC]">
                        By digitizing inventory management, the system can
                        provide real-time tracking of each product (down to each
                        bottle), flagging variances between expected and actual
                        usage. Case studies show that implementing inventory
                        control software can virtually eliminate over-pouring
                        and theft by holding staff accountable and alerting
                        owners to problems. Even a few percentage points
                        improvement in liquor cost can translate to thousands of
                        dollars saved per month for a busy bar. Our tool would
                        leverage AI to analyze usage patterns and even detect
                        anomalies (e.g. a spike in usage of a certain spirit
                        that might indicate over-pouring), helping operators
                        clamp down on losses.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Automation and Efficiency Gains
                      </h3>
                      <p className="text-[#F0F6FC]">
                        An AI-powered invoice scanning feature means that when a
                        bar receives a delivery, they can simply snap a photo of
                        the invoice and have the system update all item
                        quantities and costs in the inventory. This removes the
                        manual data entry burden. Over time, the platform can
                        learn purchasing patterns and suggest optimal reorder
                        points, or even alert when costs from a vendor increase
                        abnormally. Automating routine tasks – inventory counts,
                        cost calculations, recipe costing – frees up
                        managers&apos; time to focus on service and strategy.
                        Our solution would integrate these tasks and perhaps
                        interface with POS data to automatically deduct sold
                        items from inventory, maintaining an up-to-date stock
                        count.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Integrated Menu Engineering
                      </h3>
                      <p className="text-[#F0F6FC]">
                        By having all ingredient data (including ABV, cost,
                        etc.) in one database, the app can make menu creation
                        and pricing almost turnkey. When the user builds a
                        cocktail recipe in the system, it can instantly
                        calculate the total cost per drink, suggest a price for
                        a target profit margin, and even calculate the overall
                        cocktail&apos;s alcohol content (ABV). This not only
                        speeds up menu development but also ensures
                        profitability is built-in. The inclusion of a knowledge
                        base of spirits (with AI pulling details on each
                        ingredient) adds value: the platform can automatically
                        generate a descriptive blurb or tasting notes for each
                        cocktail. This can be used to create polished menu
                        descriptions or to form the basis of a staff training
                        guide.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        AI-Enhanced Training and Consistency
                      </h3>
                      <p className="text-[#F0F6FC]">
                        The ability to generate training guides and quizzes with
                        a click of a button would be a game-changer for
                        high-turnover environments. Our platform can use AI to
                        compile key information about each cocktail
                        (ingredients, flavor profile, selling tips) into a
                        simple one-pager for staff. It could also formulate quiz
                        questions to test knowledge retention. By doing so,
                        onboarding new bartenders becomes faster and more
                        standardized. By leveraging AI, our solution
                        distinguishes itself from traditional inventory
                        software. It can, for example, answer ad-hoc questions
                        like, &ldquo;What&apos;s the cheapest cocktail on my
                        menu to make?&rdquo; or &ldquo;How can I reduce my
                        overall pour cost?&rdquo; – effectively acting as a
                        smart assistant for the bar manager.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-6">
                      <h3 className="mb-3 text-lg font-bold text-[#FF6B00]">
                        Data-Driven Insights and POS Integration
                      </h3>
                      <p className="text-[#F0F6FC]">
                        Finally, by connecting with the point-of-sale system,
                        the platform can marry inventory data with sales data.
                        This unlocks powerful analytics: the app could highlight
                        the variance between sold drinks and depleted inventory
                        (to spot losses), identify top and bottom sellers, and
                        even forecast what liquor will run out when based on
                        current sales velocity. The trend in the industry is
                        toward &ldquo;fully connected kitchens&rdquo; and bar
                        operations that use real-time data to optimize
                        purchasing and preparation. With our system, a bar
                        manager could get suggestions like &ldquo;Margaritas are
                        10% of sales but account for 18% of cost – consider
                        repricing or promoting a higher-margin item&rdquo; or
                        &ldquo;You sold 20% more IPA this week, you may need to
                        order extra kegs.&rdquo; These actionable insights would
                        normally require a data analyst, but AI can deliver them
                        automatically.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    In conclusion, the convergence of market readiness, evident
                    pain points, and advancing technology creates a perfect
                    opening for this product. Bars and restaurants in the U.S.
                    (our initial market) are actively seeking ways to modernize
                    their operations and improve profitability. However, many
                    are dissatisfied with piecemeal solutions and legacy
                    methods. A comprehensive platform that scans invoices,
                    tracks inventory and costs, calculates cocktail metrics,
                    assists with menu pricing, and leverages AI for staff
                    training and operational Q&A would directly address the
                    gaps. The total addressable market is large and growing, and
                    by offering a solution that tackles inventory control and
                    leverages AI for added intelligence, we position ourselves
                    at the forefront of the industry&apos;s evolution.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-12">
                <h2 className="mb-6 text-3xl font-bold text-[#F0F6FC] md:text-4xl">
                  Ready to Explore the Investment Opportunity?
                </h2>
                <p className="mb-8 text-lg text-[#8B949E]">
                  This market research supports our $40K investment ask for 20%
                  equity in PourCost. All signs indicate that an AI-driven
                  inventory management app could gain significant traction,
                  tapping into the multi-billion dollar restaurant tech market
                  and helping operators save money, save time, and run smarter
                  bar programs.
                </p>
                <GradientButton href="/" size="lg">
                  View Full Pitch Deck
                </GradientButton>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
