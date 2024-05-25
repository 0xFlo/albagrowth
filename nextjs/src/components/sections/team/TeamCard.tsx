// nextjs/src/components/sections/team/TeamCard.tsx
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TeamMemberProps } from "@/types/types";

const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="h-48 w-full flex items-center justify-center border-b-4 border-black rounded-none">
    <img
      src={src}
      alt={alt}
      className="max-h-full max-w-full object-contain rounded-none"
    />
  </div>
);

const CardInfo = ({ name, role }: { name: string; role: string }) => (
  <div className="mt-4 text-center">
    <h3 className="text-xl font-extrabold m-1">{name}</h3>
    <p className="text-base m-1">{role}</p>
  </div>
);

const TeamCard = React.forwardRef<HTMLDivElement, TeamMemberProps>(
  ({ member, href }, ref) => {
    const cardContent = (
      <div
        ref={ref}
        className={cn(
          "team-card",
          "border-4 border-black bg-yellow-200 text-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none m-1 transform transition-transform duration-300 hover:scale-105"
        )}
      >
        <CardImage src={member.image} alt={`${member.name} photo`} />
        <CardInfo name={member.name} role={member.role} />
      </div>
    );

    return href ? <Link href={href}>{cardContent}</Link> : cardContent;
  }
);

TeamCard.displayName = "TeamCard";

export default TeamCard;
