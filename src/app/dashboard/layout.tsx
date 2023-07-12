'use client';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import useAuth from '@/hooks/useAuth';
import { redirect } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <main className="dashboard-layout h-screen w-full">
      <DashboardHeader />
      <DashboardSidebar />
      {children}
    </main>
  );
}
