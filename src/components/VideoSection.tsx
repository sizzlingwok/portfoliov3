"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface VideoSectionProps {
  videoId: string;
  title: string;
  description: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoId,
  title,
  description,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-40% 0px -40% 0px", // Triggers when element is ~40% from center
    amount: 0.4, // Element needs to be 40% visible to trigger
  });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-6 md:gap-16 lg:gap-32 w-full max-w-screen-2xl 3xl:max-w-screen-3xl"
    >
      <motion.div
        className="video-wrapper flex w-full md:w-1/2"
        initial={{ filter: "blur(25px)", opacity: 0 }}
        animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full rounded-md shadow-md"
        >
          <source src={`/videos/spotify/${videoId}.mp4`} type="video/mp4" />
        </video>
      </motion.div>
      <div className="video-description flex flex-col w-full md:w-1/2 md:text-left gap-2">
        <motion.p
          className="font-medium text-lg 3xl:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
        >
          {title}
        </motion.p>
        <motion.p
          className="text-lightgray dark:text-dark-lightgray"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default VideoSection;
