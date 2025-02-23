import React, { ReactNode } from "react";

interface CardInfoProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const CardInfo: React.FC<CardInfoProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-sand dark:bg-dark-sand rounded-lg p-8 flex flex-col gap-4 ring-2 ring-black/10 dark:ring-white/10 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] h-full">
      <div className="flex items-center gap-4 min-h-[32px]">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <p className="font-medium text-lg dark:text-dark-text">{title}</p>
      </div>
      <p className="text-lightgray dark:text-dark-gray flex-grow">
        {description}
      </p>
    </div>
  );
};

export default CardInfo;
