// app/(main)/case-studies/[slug]/page.tsx
"use client";

import { useMemo } from "react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allCaseStudies } from "contentlayer/generated";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();

  console.log("Requested slug:", slug); // Debug log

  const caseStudy = useMemo(() => {
    return allCaseStudies.find((cs) => {
      const cleanSlug = cs._raw.flattenedPath
        .replace(/\.[^/.]+$/, "")
        .replace("case-studies/", ""); // Remove the directory name
      console.log("Comparing:", cleanSlug, "with:", slug); // Debug log
      return cleanSlug === slug;
    });
  }, [slug]);

  if (!caseStudy) {
    console.log("No case study found for slug:", slug);
    return notFound();
  }

  const MDXContent = useMDXComponent(caseStudy.body.code);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <img
        src={caseStudy.thumbnail}
        alt={`${caseStudy.title} logo`}
        className="logo w-32 h-32 mx-auto"
      />
      <h2 className="text-3xl text-center font-bold my-4">{caseStudy.title}</h2>
      <MDXContent />
    </div>
  );
}
