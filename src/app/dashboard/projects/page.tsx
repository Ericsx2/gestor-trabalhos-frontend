'use client';

import DashboardPageTitle from '@/components/DashboardPageTitle';
import { Table } from '@/components/Table';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Projects() {
  const [projects, setProjects] = useState<any>();
  const router = useRouter();
  const { user, token } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const role = user?.role;
        const { data } = await axios(
          `http://localhost:3333/${
            role === 'Admin' ? 'project' : `user/${user?.id}/projects`
          }`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProjects(data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [user]);

  async function handleRemoveProject(id: string) {
    try {
      await toast.promise(
        axios.delete(`http://localhost:3333/project/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: 'Promise is pending',
          success: 'Promise resolved 👌',
          error: 'Promise rejected 🤯',
        }
      );
      router.refresh();
    } catch (e) {}
  }

  return (
    <main className="p-8">
      <ToastContainer />
      <div className="flex items-center justify-between">
        <DashboardPageTitle label="Trabalhos" />
        <Link
          className="flex items-center p-2 gap-2 rounded-md bg-blue-600 text-white hover:bg-blu-700"
          href="/dashboard/projects/new"
        >
          Novo Projeto
          <Plus />
        </Link>
      </div>
      <Table.Container>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head>#</Table.Head>
              <Table.Head>Título</Table.Head>
              <Table.Head>Disciplina</Table.Head>
              <Table.Head>Ações</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {projects?.map((project, i) => {
              return (
                <Table.Row key={project.title}>
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>{project.title}</Table.Cell>
                  <Table.Cell>{project.owner}</Table.Cell>
                  <Table.Cell>
                    <button
                      className="p-2 rounded-full transition-all hover:bg-slate-200"
                      onClick={() => handleRemoveProject(project.id)}
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
