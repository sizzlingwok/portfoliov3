"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 200;
      setShow(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out select-none ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
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
    </div>
  );
}
