import { FinalCTASection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { FlowSection } from "@/components/sections/flow";
import { Hero } from "@/components/sections/hero";
import { TestimonialsMarquee } from "@/components/sections/testimonials-marquee";
import { Navbar } from "@/components/site/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TestimonialsMarquee />
        <FeaturesSection />
        <FlowSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
