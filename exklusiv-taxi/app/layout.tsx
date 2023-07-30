import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skåne Exklusiv Taxi Lund',
  description:
    'Skåne Exklusiv Taxi – Premiumtaxi i Lund med din bästa väg till prisvärd taxi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='sv'>
      <body>{children}</body>
    </html>
  );
}
