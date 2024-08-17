'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  classname?: string;
}

const cats = [
  { id: 1, name: 'Завтрак' },
  { id: 2, name: 'Пиццы' },
  { id: 3, name: 'Комбо' },
  { id: 4, name: 'Закуски' },
  { id: 5, name: 'Коктейли' },
  { id: 6, name: 'Кофе' },
  { id: 7, name: 'Напитки' },
  { id: 8, name: 'Десерты' },
  { id: 9, name: 'Соусы' },
];

export const Categories: React.FC<Props> = ({ classname }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', classname)}>
      {cats.map(({ name, id }, index) => (
        <a href={`/#${name}`} key={index} className={cn('flex items-center font-bold h-11 rounded-2xl px-5', activeCategoryId === id && 'bg-white shadow-md shadow-gray-200 text-primary')}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
