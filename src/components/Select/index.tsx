"use client";
import { useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

interface SelectProps {
  options: string[];
}

function Select({ options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  function handleChange(newValue: string) {
    setValue(newValue);
    setIsOpen(false);
  }

  return (
    <div className="relative flex flex-col items-center shadow-xl">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" bg-gray-200 p-4 w-full gap-10 flex item-center justify-between rounded-md text-sm
         tracking-wider border-2 border-transparent active:border-gray-600 
        "
      >
        {value ? value : "Selecione"}
        {!isOpen ? (
          <CaretDown size={32} className="h-5" />
        ) : (
          <CaretUp size={32} className="h-5" />
        )}
      </button>

      {isOpen && (
        <div className="bg-gray-200 absolute flex flex-col rounded-md top-16 overflow-hidden w-full text-sm gap-2">
          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => handleChange(option)}
              className="flex w-full h-full justify-between cursor-pointer p-2 transition-all
                   hover:bg-blue-900  hover:text-white"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
