"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NotFoundContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-medium">404</h1>
      <p className="text-lightgray dark:text-dark-lightgray">
        {from
          ? `${from} not found`
          : "The page you're looking for doesn't exist."}
      </p>
    </main>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
