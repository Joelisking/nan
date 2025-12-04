import Container from '../shared/container';

function AboutStats() {
  return (
    <Container>
      <section className="flex justify-between items-center mt-8 gap-8">
        <div className="flex flex-col items-center flex-1">
          <span className="text-6xl font-light text-primary mb-2">
            30+
          </span>
          <span className="text-sm text-gray-600">
            Years of Experience
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-6xl font-light text-primary mb-2">
            1000+
          </span>
          <span className="text-sm text-gray-600">
            Business Partners
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-6xl font-light text-primary mb-2">
            100+
          </span>
          <span className="text-sm text-gray-600">Team Members</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-6xl font-light text-primary mb-2">
            #1
          </span>
          <span className="text-sm text-gray-600">
            Unilever Distributor
          </span>
        </div>
      </section>
    </Container>
  );
}

export default AboutStats;
