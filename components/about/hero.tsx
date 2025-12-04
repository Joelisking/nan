import Container from '../shared/container';

function AboutHero() {
  return (
    <Container>
      <section className="mt-32">
        <div
          style={{
            backgroundImage: 'url("/about/hero.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="h-[60vh] flex items-center rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="px-16 w-4/5 text-white relative z-10">
            <h1 className="text-6xl font-extrabold leading-tight">
              Family Values. Professional Excellence.
            </h1>
            <p className="mt-6 text-2xl leading-relaxed">
              NAN Company Limited is Ghana&apos;s leading fast-moving
              consumer goods (FMCG) distributor, headquartered in
              Asokwa, Kumasi.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
export default AboutHero;
