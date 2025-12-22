import Container from '../shared/container';

function CareerHero() {
  return (
    <Container>
      <section className="mt-32">
        <div
          style={{
            backgroundImage: 'url("/careers/hero.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="h-[60vh] flex items-center rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="px-16 w-4/5 text-white relative z-10">
            <h1 className="text-5xl font-bold leading-tight">
              Join Our Growing Family
            </h1>
            <p className="mt-6 text-2xl leading-relaxed">
              Be part of Ghana&apos;s leading FMCG distribution
              company. Build your career with us and make an impact in
              the industry.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default CareerHero;
