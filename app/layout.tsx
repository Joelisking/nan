import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import { Toaster } from 'sonner';

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
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
