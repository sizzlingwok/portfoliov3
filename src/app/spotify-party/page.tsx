import { Metadata } from "next";
import Marquee from "react-fast-marquee";
import SectionHeading from "../../components/SectionHeading";
import VideoSection from "../../components/VideoSection";
import MarqueeImage from "../../components/MarqueeImage";
import ProjectHeader from "../../components/ProjectHeader";
import CardInfo from "../../components/CardInfo";

export const metadata: Metadata = {
  title: "Spotify Party",
  description:
    "Spotify Party strives to enhance the listening experience for users who enjoy music with others.",
};

export default function SpotifyParty() {
  return (
    <main className="flex-col min-h-screen">
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <a
          href="https://www.figma.com/proto/5ciCRD3R2H8jz0fRfKJPJD/Spotify-Party-Landing-Page?page-id=0%3A1&type=design&node-id=1-2&viewport=1334%2C874%2C0.71&t=MT5QwGlDdOlSKv5J-1&scaling=scale-down"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group transition-all duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)]"
        >
          <span className="flex items-center gap-1">
            View Prototype
            <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </span>
        </a>
      </div>
      <ProjectHeader
        projectName="Spotify Party"
        projectId="001"
        role="UX Design, User Research, Visual Design, Prototyping"
        tools="Figma, Google Forms, Optimal Workshop, After Effects"
        timeline="8 weeks (June - July 2023)"
        description="Spotify Party strives to enhance the listening experience for users who enjoy music with others. While creating group sessions already exist on Spotify, it currently falls short in terms of functionality and could greatly benefit from improvements. Spotify Party will not only strengthen its current group session capabilities, but will also introduce captivating new features to foster an immersive and enjoyable journey of music exploration."
      />
      <section className="marquee overflow-hidden py-20 relative">
        <Marquee speed={80} direction="left">
          <MarqueeImage
            src="/images/spotify/queue.png"
            alt="Spotify Party Group Session Queue"
          />
          <MarqueeImage
            src="/images/spotify/partyinvite.png"
            alt="Spotify Party Invite"
          />
          <MarqueeImage
            src="/images/spotify/joingroupsession.png"
            alt="Spotify Party Join Group Session"
          />
          <MarqueeImage
            src="/images/spotify/curatedplaylist.png"
            alt="Curated Group Session Playlist"
          />
          <MarqueeImage
            src="/images/spotify/settings.png"
            alt="Group Session Settings"
          />
        </Marquee>
      </section>
      <section
        className={`content px-8 pt-32 md:pt-64 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out`}
      >
        <SectionHeading
          id="002"
          title="Final Solution"
          description="Evolving the group listening experience by introducing improved
            functionality and features for all Spotify users"
        />
      </section>

      <section className="video-section px-8 py-8 md:py-40 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out 3xl:text-xl md:flex-row">
        <div className="content-container flex flex-col gap-8 items-center justify-center w-full mx-auto">
          <VideoSection
            videoId="spotifyinvitefriends"
            title="Inviting friends"
            description="Easily invite friends directly within the app eliminating the need for external invitations through links or social media"
          />
          <VideoSection
            videoId="spotifygroupsettings"
            title="Group settings"
            description="Streamline your sessions with customizable group settings. Delegate moderation privileges and fine-tune options for a more enjoyable experience"
          />
          <VideoSection
            videoId="spotifysessionplaylist"
            title="Curated playlists"
            description="Rediscover past group sessions with curated playlists of previously played tracks. Replay any missed songs or effortlessly share playlists with others"
          />
        </div>
      </section>
      <section
        className={`content px-8 pt-32 md:pt-64 flex flex-col gap-8 md:gap-20 select-none lg:px-24 transition-[padding] duration-300 ease-in-out`}
      >
        <SectionHeading
          id="003"
          title="User Research"
          description="Evaluating the user flow for initiating the Spotify group session"
        />
        <SectionHeading
          title="First click test"
          description="In the initial phase, I assessed users' ability to navigate to the group sesion menu through a first click test with 7 participants on the Spotify mobile app. While I planned to extend the test to the desktop platform, the feature was exclusive to mobile. Despite this limitation, the early findings provided crucial insights for subsequent analyses."
        />
      </section>
      <section
        className={`content px-8 pt-32 md:pt-64 flex flex-col gap-8 md:gap-20 select-none lg:px-24 transition-[padding] duration-300 ease-in-out`}
      >
        <SectionHeading
          id="004"
          title="Problem Statement"
          description="How can we revitalize group listening and enhance accessbility?"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            <CardInfo
              title="Group session feature is hard to find"
              description="The option to start a group session is buried in the device list, making it easy to overlook."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#1DB954"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              }
            />
            <CardInfo
              title="Feature unavailable on desktop"
              description="Spotify's group session feature is missing on desktop, limiting cross-platform usability."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#1DB954"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
              }
            />
            <CardInfo
              title="No direct friend activity integration"
              description="Inviting friends requires sharing links externally, lacking an in-app invite option."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#1DB954"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
