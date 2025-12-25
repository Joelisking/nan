import { Separator } from '../ui/separator';

function Stats() {
  return (
    <section className="flex justify-between items-stretch mt-8 gap-6">
      <div className="bg-card flex flex-col p-10 flex-1 rounded-xl">
        <span className="text-7xl font-light">#1</span>
        <Separator className="mt-8 mb-4 bg-primary h-1" />
        <p className="text-xl font-medium leading-snug">
          Unilever Distributor in Ashanti & Beyond
        </p>
      </div>

      <div className="bg-secondary flex flex-col p-10 text-white flex-1 rounded-xl">
        <span className="text-7xl font-light">2</span>
        <Separator className="mt-8 mb-4 bg-white h-1" />
        <p className="text-xl font-medium leading-snug">
          Strong Distribution Divisions
        </p>
      </div>

      <div className="bg-primary flex flex-col p-10 text-white flex-1 rounded-xl">
        <span className="text-7xl font-light">30+</span>
        <Separator className="mt-8 mb-4 bg-white h-1" />
        <p className="text-xl font-medium leading-snug">
          Years of Trusted Supplier & Customer Relationships
        </p>
      </div>
    </section>
  );
}

export default Stats;
