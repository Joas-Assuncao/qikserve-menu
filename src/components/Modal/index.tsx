import { CloseIcon } from '@/public/icons/CloseIcon';
import { ReactNode, useMemo } from 'react';

interface ModalProps {
  isModalOpen: boolean;
  children: ReactNode;
  setIsModalOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  className?: string;
  bg?: string;
}

export function Modal({ isModalOpen, children, setIsModalOpen, bg, className }: ModalProps) {
  const classNameMemo = useMemo(() => {
    if (!isModalOpen) {
      return 'hidden';
    }

    return className + ' ' + 'block absolute w-full h-screen top-0 left-0 bg-black bg-opacity-70 z-10 flex flex-col justify-evenly items-center';
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={classNameMemo}>
      <div className='flex flex-1 flex-col justify-evenly items-center relative w-full h-full'>
        <div
          className="CLOSE-ICON absolute right-4 top-4 lg:right-2 lg:top-2 cursor-pointer"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          <CloseIcon primaryColor={bg} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}