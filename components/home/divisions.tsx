import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function Divisions() {
  return (
    <section className="mt-40">
      <h2 className="text-5xl font-bold w-1/2 leading-tight">
        Two Divisions, One Commitment to Excellence
      </h2>

      <div className="mt-8 flex gap-8">
        <div className="w-1/3">
          <p className="text-xl leading-relaxed">
            At NAN Company Limited, we serve Ghana&apos;s diverse
            market needs through two specialized divisions. From
            essential food staples that stock hotel kitchens and
            retail shelves, to globally trusted Unilever brands found
            in homes across the nation, we deliver it all with the
            same dedication to reliability, quality, and service that
            has defined us for three decades.
          </p>
        </div>

        <div className="w-2/3 flex gap-6">
          <Link
            href="/divisions#tradition"
            style={{
              backgroundImage: 'url("/home/tradition.png")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="flex-1 h-[450px] relative rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex justify-end">
                <div className="bg-card rounded-full p-3 hover:bg-white transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div>
                <span className="text-4xl font-bold text-white leading-tight">
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
            className="flex-1 h-[450px] relative rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex justify-end">
                <div className="bg-card rounded-full p-3 hover:bg-white transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div>
                <span className="text-4xl font-bold text-white leading-tight">
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
