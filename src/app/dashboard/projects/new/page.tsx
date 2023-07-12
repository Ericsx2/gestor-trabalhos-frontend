'use client';

import DashboardPageTitle from '@/components/DashboardPageTitle';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input';
import FileUpload from '@/components/UploadFile';
import TextArea from '@/components/TextArea';
import Select from '@/components/Select';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import CircularLoader from '@/components/CircularLoader';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  owner: z.string(),
  banner: z.any(),
  registration_teacher: z.string(),
  project_file: z.any(),
});

type ProjectData = z.infer<typeof projectSchema>;

export default function NewRegistration() {
  const [teachers, setTeachers] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProjectData>({
    mode: 'all',
    resolver: zodResolver(projectSchema),
  });
  const router = useRouter();
  const { user, token } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          'http://localhost:3333/user/teachers/names',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTeachers(data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  async function onSubmit(data: ProjectData) {
    setLoading(true);
    try {
      const parsedData = projectSchema.parse(data);
      console.log(parsedData);
      await axios.post(
        'http://localhost:3333/project',
        {
          ...parsedData,
          registration_student: user?.registration,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      toast('Projeto publicado com sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        type: 'success',
        theme: 'light',
        onClose: () => router.push('/dashboard/projects'),
      });
    } catch (e) {
      toast('Erro ao registrar projeto', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        type: 'error',
        theme: 'light',
        onClose: () => router.push('/dashboard/projects'),
      });
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-4">
      <ToastContainer />
      <div className="flex items-center gap-6">
        <button
          className="p-2 rounded-full transition-all hover:bg-slate-200"
          onClick={() => router.back()}
        >
          <ArrowLeft />
        </button>
        <DashboardPageTitle label="Novo Projeto" />
      </div>
      <div className="flex flex-col items-center">
        <form
          className="w-2/3 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input id="title" label="Título" {...register('title')} />
          <TextArea
            id="description"
            label="Descrição"
            onChange={(e) => setValue('description', e.target.value)}
          />
          <Select
            label="Professor"
            options={teachers?.map((item) => {
              return {
                label: `${item.name} ${item.last_name}`,
                value: item.registration,
              };
            })}
            onchange={(value) => setValue('registration_teacher', value)}
          />
          <Input
            id="owner"
            label="Disciplina(ou projeto)"
            {...register('owner')}
          />
          <FileUpload
            label="Capa do Projeto"
            accept="image/*"
            key="projectBanner"
            id="projectBanner"
            onChange={(e) => setValue('banner', e.target.files[0])}
          />
          <FileUpload
            label="Arquivo do projeto"
            accept="application/pdf"
            key="projectFile"
            id="projectFile"
            onChange={(e) => setValue('project_file', e.target.files[0])}
          />
          {loading ? (
            <CircularLoader className="self-end" />
          ) : (
            <button className="p-2 text-white font-medium self-end bg-blue-700 rounded-md">
              Publicar
            </button>
          )}
        </form>
      </div>
    </main>
  );
}
