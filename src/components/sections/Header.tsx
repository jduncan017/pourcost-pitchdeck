import Image from "next/image";

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navigationItems = [
  { id: "foundation", label: "Foundation" },
  { id: "crisis", label: "The Crisis" },
  { id: "solution", label: "Solution" },
  { id: "market", label: "Market" },
  { id: "returns", label: "Returns" },
  { id: "ask", label: "Investment" },
];

export function Header({ isScrolled, activeSection, onNavigate }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D1117]/95 shadow-2xl backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-3 text-2xl font-extrabold text-[#F0F6FC] transition-colors hover:text-[#FF6B00]"
        >
          <Image
            src="/PC-Logo.png"
            alt="PourCost Logo"
            width={120}
            height={32}
            className="rounded-lg"
          />
        </button>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
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
  );
}
