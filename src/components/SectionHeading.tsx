import React, { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
  hideId?: boolean; // Added optional hideId prop
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  title,
  description,
  hideId = false, // Default to false, meaning the id is visible
  children,
}) => {
  return (
    <div className="flex flex-col justify-between gap-4 3xl:text-xl md:flex-row">
      {/* Conditionally add the 'invisible' class if hideId is true */}
      <p
        className={`font-medium shrink-0 text-xl ${hideId ? "invisible" : ""}`}
      >
        {id}
      </p>
      <p className="font-medium shrink-0 text-xl">{title}</p>
      <h2 className="font-light text-lightgray basis-1/3">{description}</h2>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default SectionHeading;
