import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NAN GH Limited',
  description: 'NAN GH Limited',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
