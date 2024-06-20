import { IModifierItem } from '@/services/interfaces';
import { useState } from 'react';

interface CounterProps {
  bg?: string;
  canRemove?: boolean;
  itemSelected?: IModifierItem;
  count: number;
  setCount: (value: (value: number) => number) => void;
}

export function Counter({ bg, canRemove = false, itemSelected, count, setCount }: CounterProps) {
  const increment = () => setCount(prevCount => {
    return prevCount + 1;
  });

  const decrement = () => setCount(prevCount => {
    if(prevCount === 0) return prevCount;

    if(prevCount === 1 && canRemove) return prevCount - 1;

    return prevCount - 1;
  });

  const disabled = count === 0 || count === 1 && !canRemove;

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={decrement}
        className="w-8 h-8 text-xl font-bold flex items-center justify-center bg-gray-200 rounded-full text-white disabled:bg-gray-100 disabled:text-gray-800 disabled:cursor-not-allowed"
        style={{...(!disabled ? { background: bg } : {})}}
        disabled={disabled}
      >
        -
      </button>
      <span className="text-lg">{count}</span>
      <button
        onClick={increment}
        className="w-8 h-8 text-xl font-bold flex items-center justify-center rounded-full text-white"
        style={{ background: bg }}
      >
        +
      </button>
    </div>
  );
};