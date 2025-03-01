export interface Project {
  id: string;
  name: string;
  path: string;
  url?: string;
  description: string;
  buttonText?: string;
}

export const projects: Project[] = [
  {
    id: "001",
    name: "Readeezy AI Reading Companion",
    path: "/readeezy",
    url: "https://www.figma.com/proto/...",
    description: "AI-powered reading companion for enhanced comprehension",
    buttonText: "View Prototype",
  },
  {
    id: "002",
    name: "Spotify Party",
    path: "/spotify-party",
    url: "https://www.figma.com/proto/5ciCRD3R2H8jz0fRfKJPJD/Spotify-Party-Landing-Page?page-id=0%3A1&type=design&node-id=1-2&viewport=1334%2C874%2C0.71&t=MT5QwGlDdOlSKv5J-1&scaling=scale-down",
    description:
      "Enhancing the group listening experience for an immersive music exploration",
    buttonText: "View Prototype",
  },
  {
    id: "003",
    name: "sorette",
    path: "/sorette",
    url: "https://www.figma.com/proto/gAKgOfJEIndvJweTn2Yg0l/sorette?page-id=0%3A1&type=design&node-id=1-51&viewport=-1204%2C721%2C0.42&scaling=scale-down&starting-point-node-id=1%3A51",
    description:
      "Cloud sharing platform streamlining music collaboration with others",
    buttonText: "View Prototype",
  },
  {
    id: "004",
    name: "mechmarket",
    path: "/mechmarket",
    url: "https://www.figma.com/proto/o8NlugV7QcyQ7C078psBlQ/mechmarket?page-id=0%3A1&type=design&node-id=6-171&viewport=626%2C762%2C0.34&t=ilETHb1OZwM2IwUG-1&scaling=scale-down&starting-point-node-id=197%3A12181&mode=design",
    description:
      "Mobile marketplace app dedicated to buying and selling keyboard related products",
    buttonText: "View Prototype",
  },
  {
    id: "005",
    name: "Dillo",
    path: "/dillo",
    url: "https://www.figma.com/proto/uQHX7HBAYcTwQGlXcWy46o/CreateSC?page-id=135%3A12981&node-id=142-7541&t=Sg19RQVUbyvy8ta2-1",
    description:
      "Integrating ASL into family bedtime reading to support deaf and hard of hearing children",
    buttonText: "View Slide Deck",
  },
] as const;

export function getProjectNavigation(currentPath: string) {
  const currentIndex = projects.findIndex((p) => p.path === currentPath);

  return {
    current: projects[currentIndex],
    previous: projects[currentIndex - 1] || projects[projects.length - 1],
    next: projects[currentIndex + 1] || projects[0],
  };
}
