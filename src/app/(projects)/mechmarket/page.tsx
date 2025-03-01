import { Metadata } from "next";
import { projects } from "@/config/projects";
import SectionHeading from "@/components/SectionHeading";
import VideoSection from "@/components/VideoSection";
import ProjectHeader from "@/components/ProjectHeader";
import CardInfo from "@/components/CardInfo";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import MarqueeSection from "@/components/MarqueeSection";

const marqueeImages = [
  {
    src: "/images/mechmarket/marquee1.png",
    alt: "mechmarket product images",
  },
  {
    src: "/images/mechmarket/marquee2.png",
    alt: "mechmarket product images",
  },
  {
    src: "/images/mechmarket/marquee3.png",
    alt: "mechmarket product images",
  },
  {
    src: "/images/mechmarket/marquee4.png",
    alt: "mechmarket product images",
  },
  {
    src: "/images/mechmarket/marquee5.png",
    alt: "mechmarket product images",
  },
];

const project = projects.find((p) => p.path === "/mechmarket")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.description,
};

export default function sorette() {
  return (
    <main className="flex-col min-h-screen overflow-x-hidden">
      <ProjectHeader
        projectName="mechmarket"
        projectId="001"
        role="UX Design, User Research, Visual Design, Prototyping"
        tools="Figma, Google Forms, Optimal Workshop, After Effects"
        timeline="10 weeks (Mar - May 2023)"
        description="mechmarket is a dedicated marketplace app where users can buy
                and sell keyboard related products. mechmarket currently thrives
                as a subreddit with close to 300,000 members. Recognizing the
                potential for improvement, I believe the development of a
                dedicated mobile app would not only streamline the buying and
                selling experience, but also unlock a plethora of new features
                that were previously hindred by the traditional scope of
                Reddit's functionality."
      />
      <MarqueeSection images={marqueeImages} />
      <section className="project-section">
        <SectionHeading
          id="002"
          title="Final Solution"
          description="Simplifying the keyboard marketplace experience at your fingertips"
        />
      </section>

      <section className="video-section px-8 py-8 md:py-20 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out 3xl:text-lg md:flex-row">
        <div className="content-container flex flex-col gap-8 items-center justify-center w-full mx-auto">
          <VideoSection
            videoId="mechmarket/marketdata"
            title="Track Market Trends for Smarter Decisions"
            description="Discover the latest market trends to stay up-to-date with current pricing dynamics and make informed decisions"
          />
          <VideoSection
            videoId="mechmarket/offer"
            title="Streamline Transactions with Ease"
            description="Easily send and receive offers, streamlining transactions to make deal-making faster and more efficient"
          />
          <VideoSection
            videoId="mechmarket/filters"
            title="Find What You Need, Faster"
            description="Evaluating the buying and selling experience on the mechmarket subreddit"
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
          title="First click test"
          description="In the initial phase, I assessed the ability of 8 participants to navigate the mechmarket subreddit. Testing two distinct user flows, I aimed to determine their proficiency in completing a purchase or listing an item for sale. It's important to highlight that participants had no prior experience with the mechmarket subreddit in this specific test
"
        />
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative max-w-[256px] w-full aspect-[1/1]">
              <Image
                src="/images/mechmarket/firstclicktest-light.png"
                alt="13% of participants successfully completed the task"
                fill
                sizes="256px"
                className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/mechmarket/firstclicktest-dark.png"
                alt="13% of participants successfully completed the task"
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
        </div>
        <SectionHeading
          title="Survey Results"
          description="13% of participants were able to complete both tasks. This insight suggests that the user flow may be too difficult for new users."
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Redefining Reddit as a Marketplace"
              description="Reddit’s focus on content browsing may limit its appeal for marketplace activities, highlighting the need for better integration of marketplace features"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#813BC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M2 7h20" />
                  <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
                </svg>
              }
            />
            <CardInfo
              title="Streamlining Transaction Flows"
              description="The complexity of community rules and numerous transaction steps can overwhelm users, especially on mobile, highlighting the need for a smoother, more intuitive experience"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#813BC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
                  <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
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
          description="How can our app redefine user experience beyond Reddit's challenges??"
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Lack of User Intuitiveness"
              description="The buying and selling process on Reddit is not intuitive, making it difficult for users to navigate and complete transactions smoothly"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#813BC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              }
            />
            <CardInfo
              title="Limited Functionality"
              description="Reddit's design prioritizes discussions over commerce, resulting in limited marketplace features compared to dedicated e-commerce platforms"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#813BC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M2 3h20" />
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                  <path d="m7 21 5-5 5 5" />
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
          description="Introducing Amy & Alex"
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Amy"
              description="Amy is new to the mechanical keyboard hobby. She wants to acquire a new keyboard with a budget cap of $500. However, she finds the current lack of price filtering options quite frustrating on the subreddit. The absence of this feature makes it cumbersome for her to navigate through various products, as they may not align with her specific budget constraints."
              image="/images/mechmarket/amy.webp"
            />
            <CardInfo
              title="Alex"
              description="Alex is a veteran on mechmarket. He loves building and collecting keyboards. He wishes there was a dedicated mobile app where he can easily track and view market data. This would spare him the effort of needing to consistently sift through numerous posts on the subreddit, making it seamless to obtain an accurate overview of prevailing market prices."
              image="/images/mechmarket/alex.webp"
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="006"
          title="Competitive Analysis"
          description="I conducted a thorough competitive analysis of leading cloud platforms such as Poshmark, Goat, and StockX to inform the design evolution of mechmarket. This included evaluating their user interfaces and workflows to gain valuable insights into key design principles"
        />
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap gap-16 md:gap-32 justify-center items-center max-w-7xl mx-auto transition-all duration-300 ease-in-out">
            <div className="relative">
              <Image
                src="/images/mechmarket/stockx-light.png"
                alt="StockX"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/mechmarket/stockx-dark.png"
                alt="StockX"
                width={256}
                height={256}
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/mechmarket/poshmark-light.png"
                alt="Poshmark"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/mechmarket/poshmark-dark.png"
                alt="Poshmark"
                width={256}
                height={256}
                className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/mechmarket/goat-light.png"
                alt="Goat"
                width={256}
                height={256}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/mechmarket/goat-dark.png"
                alt="Goat"
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
              title="Filtering Options"
              description="Leading marketplace platforms allow users to sort by key metrics like price range. In contrast, mechmarket lacks this functionality, limiting its filtering options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#813BC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" />
                  <path d="m22 3-5 5" />
                  <path d="m17 3 5 5" />
                </svg>
              }
            />
            <CardInfo
              title="Direct Image Upload"
              description="These platforms enable users to upload and capture product images directly, eliminating the need for third-party image hosting services, which mechmarket currently requires"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#813BC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19.5 3-3 3 3" />
                  <path d="M17 22v-5.5" />
                  <circle cx="9" cy="9" r="2" />
                </svg>
              }
            />
            <CardInfo
              title="Offers"
              description="Other platforms allow users to propose a price for a product, a feature not yet available on mechmarket. Currently, users must negotiate pricing directly with sellers"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#813BC7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="007"
          title="Low Fidelity Prototypes"
          description=""
        />
        <ImageCarousel
          images={[
            {
              src: {
                light: "/images/mechmarket/lofi1.png",
                dark: "/images/mechmarket/lofi1.png",
              },
              alt: "mechmarket lofi prototype",
            },
            {
              src: {
                light: "/images/mechmarket/lofi2.png",
                dark: "/images/mechmarket/lofi2.png",
              },
              alt: "mechmarket lofi prototype",
            },
            {
              src: {
                light: "/images/mechmarket/lofi3.png",
                dark: "/images/mechmarket/lofi3.png",
              },
              alt: "mechmarket lofi prototype",
            },
            {
              src: {
                light: "/images/mechmarket/lofi4.png",
                dark: "/images/mechmarket/lofi4.png",
              },
              alt: "mechmarket lofi prototype",
            },
          ]}
        />
      </section>
      <section className="project-section">
        <SectionHeading
          id="008"
          title="Usability Testing"
          description="Evaluating the mechmarket prototype"
        />
        <SectionHeading
          title="First click test"
          description="In a first-click test with the same 8 participants, I evaluated their grasp of the mechmarket prototype, emphasizing the same initial phase tests. My aim was to determine if there were any enhancements in user experience compared to their previous interactions with the mechmarket subreddit. Below were the resultsu"
        />
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative max-w-[256px] w-full aspect-[1/1]">
              <Image
                src="/images/mechmarket/usabilitytesting1-light.png"
                alt="88% of participants successfully completed the task"
                fill
                sizes="256px"
                className="object-contain select-none absolute inset-0 dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/mechmarket/usabilitytesting1-dark.png"
                alt="88% of participants successfully completed the task"
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
                src="/images/mechmarket/usabilitytestingresults-light.png"
                alt="Second click test"
                width={1024}
                height={128}
                className="object-contain select-none dark:opacity-0 transition-opacity"
                draggable={false}
                loading="lazy"
              />
              <Image
                src="/images/mechmarket/usabilitytestingresults-dark.png"
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
          description="With the completion rate exceeding 88%, the findings strongly suggest that the mechmarket prototype excels in intuitiveness and user-friendliness when compared to the Reddit platform. Unanimously, all participants agree that the concept of a dedicated mobile app for mechmarket is highly favorable"
        />
      </section>
      <section className="project-section">
        <SectionHeading
          id="009"
          title="Information Architecture"
          description="Here I have created a sitemap for Spotify Party as well as provided 3 user flows to showcase the core functionality of the features. The flows include: inviting friends to a group session, accepting a group session invitation, and finding previous group session playlists."
        />
        <ImageCarousel
          images={[
            {
              src: {
                light: "/images/mechmarket/sitemap-light.png",
                dark: "/images/mechmarket/sitemap-dark.png",
              },
              alt: "mechmarket sitemap",
            },
            {
              src: {
                light: "/images/mechmarket/userflow1-light.png",
                dark: "/images/mechmarket/userflow1-dark.png",
              },
              alt: "Purchasing a product",
            },
            {
              src: {
                light: "/images/mechmarket/userflow2-light.png",
                dark: "/images/mechmarket/userflow2-dark.png",
              },
              alt: "Using filtering options",
            },
            {
              src: {
                light: "/images/mechmarket/userflow3-light.png",
                dark: "/images/mechmarket/userflow3-dark.png",
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
          description="Developing the mechmarket app was a significant milestone in my journey after completing the Google UX Design course. It provided valuable insights into the unique needs of keyboard enthusiasts, which in turn, enriched my role as a UX Designer. During this project, I honed advanced skills in Figma, including creating scrollable content and utilizing auto-layout. This experience greatly enhanced my design capabilities and reinforced my commitment to creating user-centered solutions"
        />
        <SectionHeading
          id=""
          title="Things I would do differently"
          description="Reflecting on the project, I realize that more thorough planning and refinement from the start would have provided a clearer project direction. By adopting a more strategic approach, I could have minimized the need for frequent adjustments during feature implementation. In future projects, I’ll prioritize these lessons to execute more efficiently and effectively"
        />
      </section>
    </main>
  );
}
