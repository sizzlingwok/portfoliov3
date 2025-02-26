export interface ProjectData {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    prototypeUrl: string;
    previousProject?: {
      name: string;
      href: string;
    };
    nextProject?: {
      name: string;
      href: string;
    };
  };
  header: {
    projectName: string;
    projectId: string;
    role: string;
    tools: string;
    timeline: string;
    description: string;
  };
}
