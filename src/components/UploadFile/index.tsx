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
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.fileUpload}>
          <div className={styles.fileUploadWrap}>
            <input
              ref={fileInputRef}
              className={styles.fileUploadInput}
              type="file"
              onChange={handleFileChange}
              accept="application/pdf"
            />
            <div className={styles.dragText}>
              <h3>{dropText}</h3>
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
