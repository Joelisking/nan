import Container from '../shared/container';
import { Icon, LucideIconProps } from '../ui/icon';

const CoreValues = () => {
  const values: Array<{
    title: string;
    description: string;
    id: string;
    icon: LucideIconProps;
  }> = [
    {
      title: 'Reliability',
      description:
        'Consistent delivery and service excellence for 30 years and counting.',
      id: '01',
      icon: 'Shield',
    },
    {
      title: 'Integrity',
      description:
        'Honest and transparent business practices are our hallmark.',
      id: '02',
      icon: 'Heart',
    },
    {
      title: 'Innovation',
      description:
        'We continuously improve our operations to provide the best quality of service.',
      id: '03',
      icon: 'Lightbulb',
    },
    {
      title: 'Community',
      description:
        'We serve Ghanaian families and businesses all over the country.',
      id: '04',
      icon: 'Users',
    },
    {
      title: 'Excellence',
      description:
        'We maintain higher standards in all our divisions and in everything we do.',
      id: '05',
      icon: 'Target',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-linear-to-r from-secondary to-primary relative mt-20 md:mt-28 lg:mt-32">
      <Container className="relative z-10">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Our Core Values
          </h2>
          <div className="w-16 md:w-20 h-1 bg-white mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl text-white">
            These are the principles that guide every decision we
            make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {values.slice(0, 3).map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6">
                <Icon name={value.icon} className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {values.slice(3).map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6">
                <Icon name={value.icon} className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
