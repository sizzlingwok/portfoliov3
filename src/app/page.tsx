import HomeContent from "@/components/HomeContent";
import { projects } from "@/config/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeContent projects={projects} />
    </main>
  );
}
