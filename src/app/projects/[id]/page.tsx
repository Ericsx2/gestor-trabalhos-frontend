'use client';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Project() {
  const [project, setProject] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `http://localhost:3333/project/public/show/${id}`
      );
      setProject(data);
    };
    getData();
  }, [id]);

  return (
    <main className="flex bg-blue-50 justify-center h-full">
      <div className="p-3 w-3/5">
        <Image
          className="w-full rounded-lg mb-4"
          src="/projectBanner.jpg"
          width={800}
          height={400}
          alt="Imagem do projeto"
        />
        <div className="mb-4 flex flex-col gap-4 font-medium">
          <h1 className="mb-4 text-3xl font-bold">{project?.title}</h1>
          <p className="mb-4 text-justify">{project?.description}</p>
          <p>Projeto desenvolvido para a disciplina: {project?.owner}</p>
          <div className="flex gap-2 flex-col flex-wrap">
            <span className="flex gap-2">
              Aluno: <p className="underline">{project?.student}</p>
            </span>
            <span className="flex gap-2">
              Professor: <p className="underline">{project?.teacher}</p>
            </span>
          </div>
          <span className="underline text-gray-500">
            {new Date(project?.created_at).toLocaleDateString('pt-BR')}
          </span>
        </div>
        <div>
          <ul className="flex gap-2 flex-wrap"></ul>
        </div>
      </div>
    </main>
  );
}
