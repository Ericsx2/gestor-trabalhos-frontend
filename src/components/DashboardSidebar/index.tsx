"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoColcic from "../../assets/colcicDashboardLogo.png";
import {
  LayoutGrid,
  GraduationCap,
  User2,
  Sliders,
  LogIn as LogOut,
} from "lucide-react";

export default function DashboardSidebar() {
  const navOptions = [
    { name: "Dashboard", href: "/", icon: <LayoutGrid /> },
    { name: "Trabalhos", href: "/trabalhos", icon: <GraduationCap /> },
    { name: "Usuários", href: "/usuarios", icon: <User2 /> },
    { name: "Configurações", href: "/configuracoes", icon: <Sliders /> },
  ];

  const inactiveLink =
    "flex m-1 p-4 gap-4 rounded-3xl transition-all hover:bg-slate-200 hover:text-blue-800";
  const activeLink =
    "flex m-1 p-4 gap-4 rounded-3xl bg-slate-200 text-blue-800";
  const pathname = usePathname();
  let courrentActive = pathname;

  const handleTabClick = (tabPath: string) => {
    courrentActive = tabPath;
  };

  return (
    <aside className="flex flex-col h-screen bg-white w-64 border-r shadow-lg shadow-slate-900 fixed top-0 items-center">
      <Link href="/" className="m-5 w-24 rounded-full">
        <Image src={logoColcic} width={96} height={96} alt="Logo Colcic" />
      </Link>

      <nav className="text-slate-400 mt-12">
        {navOptions.map((option, index) => (
          <Link
            href={option.href}
            key={index}
            className={`${
              courrentActive === option.href ? activeLink : inactiveLink
            }`}
            onClick={() => handleTabClick(`${option.href}`)}
          >
            {option.icon}
            {option.name}
          </Link>
        ))}
      </nav>

      <button className="absolute bottom-12 flex p-4 gap-4 rounded-3xl text-slate-400 hover:bg-slate-200 hover:text-blue-800 transition-all">
        <LogOut />
        <span>Sair</span>
      </button>
    </aside>
  );
}
