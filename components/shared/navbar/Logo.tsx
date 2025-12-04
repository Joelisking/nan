'use client';

/* eslint-disable @next/next/no-img-element */
import logo from '@/public/logo.png';
import Link from 'next/link';

const Logo = () => (
  <div className="">
    <Link href={'/'}>
      <img
        src={logo.src.toString()}
        width={100}
        height={100}
        alt="NAN GH"
        className="w-12"
      />
    </Link>
  </div>
);

export default Logo;
