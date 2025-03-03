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
    src: "/images/sorette/home.png",
    alt: "sorette homepage",
  },
  {
    src: "/images/sorette/projects.png",
    alt: "sorette projects homepage",
  },
  {
    src: "/images/sorette/projectfolder.png",
    alt: "sorette project folder",
  },
  {
    src: "/images/sorette/library.png",
    alt: "sorette library",
  },
  {
    src: "/images/sorette/notifications.png",
    alt: "sorette notifications center",
  },
];

const project = projects.find((p) => p.path === "/sorette")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.description,
};

export default function Project() {
  return (
    <main className="flex-col min-h-screen overflow-x-hidden">
      <ProjectHeader
        projectName="sorette"
        projectId="001"
        role="UX Design, User Research, Visual Design, Prototyping"
        tools="Figma, Google Forms, Optimal Workshop, After Effects"
        timeline="13 weeks (Mar - June 2023)"
        description="sorette is an innovative desktop cloud-sharing service designed
for music professionals, offering seamless collaboration
                opportunities. sorette provides a suite of crafted tools and
                customization options to streamline workflows, simplify file
                organization, and foster a user-friendly environment conducive
                to enhanced productivity."
      />
      <MarqueeSection images={marqueeImages} />
      <section className="project-section">
        <SectionHeading
          id="002"
          title="Final Solution"
          description="Evolving the group listening experience by bridging gaps in features currently missing from cloud sharing platforms to enhance the music collaboration experience"
        />
      </section>

      <section className="video-section px-8 py-8 md:py-20 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out 3xl:text-lg md:flex-row">
        <div className="content-container flex flex-col gap-8 items-center justify-center w-full mx-auto">
          <VideoSection
            videoId="sorette/sorettesearch"
            title="Organize Files Faster and Smarter"
            description="Boost productivity with robust file tagging and powerful search features. Organize and manage files effortlessly"
          />
          <VideoSection
            videoId="sorette/soretteinvite"
            title="Invite and Collaborate with Ease"
            description="Invite others to collaborate in shared projects and folders, manage comments and track version history"
          />
          <VideoSection
            videoId="sorette/notificationcenter"
            title="Consolidate Notifications and Updates in One Place"
            description="Streamline engagements and collaborations with a centralized notification hub, enhancing organization and responsiveness"
          />
        </div>
      </section>
      <section className="project-section max-w-full">
        <SectionHeading
          id="003"
          title="User Research"
          description="Evaluating the current user collaboration experience on cloud sharing platforms"
        />
        <SectionHeading
          title="Initial survey"
          description="In the preliminary stage, I conducted a comoprehensive evaluation
              of user feedback regarding the current collaborative user flow.
              These participants have experience with various platforrms for
              sharing files, including cloud services. I actively engaged with 5 participants to capture their thoughts and insights"
        />
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative max-w-[256px] w-full aspect-[1/1]">
              <Image
                src="/images/sorette/initialsurveyresults-light.png"
                alt="80% of participants have encountered difficulties in msuic collaborating"
                fill
                sizes="256px"
                className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/sorette/initialsurveyresults-dark.png"
                alt="80% of participants have encountered difficulties in msuic collaborating"
                fill
                sizes="256px"
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <p className=" text-lightgray dark:text-dark-lightgray 3xl:text-lg text-center max-w-[256px]">
              of participants have encountered difficulties in msuic
              collaborating
            </p>
          </div>
        </div>
        <SectionHeading
          title="Survey Results"
          description="A mere 88% of users encountered struggles in collaborating with others. This indicates that there are critical issues that could pertain to workflow issues, communication challenges, user experience concerns, or resource limitations"
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Challenges in Collaboration and Feedback"
              description="Many users face difficulties when collaborating effectively, particularly when tracking project revisions and managing comments from team members"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#97EFE9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              }
            />
            <CardInfo
              title="Struggles with Coordinating Resources"
              description="Coordinating with multiple people can be confusing, especially when users need to keep track of bookmarks or shared folder links for later use"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#97EFE9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                  <path d="M8 10v4" />
                  <path d="M12 10v2" />
                  <path d="M16 10v6" />
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
          description="How can we improve music collaboration and introduce innovative
          features?bility?"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] place-items-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Managing Multiple File Versions"
              description="Users often face difficulty keeping files updated and synchronized with collaborators"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#97EFE9"
                  className="size-6"
                >
                  <path d="M12 17h.01" />
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                  <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
                </svg>
              }
            />
            <CardInfo
              title="Navigation Challenges"
              description="Coordinating with others becomes challenging when managing numerous shared file links"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#97EFE9"
                  className="size-6"
                >
                  <path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
                  <path d="M17.39 11.73 22 2l-9.73 4.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              }
            />
            <CardInfo
              title="Fragmented Collaboration Tools"
              description="Relying on multiple tools and services makes collaboration coordination more difficult"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#97EFE9"
                  className="size-6"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
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
          description="Introducing Bryson & Taylor"
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Bryson"
              description="Bryson is an artist who draws inspiration from exploring various producers' beats. He struggles with the inability to filter files by BPM and genre, making it difficult to find the right fit for his work"
              image="/images/sorette/bryson.webp"
            />
            <CardInfo
              title="Taylor"
              description="Taylor is a music producer who collaborates with others but faces disruptions from slow loading times when streaming shared files, making it challenging to maintain a smooth workflow"
              image="/images/sorette/taylor.webp"
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="006"
          title="Competitive Analysis"
          description="I conducted a detailed competitive analysis of popular cloud platforms like Google Drive, Dropbox, and OneDrive to understand their features, user flows, and pain points. This research helped uncover opportunities to refine the user experience and enhance key functionality for more seamless collaboration and file management"
        />
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap gap-16 md:gap-32 justify-center items-center max-w-7xl mx-auto transition-all duration-300 ease-in-out">
            <div className="relative">
              <Image
                src="/images/sorette/googledrive.png"
                alt="Google Drive"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/sorette/googledrive.png"
                alt="Google Drive"
                width={256}
                height={256}
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/sorette/dropbox-light.png"
                alt="Dropbox"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/sorette/dropbox-dark.png"
                alt="Dropbox"
                width={256}
                height={256}
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/sorette/onedrive.png"
                alt="OneDrive"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/sorette/onedrive.png"
                alt="OneDrive"
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
              title="Audio Playback"
              description="Each platform experiences sluggish playback streaming with a brief delay as audio files undergo buffering"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#97EFE9"
                  className="size-6"
                >
                  <path d="M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4" />
                  <path d="M8 18v-7.7L16 9v7" />
                  <circle cx="14" cy="16" r="2" />
                  <circle cx="6" cy="18" r="2" />
                </svg>
              }
            />
            <CardInfo
              title="Limited Filtering Options"
              description="While these platforms offer basic filtering options, they lack the comprehensive features like BPM and genre filters"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#97EFE9"
                  className="size-6"
                >
                  <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" />
                  <path d="m22 3-5 5" />
                  <path d="m17 3 5 5" />
                </svg>
              }
            />
            <CardInfo
              title="No Tagging System"
              description="The lack of a tagging system prevents users from efficiently organizing files and easily searching for specific content"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#97EFE9"
                  className="size-6"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
                  <path d="m14.5 7.5-5 5" />
                  <path d="m9.5 7.5 5 5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="007"
          title="Mid Fidelity Prototypes"
          description=""
        />
        <Carousel
          items={[
            {
              id: "sorette-midfi-1",
              type: "image",
              src: {
                light: "/images/sorette/midfi1.png",
                dark: "/images/sorette/midfi1.png",
              },
              alt: "sorette homepage prototype",
            },
            {
              id: "sorette-midfi-2",
              type: "image",
              src: {
                light: "/images/sorette/midfi2.png",
                dark: "/images/sorette/midfi2.png",
              },
              alt: "sorette library prototype",
            },
            {
              id: "sorette-midfi-3",
              type: "image",
              src: {
                light: "/images/sorette/midfi3.png",
                dark: "/images/sorette/midfi3.png",
              },
              alt: "sorette projects prototype",
            },
            {
              id: "sorette-midfi-4",
              type: "image",
              src: {
                light: "/images/sorette/midfi4.png",
                dark: "/images/sorette/midfi4.png",
              },
              alt: "sorette projects folder prototype",
            },
          ]}
        />
      </section>
      <section className="project-section">
        <SectionHeading
          id="008"
          title="Usability Testing"
          description="Evaluating the sorette prototype"
        />
        <SectionHeading
          title="First click test"
          description="I conducted a first-click test with 7 new participants to assess their ability to navigate tasks using the sorette prototype. Participants, with varying experience on cloud platforms for music collaboration, tested three user flows: uploading a file and inviting others to listen, inviting others to a project, and adding tags to a file"
        />
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="relative w-fit">
            <Image
              src="/images/sorette/firstclicktest-light.png"
              alt="First click test"
              width={1024}
              height={128}
              className="object-contain select-none dark:opacity-0 transition-opacity"
              draggable={false}
              loading="lazy"
            />
            <Image
              src="/images/sorette/firstclicktest-dark.png"
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
              86%
            </p>
            <p className="text-lightgray dark:text-dark-lightgray 3xl:text-lg">
              of participants clicked on the appropriate menu as their first
              choice
            </p>
          </div>
        </div>
        <SectionHeading
          id=""
          title="Survey results"
          description="With a completion rate over 86%, the first-click test shows most participants successfully navigated the sorette prototype, indicating an intuitive and user-friendly interface that accommodates varying levels of experience with cloud platforms for music collaboration"
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Streamlined Projects Tab"
              description="Users find the projects tab simple and intuitive, making it easier to manage active collaborations"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#97EFE9"
                  className="size-6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              }
            />
            <CardInfo
              title="File Tagging for Easy Sorting"
              description="Users value the ability to tag individual files, simplifying the process of sorting and categorizing content"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#97EFE9"
                  className="size-6"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
                  <path d="m9 10 2 2 4-4" />
                </svg>
              }
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-8">
          <div className="flex flex-wrap gap-16 md:gap-32 justify-center items-center max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="relative max-w-[256px] w-full aspect-[1/1]">
                <Image
                  src="/images/sorette/surveyresults1-light.png"
                  alt="Survey results"
                  fill
                  sizes="256px"
                  className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                  draggable={false}
                  loading="lazy"
                />
                <Image
                  src="/images/sorette/surveyresults1-dark.png"
                  alt="Survey results"
                  fill
                  sizes="256px"
                  className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                  draggable={false}
                  loading="lazy"
                />
              </div>
              <p className=" text-lightgray dark:text-dark-lightgray 3xl:text-lg text-center max-w-[256px]">
                of participants expressed their liking of the sorette prototype
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative max-w-[256px] w-full aspect-[1/1]">
                <Image
                  src="/images/sorette/surveyresults1-light.png"
                  alt="Survey result 2"
                  fill
                  sizes="256px"
                  className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                  draggable={false}
                  loading="lazy"
                />
                <Image
                  src="/images/sorette/surveyresults1-dark.png"
                  alt="Survey result 2"
                  fill
                  sizes="256px"
                  className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                  draggable={false}
                  loading="lazy"
                />
              </div>
              <p className=" text-lightgray dark:text-dark-lightgray 3xl:text-lg text-center max-w-[256px]">
                of participants favored sorette over their traditional platform
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="009"
          title="Information Architecture"
          description="Here I have created a sitemap for Spotify Party as well as provided 3 user flows to showcase the core functionality of the features. The flows include: inviting friends to a group session, accepting a group session invitation, and finding previous group session playlists."
        />
        <Carousel
          items={[
            {
              id: "sorette-sitemap",
              type: "image",
              src: {
                light: "/images/sorette/sitemap-light.png",
                dark: "/images/sorette/sitemap-dark.png",
              },
              alt: "sorette sitemap",
            },
            {
              id: "sorette-userflow-1",
              type: "image",
              src: {
                light: "/images/sorette/userflow1-light.png",
                dark: "/images/sorette/userflow1-dark.png",
              },
              alt: "Uploading audio to sorette",
            },
            {
              id: "sorette-userflow-2",
              type: "image",
              src: {
                light: "/images/sorette/userflow2-light.png",
                dark: "/images/sorette/userflow2-dark.png",
              },
              alt: "Using filtering options",
            },
            {
              id: "sorette-userflow-3",
              type: "image",
              src: {
                light: "/images/sorette/userflow3-light.png",
                dark: "/images/sorette/userflow3-dark.png",
              },
              alt: "Accepting a project collaboration invite",
            },
          ]}
        />
      </section>
      <section className="project-section pb-32">
        <SectionHeading id="010" title="Wrapping up" description="" />
        <SectionHeading
          id=""
          title="Project Takeaways"
          description="
sorette represents the beginning of my venture into crafting
                desktop web designs. It provided a canvas for channeling my
                passion towards addressing real-world challenges and
                strategically prioritizing features to deliver significant value
                to users. Implementing various prototyping features fortified my
                proficiency in utilizing Figma's capabilities. In summary, I
                found immense joy in designing sorette, and I sincerely hope
                that you thoroughly enjoy exploring its prototype!"
        />
        <SectionHeading
          id=""
          title="Things I would do differently"
          description="
Looking back, one thing I would do differently is improve my
                time management. Juggling both sorette and mechmarket
                simultaneously was an exhilarating experience. Allocating
                specific time blocks for each project would have allowed me to
                better balance my efforts and ensure more focused progress on
                both fronts."
        />
      </section>
    </main>
  );
}
