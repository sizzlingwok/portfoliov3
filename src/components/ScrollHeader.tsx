"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getProjectNavigation } from "@/config/projects";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = (
  <>
    <li className="text-[15px] text-lightgray dark:text-dark-lightgray">
      <Link
        href="/"
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <Image
          src="/favicon.ico"
          alt="Andy Duong"
          width={24}
          height={24}
          className="object-contain"
        />
      </Link>
    </li>
    <li className="text-[15px] text-lightgray dark:text-dark-lightgray">
      <Link href="/about" className="hover:opacity-80">
        About
      </Link>
    </li>
    <li className="text-[15px] text-lightgray dark:text-dark-lightgray">
      <a
        href="https://linkedin.com/in/andyduong-"
        className="hover:opacity-80 transition-opacity duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </li>
    <li className="text-[15px] text-lightgray dark:text-dark-lightgray">
      <a
        href="/Andy_Duong_Resume.pdf"
        className="hover:opacity-80 transition-opacity duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </li>
  </>
);

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to avoid hydration issues
  const pathname = usePathname();
  const { current } = getProjectNavigation(pathname);

  useEffect(() => {
    // Check if we're on mobile
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMobile(!mediaQuery.matches);

    // Update isMobile when screen size changes
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    // Only add scroll listener if not mobile
    if (!isMobile) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > 200);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        mediaQuery.removeEventListener("change", handleResize);
      };
    }

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [isMobile]);

  if (isMobile || !current) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 hidden md:block"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className="flex justify-center p-4">
            <div className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group transition-[background-color,box-shadow] duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)]">
              <ul className="flex items-center gap-6">
                {navigationItems}
                <li>
                  <div className="[&>button]:hover:ring-0 [&>button]:hover:shadow-none [&>button]:px-2">
                    <ThemeToggle enableHover={true} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
