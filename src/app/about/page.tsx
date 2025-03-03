import AboutContent from "@/components/AboutContent";
import Carousel from "@/components/Carousel";

export default function About() {
  return (
    <main className="flex-col min-h-screen">
      <AboutContent />
      <section className="project-section pb-32">
        <Carousel
          items={[
            {
              id: "video-1",
              type: "video",
              videoId: "NlSZEhXSW94",
              alt: "everything goes on - gym edit",
            },
            {
              id: "video-2",
              type: "video",
              videoId: "jujFuyUALs4",
              alt: "SOP PL Promo",
            },
            {
              id: "video-3",
              type: "video",
              videoId: "D79o2jLOiXM",
              alt: "Bay Area Barbell Open 2023 - Powerlifting Meet Recap",
            },
            {
              id: "video-4",
              type: "video",
              videoId: "tAkb9H_FtyY",
              alt: "Eli Meet Recap - SoCal Showdown 2022",
            },
          ]}
        />
      </section>
    </main>
  );
}
