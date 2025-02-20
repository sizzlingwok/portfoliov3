import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  href: string;
}

export default function ProjectCard({
  title,
  description,
  imagePath,
  href,
}: ProjectCardProps) {
  return (
    <a href={href}>
      <div className="bg-sand aspect-square w-full rounded-lg flex flex-col group transition-all duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={imagePath}
            alt={title}
            width={1000}
            height={1000}
            className="w-3/4 object-contain rounded-md transition-all duration-500 ease-in-out lg:group-hover:-translate-y-4 relative z-10 lg:group-hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="pb-6 px-6">
          <div className="flex flex-col gap-1">
            <p>{title}</p>
            <p className="text-lightgray">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
