import Image from 'next/image';
import ghana from '@/public/home/gh-map.png';

function ServingAshanti() {
  return (
    <section className="mt-40">
      <div className="flex gap-6">
        <div className="w-1/2 bg-card rounded-xl p-12 flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold leading-tight">
            Serving Ashanti Region and Beyond
          </h2>
          <span className="text-2xl font-bold italic text-primary mt-6">
            Your Products, On Time, Every Time
          </span>
          <p className="text-xl mt-6 leading-relaxed">
            From our modern Asokwa facility, we coordinate daily
            deliveries to businesses across Ghana. Whether you need
            weekly warehouse pick-ups or scheduled van deliveries, our
            flexible distribution model adapts to your business needs,
            ensuring you never run out of the products you or your
            customers depend on.
          </p>
        </div>
        <div className="w-1/2 relative h-[600px] rounded-xl overflow-hidden">
          <Image
            src={ghana}
            alt="Map of Ghana showing regions where NAN operates"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default ServingAshanti;
