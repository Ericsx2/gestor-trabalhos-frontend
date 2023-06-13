"use client";

import React from "react";
import Input from "@/components/InputLogFirst";
import Image from "next/image";
import logoColcic from "../../assets/colcicLogo.png";
import firstAccessImage from "../../assets/firstAccessImage.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z
  .object({
    email: z.string().email({ message: "Email obrigatório" }),
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
      <div className="flex justify-center items-center h-screen bg-neutral-800">
        <div className="w-3/5 h-4/5 flex overflow-hidden">
          <div className="w-1/2 bg-white">
            <div className="p-6 flex flex-col items-center justify-around">
              <Image
                className="w-5/8 mt-5"
                src={logoColcic}
                alt="Logo Colcic"
              />

              <Image
                className="w-80 mt-5"
                src={firstAccessImage}
                alt="Imagem de um homem em um computador teclando"
              />
            </div>
          </div>
          <div className="w-[46vw] flex justify-center items-center bg-[#283A73]">
            <div className="h-[50vh] flex flex-col items-center justify-center">
              <div className="text-4xl mb-6">
                <h3 className="font-sans font-bold text-white">Primeiro Acesso</h3>
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
                {errors.email && isSubmitted && (
                  <div className="mx-2 font-medium text-white">
                    {errors.email?.message}
                  </div>
                )}
                <div>
                  <button
                    className="mt-4 mx-2 w-16 h-9 rounded-md font-medium font-sans bg-[#F0E63A] hover:bg-[#F0D400]"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Enviar
                  </button>
                  <button className="mt-4 mx-2 w-16 h-9 rounded-md font-medium font-sans bg-[#F0E63A] hover:bg-[#F0D400]">Voltar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
