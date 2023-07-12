import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const current = pathname.split('/')[1];

  function isSelected(path: string) {
    return current === path ? true : false;
  }

  return (
    <header className="max-h-16 flex justify-between px-14">
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
          className={classNames(
            'h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white',
            isSelected('') ? 'bg-blue-600 text-white' : ''
          )}
          href="/"
        >
          Home
        </Link>
        <Link
          className={classNames(
            'h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white',
            isSelected('projects') ? 'bg-blue-600 text-white' : ''
          )}
          href="/projects"
        >
          Projetos
        </Link>
        <Link
          className={classNames(
            'h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white'
          )}
          href="https://colcic.usec.br"
          target="_blank"
        >
          Site Colcic
        </Link>
      </nav>
      <div>
        <Link
          className={classNames(
            'h-full px-3 flex items-center transition-all hover:bg-blue-600 hover:text-white'
          )}
          href="/auth/login"
        >
          Entrar
        </Link>
      </div>
    </header>
  );
}
