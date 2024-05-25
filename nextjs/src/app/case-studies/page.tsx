// app/(main)/case-studies/page.tsx
import React from "react";
import CaseStudySection from "@/sections/case-studies/CaseStudySection";

export default function CaseStudiesPage() {
  return (
    <section className="container mx-auto p-6 bg-white border-2 border-black relative">
      <h2 className="text-4xl font-extrabold mb-6 text-center bg-blue-500 text-white p-4 border-4 border-black shadow-lg">
        Case Studies. Read our Success Stories
      </h2>
      <CaseStudySection overview />
    </section>
  );
}
