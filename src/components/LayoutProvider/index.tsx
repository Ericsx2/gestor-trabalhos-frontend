'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  if (pathname.includes('dashboard') || pathname.includes('auth'))
    return <>{children}</>;

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
