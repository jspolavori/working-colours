import Link from 'next/link';

interface SuburbCardProps {
  name: string;
  href: string;
}

export default function SuburbCard({ name, href }: SuburbCardProps) {
  return (
    <Link
      href={href}
      className="inline-block bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
    >
      {name}
    </Link>
  );
}
