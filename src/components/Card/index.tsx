import Image from 'next/image';
import Link from 'next/link';

interface CardData {
  id: string;
  title: string;
  description: string;
  created_at: string;
}
interface CardProps {
  data: CardData;
}

export default function Card({
  data: { created_at, description, id, title },
}: CardProps) {
  const date = new Date(created_at);
  return (
    <div className="max-w-xs min-h-[400px] flex flex-col gap-4 flex-none">
      <Link href={`/projects/${id}`} className="h-full">
        <Image
          className="rounded-lg w-full"
          width={200}
          height={200}
          alt="Image do cartão do projeto"
          src="/projectBanner.jpg"
        />
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-3xl">{title}</span>
          <p className="text-justify">{description}</p>
        </div>
        <span className="text-xs text-gray-500 underline">
          {date.toLocaleDateString('pt-BR')}
        </span>
      </Link>
    </div>
  );
}
