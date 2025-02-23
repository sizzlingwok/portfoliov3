import Image from "next/image";
import Link from "next/link";

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
    <Link href={href} className="block w-full">
      <div className="bg-sand dark:bg-dark-sand aspect-square w-full rounded-lg flex flex-col group transition-[background-color,box-shadow] duration-300 ease-in-out transform lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)]">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={imagePath}
            alt={title}
            width={1000}
            height={1000}
            priority
            className="w-3/4 object-contain rounded-md transition-transform duration-300 ease-in-out lg:group-hover:-translate-y-4 relative z-10 lg:group-hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="pb-6 px-6">
          <div className="flex flex-col gap-1">
            <p className="font-medium">{title}</p>
            <p className="text-lightgray">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
