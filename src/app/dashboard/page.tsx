'use client';

import DashboardPageTitle from '@/components/DashboardPageTitle';
import useAuth from '@/hooks/useAuth';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <main className="p-8">
      <DashboardPageTitle label={`Olá, ${user?.name}`} />
    </main>
  );
}
