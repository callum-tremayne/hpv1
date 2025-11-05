import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Stories", href: "#stories" },
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-6 py-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          heartfelt<span className="text-primary">pages</span>
        </Link>
        <nav className="mx-auto hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <Button variant="secondary">Login</Button>
          <Button className="hidden sm:inline-flex">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
