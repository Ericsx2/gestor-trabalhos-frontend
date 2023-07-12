'use client';
import Link from 'next/link';
import Card from '../Card';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardListProps {
  listTitle: string;
  cards: any[];
}

export default function CardList({ cards, listTitle }: CardListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  function next() {
    if (listRef.current) {
      listRef.current.scrollLeft += listRef.current.scrollLeft / 2;
    }
  }

  function prev() {
    if (listRef.current) {
      listRef.current.scrollLeft -= listRef.current.scrollLeft / 2;
    }
  }

  return (
    <div className="flex flex-col w-full p-8 gap-4">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{listTitle}</span>
        <span className="underline text-blue-700">
          <Link href="/projects">Ver Todos</Link>
        </span>
      </div>
      <section>
        <div
          className="flex items-center gap-4 scroll-smooth overflow-hidden relative"
          ref={listRef}
        >
          {cards.map((card, key) => {
            return <Card key={key} data={card} />;
          })}
        </div>
      </section>
    </div>
  );
}
