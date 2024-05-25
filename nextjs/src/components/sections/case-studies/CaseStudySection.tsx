// nextjs/src/components/sections/case-studies/CaseStudySection.tsx
import CustomHeader from "@/components/props/CustomHeaderProps";
import { allCaseStudies } from "contentlayer/generated";
import CardWithLink from "@/sections/withLink";

const CaseStudySection = ({ overview = false }: { overview?: boolean }) => {
  return (
    <section className="w-full px-4 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <CustomHeader
          level="h2"
          className="text-3xl font-semibold text-gray-800"
          mainText="Success Stories."
          subText="Read how we have helped others succeed."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {allCaseStudies.map((caseStudy) => (
            <CardWithLink
              key={caseStudy._id}
              caseStudy={caseStudy}
              overview={overview}
              type="case-studies"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
