import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AthletiX - Sports Analytics Platform",
  description: "Professional sports analytics platform for tracking live games, analyzing teams and players.",
  keywords: "sports, analytics, basketball, football, baseball, hockey, soccer, NBA, NFL, MLB, NHL",
  authors: [{ name: "AthletiX Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body className="bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  );
}
