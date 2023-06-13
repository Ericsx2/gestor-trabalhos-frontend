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
    <div className="flex items-center relative rounded-full w-4/5 overflow-hidden">
      <input className="justify-center text-center w-80 text-sm p-3.5 overflow-hidden outline-0" type={type} id={id} {...rest} {...register(name)} />
    </div>
  );
}
