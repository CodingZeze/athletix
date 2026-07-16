import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AthletiX - Sports Analytics Platform',
  description: 'Professional sports analytics platform for tracking games and analyzing teams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
