import { Section } from '@/app/page';
import Image from 'next/image';

interface NavItemsProps {
  sections: Section[];
  id: number;
  bg: string;
}

export function NavItems({ sections, id, bg }: NavItemsProps) {
  return (
    <div className="flex justify-between ">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`min-w-40 flex flex-col items-center text-center p-4 gap-4 ${section.id === id ? 'border-b-4 border-gray-800' : ''}`}
        >
          <div className={`p-1 bg-white rounded-full  ${section.id === id ? 'border-2 border-gray-800' : ''}`}>
            <Image
              className={`rounded-full h-28 w-28 object-cover  ${section.id === id ? 'border border-white' : ''}`}
              width={2000}
              height={400}
              src={section?.images && section?.images[0]?.image || ''}
              alt={section.name}
              style={{ borderColor: bg }}
            />
          </div>

          <h2 className='text-xl font-bold'>{section.name}</h2>
        </div>
      ))}
    </div>
  )
}