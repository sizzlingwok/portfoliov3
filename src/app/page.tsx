import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Spotify Party",
    description:
      "Enhancing the group listening experience for an immersive music exploration",
    imagePath: "/images/home/spotify.png",
    href: "/spotify-party",
  },
  {
    title: "sorette",
    description:
      "Cloud sharing platform streamlining music collaboration with others",
    imagePath: "/images/home/sorette.png",
    href: "/sorette",
  },
  {
    title: "mechmarket",
    description:
      "Mobile marketplace app dedicated to buying and selling keyboard related products",
    imagePath: "/images/home/mechmarket.png",
    href: "/mechmarket",
  },
  {
    title: "Dillo",
    description:
      "Integrating ASL into family bedtime reading to support deaf and hard of hearing children",
    imagePath: "/images/home/dillo.png",
    href: "/dillo",
  },
  {
    title: "Dillo",
    description:
      "Integrating ASL into family bedtime reading to support deaf and hard of hearing children",
    imagePath: "/images/home/dillo.png",
    href: "/dillo",
  },
  {
    title: "Dillo",
    description:
      "Integrating ASL into family bedtime reading to support deaf and hard of hearing children",
    imagePath: "/images/home/dillo.png",
    href: "/dillo",
  },
];

export default function Page() {
  return (
    <main className="flex-col min-h-screen">
      <section className="landing px-8 py-24 flex flex-col gap-4 select-none">
        <h1 className="text-8xl">Hello</h1>
        <h2 className="text-4xl">I'm Andy Duong</h2>
        <h2 className="text-2xl font-light text-lightgray">
          UX Designer based in the Bay Area, creating meaningful narratives
          driven by my passion for music and art. Scroll down to explore
        </h2>
      </section>
      <section className="project-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-8 py-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.href}
            title={project.title}
            description={project.description}
            imagePath={project.imagePath}
            href={project.href}
          />
        ))}
      </section>
    </main>
  );
}
