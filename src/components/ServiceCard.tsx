import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200 flex flex-col hover:-translate-y-1"
    >
      {/* Blue top border accent */}
      <div className="h-1 w-full bg-[#0066CC]" />
      <div className="p-6 flex flex-col flex-1">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#0066CC] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed flex-1">{description}</p>
        <div className="mt-5 flex items-center gap-1 text-[#0066CC] text-sm font-semibold">
          Learn more
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
