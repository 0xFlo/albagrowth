// nextjs/contentlayer.config.ts
import {
  defineDocumentType,
  makeSource,
  FieldDefs,
} from "contentlayer/source-files";
import { cleanSlug } from "./src/utils/url"; // Use relative path

const resolveUrl = (doc: any, type: "case-studies" | "team"): string =>
  `/${cleanSlug(doc._raw.flattenedPath, type)}`;

const createDocumentType = (
  name: string,
  { filePathPattern, fields }: { filePathPattern: string; fields: FieldDefs },
  type: "case-studies" | "team"
) =>
  defineDocumentType(() => ({
    name,
    filePathPattern,
    contentType: "mdx",
    fields,
    computedFields: {
      url: {
        type: "string",
        resolve: (doc: any) => resolveUrl(doc, type),
      },
    },
    bodyFieldName: "body",
  }));

const fieldDefinitions: {
  [key: string]: {
    filePathPattern: string;
    fields: FieldDefs;
    type: "case-studies" | "team"; // Make type required
  };
} = {
  CaseStudy: {
    filePathPattern: "case-studies/*.mdx",
    fields: {
      title: { type: "string", required: true },
      thumbnail: { type: "string", required: true },
      headline: { type: "string", required: true },
      description: { type: "string", required: true },
    },
    type: "case-studies",
  },
  GlossaryTerm: {
    filePathPattern: "nlp/*.mdx",
    fields: {
      term: { type: "string", required: true },
      definition: { type: "string", required: true },
    },
    type: "case-studies", // Assuming this should be "case-studies" for consistency
  },
  TeamMember: {
    filePathPattern: "team/*.mdx",
    fields: {
      name: { type: "string", required: true },
      image: { type: "string", required: true },
      role: { type: "string", required: true },
    },
    type: "team",
  },
};

const documentTypes = Object.entries(fieldDefinitions).map(
  ([name, { filePathPattern, fields, type }]) =>
    createDocumentType(name, { filePathPattern, fields }, type)
);

export default makeSource({
  contentDirPath: "content",
  documentTypes,
});
