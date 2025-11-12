import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section
      id="pricing"
      className="w-full border-t border-border/40 bg-foreground py-24 text-background"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
          Make Someone's Day
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">
          Create a meaningful gift in just a few minutes.
        </h2>
        <p className="max-w-2xl text-lg text-background/70">
          Want some inspiration? Check out some examples on our Examples Page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-transparent text-background hover:bg-background/10"
          >
            Examples
          </Button>
        </div>
      </div>
    </section>
  );
}
