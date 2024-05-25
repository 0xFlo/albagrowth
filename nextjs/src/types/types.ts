// src/types/types.ts

export interface CaseStudy {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  title: string;
  thumbnail: string;
  headline: string;
  description: string;
}

export interface TeamMember {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  image: string;
  name: string;
  role: string;
}

export interface TeamMemberProps {
  member: TeamMember;
  href?: string;
}

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  href: string;
}

export type CardWithLinkProps =
  | { team: TeamMember; caseStudy?: never; overview: boolean; type: "team" }
  | {
      caseStudy: CaseStudy;
      team?: never;
      overview: boolean;
      type: "case-studies";
    };
