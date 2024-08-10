import { cn } from '@/lib/utils';

interface Props {
  classname?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ classname, children }) => {
  return <div className={cn('mx-auto max-w-[1280px]', classname)}>{children}</div>;
};
