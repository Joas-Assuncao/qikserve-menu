import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LinkList() {
  const pathname = usePathname();

  return (
    <ul className="DESKTOP-MENU hidden lg:flex">
      <li className={`min-w-40 text-center py-3 ${pathname === '/' ? 'border-b-4 border-gray-200' : ''}`}>
        <Link href='/' className='uppercase text-gray-200'>Menu</Link>
      </li>
      <li className={`min-w-40 text-center py-3 ${pathname === '/login' ? 'border-b-4 border-gray-200' : ''}`}>
        <Link href='/login' className='uppercase text-gray-200'>Entrar</Link>
      </li>
      <li className={`min-w-40 text-center py-3 ${pathname === '/contact' ? 'border-b-4 border-gray-200' : ''}`}>
        <Link href='/contact' className='uppercase text-gray-200'>Contato</Link>
      </li>
    </ul>
  )
}