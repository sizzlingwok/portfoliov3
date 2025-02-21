import Image from "next/image";
import { Metadata } from "next";
import Marquee from "react-fast-marquee";
export const metadata: Metadata = {
  title: "Spotify Party",
  description:
    "Spotify Party strives to enhance the listening experience for users who enjoy music with others.",
};

const marquee = [
  {
    src: "/images/spotify/queue.png",
    alt: "Spotify Party Group Session Queue",
  },
  { src: "/images/spotify/partyinvite.png", alt: "Spotify Party Invite" },
  {
    src: "/images/spotify/joingroupsession.png",
    alt: "Spotify Party Join Group Session",
  },
  {
    src: "/images/spotify/curatedplaylist.png",
    alt: "Curated Group Session Playlist",
  },
  { src: "/images/spotify/settings.png", alt: "Group Session Settings" },
];

export default function SpotifyParty() {
  return (
    <main className="flex-col min-h-screen">
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
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
      <section className="landing px-8 pt-64 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out">
        <h1 className="text-8xl font-medium">Spotify Party</h1>
        <div className="flex flex-col justify-between gap-4 3xl:text-xl md:flex-row">
          <p className="font-medium shrink-0 text-xl">001</p>
          <div className="flex flex-col gap-4">
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
        </div>
      </section>
      <section className="overflow-hidden py-20 relative">
        <Marquee speed={80} direction="left">
          {marquee.map((image, index) => (
            <div
              key={index}
              className="w-[80vw] md:w-[60vw] lg:w-[35vw] rounded-md overflow-hidden shrink-0 relative flex items-center justify-center mr-6"
            >
              <div className="relative h-[90%] w-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  priority={true}
                  draggable={false}
                  className="object-contain rounded-md h-full w-auto"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 35vw"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </section>
      <section className="landing px-8 pt-64 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out">
        <div className="flex flex-col justify-between gap-4 3xl:text-xl md:flex-row">
          <p className="font-medium shrink-0 text-xl max-md:pb-4">002</p>
          <p className="font-medium shrink-0 text-xl">Final Solution</p>
          <h2 className="font-light text-lightgray basis-1/3">
            Evolving the group listening experience by introducing improved
            functionality and features for all Spotify users
          </h2>
        </div>
      </section>
    </main>
  );
}
