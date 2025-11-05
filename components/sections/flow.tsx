import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Tell Us About Them",
    description:
      "Share memories, inside jokes, and photos. Our AI highlights what matters most.",
    label: "Step 01",
  },
  {
    title: "Curate the Experience",
    description:
      "Pick a layout, add interactive chapters, and tailor colors to their vibe.",
    label: "Step 02",
  },
  {
    title: "Schedule the Reveal",
    description:
      "Send instantly or time the delivery for birthdays, anniversaries, and surprise parties.",
    label: "Step 03",
  },
];

export function FlowSection() {
  return (
    <section
      id="templates"
      className="w-full border-t border-border/40 bg-card py-24 text-foreground"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              How it works
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Capture their story in three guided steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Every prompt is built with behavioral science to surface meaningful memories,
              so your final page feels deeply personal.
            </p>
          </div>
          <Button size="lg" variant="secondary">
            See Template Library
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="flex flex-col bg-background/70">
              <CardHeader className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                  {step.label}
                </span>
                <CardTitle className="text-2xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-muted-foreground">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
