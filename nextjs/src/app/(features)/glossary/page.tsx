import { allGlossaryTerms } from "contentlayer/generated";
import Link from "next/link";

const GlossaryIndexPage: React.FC = () => {
  return (
    <div>
      <h1>Glossary</h1>
      <ul>
        {allGlossaryTerms.map((term) => (
          <li key={term._id}>
            <Link href={term.url}>
              <a>{term.term}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlossaryIndexPage;
