import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

function Hero() {
  return (
    <section className="mt-24 md:mt-32">
      <div
        style={{
          backgroundImage: 'url("/home/hero.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="h-[50vh] md:h-[60vh] flex items-center rounded-2xl">
        <div className="px-6 md:px-12 lg:px-16 w-full md:w-4/5 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Trusted Distribution for Ghanaian Families and Businesses.
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed">
            Delivering quality consumer goods to wholesalers,
            retailers, restaurants, hotels, and institutions across
            Ghana.
          </p>
          <Link href={'/divisions'}>
            <Button className="mt-6 md:mt-8 text-base md:text-lg px-5 py-5 md:px-6 md:py-6">
              Explore Our Products <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
