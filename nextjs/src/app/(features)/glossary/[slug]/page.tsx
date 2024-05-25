import { allGlossaryTerms } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

interface GlossaryTermPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allGlossaryTerms.map((term) => ({
    slug: term._raw.flattenedPath,
  }));
}

export default function GlossaryTermPage({ params }: GlossaryTermPageProps) {
  const term = allGlossaryTerms.find(
    (term) => term._raw.flattenedPath === params.slug
  );

  if (!term) {
    return notFound();
  }

  const Component = useMDXComponent(term.body.code);
  return (
    <div>
      <h1>{term.term}</h1>
      <Component />
    </div>
  );
}
