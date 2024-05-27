// nextjs/src/components/sections/withLink.tsx
import React from "react";
import { CardWithLinkProps } from "@/types/types";
import TeamCard from "@/sections/team/TeamCard";
import CaseStudyCard from "@/sections/case-studies/CaseStudyCard";
import { generateHref } from "@/utils/url";

const generateProfileHref = (flattenedPath: string, type: string): string => {
  return `/${flattenedPath}`;
};

const CardWithLink = ({
  team,
  caseStudy,
  overview,
  type,
}: CardWithLinkProps) => {
  const item = team || caseStudy;

  if (!item) {
    return null;
  }

  const href = generateHref(item._raw.flattenedPath, overview, type);
  const profileHref = generateProfileHref(item._raw.flattenedPath, type);

  if (type === "team" && team) {
    return <TeamCard member={team} href={href} profileHref={profileHref} />;
  }

  if (type === "case-studies" && caseStudy) {
    return <CaseStudyCard caseStudy={caseStudy} href={href} />;
  }

  return null;
};

export default CardWithLink;
