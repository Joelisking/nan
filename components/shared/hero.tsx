import Container from './container';

function Hero() {
  return (
    <Container>
      <section className="bg-primary px-12 py-16 rounded-3xl mt-32">
        <div className="w-4/5">
          <span className="px-4 py-2 text-sm text-primary bg-white rounded-full font-medium">
            Our Divisions
          </span>
          <h1 className="text-6xl font-extrabold text-white mt-6 leading-tight">
            Two Specialized Divisions
          </h1>
          <p className="text-white mt-4 text-xl leading-relaxed">
            NAN Company Limited is Ghana&apos;s leading fast-moving
            consumer goods (FMCG) distributor, headquartered in
            Asokwa, Kumasi.
          </p>
        </div>
      </section>
    </Container>
  );
}

export default Hero;
