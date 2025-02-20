import Image from "next/image";

export default function SpotifyParty() {
  return (
    <main className="flex-col min-h-screen">
      <section className="landing px-8 pt-[32rem] flex flex-col gap-40 select-none">
        <h1 className="text-8xl font-medium">Spotify Party</h1>
        <div className="flex justify-between gap-4">
          <p className="font-medium shrink-0">001</p>
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium">Role</p>
            <p className="font-light text-lightgray">
              UX Design, User Research, Visual Design, Prototyping
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium">Tools</p>
            <p className="font-light text-lightgray">
              Figma, Google Forms, Optimal Workshop, After Effects
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium">Timeline</p>
            <p className="font-light text-lightgray">
              8 weeks (June - July 2023)
            </p>
          </div>
          <h2 className="font-light text-lightgray basis-1/3">
            Spotify Party strives to enhance the listening experience for users
            who enjoy music with others. While creating group sessions already
            exist on Spotify, it currently falls short in terms of functionality
            and could greatly benefit from improvements. Spotify Party will not
            only strengthen its current group session capabilities, but will
            also introduce captivating new features to foster an immersive and
            enjoyable journey of music exploration.
          </h2>
          <div className="shrink-0 flex items-start">
            <a
              href="https://www.figma.com/proto/5ciCRD3R2H8jz0fRfKJPJD/Spotify-Party-Landing-Page?page-id=0%3A1&type=design&node-id=1-2&viewport=1334%2C874%2C0.71&t=MT5QwGlDdOlSKv5J-1&scaling=scale-down"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group transition-all duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)]"
            >
              <span className="flex items-center gap-1">
                View Prototype
                <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
