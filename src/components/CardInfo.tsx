import Image from "next/image";
import React, { ReactNode } from "react";

interface CardInfoProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
  title,
  description,
  icon,
  image,
}) => {
  return (
    <div className="bg-sand dark:bg-dark-sand rounded-lg p-8 flex flex-col gap-4 ring-2 ring-black/10 dark:ring-white/10 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] h-full">
      <div className="flex items-center gap-4 min-h-[32px]">
        {image ? (
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 select-none">
            <Image
              src={image}
              alt={title}
              width={40}
              height={40}
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
        ) : icon ? (
          <div className="flex-shrink-0">{icon}</div>
        ) : null}
        <p className="font-medium text-lg 3xl:text-xl dark:text-dark-text">
          {title}
        </p>
      </div>
      <p className="text-lightgray dark:text-dark-lightgray flex-grow 3xl:text-lg">
        {description}
      </p>
    </div>
  );
};

export default CardInfo;
