"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
      <Link href="">
        <Button
          data-cta="examples"
          variant="outline"
          className="cursor-pointer"
        >
          Examples
        </Button>
      </Link>
      <Link href="">
        <Button data-cta="get-started" className="cursor-pointer">
          Get Started
        </Button>
      </Link>
      <Link href="/sign-in">
        <Button
          variant="secondary"
          data-cta="signin-header"
          className="cursor-pointer"
        >
          Sign in
        </Button>
      </Link>
    </div>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur bg-transparent",
        scrolled ? "shadow-sm" : ""
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex flex-row gap-3 text-foreground">
          <Image
            src="/logo.svg"
            alt="Heartfelt Pages logo"
            width={140}
            height={140}
            priority
            className="h-8 w-auto"
          />
          <span className="text-lg font-semibold tracking-tight">
            heartfelt<span className="text-primary">pages</span>
          </span>
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
