import { Suspense } from "react";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-medium">404</h1>
      <p className="text-lightgray dark:text-dark-lightgray">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </main>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundPage />
    </Suspense>
  );
}
