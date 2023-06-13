import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="max-h-16 flex justify-between pl-20 pr-36">
      <Link href="/">
        <Image
          className="h-full aspect-auto object-contain"
          src="/colcicLogo.png"
          alt="Logo do COLCIC"
          width={350}
          height={350}
        />
      </Link>

      <nav className="flex items-center">
        <Link
          className="h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white"
          href="/"
        >
          Home
        </Link>
        <Link
          className="h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white"
          href="/"
        >
          Home
        </Link>
        <Link
          className="h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white"
          href="/"
        >
          Home
        </Link>
        <Link
          className="h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white"
          href="/"
        >
          Home
        </Link>
        <Link
          className="h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white"
          href="/"
        >
          Home
        </Link>
      </nav>
    </header>
  );
}
