"use client";

import Marquee from "react-fast-marquee";
import MarqueeImage from "./MarqueeImage";

interface MarqueeImage {
  src: string;
  alt: string;
}

interface MarqueeSectionProps {
  images: MarqueeImage[];
  speed?: number;
  direction?: "left" | "right";
}

export default function MarqueeSection({
  images,
  speed = 80,
  direction = "left",
}: MarqueeSectionProps) {
  return (
    <section className="marquee overflow-hidden py-20 relative">
      <Marquee speed={speed} direction={direction}>
        {images.map((image, index) => (
          <MarqueeImage
            key={image.src}
            src={image.src}
            alt={image.alt}
            index={index}
          />
        ))}
      </Marquee>
    </section>
  );
}
