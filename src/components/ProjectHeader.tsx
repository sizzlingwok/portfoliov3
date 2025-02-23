import React from "react";

interface ProjectHeaderProps {
  projectName: string;
  projectId: string;
  role: string;
  tools: string;
  timeline: string;
  description: string;
}

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
      <h1 className="project-name text-8xl font-medium dark:text-dark-text">
        {projectName}
      </h1>
      <div className="flex flex-col justify-between gap-4 3xl:text-xl md:flex-row">
        <p className="num font-medium shrink-0 text-xl dark:text-dark-text">
          {projectId}
        </p>
        <div className="project-info flex flex-col gap-4">
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium dark:text-dark-text">Role</p>
            <p className="font-light text-lightgray dark:text-dark-gray">
              {role}
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium dark:text-dark-text">Tools</p>
            <p className="font-light text-lightgray dark:text-dark-gray">
              {tools}
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium dark:text-dark-text">Timeline</p>
            <p className="font-light text-lightgray dark:text-dark-gray">
              {timeline}
            </p>
          </div>
        </div>
        <h2 className="project-description font-light text-lightgray dark:text-dark-gray basis-1/3">
          {description}
        </h2>
      </div>
    </section>
  );
};

export default ProjectHeader;
