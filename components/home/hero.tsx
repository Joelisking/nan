import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

function Hero() {
  return (
    <section className="mt-32">
      <div
        style={{
          backgroundImage: 'url("/home/hero.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="h-[60vh] flex items-center rounded-2xl">
        <div className="px-16 w-4/5 text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Trusted Distribution for Ghanaian Families and Businesses.
          </h1>
          <p className="mt-6 text-2xl leading-relaxed">
            Delivering quality consumer goods to wholesalers,
            retailers, restaurants, hotels, and institutions across
            Ghana.
          </p>
          <Link href={'/divisions'}>
            <Button className="mt-8 text-lg px-6 py-6">
              Explore Our Products <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
