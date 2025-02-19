import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-8 px-6">
      <nav className=" mx-auto flex items-center justify-between">
        <div className="text-xl text-black">
          <Link href="/" className="hover:opacity-70">
            Andy Duong
          </Link>
        </div>

        <ul className="flex gap-5 text-[#aaa] text-[15px]">
          <li>
            <Link href="/about" className="hover:opacity-70">
              About
            </Link>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/andyduong-"
              className="hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="/Andy_Duong_Resume.pdf"
              className="hover:opacity-70"
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
