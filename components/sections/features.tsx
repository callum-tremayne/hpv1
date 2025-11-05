import { HeartHandshake, Share2, Sparkles, Wand2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Guided Storytelling",
    description:
      "Answer a few heartfelt prompts and our AI shapes them into a captivating narrative.",
    icon: Sparkles,
  },
  {
    title: "Cinematic Layouts",
    description:
      "Handpicked templates feel tactile and premium on every device—no design skills needed.",
    icon: Wand2,
  },
  {
    title: "Shared Moments",
    description:
      "Invite loved ones to add memories, music, or video messages in real time.",
    icon: Share2,
  },
  {
    title: "Keepsake Delivery",
    description:
      "Send as a secure microsite, printable booklet, or timed reveal for special dates.",
    icon: HeartHandshake,
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
            Everything needed to craft a digital love letter
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Heartfelt Pages combines guided storytelling with elegant UI blocks so your gift
            feels hand-made and high tech all at once.
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
