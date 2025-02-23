"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
    setTheme("system");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = (
    <>
      <li className="text-[15px] text-lightgray">
        <Link href="/about" className="hover:opacity-80">
          About
        </Link>
      </li>
      <li className="text-[15px] text-lightgray">
        <a
          href="https://linkedin.com/in/andyduong-"
          className="hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
      <li className="text-[15px] text-lightgray">
        <a
          href="/Andy_Duong_Resume.pdf"
          className="hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
    </>
  );

  return (
    <header className="w-full py-8 px-8 lg:px-24 transition-[padding] duration-300 ease-in-out relative">
      <nav className="mx-auto flex items-center justify-between">
        <div className="text-lg text-lightgray select-none">
          <Link
            href="/"
            className="hover:text-black dark:hover:text-dark-text transition-colors duration-300"
          >
            Andy Duong
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-5 items-center select-none">
          {navigationItems}
          {mounted && (
            <li>
              <button
                onClick={() =>
                  setTheme(currentTheme === "dark" ? "light" : "dark")
                }
                className="bg-sand dark:bg-dark-sand px-4 py-2 rounded-lg flex items-center gap-2 group transition-all duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10"
                aria-label="Toggle theme"
              >
                {currentTheme === "light" ? (
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
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              className="bg-sand dark:bg-dark-sand p-2 rounded-lg flex items-center"
              aria-label="Toggle theme"
            >
              {currentTheme === "light" ? (
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
              ) : (
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
              )}
            </button>
          )}
          <button
            onClick={toggleMenu}
            className="p-2 text-lightgray dark:text-dark-gray bg-sand dark:bg-dark-sand rounded-lg relative"
            aria-label="Toggle menu"
          >
            <div className="w-4 h-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute inset-0 transition-all duration-200 ease-in-out ${
                  isMenuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute inset-0 transition-all duration-200 ease-in-out ${
                  isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[calc(100%-0.5rem)] right-8 md:hidden transform ${
            isMenuOpen
              ? "opacity-100 translate-y-1 visible"
              : "opacity-0 -translate-y-1 invisible"
          } transition-all duration-200 ease-out`}
        >
          <div className="bg-sand dark:bg-dark-sand rounded-lg p-6 ring-2 ring-black/10 dark:ring-white/10 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] min-w-[200px]">
            <ul className="flex flex-col gap-4">{navigationItems}</ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
