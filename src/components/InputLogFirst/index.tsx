import { Envelope, IconProps } from "phosphor-react";
import styles from "./styles.module.css";
import { HTMLProps } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps extends HTMLProps<HTMLInputElement> {
  type: string;
  name: string;
  id: string;
  register: UseFormRegister<any>;
}

export default function Input({
  name,
  id,
  type,
  register,
  ...rest
}: InputProps) {
  return (
    <div className={styles.textField}>
      <input type={type} id={id} {...rest} {...register(name)} />
    </div>
  );
}
