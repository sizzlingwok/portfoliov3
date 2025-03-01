import { Metadata } from "next";
import { projects } from "@/config/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectHeader from "@/components/ProjectHeader";
import CardInfo from "@/components/CardInfo";
import ImageCarousel from "@/components/ImageCarousel";
import MarqueeSection from "@/components/MarqueeSection";

const marqueeImages = [
  {
    src: "/images/dillo/marquee1.png",
    alt: "dillo product images",
  },
  {
    src: "/images/dillo/marquee2.png",
    alt: "dillo product images",
  },
  {
    src: "/images/dillo/marquee3.png",
    alt: "dillo product images",
  },
  {
    src: "/images/dillo/marquee4.png",
    alt: "dillo product images",
  },
  {
    src: "/images/dillo/marquee5.png",
    alt: "dillo product images",
  },
];

const project = projects.find((p) => p.path === "/dillo")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.description,
};

export default function Project() {
  return (
    <main className="flex-col min-h-screen overflow-x-hidden">
      <ProjectHeader
        projectName="Dillo"
        projectId="001"
        role="UX Design, Prototyping"
        tools="Figma"
        timeline="24 hours - April 2024"
        description="Dillo is an app that helps families with hard of hearing children to learn more about American Sign Language (ASL). Dillo offers lessons that include enjoyable bedtime stories families can interact with alongside their children. This app was created in response to the createSC 24 hour design hackathon that featured over 250 members. Our team received runner up out of 60 teams"
      />
      <MarqueeSection images={marqueeImages} />
      <section className="project-section">
        <SectionHeading
          id="002"
          title="Design Prompt"
          description="Develop a mobile application platform aimed at enhancing accessibility and enriching the entertainment experience for individuals needing medical accommodations"
        />
      </section>
      <section className="project-section">
        <SectionHeading
          id="003"
          title="Problem Statement"
          description="How can we make ASL learning resources accessible and engaging for families with hard of hearing children?"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] justify-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Engagement Challenges"
              description="ASL learning can feel overwhelming or uninteresting without interactive methods that make the experience engaging for both children and parents"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffc375"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7" />
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                </svg>
              }
            />
            <CardInfo
              title="Family Involvement"
              description="Parents play a key role in ASL learning, but many lack the tools and knowledge needed to confidently teach their hard of hearing children"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffc375"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <CardInfo
              title="Lack of Resources"
              description="Many ASL resources overlook accessibility, making it difficult for families to find materials that effectively support their learning needs"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffc375"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  <path d="M6 12h2" />
                  <path d="M6 8h2" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className="project-section max-w-full">
        <SectionHeading
          id="004"
          title="User Research"
          description="Navigating Challenges in Hearing Family Dynamics"
        />
        <SectionHeading
          title="Secondary Research"
          description="Due to time limitations, primary research was not conducted. Instead, we analyzed existing data, uncovering a critical gap: Over 90% of deaf children are born to hearing families with little knowledge of deafness. Limited access to early hearing screenings leaves many families without clear guidance on essential language and communication support"
        />
        <SectionHeading
          title="Target Audience"
          description="Our target audience includes families with hard-of-hearing children who face challenges in accessing language and communication support. This includes parents and guardians guiding their child’s education, as well as children who benefit from early intervention tools for language development and social integration"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] justify-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Engagement Challenges"
              description="ASL learning can feel overwhelming or uninteresting without interactive methods that make the experience engaging for both children and parents"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffc375"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7" />
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                </svg>
              }
            />
            <CardInfo
              title="Family Involvement"
              description="Parents play a key role in ASL learning, but many lack the tools and knowledge needed to confidently teach their hard of hearing children"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffc375"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <CardInfo
              title="Lack of Resources"
              description="Many ASL resources overlook accessibility, making it difficult for families to find materials that effectively support their learning needs"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffc375"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  <path d="M6 12h2" />
                  <path d="M6 8h2" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="005"
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
      <section className="project-section pb-32">
        <SectionHeading id="006" title="Wrapping up" description="" />
        <SectionHeading
          id=""
          title="Project Takeaways"
          description="Participating in this hackathon was both rewarding and challenging, especially within a 24-hour time constraint. Collaborating on Dillo pushed me to think critically and adapt quickly. Seeing the project evolve and exploring innovative ideas from other teams was inspiring. This experience reinforced the importance of rapid problem-solving and strengthened my ability to design under pressure"
        />
        <SectionHeading
          id=""
          title="Learning Outcomes"
          description="This hackathon refined my design thinking skills, emphasizing user-centered design and rapid prototyping. Managing tasks efficiently under tight deadlines improved my project management and prioritization abilities. Working closely with my team enhanced my communication skills, adaptability, and ability to align on a shared vision. These experiences have strengthened my confidence in technical development, collaborative design, and problem-solving in fast-paced environments"
        />
      </section>
    </main>
  );
}
