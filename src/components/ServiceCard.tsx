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
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
          <svg className="w-5 h-5 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
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
