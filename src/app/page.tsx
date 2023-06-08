import CardList from "@/components/CardList";
import Select from "@/components/Select";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-300 grid place-items-center w-full h-screen overflow-hidden">
      <div className="w-4/5 h-4/6 bg-white overflow-hidden">
        <CardList cards={[]} />
      </div>
    </main>
  );
}
