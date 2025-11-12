/**
 * Pricing section rebuilt with shadcn/ui cards, framer-motion reveals,
 * and a new Custom tier for bespoke requests.
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, PenSquare, Sparkles, Wand2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Tier = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  oldPrice?: string;
  badge?: string;
  note?: string;
  highlight?: boolean;
  icon: LucideIcon;
  features: string[];
  href: string;
  cta: string;
};

const tiers: Tier[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Create a heartfelt page with core components in minutes.",
    price: "Free",
    badge: "Limited time",
    oldPrice: "£4.99",
    note: "Perfect for first-time creators who want to share something special quickly.",
    icon: Wand2,
    features: [
      "Personalised page layout with your own copy",
      "Upload up to 6 images plus 1 embedded song",
      "Reasons why + handwritten note sections",
      "Live special-date countdown",
      "Shareable heartfelt-pages.com link",
    ],
    href: "/create-your-page/wizard?plan=basic",
    cta: "Start for free",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Unlimited creativity, forever hosting, and custom URLs.",
    price: "£4.99",
    oldPrice: "£9.99",
    badge: "Most loved",
    note: "Enhance everything in Basic with unlimited media, themes, and lifetime hosting.",
    highlight: true,
    icon: Sparkles,
    features: [
      "Everything in Basic",
      "Unlimited photos & extra photo sections",
      "Premium themes, fonts, and bespoke components",
      "Up to 10 “reasons why” entries",
      "Custom URL (heartfelt-pages.com/yourname)",
      "Forever hosting + updates",
    ],
    href: "/create-your-page/wizard?plan=premium",
    cta: "Upgrade to Premium",
  },
  {
    id: "custom",
    name: "Custom",
    description: "Need something truly unique? Collaborate with us directly.",
    price: "Let’s chat",
    badge: "New",
    note: "For proposals, brand launches, or multi-page love stories that need a bespoke touch.",
    icon: PenSquare,
    features: [
      "Work 1:1 with our design & dev team",
      "Bespoke animations, sections, and integrations",
      "Multiple page flows & advanced storytelling",
      "Custom domains, analytics, and hosting needs",
      "Priority launch support and revisions",
    ],
    href: "mailto:hello@heartfelt-pages.com?subject=Custom%20Heartfelt%20Page%20Request",
    cta: "Contact us",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full border-t border-border/40 bg-gradient-to-b from-background via-background to-background/80 py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Pricing"
          align="center"
          className="mx-auto max-w-3xl text-center"
          title="Choose a plan that matches the moment"
          description="Start for free, unlock premium components when you’re ready, or chat to us for a fully bespoke build."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              custom={index}
              variants={cardVariants}
              className="flex h-full"
            >
              <Card
                className={cn(
                  "flex flex-1 flex-col border-border/70 bg-background/70",
                  tier.highlight &&
                    "border-primary/50 bg-primary/5 shadow-xl shadow-primary/20"
                )}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <tier.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardDescription className="text-base">
                    {tier.description}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-end gap-2">
                      <p className="text-4xl font-semibold">{tier.price}</p>
                      {tier.oldPrice ? (
                        <span className="text-sm font-semibold text-muted-foreground/80 line-through">
                          {tier.oldPrice}
                        </span>
                      ) : null}
                    </div>
                    {tier.priceSuffix ? (
                      <span className="text-sm font-medium text-muted-foreground">
                        {tier.priceSuffix}
                      </span>
                    ) : null}
                    {tier.badge ? (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {tier.badge}
                      </span>
                    ) : null}
                  </div>
                  {tier.note ? (
                    <p className="text-sm text-muted-foreground">{tier.note}</p>
                  ) : null}
                </CardHeader>

                <CardContent className="flex flex-1 flex-col justify-between space-y-6">
                  <ul className="space-y-3 text-sm">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <Check className="mt-1 h-4 w-4 flex-none text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      "w-full text-center",
                      tier.highlight ? "" : "border border-border"
                    )}
                    variant={tier.highlight ? "default" : "ghost"}
                    data-cta={`pricing-${tier.id}`}
                  >
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
