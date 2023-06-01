"use client";
import { Check } from "lucide-react";
import { HTMLProps, useState } from "react";

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  id: string;
}

export default function Checkbox(props: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked((prevState) => !prevState);
  }

  return (
    <div className="w-4 h-4 relative">
      <label
        className={`absolute flex h-full w-full ${
          checked ? "bg-blue-600" : "bg-gray-300"
        } rounded-sm cursor-pointer`}
        htmlFor={props.id}
      >
        {checked ? <Check className="h-full text-white" /> : null}
      </label>
      <input
        className="hidden"
        type="checkbox"
        onChange={() => handleChange()}
        value={`${checked}`}
        {...props}
      />
    </div>
  );
}
