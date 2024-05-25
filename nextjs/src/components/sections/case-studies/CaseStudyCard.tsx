// nextjs/src/components/sections/case-studies/CaseStudyCard.tsx
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CaseStudyCardProps } from "@/types/types";

const truncateText = (text: string, length: number) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const CaseStudyCard = ({ caseStudy, href }: CaseStudyCardProps) => (
  <Link href={href} key={caseStudy._id}>
    <Card className="relative border-4 border-black bg-white p-6 sm:p-8 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-center mb-4">
          <img
            src={caseStudy.thumbnail}
            alt={`${caseStudy.title} logo`}
            className="h-16 w-16 border-2 border-black shadow-xl rounded-full mr-4"
          />
          <CardTitle className="text-xl sm:text-2xl font-bold">
            {caseStudy.title}
          </CardTitle>
        </div>
        <CardDescription className="text-base sm:text-lg p-4 border-2 border-black shadow-lg rounded-md">
          {truncateText(caseStudy.description, 100)}
        </CardDescription>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="bg-yellow-300 px-4 py-2 border-2 border-black text-sm sm:text-lg shadow-md inline-block">
          @caseStudy
        </div>
      </div>
    </Card>
  </Link>
);

export default CaseStudyCard;
