'use client';

import Image from 'next/image';
import { useContext, useMemo, useState } from 'react';

import { ModalItem } from '@/components/Modal/ModalItem';
import { RestaurantContext } from '@/contexts/RestaurantContext';
import { IItem } from '@/services/interfaces';
import { formatPrice } from '@/utils/formatPRice';

const MAX_DESCRIPTION_LENGTH = 60;

export function AccordionItem({ data, isOpen }: { data: IItem; isOpen: boolean; }) {
  const { restaurant } = useContext(RestaurantContext);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const formattedPrice = useMemo(() => {
    return formatPrice(data.price);
  }, []);

  return (
    <>
      {
        isOpen && (<div
          className={`flex flex-row justify-between items-center gap-4`}
          onClick={() => setIsModalOpen(true)}
        >
          <div className='flex flex-col text-left'>
            <strong className='font-bold'>{data.name}</strong>
            {data.description && <span className='font-light'>
              {data.description?.length > MAX_DESCRIPTION_LENGTH ? `${data.description.slice(0, MAX_DESCRIPTION_LENGTH - 1)}...` : data.description}
            </span>}
            <strong className='font-medium'>{formattedPrice}</strong>
          </div>

          {
            data.images && data.images.length > 0 &&
            <div>
              <Image
                className='rounded-lg max-h-24 max-w-40'
                width={2000}
                height={400}
                src={data?.images && data?.images[0]?.image || ''}
                alt={data.name}
              />
            </div>}
        </div>)
      }
      <ModalItem
        item={data}
        bg={restaurant?.webSettings?.navBackgroundColour}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}
