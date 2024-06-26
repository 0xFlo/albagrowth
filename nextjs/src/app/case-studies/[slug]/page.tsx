// app/(main)/case-studies/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allCaseStudies } from "contentlayer/generated";
import { cleanSlug } from "@/utils/url";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();

  const caseStudy = allCaseStudies.find(
    (cs) => cleanSlug(cs._raw.flattenedPath, "case-studies") === slug
  );

  if (!caseStudy) {
    return notFound();
  }

  const MDXContent = useMDXComponent(caseStudy.body.code);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white border-2 border-black relative">
      <div className="bg-white p-6 shadow-lg border-2 border-black relative">
        <div className="flex justify-center mb-4">
          <img
            src={caseStudy.thumbnail}
            alt={`${caseStudy.title} logo`}
            className="logo w-24 h-24 p-2 bg-yellow-400 border-2 border-black shadow-xl"
          />
        </div>
        <h2 className="text-4xl text-center font-bold mb-6 bg-yellow-400 p-4 shadow-xl border-2 border-black inline-block">
          {caseStudy.title}
        </h2>
        <div className="content mx-auto bg-white p-8 border-2 border-black shadow-lg">
          <MDXContent />
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-red-500 w-12 h-12 border-2 border-black"></div>
      <div className="absolute bottom-4 left-4 bg-blue-500 w-12 h-12 border-2 border-black"></div>
      <div className="absolute bottom-4 right-4 bg-yellow-500 w-12 h-12 border-2 border-black"></div>
    </div>
  );
}
