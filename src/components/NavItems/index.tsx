
import { ISection } from '@/services/interfaces';
import Image from 'next/image';

interface NavItemsProps {
  sections: ISection[];
  id: number;
  bg: string;
}

export function NavItems({ sections, id, bg }: NavItemsProps) {
  return (
    <div className="flex justify-between max-w-96">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`flex flex-col items-center text-center p-4 gap-4 ${section.id === id ? 'border-b-4 border-gray-800' : ''}`}
        >
          <div className={`p-1 bg-white rounded-full  ${section.id === id ? 'border-2 border-gray-800' : ''}`}>
            <Image
              className={`max-w-none rounded-full h-28 w-28 max-sm:h-20 max-sm:w-20 max-lg:w-24 max-lg:h-24 object-cover ${section.id === id ? 'border border-white' : ''}`}
              width={1000}
              height={1000}
              src={section?.images && section?.images[0]?.image || ''}
              alt={section.name}
              style={{ borderColor: bg }}
            />
          </div>

          <h2 className='text-xl max-sm:text-lg font-bold'>{section.name}</h2>
        </div>
      ))}
    </div>
  )
}