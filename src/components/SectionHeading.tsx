import React, { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  title,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr_2fr] gap-4 md:gap-x-8 3xl:text-lg items-baseline w-full">
      {id ? (
        <p className="font-medium text-xl dark:text-dark-text">{id}</p>
      ) : (
        <div className="hidden md:block md:col-start-1"></div>
      )}
      <p className="font-medium text-xl dark:text-dark-text md:col-start-2">
        {title}
      </p>
      <p className="text-lightgray dark:text-dark-lightgray md:col-start-3">
        {description}
      </p>
      {children && <div className="col-span-full mt-4">{children}</div>}
    </div>
  );
};

export default SectionHeading;
