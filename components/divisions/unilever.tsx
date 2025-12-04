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
      <section className="flex gap-8 mt-24 mb-24">
        <div className="w-1/2 rounded-3xl overflow-hidden">
          <Image
            src={unilever}
            alt="Unilever Distribution Division Products"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 bg-card rounded-3xl p-10 flex flex-col gap-6">
          <div className="inline-flex">
            <span className="px-4 py-2 text-sm text-white bg-primary rounded-full font-medium">
              #1 Distributor in Ashanti
            </span>
          </div>

          <h3 className="text-5xl font-extrabold leading-tight">
            Unilever Distribution Division
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            As Ghana's leading Unilever distributor, we bring
            world-class brands in personal care, home care, and food
            products to markets across the nation.
          </p>

          <div className="mt-2">
            <span className="font-bold text-xl mb-3 block">
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
            <span className="font-bold text-xl mb-3 block">
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
            <span className="font-bold text-xl mb-3 block">
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
