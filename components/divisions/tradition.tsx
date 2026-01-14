import Image from 'next/image';
import { Icon } from '../ui/icon';
import tradition from '@/public/divisions/tradition.png';
import Container from '../shared/container';

function Tradition() {
  return (
    <Container>
      <section
        className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-16 md:mt-20 lg:mt-24 scroll-mt-24"
        id="tradition">
        <div className="w-full lg:w-1/2 bg-card rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6">
          <div className="inline-flex">
            <div className="bg-[#EFF6FF] p-3 rounded-xl">
              <Icon name="Box" className="text-primary w-6 h-6" />
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            NAN Tradition Division
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Specializing in essential food staples and everyday
            consumer goods that form the foundation of Ghanaian
            households and commercial kitchens.
          </p>

          <div className="mt-1 md:mt-2">
            <span className="font-bold text-lg md:text-xl mb-2 md:mb-3 block">
              Product Categories
            </span>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              <div className="flex items-center gap-2">
                <Icon
                  name="CircleCheckBig"
                  size={20}
                  className="text-secondary"
                />
                <span className="text-gray-700">
                  Premium rice varieties
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="CircleCheckBig"
                  size={20}
                  className="text-secondary"
                />
                <span className="text-gray-700">Cooking oils</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="CircleCheckBig"
                  size={20}
                  className="text-secondary"
                />
                <span className="text-gray-700">Tomato paste</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="CircleCheckBig"
                  size={20}
                  className="text-secondary"
                />
                <span className="text-gray-700">
                  Sugar & sweeteners
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="CircleCheckBig"
                  size={20}
                  className="text-secondary"
                />
                <span className="text-gray-700">Canned goods</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="CircleCheckBig"
                  size={20}
                  className="text-secondary"
                />
                <span className="text-gray-700">Food staples</span>
              </div>
            </div>
          </div>

          <div className="mt-1 md:mt-2">
            <span className="font-bold text-lg md:text-xl mb-2 md:mb-3 block">
              We Serve
            </span>
            <ul className="space-y-1 text-sm md:text-base text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Wholesalers & Retailers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Restaurants & Hotels</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Institutional Kitchens</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Corporate Cafeterias</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden relative h-[300px] md:h-[400px] lg:h-auto">
          <Image
            src={tradition}
            alt="NAN Tradition Division Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
        </div>
      </section>
    </Container>
  );
}

export default Tradition;
