export default function Page() {
  return (
    <main className="flex-col min-h-screen">
      <section className="landing px-12 py-24 flex flex-col gap-4">
        <h1 className="text-8xl leading-none">Hello</h1>
        <h2 className="text-4xl">I'm Andy Duong</h2>
        <h2 className="text-2xl">UX Designer based in the Bay Area</h2>
      </section>
      <section className="project-grid grid grid-cols-3 gap-10 px-12 py-10">
        <a href="/project-1">
          <div className="bg-sand aspect-square w-full rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-gray-300"></div>
            </div>
            <p className="absolute bottom-6 left-6 text-lightgray">
              Project Name
            </p>
          </div>
        </a>
        <a href="/project-1">
          <div className="bg-sand aspect-square w-full rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-gray-300"></div>
            </div>
            <p className="absolute bottom-6 left-6 text-lightgray">
              Project Name
            </p>
          </div>
        </a>
        <a href="/project-1">
          <div className="bg-sand aspect-square w-full rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-gray-300"></div>
            </div>
            <p className="absolute bottom-6 left-6 text-lightgray">
              Project Name
            </p>
          </div>
        </a>
        <a href="/project-1">
          <div className="bg-sand aspect-square w-full rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-gray-300"></div>
            </div>
            <p className="absolute bottom-6 left-6 text-lightgray">
              Project Name
            </p>
          </div>
        </a>
        <a href="/project-1">
          <div className="bg-sand aspect-square w-full rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-gray-300"></div>
            </div>
            <p className="absolute bottom-6 left-6 text-lightgray">
              Project Name
            </p>
          </div>
        </a>
        <a href="/project-1">
          <div className="bg-sand aspect-square w-full rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-gray-300"></div>
            </div>
            <p className="absolute bottom-6 left-6 text-lightgray">
              Project Name
            </p>
          </div>
        </a>
      </section>
    </main>
  );
}
