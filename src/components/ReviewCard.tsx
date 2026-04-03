interface ReviewCardProps {
  name: string;
  suburb: string;
  text: string;
  rating?: number;
}

export default function ReviewCard({ name, suburb, text, rating = 5 }: ReviewCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote marks + text */}
      <div className="flex-1">
        <span className="text-4xl text-[#0066CC]/20 font-serif leading-none">&ldquo;</span>
        <blockquote className="text-[#1a1a2e] leading-relaxed -mt-2 italic">
          {text}
        </blockquote>
      </div>

      {/* Reviewer */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="font-semibold text-[#1a1a2e]">{name}</p>
          <p className="text-sm text-[#6b7280]">{suburb}</p>
        </div>
        {/* Google badge */}
        <div className="flex items-center gap-1.5 text-xs text-[#6b7280] bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
          </svg>
          Google
        </div>
      </div>
    </div>
  );
}
