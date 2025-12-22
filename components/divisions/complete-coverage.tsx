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
      <section className="mt-32">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Complete Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our two-division structure ensures specialized expertise
            while maintaining consistent service quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const colorClasses = [
              'bg-primary text-white',
              'bg-secondary text-white',
              'bg-card',
            ];

            return (
              <div
                key={index}
                className={`${colorClasses[index]} rounded-3xl p-10`}>
                <h3 className="text-2xl font-bold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg leading-relaxed">
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
