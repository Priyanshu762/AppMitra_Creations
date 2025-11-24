import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AppMitra Creations | Digital Transformation & Tech Solutions",
    template: "%s | AppMitra Creations",
  },
  description:
    "AppMitra Creations offers top-tier web development, app development, SaaS products, and digital marketing services to transform your business.",
  keywords: [
    "Web Development",
    "App Development",
    "SaaS",
    "Digital Marketing",
    "Software Solutions",
    "AppMitra",
  ],
  authors: [{ name: "AppMitra Creations" }],
  creator: "AppMitra Creations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://appmitra.in",
    siteName: "AppMitra Creations",
    title: "AppMitra Creations | Digital Transformation & Tech Solutions",
    description:
      "Building the future of digital experiences with high-performance websites, apps, and software solutions.",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public
        width: 1200,
        height: 630,
        alt: "AppMitra Creations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppMitra Creations | Digital Transformation & Tech Solutions",
    description:
      "Building the future of digital experiences with high-performance websites, apps, and software solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://appmitra.in"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AppMitra Creations",
  url: "https://appmitra.in",
  logo: "https://appmitra.in/logo.png",
  description:
    "AppMitra Creations offers top-tier web development, app development, SaaS products, and digital marketing services.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@appmitra.in",
    contactType: "customer service",
  },
  sameAs: [
    "https://twitter.com/appmitra",
    "https://linkedin.com/company/appmitra",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
