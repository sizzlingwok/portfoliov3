"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { motion } from "framer-motion";

const navigationItems = (
  <>
    <motion.li
      className="text-[15px] text-lightgray dark:text-dark-lightgray"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1,
      }}
    >
      <Link href="/about" className="hover:opacity-80">
        About
      </Link>
    </motion.li>
    <motion.li
      className="text-[15px] text-lightgray dark:text-dark-lightgray"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2,
      }}
    >
      <a
        href="https://linkedin.com/in/andyduong-"
        className="hover:opacity-80 transition-opacity duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </motion.li>
    <motion.li
      className="text-[15px] text-lightgray dark:text-dark-lightgray"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      }}
    >
      <a
        href="/Andy_Duong_Resume.pdf"
        className="hover:opacity-80 transition-opacity duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </motion.li>
  </>
);

// Mobile navigation items without animations
const mobileNavItems = (
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

export default function Header() {
  return (
    <>
      {/* Mobile Header (visible below md breakpoint) */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex justify-center p-4">
          <div className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap group transition-[background-color,box-shadow] duration-500 ease-in-out">
            <ul className="flex items-center gap-6">
              {mobileNavItems}
              <li>
                <div className="[&>button]:hover:ring-0 [&>button]:hover:shadow-none [&>button]:px-2">
                  <ThemeToggle enableHover={true} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Header (original design, visible above md breakpoint) */}
      <header className="hidden md:block w-full py-8 px-8 lg:px-24 transition-[padding] duration-300 ease-in-out relative">
        <nav className="mx-auto flex items-center justify-between">
          <motion.div
            className="select-none"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/favicon.ico"
                alt="Andy Duong"
                width={40}
                height={40}
                className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
              />
            </Link>
          </motion.div>

          <ul className="flex gap-5 items-center select-none">
            {navigationItems}
            <motion.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
            >
              <ThemeToggle />
            </motion.li>
          </ul>
        </nav>
      </header>
    </>
  );
}
