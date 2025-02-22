import React from "react";

interface MetadataItem {
  title: string;
  description: string;
}

interface ProjectHeaderProps {
  projectName: string;
  projectId: string;
  role: string;
  tools: string;
  timeline: string;
  description: string;
  metadata?: MetadataItem[];
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  projectName,
  projectId,
  role,
  tools,
  timeline,
  description,
  metadata,
}) => {
  return (
    <section className="landing px-8 pt-64 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out">
      <h1 className="project-name text-8xl font-medium">{projectName}</h1>
      <div className="flex flex-col justify-between gap-4 3xl:text-xl md:flex-row">
        <p className="num font-medium shrink-0 text-xl">{projectId}</p>
        <div className="project-info flex flex-col gap-4">
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium">Role</p>
            <p className="font-light text-lightgray">{role}</p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium">Tools</p>
            <p className="font-light text-lightgray">{tools}</p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium">Timeline</p>
            <p className="font-light text-lightgray">{timeline}</p>
          </div>
          {metadata?.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 shrink-0">
              <p className="font-medium">{item.title}</p>
              <p className="font-light text-lightgray">{item.description}</p>
            </div>
          ))}
        </div>
        <h2 className="project-description font-light text-lightgray basis-1/3">
          {description}
        </h2>
      </div>
    </section>
  );
};

export default ProjectHeader;
