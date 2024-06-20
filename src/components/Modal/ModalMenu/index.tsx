import { Modal } from '..';

interface ModalMenuProps {
  bg: string;
  isModalOpen: boolean;
  setIsNavOpen: (value: boolean | ((value: boolean) => boolean)) => void;
}

export function ModalMenu({ bg, isModalOpen, setIsNavOpen }: ModalMenuProps) {
  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsNavOpen}
      bg={bg}
      className='bg-white bg-opacity-100'
    >
      <ul className="flex flex-col items-center justify-between min-h-[250px]">
        <li className="border-b border-gray-800 my-8 uppercase">
          <a className='text-3xl'>Menu</a>
        </li>
        <li className="border-b border-gray-800 my-8 uppercase">
          <a className='text-3xl'>Entrar</a>
        </li>
        <li className="border-b border-gray-800 my-8 uppercase">
          <a className='text-3xl'>Contato</a>
        </li>
      </ul>
    </Modal>
  )
}