import { Metadata } from "next";
import Marquee from "react-fast-marquee";
import SectionHeading from "../../components/SectionHeading";
import VideoSection from "../../components/VideoSection";
import MarqueeImage from "../../components/MarqueeImage";
import ProjectHeader from "../../components/ProjectHeader";
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
        className={`content px-8 pt-32 md:pt-64 flex flex-col gap-20 select-none lg:px-24 transition-[padding] duration-300 ease-in-out`}
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
    </main>
  );
}
