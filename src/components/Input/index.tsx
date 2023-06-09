import { HTMLProps } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps extends HTMLProps<HTMLInputElement> {
  icon?: React.ReactNode;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  background?: string;
}

export default function Input({
  icon,
  register,
  name,
  background,
  ...rest
}: InputProps) {
  return (
    <div
      className={`flex flex-1 bg-gray-200 border-2 border-gray-300 rounded-md p-1.5 transition-all focus-within:border-blue-300`}
    >
      <input
        className="bg-transparent focus:outline-none grow"
        {...rest}
        {...register(name)}
      />
      {icon}
    </div>
  );
}

