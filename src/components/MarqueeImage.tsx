import React from "react";
import Image from "next/image";

interface MarqueeImageProps {
  src: string;
  alt: string;
}

const MarqueeImage: React.FC<MarqueeImageProps> = ({ src, alt }) => {
  return (
    <div className="w-[80vw] md:w-[60vw] lg:w-[35vw] rounded-md overflow-hidden shrink-0 relative flex items-center justify-center mr-6">
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          priority={true}
          draggable={false}
          className="object-contain rounded-md w-full h-auto"
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 35vw"
        />
      </div>
    </div>
  );
};

export default MarqueeImage;
