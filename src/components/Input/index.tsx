import { SearchIcon } from '@/public/icons/SearchIcon';

interface InputProps {
  placeholder: string;
}

export function Input({
  placeholder,
}: InputProps) {
  

  return (
    <div className='relative'>
      <span className='absolute left-3 top-8'>
        <SearchIcon color='#8A94A4' />
      </span>
      <input
        className='w-full h-12 border border-gray-600 rounded-md px-4 py-2 my-4 pl-10'
        placeholder={placeholder}
      />
    </div>
  )
}