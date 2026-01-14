import Container from '../shared/container';

function CompleteCoverage() {
  const benefits = [
    {
      title: 'Specialized Expertise',
      description:
        'Each division focuses on specific product categories, ensuring deep knowledge and optimal service delivery',
    },
    {
      title: 'Complete Solutions',
      description:
        'From food staples to personal care, we offer a comprehensive product range for all your business needs.',
    },
    {
      title: 'Single Partner',
      description:
        'One trusted distributor for multiple product lines, simplifying your supply chain management.',
    },
  ];

  return (
    <Container>
      <section className="mt-20 md:mt-28 lg:mt-32">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Complete Coverage
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our two-division structure ensures specialized expertise
            while maintaining consistent service quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const colorClasses = [
              'bg-primary text-white',
              'bg-secondary text-white',
              'bg-card',
            ];

            return (
              <div
                key={index}
                className={`${colorClasses[index]} rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10`}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}

export default CompleteCoverage;
