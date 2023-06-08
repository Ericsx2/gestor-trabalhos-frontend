"use client";
import CardComponent from "@/components/Card";
import CardList from "@/components/CardList";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { Search } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register } = useForm<{ name: string }>();

  return (
    <main>
      <Input
        placeholder="Pesquisar ..."
        name="search"
        icon={<Search />}
        register={register}
      />
    </main>
  );
}
