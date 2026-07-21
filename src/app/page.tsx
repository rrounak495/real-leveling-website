import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AvatarEvolution } from "@/components/sections/avatar-evolution";
import { Demo } from "@/components/sections/demo";
import { Waitlist } from "@/components/sections/waitlist";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <HowItWorks />
      <AvatarEvolution />
      <Demo />
      <Waitlist />
    </main>
  );
}
