import Image from 'next/image';

import { IItem, IModifierItem } from '@/services/interfaces';

import { Modal } from '..';
import { useContext, useState } from 'react';
import { Button } from '@/components/Button';
import { RestaurantContext } from '@/contexts/RestaurantContext';
import { formatPrice } from '@/utils/formatPrice';
import { Counter } from '@/components/Count';

interface ModalItemProps {
  isModalOpen: boolean;
  bg?: string;
  setIsModalOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  item: IItem;
}

export function ModalItem({ isModalOpen, setIsModalOpen, bg, item }: ModalItemProps) {
  const [count, setCount] = useState(1);

  const { restaurant, setOrders } = useContext(RestaurantContext);
  const [itemSelected, setItemSelected] = useState<IModifierItem>();

  function handleChangeOption(e: React.ChangeEvent<HTMLInputElement>) {
    const modifiers = item.modifiers?.find(modifier => {
      return modifier.items?.find(item => item.id.toString() === e.target.value);
    });

    const modifierItem = modifiers?.items?.find(item => item.id.toString() === e.target.value);

    if (modifierItem) {
      setItemSelected(modifierItem);
    }
  }

  function setOrder() {
    setOrders((prev) => {
      return {
        ...prev,
        [item.id]: {
          ...itemSelected,
        }
      }
    });

    setIsModalOpen((prev) => !prev);
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      bg={bg}
    >
      <div className='max-lg:w-screen max-lg:h-screen bg-white flex flex-col gap-4'>
        <Image
          className='w-full object-cover'
          width={2000}
          height={400}
          src={item?.images && item?.images[0]?.image || ''}
          alt={item.name}
        />

        <div className='px-4'>
          <h3 className='text-2xl font-bold'>{item.name}</h3>
          <p className='text-gray-600'>{item.description}</p>
        </div>

        {
          item.modifiers && item.modifiers.map((modifier, index) => (
            <div key={modifier.id} className='px-4'>
              <h4 className='text-lg font-bold pb-4'>{modifier.name}</h4>
              <div className='flex flex-col gap-4'>
                {
                  modifier.items && modifier.items.map((option, indexOption) => (
                    <div key={option.id} className='flex justify-between'>
                      <div className='flex flex-col justify-start'>
                        <strong>
                          {option.name}
                        </strong>
                        <span>
                          {formatPrice(option.price)}
                        </span>
                      </div>

                      <input
                        type="radio"
                        name={modifier.name}
                        value={option.id}
                        checked={itemSelected && itemSelected?.id.toString() === option.id.toString()}
                        onChange={handleChangeOption}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }

        <div className='flex flex-col items-center w-full gap-2 pb-4'>
          <Counter
            bg={bg}
            canRemove={false}
            count={count}
            setCount={setCount}
            itemSelected={itemSelected}
          />
          <Button onClick={setOrder} bg={restaurant?.webSettings?.navBackgroundColour}>
            Add to Order - {formatPrice(Number(itemSelected?.price || 0))}
          </Button>
        </div>
      </div>
    </Modal>
  )
}