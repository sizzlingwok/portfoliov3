"use client";

import { usePathname } from "next/navigation";
import ProjectNavbar from "../../components/ProjectNavbar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectPage = pathname !== "/";

  return (
    <>
      {children}
      {isProjectPage && <ProjectNavbar />}
    </>
  );
}
