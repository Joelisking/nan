import Container from '../shared/container';

function SetsApart() {
  return (
    <Container>
      <section>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-20 md:mt-28 lg:mt-32">
          What Sets Us Apart
        </h2>
        <div className="bg-card p-4 md:p-6 mt-4 rounded-2xl">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            At NAN Company Limited, what sets us apart is more than
            scale — it is the trusted relationships we have built over
            the years with both our major partners and our clients. We
            are the bridge between global brands and Ghanaian
            families, ensuring reliable supply, competitive pricing,
            and genuine care in every transaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="p-4 md:p-6 bg-[#1515151c] rounded-2xl">
              <span className="text-primary text-lg md:text-xl font-medium block mb-2">
                State-of-the-Art Infrastructure
              </span>
              <p className="text-sm md:text-base">
                Backed by state-of-the-art warehouses and efficient
                logistics, guaranteeing product availability and
                timely delivery.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-[#1515151c] rounded-2xl">
              <span className="text-primary text-lg md:text-xl font-medium block mb-2">
                Comprehensive Coverage
              </span>
              <p className="text-sm md:text-base">
                A dual-division structure that covers both staple
                foods and global FMCG brands, offering unmatched
                variety under one roof.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-[#1515151c] rounded-2xl">
              <span className="text-primary text-lg md:text-xl font-medium block mb-2">
                Flexible Distribution Model
              </span>
              <p className="text-sm md:text-base">
                A customer-first distribution model, giving clients
                flexibility through van sales, direct delivery, or
                warehouse pick-up.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-[#1515151c] rounded-2xl">
              <span className="text-primary text-lg md:text-xl font-medium block mb-2">
                Legacy of Trust
              </span>
              <p className="text-sm md:text-base">
                A legacy of trust and excellence, built over years of
                reliable partnerships with wholesalers, retailers, and
                institutions nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default SetsApart;
