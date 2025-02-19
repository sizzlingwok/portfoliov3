"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-8 px-12">
      <nav className="mx-auto flex items-center justify-between">
        <div className="text-xl text-black font-semibold">
          <Link href="/" className="hover:opacity-80">
            Andy Duong
          </Link>
        </div>

        <ul className="flex gap-5 items-center">
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
        </ul>
      </nav>
    </header>
  );
}
