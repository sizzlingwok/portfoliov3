import MarqueeSection from "../../../components/MarqueeSection";

const readeezyImages = [
  {
    src: "/images/readeezy/image1.png",
    alt: "Readeezy Feature 1",
  },
  {
    src: "/images/readeezy/image2.png",
    alt: "Readeezy Feature 2",
  },
  // ... more images
];

export default function Readeezy() {
  return (
    <main>
      {/* ... other components */}
      <MarqueeSection images={readeezyImages} />
      {/* ... rest of the page */}
    </main>
  );
}
