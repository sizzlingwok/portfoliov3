export default function NotFound() {
  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      <div className="text-center select-none flex flex-col gap-2">
        <h1 className="text-8xl font-medium">404</h1>
        <p className="text-xl text-lightgray dark:text-dark-lightgray">
          Page not found
        </p>
      </div>
    </div>
  );
}
