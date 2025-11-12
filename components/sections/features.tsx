import { Heart, Image, Link2, Palette } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Personal Touch",
    description:
      "Add your own words, photos, and memories to create a page that feels one-of-a-kind.",
    icon: Heart,
  },
  {
    title: "Beautiful Themes",
    description:
      "Choose from curated designs that perfectly match the occasion—like Valentine’s Day, birthdays, or anniversaries.",
    icon: Palette,
  },
  {
    title: "Photo Memories",
    description:
      "Upload your favorite moments together, complete with captions, dates, and special locations.",
    icon: Image,
  },
  {
    title: "Share Instantly",
    description:
      "Once complete, share your unique link with someone special—no app or download required.",
    icon: Link2,
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full border-t border-border/40 bg-gradient-to-b from-background via-background to-background/80 py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 text-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Features
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Everything you need to create something meaningful
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Heartfelt Pages makes it easy to design and share a personalised
            digital gift—crafted with love, and made to last.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full text-left">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
