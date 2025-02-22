"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full py-8 px-8 lg:px-24 transition-[padding] duration-300 ease-in-out">
      <nav className="mx-auto flex items-center justify-between">
        <div className="text-lg text-lightgray dark:text-dark-gray select-none">
          <Link
            href="/"
            className="hover:text-black dark:hover:text-dark-text transition-colors duration-300"
          >
            Andy Duong
          </Link>
        </div>

        <ul className="flex gap-5 items-center select-none">
          <li className="text-[15px] text-lightgray dark:text-dark-gray">
            <Link href="/about" className="hover:opacity-80">
              About
            </Link>
          </li>
          <li className="text-[15px] text-lightgray dark:text-dark-gray">
            <a
              href="https://linkedin.com/in/andyduong-"
              className="hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-[15px] text-lightgray dark:text-dark-gray">
            <a
              href="/Andy_Duong_Resume.pdf"
              className="hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          {mounted && (
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="bg-sand dark:bg-dark-sand px-6 py-3 rounded-lg flex items-center gap-2 group transition-all duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10 lg:hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:lg:hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)]"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
