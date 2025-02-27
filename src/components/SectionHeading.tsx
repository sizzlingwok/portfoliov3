"use client";

import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = !!id;

  return (
    <div
      ref={ref}
      className="flex flex-col md:grid md:grid-cols-[1fr_1fr_2fr] gap-4 md:gap-x-8 3xl:text-lg items-baseline w-full"
    >
      {id ? (
        <motion.p
          className="font-medium text-xl dark:text-dark-text"
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 3,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
        >
          {id}
        </motion.p>
      ) : (
        <div className="hidden md:block md:col-start-1"></div>
      )}
      <motion.p
        className="font-medium text-xl dark:text-dark-text md:col-start-2"
        initial={shouldAnimate ? { y: 20, opacity: 0 } : false}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3,
        }}
      >
        {title}
      </motion.p>
      <motion.p
        className="text-lightgray dark:text-dark-lightgray md:col-start-3 max-w-[700px]"
        initial={shouldAnimate ? { y: 20, opacity: 0 } : false}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.5,
        }}
      >
        {description}
      </motion.p>
      {children && <div className="col-span-full mt-4">{children}</div>}
    </div>
  );
};

export default SectionHeading;
