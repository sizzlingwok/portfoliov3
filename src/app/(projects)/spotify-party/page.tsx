import { Metadata } from "next";
import { projects } from "@/config/projects";
import SectionHeading from "@/components/SectionHeading";
import VideoSection from "@/components/VideoSection";
import ProjectHeader from "@/components/ProjectHeader";
import CardInfo from "@/components/CardInfo";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import MarqueeSection from "@/components/MarqueeSection";

const marqueeImages = [
  {
    src: "/images/spotify/queue.png",
    alt: "Spotify Party Group Session Queue",
  },
  {
    src: "/images/spotify/partyinvite.png",
    alt: "Spotify Party Invite",
  },
  {
    src: "/images/spotify/joingroupsession.png",
    alt: "Spotify Party Join Group Session",
  },
  {
    src: "/images/spotify/curatedplaylist.png",
    alt: "Curated Group Session Playlist",
  },
  {
    src: "/images/spotify/settings.png",
    alt: "Group Session Settings",
  },
];

const project = projects.find((p) => p.path === "/spotify-party")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.description,
};

export default function Project() {
  return (
    <main className="flex-col min-h-screen overflow-x-hidden">
      <ProjectHeader
        projectName="Spotify Party"
        projectId="001"
        role="UX Design, User Research, Visual Design, Prototyping"
        tools="Figma, Google Forms, Optimal Workshop, After Effects"
        timeline="8 weeks (June - July 2023)"
        description="Spotify Party strives to enhance the listening experience for users who enjoy music with others. While creating group sessions already exist on Spotify, it currently falls short in terms of functionality and could greatly benefit from improvements. Spotify Party will not only strengthen its current group session capabilities, but will also introduce captivating new features to foster an immersive and enjoyable journey of music exploration."
      />
      <MarqueeSection images={marqueeImages} />
      <section className="project-section">
        <SectionHeading
          id="002"
          title="Final Solution"
          description="Evolving the group listening experience by introducing improved
            functionality and features for all Spotify users"
        />
      </section>

      <section className="video-section px-8 py-8 md:py-20 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out 3xl:text-lg md:flex-row">
        <div className="content-container flex flex-col gap-8 items-center justify-center w-full mx-auto">
          <VideoSection
            videoId="spotify/spotifyinvitefriends"
            title="Inviting friends"
            description="Easily invite friends directly within the app eliminating the need for external invitations through links or social media"
          />
          <VideoSection
            videoId="spotify/spotifygroupsettings"
            title="Group settings"
            description="Streamline your sessions with customizable group settings. Delegate moderation privileges and fine-tune options for a more enjoyable experience"
          />
          <VideoSection
            videoId="spotify/spotifysessionplaylist"
            title="Curated playlists"
            description="Rediscover past group sessions with curated playlists of previously played tracks. Replay any missed songs or effortlessly share playlists with others"
          />
        </div>
      </section>
      <section className="project-section max-w-full">
        <SectionHeading
          id="003"
          title="User Research"
          description="Evaluating the user flow for initiating the Spotify group session"
        />
        <SectionHeading
          title="First click test"
          description="In the initial phase, I assessed users' ability to navigate to the group sesion menu through a first click test with 7 participants on the Spotify mobile app. While I planned to extend the test to the desktop platform, the feature was exclusive to mobile. Despite this limitation, the early findings provided crucial insights for subsequent analyses."
        />
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="relative w-fit">
            <Image
              src="/images/spotify/firstclicktest-light.png"
              alt="First click test"
              width={1024}
              height={128}
              className="object-contain select-none dark:opacity-0 transition-opacity"
              draggable={false}
              loading="lazy"
            />
            <Image
              src="/images/spotify/firstclicktest-dark.png"
              alt="First click test"
              width={1024}
              height={128}
              className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
              draggable={false}
              loading="lazy"
            />
          </div>

          <div className="flex items-baseline gap-2">
            <p className="font-medium text-xl dark:text-dark-text 3xl:text-xl">
              28%
            </p>
            <p className="text-lightgray dark:text-dark-lightgray 3xl:text-lg">
              of participants clicked on the appropriate menu as their first
              choice
            </p>
          </div>
        </div>
        <SectionHeading
          title="Major Usability Issues"
          description="Only 28% of users successfully found the menu, highlighting its unintuitive placement. As a result, the group session feature is often overlooked, further impacted by its limited functionality."
        />
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative max-w-[256px] w-full aspect-[1/1]">
              <Image
                src="/images/spotify/surveyresults1-light.png"
                alt="28% of participants considered themselves an expert Spotify user"
                fill
                sizes="256px"
                className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/spotify/surveyresults1-dark.png"
                alt="28% of participants considered themselves an expert Spotify user"
                fill
                sizes="256px"
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <p className=" text-lightgray dark:text-dark-lightgray 3xl:text-lg text-center max-w-[256px]">
              considered themselves an expert Spotify user
            </p>
          </div>

          <SectionHeading title="But.." description="" />

          <div className="flex flex-col justify-center items-center w-full gap-8">
            <div className="flex flex-wrap gap-16 md:gap-32 justify-center items-center max-w-7xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="relative max-w-[256px] w-full aspect-[1/1]">
                  <Image
                    src="/images/spotify/surveyresults1-light.png"
                    alt="Survey result 1"
                    fill
                    sizes="256px"
                    className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                    draggable={false}
                    loading="lazy"
                  />
                  <Image
                    src="/images/spotify/surveyresults1-dark.png"
                    alt="Survey result 1"
                    fill
                    sizes="256px"
                    className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <p className=" text-lightgray dark:text-dark-lightgray 3xl:text-lg text-center max-w-[256px]">
                  of participants could not initiate a group session
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="relative max-w-[256px] w-full aspect-[1/1]">
                  <Image
                    src="/images/spotify/surveyresults2-light.png"
                    alt="Survey result 2"
                    fill
                    sizes="256px"
                    className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                    draggable={false}
                    loading="lazy"
                  />
                  <Image
                    src="/images/spotify/surveyresults2-dark.png"
                    alt="Survey result 2"
                    fill
                    sizes="256px"
                    className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <p className=" text-lightgray dark:text-dark-lightgray 3xl:text-lg text-center max-w-[256px]">
                  of participants didn't know about Spotify's group session
                  feature
                </p>
              </div>
            </div>
          </div>
        </div>
        <SectionHeading
          title="Major Usability Issues"
          description="Only 28% of users successfully found the menu, highlighting its unintuitive placement. As a result, the group session feature is often overlooked, further impacted by its limited functionality."
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Users Struggle to Invite Friends"
              description="Users have difficulty in inviting friends. The user onboarding msut be enhanced to provide a more intuitive experience for those wishing to invite and join friends"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#1DB954"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <circle cx="10" cy="8" r="5" />
                  <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                  <circle cx="18" cy="18" r="3" />
                  <path d="m22 22-1.9-1.9" />
                </svg>
              }
            />
            <CardInfo
              title="Playback Conflicts"
              description="The potential conflicts stemming from track skipping by any participant must be addressed as users are facing disruptive behavior by malicious users"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#1DB954"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <polygon points="13 19 22 12 13 5 13 19" />
                  <polygon points="2 19 11 12 2 5 2 19" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="004"
          title="Problem Statement"
          description="How can we revitalize group listening and enhance accessbility?"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] place-items-center transition-[grid-template-columns] duration-300 ease-in-out">
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
                  <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <path d="m22 3-5 5" />
                  <path d="m17 3 5 5" />
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
                  <path d="M2 21a8 8 0 0 1 11.873-7" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="m17 17 5 5" />
                  <path d="m22 17-5 5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="005"
          title="User Persona"
          description="Introducing Michelle & Edward"
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Michelle"
              description="Michelle, a passionate party enthusiast, curates playlists for her events. Before each gathering, she meticulously selects tracks to ensure an unforgettable experience. In her pursuit of discovering new music, she envisions a feature where guests can queue up their favorite tracks using a voting system, promising an enhanced party atmosphere"
              image="/images/spotify/michelle.webp"
            />
            <CardInfo
              title="Edward"
              description="Edward is a dedicated music lover who enjoys sharing songs with his friends. He recently discovered Spotify's group session feature and appreciates the concept but finds the current invitation process cumbersome. He desires a more seamless invitation system that allows him to effortlessly invite the same group of friends to join his listening sessions"
              image="/images/spotify/edward.webp"
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="006"
          title="Competitive Analysis"
          description="I conducted a comprehensive analysis of Spotify's direct
              competitors, assessing their user interface and implementation of
              listening group sessions with others. This endeavor allowed me to
              delve deeper into their approach to user experience as well as
              explore other related functionalities, uncovering valuable
              insights in the process."
        />
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap gap-16 md:gap-32 justify-center items-center max-w-7xl mx-auto transition-all duration-300 ease-in-out">
            <div className="relative">
              <Image
                src="/images/spotify/applemusic-light.png"
                alt="Apple Music"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/spotify/applemusic-dark.png"
                alt="Apple Music"
                width={256}
                height={256}
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/spotify/amazonmusic-light.png"
                alt="Amazon Music"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/spotify/amazonmusic-dark.png"
                alt="Amazon Music"
                width={256}
                height={256}
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/spotify/youtubemusic-light.png"
                alt="YouTube Music"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/spotify/youtubemusic-dark.png"
                alt="YouTube Music"
                width={256}
                height={256}
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] justify-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Similar User Experience"
              description="Each platform provides a seamless intuitive interface with a consistent design and well-structured layout"
              image="/images/spotify/michelle.webp"
            />
            <CardInfo
              title="Cross-platform compatibility"
              description="Users can seamlessly play media across devices, including phones, tablets, computers, and TVs"
              image="/images/spotify/edward.webp"
            />
            <CardInfo
              title="Playlist sharing"
              description="Users can easily share playlists with others through a simple shareable link"
              image="/images/spotify/edward.webp"
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="007"
          title="Information Architecture"
          description="Here I have created a sitemap for Spotify Party as well as provided 3 user flows to showcase the core functionality of the features. The flows include: inviting friends to a group session, accepting a group session invitation, and finding previous group session playlists."
        />
        <Carousel
          items={[
            {
              id: "spotify-sitemap",
              type: "image",
              src: {
                light: "/images/spotify/sitemap-light.png",
                dark: "/images/spotify/sitemap-dark.png",
              },
              alt: "Spotify Party Sitemap",
            },
            {
              id: "spotify-userflow-1",
              type: "image",
              src: {
                light: "/images/spotify/userflow1-light.png",
                dark: "/images/spotify/userflow1-dark.png",
              },
              alt: "Inviting friends to a group session",
            },
            {
              id: "spotify-userflow-2",
              type: "image",
              src: {
                light: "/images/spotify/userflow2-light.png",
                dark: "/images/spotify/userflow2-dark.png",
              },
              alt: "Accepting a group session invitation",
            },
            {
              id: "spotify-userflow-3",
              type: "image",
              src: {
                light: "/images/spotify/userflow3-light.png",
                dark: "/images/spotify/userflow3-dark.png",
              },
              alt: "Finding previous group session playlists",
            },
          ]}
        />
      </section>
      <section className="project-section">
        <SectionHeading
          id="008"
          title="Usability Testing"
          description="Evaluating the Spotify Party prototype"
        />
        <SectionHeading
          title="Second click test"
          description="I conducted a second first-click test involving 9 new participants to assess how well users grasped tasks within the Spotify Party prototype.
              The test encompassed demonstrations of both mobile and desktop versions,
              with a specific emphasis on participants' capability to initiate a
              group session."
        />
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative max-w-[256px] w-full aspect-[1/1]">
              <Image
                src="/images/spotify/surveyresults3-light.png"
                alt="77% of participants successfully completed the task"
                fill
                sizes="256px"
                className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/spotify/surveyresults3-dark.png"
                alt="77% of participants successfully completed the task"
                fill
                sizes="256px"
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <p className=" text-lightgray dark:text-dark-lightgray 3xl:text-lg text-center max-w-[256px]">
              of participants successfully completed the task
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-fit mb-4">
              <Image
                src="/images/spotify/secondclicktest-light.png"
                alt="Second click test"
                width={1024}
                height={128}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/spotify/secondclicktest-dark.png"
                alt="Second click test"
                width={1024}
                height={128}
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <SectionHeading
          id=""
          title="Survey results"
          description="With a completion rate surpassing 77%, the results bly indicate
              that the Spotify Party prototype exhibits a higher level of
              intuitiveness and user-friendliness in comparison to Spotify's
              current user interface. Participants were able to quickly navigate
              to the corresponding interaction with an average time taken of
              26.5 seconds"
        />
      </section>
      <section className="project-section pb-32">
        <SectionHeading id="009" title="Wrapping up" description="" />
        <SectionHeading
          id=""
          title="Project Takeaways"
          description="Inspired by the limitations of Spotify's group session feature, I created Spotify Party to explore innovative designs and enhance my app organization skills. The project refined my smart animate techniques and visual continuity, marking my first responsive design for both desktop and mobile platforms."
        />
        <SectionHeading
          id=""
          title="Things I would do differently"
          description="In hindsight, I devoted considerable time to manual tasks like copying album cover arts and track information, which prolonged the design phase. Reflecting on this, I realize I could have streamlined the process by reusing assets and focusing more on functional aspects to expedite project completion."
        />
      </section>
    </main>
  );
}
