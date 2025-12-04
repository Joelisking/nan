import Container from '../shared/container';
import { Button } from '../ui/button';
import Link from 'next/link';

function CTABanner() {
  return (
    <Container>
      <section className="mt-32 mb-32">
        <div className="bg-linear-to-r from-secondary to-primary rounded-3xl p-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Stock Up?
          </h2>
          <p className="text-2xl text-white mb-8 max-w-3xl mx-auto">
            Contact our divisions today and discover how NAN can
            support your business growth
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Container>
  );
}

export default CTABanner;
