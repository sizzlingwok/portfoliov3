"use client";

import Marquee from "react-fast-marquee";
import MarqueeImage from "./MarqueeImage";

interface MarqueeSectionProps {
  images: {
    src: string;
    alt: string;
  }[];
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
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </Marquee>
    </section>
  );
}
