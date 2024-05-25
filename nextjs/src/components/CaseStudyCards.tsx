// src/components/CaseStudyCards.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { allCaseStudies } from "contentlayer/generated";

export function CaseStudyCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allCaseStudies.map((caseStudy, index) => (
        <Link href={`/${caseStudy._raw.flattenedPath}`} key={index}>
          <Card className="shadow-lg h-80 flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white">
            <CardHeader className="flex flex-col mb-2 text-center p-4">
              <img
                src={caseStudy.thumbnail}
                alt={`${caseStudy.title} logo`}
                className="h-16 w-16 mx-auto mb-4"
              />
              <CardTitle className="text-lg font-semibold text-gray-900">
                {caseStudy.title}
              </CardTitle>
              <CardDescription className="text-sm mt-2 text-gray-600">
                {caseStudy.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto p-4">
              {/* Additional content can be added here if needed */}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
