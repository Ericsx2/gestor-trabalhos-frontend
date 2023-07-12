'use client';
import useAuth from '@/hooks/useAuth';
import { User } from 'lucide-react';

export default function DashboardHeader() {
  const { user } = useAuth();

  function parseRole(role: string) {
    if (role === 'Student') return 'Aluno';
    if (role === 'Teacher') return 'Professor';
    if (role === 'Admin') return 'Administrador';
  }

  return (
    <header
      style={{ gridArea: 'HE' }}
      className="bg-white py-4 px-4 flex ml-64 items-center justify-end"
    >
      <div className="mr-4">
        <div className="text-gray-700 font-semibold">{user?.name}</div>
        <div className="text-gray-400 text-sm">
          {parseRole(user?.role as string)}
        </div>
      </div>

      <div className="w-12 h-12 grid border-2 border-gray-300 place-items-center rounded-full">
        <User />
      </div>
    </header>
  );
}
