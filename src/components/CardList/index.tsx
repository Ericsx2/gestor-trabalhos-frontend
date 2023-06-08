import CardComponent from "../Card";

interface CardListProps {
  cards: any[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <div className="w-full h-full bg-white overflow-scroll overflow-x-auto p-2">
      <div className="text-2xl p-10">
        <h1>Projetos</h1>
      </div>
      <div className="flex flex-col items-center gap-6">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}
