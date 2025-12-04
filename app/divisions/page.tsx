import Tradition from '@/components/divisions/tradition';
import Unilever from '@/components/divisions/unilever';
import Hero from '@/components/shared/hero';
import CompleteCoverage from '@/components/divisions/complete-coverage';
import CTABanner from '@/components/divisions/cta-banner';

function Divisions() {
  return (
    <main>
      <Hero />
      <Tradition />
      <Unilever />
      <CompleteCoverage />
      <CTABanner />
    </main>
  );
}

export default Divisions;
