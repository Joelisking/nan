import Container from '../shared/container';

const MissionVisionSection = () => (
  <Container>
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mt-32"
      id="mission">
      {/* Mission Section */}
      <div className="md:col-span-1 bg-secondary flex flex-col text-white p-6 md:p-9 rounded-3xl mb-4 md:mb-0">
        <div></div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
          Who We Are
        </h2>
        <div>
          <p className="font-light mt-2 md:text-lg">
            NAN Company Limited is Ghana&apos;s premier FMCG
            distribution company, headquartered in the Asokwa
            Industrial Area of Kumasi, Ashanti Region. We are proud to
            serve as the leading distributor of quality consumer goods
            to wholesalers, retailers, restaurants, hotels, and
            institutions across the nation. As the #1 Unilever
            distributor in Ashanti and beyond, we combine local
            expertise with international standards to deliver
            exceptional service and product availability.
          </p>
        </div>
      </div>
      {/* Company Overview + Vision Section */}
      <div className="md:col-span-3 flex flex-col h-full overflow-hidden">
        <div
          className="flex-1 min-h-[180px] md:min-h-0 relative rounded-3xl overflow-hidden flex items-center text-white p-4 sm:p-8 md:p-12"
          style={{
            backgroundImage: 'url(/about/mission.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="flex flex-col w-full md:w-4/5 lg:w-5/6 relative z-10">
            <span className="text-2xl font-bold leading-tight">
              Our Mission
            </span>

            <div className="mt-8 space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed font-light">
                To deliver quality consumer goods efficiently and
                reliably to wholesalers, retailers, restaurants,
                hotels, and institutions, while building lasting
                partnerships based on trust, integrity, and mutual
                success.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 mt-2 p-6 md:p-9 rounded-3xl">
          <h3 className="text-lg md:text-2xl font-bold text-primary">
            Our Vision
          </h3>
          <p className="font-light mt-2 text-primary md:text-base">
            To be Ghana's most trusted and innovative FMCG
            distributor, setting the standard for service delivery and
            empowering businesses through consistent supply of
            everyday essentials.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default MissionVisionSection;
