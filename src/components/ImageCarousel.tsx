"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
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
              className="relative w-screen md:w-[33.333vw] shrink-0 snap-center md:first:ml-[33.333vw] md:last:mr-[33.333vw] flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-sand dark:focus-visible:ring-dark-sand px-8 md:px-0"
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
                  priority
                  draggable={false}
                  className="object-contain rounded-md w-full h-auto"
                  sizes="(md) 45vw, 100vw"
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
