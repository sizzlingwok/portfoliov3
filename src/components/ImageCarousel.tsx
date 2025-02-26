"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface CarouselImage {
  src: {
    light: string;
    dark: string;
  };
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] max-w-none overflow-hidden">
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
          {images.map((image, index) => (
            <li
              key={index}
              className="relative w-screen md:w-[65vw] shrink-0 snap-center md:first:ml-[17.5vw] md:last:mr-[17.5vw] flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-sand dark:focus-visible:ring-dark-sand px-8 md:px-0"
            >
              <div className="relative w-full max-w-[1200px] aspect-video">
                <Image
                  src={image.src.light}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-contain select-none dark:opacity-0 transition-opacity"
                  draggable={false}
                />
                <Image
                  src={image.src.dark}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-contain select-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
                  draggable={false}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex justify-center gap-4 mt-6">
          <button
            onClick={() => scrollTo(currentIndex - 1)}
            className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group transition-[background-color,box-shadow] duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <span className="transition-transform duration-500 group-hover:-translate-x-1">
              ←
            </span>
          </button>
          <button
            onClick={() => scrollTo(currentIndex + 1)}
            className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group transition-[background-color,box-shadow] duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === images.length - 1}
            aria-label="Next image"
          >
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
