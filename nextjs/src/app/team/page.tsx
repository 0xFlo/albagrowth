import React from "react";
import TeamCard from "@/components/TeamCard";

const teamMembers = [
  {
    image: "/path/to/image1.jpg",
    name: "Macs",
    role: "Role",
  },
  {
    image: "/path/to/image2.jpg",
    name: "Shanik",
    role: "Role",
  },
  {
    image: "/path/to/image3.jpg",
    name: "Andrew",
    role: "Operations",
  },
  {
    image: "/path/to/image4.jpg",
    name: "Oksana",
    role: "Role",
  },
  {
    image: "/path/to/image5.jpg",
    name: "Florian S. Kluge",
    role: "tech SEO",
  },
  {
    image: "/path/to/image6.jpg",
    name: "Tash",
    role: "Swiss Army Knife",
  },
  {
    image: "/path/to/image7.jpg",
    name: "Antonio",
    role: "Role",
  },
  {
    image: "/path/to/image8.jpg",
    name: "Simone Timen",
    role: "Freelance Editor for Insight Timer Content",
  },
  {
    image: "/path/to/image9.jpg",
    name: "nik",
    role: "Role",
  },
  {
    image: "/path/to/image10.jpg",
    name: "Kim T.",
    role: "Head of Content",
  },
  // Add more team members as needed
];

const TeamPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
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
