import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

const SFPro = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Display-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Andy Duong",
    default: "Andy Duong",
  },
  description:
    "Hello I'm Andy Duong — UX Designer based in the Bay Area, creating meaningful narratives driven by my passion for music and art.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={SFPro.variable} suppressHydrationWarning>
      <body className="transition-colors duration-300 dark:bg-dark-bg dark:text-dark-text">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="layout min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
