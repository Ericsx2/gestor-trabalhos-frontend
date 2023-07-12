'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import { z } from 'zod';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import { Table } from '@/components/Table';
import Input from '@/components/Input';
import Select from '@/components/Select';
import useAuth from '@/hooks/useAuth';

export default function RegistrationRequests() {
  const [requests, setRequests] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const { token } = useAuth();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios('http://localhost:3333/user/requests/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests(data);
    };

    getData();
  }, [token]);

  return (
    <main className="p-8">
      <ToastContainer />
      <Table.Container>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head>#</Table.Head>
              <Table.Head>Matrícula</Table.Head>
              <Table.Head>Pendente</Table.Head>
              <Table.Head>Ações</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {requests.map((request, i) => {
              return (
                <Table.Row key={request.registration}>
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>{request.registration}</Table.Cell>
                  <Table.Cell>{request.was_created ? 'Não' : 'Sim'}</Table.Cell>
                  <Table.Cell className="flex items-center gap-2">
                    <button className="rounded-full p-1 transition-all cursor-pointer hover:bg-gray-200">
                      <X />
                    </button>
                    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
                      <Dialog.Trigger className="p-1 rounded-full transition-all hover:bg-blue-200">
                        <Check />
                      </Dialog.Trigger>
                      <RegisterUser
                        registration={request.registration}
                        setShowModal={setShowModal}
                      />
                    </Dialog.Root>
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

const userSchema = z
  .object({
    name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    registration: z.string(),
    role: z.string(),
  })
  .required();

type UserData = z.infer<typeof userSchema>;

function RegisterUser({
  registration,
  setShowModal,
}: {
  registration: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { register, handleSubmit, setValue } = useForm<UserData>({
    mode: 'all',
    resolver: zodResolver(userSchema),
  });
  const { token } = useAuth();

  function handleSelectRole(value: string) {
    setValue('role', value);
  }

  async function onSubmit(data: UserData) {
    try {
      const parsedData = userSchema.parse(data);
      console.log(data);
      await axios.post('http://localhost:3333/user', parsedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast('Cadastro Efetuado com sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        type: 'success',
        theme: 'light',
      });
    } catch (e) {
      toast('Erro ao cadastrar usuário', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        type: 'error',
        theme: 'light',
      });
      console.log(e);
    } finally {
      setShowModal(false);
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 blur-md data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px]">
        <Dialog.Title className="flex items-center justify-between py-2">
          <span className="font-semibold text-3xl">Cadastrar Usuário</span>
          <Dialog.Close
            asChild
            className="rounded-full p-1 transition-all cursor-pointer hover:bg-gray-200"
          >
            <X size={30} />
          </Dialog.Close>
        </Dialog.Title>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Input key="name" id="name" label="Nome" {...register('name')} />
          <Input
            key="last_name"
            id="last_name"
            label="Sobrenome"
            {...register('last_name')}
          />
          <Input key="email" id="email" label="Email" {...register('email')} />
          <Input
            key="registration"
            id="registration"
            label="Matrícula"
            value={registration}
            {...register('registration')}
          />
          <Select
            label="Cargo"
            options={[
              { label: 'Aluno', value: 'Student' },
              { label: 'Professor', value: 'Teacher' },
              { label: 'Administrador', value: 'Admin' },
            ]}
            onchange={handleSelectRole}
          />
          <button className="mt-2 self-end p-2 rounded-md bg-blue-700 text-white">
            Registrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
