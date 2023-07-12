"use client";
import { FileImage } from "lucide-react";
import { ChangeEvent, HTMLAttributes, HTMLProps, useState } from "react";
import * as Label from "@radix-ui/react-label";

interface FileInputProps
  extends HTMLProps<HTMLInputElement>,
    HTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function FileUpload({
  id,
  label,
  onChange,
  ...rest
}: FileInputProps) {
  const [fileName, setFileName] = useState("");
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setFileName(event.target.files[0].name ?? "");
    }
    if (onChange) onChange(event);
  }

  return (
    <div>
      <Label.Root htmlFor={id}>{label}</Label.Root>
      <div className=" flex items-center gap-2 rounded-md border relative p-2 text-gray-600">
        <label className="bg-blue-700 rounded-md p-2 text-white" htmlFor={id}>
          Selecione
        </label>
        {fileName ? (
          <>
            <FileImage />
            <span>{fileName}</span>
          </>
        ) : null}
        <input
          type="file"
          id={id}
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
