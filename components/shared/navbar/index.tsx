/**
 * NAN Company Limited Website - Navigation Component
 *
 * Developed by Joel Adu-Kwarteng
 * Portfolio: https://joelak.dev/
 *
 * Custom navigation system built by Joel Adu-Kwarteng.
 */

'use client';

import { useRef, useState } from 'react';
import Logo from './Logo';
import Links from './Links';
import MobileMenu from './MobileMenu';
import Buttons from './Buttons';
import Container from '../container';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <Links />
          <Buttons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Container>
    </nav>
  );
};

export default Navbar;
