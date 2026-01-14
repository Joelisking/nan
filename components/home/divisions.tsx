import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function Divisions() {
  return (
    <section className="mt-20 md:mt-32 lg:mt-40">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full md:w-3/4 lg:w-1/2 leading-tight">
        Two Divisions, One Commitment to Excellence
      </h2>

      <div className="mt-6 md:mt-8 flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="w-full lg:w-1/3">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            At NAN Company Limited, we serve Ghana&apos;s diverse
            market needs through two specialized divisions. From
            essential food staples that stock hotel kitchens and
            retail shelves, to globally trusted Unilever brands found
            in homes across the nation, we deliver it all with the
            same dedication to reliability, quality, and service that
            has defined us for three decades.
          </p>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-4 md:gap-6">
          <Link
            href="/divisions#tradition"
            style={{
              backgroundImage: 'url("/home/tradition.png")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="flex-1 h-[300px] md:h-[400px] lg:h-[450px] relative rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
              <div className="flex justify-end">
                <div className="bg-card rounded-full p-2 md:p-3 hover:bg-white transition-colors">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
              <div>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  NAN Tradition Division
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/divisions#unilever"
            style={{
              backgroundImage: 'url("/home/unilever.png")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="flex-1 h-[300px] md:h-[400px] lg:h-[450px] relative rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
              <div className="flex justify-end">
                <div className="bg-card rounded-full p-2 md:p-3 hover:bg-white transition-colors">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
              <div>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Unilever Distribution Division
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Divisions;
