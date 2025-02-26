"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectNavbarProps {
  prototypeUrl: string;
  previousProject?: {
    name: string;
    href: string;
  };
  nextProject?: {
    name: string;
    href: string;
  };
}

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({
  prototypeUrl,
  previousProject,
  nextProject,
}) => {
  return (
    <motion.div
      className="fixed bottom-2 left-0 right-0 mx-auto w-fit z-50"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
        mass: 1.2,
        delay: 0.2,
      }}
    >
      <div className="flex justify-center p-4">
        <motion.div
          className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap transition-[background-color,box-shadow] duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] origin-center"
          initial={{
            scale: 0.2,
            opacity: 0,
            y: 100,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 1,
            delay: 0.5,
          }}
        >
          <ul className="flex items-center gap-6">
            {previousProject && (
              <motion.li
                className="group"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 10,
                  mass: 0.8,
                  delay: 0.6,
                }}
              >
                <Link
                  href={previousProject.href}
                  className="flex items-center relative px-2 py-2"
                  aria-label={`Previous Project: ${previousProject.name}`}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <span className="text-[15px] transition-transform duration-500 group-hover:-translate-x-1">
                      ←
                    </span>
                  </div>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {previousProject.name}
                  </span>
                </Link>
              </motion.li>
            )}

            <motion.li
              className="group"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
                mass: 0.8,
                delay: 0.7,
              }}
            >
              <a
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="flex items-center gap-2 text-[15px]">
                  View Prototype
                  <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </span>
              </a>
            </motion.li>

            {nextProject && (
              <motion.li
                className="group"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 10,
                  mass: 0.8,
                  delay: 0.8,
                }}
              >
                <Link
                  href={nextProject.href}
                  className="flex items-center relative px-2 py-2"
                  aria-label={`Next Project: ${nextProject.name}`}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <span className="text-[15px] transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {nextProject.name}
                  </span>
                </Link>
              </motion.li>
            )}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectNavbar;
