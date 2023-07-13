'use client';

import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import {
  LayoutGrid,
  GraduationCap,
  User2,
  LogIn as LogOut,
  User,
  GitPullRequest,
} from 'lucide-react';
import useAuth from '@/hooks/useAuth';

export default function DashboardSidebar() {
  const { user, signOut } = useAuth();
  const navOptions = [
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutGrid /> },
    {
      name: 'Trabalhos',
      href: '/dashboard/projects',
      icon: <GraduationCap />,
    },
    {
      name: 'Requisições',
      href: '/dashboard/registration_requests',
      icon: <GitPullRequest />,
      admin: true,
    },
    {
      name: 'Usuários',
      href: '/dashboard/users',
      icon: <User2 />,
      admin: true,
    },
  ];

  const inactiveLink =
    'flex m-1 p-4 gap-4 rounded-3xl transition-all hover:bg-slate-200 hover:text-blue-800';
  const activeLink =
    'flex m-1 p-4 gap-4 rounded-3xl bg-slate-200 text-blue-800';
  const pathname = usePathname();
  let courrentActive = pathname;

  const handleTabClick = (tabPath: string) => {
    courrentActive = tabPath;
  };

  function handleSignOut() {
    signOut();
    redirect('/');
  }

  return (
    <aside
      style={{ gridArea: 'SD' }}
      className="flex flex-col h-full bg-white  border-r shadow-lg shadow-slate-900 items-center"
    >
      <Link href="/" className="m-5 w-24 rounded-full">
        <Image
          src="/colcicDashboardLogo.png"
          width={96}
          height={96}
          alt="Logo Colcic"
        />
      </Link>

      <nav className="text-slate-400 mt-12">
        {navOptions.map((option, index) => {
          if (option.admin && user?.role !== 'Admin') return null;
          return (
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
          );
        })}
      </nav>

      <button
        onClick={() => handleSignOut()}
        className="absolute bottom-12 flex p-4 gap-4 rounded-3xl text-slate-400 hover:bg-slate-200 hover:text-blue-800 transition-all"
      >
        <LogOut />
        <span>Sair</span>
      </button>
    </aside>
  );
}
