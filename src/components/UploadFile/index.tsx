"use client";

import { useState, useCallback, useRef } from "react";
import styles from "./styles.module.css";

export default function FileUpload() {
  const [fileSrc, setFileSrc] = useState<string | ArrayBuffer | null>(null);
  const [fileName, setFileName] = useState("");
  const [dropText, setDropText] = useState(
    "Arraste e solte o PDF ou clique aqui"
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const result = e.target?.result ?? null;
          setFileSrc(result);
          setFileName(file.name);
          setDropText(file.name);
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const removeUpload = useCallback(() => {
    const fileInput = fileInputRef.current;
    if (fileInput) {
      fileInput.value = "";
    }

    setFileSrc(null);
    setFileName("");
    setDropText("Arraste e solte o PDF ou clique aqui");
  }, []);

  const handleFileSubmit = useCallback(() => {
    if (fileSrc) {
      console.log("Arquivo enviado:", fileSrc);
    }
  }, [fileSrc]);

  return (
    <div className="w-[100vw] h-[100vh] bg-neutral-800 flex items-center justify-center">
      <div className="rounded-lg w-[30vw] h-[40vh] bg-white overflow-hidden flex justify-center items-center p-8">
        <div className="bg-white w-[90vw] m-auto p-1">
          <div className="m-3 w-[25vw] h-[20vh] border-dashed border-4 border-[#283A73] hover:bg-[#283A73] hover:border-[#fff]">
            <input
              ref={fileInputRef}
              className="absolute m-0 p-0 outline-0 opacity-0 cursor-pointer"
              type="file"
              onChange={handleFileChange}
              accept="application/pdf"
            />
            <div className="">
              <h3 className="flex items-center justify-center font-thin uppercase text-[#4561BD]">{dropText}</h3>
            </div>
          </div>
          <div className={styles.fileUploadContent}>
            <div>
              <button
                type="button"
                onClick={removeUpload}
                className={styles.removePdfButton}
              >
                Remover
              </button>
              <button
                type="button"
                onClick={handleFileSubmit}
                className={styles.submitPdfButton}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
