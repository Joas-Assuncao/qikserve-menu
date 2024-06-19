interface ButtonProps {
  bg: string;
  children: string;
}

export function Button({ children, bg }: ButtonProps) {
  return (
    <button className={`text-white font-bold py-2 px-6 rounded hover:opacity-70`} style={{ background: bg,  }}>
      {children}
    </button>
  );
}