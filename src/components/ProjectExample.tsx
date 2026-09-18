import Image from 'next/image';
import Link from 'next/link';

export interface ProjectExampleData {
  /** Local path under /public, e.g. "/gallery/job-1.jpg". Must be a real, confirmed photo of the described job. */
  image: string;
  imageAlt: string;
  /** Confirmed suburb — never inferred from the photo alone. */
  suburb: string;
  /** e.g. "Full exterior repaint", "Deck restaining" */
  workType: string;
  /** Surface condition + preparation performed, in the owner's own words. */
  preparation: string;
  /** Optional — only include if the specific product/finish used is documented. */
  productOrFinish?: string;
  outcome: string;
  serviceHref: string;
  serviceLabel: string;
}

/**
 * Renders one genuine project example. This component is intentionally
 * NOT wired up anywhere yet with placeholder or invented data — every
 * field here must come from the business owner. See
 * REMAINING-SEO-FIXES.md for exactly what's needed per page before this
 * gets used. Do not fill this component with unverified details, and
 * do not render it with partial/empty data as a "coming soon" card —
 * only add it to a page once the full set of fields is confirmed.
 */
export default function ProjectExample({
  image,
  imageAlt,
  suburb,
  workType,
  preparation,
  productOrFinish,
  outcome,
  serviceHref,
  serviceLabel,
}: ProjectExampleData) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
          {workType} — {suburb}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{preparation}</p>
        {productOrFinish && (
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            <span className="font-semibold text-[#1a1a2e]">Product/finish: </span>
            {productOrFinish}
          </p>
        )}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{outcome}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={serviceHref}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            {serviceLabel}
          </Link>
          <Link href="/contact" className="text-blue-600 hover:underline text-sm font-medium">
            Get a free quote
          </Link>
        </div>
      </div>
    </div>
  );
}
