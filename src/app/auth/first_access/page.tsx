'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import CircularLoader from '@/components/CircularLoader';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<{ registration: string }>({
    mode: 'onBlur',
  });
  const router = useRouter();

  async function onSubmit({ registration }: { registration: string }) {
    setLoading(true);
    try {
      await axios.post('http://localhost:3333/firstAccess', { registration });
      toast('Solicitação realizada com sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        type: 'success',
        theme: 'light',
        onClose: () => router.push('/'),
      });
    } catch (e) {
      toast('Houve algum Erro', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        type: 'error',
        theme: 'light',
      });
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <main className="h-screen w-screen grid place-items-center bg-slate-200">
        <div className="w-4/5 h-4/5 bg-white rounded-3xl overflow-hidden">
          <div className="flex h-full">
            <section className="flex-1 grid place-items-center bg-blue-800">
              <Image
                src="/firstAccessImage.png"
                width={300}
                height={300}
                alt="Imagem da página de login"
              />
            </section>
            <section className="flex-1 grid place-items-center">
              <div className="w-full h-full flex items-center justify-center flex-col gap-4 animate-fade">
                <div className="self-center mb-8">
                  <span className="font-medium text-3xl">Primeiro Acesso</span>
                </div>
                <form
                  className="flex flex-col gap-6 w-3/5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Input
                    label="Matrícula"
                    id="registration"
                    {...register('registration')}
                  />
                  <button className="rounded-md py-2 bg-yellow-400 font-medium">
                    {loading ? <CircularLoader /> : 'Solicitar Acesso'}
                  </button>
                </form>
                <div>
                  <span className="text-sm">
                    Já possui cadastro?{' '}
                    <Link
                      className="font-bold text-blue-600"
                      href="/auth/login"
                    >
                      Clique aqui
                    </Link>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
