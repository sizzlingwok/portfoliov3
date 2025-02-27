"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Force scroll to top
    if (typeof window !== "undefined") {
      // Small timeout to ensure DOM has updated
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }, 0);
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
