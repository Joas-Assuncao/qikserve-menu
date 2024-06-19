import { CloseIcon } from '@/public/icons/CloseIcon';

interface ModalMenuProps {
  bg: string;
  className: string;
  setIsNavOpen: (value: boolean) => void;
}

export function ModalMenu({ bg, className, setIsNavOpen }: ModalMenuProps) {
  return (
    <div className={className}>
      <div className='flex flex-1 flex-col justify-evenly items-center relative w-full h-full'>
        <div
          className="absolute right-2 top-4"
          onClick={() => setIsNavOpen(false)}
        >
          <CloseIcon primaryColor={bg} />
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 my-8 uppercase">
            <a>Menu</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a>Entrar</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a>Contato</a>
          </li>
        </ul>
      </div>
    </div>
  )
}