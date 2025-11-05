"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Button } from "@/components/ui/button";

const headlineCopy = "A Unique and Digital Way to Show You Care";

export function Hero() {
  const characterRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!characterRefs.current.length) return;
    gsap.set(characterRefs.current, { yPercent: 120, opacity: 0 });
    gsap.to(characterRefs.current, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.04,
    });
  }, []);

  const words = headlineCopy.split(" ");

  characterRefs.current = [];

  return (
    <section className="relative w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/30"
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-start justify-end px-6 pb-20 pt-8">
        <div className="space-y-6 text-left text-foreground">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            AI-driven gifting
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl">
            {words.map((word, wordIndex) => (
              <div
                key={`${word}-${wordIndex}`}
                className="inline-flex overflow-hidden pr-3 last:pr-0 align-baseline"
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    key={`${wordIndex}-${charIndex}`}
                    ref={(el) => {
                      if (el) characterRefs.current.push(el);
                    }}
                    className="inline-block will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Heartfelt Pages crafts bespoke microsites powered by AI so every
            message, photo, and memory feels truly personal. Built for gifting
            special people in your life.
          </p>
          <Button size="lg" className="px-8">
            Try it out
          </Button>
        </div>
      </div>
    </section>
  );
}
