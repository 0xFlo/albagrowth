// app/(main)/case-studies/page.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { allCaseStudies } from "contentlayer/generated";

export function CaseStudyCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {allCaseStudies.map((caseStudy, index) => (
        <Link
          href={`/${caseStudy._raw.flattenedPath}`} // Direct use without adding extra 'case-studies'
          key={index}
        >
          <Card className="shadow-lg h-80 flex flex-col justify-between hover-3d">
            <CardHeader className="flex flex-col mb-2 text-left">
              <img
                src={caseStudy.logo}
                alt={`${caseStudy.title} logo`}
                className="h-16 w-16 mx-auto mb-4"
              />
              <CardTitle>{caseStudy.title}</CardTitle>
              <CardDescription className="text-sm mt-1 mb-2 text-left">
                {caseStudy.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-left mt-auto mb-4"></CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

// Since this is not the default export, make sure it's explicitly named
export default function CaseStudiesPage() {
  return (
    <section className="container mt-8">
      <h2 className="text-4xl font-semibold mb-6">
        Case Studies. Read our Success Stories
      </h2>
      <CaseStudyCards />
    </section>
  );
}
