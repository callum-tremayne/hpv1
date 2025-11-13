import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const steps = [
  {
    title: "Customise Your Page",
    description: "Enter your message, upload images, and choose a theme.",
    label: "Step 01",
  },
  {
    title: "Choose Your Components",
    description:
      "Make it more special by adding components such as, a countdown or a song that means something",
    label: "Step 02",
  },
  {
    title: "Share with a Unique Link",
    description: "Send your custom page to yourself or a loved one.",
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
              Create a heartfelt page in just three simple steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Designing something meaningful has never been easier. Personalise
              your page, add thoughtful touches, and share a lasting memory—all
              within minutes.
            </p>
          </div>
          <Link href="">
            <Button size="lg" variant="secondary" className="cursor-pointer">
              See Examples
            </Button>
          </Link>
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
