import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#30363D] py-10 text-center text-sm text-[#8B949E]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Image
            src="/PC-Logo.png"
            alt="PourCost Logo"
            width={240}
            height={32}
            className="rounded-lg"
          />
        </div>
        <p>
          &copy; 2024 PourCost AI. All Rights Reserved. This is an investment
          presentation for discussion purposes only.
        </p>
      </div>
    </footer>
  );
}
