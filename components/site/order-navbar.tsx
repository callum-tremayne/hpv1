"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function OrderNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur bg-transparent flex",
        scrolled ? "shadow-sm" : ""
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
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
      </div>
    </header>
  );
}
