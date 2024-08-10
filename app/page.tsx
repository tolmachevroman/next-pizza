import { Container, Filters, ProductCard, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container classname="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container classname="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard id={0} name="Мясная с аджикой 🌶🌶" price={539} imageUrl="https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
