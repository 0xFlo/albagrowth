// nextjs/src/components/team/TeamCard.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(
  ({ image, name, role }, ref) => (
    <div
      ref={ref}
      className={cn(
        "border-4 border-black bg-yellow-200 text-black p-4 shadow-lg transform transition-transform duration-300 hover:scale-105"
      )}
    >
      <div className="h-48 w-full flex items-center justify-center border-b-4 border-black">
        <img
          src={image}
          alt={`${name} photo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-base">{role}</p>
      </div>
    </div>
  )
);
TeamCard.displayName = "TeamCard";

export default TeamCard;
