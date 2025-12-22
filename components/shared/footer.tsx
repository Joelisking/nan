import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Container from './container';
import { Icon } from '../ui/icon';
import ContactSection from './contact';

function Footer() {
  return (
    <div>
      <ContactSection />

      <footer className="bg-primary text-white py-16 mt-12 sm:mt-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Image
                src="/logo.png"
                alt="NAN Company Limited"
                width={120}
                height={120}
                className="mb-4"
              />
              <p className="text-white/80 leading-relaxed">
                Ghana&apos;s leading FMCG distributor, serving
                businesses with quality products and reliable service
                for over 30 years.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/divisions"
                    className="text-white/80 hover:text-white transition-colors">
                    Our Divisions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Our Divisions
              </h3>
              <ul className="space-y-2">
                <li className="text-white/80">
                  NAN Tradition Division
                </li>
                <li className="text-white/80">
                  Unilever Distribution Division
                </li>
              </ul>
            </div>
          </div>

          <Separator className="opacity-30 my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white/80 text-sm">
                Copyright © 2025 NAN Company Limited. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" target="_blank">
                <Icon
                  name="Facebook"
                  color="white"
                  className="w-5 h-5"
                />
              </Link>
              <Link href="#" target="_blank">
                <Icon
                  name="Instagram"
                  color="white"
                  className="w-5 h-5"
                />
              </Link>
              <Link href="#" target="_blank">
                <Icon
                  name="Linkedin"
                  color="white"
                  className="w-5 h-5"
                />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
