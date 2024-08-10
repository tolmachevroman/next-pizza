import { cn } from '@/lib/utils';

interface Props {
  classname?: string;
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты', 'Соусы'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ classname }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', classname)}>
      {cats.map((cat, index) => (
        <a href="" key={index} className={cn('flex items-center font-bold h-11 rounded-2xl px-5', activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary')}>
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
