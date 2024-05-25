// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource,
  FieldDefs,
} from "contentlayer/source-files";

const resolveUrl = (doc: any): string => {
  return `/${doc._raw.flattenedPath.replace(/\.[^/.]+$/, "")}`;
};

const createDocumentType = (
  name: string,
  filePathPattern: string,
  fields: FieldDefs
) => {
  return defineDocumentType(() => ({
    name,
    filePathPattern,
    contentType: "mdx",
    fields,
    computedFields: {
      url: { type: "string", resolve: resolveUrl },
    },
    bodyFieldName: "body",
  }));
};

const caseStudyFields: FieldDefs = {
  title: { type: "string", required: true },
  thumbnail: { type: "string", required: false },
  headline: { type: "string", required: true },
  description: { type: "string", required: true },
};

const glossaryTermFields: FieldDefs = {
  title: { type: "string", required: true },
  thumbnail: { type: "string", required: false },
  term: { type: "string", required: true },
  definition: { type: "string", required: true },
};

const documentTypeDefinitions = [
  {
    name: "CaseStudy",
    filePathPattern: "case-studies/*.mdx",
    fields: caseStudyFields,
  },
  {
    name: "GlossaryTerm",
    filePathPattern: "nlp/*.mdx",
    fields: glossaryTermFields,
  },
];

const documentTypes = documentTypeDefinitions.map(
  ({ name, filePathPattern, fields }) =>
    createDocumentType(name, filePathPattern, fields)
);

export default makeSource({
  contentDirPath: "content",
  documentTypes,
});
