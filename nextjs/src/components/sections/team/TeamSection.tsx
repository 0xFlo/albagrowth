// nextjs/src/components/sections/team/TeamSection.tsx
import CustomHeader from "@/components/props/CustomHeaderProps";
import { allTeamMembers } from "contentlayer/generated";
import CardWithLink from "@/sections/withLink";
import { TeamMember } from "@/types/types";

const TeamSection = ({ overview = false }: { overview?: boolean }) => {
  return (
    <section className="w-full px-4 py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <CustomHeader
          level="h2"
          className="text-3xl font-semibold text-gray-800"
          mainText="Meet Our Team."
          subText="Get to know the people behind Alba."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {allTeamMembers.map((member: TeamMember, index: number) => (
            <CardWithLink
              key={index}
              team={member}
              overview={overview}
              type="team"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
