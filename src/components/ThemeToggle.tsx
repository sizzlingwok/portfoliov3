"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function MoonIcon() {
  return (
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
  );
}

function SunIcon() {
  return (
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
  );
}

interface ThemeToggleProps {
  enableHover?: boolean;
}

export default function ThemeToggle({ enableHover = false }: ThemeToggleProps) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
    setTheme("system");
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="bg-sand dark:bg-dark-sand px-4 py-2 rounded-lg flex items-center gap-2 group transition-[background-color,box-shadow] duration-500 ease-in-out lg:hover:ring-2 lg:hover:ring-black/10 dark:lg:hover:ring-white/10"
      aria-label="Toggle theme"
    >
      <span
        className={
          enableHover
            ? "transition-transform duration-300 ease-in-out hover:scale-125"
            : ""
        }
      >
        {currentTheme === "light" ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
