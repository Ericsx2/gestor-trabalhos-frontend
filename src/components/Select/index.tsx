"use client";
import { useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

const categories = [
  {
    "text":"Categoria 1"
  },
  {
    "text":"Categoria 2"
  },
  {
    "text":"Categoria 3"
  },
  {
    "text":"Categoria 4"
  }
];

function Select(){
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="relative flex flex-col items-center w-[200px] h-[43px]">
      <button onClick={() => setIsOpen((prev) => !prev)} className=" bg-gray-300 p-4 w-full flex item-center justify-between text-sm
         tracking-wider border-2 border-transparent active:border-gray-600 
        ">
          Categorias
          {
            !isOpen ?(
              <CaretDown size={32} className="h-5"/>
            ):(
              <CaretUp size={32} className="h-5"/>
            )
          }
        </button>

        {isOpen && (
          <div className="bg-gray-300 absolute flex flex-col top-16 p-2 w-full text-sm gap-2" >
              {
                categories.map((item,i) => (
                  <div key={i} className="flex w-full h-full justify-between cursor-pointer
                   hover:bg-blue-900  hover:text-white border-l-transparent hover:border-l-yellow-300 border-l-2 ">
                    {item.text}
                  </div>
                ))
              }
          </div>
        )}
    </div>
  )
}

export default Select;