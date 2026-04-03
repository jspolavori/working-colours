interface StepItemProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function StepItem({ number, title, description, isLast = false }: StepItemProps) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white font-bold text-lg flex items-center justify-center shadow-md z-10">
          {number}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-blue-200 mt-2 h-8 min-h-[2rem]" />
        )}
      </div>
      <div className="pb-6 pt-1">
        <h3 className="font-bold text-[#1a1a2e] text-lg mb-1">{title}</h3>
        <p className="text-[#6b7280] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
