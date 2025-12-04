import Container from '../shared/container';

function SetsApart() {
  return (
    <Container>
      <section>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-32">
          What Sets Us Apart
        </h2>
        <div className="bg-card p-6 mt-4 rounded-2xl">
          <p className="text-xl">
            At NAN Company Limited, what sets us apart is more than
            scale — it is the trusted relationships we have built over
            the years with both our major partners and our clients. We
            are the bridge between global brands and Ghanaian
            families, ensuring reliable supply, competitive pricing,
            and genuine care in every transaction.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-[#1515151c] rounded-2xl">
              <span className="text-primary text-xl font-medium">
                State-of-the-Art Infrastructure
              </span>
              <p>
                Backed by state-of-the-art warehouses and efficient
                logistics, guaranteeing product availability and
                timely delivery.
              </p>
            </div>
            <div className="p-6 bg-[#1515151c] rounded-2xl">
              <span className="text-primary text-xl font-medium">
                Comprehensive Coverage
              </span>
              <p>
                A dual-division structure that covers both staple
                foods and global FMCG brands, offering unmatched
                variety under one roof.
              </p>
            </div>
            <div className="p-6 bg-[#1515151c] rounded-2xl">
              <span className="text-primary text-xl font-medium">
                Flexible Distribution Model
              </span>
              <p>
                A customer-first distribution model, giving clients
                flexibility through van sales, direct delivery, or
                warehouse pick-up.
              </p>
            </div>
            <div className="p-6 bg-[#1515151c] rounded-2xl">
              <span className="text-primary text-xl font-medium">
                Legacy of Trust
              </span>
              <p>
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
