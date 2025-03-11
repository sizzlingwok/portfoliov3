"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectHeaderProps {
  projectName: string;
  projectId: string;
  role: string;
  tools: string;
  timeline: string;
  description: string;
}

const SplitText = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [lines, setLines] = React.useState<string[]>([text]);

  const calculateLines = React.useCallback(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);

    const tempElement = document.createElement("div");
    tempElement.style.cssText = window.getComputedStyle(element).cssText;
    tempElement.style.width = `${element.clientWidth}px`;
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    document.body.appendChild(tempElement);

    const words = text.split(" ");
    const newLines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      const testLine = currentLine + (currentLine ? " " : "") + word;
      tempElement.textContent = testLine;

      if (tempElement.clientHeight > lineHeight && currentLine) {
        newLines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });

    if (currentLine) {
      newLines.push(currentLine);
    }

    document.body.removeChild(tempElement);
    setLines(newLines);
  }, [text]);

  React.useEffect(() => {
    calculateLines();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateLines, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [calculateLines]);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <motion.span
          key={index}
          className="block"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5 + index * 0.1,
          }}
        >
          {line}
        </motion.span>
      ))}
    </div>
  );
};

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  projectName,
  projectId,
  role,
  tools,
  timeline,
  description,
}) => {
  return (
    <section className="landing px-8 pt-[12rem] md:pt-64 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out">
      <motion.h1
        className="project-name text-6xl md:text-6xl lg:text-8xl font-medium dark:text-dark-text break-words"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {projectName}
      </motion.h1>
      <div className="flex flex-col justify-between gap-4 3xl:text-lg md:flex-row">
        <motion.p
          className="num font-medium shrink-0 text-xl dark:text-dark-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
        >
          {projectId}
        </motion.p>
        <div className="project-info flex flex-col gap-4">
          <motion.div
            className="flex flex-col gap-2 shrink-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
          >
            <p className="font-medium dark:text-dark-text">Role</p>
            <p className="text-lightgray dark:text-dark-lightgray">{role}</p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 shrink-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
          >
            <p className="font-medium dark:text-dark-text">Tools</p>
            <p className="text-lightgray dark:text-dark-lightgray">{tools}</p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 shrink-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4,
            }}
          >
            <p className="font-medium dark:text-dark-text">Timeline</p>
            <p className="text-lightgray dark:text-dark-lightgray">
              {timeline}
            </p>
          </motion.div>
        </div>
        <SplitText
          text={description}
          className="project-description text-lightgray dark:text-dark-lightgray basis-1/3"
        />
      </div>
    </section>
  );
};

export default ProjectHeader;
