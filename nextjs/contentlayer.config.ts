// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource,
  FieldDefs,
} from "contentlayer/source-files";

const resolveUrl = (doc: any): string =>
  `/${doc._raw.flattenedPath.replace(/\.[^/.]+$/, "")}`;

const createDocumentType = (
  name: string,
  { filePathPattern, fields }: { filePathPattern: string; fields: FieldDefs }
) =>
  defineDocumentType(() => ({
    name,
    filePathPattern,
    contentType: "mdx",
    fields,
    computedFields: { url: { type: "string", resolve: resolveUrl } },
    bodyFieldName: "body",
  }));

const fieldDefinitions: {
  [key: string]: { filePathPattern: string; fields: FieldDefs };
} = {
  CaseStudy: {
    filePathPattern: "case-studies/*.mdx",
    fields: {
      title: { type: "string", required: true },
      thumbnail: { type: "string", required: false },
      headline: { type: "string", required: true },
      description: { type: "string", required: true },
    },
  },
  GlossaryTerm: {
    filePathPattern: "nlp/*.mdx",
    fields: {
      term: { type: "string", required: true },
      definition: { type: "string", required: true },
      thumbnail: { type: "string", required: false },
    },
  },
  Member: {
    filePathPattern: "members/*.mdx",
    fields: {
      name: { type: "string", required: true },
      image: { type: "string", required: true },
      role: { type: "string", required: false },
    },
  },
};

const documentTypes = Object.entries(fieldDefinitions).map(([name, fields]) =>
  createDocumentType(name, fields)
);

export default makeSource({
  contentDirPath: "content",
  documentTypes,
});
