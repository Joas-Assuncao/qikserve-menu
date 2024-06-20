import { ReactNode } from 'react';

interface ButtonProps {
  bg: string;
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ children, bg, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`text-white font-bold py-2 px-6 rounded-2xl max-w-[70%] w-full hover:opacity-70`} style={{ background: bg,  }}>
      {children}
    </button>
  );
}