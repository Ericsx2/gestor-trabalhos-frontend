"use client";
import * as Label from "@radix-ui/react-label";
import { HTMLAttributes, HTMLProps } from "react";

interface TextAreaProps
  extends HTMLAttributes<HTMLTextAreaElement>,
    HTMLProps<HTMLTextAreaElement> {
  id: string;
  label: string;
}

export default function TextArea({ id, label, ...rest }: TextAreaProps) {
  return (
    <div className="flex flex-col">
      <Label.Root htmlFor={id}>{label}</Label.Root>
      <textarea
        id={id}
        className="border border-gray-300 rounded-md p-2 transition-all focus:outline-blue-500 focus:border-blue-500"
        {...rest}
      />
    </div>
  );
}
