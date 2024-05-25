// nextjs/src/utils/url.ts
export const cleanSlug = (
  path: string,
  type: "case-studies" | "team"
): string => {
  return path.replace(new RegExp(`${type}/|\\.[^/.]+$`, "g"), "");
};

export const generateHref = (
  path: string,
  overview: boolean,
  type: "case-studies" | "team"
): string => {
  const slug = cleanSlug(path, type);
  return overview ? `/${type}/${slug}` : `/${type}`;
};
