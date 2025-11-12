import { FinalCTASection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { FlowSection } from "@/components/sections/flow";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Navbar } from "@/components/site/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <FlowSection />
        <Pricing />
        <FinalCTASection />
      </main>
    </div>
  );
}
