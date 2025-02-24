"use client";

import { useState } from "react";

export default function MobileMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Mobile Menu */}
      <div
        className={`absolute top-[calc(100%-0.5rem)] right-8 md:hidden transform ${
          isMenuOpen
            ? "opacity-100 translate-y-1 visible"
            : "opacity-0 -translate-y-1 invisible"
        } transition-all duration-200 ease-out`}
      >
        {children}
      </div>
    </>
  );
}
