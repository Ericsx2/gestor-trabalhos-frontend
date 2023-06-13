"use client";

import Input from "@/components/InputLogFirst";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z
  .object({
    email: z.string().email({ message: "Email obrigatório" }),
    password: z.string().min(1, "Senha obrigatória"),
  })
  .required();

type LoginData = z.infer<typeof LoginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  function onSubmit(data: LoginData) {
    const parsedData = LoginSchema.parse(data);
    console.log(parsedData);
  }

  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="w-3/5 h-4/5 flex overflow-hidden">
          <div className="w-1/2 bg-white">
            <div className="p-6 flex flex-col items-center justify-around">
              <Image
                className="w-5/8 mt-5"
                src="/colcicLogo.png"
                alt="Logo Colcic"
                width={350}
                height={350}
              />

              <Image
                className="w-80 mt-5"
                src="/loginImage.png"
                alt="Imagem de um homem em um computador teclando"
                width={350}
                height={350}
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center bg-[#283A73]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl mb-6">
                <h3 className="font-sans font-bold text-white">Login</h3>
              </div>
              <form
                className="flex flex-col items-center gap-2 font-sans"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="User"
                  register={register}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  register={register}
                />
                {errors.email && isSubmitted && (
                  <div className="mx-2 font-medium text-white">
                    {errors.email?.message}
                  </div>
                )}
                {errors.password && isSubmitted && (
                  <div className="mx-2 font-medium text-white">
                    {errors.password?.message}
                  </div>
                )}
                <button className="mt-4 w-16 h-9 rounded-xl font-medium font-sans bg-[#F0E63A] hover:bg-[#F0D400]">
                  Entrar
                </button>
                <div className="mt-4 inline-block w-auto text-white">
                  <a
                    className="mx-2 font-medium hover:underline hover:decoration-[#F0E63A]"
                    href="#"
                  >
                    Esqueceu a senha?
                  </a>
                  <a
                    className="mx-2 font-medium hover:underline hover:decoration-[#F0E63A]"
                    href="#"
                  >
                    Primeiro Acesso?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
