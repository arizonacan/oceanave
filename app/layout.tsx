import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";

// FONTS
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

// METADATA
export const metadata: Metadata = {
  title: "Ocean Avenue Consulting | Premium Web Design Hampton Bays",
  description: "Silicon Valley-grade digital infrastructure for Hampton Bays businesses. Next.js engineering. No templates. Book your audit today.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Ocean Avenue Consulting",
    description: "Premium Digital Infrastructure for the Hamptons.",
    url: "https://oceanaveconsulting.com",
    siteName: "Ocean Avenue Consulting",
    images: [
      {
        url: "/oceanwater.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// THE SCHEMA (Updated for Saturdays)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Ocean Avenue Consulting",
  "image": "https://oceanaveconsulting.com/logo.png",
  "description": "Premium web design and digital infrastructure for Hampton Bays businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hampton Bays",
    "addressRegion": "NY",
    "postalCode": "11946",
    "addressCountry": "US"
  },
  "url": "https://oceanaveconsulting.com",
  "priceRange": "$$$",
  // CHANGED: Now an Array [] to handle different days
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bodoni.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}