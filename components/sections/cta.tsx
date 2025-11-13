import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section
      id="pricing"
      className="w-full border-t border-border/40 bg-foreground py-24 text-background"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
          Make Someone&apos;s Day
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">
          Create a meaningful gift in just a few minutes.
        </h2>
        <p className="max-w-2xl text-lg text-background/70">
          Want some inspiration? Check out some examples on our Examples Page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="">
            <Button
              size="lg"
              className="bg-background cursor-pointer text-foreground hover:bg-background/90"
            >
              Get Started
            </Button>
          </Link>
          <Link href="">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent cursor-pointer text-background hover:bg-background/10"
            >
              Examples
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
