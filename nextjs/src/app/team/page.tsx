// nextjs/src/app/team/page.tsx
import React from "react";
import { allMembers } from "contentlayer/generated";
import TeamCard from "@/components/team/TeamCard";

// TypeScript type for team members
interface Member {
  image: string;
  name: string;
  role: string;
}

// Fisher-Yates Shuffle Algorithm with type annotations
const shuffleArray = (array: Member[]): Member[] => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const TeamPage = () => {
  const shuffledMembers = shuffleArray(allMembers);

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-blue-500 text-white p-4 border-4 border-black">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shuffledMembers.map((member: Member) => (
          <TeamCard
            key={member.name}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
