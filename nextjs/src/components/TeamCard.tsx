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
        "rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
      )}
    >
      <img
        src={image}
        alt={`${name} photo`}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
);
TeamCard.displayName = "TeamCard";

export default TeamCard;
