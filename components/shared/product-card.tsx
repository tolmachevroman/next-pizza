import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  classname?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, classname }) => {
  return (
    <div className={cn('', classname)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image width={215} height={215} className="" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">Цыпленок, томаты, сыр моцарелла, соус песто, соус альфредо, соус барбекю, зелень</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} &#8381;</b>
          </span>

          <Button className="text-base font-bold" variant="secondary">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
