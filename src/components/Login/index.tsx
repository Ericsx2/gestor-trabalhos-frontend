"use client";

import Input from "@/components/InputLogFirst";
import Image from "next/image";
import logoColcic from "../../assets/colcicLogo.png";
import loginImage from "../../assets/loginImage.png";
import styles from "./styles.module.css";
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
      <div className={styles.loginContainer}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginImageSection}>
            <div className={styles.loginImageContainer}>
              <Image
                className={styles.loginColcicImage}
                src={logoColcic}
                alt="Logo Colcic"
              />

              <Image
                className={styles.loginComputerImage}
                src={loginImage}
                alt="Homem no Computador Teclando"
              />
            </div>
          </div>
          <div className={styles.loginFormContainer}>
            <div className={styles.loginFormWrapper}>
              <div className={styles.loginFormHeader}>
                <h3 className={styles.loginFormTitleFont}>Login</h3>
              </div>
              <form
                className={styles.loginForm}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="User"
                  register={register}
                />
                {errors.email && !isSubmitted && (
                  <div className={styles.errorBalloonEmail}>
                    {errors.email?.message}
                  </div>
                )}
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  register={register}
                />
                {errors.password && !isSubmitted && (
                  <div className={styles.errorBalloonPassword}>
                    {errors.password?.message}
                  </div>
                )}
                <button>Entrar</button>
                <div className={styles.loginPasswordLostAndFirstAccess}>
                  <a href="#">Esqueceu a senha?</a>
                  <a href="#">Primeiro Acesso?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
