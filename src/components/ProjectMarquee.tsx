interface ProjectMarqueeProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

const ProjectMarquee = ({ images }) => (
  <section className="marquee overflow-hidden py-20 relative">
    <Marquee speed={80} direction="left">
      {images.map((image, index) => (
        <MarqueeImage key={index} src={image.src} alt={image.alt} />
      ))}
    </Marquee>
  </section>
);
