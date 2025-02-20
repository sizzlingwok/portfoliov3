import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-8 px-8 lg:px-24 transition-[padding] duration-300 ease-in-out">
      <nav className="mx-auto flex items-center justify-between">
        <div className="text-lg text-lightgray select-none">
          <Link
            href="/"
            className="hover:text-black transition-colors duration-300"
          >
            Andy Duong
          </Link>
        </div>

        <ul className="flex gap-5 items-center select-none">
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
