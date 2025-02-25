import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const navigationItems = (
  <>
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
    <header className="w-full py-8 px-8 lg:px-24 transition-[padding] duration-300 ease-in-out relative">
      <nav className="mx-auto flex items-center justify-between">
        <div className="select-none">
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
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-5 items-center select-none">
          {navigationItems}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu>
            <div className="bg-sand dark:bg-dark-sand rounded-lg p-6 ring-2 ring-black/10 dark:ring-white/10 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.05)] min-w-[200px]">
              <ul className="flex flex-col gap-4">{navigationItems}</ul>
            </div>
          </MobileMenu>
        </div>
      </nav>
    </header>
  );
}
