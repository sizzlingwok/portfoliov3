"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React from "react";

interface BlurMediaProps {
  type?: "image" | "video";
  src:
    | string
    | {
        light: string;
        dark: string;
      };
  alt: string;
  width?: number;
  height?: number;
}

const BlurMedia: React.FC<BlurMediaProps> = ({
  type = "image",
  src,
  alt,
  width = 1200,
  height = 675,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-40% 0px -40% 0px",
  });

  const lightSrc = typeof src === "string" ? src : src.light;
  const darkSrc = typeof src === "string" ? src : src.dark;

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(25px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex justify-center w-full"
    >
      {type === "video" ? (
        <div className="relative w-full 3xl:max-w-7xl aspect-video">
          <video
            controls
            preload="none"
            playsInline
            aria-label={alt}
            className="absolute top-0 left-0 w-full h-full object-contain select-none rounded-md"
          >
            <source
              src={typeof src === "string" ? src : src.light}
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        <>
          <Image
            src={lightSrc}
            alt={alt}
            className="w-full h-auto object-contain select-none dark:opacity-0 transition-opacity rounded-md"
            draggable={false}
            width={width}
            height={height}
          />
          <Image
            src={darkSrc}
            alt={alt}
            className="w-full h-auto object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity rounded-md"
            draggable={false}
            width={width}
            height={height}
          />
        </>
      )}
    </motion.div>
  );
};

export default BlurMedia;
