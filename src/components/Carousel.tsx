"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface CarouselItem {
  type: "image" | "video";
  src?: {
    light: string;
    dark: string;
  };
  videoId?: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const itemWidth = scrollContainer.querySelector("li")?.offsetWidth || 0;
      const scrollPosition = scrollContainer.scrollLeft;
      const newIndex = Math.round(scrollPosition / itemWidth);

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;

    const itemWidth =
      scrollContainerRef.current.querySelector("li")?.offsetWidth || 0;
    scrollContainerRef.current.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const renderCarouselItem = (item: CarouselItem, index: number) => {
    if (item.type === "video" && item.videoId) {
      return (
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.alt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-md"
          />
        </div>
      );
    }

    return item.src ? (
      <div className="relative">
        <Image
          src={item.src.light}
          alt={item.alt}
          className="w-full h-auto object-contain select-none dark:opacity-0 transition-opacity rounded-md"
          draggable={false}
          width={1200}
          height={675}
        />
        <Image
          src={item.src.dark}
          alt={item.alt}
          className="w-full h-auto object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity rounded-md"
          draggable={false}
          width={1200}
          height={675}
        />
      </div>
    ) : null;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(25px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-screen left-[50%] right-[50%] -mx-[50vw] max-w-none overflow-hidden"
    >
      <div className="relative">
        <ul
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:gap-[1.5rem]"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="relative w-screen md:w-[65vw] shrink-0 snap-center md:first:ml-[17.5vw] md:last:mr-[17.5vw] flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-sand dark:focus-visible:ring-dark-sand px-8 md:px-0"
            >
              <div className="relative w-full rounded-md overflow-hidden">
                {renderCarouselItem(item, index)}
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex justify-center gap-4 mt-6">
          <button
            onClick={() => scrollTo(currentIndex - 1)}
            className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group transition-[background-color,box-shadow] duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
            aria-label="Previous item"
          >
            <span className="transition-transform duration-500 group-hover:-translate-x-1">
              ←
            </span>
          </button>
          <button
            onClick={() => scrollTo(currentIndex + 1)}
            className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group transition-[background-color,box-shadow] duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === items.length - 1}
            aria-label="Next item"
          >
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;
