import React, { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
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
    <section
      className={`body px-8 pt-32 md:pt-64 flex flex-col gap-40 select-none lg:px-24 transition-[padding] duration-300 ease-in-out`}
    >
      <div className="flex flex-col justify-between gap-4 3xl:text-xl md:flex-row">
        <p className="font-medium shrink-0 text-xl">{id}</p>
        <p className="font-medium shrink-0 text-xl">{title}</p>
        <h2 className="font-light text-lightgray basis-1/3">{description}</h2>
      </div>

      {children && <div className="mt-4">{children}</div>}
    </section>
  );
};

export default SectionHeading;
