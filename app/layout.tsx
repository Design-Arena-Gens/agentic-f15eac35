import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-f15eac35.vercel.app'),
  title: {
    default: 'Conversion Copywriter | Words that Sell',
    template: '%s | Conversion Copywriter'
  },
  description:
    'Website and email copy that converts readers into loyal customers. Landing pages, sales pages, and brand messaging.',
  openGraph: {
    title: 'Conversion Copywriter',
    description:
      'Website and email copy that converts readers into loyal customers. Landing pages, sales pages, and brand messaging.',
    url: 'https://agentic-f15eac35.vercel.app',
    siteName: 'Conversion Copywriter',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
