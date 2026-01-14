function Info() {
  return (
    <div className="bg-primary text-white rounded-2xl md:rounded-3xl w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8">
        Get in Touch
      </h2>

      <div className="space-y-4 md:space-y-6">
        <div className="flex flex-col font-light space-y-4 md:space-y-6">
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl mb-2">Phone:</span>
            <div className="flex flex-col space-y-1">
              <span className="text-base md:text-lg">+233 32 202 5389</span>
              <span className="text-base md:text-lg">+233 32 203 0909</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl mb-2">Email:</span>
            <span className="font-light text-base md:text-lg">
              info@nancompany.com
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl mb-2">Address:</span>
            <span className="font-light text-base md:text-lg">
              Asokwa Industrial Area, Kumasi, Ashanti Region, Ghana
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl mb-2">
              Digital Address:
            </span>
            <span className="font-light text-base md:text-lg">AK-240-1676</span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl mb-2">
              Business Hours:
            </span>
            <div className="flex flex-col space-y-1">
              <span className="text-base md:text-lg">
                Monday - Friday: 7:00 AM - 6:00 PM
              </span>
              <span className="text-base md:text-lg">
                Saturday: 7:30 AM - 6:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-10 text-white/90 text-base md:text-lg leading-relaxed">
        <p>
          Whether you&apos;re a wholesaler, retailer, hotel,
          restaurant, or institution, we&apos;re here to support your
          business with reliable distribution services and quality
          products.
        </p>
      </div>
    </div>
  );
}

export default Info;
