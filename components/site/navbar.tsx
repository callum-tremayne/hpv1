"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ctaButtons = (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
      <Button data-cta="examples" variant="ghost">
        <Link href="">Examples</Link>
      </Button>
      <Button data-cta="get-started">
        <Link href="">Get Started</Link>
      </Button>
      <Button variant="secondary" data-cta="signin-header">
        <Link href="/login">Sign in</Link>
      </Button>
    </div>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/20 backdrop-blur bg-transparent",
        scrolled ? "shadow-sm" : ""
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          heartfelt<span className="text-primary">pages</span>
        </Link>
        <div className="hidden md:flex">{ctaButtons}</div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-8">
              <div>
                <p className="text-sm uppercase text-muted-foreground">
                  Navigate
                </p>
                <div className="mt-4 flex flex-col gap-2">{ctaButtons}</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
