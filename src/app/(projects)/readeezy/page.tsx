import { Metadata } from "next";
import { projects } from "@/config/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectHeader from "@/components/ProjectHeader";
import CardInfo from "@/components/CardInfo";
import Carousel from "@/components/Carousel";
import MarqueeSection from "@/components/MarqueeSection";
import Image from "next/image";

const marqueeImages = [
  {
    src: "/images/readeezy/marquee1.png",
    alt: "Readeezy product images",
  },
  {
    src: "/images/readeezy/marquee2.png",
    alt: "Readeezy product images",
  },
  {
    src: "/images/readeezy/marquee3.png",
    alt: "Readeezy product images",
  },
  {
    src: "/images/readeezy/marquee4.png",
    alt: "Readeezy product images",
  },
  {
    src: "/images/readeezy/marquee5.png",
    alt: "Readeezy product images",
  },
];

const project = projects.find((p) => p.path === "/readeezy")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.description,
};

export default function Project() {
  return (
    <main className="flex-col min-h-screen overflow-x-hidden">
      <ProjectHeader
        projectName="Readeezy Reading Companion"
        projectId="001"
        role="UX Design, User Research, Prototyping, Usability Testing"
        tools="Figma, Notion, UserTesting"
        timeline="3 months - (November - Febuary 2025)"
        description="This project with Readeezy aimed to provide a reading companion to support struggling readers below the standard reading level. The companion engages students by answering questions, discussing storylines, and providing real-time interactions to enhance their reading experience. The tool is designed to offer personalized learning support, helping students improve their reading skills in an interactive and engaging way"
      />
      <MarqueeSection images={marqueeImages} />
      <section className="project-section">
        <SectionHeading
          id="002"
          title="What is Readeezy?"
          description="Readeezy is a fully digital, non-profit library designed to support adolescent, teen, and young adult readers facing challenges with reading. The platform offers books with unique features, including illustrations on every page, interactive gaming questions, and age-appropriate, engaging stories tailored to accessible reading levels. These elements are thoughtfully integrated to not only motivate readers but also improve comprehension and ensure a fun, enjoyable reading experience"
        />
      </section>
      <section className="project-section">
        <SectionHeading
          id="003"
          title="Problem Statement"
          description="How might we create an encouraging digital reading environment that fosters engagement, provides opportunities to correct mistakes, and reinforces positive progress?"
        />
      </section>
      <section className="project-section">
        <SectionHeading
          id="004"
          title="Final Solution"
          description="Our team developed an intuitive AI Companion for Readeezy's digital library platform that integrates seamlessly with the user interface. It offers multi-modal interaction through voice commands and touch/click inputs, ensuring accessibility for all users. The companion includes vocabulary support, providing age-appropriate definitions and examples, as well as sentence comprehension tools with highlighting functionality and clear, concise explanations. As a patient tutor, the companion is always available to help users overcome difficulties, removing the embarrassment often associated with asking for help and encouraging greater reading independence"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] justify-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Multi-modal Interaction"
              description="The AI Companion offers a range of interaction options, including voice commands and touch/click inputs, ensuring accessibility and flexibility for users across different devices and preferences"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                </svg>
              }
            />
            <CardInfo
              title="Comprehensive Support"
              description="Vocabulary assistance is provided with age-appropriate definitions, examples, and sentence comprehension tools like highlighting and clear explanations"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="m8 13 4-7 4 7" />
                  <path d="M9.1 11h5.7" />
                </svg>
              }
            />
            <CardInfo
              title="Encouraging Independence"
              description="The companion acts as a patient tutor, offering on-demand help while fostering reading independence and eliminating the embarrassment of seeking assistance"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
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
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="005"
          title="The Process"
          description="Our design process followed three main phases"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] justify-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Research & Ideation"
              description="Gaining insights into struggling readers through teacher interviews to inform solutions"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              }
            />
            <CardInfo
              title="Prototyping & Testing"
              description="Building out concepts and testing them with teachers, gathering and assessing feedback"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <line x1="22" x2="2" y1="6" y2="6" />
                  <line x1="22" x2="2" y1="18" y2="18" />
                  <line x1="6" x2="6" y1="2" y2="22" />
                  <line x1="18" x2="18" y1="2" y2="22" />
                </svg>
              }
            />
            <CardInfo
              title="Finalizing Designs"
              description="Making changes based on client and user feedback to refine and complete our designs"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="m14.622 17.897-10.68-2.913" />
                  <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
                  <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      <section className="project-section">
        <SectionHeading
          id="006"
          title="Target Audience"
          description="Our target audience consists of special education teachers with experience supporting struggling readers aged 11+ who have learning and cognitive disabilities, as well as English as a Second Language (ESL) needs. We also considered parents who homeschool children facing similar challenges. The research focused primarily on gathering insights from these educators to inform our design solutions"
        />
      </section>
      <section className="project-section">
        <SectionHeading
          id="007"
          title="Research and Ideation"
          description="Over a 3 week research period, we conducted moderated interviews via Google Meet with 7 special education teachers. The insights gathered were then synthesized through affinity mapping to identify key patterns and inform our design solutions"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] justify-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Research & Ideation"
              description="Gaining insights into struggling readers through teacher interviews to inform solutions"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              }
            />
            <CardInfo
              title="Prototyping & Testing"
              description="Building out concepts and testing them with teachers, gathering and assessing feedback"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <line x1="22" x2="2" y1="6" y2="6" />
                  <line x1="22" x2="2" y1="18" y2="18" />
                  <line x1="6" x2="6" y1="2" y2="22" />
                  <line x1="18" x2="18" y1="2" y2="22" />
                </svg>
              }
            />
            <CardInfo
              title="Finalizing Designs"
              description="Making changes based on client and user feedback to refine and complete our designs"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="m14.622 17.897-10.68-2.913" />
                  <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
                  <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
                </svg>
              }
            />
          </div>
        </div>
        <SectionHeading
          title="Key Pain Points"
          description="Over a 3 week research period, we conducted moderated interviews via Google Meet with 7 special education teachers. The insights gathered were then synthesized through affinity mapping to identify key patterns and inform our design solutions"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] justify-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Judgmental environments discourage students"
              description="Traditional reading assistance can feel stigmatizing, and critical language lowers students' motivation to participate"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M2 21a8 8 0 0 1 11.873-7" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="m17 17 5 5" />
                  <path d="m22 17-5 5" />
                </svg>
              }
            />
            <CardInfo
              title="Challenges related to vocabulary gaps and memory retention"
              description="Limited vocabulary obstructs comprehension, while challenges with memory retention prevent students from advancing in their learning"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="M8 2v4" />
                  <path d="M12 2v4" />
                  <path d="M16 2v4" />
                  <rect width="16" height="18" x="4" y="4" rx="2" />
                  <path d="M8 10h6" />
                  <path d="M8 14h8" />
                  <path d="M8 18h5" />
                </svg>
              }
            />
            <CardInfo
              title="Accessibility barriers for non-verbal students"
              description="Non-verbal students face challenges that require alternative input methods beyond voice to fully participate"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#4DA49E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <line x1="2" x2="22" y1="2" y2="22" />
                  <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
                  <path d="M5 10v2a7 7 0 0 0 12 5" />
                  <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
                  <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              }
            />
          </div>
        </div>
        <SectionHeading
          title="Proposed Solutions"
          description="We aimed to create a more positive learning environment by using an informal, supportive, and uplifting tone. To enhance comprehension, we included clear vocabulary support with accessible definitions. We also introduced multiple input options, allowing students to engage with the platform without needing to rely on voice alone, making it more accessible for everyone"
        />
        <SectionHeading
          title="Feature Mapping & Ideation"
          description="Our team generated 50 ideas in total and prioritized them based on impact and feasibility"
        />
        <div className="relative">
          <Image
            src="/images/readeezy/ideation.png"
            alt="Readeezy ideation"
            className="w-full h-auto object-contain select-none dark:opacity-0 transition-opacity rounded-md"
            draggable={false}
            width={1200}
            height={675}
          />
          <Image
            src="/images/readeezy/ideation.png"
            alt="Readeezy ideation"
            className="w-full h-auto object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity rounded-md"
            draggable={false}
            width={1200}
            height={675}
          />
        </div>
      </section>
      <section className="project-section max-w-full">
        <SectionHeading
          id="008"
          title="Prototyping and Testing"
          description="To refine our designs, we built prototypes and conducted usability testing with six teachers through our network and UserTesting.com. By analyzing feedback and identifying common themes, we uncovered unmet needs in our early prototypes, guiding key design improvements. Participants tested two flows: one for sentence assistance and another for vocabulary support. These tests helped us evaluate how effectively the AI companion provided accessible help and identify areas for improvement"
        />
        <div className="relative">
          <Image
            src="/images/readeezy/usertesting-light.png"
            alt="User Testing"
            className="w-full h-auto object-contain select-none dark:opacity-0 transition-opacity rounded-md"
            draggable={false}
            width={1200}
            height={675}
          />
          <Image
            src="/images/readeezy/usertesting-dark.png"
            alt="User Testing"
            className="w-full h-auto object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity rounded-md"
            draggable={false}
            width={1200}
            height={675}
          />
        </div>
        <SectionHeading
          title="Key Feedback and Iterations"
          description="The results revealed strong engagement with the vocabulary and sentence flows, while also identifying areas for improvement. Iterations focused on enhancing clarity and optimizing the flow for smoother interactions. Below are some key insights gathered from user feedback"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-7xl 3xl:max-w-[90rem] place-items-center transition-[grid-template-columns] duration-300 ease-in-out">
            <CardInfo
              title="Users couldn't identify when they were prompted to speak"
              description="A clear animation with a delayed pop-up was added to make prompts more noticeable and intuitive"
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
              title="Conversation flow felt redundant and unnecessary"
              description="Redundant screens were removed, and steps were consolidated to simplify the user journey"
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
              title="Exit prompt created confusion with user navigation"
              description="The exit prompt was replaced with a natural timeout using the existing X button"
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
        <SectionHeading id="009" title="Demo Video" description="" />
        <div className="flex justify-center">
          <div className="relative w-full">
            <video
              controls
              preload="none"
              playsInline
              aria-label="Readeezy demo video"
              className="w-full h-auto object-contain select-none dark:opacity-0 transition-opacity rounded-md"
            >
              <source src="/videos/readeezy/demo.mp4" type="video/mp4" />
            </video>
            <video
              controls
              preload="none"
              playsInline
              aria-label="Readeezy demo video"
              className="w-full h-auto object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity rounded-md"
            >
              <source src="/videos/readeezy/demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="project-section max-w-full">
        <SectionHeading
          id="010"
          title="Testimonials"
          description="A word from those involved in the project"
        />
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl justify-items-center">
            <CardInfo
              title="Maria Cleary, Founder of Readeezy"
              description="&quot;You have no idea how impressive it is to do this. What you've put together gives us such a good foundation to move forward to get funding, to be partners with other people who are interested in this space, it's so much more articulated with your work.&quot;"
              image="/images/spotify/michelle.webp"
            />
            <CardInfo
              title="Lindsay, K-8 Special Education Teacher"
              description='"This is a great feature, it would be very helpful to the students I work with! I thought the (companion&apos;s) language was understandable & friendly"'
              image="/images/spotify/edward.webp"
            />
          </div>
        </div>
      </section>
      <section className="project-section pb-32">
        <SectionHeading id="011" title="Wrapping up" description="" />
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
