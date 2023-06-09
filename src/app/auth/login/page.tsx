'use client';
import CircularLoader from '@/components/CircularLoader';
import Input from '@/components/Input';
import useAuth from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const { signIn } = useAuth();

  async function onSubmit(data: LoginData) {
    setLoading(true);
    try {
      const parsedData = loginSchema.parse(data);
      await signIn(parsedData);
      toast('Login efetuado com sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        type: 'success',
        theme: 'light',
        onClose: () => router.push('/dashboard'),
      });
    } catch (e) {
      toast('Erro', {
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
                src="/loginImage.png"
                width={300}
                height={300}
                alt="Imagem da página de login"
              />
            </section>
            <section className="flex-1 grid place-items-center">
              <div className="w-full h-full flex items-center justify-center flex-col gap-4 animate-fade">
                <div className="self-center mb-8">
                  <span className="font-medium text-3xl">Faça Login</span>
                </div>
                <form
                  className="flex flex-col gap-6 w-3/5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Input
                    key="email"
                    label="Email"
                    id="email"
                    {...register('email')}
                  />
                  <div>
                    <Input
                      label="Password"
                      id="password"
                      type="password"
                      key="password"
                      {...register('password')}
                    />
                    <span className="flex pt-2 justify-end w-full text-xs font-bold text-blue-600">
                      <Link href="/recovery_password">Esqueci minha Senha</Link>
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="rounded-md py-2 bg-yellow-400 font-medium"
                  >
                    {loading ? <CircularLoader /> : 'Entrar'}
                  </button>
                </form>
                <div>
                  <span className="text-sm">
                    Não possui cadastro?{' '}
                    <Link
                      className="font-bold text-blue-600"
                      href="/auth/first_access"
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
