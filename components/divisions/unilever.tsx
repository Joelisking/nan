import Image from 'next/image';
import Container from '../shared/container';
import unilever from '@/public/divisions/unilever.png';

function Unilever() {
  const personalCare = [
    'Pepsodent',
    'Dove',
    'Lux',
    'Vaseline',
    'Close Up',
  ];
  const homeCare = ['OMO', 'Sunlight', 'Vim', 'Domestos'];
  const foodBrands = ['Royco', 'Lipton', 'Knorr', 'Blue Band'];

  return (
    <Container>
      <section
        className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-16 md:mt-20 lg:mt-24 mb-16 md:mb-20 lg:mb-24 scroll-mt-24"
        id="unilever">
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden relative h-[300px] md:h-[400px] lg:h-auto order-2 lg:order-1">
          <Image
            src={unilever}
            alt="Unilever Distribution Division Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        <div className="w-full lg:w-1/2 bg-card rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 order-1 lg:order-2">
          <div className="inline-flex">
            <span className="px-4 py-2 text-sm text-white bg-primary rounded-full font-medium">
              #1 Distributor in Ashanti
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Unilever Distribution Division
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            As Ghana&apos;s leading Unilever distributor, we bring
            world-class brands in personal care, home care, and food
            products to markets across the nation.
          </p>

          <div className="mt-1 md:mt-2">
            <span className="font-bold text-lg md:text-xl mb-2 md:mb-3 block">
              Personal Care
            </span>
            <div className="flex flex-wrap gap-2">
              {personalCare.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-bold text-lg md:text-xl mb-2 md:mb-3 block">
              Home Care
            </span>
            <div className="flex flex-wrap gap-2">
              {homeCare.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-bold text-lg md:text-xl mb-2 md:mb-3 block">
              Food Brands
            </span>
            <div className="flex flex-wrap gap-2">
              {foodBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Unilever;
