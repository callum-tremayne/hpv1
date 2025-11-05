"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  name: string;
  quote: string;
  avatar: string;
};

const avatarUrl = (seed: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?radius=50&seed=${encodeURIComponent(seed)}`;

const rowOne: Testimonial[] = [
  { name: "Lena Ortiz", quote: "They cried happy tears—mission accomplished.", avatar: avatarUrl("Lena Ortiz") },
  { name: "Marcus Liu", quote: "Felt like gifting a mini documentary.", avatar: avatarUrl("Marcus Liu") },
  { name: "Samira Khan", quote: "The prompts surfaced memories I'd forgotten.", avatar: avatarUrl("Samira Khan") },
  { name: "Devin Ross", quote: "Scheduled the reveal and it landed perfectly.", avatar: avatarUrl("Devin Ross") },
  { name: "Priya Patel", quote: "Easiest bespoke gift I’ve ever created.", avatar: avatarUrl("Priya Patel") },
  { name: "Noah Schmidt", quote: "Looked incredible on mobile and desktop.", avatar: avatarUrl("Noah Schmidt") },
  { name: "Rafael Dias", quote: "The AI copy felt surprisingly human.", avatar: avatarUrl("Rafael Dias") },
  { name: "Jenny Wong", quote: "My mom keeps revisiting the page weekly.", avatar: avatarUrl("Jenny Wong") },
  { name: "Ezra Miles", quote: "Love the cinematic transitions.", avatar: avatarUrl("Ezra Miles") },
  { name: "Callie Brooks", quote: "Added all of our inside jokes with ease.", avatar: avatarUrl("Callie Brooks") },
];

const rowTwo: Testimonial[] = [
  { name: "Victor Hale", quote: "Perfect for milestone launches.", avatar: avatarUrl("Victor Hale") },
  { name: "Ivy Chen", quote: "Felt premium without needing a designer.", avatar: avatarUrl("Ivy Chen") },
  { name: "Owen Carter", quote: "Collaborating with friends was seamless.", avatar: avatarUrl("Owen Carter") },
  { name: "Harper Lane", quote: "Scheduling the gift added suspense.", avatar: avatarUrl("Harper Lane") },
  { name: "Jules Park", quote: "Soundtrack integration was magical.", avatar: avatarUrl("Jules Park") },
  { name: "Anika Rao", quote: "Templates flexed to match our story.", avatar: avatarUrl("Anika Rao") },
  { name: "Gabe Flores", quote: "Faster than any slideshow app.", avatar: avatarUrl("Gabe Flores") },
  { name: "Sol Rivera", quote: "We embedded video toast recordings.", avatar: avatarUrl("Sol Rivera") },
  { name: "Mae Ortiz", quote: "HR team uses it for farewells now.", avatar: avatarUrl("Mae Ortiz") },
  { name: "Leo Barrett", quote: "Felt like gifting a personal site.", avatar: avatarUrl("Leo Barrett") },
];

function TestimonialCard({
  testimonial,
  ariaHidden = false,
  cardRef,
}: {
  testimonial: Testimonial;
  ariaHidden?: boolean;
  cardRef?: (node: HTMLDivElement | null) => void;
}) {
  return (
    <Card
      className="min-w-[240px] max-w-[240px] bg-card/90 backdrop-blur lg:min-w-[260px] lg:max-w-[260px]"
      aria-hidden={ariaHidden}
      ref={(node) => {
        if (!ariaHidden) {
          cardRef?.(node);
        }
      }}
    >
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>
              {testimonial.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">Heartfelt Creator</p>
          </div>
        </div>
        <p className="text-base leading-relaxed text-foreground">“{testimonial.quote}”</p>
      </CardContent>
    </Card>
  );
}

function MarqueeRow({
  testimonials,
  direction,
  onCardRef,
}: {
  testimonials: Testimonial[];
  direction: "left" | "right";
  onCardRef?: (node: HTMLDivElement | null) => void;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`marquee-track ${direction === "left" ? "marquee-left" : "marquee-right"}`}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            testimonial={testimonial}
            key={testimonial.name}
            cardRef={onCardRef}
          />
        ))}
        {testimonials.map((testimonial) => (
          <TestimonialCard
            testimonial={testimonial}
            key={`${testimonial.name}-duplicate`}
            ariaHidden
            cardRef={onCardRef}
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!cardsRef.current.length) return;

    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { y: 120, opacity: 0 });
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "#testimonials-marquee",
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  cardsRef.current = [];

  return (
    <section id="testimonials-marquee" className="w-full bg-transparent py-16">
      <div className="flex w-full flex-col gap-6 px-6">
        <MarqueeRow
          testimonials={rowOne}
          direction="left"
          onCardRef={(el) => {
            if (el) cardsRef.current.push(el);
          }}
        />
        <MarqueeRow
          testimonials={rowTwo}
          direction="right"
          onCardRef={(el) => {
            if (el) cardsRef.current.push(el);
          }}
        />
      </div>
    </section>
  );
}
