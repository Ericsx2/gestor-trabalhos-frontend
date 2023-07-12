'use client';
import { Github, FileText, Search } from 'lucide-react';
import Select from '@/components/Select';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '@/api';
import axios from 'axios';

export default function ProjectSearch() {
  const [search, setSearch] = useState('');
  const [projects, setProjects] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        'http://localhost:3333/project/public/recents'
      );
      setProjects(data);
    };

    getData();
  }, []);

  async function searchProjects() {
    const { data } = await axios(
      `http://localhost:3333/project/public/search?search=${search}`
    );
    console.log(data);
    setProjects(data);
  }

  return (
    <main className="flex flex-col items-center gap-8 p-4 bg-slate-100">
      <div className="flex items-center gap-2 w-1/3 rounded-md">
        <div className="p-2 flex items-center rounded-md bg-white border-transparent flex-1 focus-within:border-blue-500">
          <Search className="text-gray-400" size={20} />
          <input
            type="text"
            id="search"
            placeholder="Pesquisa"
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 mx-2 bg-transparent flex-1"
          />
          <button
            onClick={() => searchProjects()}
            className="p-2 bg-yellow-400 font-medium rounded-md"
          >
            Pesquisa
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-3xl font-medium">Projetos</span>
        </div>
        <div className="flex flex-col gap-4">
          {projects?.map((project, i) => {
            return (
              <Link key={project.title} href={`/projects/${project.id}`}>
                <div className="flex max-w-2xl gap-4">
                  <Image
                    className="w-48 rounded-lg"
                    src="/projectBanner.jpg"
                    width={500}
                    height={200}
                    alt="Banner do projeto"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-lg">
                      {project.title}
                    </span>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
