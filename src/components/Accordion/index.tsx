'use client';

import { LegacyRef, useState } from 'react';
import { AccordionItem } from './components/AccordionItem';
import { Item } from '@/app/page';
import { ArrowAccordion } from '@/public/icons/ArrowAccordion';

interface AccordionProps {
  data: Item[];
  title: string;
  ref: LegacyRef<HTMLDivElement>;
  setAccordionId: (value: number | ((value: number) => number)) => void;
  id: number;
}

export function Accordion({ data, id, title, ref, setAccordionId }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  function handleClick() {
    setAccordionOpen(!accordionOpen);

    setAccordionId((prevId: number) => prevId === id ? 0 : id);
  }

  return (
    <div ref={ref} className='p-4'>
      <button onClick={handleClick} className='flex justify-between w-full py-4 outline-none'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <ArrowAccordion primaryColor='#4F372F' accordionOpen={accordionOpen} />
      </button>
      <div className='flex flex-col gap-4'>
        {data.map((item) => (
          <AccordionItem key={item.id} data={item} isOpen={accordionOpen} />
        ))}
      </div>
    </div>
  );
}
