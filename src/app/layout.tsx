import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import ScrollHeader from "@/components/ScrollHeader";
import ClientLayout from "@/components/ClientLayout";
import { Suspense } from "react";
import { defaultMetadata } from "@/config/metadata";
import Script from "next/script";
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

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={SFPro.variable} suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a77e9a75-2aa4-483a-8700-8f3e4ee363e7"
        />
      </head>
      <body
        className="bg-white transition-[background-color] duration-300 dark:bg-dark-bg dark:text-dark-text"
        suppressHydrationWarning
      >
        <ClientLayout>
          <Suspense fallback={null}>
            <div className="layout min-h-screen flex flex-col">
              <Header />
              <ScrollHeader />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Suspense>
        </ClientLayout>
      </body>
    </html>
  );
}
