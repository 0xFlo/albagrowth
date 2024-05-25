// nextjs/src/app/(main)/page.tsx
import HeroSection from "@/sections/HeroSection";
import CaseStudySection from "@/sections/case-studies/CaseStudySection";
import TeamSection from "@/sections/team/TeamSection";
import InteractiveSection from "@/sections/InteractiveSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <CaseStudySection />
      <TeamSection />
      <InteractiveSection />
    </div>
  );
}
