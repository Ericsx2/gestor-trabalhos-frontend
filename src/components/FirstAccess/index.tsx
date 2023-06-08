"use client";

import React from "react";
import Input from "@/components/InputLogFirst";
import Image from "next/image";
import logoColcic from "../../assets/colcicLogo.png";
import firstAccessImage from "../../assets/firstAccessImage.png";
import styles from "./styles.module.css";
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
      <div className={styles.firstAccessContainer}>
        <div className={styles.firstAccessWrapper}>
          <div className={styles.firstAccessImageSection}>
            <div className={styles.firstAccessImageContainer}>
              <Image
                className={styles.firstAccessColcicImage}
                src={logoColcic}
                alt="Logo Colcic"
              />

              <Image
                className={styles.firstAccessComputerImage}
                src={firstAccessImage}
                alt="Homem no Computador Teclando"
              />
            </div>
          </div>
          <div className={styles.firstAccessFormContainer}>
            <div className={styles.firstAccessFormWrapper}>
              <div className={styles.firstAccessFormHeader}>
                <h3 className={styles.firstAccessTitleFont}>Primeiro Acesso</h3>
              </div>
              <form className={styles.firstAccessForm}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  register={register}
                />
                {errors.email && isSubmitted && (
                  <div className={styles.errorBalloonEmail}>
                    {errors.email?.message}
                  </div>
                )}
                <div className={styles.firstAccessButtonDiv}>
                  <button
                    className={styles.firstAccessButton}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Enviar
                  </button>
                  <button className={styles.firstAccessButton}>Voltar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
