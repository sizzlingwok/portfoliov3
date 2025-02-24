import ProjectCard from "@/components/ProjectCard";

export default function Page() {
  return (
    <main className="flex-col min-h-screen">
      <section className="landing px-8 pt-[12rem] md:pt-64 flex flex-col gap-4 select-none lg:px-24 transition-[padding] duration-300 ease-in-out">
        <h1 className="text-8xl font-medium">Hello</h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">I'm Andy Duong</h2>
          <h2 className="text-medium font-light text-lightgray text-xl">
            UX Designer based in the Bay Area, creating meaningful narratives
            driven by my passion for music and art. Scroll down to explore
          </h2>
        </div>
      </section>
      <section className="project-grid flex flex-wrap gap-6 px-8 lg:px-24 py-10">
        <div className="w-full xl:w-[calc(33.333%-1rem)] lg:w-[calc(50%-0.75rem)] transition-[width] duration-300 ease-in-out">
          <ProjectCard
            title="Readeezy AI Reading Companion"
            description="Enhancing the group listening experience for an immersive music exploration"
            imagePath="/images/home/spotify.png"
            href="/readeezy"
          />
        </div>
        <div className="w-full xl:w-[calc(33.333%-1rem)] lg:w-[calc(50%-0.75rem)] transition-[width] duration-300 ease-in-out">
          <ProjectCard
            title="Spotify Party"
            description="Enhancing the group listening experience for an immersive music exploration"
            imagePath="/images/home/spotify.png"
            href="/spotify-party"
          />
        </div>
        <div className="w-full xl:w-[calc(33.333%-1rem)] lg:w-[calc(50%-0.75rem)] transition-[width] duration-300 ease-in-out">
          <ProjectCard
            title="sorette"
            description="Cloud sharing platform streamlining music collaboration with others"
            imagePath="/images/home/sorette.png"
            href="/sorette"
          />
        </div>
        <div className="w-full xl:w-[calc(33.333%-1rem)] lg:w-[calc(50%-0.75rem)] transition-[width] duration-300 ease-in-out">
          <ProjectCard
            title="mechmarket"
            description="Mobile marketplace app dedicated to buying and selling keyboard related products"
            imagePath="/images/home/mechmarket.png"
            href="/mechmarket"
          />
        </div>
        <div className="w-full xl:w-[calc(33.333%-1rem)] lg:w-[calc(50%-0.75rem)] transition-[width] duration-300 ease-in-out">
          <ProjectCard
            title="Dillo"
            description="Integrating ASL into family bedtime reading to support deaf and hard of hearing children"
            imagePath="/images/home/dillo.png"
            href="/dillo"
          />
        </div>
      </section>
    </main>
  );
}
