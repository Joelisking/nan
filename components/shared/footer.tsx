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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
                <li>
                  <Link
                    href="/divisions#tradition"
                    className="text-white/80 hover:text-white transition-colors">
                    NAN Tradition Division
                  </Link>
                </li>
                <li>
                  <Link
                    href="/divisions#unilever"
                    className="text-white/80 hover:text-white transition-colors">
                    Unilever Distribution Division
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white/80 text-sm">
                    <strong>Phone:</strong>
                  </p>
                  <p className="text-white/80 text-sm">+233 32 202 5389</p>
                  <p className="text-white/80 text-sm">+233 32 203 0909</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm">
                    <strong>Email:</strong>
                  </p>
                  <p className="text-white/80 text-sm">info@nancompany.com</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm">
                    <strong>Address:</strong>
                  </p>
                  <p className="text-white/80 text-sm">
                    Asokwa Industrial Area, Kumasi, Ashanti Region, Ghana
                  </p>
                </div>
              </div>
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
