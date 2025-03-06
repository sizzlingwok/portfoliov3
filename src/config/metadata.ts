import { Metadata } from "next";
import { projects } from "./projects";

// Define base metadata that's common across all projects
const baseMetadata = {
  metadataBase: new URL("https://andyduong.work"),
  applicationName: "Andy Duong",
  authors: [{ name: "Andy Duong" }],
  creator: "Andy Duong",
  publisher: "Andy Duong",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Add default metadata for the root layout
export const defaultMetadata: Metadata = {
  ...baseMetadata,
  title: {
    template: "%s | Andy Duong",
    default: "Andy Duong",
  },
  description:
    "Hello I'm Andy Duong — UX Designer based in the Bay Area, creating meaningful narratives driven by my passion for music and art.",
  openGraph: {
    title: "Andy Duong",
    description:
      "Hello I'm Andy Duong — UX Designer based in the Bay Area, creating meaningful narratives driven by my passion for music and art.",
    url: baseMetadata.metadataBase,
    siteName: "Andy Duong",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Andy Duong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andy Duong",
    description:
      "Hello I'm Andy Duong — UX Designer based in the Bay Area, creating meaningful narratives driven by my passion for music and art.",
  },
  alternates: {
    canonical: baseMetadata.metadataBase.toString(),
  },
  category: "portfolio",
};

export function generateProjectMetadata(projectPath: string): Metadata {
  const project = projects.find((p) => p.path === projectPath)!;
  const title = `${project.name} | Andy Duong`;
  const imageUrl = `${baseMetadata.metadataBase}${project.ogImage}`;

  return {
    ...baseMetadata,
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      url: `${baseMetadata.metadataBase}${project.path}`,
      siteName: "Andy Duong",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseMetadata.metadataBase}${project.path}`,
    },
    category: "portfolio",
  };
}
