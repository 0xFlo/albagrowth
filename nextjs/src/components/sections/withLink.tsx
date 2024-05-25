// nextjs/src/components/sections/withLink.tsx
import React from "react";
import { CardWithLinkProps } from "@/types/types";
import TeamCard from "@/sections/team/TeamCard";
import CaseStudyCard from "@/sections/case-studies/CaseStudyCard";
import { generateHref } from "@/utils/url";

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

  return type === "team" && team ? (
    <TeamCard member={team} href={href} />
  ) : type === "case-studies" && caseStudy ? (
    <CaseStudyCard caseStudy={caseStudy} href={href} />
  ) : null;
};

export default CardWithLink;
