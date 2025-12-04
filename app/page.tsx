import Divisions from '@/components/home/divisions';
import Hero from '@/components/home/hero';
import ServingAshanti from '@/components/home/serving-ashanti';
import Stats from '@/components/home/stats';
import Container from '@/components/shared/container';

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Stats />
        <Divisions />
        <ServingAshanti />
      </Container>
    </main>
  );
}
