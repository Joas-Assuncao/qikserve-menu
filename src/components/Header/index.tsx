'use client';
import { useMemo, useState } from 'react';
import { BurguerIcon } from '../../public/icons/BurguerIcon';
import { LinkList } from './components/LinkList';
import { ModalMenu } from './components/ModalMenu';

interface HeaderProps {
  bg: string;
}

export function Header({ bg }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const className = useMemo(() => {
    if (!isNavOpen) {
      return 'hidden';
    }

    return 'block absolute w-full h-screen top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center';
  }, [isNavOpen]);

  return (
    <header className={`flex items-center justify-center relative px-2`} style={{ background: bg }}>
      <h1 className="text-2xl font-bold text-gray-200 lg:hidden py-3">Menu</h1>
      <nav className='h-full'>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON absolute right-2 top-3"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <BurguerIcon />
          </div>

          <ModalMenu className={className} bg={bg} setIsNavOpen={setIsNavOpen} />
        </section>
      </nav>
      <LinkList />
    </header>
  )
}