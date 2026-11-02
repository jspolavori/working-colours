'use client';

import { usePathname } from 'next/navigation';

// The /paint-like-a-pro ad funnel renders without the site navbar/footer.
// This used to be decided in the root layout via `headers()` + a proxy-set
// `x-pathname` header, which forced every page on the site into dynamic
// (per-request) rendering. Reading the path here keeps pages static.
const FUNNEL_PREFIX = '/paint-like-a-pro';

function useIsFunnel() {
  const pathname = usePathname() ?? '';
  return pathname.startsWith(FUNNEL_PREFIX);
}

export function HideOnFunnel({ children }: { children: React.ReactNode }) {
  return useIsFunnel() ? null : <>{children}</>;
}

export function SiteMain({ children }: { children: React.ReactNode }) {
  const isFunnel = useIsFunnel();
  return <main className={isFunnel ? '' : 'pb-16 md:pb-0'}>{children}</main>;
}
