import { cn } from '@/lib/utils';
import { Categories, Container, SortPopup } from '.';

interface Props {
  classname?: string;
}

export const TopBar: React.FC<Props> = ({ classname }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', classname)}>
      <Container classname="flex justify-between items-center">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
