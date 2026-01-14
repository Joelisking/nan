import { Separator } from '../ui/separator';

function Stats() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch mt-6 md:mt-8 gap-4 md:gap-6">
      <div className="bg-card flex flex-col p-6 md:p-8 lg:p-10 flex-1 rounded-xl">
        <span className="text-5xl md:text-6xl lg:text-7xl font-light">#1</span>
        <Separator className="mt-4 md:mt-6 lg:mt-8 mb-3 md:mb-4 bg-primary h-1" />
        <p className="text-lg md:text-xl font-medium leading-snug">
          Unilever Distributor in Ashanti & Beyond
        </p>
      </div>

      <div className="bg-secondary flex flex-col p-6 md:p-8 lg:p-10 text-white flex-1 rounded-xl">
        <span className="text-5xl md:text-6xl lg:text-7xl font-light">2</span>
        <Separator className="mt-4 md:mt-6 lg:mt-8 mb-3 md:mb-4 bg-white h-1" />
        <p className="text-lg md:text-xl font-medium leading-snug">
          Strong Distribution Divisions
        </p>
      </div>

      <div className="bg-primary flex flex-col p-6 md:p-8 lg:p-10 text-white flex-1 rounded-xl">
        <span className="text-5xl md:text-6xl lg:text-7xl font-light">30+</span>
        <Separator className="mt-4 md:mt-6 lg:mt-8 mb-3 md:mb-4 bg-white h-1" />
        <p className="text-lg md:text-xl font-medium leading-snug">
          Years of Trusted Supplier & Customer Relationships
        </p>
      </div>
    </section>
  );
}

export default Stats;
