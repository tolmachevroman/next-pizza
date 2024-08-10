import { cn } from '@/lib/utils';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '.';
import { Input, RangeSlider } from '../ui';

interface Props {
  classname?: string;
}

export const Filters: React.FC<Props> = ({ classname }) => {
  return (
    <div className={cn('', classname)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        items={[
          { text: 'Мясо', value: 'meat' },
          { text: 'Овощи', value: 'vegetables' },
          { text: 'Грибы', value: 'mushrooms' },
          { text: 'Сыр', value: 'cheese' },
          { text: 'Морепродукты', value: 'seafood' },
          { text: 'Фрукты', value: 'fruits' },
          { text: 'Зелень', value: 'greens' },
          { text: 'Соусы', value: 'sauces' },
        ]}
        defaultItems={[
          { text: 'Мясо', value: 'meat' },
          { text: 'Овощи', value: 'vegetables' },
          { text: 'Грибы', value: 'mushrooms' },
          { text: 'Сыр', value: 'cheese' },
          { text: 'Морепродукты', value: 'seafood' },
          { text: 'Фрукты', value: 'fruits' },
          { text: 'Зелень', value: 'greens' },
          { text: 'Соусы', value: 'sauces' },
        ]}
        limit={6}
        classname="mt-5"
      />
    </div>
  );
};
