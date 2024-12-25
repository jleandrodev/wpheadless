import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

export default async function Header() {
  return (
    <header className=" w-full flex items-center justify-between fixed top-0 px-4 py-3 shadow-sm md:px-6 z-10 bg-transparent bg-white bg-opacity-30 backdrop-blur-lg p-5 rounded-lg">
      <div className="container flex justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src={Logo.src} width={200} height={80} alt="Logo" />
        </Link>
        <nav className="hidden items-center gap-6 text-lg font-bold md:flex">
          <Link
            href="/"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#about-section"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#services-section"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#price-section"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Price
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
