function Info() {
  return (
    <div className="bg-primary text-white rounded-3xl w-full lg:w-1/2 p-8 md:p-12 flex flex-col">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
        Get in Touch
      </h2>

      <div className="space-y-6">
        <div className="flex flex-col font-light space-y-6">
          <div className="flex flex-col">
            <span className="font-bold text-xl mb-2">Phone:</span>
            <div className="flex flex-col space-y-1">
              <span className="text-lg">+233 32 202 6224</span>
              <span className="text-lg">+233 24 485 9695</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-xl mb-2">Email:</span>
            <span className="font-light text-lg">
              info@nancompany.com
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-xl mb-2">Address:</span>
            <span className="font-light text-lg">
              Asokwa Industrial Area, Kumasi, Ashanti Region, Ghana
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-xl mb-2">
              Business Hours:
            </span>
            <div className="flex flex-col space-y-1">
              <span className="text-lg">
                Monday - Friday: 8:00 AM - 5:00 PM
              </span>
              <span className="text-lg">
                Saturday: 8:00 AM - 2:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-white/90 text-lg leading-relaxed">
        <p>
          Whether you're a wholesaler, retailer, hotel, restaurant, or
          institution, we're here to support your business with
          reliable distribution services and quality products.
        </p>
      </div>
    </div>
  );
}

export default Info;
