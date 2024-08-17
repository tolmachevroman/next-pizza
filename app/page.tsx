import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container classname="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container classname="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D610A62D78598406363A9A8AD65.avif',
                    products: [{ price: 539 }],
                  },
                  {
                    id: 2,
                    name: 'Мясная с аджикой 🌶🌶',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    products: [{ price: 539 }],
                  },
                  {
                    id: 3,
                    name: 'Мясная с аджикой 🌶🌶',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    products: [{ price: 539 }],
                  },
                  {
                    id: 4,
                    name: 'Мясная с аджикой 🌶🌶',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    products: [{ price: 539 }],
                  },
                  {
                    id: 5,
                    name: 'Мясная с аджикой 🌶🌶',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    products: [{ price: 539 }],
                  },
                  {
                    id: 6,
                    name: 'Мясная с аджикой 🌶🌶',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    products: [{ price: 539 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Завтрак"
                items={[
                  {
                    id: 1,
                    name: 'Омлет с беконом',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
                    products: [{ price: 199 }],
                  },
                  {
                    id: 2,
                    name: 'Омлет с беконом',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
                    products: [{ price: 199 }],
                  },
                  {
                    id: 3,
                    name: 'Омлет с беконом',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
                    products: [{ price: 199 }],
                  },
                  {
                    id: 5,
                    name: 'Омлет с беконом',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
                    products: [{ price: 199 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
