import Image from 'next/image';

import { Modal } from '..';
import { IItem } from '@/services/interfaces';

interface ModalItemProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  item: IItem;
}

export function ModalItem({ isModalOpen, setIsModalOpen, item }: ModalItemProps) {
  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >
      <Image
        className='w-full object-cover'
        width={2000}
        height={400}
        src={item?.images && item?.images[0]?.image || ''}
        alt={item.name}
      />
    </Modal>
  )
}