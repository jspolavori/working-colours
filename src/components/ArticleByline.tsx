import Link from 'next/link';

interface ArticleBylineProps {
  /** ISO date (e.g. "2026-09-18"). Only shown when a real, known date is passed in — never invent one. */
  dateModified?: string;
}

/**
 * Generic, honest attribution: the business, not a specific named person's
 * personal review, since that hasn't been confirmed article-by-article.
 * If/when specific articles are confirmed as written or reviewed by John
 * personally, swap the text below for a named byline linking to /about.
 */
export default function ArticleByline({ dateModified }: ArticleBylineProps) {
  const formatted = dateModified
    ? new Date(dateModified).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  return (
    <p className="text-sm text-gray-500 mb-8">
      Published by{' '}
      <Link href="/about" className="text-blue-600 hover:underline font-medium">
        Working Colours Painting Services
      </Link>
      {formatted ? <> · last updated {formatted}</> : null}
    </p>
  );
}
