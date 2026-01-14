import Container from '../shared/container';

function AboutStats() {
  return (
    <Container>
      <section className="grid grid-cols-2 md:grid-cols-4 justify-between items-center mt-6 md:mt-8 gap-6 md:gap-8">
        <div className="flex flex-col items-center flex-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-2">
            30+
          </span>
          <span className="text-xs md:text-sm text-gray-600 text-center">
            Years of Experience
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-2">
            1000+
          </span>
          <span className="text-xs md:text-sm text-gray-600 text-center">
            Business Partners
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-2">
            100+
          </span>
          <span className="text-xs md:text-sm text-gray-600 text-center">Team Members</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-2">
            #1
          </span>
          <span className="text-xs md:text-sm text-gray-600 text-center">
            Unilever Distributor
          </span>
        </div>
      </section>
    </Container>
  );
}

export default AboutStats;
