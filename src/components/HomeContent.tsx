"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

interface HomeContentProps {
  projects: {
    id: string;
    name: string;
    path: string;
    url?: string;
    description: string;
    buttonText?: string;
  }[];
}

export default function HomeContent({ projects }: HomeContentProps) {
  return (
    <>
      <section className="landing px-8 pt-[12rem] md:pt-64 flex flex-col gap-4 select-none lg:px-24 transition-[padding] duration-300 ease-in-out">
        <motion.h1
          className="text-8xl font-medium"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
        >
          Hello
        </motion.h1>
        <div className="flex flex-col gap-2">
          <motion.h2
            className="text-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
          >
            I'm Andy Duong
          </motion.h2>
          <motion.h2
            className="text-lightgray dark:text-dark-lightgray 3xl:text-lg text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
          >
            UX Designer based in the Bay Area, creating meaningful narratives
            driven by my passion for music and art. Scroll down to explore
          </motion.h2>
        </div>
      </section>
      <motion.section
        className="project-grid flex flex-wrap gap-6 px-8 lg:px-24 py-10"
        initial={{ filter: "blur(25px)", opacity: 0, y: 30 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.6,
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full xl:w-[calc(33.333%-1rem)] lg:w-[calc(50%-0.75rem)] transition-[width] duration-300 ease-in-out"
          >
            <ProjectCard
              title={project.name}
              description={project.description}
              href={project.path}
              imagePath={`/images/home${project.path}.png`}
            />
          </div>
        ))}
      </motion.section>
    </>
  );
}
