'use client';

import DashboardPageTitle from '@/components/DashboardPageTitle';
import { Table } from '@/components/Table';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { Trash } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const { user, token } = useAuth();

  if (user?.role !== 'Admin') redirect('/dashboard');

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios('http://localhost:3333/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data);
        setUsers(data.users);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  async function handleRemoveUser(id: string) {
    try {
      await axios.delete(`http://localhost:3333/user/${id}`);
    } catch (e) {}
  }

  function parseRole(role: string) {
    if (role === 'Student') return 'Aluno';
    if (role === 'Teacher') return 'Professor';
    if (role === 'Admin') return 'Administrador';
  }

  return (
    <main className="p-8">
      <DashboardPageTitle label="Usuários" />
      <Table.Container>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head>#</Table.Head>
              <Table.Head>Nome</Table.Head>
              <Table.Head>Sobrenome</Table.Head>
              <Table.Head>Cargo</Table.Head>
              <Table.Head>Ações</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users?.map((user, i) => {
              return (
                <Table.Row key={user.name}>
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.last_name}</Table.Cell>
                  <Table.Cell>{parseRole(user.role)}</Table.Cell>
                  <Table.Cell>
                    <button
                      className="p-2 rounded-full transition-all hover:bg-slate-200"
                      onClick={() => handleRemoveUser(user.id)}
                    >
                      <Trash size={16} />
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </Table.Container>
    </main>
  );
}
